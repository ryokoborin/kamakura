export type SpotCategory = "temple" | "food" | "cafe" | "beach" | "shopping" | "other";

export const CATEGORY_LABELS: Record<SpotCategory, string> = {
  temple: "寺社",
  food: "グルメ",
  cafe: "カフェ",
  beach: "ビーチ",
  shopping: "ショッピング",
  other: "その他",
};

export interface Spot {
  id: string;
  name: string;
  nameEn?: string;
  areaId: string;
  category: SpotCategory;
  description: string;
  address: string;
  lat: number;
  lng: number;
  openingHours?: string;
  closedDays?: string;
  admission?: string;
  imageUrl: string;
  nearbySpotIds?: string[];
}

export interface Area {
  id: string;
  name: string;
  description: string;
  spotIds: string[];
  centerLat: number;
  centerLng: number;
  nearestStation: string;
  accessFromStation?: string;
}
