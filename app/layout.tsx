import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Letvik - AI Automation & Consultancy",
  description: "Empowering businesses with AI-driven solutions for customer engagement and workflow automation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#1a103c] text-white min-h-screen flex flex-col`}>
        <div className="fixed inset-0 bg-grid -z-10"></div>
        <Header />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
        <Analytics />
        <Script src="https://unpkg.com/motion/dist/motion.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}



import './globals.css'