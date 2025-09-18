"use client"

import Link from "next/link"
import { useState, useRef } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 150)
  }

  const handleLogoClick = () => {
    window.location.href = "/"
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm h-16">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-yellow-900 font-bold text-sm">🎈</span>
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
            href="/#contact"
            className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-700 font-semibold rounded-full hover:bg-yellow-200 transition-all duration-200 shadow-lg hover:shadow-xl border border-yellow-200"
          >
            Book Now
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-balloon border-t border-gray-200">
          <nav className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <Link
              href="/"
              className="text-balloon-dark hover:text-gray-600 font-medium py-2 transition-colors"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-balloon-dark hover:text-gray-600 font-medium py-2 transition-colors"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/services/haircuts"
              className="text-balloon-dark hover:text-gray-600 font-medium py-2 transition-colors"
              onClick={closeMobileMenu}
            >
              Haircuts
            </Link>
            <Link
              href="/services/glamour-parties"
              className="text-balloon-dark hover:text-gray-600 font-medium py-2 transition-colors"
              onClick={closeMobileMenu}
            >
              Glamour Parties
            </Link>
            <Link
              href="/services/lice-screening"
              className="text-balloon-dark hover:text-gray-600 font-medium py-2 transition-colors"
              onClick={closeMobileMenu}
            >
              Lice Screening & Treatment
            </Link>
            <Link
              href="/gallery"
              className="text-balloon-dark hover:text-gray-600 font-medium py-2 transition-colors"
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-balloon-dark hover:text-gray-600 font-medium py-2 transition-colors"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
