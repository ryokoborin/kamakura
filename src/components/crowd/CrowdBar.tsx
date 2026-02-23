import type { CrowdLevel } from "@/types/crowd";
import { CROWD_COLORS } from "@/types/crowd";

interface CrowdBarProps {
  level: CrowdLevel;
  className?: string;
}

export function CrowdBar({ level, className = "" }: CrowdBarProps) {
  const color = CROWD_COLORS[level];
  const width = (level / 4) * 100;

  return (
    <div
      className={`h-2 bg-base-ink/10 rounded-full overflow-hidden ${className}`}
      role="progressbar"
      aria-valuenow={level}
      aria-valuemin={1}
      aria-valuemax={4}
    >
      <div
        className="h-full rounded-full transition-all duration-300"
        style={{ width: `${width}%`, backgroundColor: color }}
      />
    </div>
  );
}
