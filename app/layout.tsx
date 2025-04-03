import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "PetCare Veterinary Clinic",
    template: "%s | PetCare Veterinary Clinic",
  },
  description: "Professional veterinary care for your beloved pets",
  keywords: ["veterinary", "pet care", "animal hospital", "vet clinic", "pet health"],
  authors: [{ name: "PetCare Veterinary Clinic" }],
  creator: "PetCare Veterinary Clinic",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://petcare-vet.com",
    title: "PetCare Veterinary Clinic",
    description: "Professional veterinary care for your beloved pets",
    siteName: "PetCare Veterinary Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "PetCare Veterinary Clinic",
    description: "Professional veterinary care for your beloved pets",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'