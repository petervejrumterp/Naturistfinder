import { NaturistLocation, SearchResult } from "./types";

export interface ExtendedNaturistLocation extends NaturistLocation {
  country: string;
  region: string;
  keywords?: string[];
}

export const ALL_LOCATIONS_DATABASE: ExtendedNaturistLocation[] = [
  {
    "id": "loc-pt-meco",
    "name": "Praia do Meco (Sesimbra / Lissabon)",
    "type": "beach",
    "country": "Portugal",
    "region": "Lissabon / Setúbal",
    "keywords": [
      "portugal",
      "meco",
      "sesimbra",
      "lissabon",
      "lisbon",
      "setubal",
      "strand"
    ],
    "description": "Portugals historiske vugge for naturisme siden 1970'erne. En kæmpe gylden sandstrand syd for Lissabon flankeret af lerskrænter og Atlanterhavets friske bølger.",
    "lat": 38.489,
    "lng": -9.183,
    "address": "Aldeia do Meco, 2970 Sesimbra, Portugal"
  },
  {
    "id": "loc-pt-belavista",
    "name": "Praia da Bela Vista (Costa da Caparica)",
    "type": "beach",
    "country": "Portugal",
    "region": "Costa da Caparica / Lissabon",
    "keywords": [
      "portugal",
      "bela vista",
      "costa da caparica",
      "caparica",
      "lissabon",
      "strand"
    ],
    "description": "Portugals første officielt legaliserede naturiststrand (anerkendt i 1995). Nås med det lille strandtog (Paragem 17) gennem klitlandskabet syd for Lissabon.",
    "lat": 38.6015,
    "lng": -9.2155,
    "address": "Paragem 17, Costa da Caparica, 2825 Almada, Portugal"
  },
  {
    "id": "loc-pt-adica",
    "name": "Praia da Adiça (Costa da Caparica Syd)",
    "type": "beach",
    "country": "Portugal",
    "region": "Costa da Caparica / Lissabon",
    "keywords": [
      "portugal",
      "adica",
      "adiça",
      "costa da caparica",
      "caparica",
      "strand"
    ],
    "description": "Officiel naturiststrand ved Caparica-kystens sydlige ende for foden af den fredede fossil-klint Arriba Fóssil. Vild natur og total ro.",
    "lat": 38.568,
    "lng": -9.199,
    "address": "Fonte da Telha Syd, Costa da Caparica, Portugal"
  },
  {
    "id": "loc-pt-ursa",
    "name": "Praia da Ursa (Sintra / Cabo da Roca)",
    "type": "beach",
    "country": "Portugal",
    "region": "Sintra",
    "keywords": [
      "portugal",
      "ursa",
      "sintra",
      "cabo da roca",
      "strand"
    ],
    "description": "En af Europas mest spektakulære vilde strande lige nord for Cabo da Roca (Europas vestligste punkt). Kæmpe klippetårne og krystalklart Atlanterhav. Kræver ca. 20 min. vandretur ned ad klippestien.",
    "lat": 38.7905,
    "lng": -9.4975,
    "address": "Cabo da Roca, 2705 Colares, Sintra, Portugal"
  },
  {
    "id": "loc-pt-homemnu",
    "name": "Praia do Homem Nu / Barril (Tavira, Algarve)",
    "type": "beach",
    "country": "Portugal",
    "region": "Algarve",
    "keywords": [
      "portugal",
      "algarve",
      "tavira",
      "homem nu",
      "barril",
      "strand"
    ],
    "description": "'Den nøgne mands strand' på øen Ilha de Tavira. En uendelig, fredfyldt sandstrand i naturparken Ria Formosa, hvor naturisme er officielt tilladt vest for anker-kirkegården ved Praia do Barril.",
    "lat": 37.075,
    "lng": -7.688,
    "address": "Ilha de Tavira, 8800 Tavira, Algarve, Portugal"
  },
  {
    "id": "loc-pt-adegas",
    "name": "Praia das Adegas (Odeceixe, Costa Vicentina)",
    "type": "beach",
    "country": "Portugal",
    "region": "Algarve / Costa Vicentina",
    "keywords": [
      "portugal",
      "algarve",
      "adegas",
      "odeceixe",
      "costa vicentina",
      "strand"
    ],
    "description": "Officielt udpeget naturiststrand i en beskyttet bugt lige syd for Praia de Odeceixe. Omgivet af høje sorte skifre-klipper med gyldent sand og rolige badeforhold ved lavvande.",
    "lat": 37.438,
    "lng": -8.802,
    "address": "Praia de Odeceixe, 8670 Aljezur, Algarve, Portugal"
  },
  {
    "id": "loc-pt-alteirinhos",
    "name": "Praia dos Alteirinhos (Zambujeira do Mar, Alentejo)",
    "type": "beach",
    "country": "Portugal",
    "region": "Alentejo / Vicentina",
    "keywords": [
      "portugal",
      "alteirinhos",
      "zambujeira do mar",
      "alentejo",
      "strand"
    ],
    "description": "Officiel naturiststrand syd for den maleriske kystby Zambujeira do Mar. Sandstrand afskærmet af mørke klippevægge med et lille naturligt vandfald om vinteren/foråret.",
    "lat": 37.52,
    "lng": -8.788,
    "address": "Zambujeira do Mar, 7630 Odemira, Alentejo, Portugal"
  },
  {
    "id": "loc-pt-malhao",
    "name": "Praia do Malhão (Vila Nova de Milfontes, Alentejo)",
    "type": "beach",
    "country": "Portugal",
    "region": "Alentejo",
    "keywords": [
      "portugal",
      "malhao",
      "malhão",
      "vila nova de milfontes",
      "alentejo",
      "strand"
    ],
    "description": "En langstrakt og vild kyststrækning med dramatiske klitter. Naturister benytter traditionelt den nordlige sektion, hvor klipperne skaber lækroge.",
    "lat": 37.778,
    "lng": -8.802,
    "address": "Malhão, 7645 Vila Nova de Milfontes, Alentejo, Portugal"
  },
  {
    "id": "loc-pt-ilhadesserta",
    "name": "Praia da Barreta / Ilha Deserta (Faro, Algarve)",
    "type": "beach",
    "country": "Portugal",
    "region": "Algarve",
    "keywords": [
      "portugal",
      "algarve",
      "ilha deserta",
      "barreta",
      "faro",
      "strand"
    ],
    "description": "Den sydligste ø i Portugal nås med færge fra Faro. 7 km uberørt hvid sandstrand i Ria Formosa naturparken med god plads til fredelig naturisme.",
    "lat": 36.962,
    "lng": -7.962,
    "address": "Ilha da Barreta, 8000 Faro, Algarve, Portugal"
  },
  {
    "id": "loc-pt-beliche",
    "name": "Praia do Beliche (Sagres / Cabo de São Vicente)",
    "type": "beach",
    "country": "Portugal",
    "region": "Algarve",
    "keywords": [
      "portugal",
      "algarve",
      "beliche",
      "sagres",
      "cabo sao vicente",
      "strand"
    ],
    "description": "Gemt mellem 40 meter høje kalkstensklipper mellem Sagres og fyrtårnet ved Cabo de São Vicente. Populær blandt naturister på grund af læ for vinden og det varme gyldne sand.",
    "lat": 37.026,
    "lng": -8.963,
    "address": "Estrada de Sagres, 8650 Sagres, Algarve, Portugal"
  },
  {
    "id": "loc-pt-zavial",
    "name": "Praia do Zavial (Vila do Bispo, Algarve)",
    "type": "beach",
    "country": "Portugal",
    "region": "Algarve",
    "keywords": [
      "portugal",
      "algarve",
      "zavial",
      "vila do bispo",
      "sagres",
      "strand"
    ],
    "description": "Den østlige del af Zavial-bugten under de høje klipper er en anerkendt og elsket naturistkrog med fint sand og krystalklart vand.",
    "lat": 37.045,
    "lng": -8.872,
    "address": "Zavial, Hortas do Tabual, 8650 Vila do Bispo, Algarve, Portugal"
  },
  {
    "id": "loc-pt-salgados",
    "name": "Praia dos Salgados & Galé Naturist (Albufeira, Algarve)",
    "type": "beach",
    "country": "Portugal",
    "region": "Algarve",
    "keywords": [
      "portugal",
      "algarve",
      "salgados",
      "gale",
      "albufeira",
      "strand"
    ],
    "description": "Klitområdet mellem Salgados lagunen og Galé vest for Albufeira har en bred, fredfyldt sandstrand, hvor naturister igennem årtier har nydt solen.",
    "lat": 37.088,
    "lng": -8.328,
    "address": "Praia dos Salgados, 8200 Albufeira, Algarve, Portugal"
  },
  {
    "id": "loc-pt-bordeira",
    "name": "Praia da Bordeira / Carrapateira (Costa Vicentina)",
    "type": "beach",
    "country": "Portugal",
    "region": "Algarve / Costa Vicentina",
    "keywords": [
      "portugal",
      "algarve",
      "bordeira",
      "carrapateira",
      "costa vicentina",
      "strand"
    ],
    "description": "Kæmpemæssig sandflade og klitlandskab med en lille flodmunding. Naturister færdes frit og uforstyrret i de nordlige klitrækker.",
    "lat": 37.197,
    "lng": -8.903,
    "address": "Carrapateira, 8670 Aljezur, Algarve, Portugal"
  },
  {
    "id": "loc-pt-armona",
    "name": "Praia da Fuseta / Ilha de Armona Naturist (Algarve)",
    "type": "beach",
    "country": "Portugal",
    "region": "Algarve",
    "keywords": [
      "portugal",
      "algarve",
      "armona",
      "fuseta",
      "olhao",
      "strand"
    ],
    "description": "Officiel naturistsektion på øen Ilha de Armona ud for Fuseta og Olhão. Kilometerlang hvid sandtange i det lune vand i det østlige Algarve.",
    "lat": 37.042,
    "lng": -7.728,
    "address": "Ilha de Armona, 8700 Olhão, Algarve, Portugal"
  },
  {
    "id": "loc-pt-montedasera",
    "name": "Monte da Serra Naturist Resort (Algarve)",
    "type": "resort",
    "country": "Portugal",
    "region": "Algarve",
    "keywords": [
      "portugal",
      "algarve",
      "monte da serra",
      "resort",
      "hotel",
      "spa",
      "camping"
    ],
    "description": "Fredfyldt naturistferiested i Algarves smukke bagland nær Silves og Monchique. Pool, haver, luksuriøse hytter og afslappet naturistfællesskab.",
    "lat": 37.235,
    "lng": -8.455,
    "address": "Monte da Serra, 8300 Silves, Algarve, Portugal",
    "url": "https://www.montedaserra.com/"
  },
  {
    "id": "loc-pt-cegonhas",
    "name": "Quinta das Cegonhas Naturist Camping (Serra da Estrela)",
    "type": "campsite",
    "country": "Portugal",
    "region": "Centro / Serra da Estrela",
    "keywords": [
      "portugal",
      "cegonhas",
      "serra da estrela",
      "gouveia",
      "camping",
      "resort"
    ],
    "description": "Højt vurderet naturistcampingplads ved foden af bjergkæden Serra da Estrela med swimmingpool, panoramaudsigt, olivenlunde og vandreruter.",
    "lat": 40.505,
    "lng": -7.525,
    "address": "Ribeira de Alvendre, 6290 Gouveia, Portugal",
    "url": "https://www.cegonhas.com/"
  },
  {
    "id": "loc-pt-maral",
    "name": "Naturist Camping Quinta do Maral (Marvão / Alentejo)",
    "type": "campsite",
    "country": "Portugal",
    "region": "Alentejo / Marvão",
    "keywords": [
      "portugal",
      "maral",
      "marvao",
      "alentejo",
      "camping"
    ],
    "description": "Idyllisk naturistcamping i São Mamede Naturpark tæt på den historiske middelalderborg i Marvão. Korkege, kildepool og absolut fred.",
    "lat": 39.385,
    "lng": -7.345,
    "address": "7330 Marvão, Alentejo, Portugal"
  },
  {
    "id": "loc-pt-barao",
    "name": "Monte Naturista O Barão (Ourique, Baixo Alentejo)",
    "type": "resort",
    "country": "Portugal",
    "region": "Alentejo",
    "keywords": [
      "portugal",
      "barao",
      "barão",
      "ourique",
      "alentejo",
      "resort",
      "camping"
    ],
    "description": "Charmerende naturistparadis i Alentejos bølgende bakker med saltvandspool, sauna, luksushytter og ægte portugisisk gæstfrihed.",
    "lat": 37.645,
    "lng": -8.225,
    "address": "Aldeia dos Palheiros, 7670 Ourique, Alentejo, Portugal"
  },
  {
    "id": "loc-pt-cerejeira",
    "name": "FKK Camping Quinta da Cerejeira (Centro / Zêzere)",
    "type": "campsite",
    "country": "Portugal",
    "region": "Centro",
    "keywords": [
      "portugal",
      "cerejeira",
      "zezere",
      "ferreira do zezere",
      "camping"
    ],
    "description": "Lille hyggelig naturistcampingplads nær den store sø Castelo de Bode med pool, frugttræer og rolig atmosfære.",
    "lat": 39.695,
    "lng": -8.285,
    "address": "2240 Ferreira do Zêzere, Santarém, Portugal"
  },
  {
    "id": "loc-es-veraplaya",
    "name": "Vera Playa Naturist Resort (Almería, Andalusien)",
    "type": "resort",
    "country": "Spanien",
    "region": "Andalusien",
    "keywords": [
      "spanien",
      "spain",
      "vera playa",
      "almeria",
      "andalusien",
      "resort",
      "hotel",
      "strand",
      "camping"
    ],
    "description": "Europas største helårs naturistcenter. En hel kystbydel hvor tøj er valgfrit overalt – inklusive det berømte Vera Playa Club Hotel, restauranter, ferieboliger og 2 km bred sandstrand.",
    "lat": 37.2025,
    "lng": -1.805,
    "address": "Calle Carretera de Garrucha a Villaricos, 04621 Vera, Almería, Spanien",
    "url": "https://www.playasenator.com/en/hotels/vera-playa-club-hotel/",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": "loc-es-costanatura",
    "name": "Costa Natura Naturist Village (Estepona, Costa del Sol)",
    "type": "resort",
    "country": "Spanien",
    "region": "Costa del Sol / Andalusien",
    "keywords": [
      "spanien",
      "spain",
      "costa natura",
      "estepona",
      "costa del sol",
      "malaga",
      "resort",
      "feriecenter"
    ],
    "description": "Spaniens første officielle naturist-resortby, grundlagt i 1979. Beliggende direkte til Middelhavet med palmehaver, opvarmet pool, sauna, restaurant og privat strandadgang.",
    "lat": 36.402,
    "lng": -5.195,
    "address": "Carretera N340 Km 151, 29680 Estepona, Málaga, Spanien",
    "url": "https://costanatura.com/"
  },
  {
    "id": "loc-es-elportus",
    "name": "Camping Naturista El Portús (Cartagena, Murcia)",
    "type": "resort",
    "country": "Spanien",
    "region": "Murcia",
    "keywords": [
      "spanien",
      "spain",
      "el portus",
      "portús",
      "cartagena",
      "murcia",
      "resort",
      "camping",
      "spa"
    ],
    "description": "Kæmpe 100 hektar naturistresort beliggende i en fredet naturpark direkte ved den private bugt Cala Morena. Åbent hele året med opvarmet indendørs pool, spa, hytter og camping.",
    "lat": 37.585,
    "lng": -1.065,
    "address": "Cala Morena, 30397 El Portús, Cartagena, Murcia, Spanien",
    "url": "https://www.elportus.com/"
  },
  {
    "id": "loc-es-eltemplo",
    "name": "Camping El Templo del Sol (Platja del Torn, Tarragona)",
    "type": "campsite",
    "country": "Spanien",
    "region": "Catalonien",
    "keywords": [
      "spanien",
      "spain",
      "templo del sol",
      "platja del torn",
      "torn",
      "tarragona",
      "camping",
      "resort"
    ],
    "description": "5-stjernet maurisk-inspireret luksus-naturistcampingplads beliggende direkte ved Platja del Torn – en af Europas mest legendariske naturiststrande i Catalonien.",
    "lat": 40.982,
    "lng": 0.885,
    "address": "Platja del Torn, 43890 L'Hospitalet de l'Infant, Tarragona, Spanien",
    "url": "https://www.eltemplodelsol.com/"
  },
  {
    "id": "loc-es-cantarrijan",
    "name": "Playa de Cantarriján (La Herradura / Costa Tropical)",
    "type": "beach",
    "country": "Spanien",
    "region": "Andalusien / Granada",
    "keywords": [
      "spanien",
      "spain",
      "cantarrijan",
      "cantarriján",
      "la herradura",
      "nerja",
      "granada",
      "strand"
    ],
    "description": "Spektakulær naturiststrand gemt mellem klipperne i Maro-Cerro Gordo naturparken. To hyggelige strandrestauranter med frisk fisk og krystalklart vand til snorkling.",
    "lat": 36.744,
    "lng": -3.785,
    "address": "Playa Cantarriján, 18697 Almuñécar, Granada, Spanien"
  },
  {
    "id": "loc-es-bolonia",
    "name": "Playa de Bolonia & El Cañuelo (Tarifa / Cadiz)",
    "type": "beach",
    "country": "Spanien",
    "region": "Costa de la Luz / Andalusien",
    "keywords": [
      "spanien",
      "spain",
      "bolonia",
      "tarifa",
      "cadiz",
      "costa de la luz",
      "strand"
    ],
    "description": "Berømt for den kæmpestore vandreklit og romerske ruiner. Den sydlige sektion mod El Cañuelo er et fredfyldt paradis for naturister med udsigt til Marokko.",
    "lat": 36.082,
    "lng": -5.775,
    "address": "Bolonia, 11391 Tarifa, Cádiz, Spanien"
  },
  {
    "id": "loc-es-canosdemeca",
    "name": "Playa de Zahora & Caños de Meca (Cádiz)",
    "type": "beach",
    "country": "Spanien",
    "region": "Costa de la Luz / Andalusien",
    "keywords": [
      "spanien",
      "spain",
      "canos de meca",
      "zahora",
      "trafalgar",
      "cadiz",
      "strand"
    ],
    "description": "Omkring Trafalgar-fyrtårnet findes udstrakte gyldne strande med rolig og boheme-agtig naturiststemning ved Atlanterhavet.",
    "lat": 36.185,
    "lng": -6.035,
    "address": "Playa de Zahora, 11159 Barbate, Cádiz, Spanien"
  },
  {
    "id": "loc-es-saler",
    "name": "Platja del Saler (Valencia / Albufera)",
    "type": "beach",
    "country": "Spanien",
    "region": "Valencia",
    "keywords": [
      "spanien",
      "spain",
      "saler",
      "valencia",
      "albufera",
      "strand"
    ],
    "description": "Valencias mest elskede naturiststrand i Albufera naturparken, omgivet af fyrretræer og klitter kun 15 minutter fra bymidten.",
    "lat": 39.385,
    "lng": -0.328,
    "address": "Platja del Saler, 46012 Valencia, Spanien"
  },
  {
    "id": "loc-es-waikiki",
    "name": "Cala Fonda / Playa Waikiki (Tarragona)",
    "type": "beach",
    "country": "Spanien",
    "region": "Catalonien",
    "keywords": [
      "spanien",
      "spain",
      "waikiki",
      "cala fonda",
      "tarragona",
      "strand"
    ],
    "description": "Uberørt og afsondret naturistbugt omgivet af klippeskrænter og duftende fyrreskove. En af Cataloniens bedst bevarede kyststrækninger.",
    "lat": 41.129,
    "lng": 1.328,
    "address": "Bosc de la Marquesa, 43008 Tarragona, Spanien"
  },
  {
    "id": "loc-es-marbella-bcn",
    "name": "Platja de la Mar Bella (Barcelona)",
    "type": "beach",
    "country": "Spanien",
    "region": "Barcelona / Catalonien",
    "keywords": [
      "spanien",
      "spain",
      "mar bella",
      "barcelona",
      "strand"
    ],
    "description": "Barcelonas officielle storbynaturiststrand ved Poblenou med livlig strandbar, vandsport og nem adgang med metroen.",
    "lat": 41.3995,
    "lng": 2.2085,
    "address": "Passeig Marítim del Bogatell, 08005 Barcelona, Spanien"
  },
  {
    "id": "loc-es-torimbia",
    "name": "Playa de Torimbia (Llanes, Asturien)",
    "type": "beach",
    "country": "Spanien",
    "region": "Asturien / Nordspanien",
    "keywords": [
      "spanien",
      "spain",
      "torimbia",
      "llanes",
      "asturien",
      "nordspanien",
      "strand"
    ],
    "description": "Kåret som en af verdens smukkeste naturiststrande: En perfekt halvmåneformet bugt omgivet af grønne bjergsider og Atlanterhavet.",
    "lat": 43.442,
    "lng": -4.852,
    "address": "Niembro, 33595 Llanes, Asturien, Spanien"
  },
  {
    "id": "loc-es-estrenc",
    "name": "Platja des Trenc (Mallorca)",
    "type": "beach",
    "country": "Spanien",
    "region": "Mallorca / Balearerne",
    "keywords": [
      "spanien",
      "spain",
      "mallorca",
      "es trenc",
      "balearerne",
      "strand"
    ],
    "description": "Mallorcas berømte 'Caribiske' strand med over 2 km kridhvidt sand og lavt turkist vand. Den centrale del mellem ses Covetes og Colonia Sant Jordi er et naturistparadis.",
    "lat": 39.345,
    "lng": 2.985,
    "address": "Campos, 07630 Mallorca, Balearerne, Spanien"
  },
  {
    "id": "loc-es-collbaix",
    "name": "Platja des Coll Baix (Alcudia, Mallorca)",
    "type": "beach",
    "country": "Spanien",
    "region": "Mallorca / Balearerne",
    "keywords": [
      "spanien",
      "spain",
      "mallorca",
      "coll baix",
      "alcudia",
      "strand"
    ],
    "description": "Dramatisk sten- og sandstrand for foden af lodrette klipper på Alcudia-halvøen. Nås via smuk vandretur.",
    "lat": 39.86,
    "lng": 3.19,
    "address": "Camí del Coll Baix, 07400 Alcúdia, Mallorca, Spanien"
  },
  {
    "id": "loc-es-aguasblancas",
    "name": "Platja d'Aigües Blanques / Aguas Blancas (Ibiza)",
    "type": "beach",
    "country": "Spanien",
    "region": "Ibiza / Balearerne",
    "keywords": [
      "spanien",
      "spain",
      "ibiza",
      "aguas blancas",
      "aigues blanques",
      "balearerne",
      "strand"
    ],
    "description": "Ikonisk naturiststrand på Ibizas nordøstkyst med gyldent sand, dramatisk klippevæg og naturligt rødt lermudder til hudpleje.",
    "lat": 39.06,
    "lng": 1.589,
    "address": "07850 Santa Eulària des Riu, Ibiza, Spanien"
  },
  {
    "id": "loc-es-escavallet",
    "name": "Platja des Cavallet (Ibiza)",
    "type": "beach",
    "country": "Spanien",
    "region": "Ibiza / Balearerne",
    "keywords": [
      "spanien",
      "spain",
      "ibiza",
      "es cavallet",
      "cavallet",
      "balearerne",
      "strand"
    ],
    "description": "Ibizas officielle naturiststrand beliggende i naturreservatet Ses Salines med vilde klitter, turkist vand og berømte strandklubber.",
    "lat": 38.85,
    "lng": 1.402,
    "address": "Ses Salines, 07817 Sant Josep de sa Talaia, Ibiza, Spanien"
  },
  {
    "id": "loc-es-sesilletes",
    "name": "Platja de Ses Illetes & Llevant (Formentera)",
    "type": "beach",
    "country": "Spanien",
    "region": "Formentera / Balearerne",
    "keywords": [
      "spanien",
      "spain",
      "formentera",
      "ses illetes",
      "llevant",
      "balearerne",
      "strand"
    ],
    "description": "Europas svar på Maldiverne. En smal landtange med krystalklart vand til begge sider, hvor naturister bader side om side i harmoni.",
    "lat": 38.758,
    "lng": 1.432,
    "address": "07871 Formentera, Balearerne, Spanien"
  },
  {
    "id": "loc-menorca-macarelleta",
    "name": "Cala Macarelleta (Menorca Sydkyst)",
    "type": "beach",
    "country": "Spanien",
    "region": "Menorca / Balearerne",
    "keywords": [
      "spanien",
      "spain",
      "menorca",
      "macarelleta",
      "balearerne",
      "strand"
    ],
    "description": "Menorcas mest fotograferede paradisbugt med kridhvidt sand og turkist vand, omgivet af duftende pinjeskove. Naturisme er en stolt tradition her.",
    "lat": 39.9325,
    "lng": 3.936,
    "address": "Cala Macarelleta, 07769 Ciutadella de Menorca, Spanien"
  },
  {
    "id": "loc-menorca-trebaluger",
    "name": "Cala Trebalúger (Menorca Sydkyst)",
    "type": "beach",
    "country": "Spanien",
    "region": "Menorca / Balearerne",
    "keywords": [
      "spanien",
      "spain",
      "menorca",
      "trebaluger",
      "trebalúger",
      "balearerne",
      "strand"
    ],
    "description": "Fredet og uspoleret naturiststrand med en lille ferskvandsflod. Nås via vandrestien Camí de Cavalls.",
    "lat": 39.928,
    "lng": 3.992,
    "address": "Cala Trebalúger, 07749 Es Migjorn Gran, Menorca, Spanien"
  },
  {
    "id": "loc-menorca-pregonda",
    "name": "Cala Pregonda (Menorca Nordkyst)",
    "type": "beach",
    "country": "Spanien",
    "region": "Menorca / Balearerne",
    "keywords": [
      "spanien",
      "spain",
      "menorca",
      "pregonda",
      "balearerne",
      "strand"
    ],
    "description": "Spektakulær strand på nordkysten med gyldent-rødt sand og beskyttende klippeøer i et uberørt marinereservat.",
    "lat": 40.057,
    "lng": 4.041,
    "address": "Cala Pregonda, 07748 Es Mercadal, Menorca, Spanien"
  },
  {
    "id": "loc-menorca-pilar",
    "name": "Cala Pilar (Menorca Nordvestkyst)",
    "type": "beach",
    "country": "Spanien",
    "region": "Menorca / Balearerne",
    "keywords": [
      "spanien",
      "spain",
      "menorca",
      "pilar",
      "cala pilar",
      "balearerne",
      "strand"
    ],
    "description": "Vild og ugeneret naturistperle med gyldent sand og røde klipper omgivet af naturreservat.",
    "lat": 40.053,
    "lng": 3.978,
    "address": "Cala Pilar, 07769 Ciutadella de Menorca, Spanien"
  },
  {
    "id": "loc-menorca-cavalleria",
    "name": "Platja de Cavalleria (Menorca Nordkyst)",
    "type": "beach",
    "country": "Spanien",
    "region": "Menorca / Balearerne",
    "keywords": [
      "spanien",
      "spain",
      "menorca",
      "cavalleria",
      "balearerne",
      "strand"
    ],
    "description": "Stor vild naturstrand ved Cap de Cavalleria med rustrødt sand. Den østlige del er traditionel naturiststrand.",
    "lat": 40.06,
    "lng": 4.076,
    "address": "07748 Es Mercadal, Menorca, Spanien"
  },
  {
    "id": "loc-es-maspalomas",
    "name": "Dunas de Maspalomas / Klit 4-7 (Gran Canaria)",
    "type": "beach",
    "country": "Spanien",
    "region": "Gran Canaria / De Kanariske Øer",
    "keywords": [
      "spanien",
      "spain",
      "gran canaria",
      "maspalomas",
      "kanariske øer",
      "strand",
      "klitter"
    ],
    "description": "Verdensberømt ørkenklitlandskab ud mod Atlanterhavet. Kioskerne 4 til 7 huser et af verdens største og mest populære naturistområder året rundt.",
    "lat": 27.742,
    "lng": -15.578,
    "address": "Playa de Maspalomas, 35100 San Bartolomé de Tirajana, Gran Canaria, Spanien"
  },
  {
    "id": "loc-es-charcodelpalo",
    "name": "Charco del Palo Naturist Village (Lanzarote)",
    "type": "resort",
    "country": "Spanien",
    "region": "Lanzarote / De Kanariske Øer",
    "keywords": [
      "spanien",
      "spain",
      "lanzarote",
      "charco del palo",
      "kanariske øer",
      "resort",
      "naturistby"
    ],
    "description": "En hel naturistlandsby grundlagt i 1970'erne på Lanzarotes nordøstkyst. Naturlige tidevandsbassiner i vulkanklippen, lejligheder, barer og restauranter hvor tøj er valgfrit overalt.",
    "lat": 29.083,
    "lng": -13.452,
    "address": "Charco del Palo, 35543 Haría, Lanzarote, Spanien"
  },
  {
    "id": "loc-es-papagayo",
    "name": "Playa de Papagayo & Playa de Las Mujeres (Lanzarote)",
    "type": "beach",
    "country": "Spanien",
    "region": "Lanzarote / De Kanariske Øer",
    "keywords": [
      "spanien",
      "spain",
      "lanzarote",
      "papagayo",
      "playa blanca",
      "strand"
    ],
    "description": "Beskyttede gyldne sandbugter i naturparken Los Ajaches tæt ved Playa Blanca. Naturister benytter især Playa de Las Mujeres og Caleta del Congrio.",
    "lat": 28.843,
    "lng": -13.788,
    "address": "Los Ajaches, 35580 Yaiza, Lanzarote, Spanien"
  },
  {
    "id": "loc-es-cofete",
    "name": "Playa de Cofete (Jandía, Fuerteventura)",
    "type": "beach",
    "country": "Spanien",
    "region": "Fuerteventura / De Kanariske Øer",
    "keywords": [
      "spanien",
      "spain",
      "fuerteventura",
      "cofete",
      "jandia",
      "strand"
    ],
    "description": "En af Europas mest storslåede vilde kyster. 14 km uafbrudt gyldent sand for foden af 800 meter høje vulkanbjerge med uendelig plads til naturister.",
    "lat": 28.115,
    "lng": -14.375,
    "address": "Cofete, 35626 Pájara, Fuerteventura, Spanien"
  },
  {
    "id": "loc-es-lasgaviotas",
    "name": "Playa de Las Gaviotas (Santa Cruz de Tenerife)",
    "type": "beach",
    "country": "Spanien",
    "region": "Tenerife / De Kanariske Øer",
    "keywords": [
      "spanien",
      "spain",
      "tenerife",
      "las gaviotas",
      "kanariske øer",
      "strand"
    ],
    "description": "Klassisk naturiststrand med fint sort vulkansand tæt på Las Teresitas for foden af Anaga-bjergkæden.",
    "lat": 28.512,
    "lng": -16.168,
    "address": "Carretera Igueste de San Andrés, 38120 Santa Cruz de Tenerife, Spanien"
  },
  {
    "id": "loc-es-latejita",
    "name": "Playa de La Tejita & Montaña Roja (El Médano, Tenerife)",
    "type": "beach",
    "country": "Spanien",
    "region": "Tenerife / De Kanariske Øer",
    "keywords": [
      "spanien",
      "spain",
      "tenerife",
      "la tejita",
      "el medano",
      "strand"
    ],
    "description": "Bred natursandstrand for foden af det røde vulkankrater Montaña Roja. Den østlige bugt er en fredet officiel naturiststrand.",
    "lat": 28.031,
    "lng": -16.558,
    "address": "38612 El Médano, Granadilla de Abona, Tenerife, Spanien"
  },
  {
    "id": "loc-fra-capdagde",
    "name": "Village Naturiste Cap d'Agde",
    "type": "resort",
    "country": "Frankrig",
    "region": "Languedoc-Roussillon",
    "keywords": [
      "frankrig",
      "france",
      "cap d'agde",
      "cap dagde",
      "agde",
      "resort",
      "strand"
    ],
    "description": "Verdens største og mest kendte naturistby. En hel havneby med 2 km sandstrand, lystbådehavn, hundredvis af butikker, restauranter og et berømt natteliv.",
    "lat": 43.2925,
    "lng": 3.535,
    "address": "Boulevard des Matelots, 34300 Agde, Hérault, Frankrig",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": "loc-fra-montalivet",
    "name": "CHM Montalivet (Gironde, Atlanterhavet)",
    "type": "resort",
    "country": "Frankrig",
    "region": "Aquitaine",
    "keywords": [
      "frankrig",
      "france",
      "montalivet",
      "chm",
      "gironde",
      "resort",
      "camping"
    ],
    "description": "Naturismens historiske fødested grundlagt i 1950. En kæmpe 200 hektar familie-naturistpark i Atlanterhavets fyrreskove med direkte adgang til vilde sandstrande.",
    "lat": 45.362,
    "lng": -1.155,
    "address": "33930 Vendays-Montalivet, Gironde, Frankrig",
    "url": "https://www.chm-montalivet.com/"
  },
  {
    "id": "loc-fra-euronat",
    "name": "Euronat Centre Naturiste (Gironde)",
    "type": "resort",
    "country": "Frankrig",
    "region": "Aquitaine",
    "keywords": [
      "frankrig",
      "france",
      "euronat",
      "grayan",
      "gironde",
      "resort",
      "camping",
      "spa"
    ],
    "description": "Europas største naturistcenter på 335 hektar med thalassoterapi, stort poolkompleks, indkøbsgade og 1,5 km gylden Atlanterhavsstrand.",
    "lat": 45.412,
    "lng": -1.148,
    "address": "33590 Grayan-et-l'Hôpital, Gironde, Frankrig",
    "url": "https://www.euronat.fr/"
  },
  {
    "id": "loc-fra-arnaoutchot",
    "name": "Arnaoutchot Naturist Resort (Landes)",
    "type": "resort",
    "country": "Frankrig",
    "region": "Aquitaine",
    "keywords": [
      "frankrig",
      "france",
      "arnaoutchot",
      "landes",
      "resort",
      "spa",
      "camping"
    ],
    "description": "45 hektar skovresort ved Atlanterhavets Sølvkyst med førsteklasses camping, spa-badeanlæg og direkte adgang til den brede klitstrand.",
    "lat": 43.865,
    "lng": -1.378,
    "address": "40560 Vielle-Saint-Girons, Landes, Frankrig"
  },
  {
    "id": "loc-fra-serignan",
    "name": "Le Sérignan Plage Nature (Hérault)",
    "type": "campsite",
    "country": "Frankrig",
    "region": "Languedoc",
    "keywords": [
      "frankrig",
      "france",
      "serignan",
      "sérignan",
      "herault",
      "camping",
      "resort"
    ],
    "description": "Luksuriøs 4-stjernet naturistcamping direkte ved en bred sandstrand ved Middelhavet med et enestående romersk balneoterapi-spaområde.",
    "lat": 43.275,
    "lng": 3.328,
    "address": "34410 Sérignan, Hérault, Frankrig",
    "url": "https://www.leserignanplage.com/"
  },
  {
    "id": "loc-fra-belezy",
    "name": "Domaine de Bélézy (Provence / Mont Ventoux)",
    "type": "resort",
    "country": "Frankrig",
    "region": "Provence",
    "keywords": [
      "frankrig",
      "france",
      "belezy",
      "bélézy",
      "bedoin",
      "provence",
      "resort"
    ],
    "description": "Eksklusivt og fredfyldt naturistresort ved foden af Mont Ventoux i Provence, omgivet af lavendelmarker, slot og opvarmede swimmingpools.",
    "lat": 44.118,
    "lng": 5.185,
    "address": "Chemin de Bélézy, 84410 Bédoin, Provence, Frankrig",
    "url": "https://www.belezy.com/"
  },
  {
    "id": "loc-fra-iledulevant",
    "name": "Plage des Grottes - Île du Levant (Côte d'Azur)",
    "type": "beach",
    "country": "Frankrig",
    "region": "Côte d'Azur",
    "keywords": [
      "frankrig",
      "france",
      "ile du levant",
      "heliopolis",
      "hyeres",
      "cote d'azur",
      "strand"
    ],
    "description": "Den legendariske naturist-ø ud for Hyères, hvor Héliopolis blev grundlagt i 1931 som verdens første naturistlandsby.",
    "lat": 43.0295,
    "lng": 6.468,
    "address": "Île du Levant, 83400 Hyères, Frankrig"
  },
  {
    "id": "loc-fra-espiguette",
    "name": "Plage de l'Espiguette (Grau-du-Roi / Camargue)",
    "type": "beach",
    "country": "Frankrig",
    "region": "Camargue",
    "keywords": [
      "frankrig",
      "france",
      "espiguette",
      "grau du roi",
      "camargue",
      "strand"
    ],
    "description": "10 km vilde, uberørte klitter i Camargue. Den østlige del huser en kæmpe officiel naturiststrand.",
    "lat": 43.488,
    "lng": 4.145,
    "address": "30240 Le Grau-du-Roi, Gard, Frankrig"
  },
  {
    "id": "loc-korsika-rivabella",
    "name": "Riva Bella Thalasso & Spa Resort (Korsika)",
    "type": "resort",
    "country": "Frankrig",
    "region": "Korsika",
    "keywords": [
      "frankrig",
      "france",
      "korsika",
      "corsica",
      "riva bella",
      "resort",
      "camping"
    ],
    "description": "4-stjernet naturistresort beliggende direkte på Korsikas østkyst i Aléria. Åbent hele året med ægte saltvands-thalassoterapi, spa, vilde lamaer og bungalows i sandklitterne.",
    "lat": 42.128,
    "lng": 9.551,
    "address": "Route de Riva Bella, 20270 Aléria, Korsika, Frankrig",
    "url": "https://www.rivabella-spa.com/"
  },
  {
    "id": "loc-korsika-bagheera",
    "name": "Domaine de Bagheera (Korsika)",
    "type": "resort",
    "country": "Frankrig",
    "region": "Korsika",
    "keywords": [
      "frankrig",
      "france",
      "korsika",
      "corsica",
      "bagheera",
      "bravone",
      "resort",
      "camping"
    ],
    "description": "100 hektar uberørt egeskov og 5 km kridhvid sandstrand ved Bravone. Førende miljøvenligt naturistresort med hytter, camping, restauranter og vandsport.",
    "lat": 42.185,
    "lng": 9.562,
    "address": "20230 Bravone, Linguizzetta, Korsika, Frankrig",
    "url": "https://www.bagheera.fr/"
  },
  {
    "id": "loc-korsika-lachiappa",
    "name": "Camping Naturiste La Chiappa (Porto-Vecchio, Korsika)",
    "type": "campsite",
    "country": "Frankrig",
    "region": "Korsika",
    "keywords": [
      "frankrig",
      "france",
      "korsika",
      "corsica",
      "chiappa",
      "porto-vecchio",
      "resort",
      "camping"
    ],
    "description": "Spektakulært 60 hektar naturistferiested på en klippefyldt halvø i Porto-Vecchio bugten ved Palombaggia. Egen dykkerskole, to opvarmede pools og krystalklart vand.",
    "lat": 41.595,
    "lng": 9.355,
    "address": "Route de la Chiappa, 20137 Porto-Vecchio, Korsika, Frankrig",
    "url": "https://www.chiappa.com/"
  },
  {
    "id": "loc-korsika-ufuru",
    "name": "Camping U Furu Naturiste (Porto-Vecchio / Sydkorsika)",
    "type": "campsite",
    "country": "Frankrig",
    "region": "Korsika",
    "keywords": [
      "frankrig",
      "france",
      "korsika",
      "corsica",
      "u furu",
      "porto-vecchio",
      "camping"
    ],
    "description": "Unik oase i bjergene ved Porto-Vecchio omgivet af klippeformationer, fyrretræer og en forfriskende bjergflod med naturlige ferskvandspools.",
    "lat": 41.562,
    "lng": 9.225,
    "address": "Pisciatello, 20137 Porto-Vecchio, Korsika, Frankrig"
  },
  {
    "id": "loc-korsika-bodri",
    "name": "Plage de Bodri / Botre (L'Île-Rousse / Balagne)",
    "type": "beach",
    "country": "Frankrig",
    "region": "Korsika",
    "keywords": [
      "frankrig",
      "france",
      "korsika",
      "corsica",
      "bodri",
      "ile-rousse",
      "balagne",
      "strand"
    ],
    "description": "Kridhvid finkornet sandstrand med turkist vand. Den sydlige sektion mod klipperne er en af Nordkorsikas mest populære og anerkendte naturiststrande.",
    "lat": 42.632,
    "lng": 8.905,
    "address": "20220 Corbara, Balagne, Korsika, Frankrig"
  },
  {
    "id": "loc-korsika-saleccia",
    "name": "Plage de Saleccia (Désert des Agriates)",
    "type": "beach",
    "country": "Frankrig",
    "region": "Korsika",
    "keywords": [
      "frankrig",
      "france",
      "korsika",
      "corsica",
      "saleccia",
      "agriates",
      "st florent",
      "strand"
    ],
    "description": "En af Middelhavets mest uberørte og berømte vilde strande med 1 km hvidt sand og fyrretræer i Agriates-ørkenen. Naturister nyder de ubebyggede yderender.",
    "lat": 42.726,
    "lng": 9.204,
    "address": "Désert des Agriates, 20246 Santo-Pietro-di-Tenda, Korsika, Frankrig"
  },
  {
    "id": "loc-korsika-bravone",
    "name": "Plage de Bravone Naturiste (Korsika Østkyst)",
    "type": "beach",
    "country": "Frankrig",
    "region": "Korsika",
    "keywords": [
      "frankrig",
      "france",
      "korsika",
      "corsica",
      "bravone",
      "linguizzetta",
      "strand"
    ],
    "description": "Kilometerlang uspoleret gylden sandstrand nord for Aléria i Linguizzetta, kendt for sit varme rolige vand og fredelige naturistmiljø.",
    "lat": 42.195,
    "lng": 9.565,
    "address": "Marine de Bravone, 20230 Linguizzetta, Korsika, Frankrig"
  },
  {
    "id": "loc-korsika-roccapina",
    "name": "Plage de Roccapina (Sartène / Sydvestkorsika)",
    "type": "beach",
    "country": "Frankrig",
    "region": "Korsika",
    "keywords": [
      "frankrig",
      "france",
      "korsika",
      "corsica",
      "roccapina",
      "sartene",
      "strand"
    ],
    "description": "Postkort-bugt med turkist vand overvåget af den berømte løveklippe 'Lion de Roccapina'. Naturisme praktiseres uforstyrret i bugtens yderender.",
    "lat": 41.498,
    "lng": 8.935,
    "address": "Roccapina, 20100 Sartène, Korsika, Frankrig"
  },
  {
    "id": "loc-korsika-fango",
    "name": "Vallée du Fango Klippebassiner (Galéria / Vestkorsika)",
    "type": "other",
    "country": "Frankrig",
    "region": "Korsika",
    "keywords": [
      "frankrig",
      "france",
      "korsika",
      "corsica",
      "fango",
      "galeria",
      "flod",
      "bassiner"
    ],
    "description": "Fredet UNESCO-biosfærereservat med lune, krystalklare ferskvandspools og lyserøde granitterasser i Fango-floden. Et populært ferskvandsalternativ for naturister.",
    "lat": 42.415,
    "lng": 8.705,
    "address": "Vallée du Fango, 20245 Galéria, Korsika, Frankrig"
  },
  {
    "id": "loc-korsika-ghjunchitu",
    "name": "Plage de Ghjunchitu (Balagne / L'Île-Rousse)",
    "type": "beach",
    "country": "Frankrig",
    "region": "Korsika",
    "keywords": [
      "frankrig",
      "france",
      "korsika",
      "corsica",
      "ghjunchitu",
      "balagne",
      "strand"
    ],
    "description": "Søsterstranden til Bodri med fint hvidt sand og krystalklart vand omgivet af duftende maquis. Klipperne mod syd er et velkendt naturistområde.",
    "lat": 42.635,
    "lng": 8.895,
    "address": "20220 Corbara, Korsika, Frankrig"
  },
  {
    "id": "loc-fra-tahiti",
    "name": "Plage de Tahiti (Saint-Tropez / Ramatuelle)",
    "type": "beach",
    "country": "Frankrig",
    "region": "Côte d'Azur",
    "keywords": [
      "frankrig",
      "france",
      "saint-tropez",
      "st tropez",
      "tahiti",
      "pampelonne",
      "strand"
    ],
    "description": "Den nordlige ende af den berømte Pampelonne-strand ved Saint-Tropez, der siden 1950'erne har været kendt for afslappet fransk naturisme og strandliv.",
    "lat": 43.235,
    "lng": 6.668,
    "address": "Plage de Pampelonne, 83350 Ramatuelle, Frankrig"
  },
  {
    "id": "loc-fra-lasabliere",
    "name": "Domaine de La Sablière (Gorges de la Cèze, Gard)",
    "type": "resort",
    "country": "Frankrig",
    "region": "Gard / Sydfrankrig",
    "keywords": [
      "frankrig",
      "france",
      "la sabliere",
      "sablière",
      "ceze",
      "gard",
      "resort",
      "camping"
    ],
    "description": "62 hektar naturskønt resort i kløften Gorges de la Cèze med privat flodstrand, store opvarmede swimmingpools, sauna og udendørs sportsfaciliteter.",
    "lat": 44.248,
    "lng": 4.415,
    "address": "30630 Barjac, Gard, Frankrig",
    "url": "https://www.camping-lasabliere.com/"
  },
  {
    "id": "loc-cro-valalta",
    "name": "Valalta Naturist Camp & Resort (Rovinj, Istrien)",
    "type": "resort",
    "country": "Kroatien",
    "region": "Istrien",
    "keywords": [
      "kroatien",
      "croatia",
      "valalta",
      "rovinj",
      "istrien",
      "resort",
      "camping"
    ],
    "description": "Europas mest berømte og prisbelønnede naturistresort ved Limfjorden i Rovinj. 5 km kyststrækning med sand- og rullestensstrande, kæmpe poolanlæg med havvand og eget bryggeri.",
    "lat": 45.122,
    "lng": 13.631,
    "address": "Cesta za Valaltu - Lim 7, 52210 Rovinj, Istrien, Kroatien",
    "url": "https://www.valalta.hr/"
  },
  {
    "id": "loc-cro-koversada",
    "name": "Koversada Naturist Park (Vrsar, Istrien)",
    "type": "resort",
    "country": "Kroatien",
    "region": "Istrien",
    "keywords": [
      "kroatien",
      "croatia",
      "koversada",
      "vrsar",
      "istrien",
      "resort",
      "camping"
    ],
    "description": "Verdens ældste naturistcenter grundlagt i 1961. Omfatter en hel privat ø forbundet med fastlandet via en træbro, omgivet af frodig middelhavsnatur.",
    "lat": 45.145,
    "lng": 13.598,
    "address": "Koversada 1, 52450 Vrsar, Istrien, Kroatien",
    "url": "https://www.maistra.com/properties/naturist-park-koversada-apartments/"
  },
  {
    "id": "loc-cro-bunculuka",
    "name": "Camping Bunculuka Naturist Resort (Baška, Krk)",
    "type": "resort",
    "country": "Kroatien",
    "region": "Kvarner / Øen Krk",
    "keywords": [
      "kroatien",
      "croatia",
      "bunculuka",
      "baska",
      "baška",
      "krk",
      "camping",
      "resort"
    ],
    "description": "Luksuriøst 4-stjernet naturistferiested gemt i en intim bugt omgivet af fyrreskov og høje hvide bjerge med direkte adgang til krystalklart vand.",
    "lat": 44.968,
    "lng": 14.768,
    "address": "Kricin 30, 51523 Baška, Krk, Kroatien",
    "url": "https://www.camping-adriatic.com/bunculuka-camp-krk"
  },
  {
    "id": "loc-cro-solaris",
    "name": "Solaris Naturist Camping Resort (Poreč, Istrien)",
    "type": "campsite",
    "country": "Kroatien",
    "region": "Istrien",
    "keywords": [
      "kroatien",
      "croatia",
      "solaris",
      "porec",
      "poreč",
      "istrien",
      "camping",
      "resort"
    ],
    "description": "Beliggende på den grønne Lanterna-halvø nord for Poreč med 2,5 km kystlinje, pools med havudsigt, sportsfaciliteter og bungalows.",
    "lat": 45.289,
    "lng": 13.585,
    "address": "Solaris 1, 52465 Tar-Vabriga, Poreč, Istrien, Kroatien"
  },
  {
    "id": "loc-cro-kandarola",
    "name": "FKK Beach Kandarola (Øen Rab)",
    "type": "beach",
    "country": "Kroatien",
    "region": "Kvarner / Øen Rab",
    "keywords": [
      "kroatien",
      "croatia",
      "kandarola",
      "rab",
      "strand"
    ],
    "description": "'The English King's Beach' – hvor Kong Edward VIII og Wallis Simpson badede nøgne i 1936 og kickstartede Adriaterhavets naturisme.",
    "lat": 44.755,
    "lng": 14.725,
    "address": "Frkanj Halvøen, 51280 Rab, Kroatien"
  },
  {
    "id": "loc-cro-lokrum",
    "name": "FKK Beach Lokrum (Dubrovnik)",
    "type": "beach",
    "country": "Kroatien",
    "region": "Dalmatien / Dubrovnik",
    "keywords": [
      "kroatien",
      "croatia",
      "lokrum",
      "dubrovnik",
      "dalmatien",
      "strand"
    ],
    "description": "Kun 15 minutters færgetur fra Dubrovniks gamle havn. Klippestranden på øens sydøstlige spids er en fredelig naturistoase.",
    "lat": 42.624,
    "lng": 18.121,
    "address": "Øen Lokrum, 20000 Dubrovnik, Kroatien"
  },
  {
    "id": "loc-cro-nugal",
    "name": "Nugal Beach (Makarska Riviera)",
    "type": "beach",
    "country": "Kroatien",
    "region": "Dalmatien",
    "keywords": [
      "kroatien",
      "croatia",
      "nugal",
      "makarska",
      "dalmatien",
      "strand"
    ],
    "description": "En af Adriaterhavets smukkeste naturiststrande, gemt under en 30 meter lodret klippevæg i Osejava-skovparken.",
    "lat": 43.281,
    "lng": 17.035,
    "address": "Park Šuma Osejava, 21300 Makarska, Kroatien"
  },
  {
    "id": "loc-cro-baldarin",
    "name": "FKK Camping Baldarin (Punta Križa, Cres)",
    "type": "campsite",
    "country": "Kroatien",
    "region": "Kvarner / Øen Cres",
    "keywords": [
      "kroatien",
      "croatia",
      "baldarin",
      "cres",
      "punta kriza",
      "camping"
    ],
    "description": "En af Adriaterhavets mest fredfyldte og vilde naturistcampingpladser på sydspidsen af øen Cres, omgivet af tætte egeskove og krystalklart turkist hav.",
    "lat": 44.619,
    "lng": 14.505,
    "address": "Punta Križa 66, 51554 Nerezine, Cres, Kroatien",
    "url": "https://www.camp-baldarin.com/"
  },
  {
    "id": "loc-cro-ulika",
    "name": "FKK Camping Ulika (Poreč, Istrien)",
    "type": "campsite",
    "country": "Kroatien",
    "region": "Istrien",
    "keywords": [
      "kroatien",
      "croatia",
      "ulika",
      "porec",
      "poreč",
      "istrien",
      "camping"
    ],
    "description": "4-stjernet familievenlig naturistcampingplads nord for Poreč med swimmingpool, mobile homes, restauranter og 2,5 km sten- og klippestrand med Blåt Flag.",
    "lat": 45.262,
    "lng": 13.585,
    "address": "Červar Porat, 52440 Poreč, Istrien, Kroatien",
    "url": "https://www.plavalaguna.com/en/camping/ulika"
  },
  {
    "id": "loc-cro-kanegra",
    "name": "FKK Camping Kanegra (Umag, Istrien)",
    "type": "campsite",
    "country": "Kroatien",
    "region": "Istrien",
    "keywords": [
      "kroatien",
      "croatia",
      "kanegra",
      "umag",
      "istrien",
      "camping"
    ],
    "description": "Beliggende i Piran-bugten tæt på den slovenske grænse, omgivet af grønne pinjetræer og en smuk rullestensstrand med roligt badevand.",
    "lat": 45.485,
    "lng": 13.562,
    "address": "Kanegra 2, 52470 Umag, Istrien, Kroatien"
  },
  {
    "id": "loc-cro-sahara",
    "name": "Sahara Beach & Stolac (Lopar, Øen Rab)",
    "type": "beach",
    "country": "Kroatien",
    "region": "Kvarner / Øen Rab",
    "keywords": [
      "kroatien",
      "croatia",
      "sahara",
      "lopar",
      "rab",
      "strand"
    ],
    "description": "En af Kroatiens sjældne ægte sandstrande. En bred, fredet halvmåneformet bugt omgivet af lave klipper, hvor naturisme har været dyrket i årtier.",
    "lat": 44.838,
    "lng": 14.748,
    "address": "Lopar, 51281 Rab, Kroatien"
  },
  {
    "id": "loc-cro-paklina",
    "name": "FKK Beach Paklina (Bol, Øen Brač)",
    "type": "beach",
    "country": "Kroatien",
    "region": "Dalmatien / Øen Brač",
    "keywords": [
      "kroatien",
      "croatia",
      "paklina",
      "bol",
      "brac",
      "brač",
      "strand"
    ],
    "description": "Ligger lige vest for det berømte gyldne horn Zlatni Rat. Afsondrede små rullestensbugter i skyggen af pinjeskove med fantastisk badevand.",
    "lat": 43.255,
    "lng": 16.621,
    "address": "Bol, 21420 Brač, Kroatien"
  },
  {
    "id": "loc-cro-jerolim",
    "name": "FKK Beach Jerolim (Pakleni Øerne, Hvar)",
    "type": "beach",
    "country": "Kroatien",
    "region": "Dalmatien / Hvar",
    "keywords": [
      "kroatien",
      "croatia",
      "jerolim",
      "hvar",
      "pakleni",
      "strand"
    ],
    "description": "En lille fredet ø ud for byen Hvar, kåret af CNN som en af verdens førende naturiststrande med krystalklart vand og hyggelig ø-bar.",
    "lat": 43.161,
    "lng": 16.435,
    "address": "Sveti Jerolim, 21450 Hvar, Kroatien"
  },
  {
    "id": "loc-cro-stipanska",
    "name": "FKK Beach Stipanska / Marinkovac (Hvar)",
    "type": "beach",
    "country": "Kroatien",
    "region": "Dalmatien / Hvar",
    "keywords": [
      "kroatien",
      "croatia",
      "stipanska",
      "hvar",
      "marinkovac",
      "strand"
    ],
    "description": "Klassisk naturistø i Pakleni-skærgården med glatte klippeplateauer og turkist vand kun 10 minutters bådtur fra Hvar havn.",
    "lat": 43.155,
    "lng": 16.425,
    "address": "Marinkovac, 21450 Hvar, Kroatien"
  },
  {
    "id": "loc-cro-proizd",
    "name": "Bili Boci FKK Beach (Øen Proizd, Korčula)",
    "type": "beach",
    "country": "Kroatien",
    "region": "Dalmatien / Korčula",
    "keywords": [
      "kroatien",
      "croatia",
      "proizd",
      "korcula",
      "korčula",
      "vela luka",
      "strand"
    ],
    "description": "Kridhvide skrånende klipper og turkist hav kåret som Kroatiens smukkeste strand. Den nordlige sektion er dedikeret til naturister.",
    "lat": 42.985,
    "lng": 16.612,
    "address": "Proizd, 20270 Vela Luka, Korčula, Kroatien"
  },
  {
    "id": "loc-cro-vrulja",
    "name": "FKK Beach Vrulja (Brela / Makarska)",
    "type": "beach",
    "country": "Kroatien",
    "region": "Dalmatien",
    "keywords": [
      "kroatien",
      "croatia",
      "vrulja",
      "brela",
      "makarska",
      "strand"
    ],
    "description": "Skjult bugt for foden af monumentale Biokovo-bjerge, hvor underjordiske ferskvandskilder springer ud i havet. Betagende vild natur.",
    "lat": 43.398,
    "lng": 16.885,
    "address": "21322 Brela, Makarska Riviera, Kroatien"
  },
  {
    "id": "loc-cro-istra",
    "name": "Istra Naturist Camping (Funtana, Vrsar)",
    "type": "campsite",
    "country": "Kroatien",
    "region": "Istrien",
    "keywords": [
      "kroatien",
      "croatia",
      "istra",
      "funtana",
      "vrsar",
      "istrien",
      "camping"
    ],
    "description": "Rolig og idyllisk naturistcampingplads beliggende på en skovklædt halvø med udsigt til Vrsars skærgård og Limfjorden.",
    "lat": 45.178,
    "lng": 13.602,
    "address": "Grgeti 35, 52452 Funtana, Istrien, Kroatien"
  },
  {
    "id": "loc-gre-vritomartis",
    "name": "Vritomartis Naturist Resort (Chora Sfakion, Kreta)",
    "type": "resort",
    "country": "Grækenland",
    "region": "Kreta",
    "keywords": [
      "grækenland",
      "greece",
      "kreta",
      "crete",
      "vritomartis",
      "sfakia",
      "resort",
      "hotel"
    ],
    "description": "Grækenlands eneste fuldt licenserede 4-stjernede naturisthotel og resort. Omgivet af De Hvide Bjerge og Det Libyske Hav med privat adgang til Filakaki-bugten.",
    "lat": 35.2045,
    "lng": 24.1485,
    "address": "Chora Sfakion, 73011 Kreta, Grækenland",
    "url": "https://www.vritomartis.gr/"
  },
  {
    "id": "loc-gre-filakaki",
    "name": "Filakaki Naturist Beach (Sfakia, Sydkreta)",
    "type": "beach",
    "country": "Grækenland",
    "region": "Kreta",
    "keywords": [
      "grækenland",
      "greece",
      "kreta",
      "filakaki",
      "sfakia",
      "strand"
    ],
    "description": "Krystalklar sten- og sandbugt under Vritomartis Resort med turkist vand og naturlige klippehuler ud til Det Libyske Hav.",
    "lat": 35.201,
    "lng": 24.152,
    "address": "Chora Sfakion, 73011 Kreta, Grækenland"
  },
  {
    "id": "loc-gre-redbeach",
    "name": "Red Beach / Kokkini Ammos (Matala, Kreta)",
    "type": "beach",
    "country": "Grækenland",
    "region": "Kreta",
    "keywords": [
      "grækenland",
      "greece",
      "kreta",
      "red beach",
      "matala",
      "kokkini ammos",
      "strand"
    ],
    "description": "Legendarisk naturiststrand med rustrødt sand og høje klipper syd for Matala. Nås via ca. 25 minutters vandretur.",
    "lat": 34.986,
    "lng": 24.749,
    "address": "Matala, 70400 Kreta, Grækenland"
  },
  {
    "id": "loc-gre-plakias",
    "name": "Plakias & Souda Naturist Beach (Rethymno, Kreta)",
    "type": "beach",
    "country": "Grækenland",
    "region": "Kreta",
    "keywords": [
      "grækenland",
      "greece",
      "kreta",
      "plakias",
      "souda",
      "rethymno",
      "strand"
    ],
    "description": "Den østlige ende af Plakias-bugten under den monumentale Paligremnos-klippevæg er et af Kretas ældste naturistmødesteder.",
    "lat": 35.187,
    "lng": 24.398,
    "address": "Plakias, 74060 Rethymno, Kreta, Grækenland"
  },
  {
    "id": "loc-gre-banana",
    "name": "Little Banana Beach (Skiathos)",
    "type": "beach",
    "country": "Grækenland",
    "region": "Sporaderne / Skiathos",
    "keywords": [
      "grækenland",
      "greece",
      "skiathos",
      "banana beach",
      "little banana",
      "strand"
    ],
    "description": "Grækenlands mest berømte naturiststrand gennem årtier. En intim gylden sandbugt omgivet af pinjetræer og krystalklart Ægæisk hav.",
    "lat": 39.148,
    "lng": 23.398,
    "address": "Koukounaries, 37002 Skiathos, Grækenland"
  },
  {
    "id": "loc-gre-mirtiotissa",
    "name": "Mirtiotissa Beach (Korfu)",
    "type": "beach",
    "country": "Grækenland",
    "region": "De Joniske Øer / Korfu",
    "keywords": [
      "grækenland",
      "greece",
      "korfu",
      "corfu",
      "mirtiotissa",
      "strand"
    ],
    "description": "Beskrevet af forfatteren Lawrence Durrell som 'måske den dejligste strand i verden'. Omgivet af dramatiske grønne klippeskrænter.",
    "lat": 39.615,
    "lng": 19.785,
    "address": "Vatos, 49100 Korfu, Grækenland"
  },
  {
    "id": "loc-gre-superparadise",
    "name": "Super Paradise & Elia Naturist Beach (Mykonos)",
    "type": "beach",
    "country": "Grækenland",
    "region": "Kykladerne / Mykonos",
    "keywords": [
      "grækenland",
      "greece",
      "mykonos",
      "elia",
      "super paradise",
      "strand"
    ],
    "description": "Elia Beach er Mykonos' største sandstrand, hvor den østlige klippeende traditionelt er et afslappet og venligt naturistområde.",
    "lat": 37.422,
    "lng": 25.388,
    "address": "Elia Beach, 84600 Mykonos, Grækenland"
  },
  {
    "id": "loc-dk-solbakken",
    "name": "Solbakken Naturistcamping (Kirke Såby, Sjælland)",
    "type": "campsite",
    "country": "Danmark",
    "region": "Sjælland",
    "keywords": [
      "danmark",
      "denmark",
      "solbakken",
      "kirke såby",
      "roskilde",
      "sjælland",
      "camping"
    ],
    "description": "Danmarks ældste og største naturistcampingplads grundlagt i 1957. Beliggende i naturskønne omgivelser tæt på Roskilde Fjord med swimmingpool, sauna, minigolf, café og et aktivt fællesskab.",
    "lat": 55.638,
    "lng": 11.875,
    "address": "Solbakkevej 25, 4060 Kirke Såby, Sjælland, Danmark",
    "url": "https://solbakken-naturistcamping.dk/"
  },
  {
    "id": "loc-dk-nfj",
    "name": "NFJ Camping / Als FKK (Skodsbøl / Sønderjylland)",
    "type": "campsite",
    "country": "Danmark",
    "region": "Sønderjylland",
    "keywords": [
      "danmark",
      "denmark",
      "nfj",
      "als fkk",
      "skodsbøl",
      "sønderjylland",
      "jylland",
      "camping"
    ],
    "description": "Moderne og velrenommeret naturistcampingplads på Sundeved tæt ved Als og Flensborg Fjord. Pladsen byder på opvarmet swimmingpool, sauna, petanque og udendørsfaciliteter.",
    "lat": 54.935,
    "lng": 9.688,
    "address": "Skodsbølmarkvej 23, 6310 Broager, Danmark",
    "url": "https://www.alsfkk.dk/"
  },
  {
    "id": "loc-dk-sandager",
    "name": "Sandager Næs FKK sektion (Vestfyn)",
    "type": "campsite",
    "country": "Danmark",
    "region": "Fyn",
    "keywords": [
      "danmark",
      "denmark",
      "sandager næs",
      "vestfyn",
      "fyn",
      "camping"
    ],
    "description": "Populær campingplads ud til Lillebælt med en afskærmet naturistafdeling, swimmingpool, børnefaciliteter og kystadgang.",
    "lat": 55.305,
    "lng": 9.875,
    "address": "Sandager Næsvej 35, 5610 Assens, Fyn, Danmark"
  },
  {
    "id": "loc-dk-bellevue",
    "name": "Bellevue Strand (Klampenborg / København)",
    "type": "beach",
    "country": "Danmark",
    "region": "Hovedstaden",
    "keywords": [
      "danmark",
      "denmark",
      "bellevue",
      "klampenborg",
      "københavn",
      "strand"
    ],
    "description": "Den nordlige del af den ikoniske Arne Jacobsen-designede strand er en af Danmarks ældste og mest kendte storbynaturiststrande.",
    "lat": 55.778,
    "lng": 12.593,
    "address": "Strandvejen 340, 2930 Klampenborg, Danmark"
  },
  {
    "id": "loc-dk-tisvilde",
    "name": "Tisvildeleje & Tisvilde Hegn Strand (Nordsjælland)",
    "type": "beach",
    "country": "Danmark",
    "region": "Nordsjælland",
    "keywords": [
      "danmark",
      "denmark",
      "tisvilde",
      "tisvildeleje",
      "tisvilde hegn",
      "sjælland",
      "strand"
    ],
    "description": "Mellem Tisvildeleje og Liseleje ligger en bred hvid sandstrand i læ for Tisvilde Hegns store fyrreskove. Naturister benytter traditionelt stranden vest for hovednedgangen.",
    "lat": 56.061,
    "lng": 12.065,
    "address": "Kystvej, 3220 Tisvildeleje, Danmark"
  },
  {
    "id": "loc-dk-boto",
    "name": "Bøtø Strand (Marielyst / Falster)",
    "type": "beach",
    "country": "Danmark",
    "region": "Falster",
    "keywords": [
      "danmark",
      "denmark",
      "bøtø",
      "boto",
      "marielyst",
      "falster",
      "strand"
    ],
    "description": "Kåret blandt Danmarks fineste sandstrande. Den fredede sydlige del ved Bøtø Nor og Bøtø Skov er et anerkendt naturistparadis.",
    "lat": 54.672,
    "lng": 11.958,
    "address": "Bøtø Ringvej, 4873 Væggerløse, Falster, Danmark"
  },
  {
    "id": "loc-dk-dueodde",
    "name": "Dueodde Strand Naturistsektion (Bornholm)",
    "type": "beach",
    "country": "Danmark",
    "region": "Bornholm",
    "keywords": [
      "danmark",
      "denmark",
      "dueodde",
      "bornholm",
      "østersøen",
      "strand"
    ],
    "description": "Verdensberømt for sit ultrafine hvide sand, der blev brugt i timeglas. Strækningen mod Jomfrugård vest for fyret er traditionel naturiststrand.",
    "lat": 54.995,
    "lng": 15.075,
    "address": "Dueoddevej, 3730 Nexø, Bornholm, Danmark"
  },
  {
    "id": "loc-dk-moesgaard",
    "name": "Moesgård Strand (Aarhus)",
    "type": "beach",
    "country": "Danmark",
    "region": "Østjylland",
    "keywords": [
      "danmark",
      "denmark",
      "moesgård",
      "moesgaard",
      "aarhus",
      "jylland",
      "strand"
    ],
    "description": "Traditionsrig og meget populær naturiststrand i skovkanten syd for Aarhus mod Giber Å, omgivet af smukke bøgeskove.",
    "lat": 56.091,
    "lng": 10.252,
    "address": "Strandskovvej, 8270 Højbjerg, Aarhus, Danmark"
  },
  {
    "id": "loc-dk-skagen",
    "name": "Grenen Nordstrand (Skagen)",
    "type": "beach",
    "country": "Danmark",
    "region": "Nordjylland",
    "keywords": [
      "danmark",
      "denmark",
      "skagen",
      "grenen",
      "jylland",
      "strand"
    ],
    "description": "Den barske og storslåede kyststrækning vest for Grenen mod Gl. Skagen, hvor naturister igennem årtier har nydt Kattegat og Skagerraks møde i fred.",
    "lat": 57.746,
    "lng": 10.632,
    "address": "Nordstrandvej, 9990 Skagen, Danmark"
  },
  {
    "id": "loc-dk-kandestederne",
    "name": "Kandestederne Strand (Skagen Vestkyst)",
    "type": "beach",
    "country": "Danmark",
    "region": "Nordjylland",
    "keywords": [
      "danmark",
      "denmark",
      "kandestederne",
      "skagen",
      "jylland",
      "vesterhavet",
      "strand"
    ],
    "description": "Kæmpe bred vesterhavsstrand neden for Råbjerg Mile med høje klitter og vild Atlanterhavsstemning.",
    "lat": 57.658,
    "lng": 10.375,
    "address": "Kandevejen, 9990 Skagen, Danmark"
  },
  {
    "id": "loc-dk-romo",
    "name": "Sønderstrand (Rømø / Vadehavet)",
    "type": "beach",
    "country": "Danmark",
    "region": "Sønderjylland",
    "keywords": [
      "danmark",
      "denmark",
      "rømø",
      "romo",
      "sønderstrand",
      "vesterhavet",
      "strand"
    ],
    "description": "Europas bredeste sandstrand mod Nordsøen. Den sydligste del er en udstrakt og fredelig naturiststrand med kilometervis af plads.",
    "lat": 55.095,
    "lng": 8.515,
    "address": "Sønderstrand, 6792 Rømø, Danmark"
  },
  {
    "id": "loc-dk-vejers",
    "name": "Vejers Strand (Sydvestjylland)",
    "type": "beach",
    "country": "Danmark",
    "region": "Sydvestjylland",
    "keywords": [
      "danmark",
      "denmark",
      "vejers",
      "blåvand",
      "jylland",
      "vesterhavet",
      "strand"
    ],
    "description": "Bred hvid sandstrand. Den bilfrie sydlige sektion mod Kallesmærsk Hede er et anerkendt fristed for naturister.",
    "lat": 55.615,
    "lng": 8.115,
    "address": "Vejers Havvej, 6853 Vejers Strand, Danmark"
  },
  {
    "id": "loc-dk-blokhus",
    "name": "Blokhus & Rødhus Klitstrand",
    "type": "beach",
    "country": "Danmark",
    "region": "Nordjylland",
    "keywords": [
      "danmark",
      "denmark",
      "blokhus",
      "rødhus",
      "nordjylland",
      "jylland",
      "vesterhavet",
      "strand"
    ],
    "description": "Bred vesterhavsstrand med fredelige klitrækker. Rødhus-afsnittet mod syd er traditionsrigt populært til uforstyrret nøgenbadning.",
    "lat": 57.218,
    "lng": 9.535,
    "address": "Rødhus Strand, 9490 Pandrup, Danmark"
  },
  {
    "id": "loc-dk-hvidesande",
    "name": "Hvide Sande & Årgab Strand",
    "type": "beach",
    "country": "Danmark",
    "region": "Vestjylland",
    "keywords": [
      "danmark",
      "denmark",
      "hvide sande",
      "årgab",
      "holmsland",
      "vestjylland",
      "vesterhavet",
      "strand"
    ],
    "description": "Storslåede klitter mellem Vesterhavet og Ringkøbing Fjord med masser af uforstyrret plads til naturister.",
    "lat": 55.975,
    "lng": 8.121,
    "address": "Sønder Klitvej, 6960 Hvide Sande, Danmark"
  },
  {
    "id": "loc-dk-vosnaes",
    "name": "Vosnæs Pynt / Skødstrup (Kalø Vig)",
    "type": "beach",
    "country": "Danmark",
    "region": "Østjylland",
    "keywords": [
      "danmark",
      "denmark",
      "vosnæs",
      "skødstrup",
      "kalø vig",
      "aarhus",
      "jylland",
      "strand"
    ],
    "description": "Skjult naturperle på spidsen af Vosnæs Pynt i Kalø Vig, omgivet af herregårdsskov med ro og udsigt over bugten.",
    "lat": 56.265,
    "lng": 10.378,
    "address": "Vosnæsvej, 8541 Skødstrup, Danmark"
  },
  {
    "id": "loc-it-pizzogreco",
    "name": "Camping Pizzo Greco (Calabrien)",
    "type": "resort",
    "country": "Italien",
    "region": "Calabrien",
    "keywords": [
      "italien",
      "italy",
      "pizzo greco",
      "calabria",
      "resort",
      "camping"
    ],
    "description": "Italiens førende og ældste officielle naturistferiested beliggende direkte til Det Joniske Hav med privat strand, bungalows og pools.",
    "lat": 38.948,
    "lng": 17.025,
    "address": "Località Pizzo Greco, 88841 Isola di Capo Rizzuto, Calabrien, Italien",
    "url": "https://www.pizzogreco.com/"
  },
  {
    "id": "loc-it-mortelle",
    "name": "Spiaggia delle Mortelle (Marina di Grosseto, Toscana)",
    "type": "beach",
    "country": "Italien",
    "region": "Toscana",
    "keywords": [
      "italien",
      "italy",
      "mortelle",
      "grosseto",
      "toscana",
      "strand"
    ],
    "description": "Bred vild sandstrand mellem fyrreskove og Middelhavet i Maremma, anerkendt som en af Toscanas bedste naturiststrande.",
    "lat": 42.705,
    "lng": 11.035,
    "address": "58100 Marina di Grosseto, Toscana, Italien"
  },
  {
    "id": "loc-it-baratti",
    "name": "Spiaggia di Baratti & Nido dell'Aquila (San Vincenzo, Toscana)",
    "type": "beach",
    "country": "Italien",
    "region": "Toscana",
    "keywords": [
      "italien",
      "italy",
      "nido dell'aquila",
      "san vincenzo",
      "baratti",
      "toscana",
      "strand"
    ],
    "description": "Italiens mest traditionsrige naturistkyst i Toscana, beliggende i naturparken Rimigliano med gyldne klitter og pinjeskove.",
    "lat": 43.045,
    "lng": 10.535,
    "address": "Parco di Rimigliano, 57027 San Vincenzo, Toscana, Italien"
  },
  {
    "id": "loc-it-portoferro",
    "name": "Spiaggia di Porto Ferro (Sardinien)",
    "type": "beach",
    "country": "Italien",
    "region": "Sardinien",
    "keywords": [
      "italien",
      "italy",
      "porto ferro",
      "sardinien",
      "sardegna",
      "strand"
    ],
    "description": "Sardiniens første officielle naturiststrand med orangerødt sand, dramatiske klitter og tre historiske spanske vagttårne.",
    "lat": 40.685,
    "lng": 8.205,
    "address": "Porto Ferro, 07041 Sassari, Sardinien, Italien"
  },
  {
    "id": "loc-it-bassona",
    "name": "Spiaggia della Bassona / Lido di Dante (Ravenna)",
    "type": "beach",
    "country": "Italien",
    "region": "Emilia-Romagna",
    "keywords": [
      "italien",
      "italy",
      "lido di dante",
      "bassona",
      "ravenna",
      "strand"
    ],
    "description": "Italiens mest berømte og officielt anerkendte naturiststrand nær Ravenna ved et fredet fyrreskovsreservat.",
    "lat": 44.385,
    "lng": 12.315,
    "address": "Viale Matelda, 48124 Lido di Dante, Ravenna, Italien"
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
      "capocotta",
      "rom",
      "rome",
      "ostia",
      "strand"
    ],
    "description": "Roms berømte officielle naturiststrand beliggende i naturreservatet Litorale Romano med beskyttede klitter og livlige strandbistroer.",
    "lat": 41.678,
    "lng": 12.368,
    "address": "Via Litoranea Km 8, 00122 Ostia, Rom, Italien"
  },
  {
    "id": "loc-it-camerota",
    "name": "Spiaggia del Troncone (Marina di Camerota, Cilento)",
    "type": "beach",
    "country": "Italien",
    "region": "Campania / Cilento",
    "keywords": [
      "italien",
      "italy",
      "troncone",
      "camerota",
      "cilento",
      "campania",
      "strand"
    ],
    "description": "Officiel naturiststrand i Cilento Nationalpark i Campania omgivet af tårnhøje klippeskrænter og turkist vand.",
    "lat": 40.001,
    "lng": 15.395,
    "address": "84059 Marina di Camerota, Salerno, Italien"
  },
  {
    "id": "loc-de-sylt",
    "name": "Buhne 16 (Sylt, Kampen)",
    "type": "beach",
    "country": "Tyskland",
    "region": "Slesvig-Holsten",
    "keywords": [
      "tyskland",
      "germany",
      "sylt",
      "buhne 16",
      "fkk",
      "strand"
    ],
    "description": "Tysklands mest legendariske FKK-strand, berømt siden 1960'erne. Beliggende i de vilde klitter på øen Sylt med en ikonisk strandbistro.",
    "lat": 54.965,
    "lng": 8.338,
    "address": "Buhne 16, 25999 Kampen, Sylt, Tyskland"
  },
  {
    "id": "loc-de-prerow",
    "name": "Prerow Nordstrand (Østersøen, Darss)",
    "type": "beach",
    "country": "Tyskland",
    "region": "Mecklenburg-Vorpommern",
    "keywords": [
      "tyskland",
      "germany",
      "prerow",
      "darss",
      "ostsee",
      "østersøen",
      "fkk",
      "strand"
    ],
    "description": "En af Europas fineste hvide sandstrande ved Østersøen med op til 100 meters bredde og en kæmpe, populær FKK-sektion.",
    "lat": 54.455,
    "lng": 12.57,
    "address": "Bernsteinweg, 18375 Prerow, Østersøen, Tyskland"
  },
  {
    "id": "loc-de-schaabe",
    "name": "FKK-Strand Schaabe (Rügen / Østersøen)",
    "type": "beach",
    "country": "Tyskland",
    "region": "Mecklenburg-Vorpommern / Rügen",
    "keywords": [
      "tyskland",
      "germany",
      "schaabe",
      "rügen",
      "rugen",
      "ostsee",
      "østersøen",
      "fkk",
      "strand"
    ],
    "description": "12 km lang uberørt sandstrand mellem Juliusruh og Glowe på Rügen. En af Tysklands mest storslåede kyststrækninger med udstrakte FKK-sektioner i klitterne.",
    "lat": 54.582,
    "lng": 13.385,
    "address": "Schaabe, 18556 Glowe, Rügen, Tyskland"
  },
  {
    "id": "loc-de-usedom",
    "name": "FKK-Strand Ahlbeck & Bansin (Usedom / Østersøen)",
    "type": "beach",
    "country": "Tyskland",
    "region": "Mecklenburg-Vorpommern / Usedom",
    "keywords": [
      "tyskland",
      "germany",
      "usedom",
      "ahlbeck",
      "bansin",
      "ostsee",
      "fkk",
      "strand"
    ],
    "description": "Bred, finkornet sandstrand ved kejserbadene på Usedom med historiske kursteder og store, velbesøgte officielle FKK-afsnit.",
    "lat": 53.942,
    "lng": 14.195,
    "address": "Strandpromenade, 17419 Ahlbeck, Usedom, Tyskland"
  },
  {
    "id": "loc-de-wannsee",
    "name": "Strandbad Wannsee FKK (Berlin)",
    "type": "beach",
    "country": "Tyskland",
    "region": "Berlin",
    "keywords": [
      "tyskland",
      "germany",
      "berlin",
      "wannsee",
      "fkk",
      "strand"
    ],
    "description": "Europas største indlandsstrandbad ved en sø. Den traditionsrige FKK-sektion ved søens bred har tiltrukket berlinere i over 100 år.",
    "lat": 52.438,
    "lng": 13.178,
    "address": "Wannseebadweg 25, 14129 Berlin, Tyskland"
  },
  {
    "id": "loc-de-mueggelsee",
    "name": "Müggelsee FKK-Strand (Berlin)",
    "type": "beach",
    "country": "Tyskland",
    "region": "Berlin",
    "keywords": [
      "tyskland",
      "germany",
      "berlin",
      "müggelsee",
      "mueggelsee",
      "fkk",
      "strand"
    ],
    "description": "Berlins største sø med en elsket og livlig officiel FKK-strand i fyrreskoven ved Rahnsdorf.",
    "lat": 52.445,
    "lng": 13.675,
    "address": "Fürstenwalder Damm 838, 12589 Berlin, Tyskland"
  },
  {
    "id": "loc-de-englischergarten",
    "name": "Englischer Garten & Eisbach FKK (München)",
    "type": "other",
    "country": "Tyskland",
    "region": "Bayern / München",
    "keywords": [
      "tyskland",
      "germany",
      "münchen",
      "munich",
      "bayern",
      "englischer garten",
      "fkk"
    ],
    "description": "Verdensberømt naturistområde i hjertet af München. På Schönfeldwiese og langs Eisbach-floden har nøgensolbadning været en stolt lokal tradition siden 1960'erne.",
    "lat": 48.151,
    "lng": 11.589,
    "address": "Schönfeldwiese, Englischer Garten, 80538 München, Tyskland"
  },
  {
    "id": "loc-de-fuehlinger",
    "name": "FKK-Strand Fühlinger See (Köln)",
    "type": "beach",
    "country": "Tyskland",
    "region": "Nordrhein-Westfalen / Köln",
    "keywords": [
      "tyskland",
      "germany",
      "köln",
      "koeln",
      "fühlinger see",
      "fkk",
      "sø"
    ],
    "description": "Stort rekreativt søkompleks i Köln med en officiel, velbesøgt FKK-ø og strand omgivet af grønne plæner og træer.",
    "lat": 50.985,
    "lng": 6.925,
    "address": "Oranjehofstraße, 50769 Köln, Tyskland"
  },
  {
    "id": "loc-de-warnemuende",
    "name": "FKK-Strand Warnemünde (Rostock / Østersøen)",
    "type": "beach",
    "country": "Tyskland",
    "region": "Mecklenburg-Vorpommern",
    "keywords": [
      "tyskland",
      "germany",
      "warnemünde",
      "warnemuende",
      "rostock",
      "ostsee",
      "fkk",
      "strand"
    ],
    "description": "Bredeste sandstrand ved den tyske Østersøkyst (op til 100 m bred). Store officielle FKK-sektioner vest for fyrtårnet mod Diedrichshagen.",
    "lat": 54.178,
    "lng": 12.062,
    "address": "Strandweg, 18119 Warnemünde, Tyskland"
  },
  {
    "id": "loc-de-zingst",
    "name": "FKK-Strand Zingst (Fischland-Darss-Zingst)",
    "type": "beach",
    "country": "Tyskland",
    "region": "Mecklenburg-Vorpommern",
    "keywords": [
      "tyskland",
      "germany",
      "zingst",
      "darss",
      "ostsee",
      "fkk",
      "strand"
    ],
    "description": "Klassisk hvid Østersøstrand med klitter og kystskove i Nationalpark Vorpommersche Boddenlandschaft med populære FKK-overgange.",
    "lat": 54.438,
    "lng": 12.695,
    "address": "Seestraße, 18374 Zingst, Tyskland"
  },
  {
    "id": "loc-de-amrum",
    "name": "Kniepsand FKK-Strand (Øen Amrum / Nordsøen)",
    "type": "beach",
    "country": "Tyskland",
    "region": "Slesvig-Holsten / Vadehavet",
    "keywords": [
      "tyskland",
      "germany",
      "amrum",
      "kniepsand",
      "nordsee",
      "nordsøen",
      "fkk",
      "strand"
    ],
    "description": "En 10 kvadratkilometer kæmpestor vandrende sandbanke ud mod Nordsøen. Fuldstændig frihed og kilometervis af plads til naturister.",
    "lat": 54.648,
    "lng": 8.325,
    "address": "Kniepsand, 25946 Norddorf auf Amrum, Tyskland"
  },
  {
    "id": "loc-de-rosenfelder",
    "name": "FKK-Camping Rosenfelder Strand (Grube / Østersøen)",
    "type": "campsite",
    "country": "Tyskland",
    "region": "Slesvig-Holsten",
    "keywords": [
      "tyskland",
      "germany",
      "rosenfelder strand",
      "ostsee",
      "camping",
      "fkk"
    ],
    "description": "En af Tysklands førende 5-stjernede naturistcampingpladser direkte ved Østersøen med privat naturiststrand, sauna, restaurant og moderne faciliteter.",
    "lat": 54.262,
    "lng": 11.085,
    "address": "Rosenfelder Strand 1, 23749 Grube, Tyskland",
    "url": "https://www.rosenfelder-strand.de/"
  },
  {
    "id": "loc-de-timmendorf",
    "name": "FKK-Strand Timmendorfer Strand / Niendorf",
    "type": "beach",
    "country": "Tyskland",
    "region": "Slesvig-Holsten / Lübeck Bugt",
    "keywords": [
      "tyskland",
      "germany",
      "timmendorfer strand",
      "niendorf",
      "ostsee",
      "fkk",
      "strand"
    ],
    "description": "Populært og livligt FKK-afsnit med strandkurve i den berømte badeby Timmendorfer Strand ved Østersøen.",
    "lat": 53.998,
    "lng": 10.812,
    "address": "Strandpromenade, 23669 Timmendorfer Strand, Tyskland"
  },
  {
    "id": "loc-de-stpeter",
    "name": "FKK-Strand St. Peter-Ording (Nordsøen)",
    "type": "beach",
    "country": "Tyskland",
    "region": "Slesvig-Holsten",
    "keywords": [
      "tyskland",
      "germany",
      "st peter ording",
      "spo",
      "nordsee",
      "fkk",
      "strand"
    ],
    "description": "12 km lang og op til 2 km bred sandstrand med de berømte pælehuse (Pfahlbauten). Den sydlige sektion i Böhl har en stor FKK-zone.",
    "lat": 54.312,
    "lng": 8.585,
    "address": "Badestelle Ording / Böhl, 25826 St. Peter-Ording, Tyskland"
  },
  {
    "id": "loc-at-sabotnik",
    "name": "FKK Camping Sabotnik (Keutschacher See, Kärnten)",
    "type": "campsite",
    "country": "Østrig",
    "region": "Kärnten",
    "keywords": [
      "østrig",
      "austria",
      "sabotnik",
      "keutschach",
      "kärnten",
      "camping",
      "fkk"
    ],
    "description": "Østrigs mest traditionsrige naturistcampingplads beliggende direkte ved den varme Keutschacher See med privat søbadestrand, sauna og bjergluft.",
    "lat": 46.592,
    "lng": 14.168,
    "address": "Dobeinitz 31, 9074 Keutschach am See, Kärnten, Østrig",
    "url": "https://www.fkk-camping-sabotnik.at/"
  },
  {
    "id": "loc-at-ranna",
    "name": "FKK Camping Ranna (Mühlviertel / Donau)",
    "type": "campsite",
    "country": "Østrig",
    "region": "Oberösterreich",
    "keywords": [
      "østrig",
      "austria",
      "ranna",
      "mühlviertel",
      "camping",
      "fkk"
    ],
    "description": "Rolig naturistcampingplads ved Ranna-søen i naturskønne Oberösterreich med opvarmet pool, sauna og vandrestier i skovene.",
    "lat": 48.498,
    "lng": 13.785,
    "address": "Kramesau 8, 4085 Neustift im Mühlkreis, Østrig"
  },
  {
    "id": "loc-at-donauinsel",
    "name": "Donauinsel FKK Lobau (Wien)",
    "type": "beach",
    "country": "Østrig",
    "region": "Wien",
    "keywords": [
      "østrig",
      "austria",
      "wien",
      "vienna",
      "donauinsel",
      "lobau",
      "fkk",
      "strand"
    ],
    "description": "Wiens kæmpemæssige officielle FKK-område på Donauøen og i Lobau-flodskoven, hvor titusindvis af wienere bader i Donaufloden om sommeren.",
    "lat": 48.168,
    "lng": 16.485,
    "address": "Donauinsel Kilometer 7-10, 1220 Wien, Østrig"
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
    "id": "loc-dubai-warning",
    "name": "Dubai & De Forenede Arabiske Emirater",
    "type": "other",
    "country": "Forenede Arabiske Emirater",
    "region": "Mellemøsten",
    "keywords": [
      "dubai",
      "uae",
      "emiraterne",
      "abu dhabi",
      "mellemøsten"
    ],
    "description": "Naturisme, topløs solbadning og offentlig nøgenhed er strengt forbudt i hele UAE og straffes hårdt med fængsel, store bøder og udvisning i henhold til straffeloven.",
    "lat": 25.2048,
    "lng": 55.2708,
    "address": "Dubai, De Forenede Arabiske Emirater",
    "warning": "STRENGT FORBUDT: Offentlig nøgenhed og naturisme er ulovligt i UAE og medfører fængselsstraf eller udvisning. Der findes ingen lovlige naturiststeder i landet."
  },
  {
    "id": "loc-us-haulover",
    "name": "Haulover Beach (Miami, Florida)",
    "type": "beach",
    "country": "USA",
    "region": "Florida / Miami",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "florida",
      "miami",
      "haulover",
      "strand",
      "beach",
      "atlanterhavet"
    ],
    "description": "USA's mest berømte og mest besøgte officielle naturiststrand med over 1 million årlige gæster. Kridhvidt sand, varmt Atlanterhav, udlejning af liggestole, madboder og livreddere.",
    "lat": 25.908,
    "lng": -80.121,
    "address": "10800 Collins Ave, Miami Beach, FL 33154, USA"
  },
  {
    "id": "loc-us-playalinda",
    "name": "Playalinda Beach - Boardwalk 13 (Canaveral National Seashore, Florida)",
    "type": "beach",
    "country": "USA",
    "region": "Florida / Titusville",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "florida",
      "playalinda",
      "canaveral",
      "titusville",
      "space coast",
      "strand",
      "beach"
    ],
    "description": "Spektakulær uberørt naturstrand på Canaveral National Seashore. Området omkring Boardwalk 13 har i årtier været en verdenskendt tøjvalgs-strand med udsigt til NASA's affyringsramper ved Kennedy Space Center.",
    "lat": 28.665,
    "lng": -80.627,
    "address": "Boardwalk 13, Canaveral National Seashore, Titusville, FL 32796, USA"
  },
  {
    "id": "loc-us-blindcreek",
    "name": "Blind Creek Beach (Fort Pierce, Florida)",
    "type": "beach",
    "country": "USA",
    "region": "Florida / Fort Pierce",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "florida",
      "blind creek",
      "fort pierce",
      "hutchinson island",
      "st lucie",
      "strand",
      "beach"
    ],
    "description": "Officielt udpeget tøjvalgs-strand på Hutchinson Island ved Atlanterhavet. Brede hvide sandstrande omgivet af vilde klitter og mangroveskove uden store hoteller i sigte.",
    "lat": 27.355,
    "lng": -80.244,
    "address": "5460 S Ocean Dr, Fort Pierce, FL 34949, USA"
  },
  {
    "id": "loc-us-apollo",
    "name": "Apollo Beach (New Smyrna Beach, Florida)",
    "type": "beach",
    "country": "USA",
    "region": "Florida / New Smyrna Beach",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "florida",
      "apollo beach",
      "new smyrna beach",
      "canaveral north",
      "strand",
      "beach"
    ],
    "description": "Den nordlige ende af Canaveral National Seashore (Boardwalk 5), kendt for fredelig atmosfære, vilde klitter, delfiner tæt på kysten og en langvarig tradition for naturisme.",
    "lat": 28.932,
    "lng": -80.828,
    "address": "Apollo Beach Parking Lot 5, New Smyrna Beach, FL 32169, USA"
  },
  {
    "id": "loc-us-cypresscove",
    "name": "Cypress Cove Nudist Resort & Spa (Kissimmee / Orlando, Florida)",
    "type": "resort",
    "country": "USA",
    "region": "Florida / Orlando",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "florida",
      "orlando",
      "kissimmee",
      "cypress cove",
      "resort",
      "hotel",
      "spa"
    ],
    "description": "Et af USA's førende 4-stjernede AANR-akkrediterede familie-naturistresorts. Spænder over 300 hektar med to store pools, sø med sandstrand, vandcykler, tennis, restaurant, spa og 84 hotelværelser samt villaer.",
    "lat": 28.243,
    "lng": -81.428,
    "address": "4425 Pleasant Hill Rd, Kissimmee, FL 34746, USA",
    "url": "https://www.cypresscoveresort.com/"
  },
  {
    "id": "loc-us-sunsport",
    "name": "Sunsport Gardens Family Naturist Resort (Loxahatchee, Florida)",
    "type": "resort",
    "country": "USA",
    "region": "Florida / West Palm Beach",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "florida",
      "sunsport",
      "loxahatchee",
      "west palm beach",
      "resort",
      "camping"
    ],
    "description": "Historisk 40-hektar naturistisk paradis nær West Palm Beach. Frodig subtropisk jungle, opvarmet pool, sauna, volleyball og fredelig naturistisk livsstil.",
    "lat": 26.782,
    "lng": -80.329,
    "address": "14125 North Rd, Loxahatchee, FL 33470, USA",
    "url": "https://www.sunsportgardens.com/"
  },
  {
    "id": "loc-us-caliente",
    "name": "Caliente Luxury Clothing-Optional Resort (Tampa Bay, Florida)",
    "type": "resort",
    "country": "USA",
    "region": "Florida / Tampa Bay",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "florida",
      "caliente",
      "tampa",
      "land o lakes",
      "resort",
      "luksus"
    ],
    "description": "Eksklusivt resort i caribisk stil med tropiske lagunepools, vandfald, swim-up bar, natklub og luksuslejligheder i Pasco County.",
    "lat": 28.212,
    "lng": -82.463,
    "address": "21240 Gran Via Blvd, Land O' Lakes, FL 34637, USA",
    "url": "https://www.calienteresorts.com/"
  },
  {
    "id": "loc-us-paradiselakes",
    "name": "Paradise Lakes Nudist Resort (Lutz / Tampa, Florida)",
    "type": "resort",
    "country": "USA",
    "region": "Florida / Tampa",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "florida",
      "paradise lakes",
      "tampa",
      "lutz",
      "resort"
    ],
    "description": "Legendarisk 72-hektar tøjvalgs-resortby med adskillige pools, boblebade, tennis, tiki-bar og restauranter omgivet af søer og palmer.",
    "lat": 28.188,
    "lng": -82.462,
    "address": "2001 Paradise Lakes Blvd, Lutz, FL 33558, USA",
    "url": "https://www.paradiselakes.com/"
  },
  {
    "id": "loc-us-lakecomo",
    "name": "Lake Como Family Nudist Resort (Lutz / Pasco County, Florida)",
    "type": "resort",
    "country": "USA",
    "region": "Florida / Pasco County",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "florida",
      "lake como",
      "lutz",
      "pasco",
      "camping",
      "resort"
    ],
    "description": "Grundlagt i 1941 og dermed et af Nordamerikas ældste og mest traditionsrige familie-naturistresorts. Egen ferskvandssø, opvarmet pool, minigolf og hytter.",
    "lat": 28.204,
    "lng": -82.441,
    "address": "20500 Como Dr, Lutz, FL 33558, USA",
    "url": "https://www.lakecomonaturally.com/"
  },
  {
    "id": "loc-us-edenrv",
    "name": "Eden RV Resort (Hudson, Florida)",
    "type": "campsite",
    "country": "USA",
    "region": "Florida / Hudson",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "florida",
      "eden rv",
      "hudson",
      "pasco",
      "camping",
      "resort"
    ],
    "description": "Hyggeligt og afslappet tøjvalgs-RV-resort på Floridas naturkyst med swimmingpool, spabad, klubhus og masser af sol.",
    "lat": 28.361,
    "lng": -82.632,
    "address": "13300 Hudson Ave, Hudson, FL 34669, USA",
    "url": "https://www.edenrvresort.com/"
  },
  {
    "id": "loc-us-blacks",
    "name": "Black's Beach (San Diego, Californien)",
    "type": "beach",
    "country": "USA",
    "region": "Californien / San Diego",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "californien",
      "california",
      "san diego",
      "la jolla",
      "blacks beach",
      "torrey pines",
      "strand"
    ],
    "description": "Legendarisk naturiststrand under de 100 meter høje Torrey Pines-sandstensklipper i La Jolla. Kendt for fantastiske stillehavsbølger, surfkultur og stor frihed.",
    "lat": 32.889,
    "lng": -117.252,
    "address": "Torrey Pines, La Jolla, San Diego, CA 92037, USA"
  },
  {
    "id": "loc-us-bakerbeach",
    "name": "Baker Beach (San Francisco, Californien)",
    "type": "beach",
    "country": "USA",
    "region": "Californien / San Francisco",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "californien",
      "california",
      "san francisco",
      "baker beach",
      "golden gate",
      "presidio",
      "strand"
    ],
    "description": "Den nordlige ende af Baker Beach (nær Presidio-skrænterne) er verdensberømt for tøjvalg med en ikonisk panoramaudsigt direkte til Golden Gate Bridge og Marin Headlands.",
    "lat": 37.794,
    "lng": -122.483,
    "address": "1504 Pershing Dr, San Francisco, CA 94129, USA"
  },
  {
    "id": "loc-us-marshallsbeach",
    "name": "Marshall's Beach (San Francisco, Californien)",
    "type": "beach",
    "country": "USA",
    "region": "Californien / San Francisco",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "californien",
      "california",
      "san francisco",
      "marshalls beach",
      "golden gate",
      "strand"
    ],
    "description": "Afkrogene direkte under Golden Gate Bridges sydlige pylon. Nås via Batteries to Bluffs Trail. Klipper, vilde bølger og et fantastisk intimt naturistmiljø.",
    "lat": 37.801,
    "lng": -122.479,
    "address": "Batteries to Bluffs Trail, San Francisco, CA 94129, USA"
  },
  {
    "id": "loc-us-sangregorio",
    "name": "San Gregorio Private Beach (Half Moon Bay, Californien)",
    "type": "beach",
    "country": "USA",
    "region": "Californien / San Mateo Coast",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "californien",
      "california",
      "san gregorio",
      "half moon bay",
      "san mateo",
      "strand"
    ],
    "description": "USA's ældste private tøjvalgs-strand (drevet uafbrudt siden 1960'erne). Beliggende i en dramatisk sandstenscanyon med eget historisk klubhus, picnic-borde og direkte adgang til Stillehavet.",
    "lat": 37.322,
    "lng": -122.401,
    "address": "Highway 1 at San Gregorio Rd, San Gregorio, CA 94074, USA",
    "url": "https://www.sangregoriobeach.com/"
  },
  {
    "id": "loc-us-piratescove",
    "name": "Pirate's Cove Beach (Marin County, Californien)",
    "type": "beach",
    "country": "USA",
    "region": "Californien / Marin County",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "californien",
      "california",
      "marin county",
      "muir beach",
      "pirates cove",
      "strand"
    ],
    "description": "Gemt perle langs Coastal Trail mellem Muir Beach og Tennessee Cove. En dramatisk sten- og sandbugt beskyttet af høje klipper med en lang tøjvalgs-tradition.",
    "lat": 37.852,
    "lng": -122.569,
    "address": "Coastal Trail, Muir Beach, CA 94941, USA"
  },
  {
    "id": "loc-us-redrock",
    "name": "Red Rock Beach (Stinson Beach / Mt Tamalpais, Californien)",
    "type": "beach",
    "country": "USA",
    "region": "Californien / Stinson Beach",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "californien",
      "california",
      "red rock",
      "stinson beach",
      "marin",
      "hot springs",
      "strand"
    ],
    "description": "Beliggende lige syd for Stinson Beach under Highway 1. Røde klippesider, stillehavsbrænding og naturlige varme svovlkilder i sandet ved lavvande.",
    "lat": 37.886,
    "lng": -122.628,
    "address": "Hwy 1 South of Stinson Beach, CA 94970, USA"
  },
  {
    "id": "loc-us-moremesa",
    "name": "More Mesa Beach (Santa Barbara, Californien)",
    "type": "beach",
    "country": "USA",
    "region": "Californien / Santa Barbara",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "californien",
      "california",
      "santa barbara",
      "more mesa",
      "goleta",
      "strand"
    ],
    "description": "Idyllisk naturiststrand under de gyldne sandstensklipper ved More Mesa-naturreservatet i Santa Barbara. Smukt roligt stillehavsvand og uforstyrret atmosfære.",
    "lat": 34.417,
    "lng": -119.789,
    "address": "Mockingbird Ln / More Mesa, Santa Barbara, CA 93110, USA"
  },
  {
    "id": "loc-us-batesbeach",
    "name": "Bates Beach (Carpinteria, Californien)",
    "type": "beach",
    "country": "USA",
    "region": "Californien / Carpinteria",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "californien",
      "california",
      "carpinteria",
      "bates beach",
      "rincon",
      "ventura",
      "strand"
    ],
    "description": "Den sydlige ubebyggede ende af Carpinteria State Beach mod Rincon Point. Kendt for behageligt mikroklima, delfiner og et venligt naturistmiljø.",
    "lat": 34.382,
    "lng": -119.508,
    "address": "Bates Rd & Hwy 101, Carpinteria, CA 93013, USA"
  },
  {
    "id": "loc-us-lagunadelsol",
    "name": "Laguna del Sol Resort (Sacramento / Wilton, Californien)",
    "type": "resort",
    "country": "USA",
    "region": "Californien / Sacramento",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "californien",
      "california",
      "laguna del sol",
      "sacramento",
      "wilton",
      "resort",
      "camping"
    ],
    "description": "Vestkystens største og mest anerkendte tøjvalgs-resort (250 hektar). Omfatter flere opvarmede olympiske pools, boblebade, tennis, 30-hektar sø med kanoer, hytter og restaurant.",
    "lat": 38.384,
    "lng": -121.248,
    "address": "8683 Rawhide Ln, Wilton, CA 95693, USA",
    "url": "https://www.lagunadelsol.com/"
  },
  {
    "id": "loc-us-gleneden",
    "name": "Glen Eden Sun Club (Corona, Californien)",
    "type": "resort",
    "country": "USA",
    "region": "Californien / Inland Empire",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "californien",
      "california",
      "glen eden",
      "corona",
      "riverside",
      "resort"
    ],
    "description": "Smukt beliggende familie-naturistresort i Temescal Valley med udsigt til Santa Ana-bjergene. Pools, tennis, pickleball, RV-pladser og et aktivt foreningsliv.",
    "lat": 33.742,
    "lng": -117.478,
    "address": "25999 Glen Eden Rd, Corona, CA 92883, USA",
    "url": "https://www.gleneden.com/"
  },
  {
    "id": "loc-us-deanzasprings",
    "name": "DeAnza Springs Resort (Jacumba Hot Springs, Californien)",
    "type": "resort",
    "country": "USA",
    "region": "Californien / San Diego County",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "californien",
      "california",
      "deanza springs",
      "jacumba",
      "san diego",
      "ørken",
      "resort"
    ],
    "description": "Kæmpe 500-hektar tøjvalgs-resort i det solrige ørkenhøjland øst for San Diego. Indendørs og udendørs mineralpools, restaurant, motel og RV-park.",
    "lat": 32.628,
    "lng": -116.168,
    "address": "1951 Carrizo Gorge Rd, Jacumba Hot Springs, CA 91934, USA",
    "url": "https://www.deanzasprings.com/"
  },
  {
    "id": "loc-us-deepcreek",
    "name": "Deep Creek Hot Springs (San Bernardino National Forest, Californien)",
    "type": "other",
    "country": "USA",
    "region": "Californien / San Bernardino",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "californien",
      "california",
      "deep creek",
      "hot springs",
      "varme kilder",
      "san bernardino"
    ],
    "description": "Eventyrlige naturlige geotermiske kilder i en dramatisk kløft langs Mojave River. Flere varme klippebassiner midt i uspoleret ørkennatur med tøjvalg.",
    "lat": 34.341,
    "lng": -117.185,
    "address": "Pacific Crest Trail / Deep Creek, Apple Valley, CA 92308, USA"
  },
  {
    "id": "loc-us-harbin",
    "name": "Harbin Hot Springs (Middletown, Californien)",
    "type": "resort",
    "country": "USA",
    "region": "Californien / Lake County",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "californien",
      "california",
      "harbin",
      "hot springs",
      "middletown",
      "napa",
      "retreat",
      "resort"
    ],
    "description": "Fredfyldt non-profit retreat og naturlige mineralkilder nord for Napa Valley. Berømt for stilhed, meditativ atmosfære, kropsterapi og tøjvalg ved kilderne.",
    "lat": 38.788,
    "lng": -122.656,
    "address": "18424 Harbin Springs Rd, Middletown, CA 95461, USA",
    "url": "https://www.harbin.org/"
  },
  {
    "id": "loc-us-wilbur",
    "name": "Wilbur Hot Springs (Williams, Californien)",
    "type": "resort",
    "country": "USA",
    "region": "Californien / Colusa County",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "californien",
      "california",
      "wilbur",
      "hot springs",
      "williams",
      "retreat",
      "resort"
    ],
    "description": "Historisk naturligt kursted og 1.800 hektar naturreservat fra 1800-tallet. Rent helbredende mineralvand i japansk-inspirerede 'flumes' med valgfri påklædning.",
    "lat": 39.038,
    "lng": -122.421,
    "address": "3375 Wilbur Springs Rd, Williams, CA 95987, USA",
    "url": "https://www.wilburhotsprings.com/"
  },
  {
    "id": "loc-us-garrapata",
    "name": "Garrapata Beach North Cove (Big Sur, Californien)",
    "type": "beach",
    "country": "USA",
    "region": "Californien / Big Sur",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "californien",
      "california",
      "garrapata",
      "big sur",
      "monterey",
      "carmel",
      "strand"
    ],
    "description": "De nordlige afskærmede bugter ved Garrapata State Park på den vilde Big Sur-kyst. Omgivet af tårnhøje klippeskrænter, havoddere i tangskovene og vild kystskønhed.",
    "lat": 36.425,
    "lng": -121.918,
    "address": "Highway 1 Mile Marker 63, Carmel-By-The-Sea, CA 93923, USA"
  },
  {
    "id": "loc-us-littlebeach",
    "name": "Little Beach / Puʻu Ōlaʻi (Makena State Park, Maui, Hawaii)",
    "type": "beach",
    "country": "USA",
    "region": "Hawaii / Maui",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "hawaii",
      "maui",
      "makena",
      "little beach",
      "puu olai",
      "strand",
      "stillehavet"
    ],
    "description": "Hawaiis mest legendariske naturiststrand, beliggende bag lavaklippen ved Makena Big Beach på det sydlige Maui. Gyldent sand, turkist vand, snorkling med havskildpadder og afslappet aloha-stemning.",
    "lat": 20.634,
    "lng": -156.449,
    "address": "Makena State Park, Kihei, Maui, HI 96753, USA"
  },
  {
    "id": "loc-us-kehena",
    "name": "Kehena Black Sand Beach (Puna, Big Island, Hawaii)",
    "type": "beach",
    "country": "USA",
    "region": "Hawaii / Big Island",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "hawaii",
      "big island",
      "kehena",
      "puna",
      "black sand",
      "sort sand",
      "strand"
    ],
    "description": "Spektakulær sort vulkansandstrand omkranset af jerntræer og kokospalmer på Big Islands frodige Puna-kyst. Spinner-delfiner svømmer ofte helt ind i bugten.",
    "lat": 19.395,
    "lng": -154.929,
    "address": "Kalapana-Kapoho Beach Rd (Hwy 137), Pāhoa, HI 96778, USA"
  },
  {
    "id": "loc-us-secretbeachkauai",
    "name": "Secret Beach / Kauapea Beach (Kilauea, Kauai, Hawaii)",
    "type": "beach",
    "country": "USA",
    "region": "Hawaii / Kauai",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "hawaii",
      "kauai",
      "secret beach",
      "kauapea",
      "kilauea",
      "strand"
    ],
    "description": "Næsten 1 kilometer lang dramatisk sandstrand under de røde klipper på Kauais nordkyst. Udsigt til Kilauea-fyrtårnet, små vandfald og afsides naturistzoner.",
    "lat": 22.217,
    "lng": -159.412,
    "address": "Secret Beach Rd, Kilauea, Kauai, HI 96754, USA"
  },
  {
    "id": "loc-us-kalani",
    "name": "Kalani Oceanside Retreat (Big Island, Hawaii)",
    "type": "resort",
    "country": "USA",
    "region": "Hawaii / Big Island",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "hawaii",
      "big island",
      "kalani",
      "retreat",
      "resort",
      "spa"
    ],
    "description": "120-hektar eco-retreat ved Stillehavskysten på Big Island. Tilbyder tøjvalg ved sin 25-meter pool, boblebade og sauna samt yoga og wellness.",
    "lat": 19.378,
    "lng": -154.912,
    "address": "12-6860 Kalapana-Kapoho Beach Rd, Pāhoa, HI 96778, USA",
    "url": "https://www.kalani.com/"
  },
  {
    "id": "loc-us-gunnison",
    "name": "Gunnison Beach (Sandy Hook, New Jersey)",
    "type": "beach",
    "country": "USA",
    "region": "New Jersey / New York",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "new jersey",
      "new york",
      "gunnison",
      "sandy hook",
      "strand"
    ],
    "description": "New York-områdets officielle naturiststrand på Sandy Hook-halvøen med livreddere, faciliteter og udsigt til Manhattans skyline i det fjerne på klare dage.",
    "lat": 40.458,
    "lng": -73.998,
    "address": "Sandy Hook, Gateway National Rec Area, Highlands, NJ 07732, USA"
  },
  {
    "id": "loc-us-fireisland",
    "name": "Fire Island Nude Beach (Cherry Grove / Pines, New York)",
    "type": "beach",
    "country": "USA",
    "region": "New York / Long Island",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "new york",
      "fire island",
      "cherry grove",
      "pines",
      "long island",
      "strand"
    ],
    "description": "Den beskyttede nationalpark-strandstrækning mellem Cherry Grove og Fire Island Pines. Verdenskendt ikonisk tøjvalgs-strand med fint hvidt sand og klitter.",
    "lat": 40.662,
    "lng": -73.082,
    "address": "Fire Island National Seashore, Ocean Beach, NY 11770, USA"
  },
  {
    "id": "loc-us-fullcircle",
    "name": "Full Circle Farm Naturist Campground (Adirondacks, New York)",
    "type": "campsite",
    "country": "USA",
    "region": "New York / Adirondacks",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "new york",
      "adirondacks",
      "full circle",
      "caroga lake",
      "camping"
    ],
    "description": "Idyllisk naturistcampingplads i det fredede Adirondack-bjergområde med privat sø, kanoer, sauna, telt- og RV-pladser midt i skoven.",
    "lat": 43.142,
    "lng": -74.478,
    "address": "172 Green Lake Rd, Caroga Lake, NY 12032, USA",
    "url": "https://www.fullcirclefarmny.com/"
  },
  {
    "id": "loc-us-hippie",
    "name": "Hippie Hollow Park (Austin, Texas)",
    "type": "beach",
    "country": "USA",
    "region": "Texas / Austin",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "texas",
      "austin",
      "hippie hollow",
      "lake travis",
      "sø"
    ],
    "description": "Den eneste lovlige tøjvalgs-park i Texas, beliggende på kalkstensklipperne ved Lake Travis. Populært sted for svømning, solbadning og socialt samvær.",
    "lat": 30.418,
    "lng": -97.892,
    "address": "7000 Comanche Trail, Austin, TX 78732, USA"
  },
  {
    "id": "loc-us-starranch",
    "name": "Star Ranch Nudist Resort (McDade / Austin, Texas)",
    "type": "resort",
    "country": "USA",
    "region": "Texas / Austin",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "texas",
      "star ranch",
      "austin",
      "mcdade",
      "resort",
      "camping"
    ],
    "description": "Texas' ældste og mest kendte AANR-resort på 145 naturskønne hektar. Stor opvarmet swimmingpool, spabad, tennisbaner, klubhus og telt-/hytteudlejning.",
    "lat": 30.292,
    "lng": -97.234,
    "address": "244 Star Ranch Dr, McDade, TX 78650, USA",
    "url": "https://www.starranch.net/"
  },
  {
    "id": "loc-us-bluebonnet",
    "name": "Bluebonnet Nudist Park (Decatur / Dallas-Fort Worth, Texas)",
    "type": "campsite",
    "country": "USA",
    "region": "Texas / Dallas-Fort Worth",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "texas",
      "dallas",
      "fort worth",
      "decatur",
      "bluebonnet",
      "resort",
      "camping"
    ],
    "description": "Gæstfri og fredelig familie-naturistpark nord for Fort Worth. Både indendørs opvarmet pool og udendørs pool, vandrestier og hyggelige hytter.",
    "lat": 33.242,
    "lng": -97.585,
    "address": "4110 FM 2264, Decatur, TX 76234, USA",
    "url": "https://www.bluebonnetpark.com/"
  },
  {
    "id": "loc-us-roosterrock",
    "name": "Rooster Rock State Park (Columbia River Gorge, Oregon)",
    "type": "beach",
    "country": "USA",
    "region": "Oregon / Portland",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "oregon",
      "portland",
      "rooster rock",
      "columbia river",
      "strand"
    ],
    "description": "En historisk milepæl: USA's første stats-godkendte tøjvalgs-strand (udpeget i 1970'erne). Beliggende på sandbankerne i den majestætiske Columbia River Gorge.",
    "lat": 45.549,
    "lng": -122.235,
    "address": "Historic Columbia River Hwy, Corbett, OR 97019, USA"
  },
  {
    "id": "loc-us-collinsbeach",
    "name": "Collins Beach (Sauvie Island / Portland, Oregon)",
    "type": "beach",
    "country": "USA",
    "region": "Oregon / Portland",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "oregon",
      "portland",
      "collins beach",
      "sauvie island",
      "strand"
    ],
    "description": "Over 1,5 kilometer bred sandstrand på Sauvie Island langs Columbia River. Meget populær og levende tøjvalgs-strand med udsigt til skovklædte bredder.",
    "lat": 45.728,
    "lng": -122.756,
    "address": "Reeder Rd, Sauvie Island, Portland, OR 97231, USA"
  },
  {
    "id": "loc-us-dennyblaine",
    "name": "Denny Blaine Park (Lake Washington, Seattle, Washington)",
    "type": "beach",
    "country": "USA",
    "region": "Washington / Seattle",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "washington",
      "seattle",
      "denny blaine",
      "lake washington",
      "strand"
    ],
    "description": "Historisk park ved Lake Washington med stenhugget promenade, solbeskinnet græsplæne og en langvarig lokal tradition for tøjvalgs-badning i Seattle.",
    "lat": 47.621,
    "lng": -122.278,
    "address": "200 Lake Washington Blvd E, Seattle, WA 98112, USA"
  },
  {
    "id": "loc-us-secretcove",
    "name": "Secret Cove (Lake Tahoe, Nevada)",
    "type": "beach",
    "country": "USA",
    "region": "Nevada / Lake Tahoe",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "nevada",
      "lake tahoe",
      "secret cove",
      "incline village",
      "strand",
      "sø"
    ],
    "description": "Verdensberømt for sin uovertrufne bjergnatur: krystalklart turkist alpvand, hvide granitter og duftende fyrretræer. En af verdens smukkeste ferskvands-naturiststrande.",
    "lat": 39.148,
    "lng": -119.932,
    "address": "State Route 28, Incline Village, NV 89451, USA"
  },
  {
    "id": "loc-us-chimneybeach",
    "name": "Chimney Beach (Lake Tahoe, Nevada)",
    "type": "beach",
    "country": "USA",
    "region": "Nevada / Lake Tahoe",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "nevada",
      "lake tahoe",
      "chimney beach",
      "carson city",
      "strand"
    ],
    "description": "Nabobugten til Secret Cove med den historiske stenskorsten på kysten. Fantastisk bjergudsigt, store klipper at hoppe fra og fredfyldt tøjvalg.",
    "lat": 39.162,
    "lng": -119.936,
    "address": "Hwy 28 Chimney Beach Trailhead, NV 89451, USA"
  },
  {
    "id": "loc-us-valleyview",
    "name": "Valley View Hot Springs (Orient Land Trust, Colorado)",
    "type": "resort",
    "country": "USA",
    "region": "Colorado / San Luis Valley",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "colorado",
      "valley view",
      "orient land trust",
      "hot springs",
      "varme kilder",
      "resort"
    ],
    "description": "Fredet non-profit naturreservat i Sangre de Cristo-bjergene med naturlige varme klippebassiner og swimmingpool i bjergskoven. Fuld tøjvalgs-frihed.",
    "lat": 38.192,
    "lng": -105.818,
    "address": "64395 County Rd GG, Moffat, CO 81143, USA",
    "url": "https://www.olt.org/"
  },
  {
    "id": "loc-us-orvishotsprings",
    "name": "Orvis Hot Springs (Ridgway, Colorado)",
    "type": "resort",
    "country": "USA",
    "region": "Colorado / San Juan Mountains",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "colorado",
      "orvis",
      "hot springs",
      "ridgway",
      "telluride",
      "san juan",
      "resort"
    ],
    "description": "Naturlige lithium-rige geotermiske kilder omgivet af Colorado-rockies. Syv udendørs bassiner i anlagte haver med udsigt til sneklædte bjergtinder.",
    "lat": 38.172,
    "lng": -107.742,
    "address": "1585 County Rd 3, Ridgway, CO 81432, USA",
    "url": "https://www.orvishotsprings.com/"
  },
  {
    "id": "loc-us-mystichotsprings",
    "name": "Mystic Hot Springs (Monroe, Utah)",
    "type": "other",
    "country": "USA",
    "region": "Utah / Monroe",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "utah",
      "mystic",
      "hot springs",
      "monroe",
      "varme kilder"
    ],
    "description": "Historiske mineralrige varme kilder i Utahs ørken med vintage badekar støbt ind i de røde travertin-terrasser. Enestående oplevelse med stjernehimmel og tøjvalg.",
    "lat": 38.632,
    "lng": -112.118,
    "address": "475 S 100 E, Monroe, UT 84754, USA",
    "url": "https://www.mystichotsprings.com/"
  },
  {
    "id": "loc-us-herringcove",
    "name": "Herring Cove Beach (Provincetown, Cape Cod, Massachusetts)",
    "type": "beach",
    "country": "USA",
    "region": "Massachusetts / Cape Cod",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "massachusetts",
      "cape cod",
      "provincetown",
      "herring cove",
      "strand"
    ],
    "description": "Den ydre ende af Cape Cod National Seashore. Området vest for dæmningen er et af USA's mest ikoniske og velbesøgte tøjvalgs-strækninger med magiske solnedgange over Atlanterhavet.",
    "lat": 42.048,
    "lng": -70.218,
    "address": "Province Lands Rd, Provincetown, MA 02657, USA"
  },
  {
    "id": "loc-us-moshup",
    "name": "Moshup Beach / Gay Head (Martha's Vineyard, Massachusetts)",
    "type": "beach",
    "country": "USA",
    "region": "Massachusetts / Martha's Vineyard",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "massachusetts",
      "marthas vineyard",
      "moshup",
      "aquinnah",
      "gay head",
      "strand"
    ],
    "description": "Under de spektakulære fredede lerskrænter ved Aquinnah på Martha's Vineyard. En afsondret, rå og smuk atlanterhavsstrand med tradition for naturisme.",
    "lat": 41.345,
    "lng": -70.835,
    "address": "Moshup Trail, Aquinnah, MA 02535, USA"
  },
  {
    "id": "loc-us-bellacres",
    "name": "Bell Acres Nudist Resort (Maysville / Atlanta, Georgia)",
    "type": "resort",
    "country": "USA",
    "region": "Georgia / Atlanta",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "georgia",
      "atlanta",
      "maysville",
      "bell acres",
      "resort",
      "camping"
    ],
    "description": "Anerkendt AANR-resort i det bakkede nordlige Georgia. Tilbyder swimmingpool, boblebad, vandrestier, sociale sammenkomster og fuld naturistisk afslapning.",
    "lat": 34.254,
    "lng": -83.568,
    "address": "158 Bell Acres Rd, Maysville, GA 30558, USA",
    "url": "https://www.bellacresresort.com/"
  },
  {
    "id": "loc-us-whitetail",
    "name": "White Tail Resort (Ivor, Virginia)",
    "type": "resort",
    "country": "USA",
    "region": "Virginia / Tidewater",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "virginia",
      "white tail",
      "ivor",
      "resort",
      "camping"
    ],
    "description": "Et af den amerikanske østkysts største naturistresorts med 45 hektar skov, stor indendørs opvarmet pool, udendørs pool, boblebade, tennisbaner og klubhus.",
    "lat": 36.892,
    "lng": -76.894,
    "address": "39031 White Tail Dr, Ivor, VA 23866, USA",
    "url": "https://www.whitetailresort.org/"
  },
  {
    "id": "loc-us-carolinafoothills",
    "name": "Carolina Foothills Resort (Chesnee, South Carolina)",
    "type": "resort",
    "country": "USA",
    "region": "South Carolina / Blue Ridge",
    "keywords": [
      "usa",
      "united states",
      "amerika",
      "south carolina",
      "north carolina",
      "carolina foothills",
      "chesnee",
      "resort",
      "camping"
    ],
    "description": "Venligt naturistresort ved foden af Blue Ridge Mountains tæt på den nordkarolinske grænse med pool, boblebad, hytter og fredelig atmosfære.",
    "lat": 35.152,
    "lng": -81.868,
    "address": "190 Foothills Resort Dr, Chesnee, SC 29323, USA",
    "url": "https://www.carolinafoothills.com/"
  },
  {
    "id": "loc-ca-wreckbeach",
    "name": "Wreck Beach (Vancouver, British Columbia)",
    "type": "beach",
    "country": "Canada",
    "region": "British Columbia / Vancouver",
    "keywords": [
      "canada",
      "vancouver",
      "british columbia",
      "wreck beach",
      "pacific spirit",
      "strand"
    ],
    "description": "Nordamerikas største og mest berømte tøjvalgs-strand (7,8 km lang) for foden af de frodige klipper i Pacific Spirit Regional Park ved UBC.",
    "lat": 49.2624,
    "lng": -123.2575,
    "address": "NW Marine Dr (Trail 6), Vancouver, BC V6T 1Z2, Canada"
  },
  {
    "id": "loc-ca-hanlanspoint",
    "name": "Hanlan's Point Beach (Toronto Islands, Ontario)",
    "type": "beach",
    "country": "Canada",
    "region": "Ontario / Toronto",
    "keywords": [
      "canada",
      "toronto",
      "ontario",
      "hanlans point",
      "toronto islands",
      "lake ontario",
      "strand"
    ],
    "description": "Officiel tøjvalgs-strand siden 2002 på Toronto Islands i Lake Ontario med fint sand, klitter og en fantastisk udsigt til Torontos skyline.",
    "lat": 43.6185,
    "lng": -79.3971,
    "address": "Hanlan's Point, Toronto Islands, Toronto, ON M5J 2W3, Canada"
  },
  {
    "id": "loc-ca-bareoaks",
    "name": "Bare Oaks Family Naturist Park (East Gwillimbury, Ontario)",
    "type": "resort",
    "country": "Canada",
    "region": "Ontario / Greater Toronto",
    "keywords": [
      "canada",
      "ontario",
      "bare oaks",
      "toronto",
      "resort",
      "camping"
    ],
    "description": "Canadas førende helårs-åbne AANR-akkrediterede familie-naturistpark på 50 hektar med swimmingpool, spabad, badesø, sauna og hytter.",
    "lat": 44.1485,
    "lng": -79.3852,
    "address": "20237 Kennedy Rd, Sharon, ON L0G 1V0, Canada",
    "url": "https://www.bareoaks.ca/"
  },
  {
    "id": "loc-ca-laccrepeau",
    "name": "Club Naturiste Lac Crépeau (Laurentides, Quebec)",
    "type": "resort",
    "country": "Canada",
    "region": "Quebec / Laurentides",
    "keywords": [
      "canada",
      "quebec",
      "lac crepeau",
      "laurentides",
      "resort",
      "camping"
    ],
    "description": "Smukt beliggende naturistresort i de fransk-canadiske Laurentides-bjerge med privat badesø, sandstrand, opvarmet pool og hytteudlejning.",
    "lat": 46.1258,
    "lng": -74.1524,
    "address": "1550 Chemin du Lac Crépeau, Chertsey, QC J0K 3K0, Canada",
    "url": "https://www.laccrepeau.com/"
  },
  {
    "id": "loc-ca-fleurdelys",
    "name": "Camping Naturiste Fleur de Lys (Montreal, Quebec)",
    "type": "campsite",
    "country": "Canada",
    "region": "Quebec / Monteregie",
    "keywords": [
      "canada",
      "quebec",
      "fleur de lys",
      "montreal",
      "camping",
      "resort"
    ],
    "description": "Traditionsrigt og gæstfrit naturistcenter sydøst for Montreal med opvarmet pool, tennis, volleyball og masser af sociale aktiviteter.",
    "lat": 45.3852,
    "lng": -73.2145,
    "address": "1000 Chemin du Petit Bois, Varennes, QC J3X 1P7, Canada",
    "url": "https://www.fleurdelys.qc.ca/"
  },
  {
    "id": "loc-ca-beaverlake",
    "name": "Beaver Lake Naturist Resort (Tamworth, Ontario)",
    "type": "resort",
    "country": "Canada",
    "region": "Ontario / Kingston",
    "keywords": [
      "canada",
      "ontario",
      "beaver lake",
      "tamworth",
      "kingston",
      "resort",
      "camping"
    ],
    "description": "130 naturskønne hektar med privat kildevands-sø, opvarmet pool, sauna og naturstier i det østlige Ontario.",
    "lat": 44.4821,
    "lng": -76.9521,
    "address": "150 Beaver Lake Rd, Tamworth, ON K0K 3G0, Canada",
    "url": "https://www.beaverlakeresort.ca/"
  },
  {
    "id": "loc-ca-okanagan",
    "name": "Okanagan Naturist Park (Kelowna, British Columbia)",
    "type": "campsite",
    "country": "Canada",
    "region": "British Columbia / Okanagan",
    "keywords": [
      "canada",
      "okanagan",
      "kelowna",
      "british columbia",
      "resort",
      "camping"
    ],
    "description": "Placeret i Canadas solrige vinregion Okanagan Valley med swimmingpool, spabad og udsigt over bjergene.",
    "lat": 49.8879,
    "lng": -119.496,
    "address": "Okanagan Valley, Kelowna, BC, Canada"
  },
  {
    "id": "loc-au-ladybay",
    "name": "Lady Bay Beach / Lady Jane (Sydney, New South Wales)",
    "type": "beach",
    "country": "Australien",
    "region": "New South Wales / Sydney",
    "keywords": [
      "australien",
      "australia",
      "sydney",
      "lady bay",
      "watsons bay",
      "south head",
      "strand"
    ],
    "description": "Australiens mest berømte officielle naturiststrand, beliggende på South Head ved indsejlingen til Sydney Harbour med panoramaudsigt over havnen.",
    "lat": -33.8395,
    "lng": 151.2785,
    "address": "South Head, Watsons Bay, Sydney, NSW 2030, Australien"
  },
  {
    "id": "loc-au-obelisk",
    "name": "Obelisk Beach (Mosman, Sydney Harbour, New South Wales)",
    "type": "beach",
    "country": "Australien",
    "region": "New South Wales / Sydney",
    "keywords": [
      "australien",
      "australia",
      "sydney",
      "obelisk beach",
      "mosman",
      "middle head",
      "strand"
    ],
    "description": "Fredet og afskærmet naturperle på Middle Head i Sydney Harbour National Park. Fint gyldent sand og krystalklart vand omgivet af eukalyptusskov.",
    "lat": -33.8298,
    "lng": 151.2612,
    "address": "Middle Head Rd, Mosman, Sydney, NSW 2088, Australien"
  },
  {
    "id": "loc-au-cobblers",
    "name": "Cobblers Beach (Mosman, Sydney, New South Wales)",
    "type": "beach",
    "country": "Australien",
    "region": "New South Wales / Sydney",
    "keywords": [
      "australien",
      "australia",
      "sydney",
      "cobblers beach",
      "mosman",
      "strand"
    ],
    "description": "Officiel tøjvalgs-strand beliggende tæt på Obelisk Beach i Middle Head National Park. Roligt badevand og intim atmosfære.",
    "lat": -33.8245,
    "lng": 151.2585,
    "address": "Cobblers Bay, Mosman, Sydney, NSW 2088, Australien"
  },
  {
    "id": "loc-au-samurai",
    "name": "Samurai Beach (Port Stephens, New South Wales)",
    "type": "beach",
    "country": "Australien",
    "region": "New South Wales / Port Stephens",
    "keywords": [
      "australien",
      "australia",
      "samurai beach",
      "port stephens",
      "tomaree",
      "strand"
    ],
    "description": "Storslået tøjvalgs-strand omgivet af de enorme klitter i Tomaree National Park. Kendt for surfbølger, vilde delfiner og årlige naturist-strandlege.",
    "lat": -32.7481,
    "lng": 152.1275,
    "address": "Samurai Beach Trail, One Mile, NSW 2316, Australien"
  },
  {
    "id": "loc-au-maslin",
    "name": "Maslin Beach (Fleurieu Peninsula, South Australia)",
    "type": "beach",
    "country": "Australien",
    "region": "South Australia / Adelaide",
    "keywords": [
      "australien",
      "australia",
      "adelaide",
      "maslin beach",
      "south australia",
      "strand"
    ],
    "description": "Historisk milepæl: Australiens allerførste officielt legaliserede naturiststrand (udpeget i 1975). Kridhvide kalkklinter og kilometerlang sandstrand.",
    "lat": -35.2533,
    "lng": 138.4633,
    "address": "Gulfview Rd, Maslin Beach, SA 5170, Australien"
  },
  {
    "id": "loc-au-sunnyside",
    "name": "Sunnyside North Beach (Mount Eliza, Victoria)",
    "type": "beach",
    "country": "Australien",
    "region": "Victoria / Melbourne",
    "keywords": [
      "australien",
      "australia",
      "melbourne",
      "victoria",
      "sunnyside",
      "mount eliza",
      "strand"
    ],
    "description": "Melbournes mest kendte officielle tøjvalgs-strand på Mornington Peninsula ved Port Phillip Bay, omgivet af te-træer og klipper.",
    "lat": -38.1895,
    "lng": 145.0742,
    "address": "Sunnyside Rd, Mount Eliza, VIC 3930, Australien"
  },
  {
    "id": "loc-au-pointimpossible",
    "name": "Point Impossible Beach (Torquay / Great Ocean Road, Victoria)",
    "type": "beach",
    "country": "Australien",
    "region": "Victoria / Geelong",
    "keywords": [
      "australien",
      "australia",
      "torquay",
      "point impossible",
      "great ocean road",
      "strand"
    ],
    "description": "Officiel naturiststrand ved begyndelsen af den berømte Great Ocean Road nær Torquay med brede sandbanker og Stillehavsbrænding.",
    "lat": -38.2985,
    "lng": 144.3752,
    "address": "The Esplanade, Torquay, VIC 3228, Australien"
  },
  {
    "id": "loc-au-swanbourne",
    "name": "Swanbourne Beach (Perth, Western Australia)",
    "type": "beach",
    "country": "Australien",
    "region": "Western Australia / Perth",
    "keywords": [
      "australien",
      "australia",
      "perth",
      "swanbourne",
      "western australia",
      "indiske ocean",
      "strand"
    ],
    "description": "Den officielle naturiststrand i Perth ved Det Indiske Ocean. Brede hvide sandstrande og fantastiske solnedgange over havet.",
    "lat": -31.9667,
    "lng": 115.7533,
    "address": "Marine Parade, Swanbourne, Perth, WA 6010, Australien"
  },
  {
    "id": "loc-au-alexandriabay",
    "name": "Alexandria Bay (Noosa National Park, Queensland)",
    "type": "beach",
    "country": "Australien",
    "region": "Queensland / Sunshine Coast",
    "keywords": [
      "australien",
      "australia",
      "noosa",
      "alexandria bay",
      "queensland",
      "sunshine coast",
      "strand"
    ],
    "description": "Verdensberømt afsondret sandbugt i Noosa National Park ('A-Bay') med subtropisk regnskov, koalaer og spektakulær naturisme.",
    "lat": -26.3912,
    "lng": 153.1185,
    "address": "Coastal Track, Noosa National Park, Noosa Heads, QLD 4567, Australien"
  },
  {
    "id": "loc-au-tyagarah",
    "name": "Tyagarah Beach (Byron Bay, New South Wales)",
    "type": "beach",
    "country": "Australien",
    "region": "New South Wales / Byron Bay",
    "keywords": [
      "australien",
      "australia",
      "byron bay",
      "tyagarah",
      "strand"
    ],
    "description": "En kilometerlang officiel tøjvalgs-strandstrækning i Tyagarah Nature Reserve nord for Byron Bay med uspoleret vild kystlinje.",
    "lat": -28.6015,
    "lng": 153.5682,
    "address": "Grays Ln, Tyagarah Nature Reserve, Byron Bay, NSW 2481, Australien"
  },
  {
    "id": "loc-nz-littlepalmbeach",
    "name": "Little Palm Beach (Waiheke Island, Auckland)",
    "type": "beach",
    "country": "New Zealand",
    "region": "Auckland / Waiheke Island",
    "keywords": [
      "new zealand",
      "auckland",
      "waiheke",
      "little palm beach",
      "strand"
    ],
    "description": "New Zealands mest berømte tøjvalgs-bugt på idylliske Waiheke Island. Kridhvidt sand, rolige turkise bølger og frodige pohutukawa-træer.",
    "lat": -36.7795,
    "lng": 175.0512,
    "address": "Palm Rd, Palm Beach, Waiheke Island 1081, New Zealand"
  },
  {
    "id": "loc-nz-ladiesbay",
    "name": "Ladies Bay (St Heliers, Auckland)",
    "type": "beach",
    "country": "New Zealand",
    "region": "Auckland / Tamaki Drive",
    "keywords": [
      "new zealand",
      "auckland",
      "ladies bay",
      "st heliers",
      "strand"
    ],
    "description": "Historisk tøjvalgs-strand gemt under klipperne ved Achilles Point i Auckland med direkte udsigt til Rangitoto-vulkanen.",
    "lat": -36.8485,
    "lng": 174.8725,
    "address": "Cliff Rd, St Heliers, Auckland 1071, New Zealand"
  },
  {
    "id": "loc-nz-breakerbay",
    "name": "Breaker Bay (Wellington)",
    "type": "beach",
    "country": "New Zealand",
    "region": "Wellington",
    "keywords": [
      "new zealand",
      "wellington",
      "breaker bay",
      "strand"
    ],
    "description": "Vild og rå tøjvalgs-strand på Wellingtons sydkyst ud mod Cook-strædet, omgivet af klipper og storslået havudsigt.",
    "lat": -41.3325,
    "lng": 174.8315,
    "address": "Breaker Bay Rd, Seatoun, Wellington 6022, New Zealand"
  },
  {
    "id": "loc-nz-uretiti",
    "name": "Uretiti Beach (Northland / Bream Bay)",
    "type": "beach",
    "country": "New Zealand",
    "region": "Northland / Bream Bay",
    "keywords": [
      "new zealand",
      "northland",
      "uretiti",
      "bream bay",
      "strand",
      "camping"
    ],
    "description": "Endeløs hvid surfstrand med et officielt anerkendt tøjvalgs-område syd for campingpladsen på Northlands østkyst.",
    "lat": -35.9812,
    "lng": 174.4582,
    "address": "State Hwy 1, Waipu 0582, New Zealand"
  },
  {
    "id": "loc-mx-hiddenbeach",
    "name": "Hidden Beach Resort Au Naturel Club (Riviera Maya)",
    "type": "resort",
    "country": "Mexico",
    "region": "Quintana Roo / Riviera Maya",
    "keywords": [
      "mexico",
      "riviera maya",
      "hidden beach",
      "kantenah",
      "resort",
      "luksus"
    ],
    "description": "5-stjernet Gourmet Inclusive luksusresort udelukkende for naturister på en privat caribisk strand i Kantenah Bay.",
    "lat": 20.4512,
    "lng": -87.2625,
    "address": "Km 95 Carretera Cancun-Chetumal, Kantenah, Quintana Roo 77710, Mexico",
    "url": "https://www.hiddenbeachresort.com/"
  },
  {
    "id": "loc-mx-intimatulum",
    "name": "Intima Resort Tulum (Tulum)",
    "type": "resort",
    "country": "Mexico",
    "region": "Quintana Roo / Tulum",
    "keywords": [
      "mexico",
      "tulum",
      "intima",
      "resort",
      "jungel"
    ],
    "description": "Eksklusivt tøjvalgs-resort i den frodige mayajungle i Tulum med tropisk lagunepool, swim-up bar og luksusvillaer.",
    "lat": 20.2015,
    "lng": -87.4725,
    "address": "Calle 5 Pte, La Veleta, 77760 Tulum, Q.R., Mexico",
    "url": "https://www.intimatum.com/"
  },
  {
    "id": "loc-mx-playasonrisa",
    "name": "Playa Sonrisa Boutique Nudist Resort (Costa Maya / Xcalak)",
    "type": "resort",
    "country": "Mexico",
    "region": "Quintana Roo / Costa Maya",
    "keywords": [
      "mexico",
      "costa maya",
      "xcalak",
      "playa sonrisa",
      "resort",
      "strand"
    ],
    "description": "Afslappet og intimt boutique-naturistresort direkte på en uberørt privat caribisk strand tæt på koralrevet ved Xcalak.",
    "lat": 18.3125,
    "lng": -87.8252,
    "address": "Carretera Mahahual-Xcalak Km 48, 77940 Xcalak, Q.R., Mexico",
    "url": "https://www.playasonrisa.com/"
  },
  {
    "id": "loc-jm-hedonism",
    "name": "Hedonism II Resort (Negril)",
    "type": "resort",
    "country": "Jamaica",
    "region": "Negril / Westmoreland",
    "keywords": [
      "jamaica",
      "negril",
      "hedonism",
      "hedonism ii",
      "resort",
      "bloody bay",
      "caribien",
      "caribbean",
      "all-inclusive"
    ],
    "description": "Verdens måske mest berømte 'clothing-optional' all-inclusive resort beliggende på spidsen af Bloody Bay i Negril. Har en dedikeret nøgenstrand med swim-up bar, boblebade og fri tøjvalgs-atmosfære døgnet rundt.",
    "lat": 18.3361,
    "lng": -78.3378,
    "address": "Norman Manley Blvd, Negril, Westmoreland, Jamaica",
    "url": "https://www.hedonism.com",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": "loc-jm-grandlido",
    "name": "Grand Lido Negril Au-Naturel Resort",
    "type": "resort",
    "country": "Jamaica",
    "region": "Negril / Hanover",
    "keywords": [
      "jamaica",
      "negril",
      "grand lido",
      "au naturel",
      "luksus",
      "resort",
      "butler",
      "caribien"
    ],
    "description": "Eksklusivt 5-stjernet boutique-resort kun for voksne naturister. Byder på 26 oceanfront suiter med butler, privat tøjvalgspool med havudsigt og en rolig, afskærmet naturiststrandbugt.",
    "lat": 18.3325,
    "lng": -78.3342,
    "address": "Norman Manley Blvd, Negril, Hanover, Jamaica",
    "url": "https://www.grandlido.com",
    "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": "loc-jm-couplestowerisle",
    "name": "Couples Tower Isle – Private Au Naturel Island (Ocho Rios)",
    "type": "resort",
    "country": "Jamaica",
    "region": "Ocho Rios / St. Mary",
    "keywords": [
      "jamaica",
      "ocho rios",
      "couples",
      "tower isle",
      "privat ø",
      "island",
      "resort",
      "au naturel",
      "caribien"
    ],
    "description": "Ikonisk voksenresort med sin helt egen private ø ud for kysten ('Tower Isle'), der er 100% au naturel (tøj forbudt på øen). Båd transfer sejler gæster til øens pool, swim-up bar og liggestole.",
    "lat": 18.4182,
    "lng": -77.0425,
    "address": "A3, Tower Isle, Ocho Rios, St. Mary, Jamaica",
    "url": "https://couples.com/resorts/couples-tower-isle",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    "id": "loc-jm-couplessanssouci",
    "name": "Couples Sans Souci – Au Naturel Beach & Mineral Pool (Ocho Rios)",
    "type": "resort",
    "country": "Jamaica",
    "region": "Ocho Rios / St. Ann",
    "keywords": [
      "jamaica",
      "ocho rios",
      "couples",
      "sans souci",
      "mineral pool",
      "strand",
      "resort",
      "au naturel"
    ],
    "description": "Romantisk luksusresort bygget ind i de frodige klipper ved Ocho Rios. Råder over en afsondret privat naturiststrandbugt, en naturlig ferskvands mineralgrottepool og dedikeret strandbar for nøgenbadere.",
    "lat": 18.4115,
    "lng": -77.0678,
    "address": "White River, Ocho Rios, St. Ann, Jamaica",
    "url": "https://couples.com/resorts/couples-sans-souci"
  },
  {
    "id": "loc-jm-couplessweptaway",
    "name": "Couples Swept Away – Au Naturel Beach (Negril)",
    "type": "resort",
    "country": "Jamaica",
    "region": "Negril / Westmoreland",
    "keywords": [
      "jamaica",
      "negril",
      "seven mile beach",
      "couples swept away",
      "resort",
      "strand",
      "au naturel"
    ],
    "description": "Beliggende direkte på den berømte Seven Mile Beach i Negril. Resortet tilbyder en diskret afskærmet naturistsektion med blødt hvidt sand, liggestole og krystalklart caribisk badevand.",
    "lat": 18.2985,
    "lng": -78.3421,
    "address": "Norman Manley Blvd, Long Bay, Negril, Jamaica",
    "url": "https://couples.com/resorts/couples-swept-away"
  },
  {
    "id": "loc-jm-couplesnegril",
    "name": "Couples Negril – Au Naturel Beach Section",
    "type": "resort",
    "country": "Jamaica",
    "region": "Negril / Hanover",
    "keywords": [
      "jamaica",
      "negril",
      "bloody bay",
      "couples negril",
      "resort",
      "au naturel"
    ],
    "description": "Placeret i den rolige Bloody Bay med en afskærmet 'Au Naturel' strandzone for resortets gæster udstyret med parasoller, solsenge og udsigt over bugten.",
    "lat": 18.3312,
    "lng": -78.333,
    "address": "Norman Manley Blvd, Bloody Bay, Negril, Jamaica",
    "url": "https://couples.com/resorts/couples-negril"
  },
  {
    "id": "loc-jm-bloodybay",
    "name": "Bloody Bay Naturist Strandsektion (Negril)",
    "type": "beach",
    "country": "Jamaica",
    "region": "Negril / Westmoreland",
    "keywords": [
      "jamaica",
      "negril",
      "bloody bay",
      "strand",
      "bade",
      "caribien"
    ],
    "description": "Bloody Bay er kendt for sit lave, rolige turkise vand og bløde sand. Strækningen ved og omkring Hedonism II og Grand Lido er anerkendt for en uformel og venlig tøjvalgs-badekultur.",
    "lat": 18.3345,
    "lng": -78.3355,
    "address": "Bloody Bay, Norman Manley Blvd, Negril, Jamaica"
  },
  {
    "id": "loc-jm-watsonsbeach",
    "name": "Watsons Beach & Secret Coves (Negril West End)",
    "type": "beach",
    "country": "Jamaica",
    "region": "Westmoreland / Negril",
    "keywords": [
      "jamaica",
      "negril",
      "west end",
      "watsons beach",
      "klippebugt"
    ],
    "description": "Fredelige klipper og afsides bugter syd for Negril fyr, hvor naturister og eventyrere finder uforstyrret nøgenbadning i det klare hav.",
    "lat": 18.258,
    "lng": -78.359,
    "address": "West End Road, Negril, Jamaica",
    "warning": "Ingen faste badefaciliteter; udvis almindelig diskretion i forhold til lokale beboere."
  },
  {
    "id": "loc-jm-doctorscave",
    "name": "Doctor's Cave Private Resort Terrasser (Montego Bay)",
    "type": "beach",
    "country": "Jamaica",
    "region": "Montego Bay / St. James",
    "keywords": [
      "jamaica",
      "montego bay",
      "doctor's cave",
      "solbadning"
    ],
    "description": "Selve den offentlige strand kræver badetøj, men tilknyttede private resorthavere og afskærmede tagterrasser i bugten tilbyder tøjvalgs-solbadning med udsigt over Montego Bay Marine Park.",
    "lat": 18.4815,
    "lng": -77.9265,
    "address": "Gloucester Ave, Montego Bay, Jamaica"
  },
  {
    "id": "loc-jm-royaltonbluewaters",
    "name": "Royalton Blue Waters Au Naturel Wing (Falmouth / Trelawny)",
    "type": "resort",
    "country": "Jamaica",
    "region": "Falmouth / Trelawny",
    "keywords": [
      "jamaica",
      "falmouth",
      "trelawny",
      "royalton",
      "resort"
    ],
    "description": "Eksklusiv sektion af det store resortkompleks nær Falmouth med afsondrede zoner og solbadning uden tøj for voksne gæster.",
    "lat": 18.495,
    "lng": -77.585,
    "address": "Mountain Spring, Falmouth, Trelawny, Jamaica",
    "url": "https://www.royaltonresorts.com"
  },
  {
    "id": "loc-mx-zipolite",
    "name": "Playa Zipolite (Oaxaca) – Mexicos Officielle Nudiststrand",
    "type": "beach",
    "country": "Mexico",
    "region": "Oaxaca / Costa Chica",
    "keywords": [
      "mexico",
      "zipolite",
      "oaxaca",
      "playa del amor",
      "strand",
      "officiel"
    ],
    "description": "Mexicos første og mest berømte officielle tøjvalgs-strand (ca. 2 km lang) ved Stillehavet. Særligt den østlige bugt 'Playa del Amor' er et legendarisk naturist-paradis med klipper, palmer og bohemestemning.",
    "lat": 15.6631,
    "lng": -96.5133,
    "address": "Playa Zipolite, 70904 San Pedro Pochutla, Oaxaca, Mexico"
  },
  {
    "id": "loc-mx-playadelamor-zipolite",
    "name": "Playa del Amor (Zipolite, Oaxaca)",
    "type": "beach",
    "country": "Mexico",
    "region": "Oaxaca / Zipolite",
    "keywords": [
      "mexico",
      "zipolite",
      "playa del amor",
      "oaxaca",
      "strand",
      "klipper"
    ],
    "description": "En idyllisk lille beskyttet bugt i den østlige ende af Zipolite omkranset af dramatiske klipper. 100% tøjvalg og roligt badevand med en fantastisk solnedgang.",
    "lat": 15.6608,
    "lng": -96.5085,
    "address": "Playa del Amor, Zipolite, Oaxaca, Mexico"
  },
  {
    "id": "loc-mx-balandra",
    "name": "Playa Balandra Secluded Coves (La Paz, Baja California Sur)",
    "type": "beach",
    "country": "Mexico",
    "region": "Baja California Sur / La Paz",
    "keywords": [
      "mexico",
      "baja california",
      "la paz",
      "balandra",
      "cortez",
      "strand"
    ],
    "description": "Balandra er berømt for sit lave, krystalklare turkise vand i Cortezhavet. De afsides bugter bag de røde ørkenbjerge benyttes flittigt af naturister for uforstyrret badning.",
    "lat": 24.3218,
    "lng": -110.3245,
    "address": "Carretera Pichilingue a Balandra, 23000 La Paz, B.C.S., Mexico"
  },
  {
    "id": "loc-mx-isla-pasion",
    "name": "Isla Pasión Remote North Beach (Cozumel / Quintana Roo)",
    "type": "beach",
    "country": "Mexico",
    "region": "Quintana Roo / Cozumel",
    "keywords": [
      "mexico",
      "cozumel",
      "isla pasion",
      "quintana roo",
      "caribien",
      "strand"
    ],
    "description": "En afsides ø nord for Cozumel med uberørte kridhvide caribiske sandbanker og mangroveskove, hvor den nordlige spids giver fuld privatliv for naturister.",
    "lat": 20.5489,
    "lng": -86.8621,
    "address": "Isla de la Pasión, Cozumel, Q.R., Mexico"
  },
  {
    "id": "loc-nz-ladiesbay",
    "name": "Ladies Bay (St Heliers, Auckland)",
    "type": "beach",
    "country": "New Zealand",
    "region": "Auckland / Waitemata Harbour",
    "keywords": [
      "new zealand",
      "auckland",
      "ladies bay",
      "st heliers",
      "strand"
    ],
    "description": "Aucklands mest kendte og traditionsrige tøjvalgs-strand beliggende i en charmerende sandbugt omgivet af klipper og pohutukawa-træer med udsigt til Rangitoto Island.",
    "lat": -36.8524,
    "lng": 174.8712,
    "address": "Cliff Rd, St Heliers, Auckland 1071, New Zealand"
  },
  {
    "id": "loc-nz-littlepalmbeach",
    "name": "Little Palm Beach (Waiheke Island, Auckland)",
    "type": "beach",
    "country": "New Zealand",
    "region": "Auckland / Waiheke Island",
    "keywords": [
      "new zealand",
      "waiheke island",
      "little palm beach",
      "auckland",
      "strand"
    ],
    "description": "En smuk, afsides lille bugt umiddelbart vest for Palm Beach på Waiheke Island. Et officielt tøjvalgs-sted med gyldent sand og krystalklart vand.",
    "lat": -36.7825,
    "lng": 175.0489,
    "address": "Beach Parade, Palm Beach, Waiheke Island 1081, New Zealand"
  },
  {
    "id": "loc-nz-mapua",
    "name": "Mapua Leisure Park & Clothing Optional Resort (Nelson / Tasman)",
    "type": "resort",
    "country": "New Zealand",
    "region": "Nelson / Tasman Bay",
    "keywords": [
      "new zealand",
      "nelson",
      "mapua",
      "tasman",
      "resort",
      "camping"
    ],
    "description": "New Zealands førende tøjvalgs-feriepark beliggende på en privat halvø i Tasman Bay. Byder på sauna, pool, private strande og hytter i naturskønne omgivelser.",
    "lat": -41.2505,
    "lng": 173.1085,
    "address": "85 Toru St, Mapua 7005, Tasman, New Zealand",
    "url": "https://www.mapualeisurepark.co.nz"
  },
  {
    "id": "loc-ca-beaconia",
    "name": "Beaconia Beach (Lake Winnipeg, Manitoba)",
    "type": "beach",
    "country": "Canada",
    "region": "Manitoba / Lake Winnipeg",
    "keywords": [
      "canada",
      "manitoba",
      "beaconia",
      "lake winnipeg",
      "strand"
    ],
    "description": "Canadas næststørste tøjvalgs-strand (3 km uberørt hvidt sand) ved Lake Winnipeg, omgivet af klitter og laguner.",
    "lat": 50.4182,
    "lng": -96.5689,
    "address": "Beaconia Beach Rd, St. Clements, MB R0E 0B0, Canada"
  },
  {
    "id": "loc-ca-pointetaillon",
    "name": "Parc national de la Pointe-Taillon Naturist Beach (Quebec)",
    "type": "beach",
    "country": "Canada",
    "region": "Quebec / Lac Saint-Jean",
    "keywords": [
      "canada",
      "quebec",
      "pointe taillon",
      "lac saint jean",
      "nationalpark",
      "strand"
    ],
    "description": "Kilometervis af fint ferskvandssand ved Lac Saint-Jean med en uofficiel men bredt accepteret tøjvalgs-sektion blandt klitter og fyrreskove.",
    "lat": 48.6852,
    "lng": -71.8541,
    "address": "835 Chemin de la Pointe Taillon, Saint-Henri-de-Taillon, QC G0W 2X0, Canada"
  }
];

// Search function that returns ALL matching locations without artificial low limits
export function searchCuratedDatabase(query: string): SearchResult | null {
  const rawQ = query.trim().toLowerCase();
  if (!rawQ) return null;

  // Normalize punctuation (e.g. "u.s.a." -> "usa") and common aliases
  let q = rawQ.replace(/\./g, "").trim();
  if (q === "united states" || q === "united states of america" || q === "amerikas forenede stater" || q === "amerika" || q === "us" || q === "u s a") {
    q = "usa";
  }

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
  "Jamaica",
  "Negril",
  "Ocho Rios",
  "Bloody Bay",
  "Hedonism",
  "Zipolite",
  "Montego Bay",
  "Waiheke Island",
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
  "Dubai",
  "Florida",
  "Miami",
  "Californien",
  "San Diego",
  "San Francisco",
  "Hawaii",
  "Maui",
  "Lake Tahoe",
  "Austin",
  "New York",
  "Oregon",
  "Colorado",
  "Canada",
  "Vancouver",
  "Toronto",
  "Australien",
  "Sydney",
  "Melbourne",
  "Perth",
  "Byron Bay",
  "New Zealand",
  "Auckland",
  "Wellington",
  "Mexico",
  "Riviera Maya",
  "Tulum"
];
