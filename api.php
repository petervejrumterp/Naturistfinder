<?php
/**
 * NaturistFinder Backend API for PHP / cPanel hosting
 * Supports:
 *  - GET  /api/suggestions?q=...
 *  - POST /api/search
 *  - GET  /api/image-proxy?url=...
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// 1. Load API Key from environment or .env file
$apiKey = getenv('GEMINI_API_KEY') ?: getenv('API_KEY');
if (!$apiKey && file_exists(__DIR__ . '/.env')) {
    $envLines = file(__DIR__ . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($envLines as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        if (strpos($line, '=') !== false) {
            list($key, $val) = explode('=', $line, 2);
            $key = trim($key);
            $val = trim($val, " \t\n\r\0\x0B\"'");
            if ($key === 'GEMINI_API_KEY' || $key === 'API_KEY') {
                $apiKey = $val;
                break;
            }
        }
    }
}

// 2. Curated Destinations with verified images and coordinates
$CURATED = [
    "chora sfakion" => [
        "summary" => "Chora Sfakion på Kretas sydkyst er et af Europas mest berømte naturistområder, anført af det 4-stjernede Vritomartis Naturist Resort og Filaki-stranden.",
        "locations" => [
            [
                "id" => "loc-sfakion-vritomartis",
                "name" => "Vritomartis Naturist Resort",
                "type" => "resort",
                "description" => "Kretas berømte 4-stjernede naturistresort beliggende i Chora Sfakion med 25-meter swimmingpool, bungalows og shuttlebus til Filaki-naturiststranden.",
                "lat" => 35.1958,
                "lng" => 24.1486,
                "address" => "Chora Sfakion, 73011 Kreta, Grækenland",
                "url" => "https://www.vritomartis.gr/",
                "image" => "https://www.vritomartis.gr/wp-content/uploads/DSC_5627-scaled.jpg"
            ],
            [
                "id" => "loc-sfakion-filaki",
                "name" => "Filaki Strand (Plakias / Sfakia)",
                "type" => "beach",
                "description" => "Den officielle naturiststrand i Sfakia-området, beliggende lige nedenfor Vritomartis Resort med krystalklart vand og klipper.",
                "lat" => 35.1945,
                "lng" => 24.1550,
                "address" => "Filaki Beach, Chora Sfakion, 73011 Kreta, Grækenland"
            ],
            [
                "id" => "loc-sfakion-glykanera",
                "name" => "Glyka Nera (Sweet Water Beach)",
                "type" => "beach",
                "description" => "Spektakulær naturstrand mellem Chora Sfakion og Loutro med ferskvandskilder. Den østlige del er populært naturistområde.",
                "lat" => 35.2015,
                "lng" => 24.1085,
                "address" => "Glyka Nera, 73011 Kreta, Grækenland"
            ],
            [
                "id" => "loc-sfakion-iligas",
                "name" => "Iligas Strand (Østlige bugter)",
                "type" => "beach",
                "description" => "Flot strand ca. 1 km vest for Chora Sfakion ved udmundingen af Kavi-kløften.",
                "lat" => 35.1980,
                "lng" => 24.1310,
                "address" => "Iligas Beach, Chora Sfakion, 73011 Kreta, Grækenland"
            ]
        ]
    ],
    "sfakia" => [
        "summary" => "Chora Sfakion på Kretas sydkyst er et af Europas mest berømte naturistområder.",
        "locations" => [
            [
                "id" => "loc-sfakion-vritomartis-2",
                "name" => "Vritomartis Naturist Resort",
                "type" => "resort",
                "description" => "Kretas berømte 4-stjernede naturistresort beliggende i Chora Sfakion med pool, bungalows og shuttlebus til Filaki-naturiststranden.",
                "lat" => 35.1958,
                "lng" => 24.1486,
                "address" => "Chora Sfakion, 73011 Kreta, Grækenland",
                "url" => "https://www.vritomartis.gr/",
                "image" => "https://www.vritomartis.gr/wp-content/uploads/DSC_5627-scaled.jpg"
            ],
            [
                "id" => "loc-sfakion-filaki-2",
                "name" => "Filaki Strand",
                "type" => "beach",
                "description" => "Den officielle og mest anerkendte naturiststrand i Sfakia-området.",
                "lat" => 35.1945,
                "lng" => 24.1550,
                "address" => "Filaki Beach, Chora Sfakion, 73011 Kreta, Grækenland"
            ]
        ]
    ],
    "kreta" => [
        "summary" => "Kreta har en stærk naturisttradition på sydkysten med Chora Sfakion og Vritomartis Resort som centrum.",
        "locations" => [
            [
                "id" => "loc-kreta-vritomartis",
                "name" => "Vritomartis Naturist Resort",
                "type" => "resort",
                "description" => "Kretas førende naturistresort ved Chora Sfakion med pool, bungalows og shuttlebus til Filaki-stranden.",
                "lat" => 35.1958,
                "lng" => 24.1486,
                "address" => "Chora Sfakion, 73011 Kreta, Grækenland",
                "url" => "https://www.vritomartis.gr/",
                "image" => "https://www.vritomartis.gr/wp-content/uploads/DSC_5627-scaled.jpg"
            ],
            [
                "id" => "loc-kreta-filaki",
                "name" => "Filaki Strand",
                "type" => "beach",
                "description" => "Kretas primære officielle naturiststrand med krystalklart vand og rolige klippeomgivelser.",
                "lat" => 35.1945,
                "lng" => 24.1550,
                "address" => "Filaki, Chora Sfakion, 73011 Kreta, Grækenland"
            ],
            [
                "id" => "loc-kreta-kommos",
                "name" => "Kommos Strand (Pitsidia / Matala)",
                "type" => "beach",
                "description" => "En kæmpe sandstrand med klitter mod Det Libyske Hav. Nordlige sektion er en af Kretas største naturiststrande.",
                "lat" => 35.0125,
                "lng" => 24.7602,
                "address" => "Kommos Beach, Pitsidia, 70200 Kreta, Grækenland"
            ]
        ]
    ],
    "korsika" => [
        "summary" => "Korsika er en af Europas førende naturist-destinationer med flere anerkendte resorts langs østkysten.",
        "locations" => [
            [
                "id" => "loc-korsika-1",
                "name" => "Riva Bella Thalasso & Spa Resort",
                "type" => "resort",
                "description" => "Anerkendt 4-stjernet naturistresort i Aléria med thalassoterapi, direkte adgang til kilometervis af sandstrand og bungalows.",
                "lat" => 42.1283,
                "lng" => 9.5598,
                "address" => "Route de la Mer, 20270 Aléria, Korsika, Frankrig",
                "url" => "https://www.naturisme-rivabella.com/",
                "image" => "https://www.naturisme-rivabella.com/images/accueil/camping-corse-emplacements.webp"
            ],
            [
                "id" => "loc-korsika-2",
                "name" => "Bagheera Naturist Village",
                "type" => "resort",
                "description" => "Stort naturistferiested og ferieby beliggende i en eukalyptus- og egeskov direkte ud til krystalklart vand med feriehuse og camping.",
                "lat" => 42.0673,
                "lng" => 9.5435,
                "address" => "Domaine de Bagheera, 20240 Ghisonaccia, Korsika, Frankrig",
                "url" => "https://www.bagheera.fr/",
                "image" => "https://www.bagheera.fr/wp-content/uploads/2025/10/bagheera_environnement_001.jpg"
            ],
            [
                "id" => "loc-korsika-3",
                "name" => "Domaine de la Chiappa",
                "type" => "resort",
                "description" => "Spektakulært beliggende naturistresort ved Porto-Vecchio med private strande, klippebugter og dykkercenter.",
                "lat" => 41.5300,
                "lng" => 9.3585,
                "address" => "Route du Phare de la Chiappa, 20137 Porto-Vecchio, Korsika, Frankrig",
                "url" => "https://www.chiappa.com/",
                "image" => "https://www.chiappa.com/wp-content/uploads/vue-panoramique-1.jpg"
            ]
        ]
    ],
    "corsica" => [
        "summary" => "Korsika er en af Europas førende naturist-destinationer med flere anerkendte resorts langs østkysten.",
        "locations" => [
            [
                "id" => "loc-korsika-1",
                "name" => "Riva Bella Thalasso & Spa Resort",
                "type" => "resort",
                "description" => "Anerkendt 4-stjernet naturistresort i Aléria med thalassoterapi, direkte adgang til kilometervis af sandstrand og bungalows.",
                "lat" => 42.1283,
                "lng" => 9.5598,
                "address" => "Route de la Mer, 20270 Aléria, Korsika, Frankrig",
                "url" => "https://www.naturisme-rivabella.com/",
                "image" => "https://www.naturisme-rivabella.com/images/accueil/camping-corse-emplacements.webp"
            ],
            [
                "id" => "loc-korsika-2",
                "name" => "Bagheera Naturist Village",
                "type" => "resort",
                "description" => "Stort naturistferiested og ferieby beliggende i en eukalyptus- og egeskov direkte ud til krystalklart vand.",
                "lat" => 42.0673,
                "lng" => 9.5435,
                "address" => "Domaine de Bagheera, 20240 Ghisonaccia, Korsika, Frankrig",
                "url" => "https://www.bagheera.fr/",
                "image" => "https://www.bagheera.fr/wp-content/uploads/2025/10/bagheera_environnement_001.jpg"
            ]
        ]
    ],
    "danmark" => [
        "summary" => "I Danmark er naturisme generelt tilladt på alle offentlige strande, medmindre der er specifikke lokale forbud.",
        "locations" => [
            [
                "id" => "loc-dk-1",
                "name" => "Solbakken Naturistcamping",
                "type" => "campsite",
                "description" => "Danmarks ældste og mest kendte naturistcampingplads beliggende ved Isefjorden med sauna og pool.",
                "lat" => 55.6723,
                "lng" => 11.7588,
                "address" => "Solbakken 1, 4060 Kirke Såby, Danmark",
                "image" => "https://solbakken-naturist.dk/wp-content/uploads/2020/06/solbakken-oversigt.jpg"
            ],
            [
                "id" => "loc-dk-2",
                "name" => "Bellevue Strand (Naturistområde)",
                "type" => "beach",
                "description" => "Den klassiske strand nord for København. Den nordligste sektion er populær til nøgenbadning.",
                "lat" => 55.7766,
                "lng" => 12.5936,
                "address" => "Strandvejen 340, 2930 Klampenborg, Danmark"
            ]
        ]
    ],
    "dubai" => [
        "summary" => "Advarsel: I De Forenede Arabiske Emirater er offentlig nøgenhed og naturisme strengt forbudt.",
        "locations" => [
            [
                "id" => "loc-dubai-warning",
                "name" => "Dubai & De Forenede Arabiske Emirater",
                "type" => "other",
                "description" => "I De Forenede Arabiske Emirater er naturisme, nøgenbadning og topløs solbadning ulovligt og strafbart med bøder og fængsel.",
                "lat" => 25.2048,
                "lng" => 55.2708,
                "address" => "Dubai, De Forenede Arabiske Emirater",
                "warning" => "STRENGT FORBUDT: Offentlig nøgenhed er ulovligt i UAE og kan medføre fængselsstraf eller udvisning."
            ]
        ]
    ]
];

// Determine endpoint
$uri = $_SERVER['REQUEST_URI'] ?? '';
$endpoint = $_GET['endpoint'] ?? '';
if (!$endpoint) {
    if (strpos($uri, 'api/suggestions') !== false) $endpoint = 'suggestions';
    elseif (strpos($uri, 'api/search') !== false) $endpoint = 'search';
    elseif (strpos($uri, 'api/image-proxy') !== false) $endpoint = 'image-proxy';
}

// -------------------------------------------------------------------------
// ROUTE: Image Proxy
// -------------------------------------------------------------------------
if ($endpoint === 'image-proxy') {
    $imageUrl = $_GET['url'] ?? '';
    if (!$imageUrl || strpos($imageUrl, 'http') !== 0) {
        http_response_code(400);
        echo json_encode(["error" => "Ugyldig URL"]);
        exit;
    }

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $imageUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 6);
    curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
    $data = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE) ?: 'image/jpeg';
    curl_close($ch);

    if ($httpCode === 200 && $data) {
        header("Content-Type: " . $contentType);
        header("Cache-Control: public, max-age=86400");
        echo $data;
        exit;
    } else {
        http_response_code($httpCode ?: 500);
        echo json_encode(["error" => "Kunne ikke hente billede"]);
        exit;
    }
}

// -------------------------------------------------------------------------
// ROUTE: Suggestions
// -------------------------------------------------------------------------
if ($endpoint === 'suggestions') {
    $q = trim(strtolower($_GET['q'] ?? ''));
    if (strlen($q) < 2) {
        echo json_encode([]);
        exit;
    }

    $suggestions = ["Chora Sfakion", "Kreta", "Korsika", "Danmark", "Kroatien", "Gran Canaria", "Dubai", "Spanien", "Frankrig", "Grækenland", "Tyskland", "Italien"];
    $matches = array_values(array_filter($suggestions, function($item) use ($q) {
        return stripos($item, $q) !== false;
    }));

    echo json_encode(array_slice($matches, 0, 6));
    exit;
}

// -------------------------------------------------------------------------
// ROUTE: Search
// -------------------------------------------------------------------------
if ($endpoint === 'search') {
    $rawInput = file_get_contents('php://input');
    $body = json_decode($rawInput, true) ?: [];
    $query = trim($body['query'] ?? ($_POST['query'] ?? ''));

    if (!$query) {
        http_response_code(400);
        echo json_encode(["error" => "Søgeterm er påkrævet"]);
        exit;
    }

    $normalized = strtolower($query);

    // 1. Check curated destinations
    foreach ($CURATED as $key => $data) {
        if (strpos($normalized, $key) !== false || strpos($key, $normalized) !== false) {
            echo json_encode([
                "locations" => $data['locations'],
                "summary" => $data['summary'],
                "sources" => []
            ]);
            exit;
        }
    }

    // 2. Fallback to Gemini API if key is configured
    if ($apiKey) {
        $prompt = "Du er en ekspert i naturiststeder og rejseguide. Find 4-6 specifikke naturiststeder (strande, resorts, camping) i/omkring: \"{$query}\". Svar som JSON array med felter: id, name, type (beach, resort, campsite, other), description, lat, lng, address, warning.";
        $apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" . urlencode($apiKey);

        $payload = [
            "contents" => [
                [
                    "parts" => [
                        ["text" => $prompt]
                    ]
                ]
            ],
            "generationConfig" => [
                "responseMimeType" => "application/json"
            ]
        ];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $apiUrl);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        $res = curl_exec($ch);
        $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($code === 200 && $res) {
            $json = json_decode($res, true);
            $text = $json['candidates'][0]['content']['parts'][0]['text'] ?? '[]';
            $parsed = json_decode($text, true);
            if (is_array($parsed)) {
                echo json_encode([
                    "locations" => $parsed,
                    "summary" => "Fandt " . count($parsed) . " naturist-destinationer for \"{$query}\".",
                    "sources" => []
                ]);
                exit;
            }
        }
    }

    // Default polite empty response if not found
    echo json_encode([
        "locations" => [],
        "summary" => "Ingen resultater fundet.",
        "sources" => []
    ]);
    exit;
}

http_response_code(404);
echo json_encode(["error" => "Ugyldigt API endpoint"]);
