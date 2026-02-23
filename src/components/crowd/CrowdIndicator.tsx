import type { CrowdLevel } from "@/types/crowd";
import { CROWD_LABELS, CROWD_COLORS } from "@/types/crowd";

interface CrowdIndicatorProps {
  level: CrowdLevel;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4",
};

export function CrowdIndicator({
  level,
  size = "md",
  showLabel = true,
  className = "",
}: CrowdIndicatorProps) {
  const color = CROWD_COLORS[level];
  const label = CROWD_LABELS[level];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        className={`${sizeClasses[size]} rounded-full flex-shrink-0`}
        style={{ backgroundColor: color }}
        aria-hidden
      />
      {showLabel && (
        <span className="text-sm font-medium text-base-ink">{label}</span>
      )}
    </div>
  );
}
