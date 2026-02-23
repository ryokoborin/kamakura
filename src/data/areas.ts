import type { Area } from "@/types/spot";

export const areas: Area[] = [
  {
    id: "kamakura-station",
    name: "鎌倉駅周辺",
    description:
      "小町通りや鶴岡八幡宮など、鎌倉の中心エリア。観光の拠点となる賑やかなエリアです。",
    spotIds: ["tsurugaoka", "komachi", "hokokuji"],
    centerLat: 35.319,
    centerLng: 139.5504,
    nearestStation: "鎌倉駅（JR・江ノ電）",
    accessFromStation: "徒歩圏内",
  },
  {
    id: "hase",
    name: "長谷エリア",
    description:
      "鎌倉大仏や長谷寺で知られるエリア。紫陽花の名所としても人気です。",
    spotIds: ["daibutsu", "hasedera", "kotokuin"],
    centerLat: 35.3165,
    centerLng: 139.5362,
    nearestStation: "長谷駅（江ノ電）",
    accessFromStation: "徒歩5〜15分",
  },
  {
    id: "kitakamakura",
    name: "北鎌倉エリア",
    description:
      "円覚寺、建長寺など禅寺が並ぶ静かなエリア。紅葉の名所としても知られています。",
    spotIds: ["engakuji", "kenchoji", "meigetsuin"],
    centerLat: 35.3348,
    centerLng: 139.553,
    nearestStation: "北鎌倉駅（JR横須賀線）",
    accessFromStation: "徒歩3〜10分",
  },
  {
    id: "yuigahama",
    name: "由比ヶ浜・材木座エリア",
    description:
      "海辺のリゾート感あふれるエリア。サーフィンや海水浴で人気です。",
    spotIds: ["yuigahama", "zaimokuza", "inamuragasaki"],
    centerLat: 35.3075,
    centerLng: 139.545,
    nearestStation: "由比ヶ浜駅（江ノ電）",
    accessFromStation: "徒歩5〜10分",
  },
  {
    id: "enoshima",
    name: "江ノ島・七里ヶ浜エリア",
    description:
      "江ノ島や七里ヶ浜など、海と島の絶景が楽しめるエリア。夕日の名所です。",
    spotIds: ["enoshima", "shichirigahama", "kamurayama"],
    centerLat: 35.3005,
    centerLng: 139.4808,
    nearestStation: "江ノ島駅（江ノ電）",
    accessFromStation: "徒歩15〜20分",
  },
];

export function getAreaById(id: string): Area | undefined {
  return areas.find((a) => a.id === id);
}

export function getAreaBySpotId(spotId: string): Area | undefined {
  return areas.find((a) => a.spotIds.includes(spotId));
}
