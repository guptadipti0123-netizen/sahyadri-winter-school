"use client"
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
    { name: 'Summer School (Jawhar) • May 2026', href: '/camp-3' },
    { name: 'Winter School (Karjat) • Dec 2025', href: '/camp-2' },
    { name: 'Winter School (Palghar) • Jan 2025', href: '/camp-1' },
    { name: 'Register for Camp', href: '/register' },
  ]

  const opportunitiesLinks = [
    { name: 'Careers & Openings', href: '/career' },
    { name: 'Student Fellowship', href: '/register' },
    { name: 'Volunteer With Us', href: '/career' },
    { name: 'Advisory & Mentorship', href: '/about#story' },
  ]

  return (
    <footer className="relative text-frosted_mint pt-16 pb-8 overflow-hidden">

      {/* --- FIXED BACKGROUND IMAGE SETUP --- */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/Sahyadri-footer-2.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-evergreen/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-12">

          {/* 1. Brand Column (Left) */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-serif text-2xl text-white tracking-wide drop-shadow-md">Sahyadri Rural Connect</h2>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-sm font-medium">
              Empowering students to understand and contribute to rural development through experiential learning and community partnerships.
            </p>
          </div>

          {/* 2. Column: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs border-b border-white/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/75 hover:text-white transition-colors flex items-center gap-1.5 group w-fit text-xs sm:text-sm font-medium"
                  >
                    {item.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-mint_leaf" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Column: Our Camps */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs border-b border-white/20 pb-2 inline-block">Our Camps</h4>
            <ul className="space-y-2.5">
              {campsLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/75 hover:text-white transition-colors flex items-center gap-1.5 group w-fit text-xs sm:text-sm font-medium"
                  >
                    {item.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-mint_leaf" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Column: Opportunities */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs border-b border-white/20 pb-2 inline-block">Opportunities</h4>
            <ul className="space-y-2.5">
              {opportunitiesLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/75 hover:text-white transition-colors flex items-center gap-1.5 group w-fit text-xs sm:text-sm font-medium"
                  >
                    {item.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-mint_leaf" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Column: Connect */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs border-b border-white/20 pb-2 inline-block">Connect</h4>
            <div className="space-y-3.5">
              <a href="mailto:info@sahyadriruralconnect.org" className="flex items-start gap-2.5 text-white/75 hover:text-white transition-colors text-xs sm:text-sm group font-medium">
                <Mail size={15} className="mt-0.5 group-hover:text-mint_leaf transition-colors shrink-0" />
                <span className="break-all">info@sahyadriruralconnect.org</span>
              </a>

              <div className="flex items-start gap-2.5 text-white/75 hover:text-white transition-colors text-xs sm:text-sm group font-medium">
                <MapPin size={15} className="mt-0.5 group-hover:text-mint_leaf transition-colors shrink-0" />
                <span>Mumbai, Maharashtra</span>
              </div>

              <a href="https://www.instagram.com/sahyadriwinterschool" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-white/75 hover:text-white transition-colors text-xs sm:text-sm group font-medium">
                <Instagram size={15} className="mt-0.5 group-hover:text-mint_leaf transition-colors shrink-0" />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60 font-medium">
          <p>© 2025 Sahyadri Rural Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}