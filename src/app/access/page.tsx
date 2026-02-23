import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function AccessPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "アクセス情報" }]} />

      <h1 className="font-serif text-3xl md:text-4xl font-bold text-base-ink mb-8">
        アクセス情報
      </h1>

      <div className="space-y-12">
        <section>
          <h2 className="font-serif text-2xl font-bold text-base-ink mb-4">
            東京・横浜からのアクセス
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-base-ink/5 space-y-4">
            <div>
              <h3 className="font-bold text-base-ink mb-2">東京駅から</h3>
              <p className="text-base-ink/80">
                JR横須賀線・湘南新宿ライン 直通 約60分
                <br />
                <span className="text-sm text-base-ink/60">
                  鎌倉駅下車（快速利用で約50分）
                </span>
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base-ink mb-2">新宿駅から</h3>
              <p className="text-base-ink/80">
                JR湘南新宿ライン 直通 約60分
                <br />
                <span className="text-sm text-base-ink/60">
                  鎌倉駅または北鎌倉駅下車
                </span>
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base-ink mb-2">横浜駅から</h3>
              <p className="text-base-ink/80">
                JR横須賀線 約25分
                <br />
                <span className="text-sm text-base-ink/60">
                  鎌倉駅下車
                </span>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-base-ink mb-4">
            主要駅の乗り換え案内
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-base-ink/5 space-y-4">
            <div>
              <h3 className="font-bold text-base-ink mb-2">鎌倉駅</h3>
              <p className="text-base-ink/80">
                JR横須賀線・湘南新宿ライン、江ノ島電鉄（江ノ電）の乗り換え駅。
                鶴岡八幡宮や小町通りへは徒歩圏内。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base-ink mb-2">北鎌倉駅</h3>
              <p className="text-base-ink/80">
                JR横須賀線のみ。円覚寺、建長寺、明月院など禅寺めぐりの拠点。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base-ink mb-2">江ノ島駅</h3>
              <p className="text-base-ink/80">
                江ノ島電鉄の終点。江ノ島や七里ヶ浜への玄関口。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-base-ink mb-4">
            鎌倉エリア内の移動手段
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-base-ink/5 space-y-6">
            <div>
              <h3 className="font-bold text-base-ink mb-2 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent-gold/20 rounded flex items-center justify-center text-accent-vermillion font-bold text-sm">
                  江ノ電
                </span>
                江ノ島電鉄
              </h3>
              <p className="text-base-ink/80">
                鎌倉〜江ノ島を結ぶ路面電車。鎌倉駅、長谷駅、由比ヶ浜駅、七里ヶ浜駅、江ノ島駅など主要スポットを結びます。1日乗車券がお得。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base-ink mb-2">路線バス</h3>
              <p className="text-base-ink/80">
                江ノ電バス、京浜急行バスが鎌倉駅を中心に運行。大仏や長谷寺方面、北鎌倉方面などへのアクセスに便利。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base-ink mb-2">レンタサイクル</h3>
              <p className="text-base-ink/80">
                鎌倉駅周辺に複数のレンタサイクル店あり。エリア内の移動がスムーズ。坂道もあるため電動自転車がおすすめ。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base-ink mb-2">徒歩</h3>
              <p className="text-base-ink/80">
                鎌倉駅周辺はコンパクト。鶴岡八幡宮や小町通りは徒歩で十分。長谷エリアも江ノ電長谷駅から徒歩15分程度。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
