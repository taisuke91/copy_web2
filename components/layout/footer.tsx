import Link from "next/link"
import { Scale, Twitter, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold text-primary">佐藤総合法律事務所</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              革新と信頼のリーガルパートナー。
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">クイックリンク</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">ホーム</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">取扱分野</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">お問い合わせ</Link></li>
              <li><Link href="/policy" className="text-sm text-muted-foreground hover:text-primary">プライバシーポリシー</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">連絡先</h4>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>〒100-0013 東京都千代田区霞が関1-1-1 法務ビル 10階</p>
              <p>Email: info@sato-law.jp</p>
              <p>電話: 03-1234-5678</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">ニュースレター</h4>
            <p className="mt-4 text-sm text-muted-foreground">最新の法務情報やセミナー案内をお届けします。</p>
            <form className="mt-4 flex">
              <input type="email" placeholder="メールアドレス" className="w-full px-3 py-2 bg-background border border-border rounded-l-md focus:ring-primary focus:border-primary" />
              <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-r-md hover:bg-primary/90">登録</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 佐藤総合法律事務所. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
