"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { spots } from "@/data/spots";
import { getCrowdData } from "@/data/crowd-data";
import { getCurrentCrowdLevel } from "@/lib/crowd";
import { CROWD_COLORS, CROWD_LABELS } from "@/types/crowd";
import { CATEGORY_LABELS } from "@/types/spot";
import type { SpotCategory } from "@/types/spot";

const MapComponent = dynamic(() => import("@/components/map/CrowdMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-base-ink/5 rounded-xl flex items-center justify-center">
      <p className="text-base-ink/60">地図を読み込み中...</p>
    </div>
  ),
});

const categoryOptions: { value: SpotCategory | "all"; label: string }[] = [
  { value: "all", label: "すべて" },
  { value: "temple", label: "寺社" },
  { value: "food", label: "グルメ" },
  { value: "cafe", label: "カフェ" },
  { value: "beach", label: "ビーチ" },
  { value: "shopping", label: "ショッピング" },
  { value: "other", label: "その他" },
];

export default function MapPage() {
  const [selectedHour, setSelectedHour] = useState(new Date().getHours());
  const [categoryFilter, setCategoryFilter] = useState<SpotCategory | "all">("all");
  const [crowdFilter, setCrowdFilter] = useState<number | "all">("all");

  const filteredSpots = useMemo(() => {
    return spots.filter((spot) => {
      if (categoryFilter !== "all" && spot.category !== categoryFilter) return false;
      const crowdData = getCrowdData(spot.id);
      if (!crowdData) return true;
      const level = getCurrentCrowdLevel(crowdData, selectedHour);
      if (crowdFilter !== "all" && level !== crowdFilter) return false;
      return true;
    });
  }, [categoryFilter, crowdFilter, selectedHour]);

  const mapSpots = useMemo(() => {
    return filteredSpots.map((spot) => {
      const crowdData = getCrowdData(spot.id);
      const level = crowdData
        ? getCurrentCrowdLevel(crowdData, selectedHour)
        : 2;
      return { ...spot, crowdLevel: level };
    });
  }, [filteredSpots, selectedHour]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "混雑マップ" }]} />

      <h1 className="font-serif text-3xl font-bold text-base-ink mb-6">
        混雑マップ
      </h1>

      {/* フィルター */}
      <div className="flex flex-col gap-4 mb-6 p-4 bg-white rounded-xl shadow-sm border border-base-ink/5">
        <div>
          <label className="block text-sm font-medium text-base-ink mb-2">
            時間帯シミュレーション
          </label>
          <input
            type="range"
            min={8}
            max={20}
            value={selectedHour}
            onChange={(e) => setSelectedHour(Number(e.target.value))}
            className="w-full accent-accent-vermillion"
          />
          <p className="text-sm text-base-ink/70 mt-1">{selectedHour}:00 時点</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-base-ink mb-2">
              カテゴリ
            </label>
            <select
              value={categoryFilter}
              onChange={(e) =>
                setCategoryFilter(e.target.value as SpotCategory | "all")
              }
              className="px-3 py-2 border border-base-ink/20 rounded-lg bg-white"
            >
              {categoryOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-base-ink mb-2">
              混雑度
            </label>
            <select
              value={crowdFilter}
              onChange={(e) =>
                setCrowdFilter(
                  e.target.value === "all" ? "all" : Number(e.target.value)
                )
              }
              className="px-3 py-2 border border-base-ink/20 rounded-lg bg-white"
            >
              <option value="all">すべて</option>
              {([1, 2, 3, 4] as const).map((l) => (
                <option key={l} value={l}>
                  {CROWD_LABELS[l]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 凡例 */}
      <div className="flex flex-wrap gap-4 mb-6">
        {([1, 2, 3, 4] as const).map((level) => (
          <div key={level} className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: CROWD_COLORS[level] }}
            />
            <span className="text-sm">{CROWD_LABELS[level]}</span>
          </div>
        ))}
      </div>

      {/* 地図 */}
      <div className="rounded-xl overflow-hidden border border-base-ink/10 shadow-sm">
        <MapComponent spots={mapSpots} selectedHour={selectedHour} />
      </div>
    </div>
  );
}
