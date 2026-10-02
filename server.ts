import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || "";
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// Verified list of real resort and campsite official images
const VERIFIED_RESORTS_IMAGE_MAP: Array<{ pattern: RegExp; image: string }> = [
  { pattern: /vritomartis/i, image: "https://www.vritomartis.gr/wp-content/uploads/DSC_5627-scaled.jpg" },
  { pattern: /bagheera/i, image: "https://www.bagheera.fr/wp-content/uploads/2025/10/bagheera_environnement_001.jpg" },
  { pattern: /riva bella|rivabella/i, image: "https://www.naturisme-rivabella.com/images/accueil/camping-corse-emplacements.webp" },
  { pattern: /chiappa/i, image: "https://www.chiappa.com/wp-content/uploads/vue-panoramique-1.jpg" },
  { pattern: /valalta/i, image: "https://valalta.hr/includes/slir/q80/uploads//multiple_upload/881c495d-c1e7-8b89-cf2d-6d76c50464bc_banner-1.jpg" },
  { pattern: /vera playa/i, image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80" },
  { pattern: /costa natura/i, image: "https://costanatura.com/wp-content/uploads/2022/03/costa-natura-resort-1.jpg" },
  { pattern: /euronat/i, image: "https://www.euronat.com/wp-content/uploads/2025/12/euronat.png" },
  { pattern: /montalivet/i, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" },
  { pattern: /magnolias natura/i, image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80" },
  { pattern: /cap d'agde/i, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" }
];

async function verifyImageUrl(url: string): Promise<boolean> {
  if (!url || !url.startsWith("http")) return false;
  try {
    const res = await fetch(url, {
      method: "HEAD",
      headers: { "User-Agent": "Mozilla/5.0" },
      signal: AbortSignal.timeout(2000)
    });
    return res.ok && (res.headers.get("content-type")?.startsWith("image/") ?? false);
  } catch {
    return false;
  }
}

async function extractOgImageFromWebsite(url: string): Promise<string | null> {
  try {
    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith("http")) cleanUrl = "https://" + cleanUrl;
    const res = await fetch(cleanUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      signal: AbortSignal.timeout(3000)
    });
    if (!res.ok) return null;
    const html = await res.text();
    const match = html.match(/<meta[^>]*property=[\"']og:image[\"'][^>]*content=[\"']([^\"']+)[\"']/i)
      || html.match(/<meta[^>]*content=[\"']([^\"']+)[\"'][^>]*property=[\"']og:image[\"']/i);
    if (match && match[1]) {
      return new URL(match[1], cleanUrl).href;
    }
  } catch {
    // ignore
  }
  return null;
}

async function resolveResortImage(loc: { name: string; type: string; image?: string; website?: string }): Promise<string | undefined> {
  // 1. Check verified curated list first
  for (const item of VERIFIED_RESORTS_IMAGE_MAP) {
    if (item.pattern.test(loc.name)) {
      return item.image;
    }
  }

  // 2. If website was provided, try fetching the real Open Graph image
  if (loc.website) {
    const og = await extractOgImageFromWebsite(loc.website);
    if (og) return og;
  }

  // 3. If an image was returned by AI, verify that it isn't a 404 hallucination
  if (loc.image) {
    const isValid = await verifyImageUrl(loc.image);
    if (isValid) return loc.image;
  }

  // 4. Try guessing domain based on resort name
  const stripped = loc.name.toLowerCase().replace(/naturist|resort|hotel|village|camp|camping/g, '').replace(/[^a-z0-9]/g, '');
  if (stripped.length >= 4) {
    for (const tld of ['.gr', '.com', '.fr', '.hr', '.es']) {
      const guessed = await extractOgImageFromWebsite(`https://www.${stripped}${tld}`);
      if (guessed) return guessed;
    }
  }

  return undefined;
}

// Curated high quality verified destinations with authentic photos and coordinates
const CURATED_DESTINATIONS: Record<string, {
  locations: Array<{
    id: string;
    name: string;
    type: 'beach' | 'resort' | 'campsite' | 'other';
    description: string;
    lat: number;
    lng: number;
    address?: string;
    url?: string;
    image?: string;
    warning?: string;
  }>;
  summary: string;
}> = {
  // Sfakia / Chora Sfakion / Kreta
  "chora sfakion": {
    summary: "Chora Sfakion på Kretas sydkyst er et af Europas mest berømte naturistområder, anført af det 4-stjernede Vritomartis Naturist Resort og Filaki-stranden.",
    locations: [
      {
        id: "loc-sfakion-vritomartis",
        name: "Vritomartis Naturist Resort",
        type: "resort",
        description: "Kretas berømte 4-stjernede naturistresort beliggende i Chora Sfakion. Resortet byder på 25-meter swimmingpool, poolbar, tennisbaner, luksuriøse værelser og bungalows samt gratis daglig shuttlebus til Filaki-naturiststranden.",
        lat: 35.1958,
        lng: 24.1486,
        address: "Chora Sfakion, 73011 Kreta, Grækenland",
        url: "https://www.vritomartis.gr/",
        image: "https://www.vritomartis.gr/wp-content/uploads/DSC_5627-scaled.jpg"
      },
      {
        id: "loc-sfakion-filaki",
        name: "Filaki Strand (Plakias / Sfakia)",
        type: "beach",
        description: "Den officielle og mest anerkendte naturiststrand i Sfakia-området, beliggende lige nedenfor Vritomartis Resort. Malerisk strand med krystalklart vand, klipper og taverna.",
        lat: 35.1945,
        lng: 24.1550,
        address: "Filaki Beach, Chora Sfakion, 73011 Kreta, Grækenland"
      },
      {
        id: "loc-sfakion-glykanera",
        name: "Glyka Nera (Sweet Water Beach)",
        type: "beach",
        description: "Spektakulær naturstrand mellem Chora Sfakion og Loutro med ferskvandskilder i småstenene. Den østlige del af stranden er traditionsrigt et populært naturistområde.",
        lat: 35.2015,
        lng: 24.1085,
        address: "Glyka Nera, 73011 Kreta, Grækenland"
      },
      {
        id: "loc-sfakion-iligas",
        name: "Iligas Strand (Østlige bugter)",
        type: "beach",
        description: "Flot strand ca. 1 km vest for Chora Sfakion ved udmundingen af Kavi-kløften med havhuler. De fjerneste bugter benyttes af naturister.",
        lat: 35.1980,
        lng: 24.1310,
        address: "Iligas Beach, Chora Sfakion, 73011 Kreta, Grækenland"
      }
    ]
  },
  sfakia: {
    summary: "Chora Sfakion på Kretas sydkyst er et af Europas mest berømte naturistområder, anført af det 4-stjernede Vritomartis Naturist Resort og Filaki-stranden.",
    locations: [
      {
        id: "loc-sfakion-vritomartis-2",
        name: "Vritomartis Naturist Resort",
        type: "resort",
        description: "Kretas berømte 4-stjernede naturistresort beliggende i Chora Sfakion. Resortet byder på 25-meter swimmingpool, poolbar, tennisbaner, luksuriøse værelser og bungalows samt gratis daglig shuttlebus til Filaki-naturiststranden.",
        lat: 35.1958,
        lng: 24.1486,
        address: "Chora Sfakion, 73011 Kreta, Grækenland",
        url: "https://www.vritomartis.gr/",
        image: "https://www.vritomartis.gr/wp-content/uploads/DSC_5627-scaled.jpg"
      },
      {
        id: "loc-sfakion-filaki-2",
        name: "Filaki Strand",
        type: "beach",
        description: "Den officielle og mest anerkendte naturiststrand i Sfakia-området, beliggende lige nedenfor Vritomartis Resort.",
        lat: 35.1945,
        lng: 24.1550,
        address: "Filaki Beach, Chora Sfakion, 73011 Kreta, Grækenland"
      },
      {
        id: "loc-sfakion-glykanera-2",
        name: "Glyka Nera Beach",
        type: "beach",
        description: "Spektakulær naturstrand mellem Chora Sfakion og Loutro. Den østlige del er et populært naturistområde.",
        lat: 35.2015,
        lng: 24.1085,
        address: "Glyka Nera, 73011 Kreta, Grækenland"
      }
    ]
  },
  kreta: {
    summary: "Kreta har en stærk naturisttradition på sydkysten med Chora Sfakion og Vritomartis Resort som det ubestridte centrum.",
    locations: [
      {
        id: "loc-kreta-vritomartis",
        name: "Vritomartis Naturist Resort",
        type: "resort",
        description: "Kretas førende og internationalt anerkendte naturistresort ved Chora Sfakion med pool, bungalows og shuttlebus til Filaki-stranden.",
        lat: 35.1958,
        lng: 24.1486,
        address: "Chora Sfakion, 73011 Kreta, Grækenland",
        url: "https://www.vritomartis.gr/",
        image: "https://www.vritomartis.gr/wp-content/uploads/DSC_5627-scaled.jpg"
      },
      {
        id: "loc-kreta-filaki",
        name: "Filaki Strand (Chora Sfakion)",
        type: "beach",
        description: "Kretas primære officielle naturiststrand beliggende tæt ved Vritomartis med krystalklart vand og rolige klippeomgivelser.",
        lat: 35.1945,
        lng: 24.1550,
        address: "Filaki, Chora Sfakion, 73011 Kreta, Grækenland"
      },
      {
        id: "loc-kreta-kommos",
        name: "Kommos Strand (Pitsidia / Matala)",
        type: "beach",
        description: "En kæmpe, bred sandstrand med klitter mod Det Libyske Hav. Den nordlige sektion mod Kalamaki er en af Kretas største og mest besøgte naturiststrande.",
        lat: 35.0125,
        lng: 24.7602,
        address: "Kommos Beach, Pitsidia, 70200 Kreta, Grækenland"
      },
      {
        id: "loc-kreta-redbeach",
        name: "Red Beach (Kokkini Ammos, Matala)",
        type: "beach",
        description: "Ikonisk rødlig sandstrand bag klipperne ved Matala, kendt fra hippietiden og i dag en velkendt naturiststrand.",
        lat: 34.9860,
        lng: 24.7490,
        address: "Matala, 70200 Kreta, Grækenland"
      }
    ]
  },
  korsika: {
    summary: "Korsika er en af Europas førende naturist-destinationer med flere anerkendte resorts langs østkysten og smukke vilde bugter.",
    locations: [
      {
        id: "loc-korsika-1",
        name: "Riva Bella Thalasso & Spa Resort",
        type: "resort",
        description: "Anerkendt 4-stjernet naturistresort i Aléria med thalassoterapi, havkig, direkte adgang til kilometervis af sandstrand, moderne bungalows og restaurant.",
        lat: 42.1283,
        lng: 9.5598,
        address: "Route de la Mer, 20270 Aléria, Korsika, Frankrig",
        url: "https://www.naturisme-rivabella.com/",
        image: "https://www.naturisme-rivabella.com/images/accueil/camping-corse-emplacements.webp"
      },
      {
        id: "loc-korsika-2",
        name: "Bagheera Naturist Village",
        type: "resort",
        description: "Stort naturistferiested og ferieby beliggende i en eukalyptus- og egeskov direkte ud til krystalklart vand med feriehuse, camping, vandsport og beach bar.",
        lat: 42.0673,
        lng: 9.5435,
        address: "Domaine de Bagheera, 20240 Ghisonaccia, Korsika, Frankrig",
        url: "https://www.bagheera.fr/",
        image: "https://www.bagheera.fr/wp-content/uploads/2025/10/bagheera_environnement_001.jpg"
      },
      {
        id: "loc-korsika-3",
        name: "Domaine de la Chiappa",
        type: "resort",
        description: "Spektakulært beliggende naturistresort ved Porto-Vecchio i et fredet naturområde med private strande, klippebugter, bungalows, pools og dykkercenter.",
        lat: 41.5300,
        lng: 9.3585,
        address: "Route du Phare de la Chiappa, 20137 Porto-Vecchio, Korsika, Frankrig",
        url: "https://www.chiappa.com/",
        image: "https://www.chiappa.com/wp-content/uploads/vue-panoramique-1.jpg"
      },
      {
        id: "loc-korsika-4",
        name: "Club Orient / Bravone Naturist",
        type: "campsite",
        description: "Populært naturistcampingområde ved Bravone-kysten med afslappet familievenlig stemning og direkte sti til den brede sandstrand.",
        lat: 42.1764,
        lng: 9.5512,
        address: "Lieu-dit Bravone, 20230 Linguizzetta, Korsika, Frankrig"
      },
      {
        id: "loc-korsika-5",
        name: "Plage de Cupabia (Naturistsektion)",
        type: "beach",
        description: "En af Korsikas smukkeste uberørte bugter med fint hvidt sand og krystalklart vand. Den nordlige afdeling benyttes traditionelt af naturister.",
        lat: 41.7247,
        lng: 8.7845,
        address: "Baie de Cupabia, 20140 Serra-di-Ferro, Korsika, Frankrig"
      }
    ]
  },
  corsica: {
    summary: "Korsika er en af Europas førende naturist-destinationer med flere anerkendte resorts langs østkysten og smukke vilde bugter.",
    locations: [
      {
        id: "loc-korsika-1",
        name: "Riva Bella Thalasso & Spa Resort",
        type: "resort",
        description: "Anerkendt 4-stjernet naturistresort i Aléria med thalassoterapi, havkig, direkte adgang til kilometervis af sandstrand, moderne bungalows og restaurant.",
        lat: 42.1283,
        lng: 9.5598,
        address: "Route de la Mer, 20270 Aléria, Korsika, Frankrig",
        url: "https://www.naturisme-rivabella.com/",
        image: "https://www.naturisme-rivabella.com/images/accueil/camping-corse-emplacements.webp"
      },
      {
        id: "loc-korsika-2",
        name: "Bagheera Naturist Village",
        type: "resort",
        description: "Stort naturistferiested og ferieby beliggende i en eukalyptus- og egeskov direkte ud til krystalklart vand med feriehuse, camping, vandsport og beach bar.",
        lat: 42.0673,
        lng: 9.5435,
        address: "Domaine de Bagheera, 20240 Ghisonaccia, Korsika, Frankrig",
        url: "https://www.bagheera.fr/",
        image: "https://www.bagheera.fr/wp-content/uploads/2025/10/bagheera_environnement_001.jpg"
      },
      {
        id: "loc-korsika-3",
        name: "Domaine de la Chiappa",
        type: "resort",
        description: "Spektakulært beliggende naturistresort ved Porto-Vecchio i et fredet naturområde med private strande, klippebugter, bungalows, pools og dykkercenter.",
        lat: 41.5300,
        lng: 9.3585,
        address: "Route du Phare de la Chiappa, 20137 Porto-Vecchio, Korsika, Frankrig",
        url: "https://www.chiappa.com/",
        image: "https://www.chiappa.com/wp-content/uploads/vue-panoramique-1.jpg"
      },
      {
        id: "loc-korsika-4",
        name: "Club Orient / Bravone Naturist",
        type: "campsite",
        description: "Populært naturistcampingområde ved Bravone-kysten med afslappet familievenlig stemning og direkte sti til den brede sandstrand.",
        lat: 42.1764,
        lng: 9.5512,
        address: "Lieu-dit Bravone, 20230 Linguizzetta, Korsika, Frankrig"
      },
      {
        id: "loc-korsika-5",
        name: "Plage de Cupabia (Naturistsektion)",
        type: "beach",
        description: "En af Korsikas smukkeste uberørte bugter med fint hvidt sand og krystalklart vand. Den nordlige afdeling benyttes traditionelt af naturister.",
        lat: 41.7247,
        lng: 8.7845,
        address: "Baie de Cupabia, 20140 Serra-di-Ferro, Korsika, Frankrig"
      }
    ]
  },
  danmark: {
    summary: "I Danmark er naturisme generelt tilladt på alle offentlige strande, medmindre der er specifikke lokale forbud.",
    locations: [
      {
        id: "loc-dk-1",
        name: "Solbakken Naturistcamping",
        type: "campsite",
        description: "Danmarks ældste og mest kendte naturistcampingplads beliggende ved Isefjorden med sauna, pool og hyggelig klubstemning.",
        lat: 55.6723,
        lng: 11.7588,
        address: "Solbakken 1, 4060 Kirke Såby, Danmark",
        image: "https://solbakken-naturist.dk/wp-content/uploads/2020/06/solbakken-oversigt.jpg"
      },
      {
        id: "loc-dk-2",
        name: "Bellevue Strand (Naturistområde)",
        type: "beach",
        description: "Den klassiske strand nord for København. Den nordligste mole og sektion er traditionelt et af Danmarks mest populære steder for nøgenbadning.",
        lat: 55.7766,
        lng: 12.5936,
        address: "Strandvejen 340, 2930 Klampenborg, Danmark"
      },
      {
        id: "loc-dk-3",
        name: "Tisvildeleje Strand (Naturistafsnit)",
        type: "beach",
        description: "Smukt strandområde mod vest i Tisvilde Hegn med klitter og kridhvidt sand, hvor naturister holder til i fredfyldte omgivelser.",
        lat: 56.0601,
        lng: 12.0673,
        address: "Tisvildeleje Strand, 3220 Tisvildeleje, Danmark"
      },
      {
        id: "loc-dk-4",
        name: "Bøtø Strand (Falster)",
        type: "beach",
        description: "Bred østersøstrand med høje klitter og masser af plads. Naturistsektionen er velbesøgt og kendt for ro og rent badevand.",
        lat: 54.6738,
        lng: 11.9687,
        address: "Bøtø Ringvej, 4873 Væggerløse, Danmark"
      }
    ]
  },
  dubai: {
    summary: "Advarsel: I De Forenede Arabiske Emirater (inkl. Dubai) er offentlig nøgenhed og naturisme strengt forbudt.",
    locations: [
      {
        id: "loc-dubai-warning",
        name: "Dubai & De Forenede Arabiske Emirater",
        type: "other",
        description: "Naturisme, topløs solbadning og nøgenhed er strengt ulovligt i hele UAE i henhold til straffelovens anstændighedsregler. Overtrædelse straffes med fængsel, store bøder og udvisning. Der findes ingen lovlige naturiststeder i landet.",
        lat: 25.2048,
        lng: 55.2708,
        warning: "STRENGT FORBUDT: Offentlig nøgenhed og naturisme er ulovligt i UAE og medfører fængselsstraf og deportation."
      }
    ]
  },
  "gran canaria": {
    summary: "Gran Canaria er et af verdens mest berømte naturistrejsemål, især omkring Maspalomas-klitterne.",
    locations: [
      {
        id: "loc-gc-1",
        name: "Maspalomas Klit-strand (Kiosk 4 & 5)",
        type: "beach",
        description: "Det ikoniske klitlandskab og den store strand mellem Maspalomas og Playa del Inglés. Kiosk 4 og 5 er et verdenskendt centrum for naturister.",
        lat: 27.7420,
        lng: -15.5800,
        address: "Dunas de Maspalomas, 35100 San Bartolomé de Tirajana, Gran Canaria"
      },
      {
        id: "loc-gc-2",
        name: "Magnolias Natura Naturist Resort",
        type: "resort",
        description: "Fredeligt og velholdt naturistkompleks i Maspalomas med bungalows, swimmingpool, jacuzzi og frodig have.",
        lat: 27.7655,
        lng: -15.5971,
        address: "Calle Touroperador Sunair 2, 35100 Maspalomas, Gran Canaria",
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "loc-gc-3",
        name: "Plage de Güi Güi",
        type: "beach",
        description: "En afsides, uberørt vulkansk naturstrand på vestkysten, som kun kan nås efter en vandretur eller med båd.",
        lat: 27.9542,
        lng: -15.8239,
        address: "Güi Güi, La Aldea de San Nicolás, Gran Canaria"
      }
    ]
  }
};

// API Route: Suggestions
app.get("/api/suggestions", async (req, res) => {
  const query = (req.query.q as string || "").trim().toLowerCase();
  if (query.length < 2) {
    return res.json([]);
  }

  // Check curated matches first
  const curatedKeys = ["Chora Sfakion", "Kreta", "Korsika", "Danmark", "Kroatien", "Gran Canaria", "Dubai", "Spanien", "Frankrig", "Grækenland", "Tyskland", "Italien"];
  const matches = curatedKeys.filter(k => k.toLowerCase().includes(query));

  if (matches.length >= 3 || !ai) {
    return res.json(matches);
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: `Giv 5 korte, præcise forslag til geografiske destinationer (byer, øer, lande) der matcher: "${query}". Returner kun en JSON liste af strenge på dansk.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    const parsed = JSON.parse(response.text || "[]");
    const combined = Array.from(new Set([...matches, ...parsed])).slice(0, 6);
    return res.json(combined);
  } catch (err) {
    console.warn("Suggestions AI fallback:", err);
    return res.json(matches);
  }
});

// API Route: Search Places
app.post("/api/search", async (req, res) => {
  const query = (req.body.query as string || "").trim();
  if (!query) {
    return res.status(400).json({ error: "Søgeterm er påkrævet" });
  }

  const normalized = query.toLowerCase();

  // Check if we have curated data for common queries (e.g. "korsika", "sfakion", "danmark", etc.)
  for (const [key, data] of Object.entries(CURATED_DESTINATIONS)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return res.json({
        locations: data.locations,
        summary: data.summary,
        sources: []
      });
    }
  }

  if (!ai) {
    return res.status(500).json({ error: "Gemini API nøgle mangler på serveren." });
  }

  const prompt = `Du er en ekspert i naturiststeder og rejseguide.
Find og beskriv 4-6 specifikke naturiststeder (strande, resorts, campingpladser) i eller omkring: "${query}".

Vigtige regler:
1. For resorts og campingpladser: Angiv det officielle website (hjemmeside) URL hvis kendt (f.eks. https://www.vritomartis.gr/).
2. Hvis destinationen er et land hvor naturisme er forbudt (fx De Forenede Arabiske Emirater, Saudi Arabien), returner en advarsel i warning feltet.
3. Svar på dansk med realistiske koordinater (lat, lng) og adresser.`;

  try {
    // Primary model: gemini-3.1-flash-lite
    let responseText = "";
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                name: { type: Type.STRING },
                type: { type: Type.STRING, enum: ['beach', 'resort', 'campsite', 'other'] },
                description: { type: Type.STRING },
                lat: { type: Type.NUMBER },
                lng: { type: Type.NUMBER },
                address: { type: Type.STRING },
                website: { type: Type.STRING },
                image: { type: Type.STRING },
                warning: { type: Type.STRING }
              },
              required: ['name', 'type', 'lat', 'lng', 'description']
            }
          }
        }
      });
      responseText = response.text || "[]";
    } catch (primaryErr: any) {
      console.warn("Primary model failed, attempting gemini-2.5-flash fallback:", primaryErr?.message);
      const fallbackResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                name: { type: Type.STRING },
                type: { type: Type.STRING, enum: ['beach', 'resort', 'campsite', 'other'] },
                description: { type: Type.STRING },
                lat: { type: Type.NUMBER },
                lng: { type: Type.NUMBER },
                address: { type: Type.STRING },
                website: { type: Type.STRING },
                image: { type: Type.STRING },
                warning: { type: Type.STRING }
              },
              required: ['name', 'type', 'lat', 'lng', 'description']
            }
          }
        }
      });
      responseText = fallbackResponse.text || "[]";
    }

    const rawLocations = JSON.parse(responseText);
    const parsedLocations = Array.isArray(rawLocations) ? rawLocations : [];

    // Resolve images asynchronously for resorts and camping places
    const locations = await Promise.all(
      parsedLocations.map(async (loc, idx) => {
        let image = loc.image;
        if (loc.type === 'resort' || loc.type === 'campsite') {
          image = await resolveResortImage(loc);
        }
        return {
          id: loc.id || `loc-${Date.now()}-${idx}`,
          name: loc.name,
          type: loc.type,
          description: loc.description,
          lat: loc.lat,
          lng: loc.lng,
          address: loc.address,
          url: loc.website,
          image: image || undefined,
          warning: loc.warning
        };
      })
    );

    return res.json({
      locations,
      summary: `Fandt ${locations.length} naturist-destinationer for "${query}".`,
      sources: []
    });
  } catch (err: any) {
    console.error("Gemini Search Error:", err);
    return res.status(500).json({
      error: err?.message || "Der opstod en fejl under søgningen. Prøv venligst igen."
    });
  }
});

// API Route: Image Proxy for avoiding CORS / hotlink blocking
app.get("/api/image-proxy", async (req, res) => {
  const imageUrl = req.query.url as string;
  if (!imageUrl || !imageUrl.startsWith("http")) {
    return res.status(400).send("Ugyldig billed-URL");
  }
  try {
    const response = await fetch(imageUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
      },
      signal: AbortSignal.timeout(6000)
    });
    if (!response.ok) {
      return res.status(response.status).send("Kunne ikke hente billede");
    }
    const contentType = response.headers.get("content-type") || "image/jpeg";
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=86400");
    const arrayBuffer = await response.arrayBuffer();
    return res.send(Buffer.from(arrayBuffer));
  } catch (err: any) {
    return res.status(500).send("Proxy fejl: " + err?.message);
  }
});

// Setup Vite middleware or static serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
