import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator"
import { AnimationProvider } from "@/contexts/animation-context"
import { getMetaInfo } from "@/lib/data"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] })

const metaInfo = getMetaInfo()

export const metadata: Metadata = {
  title: metaInfo.title,
  description: metaInfo.description,
  generator: "v0.app",
  icons: {
    icon: "/img_1821.jpg", // put favicon.ico inside /public
    shortcut: "/img_1821.jpg",
    apple: "/apple-touch-icon.png", // optional for iOS
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimationProvider>
          <ScrollProgressIndicator />
          {children}
        </AnimationProvider>
        <Analytics />
      </body>
    </html>
  )
}
