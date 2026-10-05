import { NaturistLocation, SearchResult } from "./types";
import { searchCuratedDatabase, ALL_SUGGESTIONS } from "./curatedDestinations";

// Helper to construct API URLs that automatically adapt to subfolders (like /tools/naturistfinder/)
export function getApiUrl(endpoint: string): string {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  if (typeof window !== 'undefined') {
    let pathname = window.location.pathname;
    if (pathname.includes('.')) {
      pathname = pathname.substring(0, pathname.lastIndexOf('/') + 1);
    } else if (!pathname.endsWith('/')) {
      pathname = pathname + '/';
    }
    const origin = window.location.origin;
    const baseHref = origin + pathname;
    return new URL(cleanEndpoint, baseHref).href;
  }
  return `/${cleanEndpoint}`;
}

// Local storage key for user-provided Gemini API key
const API_KEY_STORAGE_KEY = 'naturist_gemini_api_key';
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000; // 1 month

export interface CachedSearchResult extends SearchResult {
  timestamp?: number;
  query?: string;
  isStale?: boolean;
  isRecent?: boolean;
}

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
const searchCache = new Map<string, CachedSearchResult>();

function getLocalStoredSearch(key: string): CachedSearchResult | null {
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
    const toStore: CachedSearchResult = {
      ...data,
      timestamp: (data as any).timestamp || Date.now(),
      query: key
    };
    localStorage.setItem(`naturist_search_${key}`, JSON.stringify(toStore));
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

// Helper to execute thorough remote or client AI search
async function executeRemoteOrAiSearch(
  query: string,
  userLocation?: { lat: number; lng: number },
  isRefresh: boolean = false
): Promise<SearchResult | null> {
  const trimmed = query.trim();
  const clientKey = getSavedApiKey();
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
        refresh: isRefresh,
        apiKey: clientKey || undefined
      })
    });

    if (res.ok) {
      const data: SearchResult = await res.json();
      if (data && Array.isArray(data.locations) && data.locations.length > 0) {
        backendData = data;
        return backendData;
      }
    }
  } catch (err) {
    console.warn("Backend API not reachable or error, checking client AI fallback:", err);
  }

  // If backend returned no results or is unreachable, but client has Gemini API key:
  if (clientKey) {
    try {
      const directAiPlaces = await queryGeminiDirectly(trimmed, clientKey);
      if (directAiPlaces.length > 0) {
        return {
          locations: directAiPlaces,
          summary: `Fandt ${directAiPlaces.length} naturist-destinationer for "${trimmed}".`,
          sources: []
        };
      }
    } catch (clientErr) {
      console.warn("Client Gemini direct search failed:", clientErr);
    }
  }

  return backendData;
}

export interface SearchOptions {
  userLocation?: { lat: number; lng: number };
  forceRefresh?: boolean;
  onBackgroundUpdate?: (refreshed: SearchResult) => void;
}

export async function searchNaturistPlaces(
  query: string,
  userLocationOrOptions?: { lat: number; lng: number } | SearchOptions,
  forceAI: boolean = false,
  onBackgroundUpdate?: (refreshed: SearchResult) => void
): Promise<SearchResult> {
  const trimmed = query.trim();
  if (!trimmed) {
    return { locations: [], summary: "Indtast venligst en destination", sources: [] };
  }

  // Handle flexible options
  let userLocation: { lat: number; lng: number } | undefined;
  let forceRefresh = forceAI;
  let bgUpdateCb = onBackgroundUpdate;

  if (userLocationOrOptions && 'onBackgroundUpdate' in userLocationOrOptions) {
    userLocation = userLocationOrOptions.userLocation;
    forceRefresh = Boolean(userLocationOrOptions.forceRefresh);
    bgUpdateCb = userLocationOrOptions.onBackgroundUpdate;
  } else if (userLocationOrOptions && 'lat' in userLocationOrOptions) {
    userLocation = userLocationOrOptions as { lat: number; lng: number };
  }

  const cleanKey = trimmed.toLowerCase().replace(/\./g, "").trim();

  // 1. Check in-memory cache and localStorage
  const inMemory = searchCache.get(cleanKey);
  const stored = getLocalStoredSearch(cleanKey);
  const existingCached = inMemory || stored;

  if (existingCached && Array.isArray(existingCached.locations) && existingCached.locations.length > 0) {
    const ts = (existingCached as any).timestamp || 0;
    const age = Date.now() - ts;
    const isRecent = age < THIRTY_DAYS_MS && ts > 0;

    // A. If data exists AND was searched recently (< 30 days) and no force refresh:
    // Return immediately!
    if (isRecent && !forceRefresh) {
      searchCache.set(cleanKey, existingCached);
      return existingCached;
    }

    // B. If data exists BUT is older than 30 days (not searched recently):
    // Show the existing data immediately to user, and do a check in the background!
    if (!forceRefresh) {
      searchCache.set(cleanKey, existingCached);

      // Trigger background check
      setTimeout(async () => {
        try {
          const fresh = await executeRemoteOrAiSearch(trimmed, userLocation, true);
          if (fresh && Array.isArray(fresh.locations) && fresh.locations.length > 0) {
            // Merge unique
            const baseNames = new Set(existingCached.locations.map(l => l.name.toLowerCase()));
            const merged = [...existingCached.locations];
            for (const loc of fresh.locations) {
              if (!baseNames.has(loc.name.toLowerCase())) {
                merged.push(loc);
                baseNames.add(loc.name.toLowerCase());
              }
            }
            const updatedResult: SearchResult = {
              locations: merged,
              summary: `Fandt ${merged.length} naturist-destinationer for "${trimmed}".`,
              sources: []
            };
            setLocalStoredSearch(cleanKey, updatedResult);
            searchCache.set(cleanKey, updatedResult);
            if (bgUpdateCb) {
              bgUpdateCb(updatedResult);
            }
          }
        } catch (e) {
          console.warn("Background refresh error:", e);
        }
      }, 50);

      return existingCached;
    }
  }

  // 2. Check curated database
  const curatedResult = searchCuratedDatabase(trimmed);

  // If curated database has comprehensive verified destinations (>= 20 locations) and not force refreshing:
  if (curatedResult && curatedResult.locations.length >= 20 && !forceRefresh) {
    setLocalStoredSearch(cleanKey, curatedResult);
    searchCache.set(cleanKey, curatedResult);
    return curatedResult;
  }

  // If curated has some locations (e.g. 4-15 locations) and not forceRefresh:
  if (curatedResult && curatedResult.locations.length > 0 && !forceRefresh) {
    setLocalStoredSearch(cleanKey, curatedResult);
    searchCache.set(cleanKey, curatedResult);

    // Also trigger background enrichment to find even more
    setTimeout(async () => {
      try {
        const fresh = await executeRemoteOrAiSearch(trimmed, userLocation, false);
        if (fresh && Array.isArray(fresh.locations) && fresh.locations.length > 0) {
          const baseNames = new Set(curatedResult.locations.map(l => l.name.toLowerCase()));
          const merged = [...curatedResult.locations];
          for (const loc of fresh.locations) {
            if (!baseNames.has(loc.name.toLowerCase())) {
              merged.push(loc);
              baseNames.add(loc.name.toLowerCase());
            }
          }
          const updatedResult: SearchResult = {
            locations: merged,
            summary: `Fandt ${merged.length} naturist-destinationer for "${trimmed}".`,
            sources: []
          };
          setLocalStoredSearch(cleanKey, updatedResult);
          searchCache.set(cleanKey, updatedResult);
          if (bgUpdateCb) {
            bgUpdateCb(updatedResult);
          }
        }
      } catch {}
    }, 50);

    return curatedResult;
  }

  // 3. No data exists yet (Er der ikke søgt):
  // Perform a thorough search around data, save, and return!
  const remoteResult = await executeRemoteOrAiSearch(trimmed, userLocation, forceRefresh);
  if (remoteResult && Array.isArray(remoteResult.locations) && remoteResult.locations.length > 0) {
    setLocalStoredSearch(cleanKey, remoteResult);
    searchCache.set(cleanKey, remoteResult);
    return remoteResult;
  }

  if (curatedResult && curatedResult.locations.length > 0) {
    setLocalStoredSearch(cleanKey, curatedResult);
    searchCache.set(cleanKey, curatedResult);
    return curatedResult;
  }

  return {
    locations: [],
    summary: `Vi kunne ikke finde specifikke naturiststeder i "${trimmed}". Prøv et andet land eller område.`,
    sources: []
  };
}
