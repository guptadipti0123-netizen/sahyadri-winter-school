"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ChevronRight, Moon, Sun, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [campsDropdownOpen, setCampsDropdownOpen] = useState(false)
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false)
    setCampsDropdownOpen(false)
  }, [pathname])

  // Camps list in chronological order
  const campsList = [
    {
      name: 'Summer School',
      place: 'Jawhar',
      date: 'May 2026',
      badge: "Summer '26",
      href: '/camp-3'
    },
    {
      name: 'Winter School',
      place: 'Karjat',
      date: 'Dec 2025',
      badge: '2nd Edition',
      href: '/camp-2'
    },
    {
      name: 'Winter School',
      place: 'Palghar',
      date: 'Jan 2025',
      badge: '1st Edition',
      href: '/camp-1'
    },
  ]

  // Nav links on the left
  const leftNavLinks = [
    { name: 'About', href: '/about' },
    {
      name: 'Camps',
      href: '#',
      isDropdown: true,
      children: campsList
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Career', href: '/career' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* ================= FLOATING KWINA-STYLE CAPSULE NAVBAR ================= */}
      <header className="fixed top-2.5 sm:top-4 inset-x-0 z-50 px-2.5 sm:px-6 max-w-7xl mx-auto pointer-events-none">
        <nav 
          className={`pointer-events-auto bg-[#f5efe2]/90 backdrop-blur-md border border-[#dccdb2] rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'shadow-[0_8px_30px_rgba(62,36,16,0.08)] bg-[#f5efe2]/95 border-[#c4b49a]' : 'shadow-[0_4px_20px_rgba(62,36,16,0.04)]'
          }`}
        >

          {/* ================= 1. LEFT: NAV LINKS (Desktop) ================= */}
          <div className="hidden min-[960px]:flex items-center gap-5 xl:gap-7">
            {leftNavLinks.map((link) => {
              
              // Dropdown for Camps
              if (link.isDropdown) {
                const isChildActive = link.children.some(child => pathname === child.href) || pathname === '/camps'
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setCampsDropdownOpen(true)}
                    onMouseLeave={() => setCampsDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setCampsDropdownOpen((prev) => !prev)}
                      className={`group relative flex items-center gap-1 text-[13px] xl:text-[14px] font-medium transition-colors py-1 cursor-pointer ${
                        isChildActive ? 'text-[#3e2410] font-semibold' : 'text-[#7a5232] hover:text-[#3e2410]'
                      }`}
                      aria-expanded={campsDropdownOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDown 
                        size={13} 
                        className={`transition-transform duration-300 ${campsDropdownOpen ? 'rotate-180 text-[#3a8c7e]' : ''}`} 
                      />
                      <span className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-[#3a8c7e] transition-transform duration-300 ease-out ${isChildActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                    </button>

                    {/* Dropdown Floating Menu */}
                    <div 
                      className={`absolute top-full left-0 pt-3 transition-all duration-200 z-50 ${
                        campsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                      }`}
                    >
                      <div className="bg-[#fdfbf7] backdrop-blur-xl border border-[#dccdb2] shadow-xl rounded-2xl overflow-hidden min-w-[280px] py-1.5 divide-y divide-[#ebe2d1]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setCampsDropdownOpen(false)}
                            className={`block px-4 py-2.5 hover:bg-[#ebe2d1]/50 transition-colors ${
                              pathname === child.href ? 'bg-[#ebe2d1]/60 text-[#3a8c7e]' : ''
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs sm:text-sm font-semibold text-[#3e2410]">
                                {child.name}
                              </span>
                              <span className="text-[10px] font-bold text-[#3a8c7e] bg-[#3a8c7e]/10 border border-[#3a8c7e]/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                {child.badge}
                              </span>
                            </div>
                            <div className="text-[11px] text-[#7a5232] font-medium mt-0.5 flex items-center justify-between">
                              <span>{child.place}</span>
                              <span>{child.date}</span>
                            </div>
                          </Link>
                        ))}
                        
                        {/* All Camps Link */}
                        <Link
                          href="/camps"
                          onClick={() => setCampsDropdownOpen(false)}
                          className="block px-4 py-2.5 text-center text-xs font-bold text-[#3a8c7e] bg-[#ebe2d1]/30 hover:bg-[#3a8c7e]/10 transition-colors"
                        >
                          View All Camps &amp; Directory →
                        </Link>
                      </div>
                    </div>

                  </div>
                )
              }

              // Standard Link
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative text-[13px] xl:text-[14px] font-medium transition-colors py-1 ${
                    isActive ? 'text-[#3e2410] font-semibold' : 'text-[#7a5232] hover:text-[#3e2410]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-[#3a8c7e] transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              )
            })}
          </div>

          {/* ================= 2. BRAND LOGO (Responsive Text) ================= */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-2.5 group select-none shrink-0"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 overflow-hidden rounded-full shadow-xs border border-[#3e2410]/15 transition-transform duration-300 group-hover:scale-105 shrink-0">
              <Image
                src="/logo.jpg"
                alt="Sahyadri Rural Connect Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="font-serif font-bold text-[14px] sm:text-base lg:text-xl text-[#3e2410] tracking-tight group-hover:text-[#3a8c7e] transition-colors whitespace-nowrap">
              Sahyadri Rural Connect
            </span>
          </Link>

          {/* ================= 3. RIGHT: THEME TOGGLE, CTA BUTTON & HAMBURGER ================= */}
          <div className="flex items-center gap-1 sm:gap-3 shrink-0">
            
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className="p-1.5 sm:p-2 rounded-full text-[#7a5232] hover:text-[#3e2410] hover:bg-[#ebe2d1]/60 transition-all cursor-pointer hidden sm:flex"
            >
              {darkMode ? <Sun size={16} className="text-[#c8880a]" /> : <Moon size={16} />}
            </button>

            {/* Kwina Vedic Teal Pill CTA Button */}
            <Link
              href="/register"
              className="hidden min-[960px]:inline-flex bg-[#3a8c7e] hover:bg-[#1f5c54] text-[#f5efe2] font-semibold text-[11px] sm:text-xs tracking-wider uppercase px-4 sm:px-5 py-2 sm:py-2.5 rounded-full items-center gap-1.5 shadow-sm transition-all hover:scale-102 active:scale-98 whitespace-nowrap"
            >
              <span>Explore Programs</span>
              <ChevronRight size={13} className="text-[#f5efe2]/90" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className="min-[960px]:hidden p-1.5 text-[#3e2410] hover:bg-[#ebe2d1]/60 rounded-full transition-colors flex items-center justify-center shrink-0 touch-manipulation"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>

        </nav>

        {/* ================= MOBILE MENU DRAWER ================= */}
        {isOpen && (
          <div className="pointer-events-auto mt-2 w-full max-h-[82vh] overflow-y-auto bg-[#f5efe2]/98 backdrop-blur-2xl border border-[#dccdb2] rounded-3xl p-4 sm:p-5 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200 min-[960px]:hidden">
            <div className="flex flex-col divide-y divide-[#ebe2d1] text-sm">
              <Link
                href="/"
                className={`py-3 font-medium transition-colors ${pathname === '/' ? 'text-[#3a8c7e] font-bold' : 'text-[#3e2410] hover:text-[#3a8c7e]'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`py-3 font-medium transition-colors ${pathname === '/about' ? 'text-[#3a8c7e] font-bold' : 'text-[#3e2410] hover:text-[#3a8c7e]'}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Camps Accordion */}
              <div className="py-2">
                <button
                  onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
                  className="w-full flex items-center justify-between py-2 font-medium text-[#3e2410] cursor-pointer"
                >
                  <span className={pathname.startsWith('/camp') || pathname === '/summer-school' ? 'text-[#3a8c7e] font-bold' : ''}>Camps</span>
                  <ChevronRight size={16} className={`transition-transform duration-200 ${mobileSubMenuOpen ? 'rotate-90 text-[#3a8c7e]' : ''}`} />
                </button>
                {mobileSubMenuOpen && (
                  <div className="pl-3 pr-2 py-2 space-y-2 bg-[#ebe2d1]/40 rounded-2xl my-1 border border-[#dccdb2]/60">
                    {campsList.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={`block p-2 rounded-xl text-xs font-semibold transition-colors ${pathname === c.href ? 'bg-[#fdfbf7] text-[#3a8c7e] shadow-xs' : 'text-[#7a5232] hover:text-[#3e2410]'}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span>{c.name} ({c.place})</span>
                          <span className="text-[10px] font-bold text-[#3a8c7e] bg-[#3a8c7e]/10 px-2 py-0.5 rounded-md border border-[#3a8c7e]/30">{c.date}</span>
                        </div>
                      </Link>
                    ))}
                    <Link
                      href="/camps"
                      className={`block p-2 rounded-xl text-xs font-bold transition-colors text-center ${pathname === '/camps' ? 'bg-[#fdfbf7] text-[#3a8c7e] shadow-xs' : 'text-[#3a8c7e] bg-[#fdfbf7]/80 hover:bg-[#fdfbf7]'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      View All Camps Directory →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className={`py-3 font-medium transition-colors ${pathname.startsWith('/blog') ? 'text-[#3a8c7e] font-bold' : 'text-[#3e2410] hover:text-[#3a8c7e]'}`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/career"
                className={`py-3 font-medium transition-colors ${pathname === '/career' ? 'text-[#3a8c7e] font-bold' : 'text-[#3e2410] hover:text-[#3a8c7e]'}`}
                onClick={() => setIsOpen(false)}
              >
                Career
              </Link>
              <Link
                href="/contact"
                className={`py-3 font-medium transition-colors ${pathname === '/contact' ? 'text-[#3a8c7e] font-bold' : 'text-[#3e2410] hover:text-[#3a8c7e]'}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/register"
                  className="w-full flex items-center justify-center gap-2 text-center py-3 rounded-full bg-[#3a8c7e] text-[#f5efe2] font-semibold text-xs uppercase tracking-wider shadow-md hover:bg-[#1f5c54] active:scale-98 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Explore Programs</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}