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
  "Dubai"
];
