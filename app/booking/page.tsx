import type { Metadata } from "next"
import BookingForm from "@/components/booking-form"

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Schedule a visit for your pet at PetCare Veterinary Clinic",
}

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Book an Appointment</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Schedule a visit for your pet at PetCare Veterinary Clinic
          </p>
        </div>

        <div className="bg-muted/50 p-6 rounded-lg mb-8">
          <h2 className="text-lg font-semibold mb-4">Before You Book</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li>For emergencies, please call us directly at (555) 123-4567</li>
            <li>Please arrive 10 minutes before your scheduled appointment</li>
            <li>Bring any previous medical records if this is your first visit</li>
            <li>Dogs should be on a leash and cats in carriers for their safety</li>
            <li>We'll confirm your appointment by email or phone within 24 hours</li>
          </ul>
        </div>

        <BookingForm />
      </div>
    </div>
  )
}

