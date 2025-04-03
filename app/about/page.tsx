import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about PetCare Veterinary Clinic and our dedicated team",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About PetCare Veterinary Clinic</h1>
            <p className="mt-6 text-lg text-muted-foreground">Providing compassionate care for your pets since 2005</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PetCare Veterinary Clinic was founded in 2005 by Dr. James Wilson with a simple mission: to provide
                  exceptional veterinary care with compassion and respect for both pets and their owners.
                </p>
                <p>
                  What started as a small practice has grown into a full-service veterinary clinic, but our core values
                  remain the same. We believe that pets are family members who deserve the highest quality healthcare
                  delivered with kindness and understanding.
                </p>
                <p>
                  Over the years, we've expanded our facilities and services to meet the growing needs of our community,
                  investing in advanced medical equipment and continuing education for our staff to ensure we provide
                  the best possible care.
                </p>
                <p>
                  Today, our team of experienced veterinarians and support staff work together to deliver comprehensive
                  healthcare services for pets of all kinds, from routine wellness care to specialized treatments and
                  emergency services.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/about-team.jpg" alt="Veterinary clinic team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-muted py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To provide exceptional veterinary care that enhances the quality of life for pets and strengthens the bond
              between pets and their families.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Compassionate Care</h3>
              <p className="text-muted-foreground">
                We treat every pet with kindness, respect, and gentle handling to minimize stress and create a positive
                experience.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Medical Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to providing the highest standard of veterinary medicine through ongoing education and
                advanced technology.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Client Partnership</h3>
              <p className="text-muted-foreground">
                We believe in working together with pet owners, providing education and support to help you make
                informed decisions about your pet's health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">Our Facility</h2>
            <p className="text-muted-foreground">
              Our modern clinic is designed to provide a comfortable environment for pets and their owners while
              offering state-of-the-art medical care.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/facility-reception.jpg" alt="Reception area" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white font-medium">Welcoming Reception</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/facility-exam.jpg" alt="Examination room" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white font-medium">Comfortable Exam Rooms</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/facility-surgery.jpg" alt="Surgical suite" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white font-medium">Modern Surgical Suite</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/facility-lab.jpg" alt="Laboratory" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white font-medium">In-House Laboratory</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/facility-dental.jpg" alt="Dental suite" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white font-medium">Dental Care Suite</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/facility-recovery.jpg" alt="Recovery area" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white font-medium">Comfortable Recovery Area</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

