"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { MotionDiv } from "@/components/ui/motion-div"

const policySections = [
  {
    title: "はじめに",
    content: "佐藤総合法律事務所（以下、「当事務所」といいます。）は、個人情報の保護に関する法律（以下、「個人情報保護法」といいます。）を遵守するとともに、以下のプライバシーポリシーに従い、適切な取扱い及び保護に努めます。"
  },
  {
    title: "個人情報の取得",
    content: "当事務所は、適法かつ公正な手段によって、個人情報を取得します。偽りその他不正の手段により取得することはありません。"
  },
  {
    title: "個人情報の利用目的",
    content: "当事務所は、取得した個人情報を以下の目的で利用します。\n・法律相談、事件処理等の弁護士業務の遂行\n・当事務所からの挨拶状、セミナー、その他の情報の送付\n・お問い合わせへの対応\n・その他、上記の利用目的に付随する目的"
  },
  {
    title: "個人情報の第三者提供",
    content: "当事務所は、法令に定める場合を除き、個人情報を、事前に本人の同意を得ることなく、第三者に提供しません。"
  },
  {
    title: "個人情報の安全管理",
    content: "当事務所は、取り扱う個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。"
  },
  {
    title: "プライバシーポリシーの変更",
    content: "当事務所は、必要に応じて、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当ウェブサイトに掲載したときから効力を生じるものとします。"
  },
  {
    title: "お問い合わせ",
    content: "本プライバシーポリシーに関するお問い合わせは、下記までお願いいたします。\n名称: 佐藤総合法律事務所\nEmail: privacy@sato-law.jp\n電話: 03-1234-5678"
  }
]

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <MotionDiv 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-4 text-glow">プライバシーポリシー</h1>
          <p className="text-lg text-muted-foreground">最終更新日: {new Date().toLocaleDateString('ja-JP')}</p>
        </MotionDiv>

        <MotionDiv 
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, staggerChildren: 0.1 }}
        >
          {policySections.map((section, i) => (
            <MotionDiv key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="bg-secondary border-white/10 rounded-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none text-muted-foreground whitespace-pre-line">
                  <p>{section.content}</p>
                  {section.title === "お問い合わせ" && (
                     <p className="mt-4">
                       <Link href="/contact" className="text-primary hover:underline">
                         お問い合わせフォームはこちら
                       </Link>
                     </p>
                  )}
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </div>
  )
}
