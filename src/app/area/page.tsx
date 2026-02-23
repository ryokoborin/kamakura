import Link from "next/link";
import { areas } from "@/data/areas";
import { getCrowdData } from "@/data/crowd-data";
import { getCurrentCrowdLevel } from "@/lib/crowd";
import { AreaCard } from "@/components/spot/AreaCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

function getAreaAvgLevel(areaId: string): 1 | 2 | 3 | 4 {
  const area = areas.find((a) => a.id === areaId);
  if (!area) return 2;
  let sum = 0;
  let count = 0;
  for (const spotId of area.spotIds) {
    const crowdData = getCrowdData(spotId);
    if (crowdData) {
      sum += getCurrentCrowdLevel(crowdData);
      count++;
    }
  }
  if (count === 0) return 2;
  return Math.round(sum / count) as 1 | 2 | 3 | 4;
}

export default function AreaIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "エリアガイド" }]} />

      <h1 className="font-serif text-3xl md:text-4xl font-bold text-base-ink mb-8">
        エリア別ガイド
      </h1>
      <p className="text-base-ink/80 mb-12 max-w-2xl">
        鎌倉を5つのエリアに分けてご紹介。各エリアの混雑状況を確認して、効率的に観光を楽しみましょう。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map((area) => (
          <AreaCard
            key={area.id}
            area={area}
            avgCrowdLevel={getAreaAvgLevel(area.id)}
            spotCount={area.spotIds.length}
          />
        ))}
      </div>
    </div>
  );
}
