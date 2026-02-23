import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-main-blue text-base-paper/90 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-bold text-base-paper mb-4">
              鎌倉観光ガイド
            </h3>
            <p className="text-sm text-base-paper/80">
              今、空いている鎌倉を見つけよう。
              <br />
              混雑状況を可視化し、ストレスなく鎌倉を楽しむためのガイドサイトです。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-base-paper mb-4">サイトマップ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent-gold transition-colors">
                  混雑状況
                </Link>
              </li>
              <li>
                <Link
                  href="/area"
                  className="hover:text-accent-gold transition-colors"
                >
                  エリアガイド
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-accent-gold transition-colors">
                  混雑マップ
                </Link>
              </li>
              <li>
                <Link
                  href="/access"
                  className="hover:text-accent-gold transition-colors"
                >
                  アクセス情報
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent-gold transition-colors"
                >
                  このサイトについて
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-base-paper mb-4">エリア</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/area/kamakura-station"
                  className="hover:text-accent-gold transition-colors"
                >
                  鎌倉駅周辺
                </Link>
              </li>
              <li>
                <Link
                  href="/area/hase"
                  className="hover:text-accent-gold transition-colors"
                >
                  長谷エリア
                </Link>
              </li>
              <li>
                <Link
                  href="/area/kitakamakura"
                  className="hover:text-accent-gold transition-colors"
                >
                  北鎌倉エリア
                </Link>
              </li>
              <li>
                <Link
                  href="/area/yuigahama"
                  className="hover:text-accent-gold transition-colors"
                >
                  由比ヶ浜・材木座
                </Link>
              </li>
              <li>
                <Link
                  href="/area/enoshima"
                  className="hover:text-accent-gold transition-colors"
                >
                  江ノ島・七里ヶ浜
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-main-blue/50 text-center text-sm text-base-paper/70">
          © {new Date().getFullYear()} 鎌倉観光ガイド
        </div>
      </div>
    </footer>
  );
}
