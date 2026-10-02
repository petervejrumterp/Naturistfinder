
export interface NaturistLocation {
  id: string;
  name: string;
  type: 'beach' | 'resort' | 'campsite' | 'other';
  description: string;
  lat: number;
  lng: number;
  address?: string;
  rating?: number;
  url?: string;
  image?: string;
  warning?: string; // Advarsel om lokale regler/lovgivning
}

export interface SearchResult {
  locations: NaturistLocation[];
  summary: string;
  sources: { title: string; uri: string }[];
}

export enum LocationType {
  BEACH = 'beach',
  RESORT = 'resort',
  CAMPSITE = 'campsite',
  OTHER = 'other'
}
