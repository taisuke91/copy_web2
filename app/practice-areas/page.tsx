"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { Briefcase, Building, Gavel, HeartHandshake, Home, Scale } from "lucide-react"
import Link from "next/link"
import { MotionDiv } from "@/components/ui/motion-div"
import Image from "next/image"

const practiceAreas = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "企業法務",
    description: "契約書作成・レビュー、コンプライアンス、M&A、労働問題など、企業のあらゆる法的ニーズに対応します。",
  },
  {
    icon: <Scale className="h-8 w-8 text-primary" />,
    title: "刑事弁護",
    description: "逮捕直後の対応から公判まで、被疑者・被告人の権利を最大限守るための弁護活動を行います。",
  },
  {
    icon: <Home className="h-8 w-8 text-primary" />,
    title: "家事事件",
    description: "離婚、財産分与、親権、相続、遺言など、ご家庭内のデリケートな問題を親身にサポートします。",
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "不動産",
    description: "不動産売買、賃貸借契約、境界紛争、建築紛争など、不動産に関するトラブルを解決します。",
  },
  {
    icon: <Gavel className="h-8 w-8 text-primary" />,
    title: "一般民事",
    description: "交通事故、債権回収、損害賠償請求など、個人間の様々な法的トラブルに対応します。",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "労働問題",
    description: "不当解雇、残業代請求、ハラスメントなど、労働者の権利を守るためのサポートを行います。",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1505664194779-8beace72944c?q=80&w=2070&auto=format&fit=crop"
            alt="Law books"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 px-4">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-glow">取扱分野</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              当事務所では、個人のお客様から法人のお客様まで、幅広い法律問題に対応しております。
            </p>
          </MotionDiv>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <MotionDiv 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {practiceAreas.map((area) => (
            <MotionDiv key={area.title} variants={cardVariants}>
              <Card className="bg-secondary border-white/10 rounded-xl h-full transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 p-6">
                  <div className="flex-shrink-0 bg-background p-3 rounded-full">{area.icon}</div>
                  <CardTitle className="text-xl font-bold">{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
        
        <MotionDiv 
          className="text-center mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
            <p className="text-lg text-muted-foreground mb-4">上記以外の分野についても、まずはお気軽にご相談ください。</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105">
                <Link href="/contact">お問い合わせはこちら</Link>
            </Button>
        </MotionDiv>
      </div>
    </div>
  )
}
