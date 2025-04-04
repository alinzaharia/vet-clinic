import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Stethoscope,
  Syringe,
  Microscope,
  Scissors,
  SmileIcon as Tooth,
  HeartPulse,
  Pill,
  X,
  Dog,
  Cat,
  Rabbit,
  Bird,
} from "lucide-react"
import { homePage, servicesPage } from "@/lib/content"
import { basePath } from "@/next.config.mjs"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive veterinary services for all your pet's healthcare needs",
}

export default function ServicesPage() {
  // Helper function to get the right icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="h-6 w-6 text-emerald-500 mb-2" />
      case "Syringe":
        return <Syringe className="h-6 w-6 text-emerald-500 mb-2" />
      case "Microscope":
        return <Microscope className="h-6 w-6 text-emerald-500 mb-2" />
      case "Scissors":
        return <Scissors className="h-6 w-6 text-emerald-500 mb-2" />
      case "Tooth":
        return <Tooth className="h-6 w-6 text-emerald-500 mb-2" />
      case "HeartPulse":
        return <HeartPulse className="h-6 w-6 text-emerald-500 mb-2" />
      case "Pill":
        return <Pill className="h-6 w-6 text-emerald-500 mb-2" />
      case "X":
        return <X className="h-6 w-6 text-emerald-500 mb-2" />
      case "Dog":
        return <Dog className="h-10 w-10 text-emerald-500" />
      case "Cat":
        return <Cat className="h-10 w-10 text-emerald-500" />
      case "Rabbit":
        return <Rabbit className="h-10 w-10 text-emerald-500" />
      case "Bird":
        return <Bird className="h-10 w-10 text-emerald-500" />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
<section className="relative bg-gradient-to-r from-teal-500 to-emerald-500 py-12 md:py-20">
  <div className="absolute inset-0 overflow-hidden">
    <Image
      src={`${basePath}/hero-background.jpg`} // Background image
      alt="Veterinary clinic background"
      fill
      className="object-cover opacity-20"
      priority
    />
  </div>
  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      {/* Using content from servicesPage.hero */}
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{servicesPage.hero.title}</h1>
      <p className="mt-6 text-lg leading-8 text-white">{servicesPage.hero.description}</p>
    </div>
  </div>
</section>

      {/* Services Overview */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Map through services */}
            {servicesPage.services.map((service, index) => (
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
        </div>
      </section>

      {/* Species-Specific Care */}
      {/* <section className="bg-muted py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{servicesPage.speciesSpecific.title}</h2>
            <p className="mt-4 text-muted-foreground">{servicesPage.speciesSpecific.description}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {Map through species }
            {servicesPage.speciesSpecific.species.map((species, index) => (
              <div key={index} className="bg-background rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">{getIcon(species.icon)}</div>
                <h3 className="text-lg font-semibold mb-2">{species.name}</h3>
                <p className="text-sm text-muted-foreground">{species.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Species-Specific Care */}
<section className="bg-muted py-12 md:py-20">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center mb-12">
      {/* Using content from servicesPage.speciesSpecific */}
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{servicesPage.speciesSpecific.title}</h2>
      <p className="mt-4 text-muted-foreground">{servicesPage.speciesSpecific.description}</p>
    </div>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
      {/* Map through species */}
      {servicesPage.speciesSpecific.species.map((species, index) => (
        <div key={index} className="bg-background rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">{getIcon(species.icon)}</div>
          <h3 className="text-lg font-semibold mb-2">{species.name}</h3>
          <p className="text-sm text-muted-foreground">{species.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-emerald-600 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{homePage.cta.title}</h2>
            <p className="mt-4 text-lg text-emerald-100">
            {homePage.cta.description}
            </p>
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

