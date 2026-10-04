import { NaturistLocation, SearchResult } from "./types";
import { searchCuratedDatabase, ALL_SUGGESTIONS } from "./curatedDestinations";

// Helper to construct API URLs that automatically adapt to subfolders (like /tools/naturistfinder/)
export function getApiUrl(endpoint: string): string {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  if (typeof window !== 'undefined') {
    const currentHref = window.location.href.split('?')[0].split('#')[0];
    const baseHref = currentHref.endsWith('/') ? currentHref : currentHref + '/';
    return new URL(cleanEndpoint, baseHref).href;
  }
  return `/${cleanEndpoint}`;
}

// Local storage key for user-provided Gemini API key
const API_KEY_STORAGE_KEY = 'naturist_gemini_api_key';

export function getSavedApiKey(): string {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(API_KEY_STORAGE_KEY) || '';
  }
  return '';
}

export function saveApiKey(key: string): void {
  if (typeof window !== 'undefined') {
    const trimmed = key.trim();
    if (trimmed) {
      localStorage.setItem(API_KEY_STORAGE_KEY, trimmed);
    } else {
      localStorage.removeItem(API_KEY_STORAGE_KEY);
    }
  }
}

// Check if backend or client has an active API key
export async function checkApiKeyStatus(): Promise<{ hasBackendKey: boolean; hasClientKey: boolean }> {
  const clientKey = getSavedApiKey();
  let hasBackendKey = false;

  try {
    const res = await fetch(getApiUrl("api/status"), { signal: AbortSignal.timeout(3000) });
    if (res.ok) {
      const data = await res.json();
      hasBackendKey = Boolean(data.hasApiKey);
    }
  } catch {
    // Backend unreachable or status endpoint not responding
  }

  return {
    hasBackendKey,
    hasClientKey: Boolean(clientKey)
  };
}

// Test an API key against Gemini API directly from browser
export async function testGeminiApiKey(key: string): Promise<{ success: boolean; message: string }> {
  const trimmed = key.trim();
  if (!trimmed) {
    return { success: false, message: "Indtast venligst en gyldig nøgle" };
  }
  if (!trimmed.startsWith("AIzaSy")) {
    return { success: false, message: "En Google Gemini API-nøgle starter typisk med 'AIzaSy...'" };
  }

  try {
    const testUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(trimmed)}`;
    const res = await fetch(testUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "Hello, reply with OK" }] }]
      }),
      signal: AbortSignal.timeout(8000)
    });

    if (res.ok) {
      return { success: true, message: "Nøglen virker perfekt! AI-søgning er nu aktiv i hele verden." };
    } else {
      const errJson = await res.json().catch(() => ({}));
      const msg = errJson?.error?.message || `HTTP ${res.status}`;
      return { success: false, message: `Google afviste nøglen: ${msg}` };
    }
  } catch (err: any) {
    return { success: false, message: `Kunne ikke forbinde til Google: ${err?.message || 'Netværksfejl'}` };
  }
}

// Direct client-side Gemini query (used if backend lacks key or is on a restricted host)
async function queryGeminiDirectly(query: string, apiKey: string): Promise<NaturistLocation[]> {
  const prompt = `Du er en førende international ekspert i naturisme, FKK og naturistrejser.
Find og returner 20-30 anerkendte, officielle og populære naturiststrande, naturistresorts, naturistcampingpladser og FKK-områder i eller omkring: "${query}".
Giv en bred geografisk dækning af landets kyster og regioner.
For resorts og campingpladser: angiv officiel hjemmeside i feltet 'url' hvis kendt.
Hvis destinationen forbyder naturisme ved lov (fx De Forenede Arabiske Emirater), angiv en advarsel i warning-feltet.
Svar som et rent JSON array med objekter indeholdende felterne: id, name, type (beach, resort, campsite, other), description, lat, lng, address, url, warning.`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: "application/json"
    }
  };

  const models = ["gemini-2.5-flash", "gemini-1.5-flash"];

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(16000)
      });

      if (res.ok) {
        const data = await res.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "[]";
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((loc: any, idx: number) => {
            const latNum = typeof loc.lat === 'number' ? loc.lat : parseFloat(loc.lat);
            const lngNum = typeof loc.lng === 'number' ? loc.lng : parseFloat(loc.lng);
            return {
              id: loc.id || `loc-ai-client-${Date.now()}-${idx}`,
              name: loc.name,
              type: loc.type || 'beach',
              description: loc.description,
              lat: Number.isFinite(latNum) ? latNum : 0,
              lng: Number.isFinite(lngNum) ? lngNum : 0,
              address: loc.address,
              url: loc.url,
              warning: loc.warning
            };
          });
        }
      }
    } catch (err) {
      console.warn(`Client Gemini fetch with ${model} failed, trying next:`, err);
    }
  }

  return [];
}

// Cache for search suggestions and results on client
const suggestionCache = new Map<string, string[]>();
const searchCache = new Map<string, SearchResult>();

function getLocalStoredSearch(key: string): SearchResult | null {
  try {
    const raw = localStorage.getItem(`naturist_search_${key}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.locations) && parsed.locations.length > 0) {
        return parsed;
      }
    }
  } catch {}
  return null;
}

function setLocalStoredSearch(key: string, data: SearchResult) {
  try {
    localStorage.setItem(`naturist_search_${key}`, JSON.stringify(data));
  } catch {}
}

export async function getSuggestions(query: string): Promise<string[]> {
  const trimmed = query.trim().toLowerCase();
  if (trimmed.length < 2) return [];

  if (suggestionCache.has(trimmed)) {
    return suggestionCache.get(trimmed)!;
  }

  // First filter from client database
  const localMatches = ALL_SUGGESTIONS.filter(item => 
    item.toLowerCase().includes(trimmed)
  );

  try {
    const res = await fetch(getApiUrl(`api/suggestions?q=${encodeURIComponent(trimmed)}`));
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const merged = Array.from(new Set([...data, ...localMatches])).slice(0, 8);
        suggestionCache.set(trimmed, merged);
        return merged;
      }
    }
  } catch {
    // Network or server error - silently fall back to local matches
  }

  const result = localMatches.slice(0, 8);
  suggestionCache.set(trimmed, result);
  return result;
}

export async function searchNaturistPlaces(
  query: string,
  userLocation?: { lat: number; lng: number },
  forceAI: boolean = false
): Promise<SearchResult> {
  const trimmed = query.trim();
  const clientKey = getSavedApiKey();
  const cacheKey = `${trimmed.toLowerCase()}_${userLocation ? `${userLocation.lat},${userLocation.lng}` : 'none'}_${forceAI ? 'ai' : 'std'}`;

  if (!forceAI) {
    if (searchCache.has(cacheKey)) {
      return searchCache.get(cacheKey)!;
    }
    const stored = getLocalStoredSearch(cacheKey);
    if (stored && stored.locations.length > 0) {
      searchCache.set(cacheKey, stored);
      return stored;
    }
  }

  // 1. Check client-side curated database immediately
  const curatedResult = searchCuratedDatabase(trimmed);

  // 2. Attempt API request to backend (PHP or Node)
  let backendData: SearchResult | null = null;
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json"
    };
    if (clientKey) {
      headers["X-Gemini-Key"] = clientKey;
    }

    const res = await fetch(getApiUrl("api/search"), {
      method: "POST",
      headers,
      body: JSON.stringify({
        query: trimmed,
        userPos: userLocation,
        includeAI: true,
        apiKey: clientKey || undefined
      })
    });

    if (res.ok) {
      const data: SearchResult = await res.json();
      if (data && Array.isArray(data.locations) && data.locations.length > 0) {
        backendData = data;
        // If backend returned a comprehensive AI result (> 10 locations), use it directly!
        if (data.locations.length > 10) {
          searchCache.set(cacheKey, data);
          setLocalStoredSearch(cacheKey, data);
          return data;
        }
      }
    }
  } catch (err) {
    console.warn("Backend API not reachable or error, checking client AI fallback:", err);
  }

  // 3. If backend returned <= 10 results (e.g. backend lacks API key on cPanel),
  // but the client has an API key configured, run Gemini directly in browser!
  if (clientKey) {
    try {
      const directAiPlaces = await queryGeminiDirectly(trimmed, clientKey);
      if (directAiPlaces.length > 0) {
        // Merge with curated or backend places without duplicates
        const base = backendData?.locations || curatedResult?.locations || [];
        const seenNames = new Set(base.map(l => l.name.toLowerCase()));
        const combined = [...base];

        for (const loc of directAiPlaces) {
          const normName = loc.name.toLowerCase();
          if (!seenNames.has(normName)) {
            combined.push(loc);
            seenNames.add(normName);
          }
        }

        const result: SearchResult = {
          locations: combined,
          summary: `Fandt ${combined.length} naturist-destinationer for "${trimmed}".`,
          sources: []
        };
        searchCache.set(cacheKey, result);
        setLocalStoredSearch(cacheKey, result);
        return result;
      }
    } catch (clientErr) {
      console.warn("Client Gemini direct search failed:", clientErr);
    }
  }

  // 4. Return backend data if available
  if (backendData && backendData.locations.length > 0) {
    searchCache.set(cacheKey, backendData);
    setLocalStoredSearch(cacheKey, backendData);
    return backendData;
  }

  // 5. Fall back to curated database matches
  if (curatedResult && curatedResult.locations.length > 0) {
    searchCache.set(cacheKey, curatedResult);
    setLocalStoredSearch(cacheKey, curatedResult);
    return curatedResult;
  }

  // 6. Return polite empty result
  return {
    locations: [],
    summary: `Vi kunne ikke finde specifikke naturiststeder i "${trimmed}". Prøv et andet land eller område.`,
    sources: []
  };
}
