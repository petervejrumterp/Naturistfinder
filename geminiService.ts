import { NaturistLocation, SearchResult } from "./types";

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

  try {
    const res = await fetch(getApiUrl(`api/suggestions?q=${encodeURIComponent(trimmed)}`));
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    if (Array.isArray(data)) {
      suggestionCache.set(trimmed, data);
      return data;
    }
    return [];
  } catch (err) {
    console.warn("Error fetching suggestions:", err);
    return [];
  }
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

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || "Der opstod en fejl under søgningen. Prøv venligst igen.");
  }

  const data: SearchResult = await res.json();
  if (data && Array.isArray(data.locations) && data.locations.length > 0) {
    searchCache.set(cacheKey, data);
  }

  return data;
}
