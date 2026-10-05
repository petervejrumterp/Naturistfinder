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

// 1. Load API Key from config.php, environment, incoming request, or .env file
$apiKey = '';
if (file_exists(__DIR__ . '/config.php')) {
    @include_once __DIR__ . '/config.php';
    if (defined('GEMINI_API_KEY')) $apiKey = GEMINI_API_KEY;
    elseif (defined('API_KEY')) $apiKey = API_KEY;
    elseif (isset($GEMINI_API_KEY) && !empty($GEMINI_API_KEY)) $apiKey = $GEMINI_API_KEY;
    elseif (isset($apiKey) && !empty($apiKey)) $apiKey = $apiKey;
    elseif (isset($api_key) && !empty($api_key)) $apiKey = $api_key;
    
    // Fallback: regex search config.php content if variables were defined differently
    if (!$apiKey) {
        $cfgContent = @file_get_contents(__DIR__ . '/config.php');
        if ($cfgContent && preg_match('/AIzaSy[A-Za-z0-9_-]{33}/', $cfgContent, $m)) {
            $apiKey = $m[0];
        }
    }
}
if (!$apiKey) {
    $apiKey = getenv('GEMINI_API_KEY') ?: (getenv('API_KEY') ?: ($_ENV['GEMINI_API_KEY'] ?? ($_SERVER['GEMINI_API_KEY'] ?? '')));
}
if (!$apiKey && !empty($_SERVER['HTTP_X_GEMINI_KEY'])) {
    $apiKey = trim($_SERVER['HTTP_X_GEMINI_KEY']);
}
if (!$apiKey && file_exists(__DIR__ . '/.env')) {
    $envLines = @file(__DIR__ . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
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

// 2. Load Curated Locations Database (from curated.json)
$curatedLocations = [];
$curatedSuggestions = [];
if (file_exists(__DIR__ . '/curated.json')) {
    $jsonContent = file_get_contents(__DIR__ . '/curated.json');
    $parsedJson = json_decode($jsonContent, true);
    if (is_array($parsedJson)) {
        $curatedLocations = $parsedJson['locations'] ?? [];
        $curatedSuggestions = $parsedJson['suggestions'] ?? [];
    }
}

// Determine endpoint
$uri = $_SERVER['REQUEST_URI'] ?? '';
$endpoint = $_GET['endpoint'] ?? '';
if (!$endpoint) {
    if (strpos($uri, 'api/suggestions') !== false) $endpoint = 'suggestions';
    elseif (strpos($uri, 'api/search') !== false) $endpoint = 'search';
    elseif (strpos($uri, 'api/image-proxy') !== false) $endpoint = 'image-proxy';
    elseif (strpos($uri, 'api/status') !== false) $endpoint = 'status';
}

// -------------------------------------------------------------------------
// ROUTE: Status & Diagnostics
// -------------------------------------------------------------------------
if ($endpoint === 'status') {
    echo json_encode([
        "status" => "ok",
        "hasApiKey" => !empty($apiKey),
        "locationsCount" => count($curatedLocations),
        "phpVersion" => phpversion()
    ]);
    exit;
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
    $q = trim(mb_strtolower($_GET['q'] ?? '', 'UTF-8'));
    if (mb_strlen($q, 'UTF-8') < 2) {
        echo json_encode([]);
        exit;
    }

    $suggestions = !empty($curatedSuggestions) ? $curatedSuggestions : [
        "Frankrig", "Menorca", "Mallorca", "Ibiza", "Spanien", "Korsika", "Kroatien",
        "Danmark", "Gran Canaria", "Tenerife", "Lanzarote", "Kreta", "Grækenland",
        "Cap d'Agde", "Montalivet", "Euronat", "Vera Playa", "Costa Natura",
        "Es Trenc", "Cala Macarelleta", "Tyskland", "Italien", "Portugal", "Bornholm", "Dubai"
    ];

    $matches = array_values(array_filter($suggestions, function($item) use ($q) {
        return mb_stripos($item, $q, 0, 'UTF-8') !== false;
    }));

    echo json_encode(array_slice($matches, 0, 8));
    exit;
}

// -------------------------------------------------------------------------
// ROUTE: Search
// -------------------------------------------------------------------------
if ($endpoint === 'search') {
    $rawInput = file_get_contents('php://input');
    $body = json_decode($rawInput, true) ?: [];
    $query = trim($body['query'] ?? ($_POST['query'] ?? ''));

    if (!$apiKey && !empty($body['apiKey'])) {
        $apiKey = trim($body['apiKey']);
    }

    if (!$query) {
        http_response_code(400);
        echo json_encode(["error" => "Søgeterm er påkrævet"]);
        exit;
    }

    $normalized = mb_strtolower($query, 'UTF-8');
    $cleanNormalized = trim(str_replace('.', '', $normalized));
    if (in_array($cleanNormalized, ['usa', 'us', 'amerika', 'united states', 'united states of america', 'amerikas forenede stater', 'u s a'])) {
        $normalized = 'usa';
    }

    // 0. Match from Curated Database by Country, Region, Keywords, Name
    $matched = [];
    $seenIds = [];

    // First pass: Country, Region, or Keyword match (returns all matching places in that region/country)
    foreach ($curatedLocations as $loc) {
        $country = mb_strtolower($loc['country'] ?? '', 'UTF-8');
        $region = mb_strtolower($loc['region'] ?? '', 'UTF-8');
        $keywords = array_map(function($k) { return mb_strtolower($k, 'UTF-8'); }, $loc['keywords'] ?? []);

        $match = ($country === $normalized || $region === $normalized ||
                  (mb_strlen($country, 'UTF-8') >= 4 && mb_strpos($normalized, $country) !== false) ||
                  (mb_strlen($region, 'UTF-8') >= 4 && mb_strpos($normalized, $region) !== false) ||
                  (mb_strlen($normalized, 'UTF-8') >= 4 && mb_strpos($country, $normalized) !== false) ||
                  (mb_strlen($normalized, 'UTF-8') >= 4 && mb_strpos($region, $normalized) !== false));

        if (!$match) {
            foreach ($keywords as $kw) {
                if ($kw === $normalized ||
                    (mb_strlen($kw, 'UTF-8') >= 4 && mb_strlen($normalized, 'UTF-8') >= 4 &&
                     (mb_strpos($normalized, $kw) !== false || mb_strpos($kw, $normalized) !== false))) {
                    $match = true;
                    break;
                }
            }
        }

        if ($match && !isset($seenIds[$loc['id']])) {
            $matched[] = $loc;
            $seenIds[$loc['id']] = true;
        }
    }

    // Second pass: Name, Address, Description
    if (empty($matched)) {
        foreach ($curatedLocations as $loc) {
            $name = mb_strtolower($loc['name'] ?? '', 'UTF-8');
            $addr = mb_strtolower($loc['address'] ?? '', 'UTF-8');
            $desc = mb_strtolower($loc['description'] ?? '', 'UTF-8');

            if (mb_strpos($name, $normalized) !== false || mb_strpos($addr, $normalized) !== false || mb_strpos($desc, $normalized) !== false) {
                if (!isset($seenIds[$loc['id']])) {
                    $matched[] = $loc;
                    $seenIds[$loc['id']] = true;
                }
            }
        }
    }

    // If curated database has comprehensive results (20+ verified locations), return immediately
    if (count($matched) >= 20) {
        echo json_encode([
            "locations" => $matched,
            "summary" => "Fandt " . count($matched) . " verificerede naturist-destinationer for \"{$query}\".",
            "sources" => []
        ]);
        exit;
    }

    // Check persistent search cache for newly discovered queries
    $cacheFile = __DIR__ . '/search_cache.json';
    $isForceRefresh = !empty($input['refresh']) || !empty($input['forceRefresh']);
    if (file_exists($cacheFile)) {
        $cacheContent = @file_get_contents($cacheFile);
        if ($cacheContent) {
            $cachedMap = json_decode($cacheContent, true);
            if (!empty($cachedMap[$normalized]['locations']) && count($cachedMap[$normalized]['locations']) >= count($matched)) {
                $cachedEntry = $cachedMap[$normalized];
                $ts = $cachedEntry['timestamp'] ?? 0;
                $ageSeconds = (round(microtime(true) * 1000) - $ts) / 1000;
                $thirtyDaysSeconds = 30 * 86400;

                // If searched recently (< 30 days) and not force refreshing, return immediately
                if ($ageSeconds < $thirtyDaysSeconds && !$isForceRefresh) {
                    echo json_encode($cachedEntry);
                    exit;
                }
                // If searched > 30 days ago and not force refresh, return cached immediately for snappy UI
                if (!$isForceRefresh) {
                    $cachedEntry['isStale'] = true;
                    echo json_encode($cachedEntry);
                    exit;
                }
            }
        }
    }

    // 1. If NO Gemini API key is configured, return curated database matches immediately
    if (empty($apiKey) && !empty($matched)) {
        echo json_encode([
            "locations" => $matched,
            "summary" => "Fandt " . count($matched) . " verificerede naturist-destinationer for \"{$query}\".",
            "sources" => []
        ]);
        exit;
    }

    // 2. Query Gemini API when API key is configured to enrich or discover destinations
    if ($apiKey) {
        $prompt = "Du er en førende international ekspert i naturisme, FKK og naturistrejser.
Find og returner 20-30 specifikke, officielle og anerkendte naturiststrande, naturistcampingpladser, FKK-områder og naturistresorts i eller omkring: \"{$query}\".
Giv en bred geografisk dækning af landets kyster og regioner.
For resorts og campingpladser: angiv officiel hjemmeside i feltet 'url' hvis kendt.
Hvis destinationen forbyder naturisme ved lov (fx De Forenede Arabiske Emirater), angiv en advarsel i warning-feltet.
Svar som et rent JSON array med objekter indeholdende: id, name, type (beach, resort, campsite, other), description, lat, lng, address, url, warning.";

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
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        $res = curl_exec($ch);
        $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        // Model fallback: try gemini-1.5-flash if 2.5 returns non-200
        if ($code !== 200 || empty($res)) {
            $fallbackUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" . urlencode($apiKey);
            curl_setopt($ch, CURLOPT_URL, $fallbackUrl);
            $res = curl_exec($ch);
            $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        }
        curl_close($ch);

        if ($code === 200 && $res) {
            $json = json_decode($res, true);
            $text = $json['candidates'][0]['content']['parts'][0]['text'] ?? '[]';
            $parsed = json_decode($text, true);
            if (is_array($parsed) && count($parsed) > 0) {
                // Merge AI places with existing curated places without duplicates
                $allResults = $matched;
                $seenNames = [];
                foreach ($allResults as $m) {
                    $seenNames[mb_strtolower($m['name'], 'UTF-8')] = true;
                }
                foreach ($parsed as $aiLoc) {
                    $normName = mb_strtolower($aiLoc['name'] ?? '', 'UTF-8');
                    if ($normName && !isset($seenNames[$normName])) {
                        if (empty($aiLoc['id'])) {
                            $aiLoc['id'] = 'loc-ai-' . md5($normName);
                        }
                        $allResults[] = $aiLoc;
                        $seenNames[$normName] = true;
                    }
                }

                $finalResult = [
                    "timestamp" => round(microtime(true) * 1000),
                    "query" => $query,
                    "locations" => $allResults,
                    "summary" => "Fandt " . count($allResults) . " naturist-destinationer for \"{$query}\".",
                    "sources" => []
                ];

                // Save to persistent search cache on server
                $cacheData = [];
                if (file_exists($cacheFile)) {
                    $cRaw = @file_get_contents($cacheFile);
                    if ($cRaw) {
                        $cacheData = json_decode($cRaw, true) ?: [];
                    }
                }
                $cacheData[$normalized] = $finalResult;
                @file_put_contents($cacheFile, json_encode($cacheData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);

                echo json_encode($finalResult);
                exit;
            }
        }
    }

    if (!empty($matched)) {
        echo json_encode([
            "locations" => $matched,
            "summary" => "Fandt " . count($matched) . " verificerede naturist-destinationer for \"{$query}\".",
            "sources" => []
        ]);
        exit;
    }

    // Polite empty response if not found
    echo json_encode([
        "locations" => [],
        "summary" => "Vi kunne ikke finde specifikke naturiststeder i \"{$query}\". Prøv at søge på et land eller en større ø som f.eks. Menorca, Mallorca, Frankrig, Korsika eller Kroatien.",
        "sources" => []
    ]);
    exit;
}

http_response_code(404);
echo json_encode(["error" => "Ugyldigt API endpoint"]);
