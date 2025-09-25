"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState, useRef } from "react"
import Image from "next/image"

export default function ConditionalHeader() {
  const pathname = usePathname()
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Don't show header on homepage since it has its own integrated navigation
  if (pathname === "/") {
    return null
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsServicesOpen(true)
    console.log("[v0] Services dropdown opened")
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
      console.log("[v0] Services dropdown closed")
    }, 150) // Small delay to allow moving to dropdown
  }

  const handleLogoClick = () => {
    // Navigate to homepage and scroll to top
    window.location.href = "/"
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={handleLogoClick}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 relative">
              <Image src="/logo.jpg" alt="Yellow Balloon Kids Hair Salon Logo" fill className="object-contain" />
            </div>
            <span className="font-black text-xl bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              The Yellow Balloon
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-gray-700 hover:text-yellow-500 font-medium transition-colors">
              About
            </Link>

            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="text-gray-800 hover:text-yellow-600 font-medium transition-colors flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[60]"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                  >
                    All Services & Pricing
                  </Link>
                  <Link
                    href="/services/haircuts"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                  >
                    Haircuts
                  </Link>
                  <Link
                    href="/services/glamour-parties"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                  >
                    Glamour Parties
                  </Link>
                  <Link
                    href="/services/lice-screening"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                  >
                    Lice Screening & Treatment
                  </Link>
                </div>
              )}
            </div>

            <Link href="/#pricing" className="text-gray-700 hover:text-yellow-500 font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/#gallery" className="text-gray-700 hover:text-yellow-500 font-medium transition-colors">
              Gallery
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-yellow-500 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+13015696756"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-coral-100 text-coral-700 font-semibold rounded-full hover:bg-coral-200 transition-all duration-200 shadow-lg hover:shadow-xl border border-coral-200"
            >
              Call Now
            </a>
            <Link
              href="tel:3015696756"
              className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-700 font-semibold rounded-full hover:bg-yellow-200 transition-all duration-200 shadow-lg hover:shadow-xl border border-yellow-200"
            >
              Call to Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
