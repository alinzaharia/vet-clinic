"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, Home, Info, Stethoscope, Users, BookOpen, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { navigation, siteInfo } from "@/lib/content"
import { basePath } from "@/next.config.mjs"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  // Helper function to get the right icon for each menu item
  const getIcon = (path: string) => {
    switch (path) {
      case "/":
        return <Home className="h-5 w-5 mr-2" />
      case "/about":
        return <Info className="h-5 w-5 mr-2" />
      case "/services":
        return <Stethoscope className="h-5 w-5 mr-2" />
      case "/team":
        return <Users className="h-5 w-5 mr-2" />
      case "/blog":
        return <BookOpen className="h-5 w-5 mr-2" />
      case "/contact":
        return <Mail className="h-5 w-5 mr-2" />
      default:
        return null
    }
  }

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: "white",
        overflowY: "auto",
      }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" onClick={onClose}>
            <div className="flex items-center gap-2">
              {/* <Image src="/logo.png" width={40} height={40} alt="PetCare Logo" className="h-10 w-auto" /> */}
              <Image
                src={`${basePath}/logo.png`} // Ensure the logo has a transparent background
                width={100} // Adjusted size
                height={100}
                alt="BB Vet Logo"
                className="h-22 w-22 rounded-full object-cover" // Makes the image circular
              />
              <span className="font-semibold text-lg">{siteInfo.shortName}</span>
            </div>
          </Link>
          <button type="button" className="rounded-md p-2 text-gray-700" onClick={onClose}>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col items-center mt-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xl font-semibold flex items-center py-4 ${
                pathname === item.href ? "text-primary font-bold" : "text-foreground"
              }`}
              onClick={onClose}
            >
              {getIcon(item.href)}
              {item.name}
            </Link>
          ))}

          <div className="w-full pt-6 mt-6 border-t border-gray-200">
            <Button asChild className="w-full bg-primary text-white hover:bg-primary/90">
              <Link href="/booking" onClick={onClose} className="flex items-center justify-center">
                <Calendar className="h-5 w-5 mr-2" />
                Fă o programare
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

