import type { Spot } from "@/types/spot";

const createWeeklyPattern = (
  weekday: Record<number, number>,
  weekend?: Record<number, number>
): Record<number, Record<number, 1 | 2 | 3 | 4>> => {
  const sat = weekend ?? weekday;
  const sun = weekend ?? weekday;
  const pattern: Record<number, Record<number, 1 | 2 | 3 | 4>> = {};
  for (let d = 0; d <= 6; d++) {
    pattern[d] = (d === 0 ? sun : d === 6 ? sat : weekday) as Record<
      number,
      1 | 2 | 3 | 4
    >;
  }
  return pattern;
};

export const spots: Spot[] = [
  {
    id: "tsurugaoka",
    name: "鶴岡八幡宮",
    areaId: "kamakura-station",
    category: "temple",
    description:
      "鎌倉のシンボルとも言える由緒正しい神社。源頼朝が創建した武家の守護神。若宮大路の参道と段葛が美しい。",
    address: "神奈川県鎌倉市雪ノ下2-1-31",
    lat: 35.326,
    lng: 139.5558,
    openingHours: "5:00〜21:00（4〜9月は5:30〜）",
    admission: "無料（宝物殿は別途）",
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    nearbySpotIds: ["komachi", "hokokuji"],
  },
  {
    id: "komachi",
    name: "小町通り",
    areaId: "kamakura-station",
    category: "shopping",
    description:
      "鎌倉駅から鶴岡八幡宮へ続く賑やかな商店街。グルメや雑貨店が並び、観光客に人気。",
    address: "神奈川県鎌倉市小町",
    lat: 35.3185,
    lng: 139.5512,
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    nearbySpotIds: ["tsurugaoka"],
  },
  {
    id: "hokokuji",
    name: "報国寺",
    areaId: "kamakura-station",
    category: "temple",
    description: "竹の庭で知られる「竹の寺」。苔と竹のコントラストが美しい。",
    address: "神奈川県鎌倉市浄明寺2-7-4",
    lat: 35.3245,
    lng: 139.5572,
    openingHours: "9:00〜16:00",
    admission: "300円",
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    nearbySpotIds: ["tsurugaoka"],
  },
  {
    id: "daibutsu",
    name: "鎌倉大仏（高徳院）",
    areaId: "hase",
    category: "temple",
    description:
      "高さ約11mの国宝・鎌倉大仏。鎌倉を代表する観光スポット。",
    address: "神奈川県鎌倉市長谷4-2-28",
    lat: 35.3163,
    lng: 139.5362,
    openingHours: "8:00〜17:30",
    admission: "300円",
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    nearbySpotIds: ["hasedera"],
  },
  {
    id: "hasedera",
    name: "長谷寺",
    areaId: "hase",
    category: "temple",
    description:
      "十一面観音で知られる「花の寺」。紫陽花の名所として大人気。",
    address: "神奈川県鎌倉市長谷3-11-2",
    lat: 35.3125,
    lng: 139.5335,
    openingHours: "8:00〜17:00",
    admission: "400円",
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    nearbySpotIds: ["daibutsu"],
  },
  {
    id: "kotokuin",
    name: "高徳院境内",
    areaId: "hase",
    category: "temple",
    description: "鎌倉大仏を祀る寺院の境内。大仏の胎内拝観も可能。",
    address: "神奈川県鎌倉市長谷4-2-28",
    lat: 35.3163,
    lng: 139.5362,
    openingHours: "8:00〜17:30",
    admission: "300円（胎内+20円）",
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    nearbySpotIds: ["hasedera"],
  },
  {
    id: "engakuji",
    name: "円覚寺",
    areaId: "kitakamakura",
    category: "temple",
    description:
      "北鎌倉を代表する禅寺。紅葉の名所としても有名。国宝の舎利殿が美しい。",
    address: "神奈川県鎌倉市山ノ内409",
    lat: 35.3362,
    lng: 139.5485,
    openingHours: "8:00〜16:30",
    admission: "500円",
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    nearbySpotIds: ["kenchoji", "meigetsuin"],
  },
  {
    id: "kenchoji",
    name: "建長寺",
    areaId: "kitakamakura",
    category: "temple",
    description: "日本最古の禅寺。鎌倉五山第一位。広大な境内が魅力。",
    address: "神奈川県鎌倉市山ノ内8",
    lat: 35.3315,
    lng: 139.5552,
    openingHours: "8:30〜16:30",
    admission: "500円",
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    nearbySpotIds: ["engakuji"],
  },
  {
    id: "meigetsuin",
    name: "明月院",
    areaId: "kitakamakura",
    category: "temple",
    description: "「紫陽花寺」として有名。6月は紫陽花で埋め尽くされる。",
    address: "神奈川県鎌倉市山ノ内189",
    lat: 35.3345,
    lng: 139.5465,
    openingHours: "9:00〜16:00",
    admission: "500円",
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    nearbySpotIds: ["engakuji"],
  },
  {
    id: "yuigahama",
    name: "由比ヶ浜海水浴場",
    areaId: "yuigahama",
    category: "beach",
    description:
      "鎌倉随一の海水浴場。サーフィンやビーチスポーツで人気。夕焼けが美しい。",
    address: "神奈川県鎌倉市由比ヶ浜",
    lat: 35.3075,
    lng: 139.545,
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    nearbySpotIds: ["zaimokuza"],
  },
  {
    id: "zaimokuza",
    name: "材木座海岸",
    areaId: "yuigahama",
    category: "beach",
    description: "由比ヶ浜の東に続く海岸。比較的静かで地元の人に人気。",
    address: "神奈川県鎌倉市材木座",
    lat: 35.305,
    lng: 139.555,
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    nearbySpotIds: ["yuigahama"],
  },
  {
    id: "inamuragasaki",
    name: "稲村ヶ崎",
    areaId: "yuigahama",
    category: "beach",
    description: "富士山と江ノ島を望む絶景スポット。夕日の名所。",
    address: "神奈川県鎌倉市稲村ヶ崎",
    lat: 35.2985,
    lng: 139.5385,
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    nearbySpotIds: ["yuigahama"],
  },
  {
    id: "enoshima",
    name: "江ノ島",
    areaId: "enoshima",
    category: "temple",
    description:
      "湘南のシンボル。江島神社や展望台、水族館など見どころ満載。",
    address: "神奈川県藤沢市江の島",
    lat: 35.3005,
    lng: 139.4808,
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    nearbySpotIds: ["shichirigahama"],
  },
  {
    id: "shichirigahama",
    name: "七里ヶ浜",
    areaId: "enoshima",
    category: "beach",
    description: "江ノ電と海が絶景。映画「サマーウォーズ」の舞台。",
    address: "神奈川県鎌倉市七里ヶ浜",
    lat: 35.3065,
    lng: 139.5085,
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    nearbySpotIds: ["enoshima", "kamurayama"],
  },
  {
    id: "kamurayama",
    name: "鎌倉山",
    areaId: "enoshima",
    category: "other",
    description: "高級住宅街として知られるエリア。緑豊かな散歩道。",
    address: "神奈川県鎌倉市鎌倉山",
    lat: 35.3025,
    lng: 139.495,
    imageUrl:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    nearbySpotIds: ["shichirigahama"],
  },
];

export function getSpotById(id: string): Spot | undefined {
  return spots.find((s) => s.id === id);
}

export function getSpotsByAreaId(areaId: string): Spot[] {
  return spots.filter((s) => s.areaId === areaId);
}

export function getAllSpots(): Spot[] {
  return spots;
}
