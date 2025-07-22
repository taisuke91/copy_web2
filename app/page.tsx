"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Briefcase, Home, Scale, Star, Users } from "lucide-react"
import Link from "next/link"
import { MotionDiv } from "@/components/ui/motion-div"
import Image from "next/image"

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589578228253-b5cb3440505a?q=80&w=2070&auto=format&fit=crop"
            alt="Modern building"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
        </div>
        <div className="relative z-10 px-4">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-6 text-glow">
              革新と信頼のリーガルパートナー
            </h1>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              最先端の企業法務、複雑な家事事件、そして粘り強い刑事弁護で、あなたの未来を切り拓きます。
            </p>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105">
                <Link href="/contact">
                  無料相談を予約 <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ staggerChildren: 0.2 }}>
            <MotionDiv variants={cardVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">私たちの強み</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                各分野の専門家が、あなたの課題に真摯に向き合います。
              </p>
            </MotionDiv>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Briefcase className="h-10 w-10 text-primary" />, title: "企業法務", desc: "契約書の作成・レビュー、コンプライアンス、M&Aなど、企業の成長を法的にサポートします。" },
                { icon: <Scale className="h-10 w-10 text-primary" />, title: "刑事弁護", desc: "逮捕直後から裁判まで、被疑者・被告人の権利を守るために迅速かつ的確な弁護活動を行います。" },
                { icon: <Home className="h-10 w-10 text-primary" />, title: "家事事件", desc: "離婚、相続、遺言など、ご家庭内のデリケートな問題について、親身に寄り添い解決へと導きます。" },
              ].map((feature, i) => (
                <MotionDiv key={i} variants={cardVariants}>
                  <Card className="text-center bg-secondary border-white/10 p-8 rounded-xl h-full transition-all duration-300 hover:border-primary/50 hover:-translate-y-2">
                    <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-background">
                      {feature.icon}
                    </div>
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-4">
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={cardVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">お客様の声</h2>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />)}
            </div>
            <blockquote className="text-xl text-foreground italic mt-6">
              「佐藤総合法律事務所のおかげで、複雑な問題を迅速に解決できました。プロフェッショナルな対応に心から感謝しています。」
            </blockquote>
            <p className="mt-4 font-semibold text-muted-foreground">- 株式会社テクノソリューションズ CEO</p>
          </MotionDiv>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={cardVariants} className="max-w-4xl mx-auto text-center bg-secondary p-12 rounded-xl border border-white/10">
          <h2 className="text-3xl font-bold text-foreground mb-4">法的な課題に直面していませんか？</h2>
          <p className="text-xl text-muted-foreground mb-8">
            一人で悩まず、まずはご相談ください。経験豊富な弁護士が最適な解決策をご提案します。
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105">
            <Link href="/contact">
              今すぐお問い合わせ <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </MotionDiv>
      </section>
    </div>
  )
}
