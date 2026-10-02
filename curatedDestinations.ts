import { NaturistLocation, SearchResult } from "./types";

export interface CuratedGroup {
  summary: string;
  keywords: string[];
  locations: NaturistLocation[];
}

export const CURATED_DATABASE: Record<string, CuratedGroup> = {
  korsika: {
    summary: "Korsika er en af Europas absolut førende naturist-destinationer med flere anerkendte resorts langs den rolige østkyst og krystalklare bugter.",
    keywords: ["korsika", "corsica", "aleria", "aléria", "ghisonaccia", "porto-vecchio", "porto vecchio", "bravone"],
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

  kroatien: {
    summary: "Kroatien er en pioner inden for europæisk naturisme med verdensberømte naturistparker (FKK) i Istrien, Kvarner og Dalmatien.",
    keywords: ["kroatien", "croatia", "istrien", "istria", "vrsar", "rovinj", "porec", "poreč", "krk", "rab", "dubrovnik", "split", "dalmatien", "pula", "zadar"],
    locations: [
      {
        id: "loc-kro-koversada",
        name: "Koversada Naturist Park (Vrsar)",
        type: "resort",
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
        description: "Idyllisk naturistcamping beliggende på den fredede Lanterna-halvø omgivet af egeskov og 2,5 km klippe- og småstensstrande.",
        lat: 45.2952,
        lng: 13.5910,
        address: "Solaris 1, Tar, 52465 Poreč, Istrien, Kroatien"
      },
      {
        id: "loc-kro-bunculuka",
        name: "Bunculuka Camping Resort (Krk)",
        type: "campsite",
        description: "Smukt beliggende naturistcamping i en beskyttet bugt ved Baška på øen Krk, omgivet af stejle klipper og pinjetræer ud til turkisblåt vand.",
        lat: 44.9667,
        lng: 14.7675,
        address: "Kricin 30, 51523 Baška, Krk, Kroatien"
      },
      {
        id: "loc-kro-lokrum",
        name: "Lokrum FKK Naturiststrand (Dubrovnik)",
        type: "beach",
        description: "Populær naturiststrand på klippeøen Lokrum, kun 10 minutters bådfart fra Dubrovniks gamle bydel. Klippeplateauer og dybt klart hav.",
        lat: 42.6265,
        lng: 18.1215,
        address: "Lokrum Island, 20000 Dubrovnik, Kroatien"
      }
    ]
  },

  danmark: {
    summary: "I Danmark er naturisme generelt tilladt på alle offentlige kyststrande ifølge Naturstyrelsens retningslinjer, så længe man viser hensyn.",
    keywords: ["danmark", "denmark", "dk", "københavn", "copenhagen", "sjælland", "jylland", "fyn", "bornholm", "skagen", "tisvildeleje", "falster", "rømø", "aarhus", "århus"],
    locations: [
      {
        id: "loc-dk-solbakken",
        name: "Solbakken Naturistcamping",
        type: "campsite",
        description: "Danmarks ældste og mest kendte naturistcampingplads beliggende ved Isefjorden med sauna, opvarmet pool, klubfaciliteter og hyggelig familiær atmosfære.",
        lat: 55.6723,
        lng: 11.7588,
        address: "Solbakken 1, 4060 Kirke Såby, Danmark",
        image: "https://solbakken-naturist.dk/wp-content/uploads/2020/06/solbakken-oversigt.jpg"
      },
      {
        id: "loc-dk-bellevue",
        name: "Bellevue Strand (Naturistområde)",
        type: "beach",
        description: "Den klassiske strand nord for København. Den nordligste mole og sektion er traditionelt et af Danmarks mest populære steder for nøgenbadning og vinterbadning.",
        lat: 55.7766,
        lng: 12.5936,
        address: "Strandvejen 340, 2930 Klampenborg, Danmark"
      },
      {
        id: "loc-dk-tisvildeleje",
        name: "Tisvildeleje Strand (Naturistafsnit)",
        type: "beach",
        description: "Smukt strandområde mod vest i Tisvilde Hegn med klitter og kridhvidt sand, hvor naturister holder til i fredfyldte og naturskønne omgivelser.",
        lat: 56.0601,
        lng: 12.0673,
        address: "Tisvildeleje Strand, 3220 Tisvildeleje, Danmark"
      },
      {
        id: "loc-dk-boto",
        name: "Bøtø Strand (Falster)",
        type: "beach",
        description: "Bred østersøstrand med høje klitter og masser af plads. Naturistsektionen er velbesøgt og kendt for ro, rent badevand og blødt hvidt sand.",
        lat: 54.6738,
        lng: 11.9687,
        address: "Bøtø Ringvej, 4873 Væggerløse, Danmark"
      },
      {
        id: "loc-dk-skagen",
        name: "Grenen Nordstrand (Skagen)",
        type: "beach",
        description: "Den barske og storslåede kyststrækning vest for Grenen mod Gl. Skagen, hvor naturister igennem årtier har nydt Kattegat og Skagerraks møde i fred.",
        lat: 57.7460,
        lng: 10.6320,
        address: "Nordstrandvej, 9990 Skagen, Danmark"
      },
      {
        id: "loc-dk-dueodde",
        name: "Dueodde Naturiststrand (Bornholm)",
        type: "beach",
        description: "Bornholms berømte ultrafine sandstrand. Vest for fyret findes en officiel og meget populær naturistsektion gemt mellem de høje klitter.",
        lat: 54.9890,
        lng: 15.0680,
        address: "Dueodde, 3730 Nexø, Bornholm, Danmark"
      }
    ]
  },

  spanien: {
    summary: "Spanien er et mekka for naturister, fra den unikke naturistbydel i Vera Playa til eksklusive resorts og berømte strande på De Baleariske Øer.",
    keywords: ["spanien", "spain", "vera playa", "vera", "andalusien", "costa del sol", "estepona", "almeria", "ibiza", "mallorca", "costa brava", "cantarrijan", "barcelona", "marbella", "malaga"],
    locations: [
      {
        id: "loc-esp-veraplaya",
        name: "Vera Playa Naturistområde (Almería)",
        type: "resort",
        description: "Europas mest berømte naturist-bydel, hvor man kan gå nøgen på stranden, i supermarkedet og på gaderne. Hjemsted for Vera Playa Club Hotel og 2 km bred sandstrand.",
        lat: 37.2140,
        lng: -1.8020,
        address: "Playa de Vera, 04621 Vera, Almería, Spanien",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "loc-esp-costanatura",
        name: "Costa Natura Naturist Village (Estepona)",
        type: "resort",
        description: "Spaniens første officielle naturistferiested, bygget som en klassisk andalusisk hvid landsby direkte til stranden med pools, sauna, restaurant og subtropisk have.",
        lat: 36.3985,
        lng: -5.1950,
        address: "Ctra. N-340 km 151, 29680 Estepona, Costa del Sol, Spanien",
        url: "https://costanatura.com/"
      },
      {
        id: "loc-esp-escavallet",
        name: "Playa de Es Cavallet (Ibiza)",
        type: "beach",
        description: "Ikonisk hvid sandstrand på Ibizas sydkyst omgivet af klitter og saltpander. Den centrale sektion er en af Middelhavets mest berømte naturiststrande.",
        lat: 38.8475,
        lng: 1.4020,
        address: "Platja des Cavallet, 07817 Sant Josep de sa Talaia, Ibiza, Spanien"
      },
      {
        id: "loc-esp-eltorn",
        name: "Playa El Torn (Costa Dorada)",
        type: "beach",
        description: "Nationalt anerkendt og fredet naturiststrand omgivet af pinjeskov og dramatiske klipper med krystalklart vand og naturistcamping tæt ved.",
        lat: 40.9780,
        lng: 0.8650,
        address: "Platja del Torn, 43890 L'Hospitalet de l'Infant, Tarragona, Spanien"
      },
      {
        id: "loc-esp-cantarrijan",
        name: "Playa de Cantarriján (Costa Tropical)",
        type: "beach",
        description: "Malerisk naturperle i en beskyttet naturpark med to kystchiringuitos, rolige bugter og fantastisk snorkling i krystalklart vand.",
        lat: 36.7450,
        lng: -3.7850,
        address: "Playa de Cantarriján, 18697 Almuñécar, Granada, Spanien"
      }
    ]
  },

  frankrig: {
    summary: "Frankrig er naturismens historiske moderland med verdens største naturistresorts langs Atlanterhavskysten og Middelhavet.",
    keywords: ["frankrig", "france", "cap d'agde", "cap dagde", "agde", "montalivet", "euronat", "chm", "belezy", "bélézy", "provence", "cote d'azur", "bordeaux", "landes", "gironde"],
    locations: [
      {
        id: "loc-fra-capdagde",
        name: "Village Naturiste Cap d'Agde",
        type: "resort",
        description: "Verdens største og mest kendte naturistby. En hel havneby med 2 km strand, lystbådehavn, hundredvis af butikker, restauranter og et berømt natteliv.",
        lat: 43.2925,
        lng: 3.5350,
        address: "Boulevard des Matelots, 34300 Agde, Hérault, Frankrig",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "loc-fra-montalivet",
        name: "CHM Montalivet (Gironde)",
        type: "resort",
        description: "Naturismens fødested grundlagt i 1950. En kæmpe 200 hektar familie-naturistpark i Atlanterhavets fyrreskove med direkte adgang til kilometervis af vilde strande.",
        lat: 45.3620,
        lng: -1.1550,
        address: "33930 Vendays-Montalivet, Gironde, Frankrig",
        url: "https://www.chm-montalivet.com/"
      },
      {
        id: "loc-fra-euronat",
        name: "Euronat Centre Naturiste",
        type: "resort",
        description: "Europas største naturistcenter på 335 hektar med eget thalassoterapi-center, kæmpe poolkompleks, indkøbsarkade og 1,5 km gylden Atlanterhavsstrand.",
        lat: 45.4120,
        lng: -1.1480,
        address: "33590 Grayan-et-l'Hôpital, Aquitanien, Frankrig",
        url: "https://www.euronat.fr/"
      },
      {
        id: "loc-fra-belezy",
        name: "Domaine de Bélézy (Provence)",
        type: "resort",
        description: "Eksklusivt og roligt naturistresort ved foden af Mont Ventoux i Provence, omgivet af lavendelmarker, pinjetræer og slotshaver.",
        lat: 44.1180,
        lng: 5.1850,
        address: "Chemin de Bélézy, 84410 Bédoin, Provence, Frankrig",
        url: "https://www.belezy.com/"
      }
    ]
  },

  "gran canaria": {
    summary: "Gran Canaria og De Kanariske Øer tilbyder helårs-sol og ikoniske naturistområder, anført af de verdensberømte Maspalomas-klitter.",
    keywords: ["gran canaria", "canaria", "maspalomas", "playa del ingles", "dunas", "kanariske", "canary", "lanzarote", "fuerteventura", "tenerife", "charco del palo"],
    locations: [
      {
        id: "loc-gc-maspalomas",
        name: "Maspalomas Klitstrand (Kiosk 4 & 5)",
        type: "beach",
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
        description: "En unik landsby på Lanzarotes nordøstkyst, hvor hele byen og de naturlige tidevandsbassiner er dedikeret til naturisme året rundt.",
        lat: 29.0830,
        lng: -13.4520,
        address: "Charco del Palo, 35543 Mala, Lanzarote, De Kanariske Øer"
      },
      {
        id: "loc-gc-guigui",
        name: "Playa de Güi Güi",
        type: "beach",
        description: "En afsides, spektakulær vulkansk naturstrand på Gran Canarias vestkyst, omgivet af tårnhøje klipper, der kun kan nås efter en smuk vandretur eller med båd.",
        lat: 27.9542,
        lng: -15.8239,
        address: "Güi Güi, La Aldea de San Nicolás, Gran Canaria"
      }
    ]
  },

  kreta: {
    summary: "Kreta har en stærk naturisttradition med Chora Sfakion og Vritomartis Resort som det ubestridte centrum ved Det Libyske Hav.",
    keywords: ["kreta", "crete", "sfakia", "chora sfakion", "vritomartis", "filaki", "matala", "plakias", "kommos"],
    locations: [
      {
        id: "loc-kreta-vritomartis",
        name: "Vritomartis Naturist Resort",
        type: "resort",
        description: "Kretas førende og internationalt anerkendte naturistresort ved Chora Sfakion med 25-meter pool, bungalows, tennis og shuttlebus til Filaki-stranden.",
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
        description: "Kretas primære officielle naturiststrand beliggende tæt ved Vritomartis med krystalklart vand, rolige klippeomgivelser og strandtaverna.",
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
        description: "Ikonisk rødlig sandstrand bag klipperne ved Matala, kendt fra hippietiden og i dag en velkendt og fredelig naturiststrand.",
        lat: 34.9860,
        lng: 24.7490,
        address: "Matala, 70200 Kreta, Grækenland"
      }
    ]
  },

  graekenland: {
    summary: "Grækenland byder på hundredvis af solbeskinnede øer med idylliske naturiststrande, turkisblåt vand og afslappet middelhavsstemning.",
    keywords: ["grækenland", "graekenland", "greece", "korfu", "corfu", "mykonos", "skiathos", "rhodos", "santorini", "athen", "athens", "zakynthos", "kos"],
    locations: [
      {
        id: "loc-gr-vritomartis",
        name: "Vritomartis Naturist Resort (Kreta)",
        type: "resort",
        description: "Grækenlands mest berømte 4-stjernede naturistresort beliggende i Chora Sfakion på Kretas sydkyst.",
        lat: 35.1958,
        lng: 24.1486,
        address: "Chora Sfakion, 73011 Kreta, Grækenland",
        url: "https://www.vritomartis.gr/",
        image: "https://www.vritomartis.gr/wp-content/uploads/DSC_5627-scaled.jpg"
      },
      {
        id: "loc-gr-mirtiotissa",
        name: "Mirtiotissa Strand (Korfu)",
        type: "beach",
        description: "Beskrevet af forfatteren Lawrence Durrell som en af verdens smukkeste strande. En frodig klippeomkranset bugt med krystalklart vand og mangeårig naturisttradition.",
        lat: 39.6150,
        lng: 19.8020,
        address: "Mirtiotissa, 49100 Korfu, Grækenland"
      },
      {
        id: "loc-gr-littlebanana",
        name: "Little Banana Beach (Skiathos)",
        type: "beach",
        description: "En af Det Ægæiske Havs mest berømte naturiststrande. Fin gylden sandstrand omgivet af velduftende pinjeskove og turkisblåt hav.",
        lat: 39.1480,
        lng: 23.3980,
        address: "Koukounaries, 37002 Skiathos, Grækenland"
      },
      {
        id: "loc-gr-elia",
        name: "Elia Strand (Mykonos)",
        type: "beach",
        description: "Mykonos' længste sandstrand. Den fjerneste østlige ende bag klipperne er et velrenommeret og fredeligt naturistområde.",
        lat: 37.4220,
        lng: 25.3910,
        address: "Elia Beach, 84600 Mykonos, Grækenland"
      }
    ]
  },

  tyskland: {
    summary: "Tyskland er oprindelseslandet for FKK-kulturen (Freikörperkultur) med legendariske strande ved Nordsøen og Østersøen.",
    keywords: ["tyskland", "germany", "deutschland", "fkk", "sylt", "rügen", "rugen", "berlin", "münchen", "munich", "hamborg", "hamburg", "ostsee"],
    locations: [
      {
        id: "loc-de-sylt",
        name: "Buhne 16 (Sylt, Kampen)",
        type: "beach",
        description: "Tysklands mest legendariske FKK-strand, berømt siden 1960'erne. Beliggende i de vilde klitter på øen Sylt med en ikonisk strandbistro.",
        lat: 54.9650,
        lng: 8.3380,
        address: "Buhne 16, 25999 Kampen, Sylt, Tyskland"
      },
      {
        id: "loc-de-prerow",
        name: "Prerow Nordstrand (Fischland-Darß-Zingst)",
        type: "beach",
        description: "En af Europas fineste hvide sandstrande ved Østersøen med op til 100 meters bredde og en kæmpe, populær FKK-sektion.",
        lat: 54.4550,
        lng: 12.5700,
        address: "Bernsteinweg, 18375 Prerow, Østersøen, Tyskland"
      },
      {
        id: "loc-de-flaucher",
        name: "Flaucher (Isar, München)",
        type: "beach",
        description: "De berømte grusbanker langs floden Isar midt i München, hvor nøgenbadning og grillhygge har været en elsket bayersk tradition i over et århundrede.",
        lat: 48.1100,
        lng: 11.5580,
        address: "Isarauen, 81379 München, Tyskland"
      }
    ]
  },

  italien: {
    summary: "Italien byder på smukke autoriserede naturiststrande (Oasi Naturista) langs Adriaterhavet, Toscana og det sydlige Middelhav.",
    keywords: ["italien", "italy", "italia", "toscana", "tuscany", "sardinien", "sardinia", "sicilien", "sicily", "rom", "rome", "ravenna", "calabria"],
    locations: [
      {
        id: "loc-it-pizzogreco",
        name: "Camping Pizzo Greco (Calabrien)",
        type: "resort",
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
        description: "Italiens mest berømte og officielt anerkendte naturiststrand nær Ravenna ved et fredet fyrreskovsreservat.",
        lat: 44.3850,
        lng: 12.3150,
        address: "Viale Matelda, 48124 Lido di Dante, Ravenna, Italien"
      },
      {
        id: "loc-it-nidodellaquila",
        name: "Spiaggia del Nido dell'Aquila (Toscana)",
        type: "beach",
        description: "Klassisk toscansk naturiststrand i San Vincenzo omgivet af klitter og middelhavsmaki med gyldent sand og rent badevand.",
        lat: 43.0450,
        lng: 10.5350,
        address: "Parco di Rimigliano, 57027 San Vincenzo, Toscana, Italien"
      }
    ]
  },

  portugal: {
    summary: "Portugal byder på storslåede Atlanterhavsstrande, hvor naturisme har officiel status på flere af landets smukkeste kyststrækninger.",
    keywords: ["portugal", "algarve", "tavira", "lissabon", "lisbon", "sintra", "sesimbra", "alentejo", "faro"],
    locations: [
      {
        id: "loc-pt-homemnu",
        name: "Praia do Homem Nu (Tavira, Algarve)",
        type: "beach",
        description: "'Den nøgne mands strand' på øen Ilha de Tavira. En uendelig, fredfyldt sandstrand i naturparken Ria Formosa, hvor naturisme er officielt tilladt.",
        lat: 37.0750,
        lng: -7.6880,
        address: "Ilha de Tavira, 8800 Tavira, Algarve, Portugal"
      },
      {
        id: "loc-pt-meco",
        name: "Praia do Meco (Sesimbra / Lissabon)",
        type: "beach",
        description: "Portugals historiske vugge for naturisme siden 1970'erne. En kæmpe sandstrand syd for Lissabon flankeret af lerskrænter og Atlanterhavets bølger.",
        lat: 38.4890,
        lng: -9.1830,
        address: "Aldeia do Meco, 2970 Sesimbra, Portugal"
      },
      {
        id: "loc-pt-ursa",
        name: "Praia da Ursa (Sintra)",
        type: "beach",
        description: "En af verdens mest spektakulære naturstrande nær Cabo da Roca med majestætiske klippesøjler i havet og enestående ro.",
        lat: 38.7905,
        lng: -9.4975,
        address: "Cabo da Roca, 2705 Colares, Sintra, Portugal"
      }
    ]
  },

  skandinavien: {
    summary: "I Skandinavien (Sverige og Norge) er friluftsliv og naturisme integreret i kystkulturen med velordnede naturistbadepladser.",
    keywords: ["sverige", "sweden", "norge", "norway", "stockholm", "oslo", "malmø", "malmö", "göteborg", "gothenburg", "bergen"],
    locations: [
      {
        id: "loc-se-agesta",
        name: "Ågesta Naturistbad (Stockholm, Sverige)",
        type: "beach",
        description: "Sveriges første og mest populære officielle naturistbadested ved søen Magelungen syd for Stockholm med sandstrand, græsplæner, badebro og sauna.",
        lat: 59.2250,
        lng: 18.0850,
        address: "Vidjavägen, 123 52 Farsta, Stockholm, Sverige"
      },
      {
        id: "loc-se-ribersborg",
        name: "Ribersborg Strand Brygga 10 (Malmö, Sverige)",
        type: "beach",
        description: "Malmös traditionsrige naturiststrand ved Øresund med fantastisk udsigt over havet og nærhed til det historiske Ribersborgs Kallbadhus.",
        lat: 55.6020,
        lng: 12.9650,
        address: "Limhamnsvägen, 217 59 Malmö, Sverige"
      },
      {
        id: "loc-no-huk",
        name: "Huk Naturiststrand (Bygdøy, Oslo, Norge)",
        type: "beach",
        description: "Norges mest kendte og velbesøgte naturiststrand yderst på den naturskønne Bygdøy-halvø i Oslo med klipper, sand og græsområder.",
        lat: 59.8970,
        lng: 10.6780,
        address: "Bygdøy, 0286 Oslo, Norge"
      }
    ]
  },

  dubai: {
    summary: "Advarsel: I De Forenede Arabiske Emirater (inkl. Dubai og Abu Dhabi) er offentlig nøgenhed, naturisme og topløs solbadning strengt forbudt.",
    keywords: ["dubai", "uae", "emiraterne", "abu dhabi", "sharjah", "qatar"],
    locations: [
      {
        id: "loc-dubai-warning",
        name: "Dubai & De Forenede Arabiske Emirater",
        type: "other",
        description: "Naturisme, topløs solbadning og offentlig nøgenhed er strengt forbudt i hele UAE og straffes hårdt med fængsel, store bøder og udvisning i henhold til straffeloven.",
        lat: 25.2048,
        lng: 55.2708,
        address: "Dubai, De Forenede Arabiske Emirater",
        warning: "STRENGT FORBUDT: Offentlig nøgenhed og naturisme er ulovligt i UAE og medfører fængselsstraf eller udvisning. Der findes ingen lovlige naturiststeder i landet."
      }
    ]
  }
};

// Search curated database with fuzzy and keyword matching
export function searchCuratedDatabase(query: string): SearchResult | null {
  const q = query.trim().toLowerCase();
  if (!q) return null;

  // Direct group key or keyword check
  for (const [key, group] of Object.entries(CURATED_DATABASE)) {
    if (
      q === key ||
      q.includes(key) ||
      key.includes(q) ||
      group.keywords.some(kw => q.includes(kw) || kw.includes(q))
    ) {
      return {
        locations: group.locations,
        summary: group.summary,
        sources: []
      };
    }
  }

  // Check matching by location name or description
  const matchingLocations: NaturistLocation[] = [];
  for (const group of Object.values(CURATED_DATABASE)) {
    for (const loc of group.locations) {
      if (
        loc.name.toLowerCase().includes(q) ||
        (loc.address && loc.address.toLowerCase().includes(q)) ||
        loc.description.toLowerCase().includes(q)
      ) {
        matchingLocations.push(loc);
      }
    }
  }

  if (matchingLocations.length > 0) {
    return {
      locations: matchingLocations.slice(0, 8),
      summary: `Fandt ${matchingLocations.length} naturist-destinationer for "${query}".`,
      sources: []
    };
  }

  // Generic natural terms (f.eks. "resort", "camping", "strand", "europa")
  if (q.includes("resort") || q.includes("hotel")) {
    const resorts: NaturistLocation[] = [];
    for (const group of Object.values(CURATED_DATABASE)) {
      for (const loc of group.locations) {
        if (loc.type === 'resort') resorts.push(loc);
      }
    }
    return {
      locations: resorts.slice(0, 6),
      summary: "Her er et udvalg af Europas mest anerkendte naturist-resorts og feriebyer.",
      sources: []
    };
  }

  if (q.includes("camping") || q.includes("lejr")) {
    const campsites: NaturistLocation[] = [];
    for (const group of Object.values(CURATED_DATABASE)) {
      for (const loc of group.locations) {
        if (loc.type === 'campsite' || loc.type === 'resort') campsites.push(loc);
      }
    }
    return {
      locations: campsites.slice(0, 6),
      summary: "Her er de mest populære naturistcampingpladser i Danmark og Europa.",
      sources: []
    };
  }

  if (q.includes("strand") || q.includes("beach")) {
    const beaches: NaturistLocation[] = [];
    for (const group of Object.values(CURATED_DATABASE)) {
      for (const loc of group.locations) {
        if (loc.type === 'beach') beaches.push(loc);
      }
    }
    return {
      locations: beaches.slice(0, 6),
      summary: "Her er et udvalg af berømte og smukke naturiststrande i Europa.",
      sources: []
    };
  }

  return null;
}

// Suggestions provider for search bar
export const ALL_SUGGESTIONS = [
  "Korsika",
  "Kroatien",
  "Spanien",
  "Frankrig",
  "Danmark",
  "Gran Canaria",
  "Kreta",
  "Grækenland",
  "Vera Playa",
  "Cap d'Agde",
  "Istrien",
  "Rovinj",
  "Chora Sfakion",
  "Tyskland",
  "Italien",
  "Portugal",
  "Sverige",
  "Norge",
  "Bornholm",
  "Skagen",
  "Ibiza",
  "Mallorca",
  "Maspalomas",
  "Korfu",
  "Dubai"
];
