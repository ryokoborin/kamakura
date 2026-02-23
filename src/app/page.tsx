import Image from "next/image";
import Link from "next/link";
import { areas } from "@/data/areas";
import { spots } from "@/data/spots";
import { getCrowdData } from "@/data/crowd-data";
import { getCurrentCrowdLevel, getCrowdStatus } from "@/lib/crowd";
import { SpotCard } from "@/components/spot/SpotCard";
import { AreaCard } from "@/components/spot/AreaCard";
import { CrowdIndicator } from "@/components/crowd/CrowdIndicator";

function getEmptySpots() {
  const spotLevels = spots
    .map((spot) => {
      const crowdData = getCrowdData(spot.id);
      if (!crowdData) return null;
      const level = getCurrentCrowdLevel(crowdData);
      return { spot, level };
    })
    .filter((s): s is { spot: (typeof spots)[0]; level: 1 | 2 | 3 | 4 } => s !== null)
    .sort((a, b) => a.level - b.level);

  return spotLevels.slice(0, 5);
}

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

export default function HomePage() {
  const emptySpots = getEmptySpots();
  const now = new Date();
  const currentHour = now.getHours();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[300px] max-h-[500px]">
        <Image
          src="/photo/tsurugaoka.jpg"
          alt="鎌倉の風景"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-main-blue/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            今の鎌倉の混み具合
          </h1>
          <p className="text-white/95 text-lg md:text-xl max-w-2xl">
            今、空いている鎌倉を見つけよう
          </p>
          <p className="text-white/80 text-sm mt-2">
            {currentHour}時現在の混雑状況
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 今空いているスポット TOP5 */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-base-ink mb-6">
            今空いているスポット TOP5
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {emptySpots.map(({ spot, level }) => (
              <SpotCard key={spot.id} spot={spot} crowdLevel={level} />
            ))}
          </div>
        </section>

        {/* エリア別混雑サマリー */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-base-ink mb-6">
            エリア別混雑サマリー
          </h2>
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
        </section>

        {/* 主要スポット一覧 */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-base-ink mb-6">
            主要スポットの混雑状況
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {spots.slice(0, 9).map((spot) => {
              const crowdData = getCrowdData(spot.id);
              const level = crowdData
                ? getCurrentCrowdLevel(crowdData)
                : (2 as const);
              return (
                <SpotCard key={spot.id} spot={spot} crowdLevel={level} />
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 bg-main-blue/5 rounded-2xl">
          <h2 className="font-serif text-2xl font-bold text-base-ink mb-4">
            地図で混雑を確認
          </h2>
          <p className="text-base-ink/70 mb-6 max-w-xl mx-auto">
            インタラクティブな地図で鎌倉全体の混雑状況をチェック。時間帯スライダーで予測も可能。
          </p>
          <Link
            href="/map"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-vermillion text-white font-bold rounded-xl hover:bg-accent-vermillion/90 transition-colors"
          >
            混雑マップを見る
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
          </Link>
        </section>
      </div>
    </div>
  );
}
