import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Appointment Request Confirmed",
  description: "Your appointment request has been received",
}

export default function ConfirmationPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-emerald-500" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Appointment Request Received</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Thank you for requesting an appointment with PetCare Veterinary Clinic. We've received your information and
          will contact you shortly to confirm your appointment details.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

