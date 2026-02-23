import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getSpotById } from "@/data/spots";
import { getAreaById } from "@/data/areas";
import { getCrowdData } from "@/data/crowd-data";
import {
  getCrowdStatus,
  getHourlyCrowdLevels,
} from "@/lib/crowd";
import { CrowdIndicator } from "@/components/crowd/CrowdIndicator";
import { CrowdChart } from "@/components/crowd/CrowdChart";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { spots } = await import("@/data/spots");
  return spots.map((spot) => ({ slug: spot.id }));
}

export default async function SpotPage({ params }: PageProps) {
  const { slug } = await params;
  const spot = getSpotById(slug);
  if (!spot) notFound();

  const crowdData = getCrowdData(spot.id);
  const crowdStatus = crowdData
    ? getCrowdStatus(spot.id, crowdData)
    : null;
  const hourlyData = crowdData
    ? getHourlyCrowdLevels(crowdData).map((d) => ({
        hour: d.hour,
        level: d.level,
        label: `${d.hour}:00`,
      }))
    : [];

  const area = getAreaById(spot.areaId);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: "エリアガイド", href: "/area" },
          ...(area ? [{ label: area.name, href: `/area/${area.id}` }] : []),
          { label: spot.name },
        ]}
      />

      <article>
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
          <Image
            src={spot.imageUrl}
            alt={spot.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 900px"
          />
          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              {spot.name}
            </h1>
          </div>
        </div>

        {/* 混雑度 */}
        {crowdStatus && (
          <div className="mb-8 p-6 bg-white rounded-xl shadow-sm border border-base-ink/5">
            <h2 className="font-serif text-xl font-bold text-base-ink mb-4">
              現在の混雑状況
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <CrowdIndicator
                level={crowdStatus.level}
                size="lg"
                showLabel={true}
              />
              <div>
                <p className="text-accent-vermillion font-bold">
                  {crowdStatus.recommendation}
                </p>
                <p className="text-sm text-base-ink/70 mt-1">
                  おすすめ: {crowdStatus.bestTimeToday}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 時間帯別グラフ */}
        {hourlyData.length > 0 && (
          <div className="mb-8 p-6 bg-white rounded-xl shadow-sm border border-base-ink/5">
            <h2 className="font-serif text-xl font-bold text-base-ink mb-4">
              時間帯別の混雑推移
            </h2>
            <CrowdChart data={hourlyData} />
          </div>
        )}

        {/* 基本情報 */}
        <div className="mb-8 p-6 bg-white rounded-xl shadow-sm border border-base-ink/5">
          <h2 className="font-serif text-xl font-bold text-base-ink mb-4">
            基本情報
          </h2>
          <dl className="space-y-3">
            <div>
              <dt className="text-sm text-base-ink/60">住所</dt>
              <dd className="font-medium">{spot.address}</dd>
            </div>
            {spot.openingHours && (
              <div>
                <dt className="text-sm text-base-ink/60">営業時間</dt>
                <dd className="font-medium">{spot.openingHours}</dd>
              </div>
            )}
            {spot.closedDays && (
              <div>
                <dt className="text-sm text-base-ink/60">定休日</dt>
                <dd className="font-medium">{spot.closedDays}</dd>
              </div>
            )}
            {spot.admission && (
              <div>
                <dt className="text-sm text-base-ink/60">料金</dt>
                <dd className="font-medium">{spot.admission}</dd>
              </div>
            )}
          </dl>
        </div>

        {/* 説明 */}
        <div className="mb-8">
          <h2 className="font-serif text-xl font-bold text-base-ink mb-4">
            スポット紹介
          </h2>
          <p className="text-base-ink/80 leading-relaxed">{spot.description}</p>
        </div>

        {/* 地図リンク */}
        <div className="mb-8 p-6 bg-main-blue/5 rounded-xl">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-vermillion font-medium hover:underline"
          >
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Google Mapsで経路を検索
          </a>
        </div>

        {/* 周辺スポット */}
        {spot.nearbySpotIds && spot.nearbySpotIds.length > 0 && (
          <div>
            <h2 className="font-serif text-xl font-bold text-base-ink mb-4">
              周辺スポット
            </h2>
            <ul className="space-y-2">
              {spot.nearbySpotIds.map((id) => {
                const nearby = getSpotById(id);
                if (!nearby) return null;
                return (
                  <li key={id}>
                    <Link
                      href={`/spot/${id}`}
                      className="text-accent-vermillion hover:underline"
                    >
                      {nearby.name} →
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </article>
    </div>
  );
}
