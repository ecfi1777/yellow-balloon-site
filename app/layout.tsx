import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Suspense } from "react"
import Header from "../components/header"

export const metadata: Metadata = {
  title: "The Yellow Balloon - Kids Hair Salon in Gaithersburg, MD",
  description:
    "Where every haircut ends with a smile, a balloon, and a lollipop! Serving Montgomery County families for over 20 years with kid-friendly haircuts, lice treatment, and glamour parties.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col bg-white font-sans">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <main className="flex-1 pt-16">{children}</main>
        </Suspense>
      </body>
    </html>
  )
}
