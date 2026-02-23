import Image from "next/image";
import Link from "next/link";
import type { Spot } from "@/types/spot";
import { CrowdIndicator } from "@/components/crowd/CrowdIndicator";
import { CATEGORY_LABELS } from "@/types/spot";
import type { CrowdLevel } from "@/types/crowd";

interface SpotCardProps {
  spot: Spot;
  crowdLevel: CrowdLevel;
  compact?: boolean;
}

export function SpotCard({ spot, crowdLevel, compact = false }: SpotCardProps) {
  return (
    <Link
      href={`/spot/${spot.id}`}
      className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-base-ink/5"
    >
      <div className={`relative ${compact ? "aspect-video" : "aspect-[4/3]"}`}>
        <Image
          src={spot.imageUrl}
          alt={spot.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 bg-white/90 rounded text-xs font-medium text-base-ink">
            {CATEGORY_LABELS[spot.category]}
          </span>
        </div>
        <div className="absolute bottom-2 right-2">
          <CrowdIndicator level={crowdLevel} size="md" showLabel={false} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-serif font-bold text-lg text-base-ink mb-2">
          {spot.name}
        </h3>
        <div className="flex items-center justify-between">
          <CrowdIndicator level={crowdLevel} size="sm" showLabel={true} />
        </div>
      </div>
    </Link>
  );
}
