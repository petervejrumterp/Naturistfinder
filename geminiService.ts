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

// Cache for search suggestions and results on client
const suggestionCache = new Map<string, string[]>();
const searchCache = new Map<string, SearchResult>();

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
        // Merge and deduplicate
        const merged = Array.from(new Set([...data, ...localMatches])).slice(0, 6);
        suggestionCache.set(trimmed, merged);
        return merged;
      }
    }
  } catch (err) {
    // Network or server error - silently fall back to local matches
  }

  const result = localMatches.slice(0, 6);
  suggestionCache.set(trimmed, result);
  return result;
}

export async function searchNaturistPlaces(
  query: string,
  userLocation?: { lat: number; lng: number }
): Promise<SearchResult> {
  const trimmed = query.trim();
  const cacheKey = `${trimmed.toLowerCase()}_${userLocation ? `${userLocation.lat},${userLocation.lng}` : 'none'}`;

  if (searchCache.has(cacheKey)) {
    return searchCache.get(cacheKey)!;
  }

  // 1. Check client-side curated database immediately
  const curatedResult = searchCuratedDatabase(trimmed);

  // 2. Attempt API request to backend (PHP or Node)
  try {
    const res = await fetch(getApiUrl("api/search"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: trimmed,
        userPos: userLocation
      })
    });

    if (res.ok) {
      const data: SearchResult = await res.json();
      if (data && Array.isArray(data.locations) && data.locations.length > 0) {
        searchCache.set(cacheKey, data);
        return data;
      }
    }
  } catch (err) {
    console.warn("Backend API not reachable or error, checking fallback:", err);
  }

  // 3. If backend returned 0 results or failed, but curated has data, return curated!
  if (curatedResult && curatedResult.locations.length > 0) {
    searchCache.set(cacheKey, curatedResult);
    return curatedResult;
  }

  // 4. Return polite empty result
  return {
    locations: [],
    summary: `Vi kunne ikke finde specifikke naturiststeder i "${trimmed}".`,
    sources: []
  };
}

