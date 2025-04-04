import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Confirmare Programare",
  description: "Am primit cererea de programare."
}

export default function ConfirmationPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-emerald-500" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Am primit cererea de programare</h1>
        <p className="mt-6 text-lg text-muted-foreground">
        Mulțumim că ați solicitat o programare la BB Veterinary. Am primit informațiile dumneavoastră și vă vom contacta în curând pentru a confirma detaliile programării.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link href="/">Inapoi</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">Servicii</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

