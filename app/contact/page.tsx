import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import ContactForm from "@/components/contact-form"
import GoogleMap from "@/components/google-map"
import { contactPage, siteInfo } from "@/lib/content"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with PetCare Veterinary Clinic",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Using content from contactPage.hero */}
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{contactPage.hero.title}</h1>
            <p className="mt-6 text-lg text-muted-foreground">{contactPage.hero.description}</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              {/* Using content from contactPage.getInTouch */}
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">{contactPage.getInTouch.title}</h2>
              <p className="text-muted-foreground mb-8">{contactPage.getInTouch.description}</p>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <MapPin className="h-5 w-5 text-emerald-500 mb-2" />
                    <CardTitle className="text-base">Adresa</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Using content from siteInfo */}
                    <p className="text-sm text-muted-foreground">{siteInfo.address}</p>
                    <Link
                      href={`https://maps.google.com/?q=${encodeURIComponent(siteInfo.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-600 hover:underline mt-2 inline-block"
                    >
                      View on Map
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <Phone className="h-5 w-5 text-emerald-500 mb-2" />
                    <CardTitle className="text-base">Telefon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Using content from siteInfo */}
                    <p className="text-sm text-muted-foreground">{siteInfo.phone}</p>
                    <p className="text-sm text-muted-foreground">{siteInfo.emergencyPhone}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Asteptam telefoanele dumneavoastra si in afara programului pentru urgente.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <Mail className="h-5 w-5 text-emerald-500 mb-2" />
                    <CardTitle className="text-base">Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Using content from siteInfo */}
                    <p className="text-sm text-muted-foreground">{siteInfo.email}</p>
                    <p className="text-xs text-muted-foreground mt-1">De obicei răspundem în termen de 24 de ore.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <Clock className="h-5 w-5 text-emerald-500 mb-2" />
                    <CardTitle className="text-base">Program</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Using content from siteInfo */}
                    <div className="text-sm text-muted-foreground">
                      <p>{siteInfo.hours.weekdays}</p>
                      <p>{siteInfo.hours.saturday}</p>
                      <p>{siteInfo.hours.sunday}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {/* Using content from siteInfo */}
                  <Link href={siteInfo.socialMedia.facebook} className="text-muted-foreground hover:text-emerald-500">
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href={siteInfo.socialMedia.instagram} className="text-muted-foreground hover:text-emerald-500">
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href={siteInfo.socialMedia.twitter} className="text-muted-foreground hover:text-emerald-500">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <Card>
                {/* Using content from contactPage.contactForm */}
                <CardHeader>
                  <CardTitle>{contactPage.contactForm.title}</CardTitle>
                  <CardDescription>{contactPage.contactForm.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            {/* Using content from contactPage.map */}
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{contactPage.map.title}</h2>
            <p className="mt-4 text-muted-foreground">{contactPage.map.description}</p>
          </div>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
            {/* Using address from siteInfo */}
            <GoogleMap address={siteInfo.address} zoom={15} />
          </div>
          <div className="mt-6 text-center">
            <Button asChild variant="outline" className="text-emerald-600">
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            {/* Using content from contactPage.faq */}
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{contactPage.faq.title}</h2>
            <p className="mt-4 text-muted-foreground">{contactPage.faq.description}</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {/* Map through FAQ items */}
              {contactPage.faq.items.map((item, index) => (
                <div key={index} className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Using content from homePage.cta */}
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{contactPage.hero.title}</h2>
            <p className="mt-4 text-lg text-emerald-100">
              Book an appointment today and give your pet the care they deserve.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Link href="/booking">Book an Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

