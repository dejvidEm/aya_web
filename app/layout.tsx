import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "AYA - Investovanie s automatizovanými stratégiami",
  description: "Investujte inteligentne s AYA a nechajte expertov pracovať za vás s maximálnou efektivitou.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sk">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

