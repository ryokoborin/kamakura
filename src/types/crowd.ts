export type CrowdLevel = 1 | 2 | 3 | 4;

export const CROWD_LABELS: Record<CrowdLevel, string> = {
  1: "空いている",
  2: "やや混雑",
  3: "混雑",
  4: "非常に混雑",
};

export const CROWD_COLORS: Record<CrowdLevel, string> = {
  1: "#4CAF50",
  2: "#FFC107",
  3: "#FF9800",
  4: "#F44336",
};

export const CROWD_TAILWIND: Record<CrowdLevel, string> = {
  1: "bg-crowd-empty",
  2: "bg-crowd-moderate",
  3: "bg-crowd-busy",
  4: "bg-crowd-veryBusy",
};

export interface SpotCrowdData {
  spotId: string;
  weeklyPattern: Record<number, Record<number, CrowdLevel>>;
  seasonalModifier?: {
    cherry_blossom?: number;
    hydrangea?: number;
    autumn_leaves?: number;
    new_year?: number;
  };
  lastUpdated: string;
}

export interface CrowdStatus {
  spotId: string;
  currentLevel: CrowdLevel;
  label: string;
  recommendation: string;
  bestTimeToday: string;
}
