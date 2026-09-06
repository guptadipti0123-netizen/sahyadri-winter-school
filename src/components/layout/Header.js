"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ChevronRight, Search, Moon, Sun, ArrowRight, BookOpen, MapPin } from 'lucide-react'
import Image from 'next/image'
import { blogsData } from '@/data/blogsData'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [campsDropdownOpen, setCampsDropdownOpen] = useState(false)
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
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
    setSearchOpen(false)
    setCampsDropdownOpen(false)
  }, [pathname])

  // Camps list
  const campsList = [
    {
      name: 'Summer School',
      place: 'Jawhar, Palghar',
      date: 'May 2026',
      badge: 'Upcoming',
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

  // Filtered search results
  const searchResults = searchQuery.trim() === '' ? [] : [
    ...campsList.filter(c => 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.place.toLowerCase().includes(searchQuery.toLowerCase())
    ).map(c => ({
      title: `${c.name} — ${c.place} (${c.date})`,
      category: 'Camp Immersion',
      href: c.href
    })),
    ...blogsData.filter(b => 
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).map(b => ({
      title: b.title,
      category: b.category,
      href: `/blog/${b.slug}`
    }))
  ]

  return (
    <>
      {/* ================= FLOATING VRITANT-STYLE CAPSULE NAVBAR ================= */}
      <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 max-w-7xl mx-auto pointer-events-none">
        <nav 
          className={`pointer-events-auto bg-white/95 backdrop-blur-md border border-[#ebdcc6]/80 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-white' : 'shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
          }`}
        >

          {/* ================= 1. LEFT: NAV LINKS (Desktop) ================= */}
          <div className="hidden min-[960px]:flex items-center gap-5 xl:gap-7">
            {leftNavLinks.map((link) => {
              
              // Dropdown for Camps
              if (link.isDropdown) {
                const isChildActive = link.children.some(child => pathname === child.href)
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setCampsDropdownOpen(true)}
                    onMouseLeave={() => setCampsDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 text-[13px] xl:text-[14px] font-medium transition-colors py-1 cursor-pointer ${
                        isChildActive ? 'text-[#2d6a4f] font-bold' : 'text-[#292524] hover:text-[#2d6a4f]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown 
                        size={13} 
                        className={`transition-transform duration-300 ${campsDropdownOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>

                    {/* Dropdown Floating Menu */}
                    <div 
                      className={`absolute top-full left-0 pt-3 transition-all duration-200 ${
                        campsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                      }`}
                    >
                      <div className="bg-white/98 backdrop-blur-xl border border-[#ebdcc6] shadow-xl rounded-2xl overflow-hidden min-w-[250px] py-1.5 divide-y divide-gray-100">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2.5 hover:bg-[#fbf8f1] transition-colors ${
                              pathname === child.href ? 'bg-[#fbf8f1] text-[#2d6a4f]' : ''
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs sm:text-sm font-semibold text-[#1c1917]">
                                {child.name}
                              </span>
                              <span className="text-[10px] font-bold text-[#2d6a4f] bg-[#ecfdf5] border border-[#a7f3d0] px-2 py-0.5 rounded-full uppercase">
                                {child.badge}
                              </span>
                            </div>
                            <div className="text-[11px] text-gray-500 font-medium mt-0.5 flex items-center justify-between">
                              <span>{child.place}</span>
                              <span>{child.date}</span>
                            </div>
                          </Link>
                        ))}
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
                  className={`text-[13px] xl:text-[14px] font-medium transition-colors relative py-1 ${
                    isActive ? 'text-[#2d6a4f] font-bold' : 'text-[#292524] hover:text-[#2d6a4f]'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* ================= 2. CENTER: BRAND LOGO (Centered Vritant style) ================= */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group select-none"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 overflow-hidden rounded-full shadow-xs border border-black/10 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="Sahyadri Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="font-serif font-bold text-lg sm:text-xl md:text-2xl text-[#1c1917] tracking-tight group-hover:text-[#2d6a4f] transition-colors">
              Sahyadri
            </span>
          </Link>

          {/* ================= 3. RIGHT: SEARCH, MOON, CTA BUTTON ================= */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Icon Button */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="p-1.5 sm:p-2 rounded-full text-gray-600 hover:text-black hover:bg-gray-100/80 transition-all cursor-pointer"
            >
              <Search size={16} />
            </button>

            {/* Moon / Theme Toggle (Aesthetic) */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className="p-1.5 sm:p-2 rounded-full text-gray-600 hover:text-black hover:bg-gray-100/80 transition-all cursor-pointer hidden sm:flex"
            >
              {darkMode ? <Sun size={16} className="text-amber-500" /> : <Moon size={16} />}
            </button>

            {/* Forest Green Pill CTA Button (Vritant Style) */}
            <Link
              href="/register"
              className="bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold text-[11px] sm:text-xs tracking-wider uppercase px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-1.5 shadow-sm transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <span>Winter Camp Loading</span>
              <ChevronDown size={13} className="text-white/80 hidden sm:inline" />
            </Link>

            {/* Mobile Hamburger Toggle (Visible below 960px) */}
            <button
              className="min-[960px]:hidden p-1.5 text-[#1c1917] hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>

        </nav>

        {/* ================= MOBILE MENU DRAWER ================= */}
        {isOpen && (
          <div className="pointer-events-auto mt-2 w-full bg-white/98 backdrop-blur-2xl border border-[#ebdcc6] rounded-3xl p-5 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200 min-[960px]:hidden">
            <div className="flex flex-col divide-y divide-gray-100 text-sm">
              <Link
                href="/"
                className="py-3 font-medium text-gray-800 hover:text-[#2d6a4f]"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-3 font-medium text-gray-800 hover:text-[#2d6a4f]"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Camps Accordion */}
              <div className="py-2">
                <button
                  onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
                  className="w-full flex items-center justify-between py-2 font-medium text-gray-800"
                >
                  <span>Camps</span>
                  <ChevronRight size={16} className={`transition-transform duration-200 ${mobileSubMenuOpen ? 'rotate-90' : ''}`} />
                </button>
                {mobileSubMenuOpen && (
                  <div className="pl-3 pr-1 py-2 space-y-2 bg-[#fbf8f1] rounded-xl my-1 border border-[#ebdcc6]/60">
                    {campsList.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block py-1.5 text-xs font-semibold text-gray-700 hover:text-[#2d6a4f]"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <span>{c.name} ({c.place})</span>
                          <span className="text-[10px] text-[#2d6a4f] bg-white px-2 py-0.5 rounded-md border border-[#ebdcc6]">{c.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className="py-3 font-medium text-gray-800 hover:text-[#2d6a4f]"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/career"
                className="py-3 font-medium text-gray-800 hover:text-[#2d6a4f]"
                onClick={() => setIsOpen(false)}
              >
                Career
              </Link>
              <Link
                href="/contact"
                className="py-3 font-medium text-gray-800 hover:text-[#2d6a4f]"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/register"
                  className="w-full block text-center py-3 rounded-full bg-[#2d6a4f] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#1b4332]"
                  onClick={() => setIsOpen(false)}
                >
                  Winter Camp Loading
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ================= SEARCH MODAL POPUP ================= */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-xl bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-[#ebdcc6] relative">
            
            {/* Header / Input */}
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5 flex-1">
                <Search size={18} className="text-[#2d6a4f]" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search articles, summer school, camps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm text-[#1c1917] outline-none placeholder:text-gray-400 font-sans"
                />
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
              >
                <X size={18} />
              </button>
            </div>

            {/* Results */}
            <div className="mt-4 max-h-[320px] overflow-y-auto space-y-2">
              {searchQuery.trim() === '' ? (
                <p className="text-xs text-gray-400 text-center py-6">
                  Type something to search field stories, camps, or themes...
                </p>
              ) : searchResults.length === 0 ? (
                <p className="text-xs text-gray-500 text-center py-6">
                  No matching results found for &quot;{searchQuery}&quot;
                </p>
              ) : (
                searchResults.map((res, i) => (
                  <Link
                    key={i}
                    href={res.href}
                    onClick={() => setSearchOpen(false)}
                    className="block p-3 rounded-xl hover:bg-[#fbf8f1] border border-transparent hover:border-[#ebdcc6] transition-colors group"
                  >
                    <span className="text-[10px] font-bold text-[#2d6a4f] uppercase tracking-wider block mb-0.5">
                      {res.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#1c1917] group-hover:text-[#2d6a4f] transition-colors">
                      {res.title}
                    </h4>
                  </Link>
                ))
              )}
            </div>

          </div>
        </div>
      )}
    </>
  )
}