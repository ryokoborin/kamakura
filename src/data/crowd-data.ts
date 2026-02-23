import type { SpotCrowdData } from "@/types/crowd";

// 時間帯ごとの混雑度テンプレート（0-23時）
// 1=空いている, 2=やや混雑, 3=混雑, 4=非常に混雑
const templeWeekday: Record<number, 1 | 2 | 3 | 4> = {
  6: 1,
  7: 1,
  8: 2,
  9: 3,
  10: 4,
  11: 4,
  12: 3,
  13: 4,
  14: 4,
  15: 3,
  16: 2,
  17: 2,
  18: 1,
  19: 1,
};
const templeWeekend: Record<number, 1 | 2 | 3 | 4> = {
  6: 1,
  7: 2,
  8: 3,
  9: 4,
  10: 4,
  11: 4,
  12: 4,
  13: 4,
  14: 4,
  15: 4,
  16: 3,
  17: 2,
  18: 1,
  19: 1,
};
const shoppingWeekday: Record<number, 1 | 2 | 3 | 4> = {
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 4,
  14: 3,
  15: 3,
  16: 3,
  17: 4,
  18: 3,
  19: 2,
  20: 1,
};
const shoppingWeekend: Record<number, 1 | 2 | 3 | 4> = {
  9: 2,
  10: 3,
  11: 4,
  12: 4,
  13: 4,
  14: 4,
  15: 4,
  16: 4,
  17: 4,
  18: 3,
  19: 2,
  20: 1,
};
const beachWeekday: Record<number, 1 | 2 | 3 | 4> = {
  6: 1,
  7: 1,
  8: 2,
  9: 2,
  10: 3,
  11: 3,
  12: 4,
  13: 4,
  14: 4,
  15: 3,
  16: 2,
  17: 1,
  18: 1,
};
const beachWeekend: Record<number, 1 | 2 | 3 | 4> = {
  6: 1,
  7: 2,
  8: 3,
  9: 4,
  10: 4,
  11: 4,
  12: 4,
  13: 4,
  14: 4,
  15: 3,
  16: 2,
  17: 1,
  18: 1,
};

function fillPattern(
  base: Record<number, 1 | 2 | 3 | 4>
): Record<number, 1 | 2 | 3 | 4> {
  const result: Record<number, 1 | 2 | 3 | 4> = {};
  let last = 2 as 1 | 2 | 3 | 4;
  for (let h = 0; h < 24; h++) {
    result[h] = (base[h] ?? last) as 1 | 2 | 3 | 4;
    last = result[h];
  }
  return result;
}

function createWeekly(
  weekday: Record<number, 1 | 2 | 3 | 4>,
  weekend?: Record<number, 1 | 2 | 3 | 4>
): Record<number, Record<number, 1 | 2 | 3 | 4>> {
  const wd = fillPattern(weekday);
  const we = fillPattern(weekend ?? weekday);
  return {
    0: we,
    1: wd,
    2: wd,
    3: wd,
    4: wd,
    5: wd,
    6: we,
  };
}

export const crowdDataMap: Record<string, SpotCrowdData> = {
  tsurugaoka: {
    spotId: "tsurugaoka",
    weeklyPattern: createWeekly(templeWeekday, templeWeekend),
    seasonalModifier: { cherry_blossom: 1, hydrangea: 0, autumn_leaves: 1, new_year: 1 },
    lastUpdated: "2025-01-15",
  },
  komachi: {
    spotId: "komachi",
    weeklyPattern: createWeekly(shoppingWeekday, shoppingWeekend),
    lastUpdated: "2025-01-15",
  },
  hokokuji: {
    spotId: "hokokuji",
    weeklyPattern: createWeekly(templeWeekday, templeWeekend),
    seasonalModifier: { hydrangea: 0 },
    lastUpdated: "2025-01-15",
  },
  daibutsu: {
    spotId: "daibutsu",
    weeklyPattern: createWeekly(templeWeekday, templeWeekend),
    seasonalModifier: { cherry_blossom: 1, hydrangea: 1, autumn_leaves: 1, new_year: 1 },
    lastUpdated: "2025-01-15",
  },
  hasedera: {
    spotId: "hasedera",
    weeklyPattern: createWeekly(templeWeekday, templeWeekend),
    seasonalModifier: { hydrangea: 1, cherry_blossom: 1 },
    lastUpdated: "2025-01-15",
  },
  kotokuin: {
    spotId: "kotokuin",
    weeklyPattern: createWeekly(templeWeekday, templeWeekend),
    seasonalModifier: { cherry_blossom: 1, hydrangea: 1 },
    lastUpdated: "2025-01-15",
  },
  engakuji: {
    spotId: "engakuji",
    weeklyPattern: createWeekly(templeWeekday, templeWeekend),
    seasonalModifier: { autumn_leaves: 1 },
    lastUpdated: "2025-01-15",
  },
  kenchoji: {
    spotId: "kenchoji",
    weeklyPattern: createWeekly(templeWeekday, templeWeekend),
    seasonalModifier: { autumn_leaves: 1 },
    lastUpdated: "2025-01-15",
  },
  meigetsuin: {
    spotId: "meigetsuin",
    weeklyPattern: createWeekly(templeWeekday, templeWeekend),
    seasonalModifier: { hydrangea: 1 },
    lastUpdated: "2025-01-15",
  },
  yuigahama: {
    spotId: "yuigahama",
    weeklyPattern: createWeekly(beachWeekday, beachWeekend),
    lastUpdated: "2025-01-15",
  },
  zaimokuza: {
    spotId: "zaimokuza",
    weeklyPattern: createWeekly(beachWeekday, beachWeekend),
    lastUpdated: "2025-01-15",
  },
  inamuragasaki: {
    spotId: "inamuragasaki",
    weeklyPattern: createWeekly(beachWeekday, beachWeekend),
    lastUpdated: "2025-01-15",
  },
  enoshima: {
    spotId: "enoshima",
    weeklyPattern: createWeekly(
      { ...templeWeekday, ...beachWeekday },
      { ...templeWeekend, ...beachWeekend }
    ),
    seasonalModifier: { cherry_blossom: 1, new_year: 1 },
    lastUpdated: "2025-01-15",
  },
  shichirigahama: {
    spotId: "shichirigahama",
    weeklyPattern: createWeekly(beachWeekday, beachWeekend),
    lastUpdated: "2025-01-15",
  },
  kamurayama: {
    spotId: "kamurayama",
    weeklyPattern: createWeekly(templeWeekday, templeWeekend),
    lastUpdated: "2025-01-15",
  },
};

export function getCrowdData(spotId: string): SpotCrowdData | undefined {
  return crowdDataMap[spotId];
}
