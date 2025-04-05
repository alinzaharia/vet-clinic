import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { basePath } from "@/next.config.mjs" // Import the basePath

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "BB Veterinary  - Cabinet veterinar în București",
    template: "%s | BB Veterinary",
  },
  description: "BB Veterinary oferă servicii veterinare profesionale în București. Îngrijire de top pentru câini și pisici, vaccinări, tratamente și consultații medicale.",
  keywords: [
    "cabinet veterinar București", "doctor veterinar", "clinică veterinară",
    "îngrijire animale", "vaccin câini", "vaccin pisici", "deparazitare",
    "consultații veterinare", "urgențe veterinare", "sterilizare animale",
  ],
  authors: [{ name: "BB Veterinary" }],
  creator: "BB Veterinary",
  // openGraph: {
  //   type: "website",
  //   locale: "ro_RO", // Setat pentru România (Facebook și alte rețele sociale)
  //   url: "https://alinzaharia.github.io/vet-clinic/", // Schimbă dacă ai un domeniu propriu
  //   title: "BB Veterinary Clinic - Îngrijire veterinară în București",
  //   description: "Servicii veterinare premium pentru câini și pisici. Consultații, vaccinări, deparazitare, chirurgie și îngrijire medicală.",
  //   siteName: "BB Veterinary Clinic",
  //   images: [
  //     {
  //       url: "https://alinzaharia.github.io/vet-clinic/og-image.jpg", // Asigură-te că ai acest fișier în public/
  //       width: 1200,
  //       height: 630,
  //       alt: "BB Veterinary Clinic - Cabinet veterinar București",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "BB Veterinary Clinic - Cabinet veterinar București",
  //   description: "Veterinar de încredere pentru animalele tale. Consultații și tratamente pentru sănătatea animalelor de companie.",
  //   images: ["https://alinzaharia.github.io/vet-clinic/twitter-card.jpg"], // Asigură-te că acest fișier există
  // },
  // robots: {
  //   index: true, // Permite indexarea în Google
  //   follow: true, // Link-urile pot fi urmărite de motoarele de căutare
  // },
  alternates: {
    // canonical: "https://alinzaharia.github.io/vet-clinic/", // URL-ul principal al paginii
    languages: {
      "ro": "https://alinzaharia.github.io/vet-clinic/", // Versiunea în română
    },
  },

  other: {
    "geo.region": "RO-B", // Județul București
    "geo.placename": "București", // Orașul unde e localizat cabinetul
    // "geo.position": "44.437926;26.024694", // Coordonate GPS (actualizează cu locația corectă)
    // "ICBM": "44.437926, 26.024694", // Coordonate GPS (același lucru, poate fi eliminat)

    // Datele de contact - actualizează-le sau elimină-le dacă nu sunt necesare
    // "business:contact_data:street_address": "Strada Exemplu 10", // Adresa reală a cabinetului
    // "business:contact_data:locality": "București", // Orașul
    // "business:contact_data:region": "B", // Județul (București = "B")
    // "business:contact_data:postal_code": "010101", // Cod poștal - pune unul real
    // "business:contact_data:country_name": "România", // Țara
    // "business:contact_data:email": "contact@bbveterinary.ro", // Adresa de e-mail a clinicii
    // "business:contact_data:phone_number": "+40 123 456 789", // Număr de telefon real
    // "business:contact_data:website": "https://alinzaharia.github.io/vet-clinic/", // URL-ul site-ului
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={`${basePath}/favicon.png`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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