import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Syringe, Microscope, Heart, Clock, Award } from "lucide-react"
import { homePage } from "@/lib/content"

export default function Home() {
  // Helper function to get the right icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="h-6 w-6 text-emerald-500 mb-2" />
      case "Syringe":
        return <Syringe className="h-6 w-6 text-emerald-500 mb-2" />
      case "Microscope":
        return <Microscope className="h-6 w-6 text-emerald-500 mb-2" />
      case "Heart":
        return <Heart className="h-6 w-6 text-emerald-600" />
      case "Award":
        return <Award className="h-6 w-6 text-emerald-600" />
      case "Clock":
        return <Clock className="h-6 w-6 text-emerald-600" />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-emerald-500 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero-background.jpg"
            alt="Veterinary clinic background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Using content from homePage.hero */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{homePage.hero.title}</h1>
            <p className="mt-6 text-lg leading-8 text-white">{homePage.hero.description}</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 w-full sm:w-auto">
                <Link href="/booking">Fă o programare</Link>
              </Button>
              {/* <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10 w-full sm:w-auto"
              >
                <Link href="/services">Servicii</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Using content from homePage.services */}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{homePage.services.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{homePage.services.description}</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {/* Map through service items */}
            {homePage.services.items.map((service, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  {getIcon(service.icon)}
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="text-emerald-600">
              <Link href="/services">Vezi si alte servicii</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Using content from homePage.whyChooseUs */}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{homePage.whyChooseUs.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{homePage.whyChooseUs.description}</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {/* Map through whyChooseUs items */}
            {homePage.whyChooseUs.items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="rounded-full bg-emerald-100 p-3 mb-4">{getIcon(item.icon)}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Using content from homePage.testimonials */}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{homePage.testimonials.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{homePage.testimonials.description}</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {/* Map through testimonial items */}
            {homePage.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <Image
                        className="h-12 w-12 rounded-full"
                        src={`/testimonial-${index + 1}.jpg`}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                      <p className="mt-4 font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Using content from homePage.cta */}
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{homePage.cta.title}</h2>
            <p className="mt-4 text-lg text-emerald-100">{homePage.cta.description}</p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Link href="/booking">Fă o programare</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

