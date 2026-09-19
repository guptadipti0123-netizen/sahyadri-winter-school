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
    { name: 'Volunteer With Us', href: '/volunteers' },
  ]

  return (
    <footer className="relative text-white pt-10 sm:pt-14 pb-6 sm:pb-8 overflow-hidden font-sans">

      {/* --- BACKGROUND IMAGE SETUP (Palghar Mango Orchard & Community Photo) --- */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-[center_35%]"
        style={{
          backgroundImage: "url('/palghar/palghar-mango-orchard-community.jpg')",
        }}
      />

      {/* Very Light Subtle Tint - Leaves Faces & Scenery Bright & Natural */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Elegant Frosted Glass Panel: Text is 100% clear while photo & faces shine through brightly */}
        <div className="bg-[#1e1208]/45 backdrop-blur-[6px] border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">

          {/* Main Responsive Grid: 2 columns on mobile, 12-col layout on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 sm:gap-x-8 gap-y-7 sm:gap-y-10 mb-8 sm:mb-10">

            {/* 1. Brand Column (Full width on mobile, 4 cols on desktop) */}
            <div className="col-span-2 md:col-span-4 lg:col-span-4 space-y-3 pb-1 sm:pb-0">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#fdfbf7] tracking-tight font-bold drop-shadow-md">
                Sahyadri Rural Connect
              </h2>
              <p className="text-[#ebe2d1] text-xs sm:text-sm leading-relaxed max-w-sm font-normal drop-shadow-sm">
                Empowering students to understand and contribute to rural development through experiential learning and community partnerships in the Western Ghats.
              </p>
            </div>

            {/* 2. Quick Links (Left Col on mobile, 2 cols on desktop) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <h4 className="text-[#d4a825] font-bold mb-3 uppercase tracking-wider text-[11px] sm:text-xs border-b border-[#d4a825]/40 pb-1.5 inline-block drop-shadow-xs">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[#f5efe2] hover:text-white hover:translate-x-0.5 transition-all flex items-center gap-1 group w-fit text-xs sm:text-sm font-medium drop-shadow-xs"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#68d391] shrink-0 hidden sm:inline-block" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Opportunities (Right Col on mobile) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <h4 className="text-[#d4a825] font-bold mb-3 uppercase tracking-wider text-[11px] sm:text-xs border-b border-[#d4a825]/40 pb-1.5 inline-block drop-shadow-xs">
                Opportunities
              </h4>
              <ul className="space-y-2">
                {opportunitiesLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[#f5efe2] hover:text-white hover:translate-x-0.5 transition-all flex items-center gap-1 group w-fit text-xs sm:text-sm font-medium drop-shadow-xs"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#68d391] shrink-0 hidden sm:inline-block" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Our Camps (Left Col on mobile) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <h4 className="text-[#d4a825] font-bold mb-3 uppercase tracking-wider text-[11px] sm:text-xs border-b border-[#d4a825]/40 pb-1.5 inline-block drop-shadow-xs">
                Our Camps
              </h4>
              <ul className="space-y-2">
                {campsLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[#f5efe2] hover:text-white hover:translate-x-0.5 transition-all flex items-center gap-1 group w-fit text-xs sm:text-sm font-medium drop-shadow-xs"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#68d391] shrink-0 hidden sm:inline-block" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Connect (Right Col on mobile) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <h4 className="text-[#d4a825] font-bold mb-3 uppercase tracking-wider text-[11px] sm:text-xs border-b border-[#d4a825]/40 pb-1.5 inline-block drop-shadow-xs">
                Connect
              </h4>
              <div className="space-y-2.5">
                <a href="mailto:info@sahyadriruralconnect.org" className="flex items-start gap-2 text-[#f5efe2] hover:text-white transition-colors text-xs sm:text-sm group font-medium drop-shadow-xs">
                  <Mail size={14} className="mt-0.5 text-[#68d391] shrink-0" />
                  <span className="break-all">info@sahyadriruralconnect.org</span>
                </a>

                <div className="flex items-start gap-2 text-[#f5efe2] hover:text-white transition-colors text-xs sm:text-sm group font-medium drop-shadow-xs">
                  <MapPin size={14} className="mt-0.5 text-[#68d391] shrink-0" />
                  <span>Mumbai, Maharashtra</span>
                </div>

                <a href="https://www.instagram.com/sahyadriwinterschool" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-[#f5efe2] hover:text-white transition-colors text-xs sm:text-sm group font-medium drop-shadow-xs">
                  <Instagram size={14} className="mt-0.5 text-[#68d391] shrink-0" />
                  <span>Follow Instagram</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-5 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#ebe2d1] font-medium">
            <p>© {new Date().getFullYear()} Sahyadri Rural Connect. All rights reserved.</p>
            <p className="text-[11px] text-[#ebe2d1]/70">Preserving Tribal Heritage • Inspiring Rural Leadership</p>
          </div>

        </div>

      </div>
    </footer>
  )
}