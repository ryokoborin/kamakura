import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAreaById } from "@/data/areas";
import { getSpotsByAreaId } from "@/data/spots";
import { getCrowdData } from "@/data/crowd-data";
import { getCurrentCrowdLevel } from "@/lib/crowd";
import { SpotCard } from "@/components/spot/SpotCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { areas } = await import("@/data/areas");
  return areas.map((area) => ({ slug: area.id }));
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getAreaById(slug);
  if (!area) notFound();

  const areaSpots = getSpotsByAreaId(area.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: "エリアガイド", href: "/area" },
          { label: area.name },
        ]}
      />

      <div className="mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-base-ink mb-4">
          {area.name}
        </h1>
        <p className="text-base-ink/80 text-lg">{area.description}</p>
        <div className="mt-4 p-4 bg-main-blue/5 rounded-xl">
          <p className="text-sm font-medium text-base-ink">
            <span className="text-accent-vermillion">最寄り駅:</span>{" "}
            {area.nearestStation}
          </p>
          {area.accessFromStation && (
            <p className="text-sm text-base-ink/70 mt-1">
              {area.accessFromStation}
            </p>
          )}
        </div>
      </div>

      <section>
        <h2 className="font-serif text-2xl font-bold text-base-ink mb-6">
          エリア内スポット
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areaSpots.map((spot) => {
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

      <div className="mt-12">
        <Link
          href="/area"
          className="inline-flex items-center gap-2 text-accent-vermillion hover:underline"
        >
          ← 他のエリアを見る
        </Link>
      </div>
    </div>
  );
}
