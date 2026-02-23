"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";
import type { CrowdLevel } from "@/types/crowd";
import { CROWD_COLORS, CROWD_LABELS } from "@/types/crowd";

interface ChartDataPoint {
  hour: number;
  level: CrowdLevel;
  label: string;
}

interface CrowdChartProps {
  data: ChartDataPoint[];
  className?: string;
}

export function CrowdChart({ data, className = "" }: CrowdChartProps) {
  const chartData = data.map((d) => ({
    ...d,
    name: `${d.hour}:00`,
  }));

  return (
    <div className={`w-full h-64 ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: "#2C2C2C20" }}
          />
          <YAxis
            domain={[0, 4]}
            ticks={[1, 2, 3, 4]}
            tickFormatter={(v) => CROWD_LABELS[v as CrowdLevel]}
            tick={{ fontSize: 11 }}
            width={80}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload?.[0]) {
                const d = payload[0].payload;
                return (
                  <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-base-ink/10">
                    <p className="font-medium">{d.name}</p>
                    <p
                      className="text-sm"
                      style={{ color: CROWD_COLORS[d.level] }}
                    >
                      {CROWD_LABELS[d.level]}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="level" radius={[4, 4, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={index} fill={CROWD_COLORS[entry.level]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
