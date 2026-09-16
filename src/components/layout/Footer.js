"use client"
import React from "react"
import Link from "next/link"
import { Mail, Instagram, MapPin, ArrowUpRight } from "lucide-react"

export default function Footer() {
  // Footer Links Arrays
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Field Stories & Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const campsLinks = [
    { name: 'All Camps Directory', href: '/camps' },
    { name: 'Summer Camp (Jawhar) • May 2026', href: '/camp-3' },
    { name: 'Winter Camp (Karjat) • Dec 2025', href: '/camp-2' },
    { name: 'Winter Camp (Palghar) • Jan 2025', href: '/camp-1' },
    { name: 'Register for Camp', href: '/register' },
  ]

  const opportunitiesLinks = [
    { name: 'Careers & Openings', href: '/career' },
    { name: 'Student Fellowship', href: '/register' },
    { name: 'Volunteer With Us', href: '/career' },
    { name: 'Advisory & Mentorship', href: '/about#story' },
  ]

  return (
    <footer className="relative text-white pt-10 sm:pt-14 pb-6 sm:pb-8 overflow-hidden">

      {/* --- BACKGROUND IMAGE SETUP (Fixed on desktop, standard cover on mobile) --- */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: "url('/Sahyadri-footer-2.jpg')",
        }}
      >
        {/* Soft, light gradient overlay so the mountain peaks, blue sky & valleys are fully visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Main Responsive Grid: 2 columns on mobile, 12-col layout on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 sm:gap-x-6 gap-y-5 sm:gap-y-8 mb-6 sm:mb-10">

          {/* 1. Brand Column (Full width on mobile, 3 cols on desktop) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3 space-y-2 sm:space-y-3 pb-1 sm:pb-0">
            <h2 className="font-serif text-lg sm:text-2xl text-white tracking-wide drop-shadow-md font-bold">
              Sahyadri Rural Connect
            </h2>
            <p className="text-white/95 text-xs sm:text-sm leading-relaxed max-w-sm font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              Empowering students to understand and contribute to rural development through experiential learning and community partnerships.
            </p>
          </div>

          {/* 2. Quick Links (Left Col on mobile, 2 cols on desktop) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="text-white font-bold mb-2 sm:mb-3 uppercase tracking-wider text-[11px] sm:text-xs border-b border-white/40 pb-1 inline-block drop-shadow">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/90 hover:text-white transition-colors flex items-center gap-1 group w-fit text-xs sm:text-sm font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#68d391] shrink-0 hidden sm:inline-block" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Opportunities (Right Col on mobile) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="text-white font-bold mb-2 sm:mb-3 uppercase tracking-wider text-[11px] sm:text-xs border-b border-white/40 pb-1 inline-block drop-shadow">
              Opportunities
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {opportunitiesLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/90 hover:text-white transition-colors flex items-center gap-1 group w-fit text-xs sm:text-sm font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#68d391] shrink-0 hidden sm:inline-block" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Our Camps (Left Col on mobile) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <h4 className="text-white font-bold mb-2 sm:mb-3 uppercase tracking-wider text-[11px] sm:text-xs border-b border-white/40 pb-1 inline-block drop-shadow">
              Our Camps
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {campsLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/90 hover:text-white transition-colors flex items-center gap-1 group w-fit text-xs sm:text-sm font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#68d391] shrink-0 hidden sm:inline-block" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Connect (Right Col on mobile) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="text-white font-bold mb-2 sm:mb-3 uppercase tracking-wider text-[11px] sm:text-xs border-b border-white/40 pb-1 inline-block drop-shadow">
              Connect
            </h4>
            <div className="space-y-2 sm:space-y-2.5">
              <a href="mailto:info@sahyadriruralconnect.org" className="flex items-start gap-1.5 text-white/90 hover:text-white transition-colors text-xs sm:text-sm group font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                <Mail size={13} className="mt-0.5 group-hover:text-[#68d391] transition-colors shrink-0" />
                <span className="break-all">info@sahyadriruralconnect.org</span>
              </a>

              <div className="flex items-start gap-1.5 text-white/90 hover:text-white transition-colors text-xs sm:text-sm group font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                <MapPin size={13} className="mt-0.5 group-hover:text-[#68d391] transition-colors shrink-0" />
                <span>Mumbai, Maharashtra</span>
              </div>

              <a href="https://www.instagram.com/sahyadriwinterschool" target="_blank" rel="noopener noreferrer" className="flex items-start gap-1.5 text-white/90 hover:text-white transition-colors text-xs sm:text-sm group font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                <Instagram size={13} className="mt-0.5 group-hover:text-[#68d391] transition-colors shrink-0" />
                <span>Follow Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/80 font-medium drop-shadow">
          <p>© {new Date().getFullYear()} Sahyadri Rural Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}