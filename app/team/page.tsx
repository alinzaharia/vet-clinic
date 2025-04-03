import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the dedicated veterinarians and staff at PetCare Veterinary Clinic",
}

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Our dedicated professionals are committed to providing the best care for your pets
            </p>
          </div>
        </div>
      </section>

      {/* Veterinarians */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Our Veterinarians</h2>
            <p className="mt-4 text-muted-foreground">
              Experienced doctors dedicated to your pet's health and wellbeing
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-[3/2] relative">
                <Image src="/vet-wilson.jpg" alt="Dr. James Wilson" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Dr. James Wilson</CardTitle>
                <CardDescription>Founder & Chief Veterinarian</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dr. Wilson founded PetCare Veterinary Clinic in 2005 after 10 years in emergency medicine. He
                  specializes in internal medicine and surgery, with a particular interest in geriatric care.
                </p>
                <div className="mt-4 text-sm">
                  <p>
                    <strong>Education:</strong> Cornell University College of Veterinary Medicine
                  </p>
                  <p>
                    <strong>Certifications:</strong> American Board of Veterinary Practitioners
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-[3/2] relative">
                <Image src="/vet-chen.jpg" alt="Dr. Sarah Chen" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Dr. Sarah Chen</CardTitle>
                <CardDescription>Veterinarian</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dr. Chen joined our team in 2012 and specializes in soft tissue surgery and dermatology. She has a
                  special interest in feline medicine and is certified in veterinary acupuncture.
                </p>
                <div className="mt-4 text-sm">
                  <p>
                    <strong>Education:</strong> University of California, Davis
                  </p>
                  <p>
                    <strong>Certifications:</strong> International Veterinary Acupuncture Society
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-[3/2] relative">
                <Image src="/vet-rodriguez.jpg" alt="Dr. Michael Rodriguez" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Dr. Michael Rodriguez</CardTitle>
                <CardDescription>Veterinarian</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dr. Rodriguez specializes in orthopedic surgery and sports medicine. He has extensive experience
                  working with working dogs and performance animals, helping them recover from injuries.
                </p>
                <div className="mt-4 text-sm">
                  <p>
                    <strong>Education:</strong> Colorado State University
                  </p>
                  <p>
                    <strong>Certifications:</strong> Canine Rehabilitation Institute
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="bg-muted py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Our Support Staff</h2>
            <p className="mt-4 text-muted-foreground">The dedicated team that keeps our clinic running smoothly</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-background rounded-lg p-6 text-center">
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full mb-4">
                <Image
                  src="/staff-martinez.jpg"
                  alt="Jessica Martinez"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Jessica Martinez</h3>
              <p className="text-sm text-muted-foreground mb-2">Practice Manager</p>
              <p className="text-xs text-muted-foreground">
                With us since 2010, Jessica oversees all clinic operations and ensures everything runs smoothly.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 text-center">
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full mb-4">
                <Image
                  src="/staff-thompson.jpg"
                  alt="David Thompson"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">David Thompson</h3>
              <p className="text-sm text-muted-foreground mb-2">Head Veterinary Technician</p>
              <p className="text-xs text-muted-foreground">
                David has over 15 years of experience and leads our technical team with expertise and compassion.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 text-center">
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full mb-4">
                <Image
                  src="/staff-wong.jpg"
                  alt="Lisa Wong"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Lisa Wong</h3>
              <p className="text-sm text-muted-foreground mb-2">Veterinary Technician</p>
              <p className="text-xs text-muted-foreground">
                Lisa specializes in anesthesia and monitoring, ensuring pets are safe and comfortable during procedures.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 text-center">
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full mb-4">
                <Image
                  src="/staff-johnson.jpg"
                  alt="Marcus Johnson"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Marcus Johnson</h3>
              <p className="text-sm text-muted-foreground mb-2">Veterinary Assistant</p>
              <p className="text-xs text-muted-foreground">
                Marcus helps with patient care and assists our veterinarians during examinations and procedures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

