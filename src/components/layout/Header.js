"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // State to toggle the mobile "Previous Camps" accordion
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // LOGIC: Header is "Transparent" ONLY if we are on Home Page AND at the top (not scrolled) AND mobile menu is closed
  const isHome = pathname === '/'
  const isTransparent = isHome && !scrolled && !isOpen

  // UPDATED NAV STRUCTURE
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Previous Camps',
      href: '#', // Placeholder for parent
      children: [
        { name: 'Winter Camp Jan 2025', href: '/camp-1' },
        { name: 'Winter Camp Dec 2025', href: '/camp-2' },
      ]
    },
    { name: 'Career', href: '/career' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-2 ${isTransparent
        ? 'bg-transparent' // Transparent on Home Hero
        : 'bg-white/90 backdrop-blur-md border-b border-celadon/30 shadow-sm' // Glassy elsewhere
        }`}
    >
      <nav className="w-full mx-auto px-3 md:px-6 relative flex items-center justify-between">

        {/* LOGO SECTION */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.jpg"
              alt="Sahyadri Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className={`font-serif font-bold text-base md:text-xl tracking-wide transition-colors ${isTransparent
            ? 'text-white drop-shadow-md'
            : 'text-evergreen'
            }`}>
            Sahyadri Rural Connect
          </span>
        </Link>

        {/* DESKTOP NAV (Hidden below 850px) */}
        <div className="hidden min-[850px]:flex items-center gap-8">
          {navLinks.map((link) => {

            // --- DROPDOWN LOGIC FOR PARENT ITEMS ---
            if (link.children) {
              const isChildActive = link.children.some(child => pathname === child.href)

              return (
                <div key={link.name} className="relative group">
                  {/* Parent Trigger */}
                  <button
                    className={`flex items-center gap-1 text-sm tracking-wide transition-all duration-300 py-1 font-medium ${isTransparent
                      ? (isChildActive ? 'text-white font-bold' : 'text-white/80 hover:text-white')
                      : (isChildActive ? 'text-evergreen font-bold' : 'text-pine_teal hover:text-sea_green')
                      }`}
                  >
                    {link.name}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>

                  {/* Dropdown Menu (Invisible bridge for hovering) */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white backdrop-blur-md border-b border-celadon/30 shadow-xl rounded-xl overflow-hidden min-w-[160px] py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`block px-6 py-2 text-sm font-medium hover:text-sea_green hover:bg-gray-50 transition-colors whitespace-nowrap ${pathname === child.href ? 'font-bold text-sea_green bg-gray-50' : ''
                            }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            // --- STANDARD LINK ---
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide transition-all duration-300 relative group py-1 ${isActive ? 'font-bold' : 'font-medium'
                  } ${isTransparent
                    ? isActive ? 'text-white' : 'text-white/80 hover:text-white'
                    : isActive ? 'text-evergreen' : 'text-pine_teal hover:text-sea_green'
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-sea_green'
                  } ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            )
          })}

          {/* REGISTER CTA BUTTON (Desktop) */}
          <Link
            href="/register"
            className={`ml-2 px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 ${isTransparent
              ? 'bg-white text-evergreen hover:bg-frosted_mint'
              : 'bg-gradient-to-r from-sea_green to-dark_emerald text-white hover:from-dark_emerald hover:to-evergreen'
              }`}
          >
            Upcoming Camp
          </Link>
        </div>

        {/* MOBILE: Register + Hamburger */}
        <div className="min-[850px]:hidden flex items-center gap-3">
          {/* Mobile Register Button */}
          <Link
            href="/register"
            className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide bg-gradient-to-r from-sea_green to-dark_emerald text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 text-center"
            onClick={() => setIsOpen(false)}
          >
            Upcoming Camp
          </Link>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            className={`p-2 transition-colors ${isTransparent ? 'text-white' : 'text-evergreen'
              }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <div
          className={`absolute top-full left-0 w-full min-[850px]:hidden flex flex-col items-center overflow-hidden transition-all duration-300 ease-in-out
            bg-white/95 backdrop-blur-xl border-t border-celadon/20 shadow-xl h-screen
            ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
          `}
        >
          <div className="flex flex-col w-full px-6 pb-12 overflow-y-auto">
            {navLinks.map((link) => {

              // --- MOBILE ACCORDION FOR PARENT ITEMS ---
              if (link.children) {
                const isChildActive = link.children.some(child => pathname === child.href)
                return (
                  <div key={link.name} className="w-full border-b border-sea_green/20 last:border-none">
                    <button
                      onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
                      className={`w-full flex justify-between items-center py-4 text-base font-serif font-medium ${isChildActive ? 'text-sea_green' : 'text-pine_teal/80'
                        }`}
                    >
                      {link.name}
                      <ChevronRight
                        size={20}
                        className={`transition-transform duration-300 ${mobileSubMenuOpen ? 'rotate-90' : ''}`}
                      />
                    </button>

                    {/* Sub-menu Items */}
                    <div className={`overflow-hidden transition-all duration-300 bg-gray-50/50 rounded-lg mb-2 ${mobileSubMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                      {link.children.map(child => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`block w-full py-3 px-6 text-sm text-left ${pathname === child.href ? 'text-sea_green font-bold' : 'text-gray-600'
                            }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              // --- STANDARD MOBILE LINK ---
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`w-full text-left py-4 border-b border-sea_green/20 last:border-none text-base font-serif transition-colors duration-200 ${isActive
                    ? 'text-sea_green font-bold'
                    : 'text-pine_teal/80 font-medium'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}

            {/* Mobile Menu Register CTA */}
            <Link
              href="/register"
              className="mt-6 w-full text-center py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sea_green to-dark_emerald shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>

      </nav>
    </header>
  )
}