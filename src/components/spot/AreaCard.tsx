import Link from "next/link";
import type { Area } from "@/types/spot";
import { CrowdIndicator } from "@/components/crowd/CrowdIndicator";
import type { CrowdLevel } from "@/types/crowd";

interface AreaCardProps {
  area: Area;
  avgCrowdLevel: CrowdLevel;
  spotCount: number;
}

export function AreaCard({ area, avgCrowdLevel, spotCount }: AreaCardProps) {
  return (
    <Link
      href={`/area/${area.id}`}
      className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-base-ink/5 hover:border-accent-gold/30"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-serif font-bold text-xl text-base-ink">
            {area.name}
          </h3>
          <CrowdIndicator level={avgCrowdLevel} size="md" showLabel={false} />
        </div>
        <p className="text-sm text-base-ink/70 line-clamp-2 mb-4">
          {area.description}
        </p>
        <div className="flex items-center justify-between text-sm text-base-ink/60">
          <span>{spotCount}スポット</span>
          <span className="text-accent-vermillion font-medium">詳細を見る →</span>
        </div>
      </div>
    </Link>
  );
}
