import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { siteInfo } from "@/lib/content"

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:w-1/2 lg:w-1/3">
          <h3 className="text-lg font-semibold">{siteInfo.name}</h3>
          <p className="text-sm text-muted-foreground">
            Providing compassionate veterinary care for your pets since 2005. Our mission is to ensure the health and
            happiness of your beloved companions.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 md:mt-0 md:w-1/2 lg:w-2/3 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-primary">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-sm text-muted-foreground hover:text-primary">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold">Contact Us</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">{siteInfo.address}</li>
              <li className="text-sm text-muted-foreground">Phone: {siteInfo.phone}</li>
              <li className="text-sm text-muted-foreground">Email: {siteInfo.email}</li>
              <li className="text-sm text-muted-foreground">Hours: {siteInfo.hours.weekdays}, {siteInfo.hours.saturday}, {siteInfo.hours.sunday}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-gray-200 px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} PetCare Veterinary Clinic. All rights reserved.
        </div>
        <div className="mt-4 flex space-x-6 md:mt-0">
          <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

