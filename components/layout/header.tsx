"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Scale } from "lucide-react"

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/practice-areas", label: "取扱分野" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/policy", label: "プライバシーポリシー" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-background/80 backdrop-blur-lg border-b border-white/10"></div>
      <nav className="relative z-10 container flex items-center justify-between h-20 max-w-screen-xl mx-auto px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Scale className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary tracking-tight">
            佐藤総合法律事務所
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="underline"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}
