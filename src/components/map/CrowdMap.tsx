"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { CROWD_COLORS } from "@/types/crowd";
import type { Spot } from "@/types/spot";
import type { CrowdLevel } from "@/types/crowd";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

interface SpotWithLevel extends Spot {
  crowdLevel: CrowdLevel;
}

interface CrowdMapProps {
  spots: SpotWithLevel[];
  selectedHour: number;
}

function createCustomIcon(level: CrowdLevel) {
  const color = CROWD_COLORS[level];
  return `
    <div style="
      width: 24px;
      height: 24px;
      background-color: ${color};
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    "></div>
  `;
}

export default function CrowdMap({ spots }: CrowdMapProps) {
  const [Leaflet, setLeaflet] = useState<typeof import("leaflet") | null>(null);

  useEffect(() => {
    import("leaflet").then(setLeaflet);
  }, []);

  if (typeof window === "undefined" || !Leaflet) {
    return (
      <div className="w-full h-[500px] bg-base-ink/5 flex items-center justify-center">
        <p className="text-base-ink/60">地図を読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] relative">
      <MapContainer
          center={[35.319, 139.5504]}
          zoom={13}
          className="w-full h-full z-0"
          style={{ minHeight: "500px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {spots.map((spot) => (
            <Marker
              key={spot.id}
              position={[spot.lat, spot.lng]}
              icon={Leaflet.divIcon({
                html: createCustomIcon(spot.crowdLevel),
                className: "custom-marker",
                iconSize: [24, 24],
                iconAnchor: [12, 12],
              })}
            >
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <h3 className="font-bold text-base mb-2">{spot.name}</h3>
                  <div
                    className="inline-block px-2 py-1 rounded text-sm text-white"
                    style={{ backgroundColor: CROWD_COLORS[spot.crowdLevel] }}
                  >
                    {spot.crowdLevel === 1
                      ? "空いている"
                      : spot.crowdLevel === 2
                          ? "やや混雑"
                          : spot.crowdLevel === 3
                              ? "混雑"
                              : "非常に混雑"}
                  </div>
                  <a
                    href={`/spot/${spot.id}`}
                    className="block mt-2 text-sm text-blue-600 hover:underline"
                  >
                    詳細を見る →
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
    </div>
  );
}
