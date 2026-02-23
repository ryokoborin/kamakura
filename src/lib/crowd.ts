import type { CrowdLevel, SpotCrowdData } from "@/types/crowd";
import { CROWD_LABELS } from "@/types/crowd";

function getSeasonalModifier(): number {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  // 桜: 3月下旬〜4月上旬
  if ((month === 3 && day >= 20) || (month === 4 && day <= 10)) return 1;
  // 紫陽花: 6月
  if (month === 6) return 1;
  // 紅葉: 11月下旬〜12月上旬
  if ((month === 11 && day >= 20) || (month === 12 && day <= 10)) return 1;
  // 正月: 1月1日〜3日
  if (month === 1 && day <= 3) return 1;

  return 0;
}

export function getCurrentCrowdLevel(
  crowdData: SpotCrowdData,
  hour?: number,
  dayOfWeek?: number
): CrowdLevel {
  const now = new Date();
  const h = hour ?? now.getHours();
  const d = dayOfWeek ?? now.getDay();

  const dayPattern = crowdData.weeklyPattern[d];
  if (!dayPattern) {
    return (crowdData.weeklyPattern[0]?.[h] ?? 2) as CrowdLevel;
  }

  let level: CrowdLevel = (dayPattern[h] ?? dayPattern[Math.floor(h / 2) * 2] ?? 2) as CrowdLevel;

  const modifier = getSeasonalModifier();
  if (modifier > 0 && crowdData.seasonalModifier) {
    const seasonal =
      crowdData.seasonalModifier.cherry_blossom ??
      crowdData.seasonalModifier.hydrangea ??
      crowdData.seasonalModifier.autumn_leaves ??
      crowdData.seasonalModifier.new_year ??
      0;
    if (seasonal > 0) {
      level = Math.min(4, level + 1) as CrowdLevel;
    }
  }

  return level as CrowdLevel;
}

export function getCrowdRecommendation(level: CrowdLevel): string {
  switch (level) {
    case 1:
      return "今がチャンス！";
    case 2:
      return "まだ余裕あり";
    case 3:
      return "混雑しています";
    case 4:
      return "ピーク時です。別の時間帯を検討を";
    default:
      return "";
  }
}

export function getBestTimeToday(
  crowdData: SpotCrowdData,
  dayOfWeek?: number
): string {
  const d = dayOfWeek ?? new Date().getDay();
  const dayPattern = crowdData.weeklyPattern[d] ?? crowdData.weeklyPattern[0];

  if (!dayPattern) return "データなし";

  let bestHour = 8;
  let bestLevel: CrowdLevel = 4;

  for (let h = 8; h <= 18; h++) {
    const level = (dayPattern[h] ?? 2) as CrowdLevel;
    if (level < bestLevel) {
      bestLevel = level;
      bestHour = h;
    }
  }

  const endHour = Math.min(bestHour + 2, 20);
  return `${bestHour}:00〜${endHour}:00が狙い目`;
}

export function getCrowdStatus(
  spotId: string,
  crowdData: SpotCrowdData
): { level: CrowdLevel; label: string; recommendation: string; bestTimeToday: string } {
  const level = getCurrentCrowdLevel(crowdData);
  return {
    level,
    label: CROWD_LABELS[level],
    recommendation: getCrowdRecommendation(level),
    bestTimeToday: getBestTimeToday(crowdData),
  };
}

export function getHourlyCrowdLevels(
  crowdData: SpotCrowdData,
  dayOfWeek?: number
): { hour: number; level: CrowdLevel }[] {
  const d = dayOfWeek ?? new Date().getDay();
  const dayPattern = crowdData.weeklyPattern[d] ?? crowdData.weeklyPattern[0] ?? {};

  return Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    level: (dayPattern[i] ?? 2) as CrowdLevel,
  }));
}
