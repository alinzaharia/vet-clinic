import type { Metadata } from "next"
import BookingForm from "@/components/booking-form"
import { homePage, siteInfo } from "@/lib/content"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Schedule a visit for your pet at PetCare Veterinary Clinic",
}

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{homePage.cta.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {homePage.cta.description}
          </p>
        </div>

        <div className="bg-muted/50 p-6 rounded-lg mb-8">
          <h2 className="text-lg font-semibold mb-4">Informatii</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li>
              Pentru urgente, asteptam telefonul dumneavoastra la{" "}
              <Link href={`tel:${siteInfo.emergencyPhone}`} className="hover:text-primary">{siteInfo.emergencyPhone}</Link>, 
              <Link href={`tel:${siteInfo.emergencyPhone}`} className="hover:text-primary">{siteInfo.phone}</Link>.
            </li>
            <li>Va rugam sa ajungeti cu 10 minute inainte de ora programarii.</li>
            <li>Aduceti carnetul animalutului si alte documente medicale daca e prima vizita.</li>
            <li>Pentru siguranta lor, cainii trebuiesc tinuti in lesa iar pisicile in custi de transport.</li>
            <li>Formularul nu reprezinta confirmarea programarii, vom confirma programarea telefonic in maxim 24h.</li>
          </ul>
        </div>
        <BookingForm />
      </div>
    </div>
  )
}

