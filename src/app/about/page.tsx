import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "このサイトについて" }]} />

      <h1 className="font-serif text-3xl md:text-4xl font-bold text-base-ink mb-8">
        このサイトについて
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="font-serif text-2xl font-bold text-base-ink mb-4">
            コンセプト
          </h2>
          <p className="text-lg text-base-ink/80 leading-relaxed">
            「<strong className="text-accent-vermillion">今、空いている鎌倉を見つけよう</strong>」
          </p>
          <p className="text-base-ink/80 leading-relaxed mt-4">
            鎌倉観光ガイドは、鎌倉の各スポットの混雑状況をリアルタイムに近い形で可視化し、
            観光客がストレスなく鎌倉を楽しめるようにするガイドサイトです。
            従来の観光ガイドとの差別化ポイントは、混雑情報を中心に据えたUIにあります。
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-base-ink mb-4">
            混雑データについて
          </h2>
          <p className="text-base-ink/80 leading-relaxed">
            本サイトの混雑状況は、時間帯×曜日の統計データに基づいて算出しています。
            桜・紫陽花・紅葉のシーズンや正月などは補正を加えています。
            データは定期的に更新していますが、実際の混雑状況とは異なる場合があります。
            あくまで参考情報としてご利用ください。
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-base-ink mb-4">
            混雑度の目安
          </h2>
          <ul className="space-y-2 text-base-ink/80">
            <li className="flex items-center gap-3">
              <span
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#4CAF50" }}
              />
              空いている：ゆっくり観光できる
            </li>
            <li className="flex items-center gap-3">
              <span
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#FFC107" }}
              />
              やや混雑：多少の混雑あり
            </li>
            <li className="flex items-center gap-3">
              <span
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#FF9800" }}
              />
              混雑：人が多い
            </li>
            <li className="flex items-center gap-3">
              <span
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#F44336" }}
              />
              非常に混雑：ピーク時、別の時間帯を検討
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-base-ink mb-4">
            お問い合わせ
          </h2>
          <p className="text-base-ink/80">
            本サイトに関するお問い合わせは、各ページのフッターからご連絡ください。
          </p>
        </section>
      </div>
    </div>
  );
}
