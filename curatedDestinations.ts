import { NaturistLocation, SearchResult } from "./types";

export interface ExtendedNaturistLocation extends NaturistLocation {
  country: string;
  region: string;
  keywords?: string[];
}

export const ALL_LOCATIONS_DATABASE: ExtendedNaturistLocation[] = [
  // ==========================================
  // MENORCA (Balearerne, Spanien)
  // ==========================================
  {
    id: "loc-menorca-macarelleta",
    name: "Cala Macarelleta (Menorca)",
    type: "beach",
    country: "Spanien",
    region: "Menorca",
    keywords: ["menorca", "ciutadella", "macarella", "macarelleta", "balearerne", "spanien", "strand", "bugt"],
    description: "Menorcas måske mest berømte postkort-bugt med kridhvidt sand og krystalklart turkisblåt hav omkranset af duftende fyrretræer. Den lille nabobugt Macarelleta er et historisk elsket naturistparadis.",
    lat: 39.9328,
    lng: 3.9356,
    address: "Cala Macarelleta, 07750 Ciutadella de Menorca, Balearerne, Spanien",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "loc-menorca-trebaluger",
    name: "Cala Trebalúger (Menorca)",
    type: "beach",
    country: "Spanien",
    region: "Menorca",
    keywords: ["menorca", "trebaluger", "trebalúger", "es migjorn gran", "balearerne", "spanien", "strand", "natur"],
    description: "En fuldstændig uspoleret, fredet naturstrand på sydkysten ved udmundingen af en lille flod. Nås via Camí de Cavalls kyststien (ca. 40 min vandring) eller båd, hvilket giver sublim fred og naturistfrihed.",
    lat: 39.9272,
    lng: 3.9915,
    address: "Cala Trebalúger, 07749 Es Migjorn Gran, Menorca, Spanien"
  },
  {
    id: "loc-menorca-pregonda",
    name: "Cala Pregonda (Menorca Nordkyst)",
    type: "beach",
    country: "Spanien",
    region: "Menorca",
    keywords: ["menorca", "pregonda", "es mercadal", "balearerne", "spanien", "nordkyst", "strand"],
    description: "Spektakulær naturstrand på Menorcas vilde nordkyst med karakteristisk gyldent-rødligt sand, klippeøer i bugten og krystalklart vand. En af øens mest yndede strande for naturister.",
    lat: 40.0570,
    lng: 4.0415,
    address: "Cala Pregonda, 07748 Es Mercadal, Menorca, Spanien"
  },
  {
    id: "loc-menorca-pilar",
    name: "Cala Pilar (Menorca)",
    type: "beach",
    country: "Spanien",
    region: "Menorca",
    keywords: ["menorca", "pilar", "ciutadella", "balearerne", "spanien", "strand"],
    description: "Afsides jomfruelig strand omgivet af røde klipper og naturreservat. Den 30 minutters smukke gåtur gennem skoven sikrer en fredelig oase for nøgenbadere og vandrere.",
    lat: 40.0515,
    lng: 3.9780,
    address: "Cala Pilar, 07769 Ciutadella de Menorca, Menorca, Spanien"
  },
  {
    id: "loc-menorca-cavalleria",
    name: "Platja de Cavalleria (Menorca)",
    type: "beach",
    country: "Spanien",
    region: "Menorca",
    keywords: ["menorca", "cavalleria", "es mercadal", "balearerne", "spanien", "strand"],
    description: "En af Menorcas største vilde naturstrande med rustrødt sand for foden af Cap de Cavalleria. De vestlige og østlige klippeafsnit benyttes traditionelt af naturister.",
    lat: 40.0595,
    lng: 4.0755,
    address: "Platja de Cavalleria, 07748 Es Mercadal, Menorca, Spanien"
  },
  {
    id: "loc-menorca-sonsaura",
    name: "Platja de Son Saura / Bellavista (Menorca)",
    type: "beach",
    country: "Spanien",
    region: "Menorca",
    keywords: ["menorca", "son saura", "bellavista", "ciutadella", "balearerne", "spanien", "strand"],
    description: "Vidunderlig bred sandstrand med lavt turkist badevand på sydkysten. Den vestlige ende (Platja de Bellavista) mod klipperne har altid haft en markant og respekteret naturistkultur.",
    lat: 39.9230,
    lng: 3.8650,
    address: "Son Saura, 07769 Ciutadella de Menorca, Menorca, Spanien"
  },

  // ==========================================
  // MALLORCA, IBIZA & FORMENTERA (Balearerne)
  // ==========================================
  {
    id: "loc-mallorca-estrenc",
    name: "Es Trenc Naturiststrand (Mallorca)",
    type: "beach",
    country: "Spanien",
    region: "Mallorca",
    keywords: ["mallorca", "es trenc", "campos", "ses covetes", "balearerne", "spanien", "strand"],
    description: "Mallorcas mest berømte naturstrand, kendt for sit kridhvide sand og Caribien-lignende vand. Den midterste zone mellem Ses Covetes og Colonia Sant Jordi er officiel naturiststrand.",
    lat: 39.3450,
    lng: 2.9850,
    address: "Platja des Trenc, 07630 Campos, Mallorca, Spanien",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "loc-mallorca-collbaix",
    name: "Platja des Coll Baix (Mallorca)",
    type: "beach",
    country: "Spanien",
    region: "Mallorca",
    keywords: ["mallorca", "coll baix", "alcudia", "balearerne", "spanien", "strand"],
    description: "Dramatisk bugt omkranset af lodrette klipper nær Alcúdia. Nås via en vandresti eller med båd, hvilket gør den til et fredeligt fristed for naturister.",
    lat: 39.8605,
    lng: 3.1890,
    address: "Coll Baix, 07400 Alcúdia, Mallorca, Spanien"
  },
  {
    id: "loc-ibiza-escavallet",
    name: "Playa de Es Cavallet (Ibiza)",
    type: "beach",
    country: "Spanien",
    region: "Ibiza",
    keywords: ["ibiza", "es cavallet", "ses salines", "balearerne", "spanien", "strand"],
    description: "Ikonisk hvid sandstrand på Ibizas sydkyst omgivet af klitter og saltpander. Den centrale sektion er en af Middelhavets mest berømte og stemningsfulde naturiststrande.",
    lat: 38.8475,
    lng: 1.4020,
    address: "Platja des Cavallet, 07817 Sant Josep de sa Talaia, Ibiza, Spanien"
  },
  {
    id: "loc-ibiza-aiguesblanques",
    name: "Aigües Blanques (Aguas Blancas, Ibiza)",
    type: "beach",
    country: "Spanien",
    region: "Ibiza",
    keywords: ["ibiza", "aguas blancas", "aigues blanques", "santa eularia", "balearerne", "spanien", "strand"],
    description: "Spektakulær gylden sandstrand for foden af stejle lerklinter på Ibizas nordøstkyst. Gammel naturisttradition og forfriskende bølger.",
    lat: 39.0595,
    lng: 1.5890,
    address: "Aigües Blanques, 07850 Santa Eulària des Riu, Ibiza, Spanien"
  },
  {
    id: "loc-formentera-illetes",
    name: "Platja de Ses Illetes & Llevant (Formentera)",
    type: "beach",
    country: "Spanien",
    region: "Formentera",
    keywords: ["formentera", "ses illetes", "llevant", "balearerne", "spanien", "strand"],
    description: "Ofte kåret som Europas smukkeste kyst med krystalklart turkist vand på begge sider af den smalle landtange. Naturisme er fuldt integreret og velkomment overalt.",
    lat: 38.7580,
    lng: 1.4320,
    address: "Platja de ses Illetes, 07871 Formentera, Spanien"
  },

  // ==========================================
  // FRANKRIG (FRANCE)
  // ==========================================
  {
    id: "loc-fra-capdagde",
    name: "Village Naturiste Cap d'Agde",
    type: "resort",
    country: "Frankrig",
    region: "Languedoc-Roussillon",
    keywords: ["frankrig", "france", "cap d'agde", "cap dagde", "agde", "herault", "resort", "strand"],
    description: "Verdens største og mest kendte naturistby. En hel havneby med 2 km sandstrand, lystbådehavn, hundredvis af butikker, restauranter og et berømt natteliv.",
    lat: 43.2925,
    lng: 3.5350,
    address: "Boulevard des Matelots, 34300 Agde, Hérault, Frankrig",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "loc-fra-montalivet",
    name: "CHM Montalivet (Gironde)",
    type: "resort",
    country: "Frankrig",
    region: "Aquitaine",
    keywords: ["frankrig", "france", "montalivet", "chm", "gironde", "atlantique", "resort", "camping"],
    description: "Naturismens historiske fødested grundlagt i 1950. En kæmpe 200 hektar familie-naturistpark i Atlanterhavets fyrreskove med direkte adgang til vilde sandstrande.",
    lat: 45.3620,
    lng: -1.1550,
    address: "33930 Vendays-Montalivet, Gironde, Frankrig",
    url: "https://www.chm-montalivet.com/"
  },
  {
    id: "loc-fra-euronat",
    name: "Euronat Centre Naturiste",
    type: "resort",
    country: "Frankrig",
    region: "Aquitaine",
    keywords: ["frankrig", "france", "euronat", "grayan", "gironde", "resort", "thalasso", "camping"],
    description: "Europas største naturistcenter på 335 hektar med thalassoterapi, stort poolkompleks, indkøbsgade og 1,5 km gylden Atlanterhavsstrand.",
    lat: 45.4120,
    lng: -1.1480,
    address: "33590 Grayan-et-l'Hôpital, Gironde, Frankrig",
    url: "https://www.euronat.fr/"
  },
  {
    id: "loc-fra-arnaoutchot",
    name: "Arnaoutchot Naturist Resort (Landes)",
    type: "resort",
    country: "Frankrig",
    region: "Aquitaine",
    keywords: ["frankrig", "france", "arnaoutchot", "landes", "resort", "spa", "camping"],
    description: "45 hektar skovresort ved Atlanterhavets Sølvkyst med førsteklasses camping, spa-badeanlæg og direkte adgang til den brede klitstrand.",
    lat: 43.8650,
    lng: -1.3780,
    address: "40560 Vielle-Saint-Girons, Landes, Frankrig"
  },
  {
    id: "loc-fra-belezy",
    name: "Domaine de Bélézy (Provence)",
    type: "resort",
    country: "Frankrig",
    region: "Provence",
    keywords: ["frankrig", "france", "belezy", "bélézy", "bedoin", "bédoin", "provence", "mont ventoux", "resort"],
    description: "Eksklusivt og fredfyldt naturistresort ved foden af Mont Ventoux i Provence, omgivet af lavendelmarker, slot og opvarmede swimmingpools.",
    lat: 44.1180,
    lng: 5.1850,
    address: "Chemin de Bélézy, 84410 Bédoin, Provence, Frankrig",
    url: "https://www.belezy.com/"
  },
  {
    id: "loc-fra-iledulevant",
    name: "Plage des Grottes - Île du Levant (Côte d'Azur)",
    type: "beach",
    country: "Frankrig",
    region: "Côte d'Azur",
    keywords: ["frankrig", "france", "ile du levant", "heliopolis", "hyeres", "cote d'azur", "strand", "ø"],
    description: "Den legendariske naturist-ø ud for Hyères, hvor Héliopolis blev grundlagt i 1931 som verdens første naturistlandsby. Plage des Grottes er øens smukke klippestrand.",
    lat: 43.0295,
    lng: 6.4680,
    address: "Île du Levant, 83400 Hyères, Frankrig"
  },
  {
    id: "loc-fra-espiguette",
    name: "Plage de l'Espiguette (Grau-du-Roi / Camargue)",
    type: "beach",
    country: "Frankrig",
    region: "Camargue",
    keywords: ["frankrig", "france", "espiguette", "grau du roi", "camargue", "strand", "klitter"],
    description: "En af Europas mest storslåede vilde kyststrækninger med op til 10 km uberørte klitter i Camargue. Den østlige del huser en kæmpe officiel naturiststrand.",
    lat: 43.4880,
    lng: 4.1450,
    address: "30240 Le Grau-du-Roi, Gard, Frankrig"
  },
  {
    id: "loc-fra-tahiti",
    name: "Plage de Tahiti (Saint-Tropez / Ramatuelle)",
    type: "beach",
    country: "Frankrig",
    region: "Côte d'Azur",
    keywords: ["frankrig", "france", "saint-tropez", "st tropez", "tahiti", "pampelonne", "ramatuelle", "strand"],
    description: "Den nordlige ende af den berømte Pampelonne-strand ved Saint-Tropez, der siden 1950'erne har været kendt for afslappet fransk naturisme og strandliv.",
    lat: 43.2380,
    lng: 6.6640,
    address: "Plage de Pampelonne Nord, 83350 Ramatuelle, Frankrig"
  },
  {
    id: "loc-fra-serignan",
    name: "Camping Le Sérignan Plage Nature (Hérault)",
    type: "campsite",
    country: "Frankrig",
    region: "Languedoc-Roussillon",
    keywords: ["frankrig", "france", "serignan", "sérignan", "herault", "camping", "resort"],
    description: "Luksuriøs 4-stjernet naturistcamping direkte ved en bred sandstrand med et 2800 m² balneoterapi-center og frodig middelhavsvegetation.",
    lat: 43.2750,
    lng: 3.3280,
    address: "34410 Sérignan, Hérault, Frankrig"
  },
  {
    id: "loc-fra-sabliere",
    name: "Domaine de la Sablière (Gorges de la Cèze)",
    type: "resort",
    country: "Frankrig",
    region: "Gard",
    keywords: ["frankrig", "france", "sabliere", "sablière", "ceze", "cèze", "barjac", "flod", "resort"],
    description: "Storslået naturistresort beliggende på klipperne over floden Cèze med private flodstrande, klippespring og opvarmede swimmingpools.",
    lat: 44.2250,
    lng: 4.4120,
    address: "30630 Barjac, Gard, Frankrig"
  },
  {
    id: "loc-fra-salins",
    name: "Plage des Salins (Hyères / Var)",
    type: "beach",
    country: "Frankrig",
    region: "Côte d'Azur",
    keywords: ["frankrig", "france", "salins", "hyeres", "cote d'azur", "strand"],
    description: "Lang sandstrand beskyttet af pinjetræer og klitter mellem Hyères og La Londe med en autoriseret naturistzone med fint sand og roligt vand.",
    lat: 43.1120,
    lng: 6.2080,
    address: "Les Salins, 83400 Hyères, Frankrig"
  },
  {
    id: "loc-fra-kerminihy",
    name: "Plage de Kerminihy (Erdeven, Bretagne)",
    type: "beach",
    country: "Frankrig",
    region: "Bretagne",
    keywords: ["frankrig", "france", "kerminihy", "erdeven", "bretagne", "strand", "klitter"],
    description: "Bretagnes største og mest populære naturiststrand med over 2 km hvidt sand og høje klitter ud mod Atlanterhavet.",
    lat: 47.6250,
    lng: -3.1950,
    address: "56410 Erdeven, Morbihan, Bretagne, Frankrig"
  },

  // ==========================================
  // KORSIKA (CORSICA, FRANKRIG)
  // ==========================================
  {
    id: "loc-korsika-1",
    name: "Riva Bella Thalasso & Spa Resort",
    type: "resort",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["korsika", "corsica", "frankrig", "france", "aleria", "aléria", "riva bella", "resort", "spa", "camping"],
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
    country: "Frankrig",
    region: "Korsika",
    keywords: ["korsika", "corsica", "frankrig", "france", "bagheera", "ghisonaccia", "resort", "camping"],
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
    country: "Frankrig",
    region: "Korsika",
    keywords: ["korsika", "corsica", "frankrig", "france", "chiappa", "porto-vecchio", "resort", "camping"],
    description: "Spektakulært beliggende naturistresort ved Porto-Vecchio i et fredet naturområde med private strande, klippebugter, bungalows, pools og dykkercenter.",
    lat: 41.5300,
    lng: 9.3585,
    address: "Route du Phare de la Chiappa, 20137 Porto-Vecchio, Korsika, Frankrig",
    url: "https://www.chiappa.com/",
    image: "https://www.chiappa.com/wp-content/uploads/vue-panoramique-1.jpg"
  },
  {
    id: "loc-korsika-ufuru",
    name: "Camping U Furu Naturiste (Porto-Vecchio)",
    type: "campsite",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["korsika", "corsica", "u furu", "porto-vecchio", "camping", "flod", "resort"],
    description: "Enestående frodig naturistcamping i bjergene nær Porto-Vecchio med naturlige ferskvandspools, vandfald i floden, swimmingpool og fredfyldt atmosfære.",
    lat: 41.5645,
    lng: 9.2450,
    address: "Route de Muratello, 20137 Porto-Vecchio, Korsika, Frankrig",
    url: "https://www.camping-ufuru.com/"
  },
  {
    id: "loc-korsika-4",
    name: "Club Orient / Bravone Naturist",
    type: "campsite",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["korsika", "corsica", "frankrig", "france", "bravone", "linguizzetta", "camping"],
    description: "Populært naturistcampingområde ved Bravone-kysten med afslappet familievenlig stemning og direkte sti til den brede sandstrand.",
    lat: 42.1764,
    lng: 9.5512,
    address: "Lieu-dit Bravone, 20230 Linguizzetta, Korsika, Frankrig"
  },
  {
    id: "loc-korsika-bodri",
    name: "Plage de Bodri (Balagne / L'Île-Rousse)",
    type: "beach",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["korsika", "corsica", "bodri", "ile rousse", "l'ile-rousse", "balagne", "strand"],
    description: "En af Korsikas smukkeste og mest elskede naturiststrande i Balagne-regionen med kridhvidt finkornet sand og lysende turkisblåt hav.",
    lat: 42.6315,
    lng: 8.9050,
    address: "Plage de Bodri, 20220 Corbara, Korsika, Frankrig"
  },
  {
    id: "loc-korsika-saleccia",
    name: "Plage de Saleccia (Désert des Agriates)",
    type: "beach",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["korsika", "corsica", "saleccia", "desert des agriates", "saint florent", "strand", "vild"],
    description: "Korsikas mest berømte vilde ørkenstrand med 1 km uberørt kridhvidt sand og pinjer. Nås med taxabåd fra Saint-Florent eller 4x4. Populært naturistparadis.",
    lat: 42.7260,
    lng: 9.2060,
    address: "Désert des Agriates, 20246 Santo-Pietro-di-Tenda, Korsika, Frankrig"
  },
  {
    id: "loc-korsika-5",
    name: "Plage de Cupabia (Naturistsektion)",
    type: "beach",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["korsika", "corsica", "frankrig", "france", "cupabia", "serra-di-ferro", "strand"],
    description: "En af Korsikas smukkeste uberørte bugter med fint hvidt sand og krystalklart vand. Den nordlige afdeling benyttes traditionelt af naturister.",
    lat: 41.7247,
    lng: 8.7845,
    address: "Baie de Cupabia, 20140 Serra-di-Ferro, Korsika, Frankrig"
  },
  {
    id: "loc-korsika-roccapina",
    name: "Plage de Roccapina (Sartène)",
    type: "beach",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["korsika", "corsica", "roccapina", "sartene", "strand"],
    description: "Spektakulær vild naturstrand bevogtet af den berømte naturstensklippe 'Løven af Roccapina'. Krystalklart vand og diskret naturisme i rolige omgivelser.",
    lat: 41.4985,
    lng: 8.9320,
    address: "Roccapina, 20100 Sartène, Korsika, Frankrig"
  },
  {
    id: "loc-korsika-fango",
    name: "Vallée du Fango Klippebassiner (Galéria)",
    type: "beach",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["korsika", "corsica", "fango", "galeria", "flod", "ferskvand", "bjergpool"],
    description: "Korsikas mest berømte ferskvands-naturistområde i biosfærereservatet. Solopvarmede krystalklare klippepools og små vandfald i granitslugten.",
    lat: 42.4180,
    lng: 8.7150,
    address: "Vallée du Fango, 20245 Galéria, Korsika, Frankrig"
  },
  {
    id: "loc-korsika-ghjunchitu",
    name: "Plage de Ghjunchitu (Balagne)",
    type: "beach",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["korsika", "corsica", "ghjunchitu", "corbara", "balagne", "strand"],
    description: "Skøn nabobugt til Bodri med fint lyst sand og turkist vand. Klippeområderne mod syd og nord er yndede tilbagetrukne naturistområder.",
    lat: 42.6280,
    lng: 8.8950,
    address: "20220 Corbara, Korsika, Frankrig"
  },

  // ==========================================
  // SPANIEN FASTLAND & KANARISKE ØER
  // ==========================================
  {
    id: "loc-esp-veraplaya",
    name: "Vera Playa Naturistområde (Almería)",
    type: "resort",
    country: "Spanien",
    region: "Andalusien",
    keywords: ["spanien", "spain", "vera playa", "vera", "almeria", "andalusien", "resort", "hotel", "strand"],
    description: "Europas mest berømte naturist-bydel, hvor man kan færdes nøgen på stranden, i supermarkedet og på gaderne. Hjemsted for Vera Playa Club Hotel og 2 km bred sandstrand.",
    lat: 37.2140,
    lng: -1.8020,
    address: "Playa de Vera, 04621 Vera, Almería, Spanien",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "loc-esp-costanatura",
    name: "Costa Natura Naturist Village (Estepona)",
    type: "resort",
    country: "Spanien",
    region: "Costa del Sol",
    keywords: ["spanien", "spain", "costa natura", "estepona", "costa del sol", "andalusien", "resort", "landsby"],
    description: "Spaniens første officielle naturistferiested, bygget som en klassisk andalusisk hvid landsby direkte til stranden med pools, sauna, restaurant og subtropisk have.",
    lat: 36.3985,
    lng: -5.1950,
    address: "Ctra. N-340 km 151, 29680 Estepona, Costa del Sol, Spanien",
    url: "https://costanatura.com/"
  },
  {
    id: "loc-esp-eltorn",
    name: "Playa El Torn (Costa Dorada)",
    type: "beach",
    country: "Spanien",
    region: "Catalonien",
    keywords: ["spanien", "spain", "el torn", "tarragona", "costa dorada", "catalonien", "strand"],
    description: "Nationalt anerkendt og fredet naturiststrand omgivet af pinjeskov og dramatiske klipper med krystalklart vand og naturistcamping tæt ved.",
    lat: 40.9780,
    lng: 0.8650,
    address: "Platja del Torn, 43890 L'Hospitalet de l'Infant, Tarragona, Spanien"
  },
  {
    id: "loc-esp-cantarrijan",
    name: "Playa de Cantarriján (Costa Tropical)",
    type: "beach",
    country: "Spanien",
    region: "Andalusien",
    keywords: ["spanien", "spain", "cantarrijan", "cantarriján", "almunecar", "granada", "strand"],
    description: "Malerisk naturperle i en beskyttet naturpark med to kystchiringuitos, rolige bugter og fantastisk snorkling i krystalklart vand.",
    lat: 36.7450,
    lng: -3.7850,
    address: "Playa de Cantarriján, 18697 Almuñécar, Granada, Spanien"
  },
  {
    id: "loc-gc-maspalomas",
    name: "Maspalomas Klitstrand (Kiosk 4 & 5)",
    type: "beach",
    country: "Spanien",
    region: "Gran Canaria",
    keywords: ["gran canaria", "maspalomas", "kanariske øer", "canary islands", "spanien", "klitter", "strand"],
    description: "Det ikoniske fredede ørkenklitlandskab ud mod Atlanterhavet. Kiosk 4 og 5 er et internationalt knudepunkt for solbadere og naturister fra hele verden.",
    lat: 27.7420,
    lng: -15.5800,
    address: "Dunas de Maspalomas, 35100 San Bartolomé de Tirajana, Gran Canaria",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "loc-gc-magnolias",
    name: "Magnolias Natura Naturist Resort",
    type: "resort",
    country: "Spanien",
    region: "Gran Canaria",
    keywords: ["gran canaria", "magnolias natura", "maspalomas", "kanariske øer", "spanien", "resort", "bungalows"],
    description: "Fredeligt og velholdt naturistkompleks i Maspalomas med bungalows, opvarmet swimmingpool, jacuzzi, poolbar og frodig have.",
    lat: 27.7655,
    lng: -15.5971,
    address: "Calle Touroperador Sunair 2, 35100 Maspalomas, Gran Canaria",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "loc-gc-charcodelpalo",
    name: "Charco del Palo (Lanzarote)",
    type: "resort",
    country: "Spanien",
    region: "Lanzarote",
    keywords: ["lanzarote", "charco del palo", "kanariske øer", "spanien", "resort", "landsby"],
    description: "En unik landsby på Lanzarotes nordøstkyst, hvor hele byen og de naturlige tidevandsbassiner er dedikeret til naturisme året rundt.",
    lat: 29.0830,
    lng: -13.4520,
    address: "Charco del Palo, 35543 Mala, Lanzarote, De Kanariske Øer"
  },
  {
    id: "loc-esp-cofete",
    name: "Playa de Cofete (Fuerteventura)",
    type: "beach",
    country: "Spanien",
    region: "Fuerteventura",
    keywords: ["fuerteventura", "cofete", "kanariske øer", "spanien", "strand", "vild"],
    description: "Kæmpe 12 km lang vild strand omkranset af Jandia-bjergene mod det åbne Atlanterhav. Fuldstændig uforstyrret naturistparadis.",
    lat: 28.1130,
    lng: -14.3750,
    address: "Playa de Cofete, 35626 Pájara, Fuerteventura, Spanien"
  },
  {
    id: "loc-esp-gaviotas",
    name: "Playa de las Gaviotas (Tenerife)",
    type: "beach",
    country: "Spanien",
    region: "Tenerife",
    keywords: ["tenerife", "las gaviotas", "santa cruz", "kanariske øer", "spanien", "vulkansk", "strand"],
    description: "Smuk sort vulkansk sandstrand beliggende neden for dramatiske klipper tæt på Santa Cruz de Tenerife med mangeårig naturisttradition.",
    lat: 28.5130,
    lng: -16.1750,
    address: "Playa de las Gaviotas, 38120 Santa Cruz de Tenerife, Spanien"
  },

  // ==========================================
  // KROATIEN (CROATIA)
  // ==========================================
  {
    id: "loc-kro-koversada",
    name: "Koversada Naturist Park (Vrsar)",
    type: "resort",
    country: "Kroatien",
    region: "Istrien",
    keywords: ["kroatien", "croatia", "istrien", "vrsar", "koversada", "fkk", "resort", "park"],
    description: "Europas ældste og mest berømte naturistpark, grundlagt i 1961. Et kæmpe naturområde med egen ø, forbundet med bro, krystalklart Adriaterhav og fremragende restauranter.",
    lat: 45.1415,
    lng: 13.5992,
    address: "Koversada 1, 52450 Vrsar, Istrien, Kroatien",
    url: "https://www.maistra.com/properties/naturist-park-koversada-villas/",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "loc-kro-valalta",
    name: "Valalta Naturist Camp & Resort (Rovinj)",
    type: "resort",
    country: "Kroatien",
    region: "Istrien",
    keywords: ["kroatien", "croatia", "istrien", "rovinj", "valalta", "resort", "camping"],
    description: "Eksklusivt 4-stjernet naturistresort nord for Rovinj med 5 km kystlinje, marina, vandland, swimmingpools, eget mikrobryggeri og luksuriøse mobilhomes.",
    lat: 45.1228,
    lng: 13.6305,
    address: "Cesta za Valaltu - Lim 7, 52210 Rovinj, Istrien, Kroatien",
    url: "https://valalta.hr/",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "loc-kro-solaris",
    name: "Solaris Naturist Camping Resort (Poreč)",
    type: "campsite",
    country: "Kroatien",
    region: "Istrien",
    keywords: ["kroatien", "croatia", "istrien", "porec", "poreč", "solaris", "camping"],
    description: "Idyllisk naturistcamping beliggende på den fredede Lanterna-halvø omgivet af egeskov og 2,5 km klippe- og småstensstrande.",
    lat: 45.2952,
    lng: 13.5910,
    address: "Solaris 1, Tar, 52465 Poreč, Istrien, Kroatien"
  },
  {
    id: "loc-kro-bunculuka",
    name: "Bunculuka Camping Resort (Krk)",
    type: "campsite",
    country: "Kroatien",
    region: "Kvarner",
    keywords: ["kroatien", "croatia", "krk", "baska", "baška", "bunculuka", "camping"],
    description: "Smukt beliggende naturistcamping i en beskyttet bugt ved Baška på øen Krk, omgivet af stejle klipper og pinjetræer ud til turkisblåt vand.",
    lat: 44.9667,
    lng: 14.7675,
    address: "Kricin 30, 51523 Baška, Krk, Kroatien"
  },
  {
    id: "loc-kro-lokrum",
    name: "Lokrum FKK Naturiststrand (Dubrovnik)",
    type: "beach",
    country: "Kroatien",
    region: "Dalmatien",
    keywords: ["kroatien", "croatia", "dubrovnik", "lokrum", "dalmatien", "fkk", "strand"],
    description: "Populær naturiststrand på klippeøen Lokrum, kun 10 minutters bådfart fra Dubrovniks gamle bydel. Klippeplateauer og dybt klart hav.",
    lat: 42.6265,
    lng: 18.1215,
    address: "Lokrum Island, 20000 Dubrovnik, Kroatien"
  },
  {
    id: "loc-kro-kandarola",
    name: "Kandarola Strand (Rab Island)",
    type: "beach",
    country: "Kroatien",
    region: "Kvarner",
    keywords: ["kroatien", "croatia", "rab", "kandarola", "fkk", "strand"],
    description: "Historisk naturiststrand, hvor den britiske Kong Edward VIII og Wallis Simpson i 1936 fik tilladelse til at bade nøgne, hvilket startede Rabs berømte FKK-turisme.",
    lat: 44.7550,
    lng: 14.7320,
    address: "Palit, 51280 Rab Island, Kroatien"
  },

  // ==========================================
  // GRÆKENLAND & KRETA
  // ==========================================
  {
    id: "loc-kreta-vritomartis",
    name: "Vritomartis Naturist Resort (Kreta)",
    type: "resort",
    country: "Grækenland",
    region: "Kreta",
    keywords: ["grækenland", "greece", "kreta", "crete", "sfakia", "chora sfakion", "vritomartis", "resort"],
    description: "Kretas førende og internationalt anerkendte naturistresort ved Chora Sfakion med 25-meter pool, bungalows, tennis og shuttlebus til Filaki-stranden.",
    lat: 35.1958,
    lng: 24.1486,
    address: "Chora Sfakion, 73011 Kreta, Grækenland",
    url: "https://www.vritomartis.gr/",
    image: "https://www.vritomartis.gr/wp-content/uploads/DSC_5627-scaled.jpg"
  },
  {
    id: "loc-kreta-filaki",
    name: "Filaki Strand (Chora Sfakion, Kreta)",
    type: "beach",
    country: "Grækenland",
    region: "Kreta",
    keywords: ["grækenland", "greece", "kreta", "crete", "filaki", "sfakia", "strand"],
    description: "Kretas primære officielle naturiststrand beliggende tæt ved Vritomartis med krystalklart vand, rolige klippeomgivelser og strandtaverna.",
    lat: 35.1945,
    lng: 24.1550,
    address: "Filaki, Chora Sfakion, 73011 Kreta, Grækenland"
  },
  {
    id: "loc-kreta-kommos",
    name: "Kommos Strand (Matala / Pitsidia, Kreta)",
    type: "beach",
    country: "Grækenland",
    region: "Kreta",
    keywords: ["grækenland", "greece", "kreta", "crete", "kommos", "matala", "strand"],
    description: "En kæmpe, bred sandstrand med klitter mod Det Libyske Hav. Den nordlige sektion mod Kalamaki er en af Kretas største og mest besøgte naturiststrande.",
    lat: 35.0125,
    lng: 24.7602,
    address: "Kommos Beach, Pitsidia, 70200 Kreta, Grækenland"
  },
  {
    id: "loc-kreta-redbeach",
    name: "Red Beach (Kokkini Ammos, Matala)",
    type: "beach",
    country: "Grækenland",
    region: "Kreta",
    keywords: ["grækenland", "greece", "kreta", "crete", "red beach", "kokkini ammos", "matala", "strand"],
    description: "Ikonisk rødlig sandstrand bag klipperne ved Matala, kendt fra hippietiden og i dag en velkendt og fredelig naturiststrand.",
    lat: 34.9860,
    lng: 24.7490,
    address: "Matala, 70200 Kreta, Grækenland"
  },
  {
    id: "loc-gr-mirtiotissa",
    name: "Mirtiotissa Strand (Korfu)",
    type: "beach",
    country: "Grækenland",
    region: "Korfu",
    keywords: ["grækenland", "greece", "korfu", "corfu", "mirtiotissa", "strand"],
    description: "Beskrevet af forfatteren Lawrence Durrell som en af verdens smukkeste strande. En frodig klippeomkranset bugt med krystalklart vand og mangeårig naturisttradition.",
    lat: 39.6150,
    lng: 19.8020,
    address: "Mirtiotissa, 49100 Korfu, Grækenland"
  },
  {
    id: "loc-gr-littlebanana",
    name: "Little Banana Beach (Skiathos)",
    type: "beach",
    country: "Grækenland",
    region: "Skiathos",
    keywords: ["grækenland", "greece", "skiathos", "banana beach", "strand"],
    description: "En af Det Ægæiske Havs mest berømte naturiststrande. Fin gylden sandstrand omgivet af velduftende pinjeskove og turkisblåt hav.",
    lat: 39.1480,
    lng: 23.3980,
    address: "Koukounaries, 37002 Skiathos, Grækenland"
  },
  {
    id: "loc-gr-elia",
    name: "Elia Strand (Mykonos)",
    type: "beach",
    country: "Grækenland",
    region: "Mykonos",
    keywords: ["grækenland", "greece", "mykonos", "elia", "strand"],
    description: "Mykonos' længste sandstrand. Den fjerneste østlige ende bag klipperne er et velrenommeret og fredeligt naturistområde.",
    lat: 37.4220,
    lng: 25.3910,
    address: "Elia Beach, 84600 Mykonos, Grækenland"
  },
  {
    id: "loc-gr-faliraki",
    name: "Faliraki Nudist Beach (Rhodos)",
    type: "beach",
    country: "Grækenland",
    region: "Rhodos",
    keywords: ["grækenland", "greece", "rhodos", "rhodes", "faliraki", "strand"],
    description: "Den eneste officielle naturiststrand på Rhodos, beliggende syd for Faliraki i rolige bugtomgivelser med liggestole og strandkiosk.",
    lat: 36.3280,
    lng: 28.2050,
    address: "Faliraki, 85105 Rhodos, Grækenland"
  },

  // ==========================================
  // DANMARK
  // ==========================================
  {
    id: "loc-dk-solbakken",
    name: "Solbakken Naturistcamping",
    type: "campsite",
    country: "Danmark",
    region: "Sjælland",
    keywords: ["danmark", "denmark", "dk", "sjælland", "solbakken", "isefjorden", "camping", "resort"],
    description: "Danmarks ældste og mest kendte naturistcampingplads beliggende ved Isefjorden med sauna, opvarmet pool, klubfaciliteter og hyggelig familiær atmosfære.",
    lat: 55.6723,
    lng: 11.7588,
    address: "Solbakken 1, 4060 Kirke Såby, Danmark",
    image: "https://solbakken-naturist.dk/wp-content/uploads/2020/06/solbakken-oversigt.jpg"
  },
  {
    id: "loc-dk-nfj",
    name: "NFJ Naturist Camping (Als)",
    type: "campsite",
    country: "Danmark",
    region: "Sønderjylland",
    keywords: ["danmark", "denmark", "nfj", "als", "sønderjylland", "jylland", "camping"],
    description: "Hyggelig og fredfyldt dedikeret naturistcampingplads på Als omgivet af marker og skov, med klubhus, legeplads og kort afstand til badestrand.",
    lat: 54.9850,
    lng: 9.8750,
    address: "Stenkobbel 11, 6440 Augustenborg, Danmark"
  },
  {
    id: "loc-dk-sandager",
    name: "Sandager Næs Naturistafdeling (Fyn)",
    type: "campsite",
    country: "Danmark",
    region: "Fyn",
    keywords: ["danmark", "denmark", "sandager næs", "fyn", "lillebælt", "camping"],
    description: "Kendt campingplads ved Lillebælt med en afskærmet, velindrettet naturistsektion med egen swimmingpool, sauna og direkte adgang til kysten.",
    lat: 55.3350,
    lng: 9.8820,
    address: "Sandager Næsvej 25, 5610 Assens, Fyn, Danmark"
  },
  {
    id: "loc-dk-skovly",
    name: "Skovly Naturistcamping (Vordingborg)",
    type: "campsite",
    country: "Danmark",
    region: "Sjælland",
    keywords: ["danmark", "denmark", "skovly", "vordingborg", "sjælland", "camping"],
    description: "Rolig og uforstyrret naturistcampingplads beliggende i smukke sydsjællandske skovomgivelser tæt på kysten med sauna og fælleshus.",
    lat: 55.0350,
    lng: 11.9520,
    address: "Skovhusevej, 4760 Vordingborg, Danmark"
  },
  {
    id: "loc-dk-bellevue",
    name: "Bellevue Strand (Naturistområde)",
    type: "beach",
    country: "Danmark",
    region: "København",
    keywords: ["danmark", "denmark", "københavn", "copenhagen", "bellevue", "klampenborg", "strand"],
    description: "Den klassiske strand nord for København. Den nordligste mole og sektion er traditionelt et af Danmarks mest populære steder for nøgenbadning og vinterbadning.",
    lat: 55.7766,
    lng: 12.5936,
    address: "Strandvejen 340, 2930 Klampenborg, Danmark"
  },
  {
    id: "loc-dk-tisvildeleje",
    name: "Tisvildeleje Strand (Naturistafsnit)",
    type: "beach",
    country: "Danmark",
    region: "Nordsjælland",
    keywords: ["danmark", "denmark", "tisvildeleje", "tisvilde", "nordsjælland", "strand"],
    description: "Smukt strandområde mod vest i Tisvilde Hegn med klitter og kridhvidt sand, hvor naturister holder til i fredfyldte og naturskønne omgivelser.",
    lat: 56.0601,
    lng: 12.0673,
    address: "Tisvildeleje Strand, 3220 Tisvildeleje, Danmark"
  },
  {
    id: "loc-dk-hornbaek",
    name: "Hornbæk Naturiststrand",
    type: "beach",
    country: "Danmark",
    region: "Nordsjælland",
    keywords: ["danmark", "denmark", "hornbæk", "hornbaek", "nordsjælland", "strand"],
    description: "Klassisk nordsjællandsk badestrand. Den vestligste del forbi plantagen mod Dronningmølle er en etableret og populær naturiststrand.",
    lat: 56.0950,
    lng: 12.4250,
    address: "Vestre Stejlebakke, 3100 Hornbæk, Danmark"
  },
  {
    id: "loc-dk-heatherhill",
    name: "Heatherhill Strand (Rågeleje)",
    type: "beach",
    country: "Danmark",
    region: "Nordsjælland",
    keywords: ["danmark", "denmark", "heatherhill", "rågeleje", "rageleje", "nordsjælland", "strand"],
    description: "Dramatisk og smukt hedelandskab med store lyngbakker ud til Kattegat. Strandafsnittet under bakkerne tiltrækker mange naturister.",
    lat: 56.0880,
    lng: 12.1550,
    address: "Heatherhill, 3210 Vejby, Danmark"
  },
  {
    id: "loc-dk-amager",
    name: "Amager Strandpark Syd / Femøren",
    type: "beach",
    country: "Danmark",
    region: "København",
    keywords: ["danmark", "denmark", "amager", "københavn", "femøren", "kastrup", "strand"],
    description: "Bynær nøgenbadning på den sydligste mole og stenstrand ved Kastrup Søbad/Femøren, yndet af københavnske solbadere.",
    lat: 55.6480,
    lng: 12.6510,
    address: "Amager Strand Promenaden, 2300 København S, Danmark"
  },
  {
    id: "loc-dk-boto",
    name: "Bøtø Strand (Falster)",
    type: "beach",
    country: "Danmark",
    region: "Falster",
    keywords: ["danmark", "denmark", "bøtø", "boto", "falster", "marielyst", "strand"],
    description: "Bred østersøstrand med høje klitter og masser af plads. Naturistsektionen er velbesøgt og kendt for ro, rent badevand og blødt hvidt sand.",
    lat: 54.6738,
    lng: 11.9687,
    address: "Bøtø Ringvej, 4873 Væggerløse, Danmark"
  },
  {
    id: "loc-dk-ulvshale",
    name: "Ulvshale Naturiststrand (Møn)",
    type: "beach",
    country: "Danmark",
    region: "Møn",
    keywords: ["danmark", "denmark", "ulvshale", "møn", "mon", "strand"],
    description: "Fredet naturområde med lavt, lunt badevand og vild sandstrand. Naturistafsnittet mod nord er kendt for fredfyldt ro og fugleliv.",
    lat: 55.0380,
    lng: 12.2850,
    address: "Ulvshalevej, 4780 Stege, Møn, Danmark"
  },
  {
    id: "loc-dk-dueodde",
    name: "Dueodde Naturiststrand (Bornholm)",
    type: "beach",
    country: "Danmark",
    region: "Bornholm",
    keywords: ["danmark", "denmark", "bornholm", "dueodde", "strand"],
    description: "Bornholms berømte ultrafine sandstrand. Vest for fyret findes en officiel og meget populær naturistsektion gemt mellem de høje klitter.",
    lat: 54.9890,
    lng: 15.0680,
    address: "Dueodde, 3730 Nexø, Bornholm, Danmark"
  },
  {
    id: "loc-dk-balka",
    name: "Balka Strand Naturistafsnit (Bornholm)",
    type: "beach",
    country: "Danmark",
    region: "Bornholm",
    keywords: ["danmark", "denmark", "balka", "bornholm", "strand"],
    description: "Børnevenlig lækker sandstrand med lunt lavt vand. Den sydlige ende mod Snogebæk er et anerkendt og afslappet naturistområde.",
    lat: 55.0250,
    lng: 15.1210,
    address: "Balka Strand, 3730 Nexø, Bornholm, Danmark"
  },
  {
    id: "loc-dk-flyvesandet",
    name: "Flyvesandet Naturiststrand (Nordfyn)",
    type: "beach",
    country: "Danmark",
    region: "Fyn",
    keywords: ["danmark", "denmark", "flyvesandet", "nordfyn", "fyn", "strand"],
    description: "Fyns eneste sandklitområde og en af landets bedste naturiststrande med kilometervis af plads, klitter og udsigt til Æbelø.",
    lat: 55.6180,
    lng: 10.3050,
    address: "Flyvesandsvej, 5450 Otterup, Nordfyn, Danmark"
  },
  {
    id: "loc-dk-ristinge",
    name: "Ristinge Strand (Langeland)",
    type: "beach",
    country: "Danmark",
    region: "Langeland",
    keywords: ["danmark", "denmark", "ristinge", "langeland", "fyn", "strand"],
    description: "En af Det Sydfynske Øhavs fineste sandstrande med klitter og kridhvidt sand. Den vestligste del er velbesøgt af naturister.",
    lat: 54.7450,
    lng: 10.6120,
    address: "Ristingevej, 5932 Humble, Langeland, Danmark"
  },
  {
    id: "loc-dk-moesgaard",
    name: "Moesgård Strand (Aarhus)",
    type: "beach",
    country: "Danmark",
    region: "Østjylland",
    keywords: ["danmark", "denmark", "moesgård", "moesgaard", "aarhus", "århus", "jylland", "strand"],
    description: "Traditionsrig og meget populær naturiststrand i skovkanten syd for Aarhus mod Giber Å, omgivet af smukke bøgeskove.",
    lat: 56.0910,
    lng: 10.2520,
    address: "Strandskovvej, 8270 Højbjerg, Aarhus, Danmark"
  },
  {
    id: "loc-dk-skagen",
    name: "Grenen Nordstrand (Skagen)",
    type: "beach",
    country: "Danmark",
    region: "Nordjylland",
    keywords: ["danmark", "denmark", "skagen", "grenen", "jylland", "strand"],
    description: "Den barske og storslåede kyststrækning vest for Grenen mod Gl. Skagen, hvor naturister igennem årtier har nydt Kattegat og Skagerraks møde i fred.",
    lat: 57.7460,
    lng: 10.6320,
    address: "Nordstrandvej, 9990 Skagen, Danmark"
  },
  {
    id: "loc-dk-kandestederne",
    name: "Kandestederne Strand (Skagen Vestkyst)",
    type: "beach",
    country: "Danmark",
    region: "Nordjylland",
    keywords: ["danmark", "denmark", "kandestederne", "skagen", "jylland", "vesterhavet", "strand"],
    description: "Kæmpe bred vesterhavsstrand neden for Råbjerg Mile med høje klitter og vild Atlanterhavsstemning.",
    lat: 57.6580,
    lng: 10.3750,
    address: "Kandevejen, 9990 Skagen, Danmark"
  },
  {
    id: "loc-dk-blokhus",
    name: "Blokhus & Rødhus Klitstrand",
    type: "beach",
    country: "Danmark",
    region: "Nordjylland",
    keywords: ["danmark", "denmark", "blokhus", "rødhus", "nordjylland", "jylland", "vesterhavet", "strand"],
    description: "Bred vesterhavsstrand med fredelige klitrækker. Rødhus-afsnittet mod syd er traditionsrigt populært til uforstyrret nøgenbadning.",
    lat: 57.2180,
    lng: 9.5350,
    address: "Rødhus Strand, 9490 Pandrup, Danmark"
  },
  {
    id: "loc-dk-hvidesande",
    name: "Hvide Sande & Årgab Strand",
    type: "beach",
    country: "Danmark",
    region: "Vestjylland",
    keywords: ["danmark", "denmark", "hvide sande", "årgab", "holmsland", "vestjylland", "vesterhavet", "strand"],
    description: "Storslåede klitter mellem Vesterhavet og Ringkøbing Fjord med masser af uforstyrret plads til naturister.",
    lat: 55.9750,
    lng: 8.1210,
    address: "Sønder Klitvej, 6960 Hvide Sande, Danmark"
  },
  {
    id: "loc-dk-romo",
    name: "Sønderstrand (Rømø)",
    type: "beach",
    country: "Danmark",
    region: "Sønderjylland",
    keywords: ["danmark", "denmark", "rømø", "romo", "sønderstrand", "vesterhavet", "strand"],
    description: "Europas bredeste sandstrand mod Nordsøen. Den sydligste del er en udstrakt og fredelig naturiststrand med kilometervis af plads.",
    lat: 55.0950,
    lng: 8.5150,
    address: "Sønderstrand, 6792 Rømø, Danmark"
  },
  {
    id: "loc-dk-vejers",
    name: "Vejers Strand (Sydvestjylland)",
    type: "beach",
    country: "Danmark",
    region: "Sydvestjylland",
    keywords: ["danmark", "denmark", "vejers", "blåvand", "jylland", "vesterhavet", "strand"],
    description: "Bred hvid sandstrand. Den bilfrie sydlige sektion mod Kallesmærsk Hede er et anerkendt fristed for naturister.",
    lat: 55.6150,
    lng: 8.1150,
    address: "Vejers Havvej, 6853 Vejers Strand, Danmark"
  },
  {
    id: "loc-dk-vosnaes",
    name: "Vosnæs Pynt / Skødstrup (Kalø Vig)",
    type: "beach",
    country: "Danmark",
    region: "Østjylland",
    keywords: ["danmark", "denmark", "vosnæs", "skødstrup", "kalø vig", "aarhus", "jylland", "strand"],
    description: "Skjult naturperle på spidsen af Vosnæs Pynt i Kalø Vig, omgivet af herregårdsskov med ro og udsigt over bugten.",
    lat: 56.2650,
    lng: 10.3780,
    address: "Vosnæsvej, 8541 Skødstrup, Danmark"
  },

  // ==========================================
  // TYSKLAND, ITALIEN, PORTUGAL & DUBAI
  // ==========================================
  {
    id: "loc-de-sylt",
    name: "Buhne 16 (Sylt, Kampen)",
    type: "beach",
    country: "Tyskland",
    region: "Slesvig-Holsten",
    keywords: ["tyskland", "germany", "sylt", "buhne 16", "fkk", "strand"],
    description: "Tysklands mest legendariske FKK-strand, berømt siden 1960'erne. Beliggende i de vilde klitter på øen Sylt med en ikonisk strandbistro.",
    lat: 54.9650,
    lng: 8.3380,
    address: "Buhne 16, 25999 Kampen, Sylt, Tyskland"
  },
  {
    id: "loc-de-prerow",
    name: "Prerow Nordstrand (Østersøen)",
    type: "beach",
    country: "Tyskland",
    region: "Mecklenburg-Vorpommern",
    keywords: ["tyskland", "germany", "prerow", "darss", "ostsee", "østersøen", "fkk", "strand"],
    description: "En af Europas fineste hvide sandstrande ved Østersøen med op til 100 meters bredde og en kæmpe, populær FKK-sektion.",
    lat: 54.4550,
    lng: 12.5700,
    address: "Bernsteinweg, 18375 Prerow, Østersøen, Tyskland"
  },
  {
    id: "loc-it-pizzogreco",
    name: "Camping Pizzo Greco (Calabrien)",
    type: "resort",
    country: "Italien",
    region: "Calabrien",
    keywords: ["italien", "italy", "pizzo greco", "calabria", "resort", "camping"],
    description: "Italiens førende og ældste officielle naturistferiested beliggende direkte til Det Joniske Hav med privat strand, bungalows og pools.",
    lat: 38.9480,
    lng: 17.0250,
    address: "Località Pizzo Greco, 88841 Isola di Capo Rizzuto, Calabrien, Italien",
    url: "https://www.pizzogreco.com/"
  },
  {
    id: "loc-it-bassona",
    name: "Spiaggia della Bassona / Lido di Dante",
    type: "beach",
    country: "Italien",
    region: "Emilia-Romagna",
    keywords: ["italien", "italy", "lido di dante", "bassona", "ravenna", "strand"],
    description: "Italiens mest berømte og officielt anerkendte naturiststrand nær Ravenna ved et fredet fyrreskovsreservat.",
    lat: 44.3850,
    lng: 12.3150,
    address: "Viale Matelda, 48124 Lido di Dante, Ravenna, Italien"
  },
  {
    id: "loc-pt-homemnu",
    name: "Praia do Homem Nu (Tavira, Algarve)",
    type: "beach",
    country: "Portugal",
    region: "Algarve",
    keywords: ["portugal", "algarve", "tavira", "homem nu", "strand"],
    description: "'Den nøgne mands strand' på øen Ilha de Tavira. En uendelig, fredfyldt sandstrand i naturparken Ria Formosa, hvor naturisme er officielt tilladt.",
    lat: 37.0750,
    lng: -7.6880,
    address: "Ilha de Tavira, 8800 Tavira, Algarve, Portugal"
  },
  {
    id: "loc-pt-meco",
    name: "Praia do Meco (Sesimbra / Lissabon)",
    type: "beach",
    country: "Portugal",
    region: "Lissabon",
    keywords: ["portugal", "meco", "sesimbra", "lissabon", "strand"],
    description: "Portugals historiske vugge for naturisme siden 1970'erne. En kæmpe sandstrand syd for Lissabon flankeret af lerskrænter og Atlanterhavets bølger.",
    lat: 38.4890,
    lng: -9.1830,
    address: "Aldeia do Meco, 2970 Sesimbra, Portugal"
  },
  {
    id: "loc-dubai-warning",
    name: "Dubai & De Forenede Arabiske Emirater",
    type: "other",
    country: "Forenede Arabiske Emirater",
    region: "Mellemøsten",
    keywords: ["dubai", "uae", "emiraterne", "abu dhabi", "mellemøsten"],
    description: "Naturisme, topløs solbadning og offentlig nøgenhed er strengt forbudt i hele UAE og straffes hårdt med fængsel, store bøder og udvisning i henhold til straffeloven.",
    lat: 25.2048,
    lng: 55.2708,
    address: "Dubai, De Forenede Arabiske Emirater",
    warning: "STRENGT FORBUDT: Offentlig nøgenhed og naturisme er ulovligt i UAE og medfører fængselsstraf eller udvisning. Der findes ingen lovlige naturiststeder i landet."
  }
];

// Search function that returns ALL matching locations without artificial low limits
export function searchCuratedDatabase(query: string): SearchResult | null {
  const q = query.trim().toLowerCase();
  if (!q) return null;

  // 1. Direct match on country or region (returns all items in that country/region)
  const matches: ExtendedNaturistLocation[] = [];

  for (const loc of ALL_LOCATIONS_DATABASE) {
    const country = loc.country.toLowerCase();
    const region = loc.region.toLowerCase();
    const name = loc.name.toLowerCase();
    const addr = (loc.address || "").toLowerCase();
    const desc = loc.description.toLowerCase();
    const keywords = (loc.keywords || []).map(k => k.toLowerCase());

    const isDirectMatch = 
      country === q ||
      region === q ||
      q.includes(country) ||
      q.includes(region) ||
      country.includes(q) ||
      region.includes(q) ||
      keywords.some(k => k === q || q.includes(k) || k.includes(q));

    if (isDirectMatch) {
      matches.push(loc);
    }
  }

  // If we found region or country matches, return all of them!
  if (matches.length > 0) {
    // Unique by id
    const unique = Array.from(new Map(matches.map(m => [m.id, m])).values());
    return {
      locations: unique,
      summary: `Fandt ${unique.length} verificerede naturist-destinationer for "${query}".`,
      sources: []
    };
  }

  // 2. Free text search across name, address, description
  const secondaryMatches: ExtendedNaturistLocation[] = [];
  for (const loc of ALL_LOCATIONS_DATABASE) {
    const name = loc.name.toLowerCase();
    const addr = (loc.address || "").toLowerCase();
    const desc = loc.description.toLowerCase();

    if (name.includes(q) || addr.includes(q) || desc.includes(q)) {
      secondaryMatches.push(loc);
    }
  }

  if (secondaryMatches.length > 0) {
    const unique = Array.from(new Map(secondaryMatches.map(m => [m.id, m])).values());
    return {
      locations: unique,
      summary: `Fandt ${unique.length} naturist-destinationer for "${query}".`,
      sources: []
    };
  }

  // 3. Category matches (resort, camping, strand)
  if (q.includes("resort") || q.includes("hotel")) {
    const resorts = ALL_LOCATIONS_DATABASE.filter(l => l.type === 'resort');
    return {
      locations: resorts,
      summary: `Her er et udvalg af Europas mest anerkendte naturist-resorts (${resorts.length} steder).`,
      sources: []
    };
  }

  if (q.includes("camping") || q.includes("lejr")) {
    const campsites = ALL_LOCATIONS_DATABASE.filter(l => l.type === 'campsite' || l.type === 'resort');
    return {
      locations: campsites,
      summary: `Her er populære naturistcampingpladser (${campsites.length} steder).`,
      sources: []
    };
  }

  if (q.includes("strand") || q.includes("beach") || q.includes("cala") || q.includes("playa")) {
    const beaches = ALL_LOCATIONS_DATABASE.filter(l => l.type === 'beach');
    return {
      locations: beaches.slice(0, 20),
      summary: `Her er et udvalg af berømte naturiststrande i Europa.`,
      sources: []
    };
  }

  return null;
}

// Suggestions provider for search bar
export const ALL_SUGGESTIONS = [
  "Frankrig",
  "Menorca",
  "Mallorca",
  "Ibiza",
  "Spanien",
  "Korsika",
  "Kroatien",
  "Danmark",
  "Gran Canaria",
  "Tenerife",
  "Lanzarote",
  "Fuerteventura",
  "Kreta",
  "Chora Sfakion",
  "Grækenland",
  "Korfu",
  "Rhodos",
  "Skiathos",
  "Cap d'Agde",
  "Montalivet",
  "Euronat",
  "Vera Playa",
  "Costa Natura",
  "Es Trenc",
  "Cala Macarelleta",
  "Cala Trebalúger",
  "Tyskland",
  "Italien",
  "Portugal",
  "Bornholm",
  "Skagen",
  "Dubai"
];
