# 鎌倉観光ガイド

「今、空いている鎌倉を見つけよう」をコンセプトに、鎌倉の各スポットの混雑状況を可視化する観光ガイドサイトです。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **地図**: Leaflet + React Leaflet
- **グラフ**: Recharts

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## ビルド

```bash
npm run build
```

## デプロイ (Vercel)

1. [Vercel](https://vercel.com) にプロジェクトをインポート
2. リポジトリ名を `kamakura` に設定
3. デプロイを実行

```bash
# Vercel CLI でデプロイする場合
npx vercel
```

## 主な機能

- **混雑ダッシュボード**: 現在の混雑状況を一覧表示
- **今空いているスポット TOP5**: レコメンド表示
- **エリア別ガイド**: 5エリアのスポット情報
- **混雑マップ**: インタラクティブ地図 + 時間帯スライダー
- **スポット詳細**: 混雑推移グラフ、基本情報

## ライセンス

MIT
