import { NaturistLocation, SearchResult } from "./types";

export interface ExtendedNaturistLocation extends NaturistLocation {
  country: string;
  region: string;
  keywords?: string[];
}

export const ALL_LOCATIONS_DATABASE: ExtendedNaturistLocation[] = [
  // ==========================================
  // PORTUGAL (ALGARVE, LISSABON, ALENTEJO, CENTRO)
  // ==========================================
  {
    id: "loc-pt-meco",
    name: "Praia do Meco (Sesimbra / Lissabon)",
    type: "beach",
    country: "Portugal",
    region: "Lissabon / Setúbal",
    keywords: ["portugal", "meco", "sesimbra", "lissabon", "lisbon", "setubal", "strand"],
    description: "Portugals historiske vugge for naturisme siden 1970'erne. En kæmpe gylden sandstrand syd for Lissabon flankeret af lerskrænter og Atlanterhavets friske bølger.",
    lat: 38.4890,
    lng: -9.1830,
    address: "Aldeia do Meco, 2970 Sesimbra, Portugal"
  },
  {
    id: "loc-pt-belavista",
    name: "Praia da Bela Vista (Costa da Caparica)",
    type: "beach",
    country: "Portugal",
    region: "Costa da Caparica / Lissabon",
    keywords: ["portugal", "bela vista", "costa da caparica", "caparica", "lissabon", "strand"],
    description: "Portugals første officielt legaliserede naturiststrand (anerkendt i 1995). Nås med det lille strandtog (Paragem 17) gennem klitlandskabet syd for Lissabon.",
    lat: 38.6015,
    lng: -9.2155,
    address: "Paragem 17, Costa da Caparica, 2825 Almada, Portugal"
  },
  {
    id: "loc-pt-adica",
    name: "Praia da Adiça (Costa da Caparica Syd)",
    type: "beach",
    country: "Portugal",
    region: "Costa da Caparica / Lissabon",
    keywords: ["portugal", "adica", "adiça", "costa da caparica", "caparica", "strand"],
    description: "Officiel naturiststrand ved Caparica-kystens sydlige ende for foden af den fredede fossil-klint Arriba Fóssil. Vild natur og total ro.",
    lat: 38.5680,
    lng: -9.1990,
    address: "Fonte da Telha Syd, Costa da Caparica, Portugal"
  },
  {
    id: "loc-pt-ursa",
    name: "Praia da Ursa (Sintra / Cabo da Roca)",
    type: "beach",
    country: "Portugal",
    region: "Sintra",
    keywords: ["portugal", "ursa", "sintra", "cabo da roca", "strand"],
    description: "En af Europas mest spektakulære vilde strande lige nord for Cabo da Roca (Europas vestligste punkt). Kæmpe klippetårne og krystalklart Atlanterhav. Kræver ca. 20 min. vandretur ned ad klippestien.",
    lat: 38.7905,
    lng: -9.4975,
    address: "Cabo da Roca, 2705 Colares, Sintra, Portugal"
  },
  {
    id: "loc-pt-homemnu",
    name: "Praia do Homem Nu / Barril (Tavira, Algarve)",
    type: "beach",
    country: "Portugal",
    region: "Algarve",
    keywords: ["portugal", "algarve", "tavira", "homem nu", "barril", "strand"],
    description: "'Den nøgne mands strand' på øen Ilha de Tavira. En uendelig, fredfyldt sandstrand i naturparken Ria Formosa, hvor naturisme er officielt tilladt vest for anker-kirkegården ved Praia do Barril.",
    lat: 37.0750,
    lng: -7.6880,
    address: "Ilha de Tavira, 8800 Tavira, Algarve, Portugal"
  },
  {
    id: "loc-pt-adegas",
    name: "Praia das Adegas (Odeceixe, Costa Vicentina)",
    type: "beach",
    country: "Portugal",
    region: "Algarve / Costa Vicentina",
    keywords: ["portugal", "algarve", "adegas", "odeceixe", "costa vicentina", "strand"],
    description: "Officielt udpeget naturiststrand i en beskyttet bugt lige syd for Praia de Odeceixe. Omgivet af høje sorte skifre-klipper med gyldent sand og rolige badeforhold ved lavvande.",
    lat: 37.4380,
    lng: -8.8020,
    address: "Praia de Odeceixe, 8670 Aljezur, Algarve, Portugal"
  },
  {
    id: "loc-pt-alteirinhos",
    name: "Praia dos Alteirinhos (Zambujeira do Mar, Alentejo)",
    type: "beach",
    country: "Portugal",
    region: "Alentejo / Vicentina",
    keywords: ["portugal", "alteirinhos", "zambujeira do mar", "alentejo", "strand"],
    description: "Officiel naturiststrand syd for den maleriske kystby Zambujeira do Mar. Sandstrand afskærmet af mørke klippevægge med et lille naturligt vandfald om vinteren/foråret.",
    lat: 37.5200,
    lng: -8.7880,
    address: "Zambujeira do Mar, 7630 Odemira, Alentejo, Portugal"
  },
  {
    id: "loc-pt-malhao",
    name: "Praia do Malhão (Vila Nova de Milfontes, Alentejo)",
    type: "beach",
    country: "Portugal",
    region: "Alentejo",
    keywords: ["portugal", "malhao", "malhão", "vila nova de milfontes", "alentejo", "strand"],
    description: "En langstrakt og vild kyststrækning med dramatiske klitter. Naturister benytter traditionelt den nordlige sektion, hvor klipperne skaber lækroge.",
    lat: 37.7780,
    lng: -8.8020,
    address: "Malhão, 7645 Vila Nova de Milfontes, Alentejo, Portugal"
  },
  {
    id: "loc-pt-ilhadesserta",
    name: "Praia da Barreta / Ilha Deserta (Faro, Algarve)",
    type: "beach",
    country: "Portugal",
    region: "Algarve",
    keywords: ["portugal", "algarve", "ilha deserta", "barreta", "faro", "strand"],
    description: "Den sydligste ø i Portugal nås med færge fra Faro. 7 km uberørt hvid sandstrand i Ria Formosa naturparken med god plads til fredelig naturisme.",
    lat: 36.9620,
    lng: -7.9620,
    address: "Ilha da Barreta, 8000 Faro, Algarve, Portugal"
  },
  {
    id: "loc-pt-beliche",
    name: "Praia do Beliche (Sagres / Cabo de São Vicente)",
    type: "beach",
    country: "Portugal",
    region: "Algarve",
    keywords: ["portugal", "algarve", "beliche", "sagres", "cabo sao vicente", "strand"],
    description: "Gemt mellem 40 meter høje kalkstensklipper mellem Sagres og fyrtårnet ved Cabo de São Vicente. Populær blandt naturister på grund af læ for vinden og det varme gyldne sand.",
    lat: 37.0260,
    lng: -8.9630,
    address: "Estrada de Sagres, 8650 Sagres, Algarve, Portugal"
  },
  {
    id: "loc-pt-zavial",
    name: "Praia do Zavial (Vila do Bispo, Algarve)",
    type: "beach",
    country: "Portugal",
    region: "Algarve",
    keywords: ["portugal", "algarve", "zavial", "vila do bispo", "sagres", "strand"],
    description: "Den østlige del af Zavial-bugten under de høje klipper er en anerkendt og elsket naturistkrog med fint sand og krystalklart vand.",
    lat: 37.0450,
    lng: -8.8720,
    address: "Zavial, Hortas do Tabual, 8650 Vila do Bispo, Algarve, Portugal"
  },
  {
    id: "loc-pt-salgados",
    name: "Praia dos Salgados & Galé Naturist (Albufeira, Algarve)",
    type: "beach",
    country: "Portugal",
    region: "Algarve",
    keywords: ["portugal", "algarve", "salgados", "gale", "albufeira", "strand"],
    description: "Klitområdet mellem Salgados lagunen og Galé vest for Albufeira har en bred, fredfyldt sandstrand, hvor naturister igennem årtier har nydt solen.",
    lat: 37.0880,
    lng: -8.3280,
    address: "Praia dos Salgados, 8200 Albufeira, Algarve, Portugal"
  },
  {
    id: "loc-pt-bordeira",
    name: "Praia da Bordeira / Carrapateira (Costa Vicentina)",
    type: "beach",
    country: "Portugal",
    region: "Algarve / Costa Vicentina",
    keywords: ["portugal", "algarve", "bordeira", "carrapateira", "costa vicentina", "strand"],
    description: "Kæmpemæssig sandflade og klitlandskab med en lille flodmunding. Naturister færdes frit og uforstyrret i de nordlige klitrækker.",
    lat: 37.1970,
    lng: -8.9030,
    address: "Carrapateira, 8670 Aljezur, Algarve, Portugal"
  },
  {
    id: "loc-pt-armona",
    name: "Praia da Fuseta / Ilha de Armona Naturist (Algarve)",
    type: "beach",
    country: "Portugal",
    region: "Algarve",
    keywords: ["portugal", "algarve", "armona", "fuseta", "olhao", "strand"],
    description: "Officiel naturistsektion på øen Ilha de Armona ud for Fuseta og Olhão. Kilometerlang hvid sandtange i det lune vand i det østlige Algarve.",
    lat: 37.0420,
    lng: -7.7280,
    address: "Ilha de Armona, 8700 Olhão, Algarve, Portugal"
  },
  {
    id: "loc-pt-montedasera",
    name: "Monte da Serra Naturist Resort (Algarve)",
    type: "resort",
    country: "Portugal",
    region: "Algarve",
    keywords: ["portugal", "algarve", "monte da serra", "resort", "hotel", "spa", "camping"],
    description: "Fredfyldt naturistferiested i Algarves smukke bagland nær Silves og Monchique. Pool, haver, luksuriøse hytter og afslappet naturistfællesskab.",
    lat: 37.2350,
    lng: -8.4550,
    address: "Monte da Serra, 8300 Silves, Algarve, Portugal",
    url: "https://www.montedaserra.com/"
  },
  {
    id: "loc-pt-cegonhas",
    name: "Quinta das Cegonhas Naturist Camping (Serra da Estrela)",
    type: "campsite",
    country: "Portugal",
    region: "Centro / Serra da Estrela",
    keywords: ["portugal", "cegonhas", "serra da estrela", "gouveia", "camping", "resort"],
    description: "Højt vurderet naturistcampingplads ved foden af bjergkæden Serra da Estrela med swimmingpool, panoramaudsigt, olivenlunde og vandreruter.",
    lat: 40.5050,
    lng: -7.5250,
    address: "Ribeira de Alvendre, 6290 Gouveia, Portugal",
    url: "https://www.cegonhas.com/"
  },
  {
    id: "loc-pt-maral",
    name: "Naturist Camping Quinta do Maral (Marvão / Alentejo)",
    type: "campsite",
    country: "Portugal",
    region: "Alentejo / Marvão",
    keywords: ["portugal", "maral", "marvao", "alentejo", "camping"],
    description: "Idyllisk naturistcamping i São Mamede Naturpark tæt på den historiske middelalderborg i Marvão. Korkege, kildepool og absolut fred.",
    lat: 39.3850,
    lng: -7.3450,
    address: "7330 Marvão, Alentejo, Portugal"
  },
  {
    id: "loc-pt-barao",
    name: "Monte Naturista O Barão (Ourique, Baixo Alentejo)",
    type: "resort",
    country: "Portugal",
    region: "Alentejo",
    keywords: ["portugal", "barao", "barão", "ourique", "alentejo", "resort", "camping"],
    description: "Charmerende naturistparadis i Alentejos bølgende bakker med saltvandspool, sauna, luksushytter og ægte portugisisk gæstfrihed.",
    lat: 37.6450,
    lng: -8.2250,
    address: "Aldeia dos Palheiros, 7670 Ourique, Alentejo, Portugal"
  },
  {
    id: "loc-pt-cerejeira",
    name: "FKK Camping Quinta da Cerejeira (Centro / Zêzere)",
    type: "campsite",
    country: "Portugal",
    region: "Centro",
    keywords: ["portugal", "cerejeira", "zezere", "ferreira do zezere", "camping"],
    description: "Lille hyggelig naturistcampingplads nær den store sø Castelo de Bode med pool, frugttræer og rolig atmosfære.",
    lat: 39.6950,
    lng: -8.2850,
    address: "2240 Ferreira do Zêzere, Santarém, Portugal"
  },

  // ==========================================
  // SPANIEN (FASTLANDET, BALEARERNE, KANARISKE ØER)
  // ==========================================
  {
    id: "loc-es-veraplaya",
    name: "Vera Playa Naturist Resort (Almería, Andalusien)",
    type: "resort",
    country: "Spanien",
    region: "Andalusien",
    keywords: ["spanien", "spain", "vera playa", "almeria", "andalusien", "resort", "hotel", "strand", "camping"],
    description: "Europas største helårs naturistcenter. En hel kystbydel hvor tøj er valgfrit overalt – inklusive det berømte Vera Playa Club Hotel, restauranter, ferieboliger og 2 km bred sandstrand.",
    lat: 37.2025,
    lng: -1.8050,
    address: "Calle Carretera de Garrucha a Villaricos, 04621 Vera, Almería, Spanien",
    url: "https://www.playasenator.com/en/hotels/vera-playa-club-hotel/",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "loc-es-costanatura",
    name: "Costa Natura Naturist Village (Estepona, Costa del Sol)",
    type: "resort",
    country: "Spanien",
    region: "Costa del Sol / Andalusien",
    keywords: ["spanien", "spain", "costa natura", "estepona", "costa del sol", "malaga", "resort", "feriecenter"],
    description: "Spaniens første officielle naturist-resortby, grundlagt i 1979. Beliggende direkte til Middelhavet med palmehaver, opvarmet pool, sauna, restaurant og privat strandadgang.",
    lat: 36.4020,
    lng: -5.1950,
    address: "Carretera N340 Km 151, 29680 Estepona, Málaga, Spanien",
    url: "https://costanatura.com/"
  },
  {
    id: "loc-es-elportus",
    name: "Camping Naturista El Portús (Cartagena, Murcia)",
    type: "resort",
    country: "Spanien",
    region: "Murcia",
    keywords: ["spanien", "spain", "el portus", "portús", "cartagena", "murcia", "resort", "camping", "spa"],
    description: "Kæmpe 100 hektar naturistresort beliggende i en fredet naturpark direkte ved den private bugt Cala Morena. Åbent hele året med opvarmet indendørs pool, spa, hytter og camping.",
    lat: 37.5850,
    lng: -1.0650,
    address: "Cala Morena, 30397 El Portús, Cartagena, Murcia, Spanien",
    url: "https://www.elportus.com/"
  },
  {
    id: "loc-es-eltemplo",
    name: "Camping El Templo del Sol (Platja del Torn, Tarragona)",
    type: "campsite",
    country: "Spanien",
    region: "Catalonien",
    keywords: ["spanien", "spain", "templo del sol", "platja del torn", "torn", "tarragona", "camping", "resort"],
    description: "5-stjernet maurisk-inspireret luksus-naturistcampingplads beliggende direkte ved Platja del Torn – en af Europas mest legendariske naturiststrande i Catalonien.",
    lat: 40.9820,
    lng: 0.8850,
    address: "Platja del Torn, 43890 L'Hospitalet de l'Infant, Tarragona, Spanien",
    url: "https://www.eltemplodelsol.com/"
  },
  {
    id: "loc-es-cantarrijan",
    name: "Playa de Cantarriján (La Herradura / Costa Tropical)",
    type: "beach",
    country: "Spanien",
    region: "Andalusien / Granada",
    keywords: ["spanien", "spain", "cantarrijan", "cantarriján", "la herradura", "nerja", "granada", "strand"],
    description: "Spektakulær naturiststrand gemt mellem klipperne i Maro-Cerro Gordo naturparken. To hyggelige strandrestauranter med frisk fisk og krystalklart vand til snorkling.",
    lat: 36.7440,
    lng: -3.7850,
    address: "Playa Cantarriján, 18697 Almuñécar, Granada, Spanien"
  },
  {
    id: "loc-es-bolonia",
    name: "Playa de Bolonia & El Cañuelo (Tarifa / Cadiz)",
    type: "beach",
    country: "Spanien",
    region: "Costa de la Luz / Andalusien",
    keywords: ["spanien", "spain", "bolonia", "tarifa", "cadiz", "costa de la luz", "strand"],
    description: "Berømt for den kæmpestore vandreklit og romerske ruiner. Den sydlige sektion mod El Cañuelo er et fredfyldt paradis for naturister med udsigt til Marokko.",
    lat: 36.0820,
    lng: -5.7750,
    address: "Bolonia, 11391 Tarifa, Cádiz, Spanien"
  },
  {
    id: "loc-es-canosdemeca",
    name: "Playa de Zahora & Caños de Meca (Cádiz)",
    type: "beach",
    country: "Spanien",
    region: "Costa de la Luz / Andalusien",
    keywords: ["spanien", "spain", "canos de meca", "zahora", "trafalgar", "cadiz", "strand"],
    description: "Omkring Trafalgar-fyrtårnet findes udstrakte gyldne strande med rolig og boheme-agtig naturiststemning ved Atlanterhavet.",
    lat: 36.1850,
    lng: -6.0350,
    address: "Playa de Zahora, 11159 Barbate, Cádiz, Spanien"
  },
  {
    id: "loc-es-saler",
    name: "Platja del Saler (Valencia / Albufera)",
    type: "beach",
    country: "Spanien",
    region: "Valencia",
    keywords: ["spanien", "spain", "saler", "valencia", "albufera", "strand"],
    description: "Valencias mest elskede naturiststrand i Albufera naturparken, omgivet af fyrretræer og klitter kun 15 minutter fra bymidten.",
    lat: 39.3850,
    lng: -0.3280,
    address: "Platja del Saler, 46012 Valencia, Spanien"
  },
  {
    id: "loc-es-waikiki",
    name: "Cala Fonda / Playa Waikiki (Tarragona)",
    type: "beach",
    country: "Spanien",
    region: "Catalonien",
    keywords: ["spanien", "spain", "waikiki", "cala fonda", "tarragona", "strand"],
    description: "Uberørt og afsondret naturistbugt omgivet af klippeskrænter og duftende fyrreskove. En af Cataloniens bedst bevarede kyststrækninger.",
    lat: 41.1290,
    lng: 1.3280,
    address: "Bosc de la Marquesa, 43008 Tarragona, Spanien"
  },
  {
    id: "loc-es-marbella-bcn",
    name: "Platja de la Mar Bella (Barcelona)",
    type: "beach",
    country: "Spanien",
    region: "Barcelona / Catalonien",
    keywords: ["spanien", "spain", "mar bella", "barcelona", "strand"],
    description: "Barcelonas officielle storbynaturiststrand ved Poblenou med livlig strandbar, vandsport og nem adgang med metroen.",
    lat: 41.3995,
    lng: 2.2085,
    address: "Passeig Marítim del Bogatell, 08005 Barcelona, Spanien"
  },
  {
    id: "loc-es-torimbia",
    name: "Playa de Torimbia (Llanes, Asturien)",
    type: "beach",
    country: "Spanien",
    region: "Asturien / Nordspanien",
    keywords: ["spanien", "spain", "torimbia", "llanes", "asturien", "nordspanien", "strand"],
    description: "Kåret som en af verdens smukkeste naturiststrande: En perfekt halvmåneformet bugt omgivet af grønne bjergsider og Atlanterhavet.",
    lat: 43.4420,
    lng: -4.8520,
    address: "Niembro, 33595 Llanes, Asturien, Spanien"
  },
  {
    id: "loc-es-estrenc",
    name: "Platja des Trenc (Mallorca)",
    type: "beach",
    country: "Spanien",
    region: "Mallorca / Balearerne",
    keywords: ["spanien", "spain", "mallorca", "es trenc", "balearerne", "strand"],
    description: "Mallorcas berømte 'Caribiske' strand med over 2 km kridhvidt sand og lavt turkist vand. Den centrale del mellem ses Covetes og Colonia Sant Jordi er et naturistparadis.",
    lat: 39.3450,
    lng: 2.9850,
    address: "Campos, 07630 Mallorca, Balearerne, Spanien"
  },
  {
    id: "loc-es-collbaix",
    name: "Platja des Coll Baix (Alcudia, Mallorca)",
    type: "beach",
    country: "Spanien",
    region: "Mallorca / Balearerne",
    keywords: ["spanien", "spain", "mallorca", "coll baix", "alcudia", "strand"],
    description: "Dramatisk sten- og sandstrand for foden af lodrette klipper på Alcudia-halvøen. Nås via smuk vandretur.",
    lat: 39.8600,
    lng: 3.1900,
    address: "Camí del Coll Baix, 07400 Alcúdia, Mallorca, Spanien"
  },
  {
    id: "loc-es-aguasblancas",
    name: "Platja d'Aigües Blanques / Aguas Blancas (Ibiza)",
    type: "beach",
    country: "Spanien",
    region: "Ibiza / Balearerne",
    keywords: ["spanien", "spain", "ibiza", "aguas blancas", "aigues blanques", "balearerne", "strand"],
    description: "Ikonisk naturiststrand på Ibizas nordøstkyst med gyldent sand, dramatisk klippevæg og naturligt rødt lermudder til hudpleje.",
    lat: 39.0600,
    lng: 1.5890,
    address: "07850 Santa Eulària des Riu, Ibiza, Spanien"
  },
  {
    id: "loc-es-escavallet",
    name: "Platja des Cavallet (Ibiza)",
    type: "beach",
    country: "Spanien",
    region: "Ibiza / Balearerne",
    keywords: ["spanien", "spain", "ibiza", "es cavallet", "cavallet", "balearerne", "strand"],
    description: "Ibizas officielle naturiststrand beliggende i naturreservatet Ses Salines med vilde klitter, turkist vand og berømte strandklubber.",
    lat: 38.8500,
    lng: 1.4020,
    address: "Ses Salines, 07817 Sant Josep de sa Talaia, Ibiza, Spanien"
  },
  {
    id: "loc-es-sesilletes",
    name: "Platja de Ses Illetes & Llevant (Formentera)",
    type: "beach",
    country: "Spanien",
    region: "Formentera / Balearerne",
    keywords: ["spanien", "spain", "formentera", "ses illetes", "llevant", "balearerne", "strand"],
    description: "Europas svar på Maldiverne. En smal landtange med krystalklart vand til begge sider, hvor naturister bader side om side i harmoni.",
    lat: 38.7580,
    lng: 1.4320,
    address: "07871 Formentera, Balearerne, Spanien"
  },
  {
    id: "loc-menorca-macarelleta",
    name: "Cala Macarelleta (Menorca Sydkyst)",
    type: "beach",
    country: "Spanien",
    region: "Menorca / Balearerne",
    keywords: ["spanien", "spain", "menorca", "macarelleta", "balearerne", "strand"],
    description: "Menorcas mest fotograferede paradisbugt med kridhvidt sand og turkist vand, omgivet af duftende pinjeskove. Naturisme er en stolt tradition her.",
    lat: 39.9325,
    lng: 3.9360,
    address: "Cala Macarelleta, 07769 Ciutadella de Menorca, Spanien"
  },
  {
    id: "loc-menorca-trebaluger",
    name: "Cala Trebalúger (Menorca Sydkyst)",
    type: "beach",
    country: "Spanien",
    region: "Menorca / Balearerne",
    keywords: ["spanien", "spain", "menorca", "trebaluger", "trebalúger", "balearerne", "strand"],
    description: "Fredet og uspoleret naturiststrand med en lille ferskvandsflod. Nås via vandrestien Camí de Cavalls.",
    lat: 39.9280,
    lng: 3.9920,
    address: "Cala Trebalúger, 07749 Es Migjorn Gran, Menorca, Spanien"
  },
  {
    id: "loc-menorca-pregonda",
    name: "Cala Pregonda (Menorca Nordkyst)",
    type: "beach",
    country: "Spanien",
    region: "Menorca / Balearerne",
    keywords: ["spanien", "spain", "menorca", "pregonda", "balearerne", "strand"],
    description: "Spektakulær strand på nordkysten med gyldent-rødt sand og beskyttende klippeøer i et uberørt marinereservat.",
    lat: 40.0570,
    lng: 4.0410,
    address: "Cala Pregonda, 07748 Es Mercadal, Menorca, Spanien"
  },
  {
    id: "loc-menorca-pilar",
    name: "Cala Pilar (Menorca Nordvestkyst)",
    type: "beach",
    country: "Spanien",
    region: "Menorca / Balearerne",
    keywords: ["spanien", "spain", "menorca", "pilar", "cala pilar", "balearerne", "strand"],
    description: "Vild og ugeneret naturistperle med gyldent sand og røde klipper omgivet af naturreservat.",
    lat: 40.0530,
    lng: 3.9780,
    address: "Cala Pilar, 07769 Ciutadella de Menorca, Spanien"
  },
  {
    id: "loc-menorca-cavalleria",
    name: "Platja de Cavalleria (Menorca Nordkyst)",
    type: "beach",
    country: "Spanien",
    region: "Menorca / Balearerne",
    keywords: ["spanien", "spain", "menorca", "cavalleria", "balearerne", "strand"],
    description: "Stor vild naturstrand ved Cap de Cavalleria med rustrødt sand. Den østlige del er traditionel naturiststrand.",
    lat: 40.0600,
    lng: 4.0760,
    address: "07748 Es Mercadal, Menorca, Spanien"
  },
  {
    id: "loc-es-maspalomas",
    name: "Dunas de Maspalomas / Klit 4-7 (Gran Canaria)",
    type: "beach",
    country: "Spanien",
    region: "Gran Canaria / De Kanariske Øer",
    keywords: ["spanien", "spain", "gran canaria", "maspalomas", "kanariske øer", "strand", "klitter"],
    description: "Verdensberømt ørkenklitlandskab ud mod Atlanterhavet. Kioskerne 4 til 7 huser et af verdens største og mest populære naturistområder året rundt.",
    lat: 27.7420,
    lng: -15.5780,
    address: "Playa de Maspalomas, 35100 San Bartolomé de Tirajana, Gran Canaria, Spanien"
  },
  {
    id: "loc-es-charcodelpalo",
    name: "Charco del Palo Naturist Village (Lanzarote)",
    type: "resort",
    country: "Spanien",
    region: "Lanzarote / De Kanariske Øer",
    keywords: ["spanien", "spain", "lanzarote", "charco del palo", "kanariske øer", "resort", "naturistby"],
    description: "En hel naturistlandsby grundlagt i 1970'erne på Lanzarotes nordøstkyst. Naturlige tidevandsbassiner i vulkanklippen, lejligheder, barer og restauranter hvor tøj er valgfrit overalt.",
    lat: 29.0830,
    lng: -13.4520,
    address: "Charco del Palo, 35543 Haría, Lanzarote, Spanien"
  },
  {
    id: "loc-es-papagayo",
    name: "Playa de Papagayo & Playa de Las Mujeres (Lanzarote)",
    type: "beach",
    country: "Spanien",
    region: "Lanzarote / De Kanariske Øer",
    keywords: ["spanien", "spain", "lanzarote", "papagayo", "playa blanca", "strand"],
    description: "Beskyttede gyldne sandbugter i naturparken Los Ajaches tæt ved Playa Blanca. Naturister benytter især Playa de Las Mujeres og Caleta del Congrio.",
    lat: 28.8430,
    lng: -13.7880,
    address: "Los Ajaches, 35580 Yaiza, Lanzarote, Spanien"
  },
  {
    id: "loc-es-cofete",
    name: "Playa de Cofete (Jandía, Fuerteventura)",
    type: "beach",
    country: "Spanien",
    region: "Fuerteventura / De Kanariske Øer",
    keywords: ["spanien", "spain", "fuerteventura", "cofete", "jandia", "strand"],
    description: "En af Europas mest storslåede vilde kyster. 14 km uafbrudt gyldent sand for foden af 800 meter høje vulkanbjerge med uendelig plads til naturister.",
    lat: 28.1150,
    lng: -14.3750,
    address: "Cofete, 35626 Pájara, Fuerteventura, Spanien"
  },
  {
    id: "loc-es-lasgaviotas",
    name: "Playa de Las Gaviotas (Santa Cruz de Tenerife)",
    type: "beach",
    country: "Spanien",
    region: "Tenerife / De Kanariske Øer",
    keywords: ["spanien", "spain", "tenerife", "las gaviotas", "kanariske øer", "strand"],
    description: "Klassisk naturiststrand med fint sort vulkansand tæt på Las Teresitas for foden af Anaga-bjergkæden.",
    lat: 28.5120,
    lng: -16.1680,
    address: "Carretera Igueste de San Andrés, 38120 Santa Cruz de Tenerife, Spanien"
  },
  {
    id: "loc-es-latejita",
    name: "Playa de La Tejita & Montaña Roja (El Médano, Tenerife)",
    type: "beach",
    country: "Spanien",
    region: "Tenerife / De Kanariske Øer",
    keywords: ["spanien", "spain", "tenerife", "la tejita", "el medano", "strand"],
    description: "Bred natursandstrand for foden af det røde vulkankrater Montaña Roja. Den østlige bugt er en fredet officiel naturiststrand.",
    lat: 28.0310,
    lng: -16.5580,
    address: "38612 El Médano, Granadilla de Abona, Tenerife, Spanien"
  },

  // ==========================================
  // FRANKRIG (FASTLANDET & KORSIKA)
  // ==========================================
  {
    id: "loc-fra-capdagde",
    name: "Village Naturiste Cap d'Agde",
    type: "resort",
    country: "Frankrig",
    region: "Languedoc-Roussillon",
    keywords: ["frankrig", "france", "cap d'agde", "cap dagde", "agde", "resort", "strand"],
    description: "Verdens største og mest kendte naturistby. En hel havneby med 2 km sandstrand, lystbådehavn, hundredvis af butikker, restauranter og et berømt natteliv.",
    lat: 43.2925,
    lng: 3.5350,
    address: "Boulevard des Matelots, 34300 Agde, Hérault, Frankrig",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "loc-fra-montalivet",
    name: "CHM Montalivet (Gironde, Atlanterhavet)",
    type: "resort",
    country: "Frankrig",
    region: "Aquitaine",
    keywords: ["frankrig", "france", "montalivet", "chm", "gironde", "resort", "camping"],
    description: "Naturismens historiske fødested grundlagt i 1950. En kæmpe 200 hektar familie-naturistpark i Atlanterhavets fyrreskove med direkte adgang til vilde sandstrande.",
    lat: 45.3620,
    lng: -1.1550,
    address: "33930 Vendays-Montalivet, Gironde, Frankrig",
    url: "https://www.chm-montalivet.com/"
  },
  {
    id: "loc-fra-euronat",
    name: "Euronat Centre Naturiste (Gironde)",
    type: "resort",
    country: "Frankrig",
    region: "Aquitaine",
    keywords: ["frankrig", "france", "euronat", "grayan", "gironde", "resort", "camping", "spa"],
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
    id: "loc-fra-serignan",
    name: "Le Sérignan Plage Nature (Hérault)",
    type: "campsite",
    country: "Frankrig",
    region: "Languedoc",
    keywords: ["frankrig", "france", "serignan", "sérignan", "herault", "camping", "resort"],
    description: "Luksuriøs 4-stjernet naturistcamping direkte ved en bred sandstrand ved Middelhavet med et enestående romersk balneoterapi-spaområde.",
    lat: 43.2750,
    lng: 3.3280,
    address: "34410 Sérignan, Hérault, Frankrig",
    url: "https://www.leserignanplage.com/"
  },
  {
    id: "loc-fra-belezy",
    name: "Domaine de Bélézy (Provence / Mont Ventoux)",
    type: "resort",
    country: "Frankrig",
    region: "Provence",
    keywords: ["frankrig", "france", "belezy", "bélézy", "bedoin", "provence", "resort"],
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
    keywords: ["frankrig", "france", "ile du levant", "heliopolis", "hyeres", "cote d'azur", "strand"],
    description: "Den legendariske naturist-ø ud for Hyères, hvor Héliopolis blev grundlagt i 1931 som verdens første naturistlandsby.",
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
    keywords: ["frankrig", "france", "espiguette", "grau du roi", "camargue", "strand"],
    description: "10 km vilde, uberørte klitter i Camargue. Den østlige del huser en kæmpe officiel naturiststrand.",
    lat: 43.4880,
    lng: 4.1450,
    address: "30240 Le Grau-du-Roi, Gard, Frankrig"
  },
  {
    id: "loc-korsika-rivabella",
    name: "Riva Bella Thalasso & Spa Resort (Korsika)",
    type: "resort",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["frankrig", "france", "korsika", "corsica", "riva bella", "resort", "camping"],
    description: "4-stjernet naturistresort beliggende direkte på Korsikas østkyst i Aléria. Åbent hele året med ægte saltvands-thalassoterapi, spa, vilde lamaer og bungalows i sandklitterne.",
    lat: 42.1280,
    lng: 9.5510,
    address: "Route de Riva Bella, 20270 Aléria, Korsika, Frankrig",
    url: "https://www.rivabella-spa.com/"
  },
  {
    id: "loc-korsika-bagheera",
    name: "Domaine de Bagheera (Korsika)",
    type: "resort",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["frankrig", "france", "korsika", "corsica", "bagheera", "bravone", "resort", "camping"],
    description: "100 hektar uberørt egeskov og 5 km kridhvid sandstrand ved Bravone. Førende miljøvenligt naturistresort med hytter, camping, restauranter og vandsport.",
    lat: 42.1850,
    lng: 9.5620,
    address: "20230 Bravone, Linguizzetta, Korsika, Frankrig",
    url: "https://www.bagheera.fr/"
  },
  {
    id: "loc-korsika-lachiappa",
    name: "Camping Naturiste La Chiappa (Porto-Vecchio, Korsika)",
    type: "campsite",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["frankrig", "france", "korsika", "corsica", "chiappa", "porto-vecchio", "resort", "camping"],
    description: "Spektakulært 60 hektar naturistferiested på en klippefyldt halvø i Porto-Vecchio bugten ved Palombaggia. Egen dykkerskole, to opvarmede pools og krystalklart vand.",
    lat: 41.5950,
    lng: 9.3550,
    address: "Route de la Chiappa, 20137 Porto-Vecchio, Korsika, Frankrig",
    url: "https://www.chiappa.com/"
  },
  {
    id: "loc-korsika-ufuru",
    name: "Camping U Furu Naturiste (Porto-Vecchio / Sydkorsika)",
    type: "campsite",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["frankrig", "france", "korsika", "corsica", "u furu", "porto-vecchio", "camping"],
    description: "Unik oase i bjergene ved Porto-Vecchio omgivet af klippeformationer, fyrretræer og en forfriskende bjergflod med naturlige ferskvandspools.",
    lat: 41.5620,
    lng: 9.2250,
    address: "Pisciatello, 20137 Porto-Vecchio, Korsika, Frankrig"
  },
  {
    id: "loc-korsika-bodri",
    name: "Plage de Bodri / Botre (L'Île-Rousse / Balagne)",
    type: "beach",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["frankrig", "france", "korsika", "corsica", "bodri", "ile-rousse", "balagne", "strand"],
    description: "Kridhvid finkornet sandstrand med turkist vand. Den sydlige sektion mod klipperne er en af Nordkorsikas mest populære og anerkendte naturiststrande.",
    lat: 42.6320,
    lng: 8.9050,
    address: "20220 Corbara, Balagne, Korsika, Frankrig"
  },
  {
    id: "loc-korsika-saleccia",
    name: "Plage de Saleccia (Désert des Agriates)",
    type: "beach",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["frankrig", "france", "korsika", "corsica", "saleccia", "agriates", "st florent", "strand"],
    description: "En af Middelhavets mest uberørte og berømte vilde strande med 1 km hvidt sand og fyrretræer i Agriates-ørkenen. Naturister nyder de ubebyggede yderender.",
    lat: 42.7260,
    lng: 9.2040,
    address: "Désert des Agriates, 20246 Santo-Pietro-di-Tenda, Korsika, Frankrig"
  },
  {
    id: "loc-korsika-bravone",
    name: "Plage de Bravone Naturiste (Korsika Østkyst)",
    type: "beach",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["frankrig", "france", "korsika", "corsica", "bravone", "linguizzetta", "strand"],
    description: "Kilometerlang uspoleret gylden sandstrand nord for Aléria i Linguizzetta, kendt for sit varme rolige vand og fredelige naturistmiljø.",
    lat: 42.1950,
    lng: 9.5650,
    address: "Marine de Bravone, 20230 Linguizzetta, Korsika, Frankrig"
  },
  {
    id: "loc-korsika-roccapina",
    name: "Plage de Roccapina (Sartène / Sydvestkorsika)",
    type: "beach",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["frankrig", "france", "korsika", "corsica", "roccapina", "sartene", "strand"],
    description: "Postkort-bugt med turkist vand overvåget af den berømte løveklippe 'Lion de Roccapina'. Naturisme praktiseres uforstyrret i bugtens yderender.",
    lat: 41.4980,
    lng: 8.9350,
    address: "Roccapina, 20100 Sartène, Korsika, Frankrig"
  },
  {
    id: "loc-korsika-fango",
    name: "Vallée du Fango Klippebassiner (Galéria / Vestkorsika)",
    type: "other",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["frankrig", "france", "korsika", "corsica", "fango", "galeria", "flod", "bassiner"],
    description: "Fredet UNESCO-biosfærereservat med lune, krystalklare ferskvandspools og lyserøde granitterasser i Fango-floden. Et populært ferskvandsalternativ for naturister.",
    lat: 42.4150,
    lng: 8.7050,
    address: "Vallée du Fango, 20245 Galéria, Korsika, Frankrig"
  },
  {
    id: "loc-korsika-ghjunchitu",
    name: "Plage de Ghjunchitu (Balagne / L'Île-Rousse)",
    type: "beach",
    country: "Frankrig",
    region: "Korsika",
    keywords: ["frankrig", "france", "korsika", "corsica", "ghjunchitu", "balagne", "strand"],
    description: "Søsterstranden til Bodri med fint hvidt sand og krystalklart vand omgivet af duftende maquis. Klipperne mod syd er et velkendt naturistområde.",
    lat: 42.6350,
    lng: 8.8950,
    address: "20220 Corbara, Korsika, Frankrig"
  },
  {
    id: "loc-fra-tahiti",
    name: "Plage de Tahiti (Saint-Tropez / Ramatuelle)",
    type: "beach",
    country: "Frankrig",
    region: "Côte d'Azur",
    keywords: ["frankrig", "france", "saint-tropez", "st tropez", "tahiti", "pampelonne", "strand"],
    description: "Den nordlige ende af den berømte Pampelonne-strand ved Saint-Tropez, der siden 1950'erne har været kendt for afslappet fransk naturisme og strandliv.",
    lat: 43.2350,
    lng: 6.6680,
    address: "Plage de Pampelonne, 83350 Ramatuelle, Frankrig"
  },
  {
    id: "loc-fra-lasabliere",
    name: "Domaine de La Sablière (Gorges de la Cèze, Gard)",
    type: "resort",
    country: "Frankrig",
    region: "Gard / Sydfrankrig",
    keywords: ["frankrig", "france", "la sabliere", "sablière", "ceze", "gard", "resort", "camping"],
    description: "62 hektar naturskønt resort i kløften Gorges de la Cèze med privat flodstrand, store opvarmede swimmingpools, sauna og udendørs sportsfaciliteter.",
    lat: 44.2480,
    lng: 4.4150,
    address: "30630 Barjac, Gard, Frankrig",
    url: "https://www.camping-lasabliere.com/"
  },

  // ==========================================
  // KROATIEN (ISTRIEN, KVARNER, DALMATIEN)
  // ==========================================
  {
    id: "loc-cro-valalta",
    name: "Valalta Naturist Camp & Resort (Rovinj, Istrien)",
    type: "resort",
    country: "Kroatien",
    region: "Istrien",
    keywords: ["kroatien", "croatia", "valalta", "rovinj", "istrien", "resort", "camping"],
    description: "Europas mest berømte og prisbelønnede naturistresort ved Limfjorden i Rovinj. 5 km kyststrækning med sand- og rullestensstrande, kæmpe poolanlæg med havvand og eget bryggeri.",
    lat: 45.1220,
    lng: 13.6310,
    address: "Cesta za Valaltu - Lim 7, 52210 Rovinj, Istrien, Kroatien",
    url: "https://www.valalta.hr/"
  },
  {
    id: "loc-cro-koversada",
    name: "Koversada Naturist Park (Vrsar, Istrien)",
    type: "resort",
    country: "Kroatien",
    region: "Istrien",
    keywords: ["kroatien", "croatia", "koversada", "vrsar", "istrien", "resort", "camping"],
    description: "Verdens ældste naturistcenter grundlagt i 1961. Omfatter en hel privat ø forbundet med fastlandet via en træbro, omgivet af frodig middelhavsnatur.",
    lat: 45.1450,
    lng: 13.5980,
    address: "Koversada 1, 52450 Vrsar, Istrien, Kroatien",
    url: "https://www.maistra.com/properties/naturist-park-koversada-apartments/"
  },
  {
    id: "loc-cro-bunculuka",
    name: "Camping Bunculuka Naturist Resort (Baška, Krk)",
    type: "resort",
    country: "Kroatien",
    region: "Kvarner / Øen Krk",
    keywords: ["kroatien", "croatia", "bunculuka", "baska", "baška", "krk", "camping", "resort"],
    description: "Luksuriøst 4-stjernet naturistferiested gemt i en intim bugt omgivet af fyrreskov og høje hvide bjerge med direkte adgang til krystalklart vand.",
    lat: 44.9680,
    lng: 14.7680,
    address: "Kricin 30, 51523 Baška, Krk, Kroatien",
    url: "https://www.camping-adriatic.com/bunculuka-camp-krk"
  },
  {
    id: "loc-cro-solaris",
    name: "Solaris Naturist Camping Resort (Poreč, Istrien)",
    type: "campsite",
    country: "Kroatien",
    region: "Istrien",
    keywords: ["kroatien", "croatia", "solaris", "porec", "poreč", "istrien", "camping", "resort"],
    description: "Beliggende på den grønne Lanterna-halvø nord for Poreč med 2,5 km kystlinje, pools med havudsigt, sportsfaciliteter og bungalows.",
    lat: 45.2890,
    lng: 13.5850,
    address: "Solaris 1, 52465 Tar-Vabriga, Poreč, Istrien, Kroatien"
  },
  {
    id: "loc-cro-kandarola",
    name: "FKK Beach Kandarola (Øen Rab)",
    type: "beach",
    country: "Kroatien",
    region: "Kvarner / Øen Rab",
    keywords: ["kroatien", "croatia", "kandarola", "rab", "strand"],
    description: "'The English King's Beach' – hvor Kong Edward VIII og Wallis Simpson badede nøgne i 1936 og kickstartede Adriaterhavets naturisme.",
    lat: 44.7550,
    lng: 14.7250,
    address: "Frkanj Halvøen, 51280 Rab, Kroatien"
  },
  {
    id: "loc-cro-lokrum",
    name: "FKK Beach Lokrum (Dubrovnik)",
    type: "beach",
    country: "Kroatien",
    region: "Dalmatien / Dubrovnik",
    keywords: ["kroatien", "croatia", "lokrum", "dubrovnik", "dalmatien", "strand"],
    description: "Kun 15 minutters færgetur fra Dubrovniks gamle havn. Klippestranden på øens sydøstlige spids er en fredelig naturistoase.",
    lat: 42.6240,
    lng: 18.1210,
    address: "Øen Lokrum, 20000 Dubrovnik, Kroatien"
  },
  {
    id: "loc-cro-nugal",
    name: "Nugal Beach (Makarska Riviera)",
    type: "beach",
    country: "Kroatien",
    region: "Dalmatien",
    keywords: ["kroatien", "croatia", "nugal", "makarska", "dalmatien", "strand"],
    description: "En af Adriaterhavets smukkeste naturiststrande, gemt under en 30 meter lodret klippevæg i Osejava-skovparken.",
    lat: 43.2810,
    lng: 17.0350,
    address: "Park Šuma Osejava, 21300 Makarska, Kroatien"
  },
  {
    id: "loc-cro-baldarin",
    name: "FKK Camping Baldarin (Punta Križa, Cres)",
    type: "campsite",
    country: "Kroatien",
    region: "Kvarner / Øen Cres",
    keywords: ["kroatien", "croatia", "baldarin", "cres", "punta kriza", "camping"],
    description: "En af Adriaterhavets mest fredfyldte og vilde naturistcampingpladser på sydspidsen af øen Cres, omgivet af tætte egeskove og krystalklart turkist hav.",
    lat: 44.6190,
    lng: 14.5050,
    address: "Punta Križa 66, 51554 Nerezine, Cres, Kroatien",
    url: "https://www.camp-baldarin.com/"
  },
  {
    id: "loc-cro-ulika",
    name: "FKK Camping Ulika (Poreč, Istrien)",
    type: "campsite",
    country: "Kroatien",
    region: "Istrien",
    keywords: ["kroatien", "croatia", "ulika", "porec", "poreč", "istrien", "camping"],
    description: "4-stjernet familievenlig naturistcampingplads nord for Poreč med swimmingpool, mobile homes, restauranter og 2,5 km sten- og klippestrand med Blåt Flag.",
    lat: 45.2620,
    lng: 13.5850,
    address: "Červar Porat, 52440 Poreč, Istrien, Kroatien",
    url: "https://www.plavalaguna.com/en/camping/ulika"
  },
  {
    id: "loc-cro-kanegra",
    name: "FKK Camping Kanegra (Umag, Istrien)",
    type: "campsite",
    country: "Kroatien",
    region: "Istrien",
    keywords: ["kroatien", "croatia", "kanegra", "umag", "istrien", "camping"],
    description: "Beliggende i Piran-bugten tæt på den slovenske grænse, omgivet af grønne pinjetræer og en smuk rullestensstrand med roligt badevand.",
    lat: 45.4850,
    lng: 13.5620,
    address: "Kanegra 2, 52470 Umag, Istrien, Kroatien"
  },
  {
    id: "loc-cro-sahara",
    name: "Sahara Beach & Stolac (Lopar, Øen Rab)",
    type: "beach",
    country: "Kroatien",
    region: "Kvarner / Øen Rab",
    keywords: ["kroatien", "croatia", "sahara", "lopar", "rab", "strand"],
    description: "En af Kroatiens sjældne ægte sandstrande. En bred, fredet halvmåneformet bugt omgivet af lave klipper, hvor naturisme har været dyrket i årtier.",
    lat: 44.8380,
    lng: 14.7480,
    address: "Lopar, 51281 Rab, Kroatien"
  },
  {
    id: "loc-cro-paklina",
    name: "FKK Beach Paklina (Bol, Øen Brač)",
    type: "beach",
    country: "Kroatien",
    region: "Dalmatien / Øen Brač",
    keywords: ["kroatien", "croatia", "paklina", "bol", "brac", "brač", "strand"],
    description: "Ligger lige vest for det berømte gyldne horn Zlatni Rat. Afsondrede små rullestensbugter i skyggen af pinjeskove med fantastisk badevand.",
    lat: 43.2550,
    lng: 16.6210,
    address: "Bol, 21420 Brač, Kroatien"
  },
  {
    id: "loc-cro-jerolim",
    name: "FKK Beach Jerolim (Pakleni Øerne, Hvar)",
    type: "beach",
    country: "Kroatien",
    region: "Dalmatien / Hvar",
    keywords: ["kroatien", "croatia", "jerolim", "hvar", "pakleni", "strand"],
    description: "En lille fredet ø ud for byen Hvar, kåret af CNN som en af verdens førende naturiststrande med krystalklart vand og hyggelig ø-bar.",
    lat: 43.1610,
    lng: 16.4350,
    address: "Sveti Jerolim, 21450 Hvar, Kroatien"
  },
  {
    id: "loc-cro-stipanska",
    name: "FKK Beach Stipanska / Marinkovac (Hvar)",
    type: "beach",
    country: "Kroatien",
    region: "Dalmatien / Hvar",
    keywords: ["kroatien", "croatia", "stipanska", "hvar", "marinkovac", "strand"],
    description: "Klassisk naturistø i Pakleni-skærgården med glatte klippeplateauer og turkist vand kun 10 minutters bådtur fra Hvar havn.",
    lat: 43.1550,
    lng: 16.4250,
    address: "Marinkovac, 21450 Hvar, Kroatien"
  },
  {
    id: "loc-cro-proizd",
    name: "Bili Boci FKK Beach (Øen Proizd, Korčula)",
    type: "beach",
    country: "Kroatien",
    region: "Dalmatien / Korčula",
    keywords: ["kroatien", "croatia", "proizd", "korcula", "korčula", "vela luka", "strand"],
    description: "Kridhvide skrånende klipper og turkist hav kåret som Kroatiens smukkeste strand. Den nordlige sektion er dedikeret til naturister.",
    lat: 42.9850,
    lng: 16.6120,
    address: "Proizd, 20270 Vela Luka, Korčula, Kroatien"
  },
  {
    id: "loc-cro-vrulja",
    name: "FKK Beach Vrulja (Brela / Makarska)",
    type: "beach",
    country: "Kroatien",
    region: "Dalmatien",
    keywords: ["kroatien", "croatia", "vrulja", "brela", "makarska", "strand"],
    description: "Skjult bugt for foden af monumentale Biokovo-bjerge, hvor underjordiske ferskvandskilder springer ud i havet. Betagende vild natur.",
    lat: 43.3980,
    lng: 16.8850,
    address: "21322 Brela, Makarska Riviera, Kroatien"
  },
  {
    id: "loc-cro-istra",
    name: "Istra Naturist Camping (Funtana, Vrsar)",
    type: "campsite",
    country: "Kroatien",
    region: "Istrien",
    keywords: ["kroatien", "croatia", "istra", "funtana", "vrsar", "istrien", "camping"],
    description: "Rolig og idyllisk naturistcampingplads beliggende på en skovklædt halvø med udsigt til Vrsars skærgård og Limfjorden.",
    lat: 45.1780,
    lng: 13.6020,
    address: "Grgeti 35, 52452 Funtana, Istrien, Kroatien"
  },

  // ==========================================
  // GRÆKENLAND (KRETA & DE GRÆSKE ØER)
  // ==========================================
  {
    id: "loc-gre-vritomartis",
    name: "Vritomartis Naturist Resort (Chora Sfakion, Kreta)",
    type: "resort",
    country: "Grækenland",
    region: "Kreta",
    keywords: ["grækenland", "greece", "kreta", "crete", "vritomartis", "sfakia", "resort", "hotel"],
    description: "Grækenlands eneste fuldt licenserede 4-stjernede naturisthotel og resort. Omgivet af De Hvide Bjerge og Det Libyske Hav med privat adgang til Filakaki-bugten.",
    lat: 35.2045,
    lng: 24.1485,
    address: "Chora Sfakion, 73011 Kreta, Grækenland",
    url: "https://www.vritomartis.gr/"
  },
  {
    id: "loc-gre-filakaki",
    name: "Filakaki Naturist Beach (Sfakia, Sydkreta)",
    type: "beach",
    country: "Grækenland",
    region: "Kreta",
    keywords: ["grækenland", "greece", "kreta", "filakaki", "sfakia", "strand"],
    description: "Krystalklar sten- og sandbugt under Vritomartis Resort med turkist vand og naturlige klippehuler ud til Det Libyske Hav.",
    lat: 35.2010,
    lng: 24.1520,
    address: "Chora Sfakion, 73011 Kreta, Grækenland"
  },
  {
    id: "loc-gre-redbeach",
    name: "Red Beach / Kokkini Ammos (Matala, Kreta)",
    type: "beach",
    country: "Grækenland",
    region: "Kreta",
    keywords: ["grækenland", "greece", "kreta", "red beach", "matala", "kokkini ammos", "strand"],
    description: "Legendarisk naturiststrand med rustrødt sand og høje klipper syd for Matala. Nås via ca. 25 minutters vandretur.",
    lat: 34.9860,
    lng: 24.7490,
    address: "Matala, 70400 Kreta, Grækenland"
  },
  {
    id: "loc-gre-plakias",
    name: "Plakias & Souda Naturist Beach (Rethymno, Kreta)",
    type: "beach",
    country: "Grækenland",
    region: "Kreta",
    keywords: ["grækenland", "greece", "kreta", "plakias", "souda", "rethymno", "strand"],
    description: "Den østlige ende af Plakias-bugten under den monumentale Paligremnos-klippevæg er et af Kretas ældste naturistmødesteder.",
    lat: 35.1870,
    lng: 24.3980,
    address: "Plakias, 74060 Rethymno, Kreta, Grækenland"
  },
  {
    id: "loc-gre-banana",
    name: "Little Banana Beach (Skiathos)",
    type: "beach",
    country: "Grækenland",
    region: "Sporaderne / Skiathos",
    keywords: ["grækenland", "greece", "skiathos", "banana beach", "little banana", "strand"],
    description: "Grækenlands mest berømte naturiststrand gennem årtier. En intim gylden sandbugt omgivet af pinjetræer og krystalklart Ægæisk hav.",
    lat: 39.1480,
    lng: 23.3980,
    address: "Koukounaries, 37002 Skiathos, Grækenland"
  },
  {
    id: "loc-gre-mirtiotissa",
    name: "Mirtiotissa Beach (Korfu)",
    type: "beach",
    country: "Grækenland",
    region: "De Joniske Øer / Korfu",
    keywords: ["grækenland", "greece", "korfu", "corfu", "mirtiotissa", "strand"],
    description: "Beskrevet af forfatteren Lawrence Durrell som 'måske den dejligste strand i verden'. Omgivet af dramatiske grønne klippeskrænter.",
    lat: 39.6150,
    lng: 19.7850,
    address: "Vatos, 49100 Korfu, Grækenland"
  },
  {
    id: "loc-gre-superparadise",
    name: "Super Paradise & Elia Naturist Beach (Mykonos)",
    type: "beach",
    country: "Grækenland",
    region: "Kykladerne / Mykonos",
    keywords: ["grækenland", "greece", "mykonos", "elia", "super paradise", "strand"],
    description: "Elia Beach er Mykonos' største sandstrand, hvor den østlige klippeende traditionelt er et afslappet og venligt naturistområde.",
    lat: 37.4220,
    lng: 25.3880,
    address: "Elia Beach, 84600 Mykonos, Grækenland"
  },

  // ==========================================
  // DANMARK (SJÆLLAND, JYLLAND, FYN, BORNHOLM)
  // ==========================================
  {
    id: "loc-dk-solbakken",
    name: "Solbakken Naturistcamping (Kirke Såby, Sjælland)",
    type: "campsite",
    country: "Danmark",
    region: "Sjælland",
    keywords: ["danmark", "denmark", "solbakken", "kirke såby", "roskilde", "sjælland", "camping"],
    description: "Danmarks ældste og største naturistcampingplads grundlagt i 1957. Beliggende i naturskønne omgivelser tæt på Roskilde Fjord med swimmingpool, sauna, minigolf, café og et aktivt fællesskab.",
    lat: 55.6380,
    lng: 11.8750,
    address: "Solbakkevej 25, 4060 Kirke Såby, Sjælland, Danmark",
    url: "https://solbakken-naturistcamping.dk/"
  },
  {
    id: "loc-dk-nfj",
    name: "NFJ Camping / Als FKK (Skodsbøl / Sønderjylland)",
    type: "campsite",
    country: "Danmark",
    region: "Sønderjylland",
    keywords: ["danmark", "denmark", "nfj", "als fkk", "skodsbøl", "sønderjylland", "jylland", "camping"],
    description: "Moderne og velrenommeret naturistcampingplads på Sundeved tæt ved Als og Flensborg Fjord. Pladsen byder på opvarmet swimmingpool, sauna, petanque og udendørsfaciliteter.",
    lat: 54.9350,
    lng: 9.6880,
    address: "Skodsbølmarkvej 23, 6310 Broager, Danmark",
    url: "https://www.alsfkk.dk/"
  },
  {
    id: "loc-dk-sandager",
    name: "Sandager Næs FKK sektion (Vestfyn)",
    type: "campsite",
    country: "Danmark",
    region: "Fyn",
    keywords: ["danmark", "denmark", "sandager næs", "vestfyn", "fyn", "camping"],
    description: "Populær campingplads ud til Lillebælt med en afskærmet naturistafdeling, swimmingpool, børnefaciliteter og kystadgang.",
    lat: 55.3050,
    lng: 9.8750,
    address: "Sandager Næsvej 35, 5610 Assens, Fyn, Danmark"
  },
  {
    id: "loc-dk-bellevue",
    name: "Bellevue Strand (Klampenborg / København)",
    type: "beach",
    country: "Danmark",
    region: "Hovedstaden",
    keywords: ["danmark", "denmark", "bellevue", "klampenborg", "københavn", "strand"],
    description: "Den nordlige del af den ikoniske Arne Jacobsen-designede strand er en af Danmarks ældste og mest kendte storbynaturiststrande.",
    lat: 55.7780,
    lng: 12.5930,
    address: "Strandvejen 340, 2930 Klampenborg, Danmark"
  },
  {
    id: "loc-dk-tisvilde",
    name: "Tisvildeleje & Tisvilde Hegn Strand (Nordsjælland)",
    type: "beach",
    country: "Danmark",
    region: "Nordsjælland",
    keywords: ["danmark", "denmark", "tisvilde", "tisvildeleje", "tisvilde hegn", "sjælland", "strand"],
    description: "Mellem Tisvildeleje og Liseleje ligger en bred hvid sandstrand i læ for Tisvilde Hegns store fyrreskove. Naturister benytter traditionelt stranden vest for hovednedgangen.",
    lat: 56.0610,
    lng: 12.0650,
    address: "Kystvej, 3220 Tisvildeleje, Danmark"
  },
  {
    id: "loc-dk-boto",
    name: "Bøtø Strand (Marielyst / Falster)",
    type: "beach",
    country: "Danmark",
    region: "Falster",
    keywords: ["danmark", "denmark", "bøtø", "boto", "marielyst", "falster", "strand"],
    description: "Kåret blandt Danmarks fineste sandstrande. Den fredede sydlige del ved Bøtø Nor og Bøtø Skov er et anerkendt naturistparadis.",
    lat: 54.6720,
    lng: 11.9580,
    address: "Bøtø Ringvej, 4873 Væggerløse, Falster, Danmark"
  },
  {
    id: "loc-dk-dueodde",
    name: "Dueodde Strand Naturistsektion (Bornholm)",
    type: "beach",
    country: "Danmark",
    region: "Bornholm",
    keywords: ["danmark", "denmark", "dueodde", "bornholm", "østersøen", "strand"],
    description: "Verdensberømt for sit ultrafine hvide sand, der blev brugt i timeglas. Strækningen mod Jomfrugård vest for fyret er traditionel naturiststrand.",
    lat: 54.9950,
    lng: 15.0750,
    address: "Dueoddevej, 3730 Nexø, Bornholm, Danmark"
  },
  {
    id: "loc-dk-moesgaard",
    name: "Moesgård Strand (Aarhus)",
    type: "beach",
    country: "Danmark",
    region: "Østjylland",
    keywords: ["danmark", "denmark", "moesgård", "moesgaard", "aarhus", "jylland", "strand"],
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
    id: "loc-dk-romo",
    name: "Sønderstrand (Rømø / Vadehavet)",
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
  // ITALIEN & TYSKLAND & DUBAI
  // ==========================================
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
    id: "loc-it-mortelle",
    name: "Spiaggia delle Mortelle (Marina di Grosseto, Toscana)",
    type: "beach",
    country: "Italien",
    region: "Toscana",
    keywords: ["italien", "italy", "mortelle", "grosseto", "toscana", "strand"],
    description: "Bred vild sandstrand mellem fyrreskove og Middelhavet i Maremma, anerkendt som en af Toscanas bedste naturiststrande.",
    lat: 42.7050,
    lng: 11.0350,
    address: "58100 Marina di Grosseto, Toscana, Italien"
  },
  {
    id: "loc-it-baratti",
    name: "Spiaggia di Baratti & Nido dell'Aquila (San Vincenzo, Toscana)",
    type: "beach",
    country: "Italien",
    region: "Toscana",
    keywords: ["italien", "italy", "nido dell'aquila", "san vincenzo", "baratti", "toscana", "strand"],
    description: "Italiens mest traditionsrige naturistkyst i Toscana, beliggende i naturparken Rimigliano med gyldne klitter og pinjeskove.",
    lat: 43.0450,
    lng: 10.5350,
    address: "Parco di Rimigliano, 57027 San Vincenzo, Toscana, Italien"
  },
  {
    id: "loc-it-portoferro",
    name: "Spiaggia di Porto Ferro (Sardinien)",
    type: "beach",
    country: "Italien",
    region: "Sardinien",
    keywords: ["italien", "italy", "porto ferro", "sardinien", "sardegna", "strand"],
    description: "Sardiniens første officielle naturiststrand med orangerødt sand, dramatiske klitter og tre historiske spanske vagttårne.",
    lat: 40.6850,
    lng: 8.2050,
    address: "Porto Ferro, 07041 Sassari, Sardinien, Italien"
  },
  {
    id: "loc-it-bassona",
    name: "Spiaggia della Bassona / Lido di Dante (Ravenna)",
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
    id: "loc-it-capocotta",
    name: "Spiaggia di Capocotta (Rom / Ostia)",
    type: "beach",
    country: "Italien",
    region: "Lazio / Rom",
    keywords: ["italien", "italy", "capocotta", "rom", "rome", "ostia", "strand"],
    description: "Roms berømte officielle naturiststrand beliggende i naturreservatet Litorale Romano med beskyttede klitter og livlige strandbistroer.",
    lat: 41.6780,
    lng: 12.3680,
    address: "Via Litoranea Km 8, 00122 Ostia, Rom, Italien"
  },
  {
    id: "loc-it-camerota",
    name: "Spiaggia del Troncone (Marina di Camerota, Cilento)",
    type: "beach",
    country: "Italien",
    region: "Campania / Cilento",
    keywords: ["italien", "italy", "troncone", "camerota", "cilento", "campania", "strand"],
    description: "Officiel naturiststrand i Cilento Nationalpark i Campania omgivet af tårnhøje klippeskrænter og turkist vand.",
    lat: 40.0010,
    lng: 15.3950,
    address: "84059 Marina di Camerota, Salerno, Italien"
  },
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
    name: "Prerow Nordstrand (Østersøen, Darss)",
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
    id: "loc-de-schaabe",
    name: "FKK-Strand Schaabe (Rügen / Østersøen)",
    type: "beach",
    country: "Tyskland",
    region: "Mecklenburg-Vorpommern / Rügen",
    keywords: ["tyskland", "germany", "schaabe", "rügen", "rugen", "ostsee", "østersøen", "fkk", "strand"],
    description: "12 km lang uberørt sandstrand mellem Juliusruh og Glowe på Rügen. En af Tysklands mest storslåede kyststrækninger med udstrakte FKK-sektioner i klitterne.",
    lat: 54.5820,
    lng: 13.3850,
    address: "Schaabe, 18556 Glowe, Rügen, Tyskland"
  },
  {
    id: "loc-de-usedom",
    name: "FKK-Strand Ahlbeck & Bansin (Usedom / Østersøen)",
    type: "beach",
    country: "Tyskland",
    region: "Mecklenburg-Vorpommern / Usedom",
    keywords: ["tyskland", "germany", "usedom", "ahlbeck", "bansin", "ostsee", "fkk", "strand"],
    description: "Bred, finkornet sandstrand ved kejserbadene på Usedom med historiske kursteder og store, velbesøgte officielle FKK-afsnit.",
    lat: 53.9420,
    lng: 14.1950,
    address: "Strandpromenade, 17419 Ahlbeck, Usedom, Tyskland"
  },
  {
    id: "loc-de-wannsee",
    name: "Strandbad Wannsee FKK (Berlin)",
    type: "beach",
    country: "Tyskland",
    region: "Berlin",
    keywords: ["tyskland", "germany", "berlin", "wannsee", "fkk", "strand"],
    description: "Europas største indlandsstrandbad ved en sø. Den traditionsrige FKK-sektion ved søens bred har tiltrukket berlinere i over 100 år.",
    lat: 52.4380,
    lng: 13.1780,
    address: "Wannseebadweg 25, 14129 Berlin, Tyskland"
  },
  {
    id: "loc-de-mueggelsee",
    name: "Müggelsee FKK-Strand (Berlin)",
    type: "beach",
    country: "Tyskland",
    region: "Berlin",
    keywords: ["tyskland", "germany", "berlin", "müggelsee", "mueggelsee", "fkk", "strand"],
    description: "Berlins største sø med en elsket og livlig officiel FKK-strand i fyrreskoven ved Rahnsdorf.",
    lat: 52.4450,
    lng: 13.6750,
    address: "Fürstenwalder Damm 838, 12589 Berlin, Tyskland"
  },
  {
    id: "loc-de-englischergarten",
    name: "Englischer Garten & Eisbach FKK (München)",
    type: "other",
    country: "Tyskland",
    region: "Bayern / München",
    keywords: ["tyskland", "germany", "münchen", "munich", "bayern", "englischer garten", "fkk"],
    description: "Verdensberømt naturistområde i hjertet af München. På Schönfeldwiese og langs Eisbach-floden har nøgensolbadning været en stolt lokal tradition siden 1960'erne.",
    lat: 48.1510,
    lng: 11.5890,
    address: "Schönfeldwiese, Englischer Garten, 80538 München, Tyskland"
  },
  {
    id: "loc-de-fuehlinger",
    name: "FKK-Strand Fühlinger See (Köln)",
    type: "beach",
    country: "Tyskland",
    region: "Nordrhein-Westfalen / Köln",
    keywords: ["tyskland", "germany", "köln", "koeln", "fühlinger see", "fkk", "sø"],
    description: "Stort rekreativt søkompleks i Köln med en officiel, velbesøgt FKK-ø og strand omgivet af grønne plæner og træer.",
    lat: 50.9850,
    lng: 6.9250,
    address: "Oranjehofstraße, 50769 Köln, Tyskland"
  },
  {
    id: "loc-de-warnemuende",
    name: "FKK-Strand Warnemünde (Rostock / Østersøen)",
    type: "beach",
    country: "Tyskland",
    region: "Mecklenburg-Vorpommern",
    keywords: ["tyskland", "germany", "warnemünde", "warnemuende", "rostock", "ostsee", "fkk", "strand"],
    description: "Bredeste sandstrand ved den tyske Østersøkyst (op til 100 m bred). Store officielle FKK-sektioner vest for fyrtårnet mod Diedrichshagen.",
    lat: 54.1780,
    lng: 12.0620,
    address: "Strandweg, 18119 Warnemünde, Tyskland"
  },
  {
    id: "loc-de-zingst",
    name: "FKK-Strand Zingst (Fischland-Darss-Zingst)",
    type: "beach",
    country: "Tyskland",
    region: "Mecklenburg-Vorpommern",
    keywords: ["tyskland", "germany", "zingst", "darss", "ostsee", "fkk", "strand"],
    description: "Klassisk hvid Østersøstrand med klitter og kystskove i Nationalpark Vorpommersche Boddenlandschaft med populære FKK-overgange.",
    lat: 54.4380,
    lng: 12.6950,
    address: "Seestraße, 18374 Zingst, Tyskland"
  },
  {
    id: "loc-de-amrum",
    name: "Kniepsand FKK-Strand (Øen Amrum / Nordsøen)",
    type: "beach",
    country: "Tyskland",
    region: "Slesvig-Holsten / Vadehavet",
    keywords: ["tyskland", "germany", "amrum", "kniepsand", "nordsee", "nordsøen", "fkk", "strand"],
    description: "En 10 kvadratkilometer kæmpestor vandrende sandbanke ud mod Nordsøen. Fuldstændig frihed og kilometervis af plads til naturister.",
    lat: 54.6480,
    lng: 8.3250,
    address: "Kniepsand, 25946 Norddorf auf Amrum, Tyskland"
  },
  {
    id: "loc-de-rosenfelder",
    name: "FKK-Camping Rosenfelder Strand (Grube / Østersøen)",
    type: "campsite",
    country: "Tyskland",
    region: "Slesvig-Holsten",
    keywords: ["tyskland", "germany", "rosenfelder strand", "ostsee", "camping", "fkk"],
    description: "En af Tysklands førende 5-stjernede naturistcampingpladser direkte ved Østersøen med privat naturiststrand, sauna, restaurant og moderne faciliteter.",
    lat: 54.2620,
    lng: 11.0850,
    address: "Rosenfelder Strand 1, 23749 Grube, Tyskland",
    url: "https://www.rosenfelder-strand.de/"
  },
  {
    id: "loc-de-timmendorf",
    name: "FKK-Strand Timmendorfer Strand / Niendorf",
    type: "beach",
    country: "Tyskland",
    region: "Slesvig-Holsten / Lübeck Bugt",
    keywords: ["tyskland", "germany", "timmendorfer strand", "niendorf", "ostsee", "fkk", "strand"],
    description: "Populært og livligt FKK-afsnit med strandkurve i den berømte badeby Timmendorfer Strand ved Østersøen.",
    lat: 53.9980,
    lng: 10.8120,
    address: "Strandpromenade, 23669 Timmendorfer Strand, Tyskland"
  },
  {
    id: "loc-de-stpeter",
    name: "FKK-Strand St. Peter-Ording (Nordsøen)",
    type: "beach",
    country: "Tyskland",
    region: "Slesvig-Holsten",
    keywords: ["tyskland", "germany", "st peter ording", "spo", "nordsee", "fkk", "strand"],
    description: "12 km lang og op til 2 km bred sandstrand med de berømte pælehuse (Pfahlbauten). Den sydlige sektion i Böhl har en stor FKK-zone.",
    lat: 54.3120,
    lng: 8.5850,
    address: "Badestelle Ording / Böhl, 25826 St. Peter-Ording, Tyskland"
  },

  // ==========================================
  // ØSTRIG (AUSTRIA)
  // ==========================================
  {
    id: "loc-at-sabotnik",
    name: "FKK Camping Sabotnik (Keutschacher See, Kärnten)",
    type: "campsite",
    country: "Østrig",
    region: "Kärnten",
    keywords: ["østrig", "austria", "sabotnik", "keutschach", "kärnten", "camping", "fkk"],
    description: "Østrigs mest traditionsrige naturistcampingplads beliggende direkte ved den varme Keutschacher See med privat søbadestrand, sauna og bjergluft.",
    lat: 46.5920,
    lng: 14.1680,
    address: "Dobeinitz 31, 9074 Keutschach am See, Kärnten, Østrig",
    url: "https://www.fkk-camping-sabotnik.at/"
  },
  {
    id: "loc-at-ranna",
    name: "FKK Camping Ranna (Mühlviertel / Donau)",
    type: "campsite",
    country: "Østrig",
    region: "Oberösterreich",
    keywords: ["østrig", "austria", "ranna", "mühlviertel", "camping", "fkk"],
    description: "Rolig naturistcampingplads ved Ranna-søen i naturskønne Oberösterreich med opvarmet pool, sauna og vandrestier i skovene.",
    lat: 48.4980,
    lng: 13.7850,
    address: "Kramesau 8, 4085 Neustift im Mühlkreis, Østrig"
  },
  {
    id: "loc-at-donauinsel",
    name: "Donauinsel FKK Lobau (Wien)",
    type: "beach",
    country: "Østrig",
    region: "Wien",
    keywords: ["østrig", "austria", "wien", "vienna", "donauinsel", "lobau", "fkk", "strand"],
    description: "Wiens kæmpemæssige officielle FKK-område på Donauøen og i Lobau-flodskoven, hvor titusindvis af wienere bader i Donaufloden om sommeren.",
    lat: 48.1680,
    lng: 16.4850,
    address: "Donauinsel Kilometer 7-10, 1220 Wien, Østrig"
  },
  {
    "id": "loc-nl-zandvoort",
    "name": "Naaktstrand Zandvoort",
    "type": "beach",
    "country": "Holland",
    "region": "Nordholland / Amsterdam",
    "keywords": [
      "holland",
      "nederlandene",
      "netherlands",
      "dutch",
      "zandvoort",
      "amsterdam",
      "strand",
      "naaktstrand"
    ],
    "description": "Hollands mest ikoniske naturiststrand beliggende lige nord for Zandvoort by. Kæmpe brede klitter, fint sand og en afslappet atmosfære kun 30 min. med tog fra Amsterdam.",
    "lat": 52.3662,
    "lng": 4.5331,
    "address": "Boulevard Barnaart (Palen 68-71), 2041 JA Zandvoort, Holland"
  },
  {
    "id": "loc-nl-bloemendaal",
    "name": "Naaktstrand Bloemendaal aan Zee",
    "type": "beach",
    "country": "Holland",
    "region": "Nordholland / Amsterdam",
    "keywords": [
      "holland",
      "nederlandene",
      "netherlands",
      "bloemendaal",
      "haarlem",
      "amsterdam",
      "strand"
    ],
    "description": "Populær og livlig naturiststrand nord for Bloemendaal. Smukke fredede klitter i Zuid-Kennemerland nationalpark og fremragende badevand.",
    "lat": 52.4168,
    "lng": 4.5367,
    "address": "Zeeweg, 2051 EC Overveen / Bloemendaal, Holland"
  },
  {
    "id": "loc-nl-flevonatuur",
    "name": "Naturistencamping & Resort Flevo-Natuur",
    "type": "resort",
    "country": "Holland",
    "region": "Flevoland",
    "keywords": [
      "holland",
      "nederlandene",
      "flevo-natuur",
      "zeewolde",
      "flevoland",
      "resort",
      "camping"
    ],
    "description": "Hollands suverænt største og mest kendte 5-stjernede naturist-feriested. Omfattende wellness, indendørs og udendørs opvarmede pools, saunaer, restauranter, hytter og camping midt i skoven.",
    "lat": 52.2858,
    "lng": 5.4372,
    "address": "Zeewolderdijk 25, 3898 LM Zeewolde, Holland",
    "url": "https://www.flevonatuur.nl/"
  },
  {
    "id": "loc-nl-scheveningen",
    "name": "Naaktstrand Scheveningen (Zwarte Pad)",
    "type": "beach",
    "country": "Holland",
    "region": "Sydholland / Haag",
    "keywords": [
      "holland",
      "nederlandene",
      "scheveningen",
      "den haag",
      "haag",
      "zwarte pad",
      "strand"
    ],
    "description": "Officiel og anerkendt naturiststrand ved Zwarte Pad i den nordlige del af Scheveningen nær Haag. Let adgang med sporvogn og hyggelige strandpavilloner i nærheden.",
    "lat": 52.122,
    "lng": 4.298,
    "address": "Zwarte Pad Strandpæl 45, 2586 Den Haag, Holland"
  },
  {
    "id": "loc-nl-kijkduin",
    "name": "Naaktstrand Kijkduin",
    "type": "beach",
    "country": "Holland",
    "region": "Sydholland / Haag",
    "keywords": [
      "holland",
      "nederlandene",
      "kijkduin",
      "den haag",
      "haag",
      "strand"
    ],
    "description": "Bred, fredelig naturiststrand syd for Kijkduin fyrtårn og klitområde mod Monster. Ideel til lange vandreture i sandet.",
    "lat": 52.0621,
    "lng": 4.2155,
    "address": "Strandslag 2, 2554 Den Haag, Holland"
  },
  {
    "id": "loc-nl-texel",
    "name": "Naaktstrand Texel (Paal 9 & Paal 27)",
    "type": "beach",
    "country": "Holland",
    "region": "Vadehavsøerne / Texel",
    "keywords": [
      "holland",
      "nederlandene",
      "texel",
      "vadehavet",
      "øerne",
      "den hoorn",
      "strand"
    ],
    "description": "På ferieøen Texel findes to store officielle naturistområder ved Paal 9 i syd og Paal 27 i nord. Vilde kystklitter, frisk vesterhavsluft og total ro.",
    "lat": 53.0234,
    "lng": 4.718,
    "address": "Hoornderslag Paal 9, 1797 RT Den Hoorn, Texel, Holland"
  },
  {
    "id": "loc-nl-terschelling",
    "name": "Naaktstrand Terschelling (West aan Zee)",
    "type": "beach",
    "country": "Holland",
    "region": "Vadehavsøerne / Terschelling",
    "keywords": [
      "holland",
      "nederlandene",
      "terschelling",
      "vadehavet",
      "strand"
    ],
    "description": "Kilometerlang sandstrand på Terschelling med dedikerede naturistzoner mellem pæl 8 og 12 i det beskyttede klitlandskab.",
    "lat": 53.402,
    "lng": 5.275,
    "address": "Badweg West, 8881 Terschelling, Holland"
  },
  {
    "id": "loc-nl-callantsoog",
    "name": "Naaktstrand Callantsoog (Groote Keeten)",
    "type": "beach",
    "country": "Holland",
    "region": "Nordholland",
    "keywords": [
      "holland",
      "nederlandene",
      "callantsoog",
      "groote keeten",
      "strand"
    ],
    "description": "En af Hollands ældste og mest elskede naturiststrande syd for Callantsoog ved strandopgang Kiefteglop. Høje hvide klitter og rent badevand.",
    "lat": 52.852,
    "lng": 4.701,
    "address": "Kiefteglop, 1759 Callantsoog, Holland"
  },
  {
    "id": "loc-nl-domburg",
    "name": "Naaktstrand Domburg (Zeeland)",
    "type": "beach",
    "country": "Holland",
    "region": "Zeeland",
    "keywords": [
      "holland",
      "nederlandene",
      "domburg",
      "zeeland",
      "walcheren",
      "strand"
    ],
    "description": "Klassisk badeby i Zeeland med en officiel naturiststrand mod øst mod Oostkapelle. Kendt for sit særlige lys, pælerækker i vandet og brede sandbanker.",
    "lat": 51.5658,
    "lng": 3.4862,
    "address": "Badweg Strandslag 60, 4357 Domburg, Holland"
  },
  {
    "id": "loc-nl-bergen",
    "name": "Naaktstrand Bergen aan Zee",
    "type": "beach",
    "country": "Holland",
    "region": "Nordholland",
    "keywords": [
      "holland",
      "nederlandene",
      "bergen aan zee",
      "alkmaar",
      "strand"
    ],
    "description": "Uspoleret naturiststrand nord for Bergen aan Zee, omgivet af de imponerende Schoorlse Duinen, Hollands højeste og bredeste klitområde.",
    "lat": 52.6685,
    "lng": 4.6312,
    "address": "Parkweg, 1865 Bergen aan Zee, Holland"
  },
  {
    "id": "loc-nl-renesse",
    "name": "Naaktstrand Renesse (Schouwen-Duiveland)",
    "type": "beach",
    "country": "Holland",
    "region": "Zeeland",
    "keywords": [
      "holland",
      "nederlandene",
      "renesse",
      "schouwen",
      "zeeland",
      "strand"
    ],
    "description": "Meget bred og populær naturiststrand på Schouwen-Duiveland. Her ses ofte sæler der soler sig på sandbankerne ud for kysten.",
    "lat": 51.7234,
    "lng": 3.6789,
    "address": "Hoogenboomlaan, 4325 Renesse, Holland"
  },
  {
    "id": "loc-nl-terspegelt",
    "name": "Naturistencamping TerSpegelt (FKK-Park)",
    "type": "campsite",
    "country": "Holland",
    "region": "Noord-Brabant",
    "keywords": [
      "holland",
      "nederlandene",
      "terspegelt",
      "eersel",
      "brabant",
      "camping"
    ],
    "description": "Eksklusiv og naturskøn naturistcampingplads i det sydlige Holland nær den belgiske grænse med søbadning, skovstier og høj komfort.",
    "lat": 51.3414,
    "lng": 5.2597,
    "address": "Postelseweg 88, 5521 RD Eersel, Holland",
    "url": "https://www.terspegelt.nl/"
  },
  {
    "id": "loc-nl-reenert",
    "name": "Naturistenterrein De Reenert",
    "type": "campsite",
    "country": "Holland",
    "region": "Limburg",
    "keywords": [
      "holland",
      "nederlandene",
      "de reenert",
      "overloon",
      "limburg",
      "camping"
    ],
    "description": "Fredelig naturistplads i skovrige omgivelser i Limburg nær Overloon med opvarmet swimmingpool, sauna og socialt klubhus.",
    "lat": 51.6806,
    "lng": 6.0125,
    "address": "Reenertweg 1, 5825 CC Overloon, Holland",
    "url": "https://www.dereenert.nl/"
  },
  {
    "id": "loc-nl-betuwe",
    "name": "Naturistenterrein De Betuwe",
    "type": "campsite",
    "country": "Holland",
    "region": "Gelderland",
    "keywords": [
      "holland",
      "nederlandene",
      "betuwe",
      "kesteren",
      "gelderland",
      "camping"
    ],
    "description": "Idyllisk naturistplads midt i frugtplantagerne i Betuwe-regionen med badesø, sauna og masser af cykelruter.",
    "lat": 51.932,
    "lng": 5.568,
    "address": "Boveneindsestraat 27, 4041 EJ Kesteren, Gelderland, Holland"
  },
  {
    "id": "loc-nl-peelrand",
    "name": "Naturistencamping De Peelrand",
    "type": "campsite",
    "country": "Holland",
    "region": "Noord-Brabant",
    "keywords": [
      "holland",
      "nederlandene",
      "peelrand",
      "gemert",
      "brabant",
      "camping"
    ],
    "description": "Vellidt og familievenlig campingplads for naturister i Brabant med swimmingpool, petanque og rolige grønne standpladser.",
    "lat": 51.5321,
    "lng": 5.7891,
    "address": "Peelstraat 10, 5427 Gemert, Holland",
    "url": "https://www.depeelrand.nl/"
  },
  {
    "id": "loc-uk-brighton",
    "name": "Brighton Naturist Beach",
    "type": "beach",
    "country": "Storbritannien",
    "region": "England / East Sussex",
    "keywords": [
      "england",
      "storbritannien",
      "uk",
      "united kingdom",
      "brighton",
      "sussex",
      "strand"
    ],
    "description": "Storbritanniens første og mest berømte officielle naturiststrand, åbnet i 1980. Karakteristisk rullestensstrand med en fantastisk, tolerant atmosfære for enden af Madeira Drive.",
    "lat": 50.8142,
    "lng": -0.1189,
    "address": "Madeira Drive, Brighton BN2 1EN, Storbritannien"
  },
  {
    "id": "loc-uk-studland",
    "name": "Studland Bay Naturist Beach (Knoll Beach, Dorset)",
    "type": "beach",
    "country": "Storbritannien",
    "region": "England / Dorset",
    "keywords": [
      "england",
      "storbritannien",
      "uk",
      "studland",
      "dorset",
      "knoll beach",
      "strand"
    ],
    "description": "National Trust-drevet, prisbelønnet sandstrand på Jurassic Coast i Dorset. Over 1 km hvidt sand og klitter med udsigt til Isle of Wight og Old Harry Rocks.",
    "lat": 50.655,
    "lng": -1.948,
    "address": "Knoll Beach, Ferry Road, Studland, Dorset BH19 3AQ, Storbritannien"
  },
  {
    "id": "loc-uk-holkham",
    "name": "Holkham Beach Naturist Area (Norfolk)",
    "type": "beach",
    "country": "Storbritannien",
    "region": "England / Norfolk",
    "keywords": [
      "england",
      "storbritannien",
      "uk",
      "holkham",
      "norfolk",
      "strand"
    ],
    "description": "En af Storbritanniens smukkeste og mest vidtstrakte sandstrande. Den vestlige sektion mod Wells er en uofficiel men anerkendt og elsket naturiststrand omkranset af fyrreskov.",
    "lat": 52.972,
    "lng": 0.781,
    "address": "Lady Anne's Drive, Holkham, Wells-next-the-Sea, Norfolk NR23 1RN, Storbritannien"
  },
  {
    "id": "loc-uk-fairlight",
    "name": "Fairlight Glen Naturist Beach (Hastings)",
    "type": "beach",
    "country": "Storbritannien",
    "region": "England / East Sussex",
    "keywords": [
      "england",
      "storbritannien",
      "uk",
      "fairlight",
      "hastings",
      "covehurst",
      "strand"
    ],
    "description": "Spektakulær og afsidesliggende bugt i Covehurst Bay for foden af sandstensklipperne i Hastings Country Park. Nås ad en smuk skovsti ned gennem kløften.",
    "lat": 50.868,
    "lng": 0.635,
    "address": "Fairlight Cove, Hastings TN35 4AH, Storbritannien"
  },
  {
    "id": "loc-uk-morfa-dyffryn",
    "name": "Morfa Dyffryn Naturist Beach (Wales)",
    "type": "beach",
    "country": "Storbritannien",
    "region": "Wales / Gwynedd",
    "keywords": [
      "england",
      "storbritannien",
      "uk",
      "wales",
      "morfa dyffryn",
      "barmouth",
      "strand"
    ],
    "description": "Officiel naturiststrand i Wales strækkende sig over flere kilometer med massive sandklitter og storslået udsigt til Snowdonia-bjergene over Cardigan Bay.",
    "lat": 52.791,
    "lng": -4.125,
    "address": "Dyffryn Ardudwy, Barmouth LL44 2EG, Wales, Storbritannien"
  },
  {
    "id": "loc-uk-littlehampton",
    "name": "Littlehampton West Beach (West Sussex)",
    "type": "beach",
    "country": "Storbritannien",
    "region": "England / West Sussex",
    "keywords": [
      "england",
      "storbritannien",
      "uk",
      "littlehampton",
      "sussex",
      "strand"
    ],
    "description": "Fredet naturreservat med sjældne vegetationsklitter og en langstrakt sand- og rullestensstrand med et traditionsrigt naturistområde mod vest.",
    "lat": 50.803,
    "lng": -0.551,
    "address": "West Beach, Littlehampton, West Sussex BN17 5DL, Storbritannien"
  },
  {
    "id": "loc-uk-southbourne",
    "name": "Southbourne Naturist Beach (Bournemouth)",
    "type": "beach",
    "country": "Storbritannien",
    "region": "England / Dorset",
    "keywords": [
      "england",
      "storbritannien",
      "uk",
      "bournemouth",
      "southbourne",
      "strand"
    ],
    "description": "Skjult perle øst for Bournemouth ved foden af kystskrænterne. Fint sand og roligere atmosfære end Bournemouths travle hovedstrand.",
    "lat": 50.718,
    "lng": -1.792,
    "address": "Southbourne Overcliff Drive, Bournemouth BH6 3NR, Storbritannien"
  },
  {
    "id": "loc-uk-corton",
    "name": "Corton Naturist Beach (Suffolk)",
    "type": "beach",
    "country": "Storbritannien",
    "region": "England / Suffolk",
    "keywords": [
      "england",
      "storbritannien",
      "uk",
      "corton",
      "suffolk",
      "lowestoft",
      "strand"
    ],
    "description": "Officiel naturiststrand nord for Lowestoft i Suffolk. Fredeligt sandstrøg under kystklinterne med god plads til solbadning.",
    "lat": 52.518,
    "lng": 1.752,
    "address": "Old Corton Road, Lowestoft, Suffolk NR32 5HR, Storbritannien"
  },
  {
    "id": "loc-uk-spurn",
    "name": "Spurn Head Naturist Beach (Yorkshire)",
    "type": "beach",
    "country": "Storbritannien",
    "region": "England / East Yorkshire",
    "keywords": [
      "england",
      "storbritannien",
      "uk",
      "spurn",
      "yorkshire",
      "strand"
    ],
    "description": "Vild og fascinerende naturiststrand på den smalle Spurn Head-tange, hvor Nordsøen møder Humber-flodmundingen. Fantastisk fugleliv.",
    "lat": 53.582,
    "lng": 0.119,
    "address": "Spurn Point, Kilnsea, East Yorkshire HU12 0UH, Storbritannien"
  },
  {
    "id": "loc-uk-clover",
    "name": "Clover Spa and Hotel (Birmingham)",
    "type": "resort",
    "country": "Storbritannien",
    "region": "England / West Midlands",
    "keywords": [
      "england",
      "storbritannien",
      "uk",
      "clover spa",
      "birmingham",
      "hotel",
      "resort"
    ],
    "description": "Storbritanniens mest kendte tøjvalg- og naturisthotel med helårsåbent spa, saunaer, boblebade og komfortable værelser nær Birmingham.",
    "lat": 52.548,
    "lng": -1.836,
    "address": "759 Chester Road, Erdington, Birmingham B24 0ED, Storbritannien",
    "url": "https://www.cloverhotel.co.uk/"
  },
  {
    "id": "loc-uk-rhossili",
    "name": "Rhossili Bay Naturist Area (Gower, Wales)",
    "type": "beach",
    "country": "Storbritannien",
    "region": "Wales / Swansea",
    "keywords": [
      "england",
      "storbritannien",
      "uk",
      "wales",
      "rhossili",
      "gower",
      "strand"
    ],
    "description": "Kåret til en af verdens bedste strande. Den nordlige ende mod Llangennith og Burry Holms har i årtier været et yndet tilholdssted for naturister.",
    "lat": 51.572,
    "lng": -4.298,
    "address": "Rhossili Bay, Gower Peninsula, Swansea SA3 1PR, Wales, Storbritannien"
  },
  {
    "id": "loc-bg-irakli",
    "name": "Irakli Naturist Beach (Obzor / Emona)",
    "type": "beach",
    "country": "Bulgarien",
    "region": "Sortehavet / Burgas",
    "keywords": [
      "bulgarien",
      "bulgaria",
      "irakli",
      "obzor",
      "sortehavet",
      "black sea",
      "strand"
    ],
    "description": "Bulgariens mest legendariske vilde naturiststrand. Kilometerlang uspoleret gylden kyststrækning omgivet af frodige skove og krystalklart Sortehav uden store hoteller.",
    "lat": 42.753,
    "lng": 27.892,
    "address": "Irakli Nature Reserve, 8250 Obzor / Emona, Bulgarien"
  },
  {
    "id": "loc-bg-silistar",
    "name": "Silistar Beach (Strandzha Naturpark)",
    "type": "beach",
    "country": "Bulgarien",
    "region": "Sortehavet / Sinemorets",
    "keywords": [
      "bulgarien",
      "bulgaria",
      "silistar",
      "sinemorets",
      "strandzha",
      "strand"
    ],
    "description": "En fredet naturperle tæt på den tyrkiske grænse. Hesteskoformet bugt omgivet af klipper med et dedikeret naturistområde i den sydlige ende.",
    "lat": 42.023,
    "lng": 28.009,
    "address": "Silistar Protected Area, 8279 Sinemorets, Bulgarien"
  },
  {
    "id": "loc-bg-coral",
    "name": "Coral Beach (Koral / Lozenets)",
    "type": "beach",
    "country": "Bulgarien",
    "region": "Sortehavet / Burgas",
    "keywords": [
      "bulgarien",
      "bulgaria",
      "coral",
      "koral",
      "lozenets",
      "burgas",
      "strand"
    ],
    "description": "En af de sidste vilde strande på den sydlige sortehavskyst. Brede klitter, fint sand og en afslappet naturist- og campingkultur.",
    "lat": 42.221,
    "lng": 27.801,
    "address": "Koral Beach, 8277 Lozenets, Burgas, Bulgarien"
  },
  {
    "id": "loc-bg-krapets",
    "name": "Krapets Naturist Beach",
    "type": "beach",
    "country": "Bulgarien",
    "region": "Sortehavet / Dobrich",
    "keywords": [
      "bulgarien",
      "bulgaria",
      "krapets",
      "dobrich",
      "nordkysten",
      "strand"
    ],
    "description": "Endeløse sandstrande på Bulgariens rolige nordkyst nær grænsen til Rumænien. Total fred og ro væk fra masseturismen.",
    "lat": 43.628,
    "lng": 28.572,
    "address": "Krapets Kyst, 9684 Dobrich, Bulgarien"
  },
  {
    "id": "loc-bg-smokinya",
    "name": "Smokinya Naturist Beach (Sozopol)",
    "type": "beach",
    "country": "Bulgarien",
    "region": "Sortehavet / Sozopol",
    "keywords": [
      "bulgarien",
      "bulgaria",
      "smokinya",
      "sozopol",
      "burgas",
      "strand"
    ],
    "description": "Populær bugt syd for den historiske by Sozopol. I enderne af stranden er der tradition for naturisme og frit solbad.",
    "lat": 42.392,
    "lng": 27.708,
    "address": "Camping Smokinya, 8130 Sozopol, Bulgarien"
  },
  {
    "id": "loc-bg-albena",
    "name": "Albena - Kranevo Naturist Strand",
    "type": "beach",
    "country": "Bulgarien",
    "region": "Sortehavet / Varna",
    "keywords": [
      "bulgarien",
      "bulgaria",
      "albena",
      "kranevo",
      "varna",
      "strand"
    ],
    "description": "Den vilde kyststrækning der forbinder badebyerne Albena og Kranevo. Brede sandbanker og god plads til naturister.",
    "lat": 43.348,
    "lng": 28.075,
    "address": "Kyststien mellem Albena og Kranevo, 9620 Balchik, Bulgarien"
  },
  {
    "id": "loc-bg-bolata",
    "name": "Bolata Bay (Kaliakra)",
    "type": "beach",
    "country": "Bulgarien",
    "region": "Sortehavet / Kavarna",
    "keywords": [
      "bulgarien",
      "bulgaria",
      "bolata",
      "kaliakra",
      "kavarna",
      "strand"
    ],
    "description": "Spektakulær rød kalkstenskløft der munder ud i en cirkulær badevig i Kaliakra naturreservat med krystalklart vand.",
    "lat": 43.386,
    "lng": 28.469,
    "address": "Bolata Cove, Kaliakra Reserve, 9650 Kavarna, Bulgarien"
  },
  {
    "id": "loc-bg-veleka",
    "name": "Veleka River Mouth Beach (Sinemorets)",
    "type": "beach",
    "country": "Bulgarien",
    "region": "Sortehavet / Sinemorets",
    "keywords": [
      "bulgarien",
      "bulgaria",
      "veleka",
      "sinemorets",
      "flodmunding",
      "strand"
    ],
    "description": "Dramatisk sandtange hvor Veleka-floden løber ud i Sortehavet. Mulighed for at bade i både ferskvand og hav, meget populær blandt naturister.",
    "lat": 42.064,
    "lng": 27.978,
    "address": "Sinemorets Nordstrand, 8279 Sinemorets, Bulgarien"
  },
  {
    "id": "loc-bg-shkorpilovtsi",
    "name": "Shkorpilovtsi Naturist Strand",
    "type": "beach",
    "country": "Bulgarien",
    "region": "Sortehavet / Varna",
    "keywords": [
      "bulgarien",
      "bulgaria",
      "shkorpilovtsi",
      "varna",
      "strand"
    ],
    "description": "Bulgariens længste uafbrudte sandstrand (over 12 km). Store områder er helt ubebyggede og ideelle til uforstyrret nøgenbadning.",
    "lat": 42.961,
    "lng": 27.902,
    "address": "Shkorpilovtsi Kyst, 9112 Varna-regionen, Bulgarien"
  },
  {
    "id": "loc-th-advisory",
    "name": "Thailand Naturisme - Vigtig Sikkerhedsvejledning",
    "type": "other",
    "country": "Thailand",
    "region": "Hele Thailand",
    "keywords": [
      "thailand",
      "bangkok",
      "phuket",
      "koh samui",
      "pattaya",
      "siam"
    ],
    "description": "Thailand er et traditionelt og kulturelt konservativt land, hvor enhver form for offentlig nøgenhed er strengt ulovligt under thailandsk straffelov (Section 388). Der findes ingen offentlige naturiststrande i Thailand, og nøgenbadning på offentlige strande medfører anholdelse og bøder. Naturisme kan KUN praktiseres på private, lukkede resorts bag afskærmede mure.",
    "lat": 13.7563,
    "lng": 100.5018,
    "address": "Kongeriget Thailand",
    "warning": "LOV OM OFFENTLIG ANSTÆNDIGHED: Offentlig nøgenhed er ulovligt i Thailand. Naturisme er kun tilladt på privatejede, lukkede resorts."
  },
  {
    "id": "loc-th-oriental",
    "name": "Oriental Village Resort (Phuket)",
    "type": "resort",
    "country": "Thailand",
    "region": "Phuket / Kathu",
    "keywords": [
      "thailand",
      "phuket",
      "oriental village",
      "kathu",
      "resort",
      "hotel"
    ],
    "description": "Thailands mest kendte private naturistresort, beliggende i en frodig tropisk have med afskærmet poolområde, villaer og fuld diskretion for internationale naturistgæster.",
    "lat": 7.8804,
    "lng": 98.2981,
    "address": "123/45 Moo 5, Kathu, Phuket 83120, Thailand",
    "url": "https://www.orientalvillagephuket.com/"
  },
  {
    "id": "loc-th-peaceblue",
    "name": "Peace Blue Naiharn Resort (Phuket)",
    "type": "resort",
    "country": "Thailand",
    "region": "Phuket / Rawai",
    "keywords": [
      "thailand",
      "phuket",
      "peace blue",
      "naiharn",
      "rawai",
      "resort"
    ],
    "description": "Voksen-resort i det sydlige Phuket nær Naiharn, som tilbyder afskærmede private tagterrasser og villaer med tøjvalg og ro.",
    "lat": 7.788,
    "lng": 98.318,
    "address": "Naiharn Beach, Rawai, Phuket 83130, Thailand"
  },
  {
    "id": "loc-th-eden",
    "name": "Eden Naturist Resort & Villas (Koh Samui)",
    "type": "resort",
    "country": "Thailand",
    "region": "Surat Thani / Koh Samui",
    "keywords": [
      "thailand",
      "koh samui",
      "samui",
      "eden",
      "bophut",
      "resort"
    ],
    "description": "Eksklusivt privat resort på øen Koh Samui med privat lukket have og pool, hvor gæster kan nyde solen uden tøj i private rammer.",
    "lat": 9.5121,
    "lng": 100.0139,
    "address": "Bophut, Koh Samui, Surat Thani 84320, Thailand",
    "url": "https://www.edenbeachbungalows.com/"
  },
  {
    "id": "loc-th-barefoot",
    "name": "Barefoot Sanctuary (Koh Phangan)",
    "type": "resort",
    "country": "Thailand",
    "region": "Surat Thani / Koh Phangan",
    "keywords": [
      "thailand",
      "koh phangan",
      "phangan",
      "barefoot",
      "resort"
    ],
    "description": "Privat tilbagetrukket retreat på Koh Phangan med fokus på yoga, natur og afskærmet tøjvalg i pagt med den tropiske natur.",
    "lat": 9.761,
    "lng": 99.988,
    "address": "Haad Tien Bay, Koh Phangan, Surat Thani 84280, Thailand"
  },
  {
    "id": "loc-se-agesta",
    "name": "Ågesta Naturistbad (Stockholm)",
    "type": "beach",
    "country": "Sverige",
    "region": "Stockholm / Farsta",
    "keywords": [
      "sverige",
      "sweden",
      "stockholm",
      "ågesta",
      "agesta",
      "bad",
      "strand"
    ],
    "description": "Sveriges ældste og mest kendte officielle naturistbad beliggende ved Magelungen-søen i det sydlige Stockholm. Sandstrand, store græsplæner, badebroer og kiosk.",
    "lat": 59.227,
    "lng": 18.089,
    "address": "Ågestavägen, 123 52 Farsta, Stockholm, Sverige"
  },
  {
    "id": "loc-se-skanor",
    "name": "Skanör FKK Strand (Skåne)",
    "type": "beach",
    "country": "Sverige",
    "region": "Skåne / Vellinge",
    "keywords": [
      "sverige",
      "sweden",
      "skanör",
      "falsterbo",
      "skåne",
      "strand"
    ],
    "description": "Vidunderlig hvid sandstrand nord for Skanör lystbådehavn og Flommen naturreservat med klassiske svenske badehuse og klart sundvand.",
    "lat": 55.421,
    "lng": 12.825,
    "address": "Skanör Havn / Flommen, 239 30 Skanör, Skåne, Sverige"
  },
  {
    "id": "loc-se-sandhammaren",
    "name": "Sandhammaren Naturiststrand (Österlen, Skåne)",
    "type": "beach",
    "country": "Sverige",
    "region": "Skåne / Österlen",
    "keywords": [
      "sverige",
      "sweden",
      "sandhammaren",
      "österlen",
      "skåne",
      "strand"
    ],
    "description": "Sveriges svar på Skagen med kilometervis af kridhvidt puddersand og store klitter. Naturistafsnittet ligger vest for fyrtårnet mod Hagestad.",
    "lat": 55.385,
    "lng": 14.195,
    "address": "Sandhammarens Fyr, 271 77 Löderup, Skåne, Sverige"
  },
  {
    "id": "loc-se-rorum",
    "name": "Rörum Strand / Knäbäckshusen (Skåne)",
    "type": "beach",
    "country": "Sverige",
    "region": "Skåne / Simrishamn",
    "keywords": [
      "sverige",
      "sweden",
      "rörum",
      "knäbäckshusen",
      "österlen",
      "strand"
    ],
    "description": "Magisk skovstrand hvor træerne vokser helt ned til vandkanten. Den nordlige ende mod Stenshuvud nationalpark er kendt for naturisme.",
    "lat": 55.672,
    "lng": 14.281,
    "address": "Knäbäckshusen, 272 95 Simrishamn, Skåne, Sverige"
  },
  {
    "id": "loc-se-mellbystrand",
    "name": "Mellbystrand FKK Zone (Halland)",
    "type": "beach",
    "country": "Sverige",
    "region": "Halland / Laholm",
    "keywords": [
      "sverige",
      "sweden",
      "mellbystrand",
      "halland",
      "laholm",
      "strand"
    ],
    "description": "Sveriges længste sandstrand i Laholmsbukten. Det sydlige afsnit mod Skummeslövsstrand er officielt udlagt til naturisme.",
    "lat": 56.498,
    "lng": 12.935,
    "address": "Mellbystrand Syd, 312 60 Laholm, Halland, Sverige"
  },
  {
    "id": "loc-no-huk",
    "name": "Huk Naturiststrand (Bygdøy, Oslo)",
    "type": "beach",
    "country": "Norge",
    "region": "Oslo / Bygdøy",
    "keywords": [
      "norge",
      "norway",
      "oslo",
      "huk",
      "bygdøy",
      "strand"
    ],
    "description": "Norges mest kendte og velbesøgte officielle naturiststrand, beliggende på spidsen af Bygdøy-halvøen kun få minutter fra Oslo centrum med udsigt over Oslofjorden.",
    "lat": 59.897,
    "lng": 10.678,
    "address": "Bygdøynesveien, 0287 Oslo, Norge"
  },
  {
    "id": "loc-no-kollevag",
    "name": "Kollevåg Friluftsområde (Askøy ved Bergen)",
    "type": "beach",
    "country": "Norge",
    "region": "Vestland / Bergen",
    "keywords": [
      "norge",
      "norway",
      "bergen",
      "kollevåg",
      "askøy",
      "strand"
    ],
    "description": "Smukt vestnorsk fjordbadeområde med en afskærmet naturiststrand i Vestresand med græsplæner, fjelde og badevand.",
    "lat": 60.442,
    "lng": 5.148,
    "address": "Vestresand, 5310 Hauglandshella, Askøy ved Bergen, Norge"
  },
  {
    "id": "loc-fi-pihlajasaari",
    "name": "Pihlajasaari Naturiststrand (Helsinki)",
    "type": "beach",
    "country": "Finland",
    "region": "Uusimaa / Helsinki",
    "keywords": [
      "finland",
      "helsinki",
      "pihlajasaari",
      "strand"
    ],
    "description": "Populær skærgårdsø 10 minutters bådtur fra Helsinki med to separate naturiststrande (for mænd og kvinder) og klipper mod Finske Bugt.",
    "lat": 60.141,
    "lng": 24.919,
    "address": "Pihlajasaari, 00150 Helsinki, Finland"
  },
  {
    "id": "loc-be-bredene",
    "name": "Bredene Naaktstrand",
    "type": "beach",
    "country": "Belgien",
    "region": "Flandern / Nordsøen",
    "keywords": [
      "belgien",
      "belgium",
      "bredene",
      "oostende",
      "strand",
      "naaktstrand"
    ],
    "description": "Belgiens eneste officielle naturiststrand ved Nordsøen. Beliggende ved strandpost 6 i Bredene med klitter og rent sand uden højhuse.",
    "lat": 51.248,
    "lng": 2.969,
    "address": "Duinenstraat Strandpost 6, 8450 Bredene, Belgien"
  },
  {
    "id": "loc-ch-rivebleue",
    "name": "Plage Naturiste Rive-Bleue (Genèvesøen)",
    "type": "beach",
    "country": "Schweiz",
    "region": "Valais / Genèvesøen",
    "keywords": [
      "schweiz",
      "switzerland",
      "rive-bleue",
      "le bouveret",
      "genèvesøen",
      "strand"
    ],
    "description": "Smukt naturistområde ved Rhône-flodens udmunding i Genèvesøen med panoramaudsigt til de schweiziske alper.",
    "lat": 46.388,
    "lng": 6.862,
    "address": "Route de la Plage, 1897 Le Bouveret, Schweiz"
  },
  {
    "id": "loc-at-rutarlido",
    "name": "FKK Camping & Feriendorf Rutar Lido",
    "type": "resort",
    "country": "Østrig",
    "region": "Kärnten",
    "keywords": [
      "østrig",
      "austria",
      "rutar lido",
      "kärnten",
      "eberndorf",
      "resort",
      "camping"
    ],
    "description": "Østrigs mest luksuriøse FKK-feriested med indendørs og udendørs opvarmede pools, badesø, restaurant og wellness omgivet af bjerge.",
    "lat": 46.582,
    "lng": 14.538,
    "address": "Pribelsdorf 1, 9141 Eberndorf, Kärnten, Østrig",
    "url": "https://www.rutar.com/"
  },
  {
    "id": "loc-pl-debki",
    "name": "Dębki FKK Strand (Østersøen, Polen)",
    "type": "beach",
    "country": "Polen",
    "region": "Pommern / Østersøen",
    "keywords": [
      "polen",
      "poland",
      "debki",
      "dębki",
      "østersøen",
      "strand"
    ],
    "description": "Polens mest berømte naturiststrand, beliggende vest for Piaśnica-flodmundingen ved indgang 19-26. Kridhvidt puddersand og høje fyrreklitter.",
    "lat": 54.832,
    "lng": 18.068,
    "address": "Wejście 19-26, 84-110 Dębki, Polen"
  },
  {
    "id": "loc-pl-chalupy",
    "name": "Chałupy FKK Strand (Hel-halvøen, Polen)",
    "type": "beach",
    "country": "Polen",
    "region": "Pommern / Hel",
    "keywords": [
      "polen",
      "poland",
      "chalupy",
      "chałupy",
      "hel",
      "strand"
    ],
    "description": "Historisk polsk naturiststrand udødeliggjort i polsk musikkultur, beliggende på den smalle Hel-landtange med åbent hav på den ene side.",
    "lat": 54.761,
    "lng": 18.498,
    "address": "Mierzeja Helska, 84-120 Chałupy, Polen"
  },
  {
    "id": "loc-cz-lhota",
    "name": "Jezero Lhota FKK (Prag)",
    "type": "beach",
    "country": "Tjekkiet",
    "region": "Centralbøhmen / Prag",
    "keywords": [
      "tjekkiet",
      "czech",
      "prag",
      "lhota",
      "sø",
      "strand"
    ],
    "description": "Krystalklar badesø omkranset af fyrreskov 30 min. nordøst for Prag med en stor og traditionsrig officiel FKK-sektion.",
    "lat": 50.245,
    "lng": 14.668,
    "address": "Jezero Lhota, 250 84 Lhota u Brandýsa, Tjekkiet"
  },
  {
    "id": "loc-hu-delegyhaza",
    "name": "Délegyháza Naturist Camping & Badesø",
    "type": "campsite",
    "country": "Ungarn",
    "region": "Pest / Budapest",
    "keywords": [
      "ungarn",
      "hungary",
      "budapest",
      "delegyhaza",
      "délegyháza",
      "camping"
    ],
    "description": "Ungarns største og ældste naturistcenter ved en række rene badesøer syd for Budapest med camping, hytter og sauna.",
    "lat": 47.235,
    "lng": 19.068,
    "address": "Nomád part 4, 2337 Délegyháza, Ungarn"
  },
  {
    "id": "loc-tr-patara",
    "name": "Patara Beach Naturist Sektion",
    "type": "beach",
    "country": "Tyrkiet",
    "region": "Antalya / Gelemiş",
    "keywords": [
      "tyrkiet",
      "turkey",
      "patara",
      "antalya",
      "kaş",
      "strand"
    ],
    "description": "En af Middelhavets længste sandstrande (18 km) og fredet nationalpark. Den sydlige afsides ende nær klipperne er et kendt naturiststed.",
    "lat": 36.258,
    "lng": 29.281,
    "address": "Patara Kyst, 07975 Gelemiş, Kaş, Antalya, Tyrkiet"
  },
  {
    "id": "loc-tr-cirali",
    "name": "Çıralı FKK Strand (Antalya)",
    "type": "beach",
    "country": "Tyrkiet",
    "region": "Antalya / Kemer",
    "keywords": [
      "tyrkiet",
      "turkey",
      "cirali",
      "çıralı",
      "olympos",
      "antalya",
      "strand"
    ],
    "description": "Uspoleret bugt mellem appelsinlunde og dramatiske bjerge nær Olympos-ruinerne. Den nordlige kyststrækning benyttes af naturister.",
    "lat": 36.418,
    "lng": 30.481,
    "address": "Çıralı Sahili, 07980 Kemer, Antalya, Tyrkiet"
  },
  {
    "id": "loc-cy-pissouri",
    "name": "Pissouri Bay Naturist Beach",
    "type": "beach",
    "country": "Cypern",
    "region": "Limassol",
    "keywords": [
      "cypern",
      "cyprus",
      "pissouri",
      "limassol",
      "strand"
    ],
    "description": "Cyperns mest populære uofficielle naturiststrand, beliggende for foden af de hvide kalkklinter øst for Pissouri-bugten.",
    "lat": 34.664,
    "lng": 32.721,
    "address": "Pissouri Bay Klintestrand, 4607 Limassol, Cypern"
  },
  {
    "id": "loc-mt-ghajn",
    "name": "Għajn Tuffieħa Naturist Cove (Malta)",
    "type": "beach",
    "country": "Malta",
    "region": "Mellieħa",
    "keywords": [
      "malta",
      "ghajn tuffieha",
      "riviera",
      "mellieha",
      "strand"
    ],
    "description": "Afkrogene bag klinterne ved Riviera Martinique (Għajn Tuffieħa) på Maltas nordvestkyst med krystalklart turkist vand.",
    "lat": 35.928,
    "lng": 14.341,
    "address": "Għajn Tuffieħa Bay, Mellieħa, Malta"
  },
  {
    "id": "loc-us-haulover",
    "name": "Haulover Beach (Miami, Florida)",
    "type": "beach",
    "country": "USA",
    "region": "Florida / Miami",
    "keywords": [
      "usa",
      "florida",
      "miami",
      "haulover",
      "strand"
    ],
    "description": "USA's mest berømte og mest besøgte officielle naturiststrand med over 1 million årlige gæster, varmt Atlanterhav og livreddere.",
    "lat": 25.908,
    "lng": -80.121,
    "address": "10800 Collins Ave, Miami Beach, FL 33154, USA"
  },
  {
    "id": "loc-us-blacks",
    "name": "Black's Beach (San Diego, Californien)",
    "type": "beach",
    "country": "USA",
    "region": "Californien / San Diego",
    "keywords": [
      "usa",
      "californien",
      "san diego",
      "la jolla",
      "blacks beach",
      "strand"
    ],
    "description": "Legendarisk naturiststrand under de 100 meter høje Torrey Pines-sandstensklipper i La Jolla med fantastiske stillehavsbølger.",
    "lat": 32.889,
    "lng": -117.252,
    "address": "Torrey Pines, La Jolla, San Diego, CA 92037, USA"
  },
  {
    "id": "loc-us-hippie",
    "name": "Hippie Hollow Park (Austin, Texas)",
    "type": "beach",
    "country": "USA",
    "region": "Texas / Austin",
    "keywords": [
      "usa",
      "texas",
      "austin",
      "hippie hollow",
      "lake travis"
    ],
    "description": "Den eneste lovlige tøjvalg-park i Texas, beliggende på kalkstensklipperne ved Lake Travis med svømning og solbadning.",
    "lat": 30.418,
    "lng": -97.892,
    "address": "7000 Comanche Trail, Austin, TX 78732, USA"
  },
  {
    "id": "loc-us-gunnison",
    "name": "Gunnison Beach (Sandy Hook, New Jersey)",
    "type": "beach",
    "country": "USA",
    "region": "New Jersey / New York",
    "keywords": [
      "usa",
      "new jersey",
      "new york",
      "gunnison",
      "sandy hook",
      "strand"
    ],
    "description": "New York-områdets officielle naturiststrand på Sandy Hook-halvøen med udsigt til Manhattans skyline i det fjerne.",
    "lat": 40.458,
    "lng": -73.998,
    "address": "Sandy Hook, Gateway National Rec Area, Highlands, NJ 07732, USA"
  },
  {
    "id": "loc-mx-zipolite",
    "name": "Playa Zipolite (Oaxaca, Mexico)",
    "type": "beach",
    "country": "Mexico",
    "region": "Oaxaca / Stillehavet",
    "keywords": [
      "mexico",
      "zipolite",
      "oaxaca",
      "stillehavet",
      "strand"
    ],
    "description": "Mexicos første og eneste officielle tøjvalg-strand. Gyldent sand, bohemeagtige strandhytter og afslappet stemning.",
    "lat": 15.682,
    "lng": -96.518,
    "address": "Playa Zipolite, 70904 San Pedro Pochutla, Oaxaca, Mexico"
  },
  {
    "id": "loc-gr-redbeach",
    "name": "Red Beach / Kokkini Ammos (Matala, Kreta)",
    "type": "beach",
    "country": "Grækenland",
    "region": "Kreta / Heraklion",
    "keywords": [
      "grækenland",
      "greece",
      "kreta",
      "matala",
      "red beach",
      "kokkini ammos",
      "strand"
    ],
    "description": "Verdenskendt rød sandstrand syd for Matala på Kreta, elsket af naturister siden hippietiden i 1960'erne. Nås ad en vandresti over bjerget.",
    "lat": 34.988,
    "lng": 24.748,
    "address": "Matala Kyststi, 70200 Kreta, Grækenland"
  },
  {
    "id": "loc-gr-plakias",
    "name": "Plakias Souda FKK Beach (Kreta)",
    "type": "beach",
    "country": "Grækenland",
    "region": "Kreta / Rethymno",
    "keywords": [
      "grækenland",
      "greece",
      "kreta",
      "plakias",
      "rethymno",
      "souda",
      "strand"
    ],
    "description": "Den østlige ende af Plakias-bugten foran de lodrette klippevægge er en af Kretas ældste og mest populære naturiststrande.",
    "lat": 35.188,
    "lng": 24.368,
    "address": "Plakias Kyst, 74060 Kreta, Grækenland"
  },
  {
    "id": "loc-gr-mykonos",
    "name": "Super Paradise Naturist Cove (Mykonos)",
    "type": "beach",
    "country": "Grækenland",
    "region": "Kykladerne / Mykonos",
    "keywords": [
      "grækenland",
      "greece",
      "mykonos",
      "super paradise",
      "strand"
    ],
    "description": "Den højre klippeside af Super Paradise på Mykonos har i årtier været en verdenskendt naturistoase med krystalklart vand.",
    "lat": 37.412,
    "lng": 25.368,
    "address": "Super Paradise Beach, 84600 Mykonos, Grækenland"
  },
  {
    "id": "loc-gr-faliraki",
    "name": "Faliraki Naturist Beach (Rhodos)",
    "type": "beach",
    "country": "Grækenland",
    "region": "Dodekaneserne / Rhodos",
    "keywords": [
      "grækenland",
      "greece",
      "rhodos",
      "faliraki",
      "strand"
    ],
    "description": "Rhodos' eneste officielle naturiststrand beliggende i en afskærmet bugt syd for Faliraki med liggestole, parasoller og strandbar.",
    "lat": 36.328,
    "lng": 28.212,
    "address": "Faliraki Sydstrand, 85105 Rhodos, Grækenland"
  },
  {
    "id": "loc-it-capocotta",
    "name": "Spiaggia di Capocotta (Rom / Ostia)",
    "type": "beach",
    "country": "Italien",
    "region": "Lazio / Rom",
    "keywords": [
      "italien",
      "italy",
      "rom",
      "rome",
      "capocotta",
      "ostia",
      "lazio",
      "strand"
    ],
    "description": "Roms mest berømte officielle naturiststrand ved klitreservatet langs Via Litoranea. Brede klitter, middelhavsmakki og afslappet atmosfære.",
    "lat": 41.678,
    "lng": 12.368,
    "address": "Via Litoranea km 8, 00122 Ostia / Rom, Italien"
  },
  {
    "id": "loc-it-guvano",
    "name": "Spiaggia di Guvano (Cinque Terre)",
    "type": "beach",
    "country": "Italien",
    "region": "Ligurien / Cinque Terre",
    "keywords": [
      "italien",
      "italy",
      "cinque terre",
      "guvano",
      "corniglia",
      "ligurien",
      "strand"
    ],
    "description": "Myteomspundet hemmelig naturistbugt mellem Corniglia og Vernazza i Cinque Terre med krystalklart vand og lodrette klipper.",
    "lat": 44.128,
    "lng": 9.718,
    "address": "Guvano Cove, 19018 Corniglia, Ligurien, Italien"
  },
  {
    "id": "loc-it-bibbona",
    "name": "Spiaggia delle Nereidi (Marina di Bibbona, Toscana)",
    "type": "beach",
    "country": "Italien",
    "region": "Toscana / Livorno",
    "keywords": [
      "italien",
      "italy",
      "toscana",
      "tuscany",
      "bibbona",
      "livorno",
      "strand"
    ],
    "description": "Toscanas mest kendte officielle naturiststrand strækkende sig gennem fyrreskoven og de fredede klitter syd for Marina di Bibbona.",
    "lat": 43.248,
    "lng": 10.518,
    "address": "Tombolo di Cecina / Bibbona, 57020 Livorno, Toscana, Italien"
  },
  {
    "id": "loc-it-pizzogreco",
    "name": "Pizzo Greco Naturist Camping (Calabrien)",
    "type": "resort",
    "country": "Italien",
    "region": "Calabrien / Isola di Capo Rizzuto",
    "keywords": [
      "italien",
      "italy",
      "calabrien",
      "pizzo greco",
      "camping",
      "resort"
    ],
    "description": "Italiens førende rendyrkede naturistresort ved Det Ioniske Hav i Calabrien med privat strand, pool, restaurant og hytter i middelhavsnatur.",
    "lat": 38.988,
    "lng": 17.068,
    "address": "Località Fratte, 88841 Isola di Capo Rizzuto, Calabrien, Italien",
    "url": "https://www.pizzogreco.com/"
  },
  {
    "id": "loc-it-portoferro",
    "name": "Porto Ferro Naturist Beach (Sardinien)",
    "type": "beach",
    "country": "Italien",
    "region": "Sardinien / Alghero",
    "keywords": [
      "italien",
      "italy",
      "sardinien",
      "sardinia",
      "porto ferro",
      "alghero",
      "strand"
    ],
    "description": "Sardiniens første officielt anerkendte naturiststrand ved en stor rødgylden sandbugt omgivet af fyrreskov og spanske vagttårne.",
    "lat": 40.678,
    "lng": 8.208,
    "address": "Baia di Porto Ferro, 07041 Alghero, Sardinien, Italien"
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

    const isKeywordMatch = keywords.some(k => {
      if (k === q) return true;
      if (k.length >= 4 && q.length >= 4 && (q.includes(k) || k.includes(q))) return true;
      return false;
    });

    const isDirectMatch = 
      country === q ||
      region === q ||
      (country.length >= 4 && q.includes(country)) ||
      (region.length >= 4 && q.includes(region)) ||
      (q.length >= 4 && country.includes(q)) ||
      (q.length >= 4 && region.includes(q)) ||
      isKeywordMatch;

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
      locations: beaches,
      summary: `Her er et udvalg af berømte naturiststrande i Europa (${beaches.length} steder).`,
      sources: []
    };
  }

  return null;
}

// Suggestions provider for search bar
export const ALL_SUGGESTIONS = [
  "Holland",
  "Nederlandene",
  "Zandvoort",
  "Bloemendaal",
  "Zeeland",
  "England",
  "Storbritannien",
  "Brighton",
  "Dorset",
  "Bulgarien",
  "Irakli",
  "Thailand",
  "Phuket",
  "Koh Samui",
  "Portugal",
  "Algarve",
  "Costa da Caparica",
  "Lissabon",
  "Spanien",
  "Andalusien",
  "Costa del Sol",
  "Vera Playa",
  "Costa Natura",
  "Mallorca",
  "Menorca",
  "Ibiza",
  "Formentera",
  "Gran Canaria",
  "Tenerife",
  "Lanzarote",
  "Fuerteventura",
  "Frankrig",
  "Cap d'Agde",
  "Montalivet",
  "Euronat",
  "Korsika",
  "Danmark",
  "Kroatien",
  "Istrien",
  "Valalta",
  "Grækenland",
  "Kreta",
  "Chora Sfakion",
  "Skiathos",
  "Korfu",
  "Italien",
  "Tyskland",
  "Sverige",
  "Norge",
  "Østrig",
  "Belgien",
  "USA",
  "Dubai"
];
