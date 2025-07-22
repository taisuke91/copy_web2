"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { MotionDiv } from "@/components/ui/motion-div"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast({
      title: "メッセージが送信されました！",
      description: "お問い合わせいただきありがとうございます。内容を確認の上、折り返しご連絡いたします。",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-secondary">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl font-bold text-foreground mb-4 text-glow">お問い合わせ</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ご相談やご依頼は、下記フォームまたはお電話にてお気軽にご連絡ください。
            </p>
          </MotionDiv>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <MotionDiv initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Card className="bg-secondary border-white/10 rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl">お問い合わせフォーム</CardTitle>
                <CardDescription>必要事項をご記入の上、送信してください。</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">お名前 *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="山田 太郎" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">メールアドレス *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="your.email@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">件名 *</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="ご相談内容の概要" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">ご相談内容 *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required placeholder="ご相談内容の詳細をご記入ください。" rows={6} />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105" disabled={isSubmitting}>
                    {isSubmitting ? "送信中..." : "送信する"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </MotionDiv>

          <MotionDiv className="space-y-8" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <Card className="bg-secondary border-white/10 rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl">連絡先情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { icon: <Mail className="h-5 w-5 text-primary" />, title: "Email", value: "info@sato-law.jp" },
                  { icon: <Phone className="h-5 w-5 text-primary" />, title: "電話番号", value: "03-1234-5678" },
                  { icon: <MapPin className="h-5 w-5 text-primary" />, title: "所在地", value: "〒100-0013 東京都千代田区霞が関1-1-1 法務ビル 10階" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    {item.icon}
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-muted-foreground whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="bg-secondary border-white/10 rounded-xl overflow-hidden">
              <div className="w-full h-64 relative">
                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Office Location" layout="fill" objectFit="cover" />
              </div>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </div>
  )
}
