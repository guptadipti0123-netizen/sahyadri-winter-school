"use client"
import Link from "next/link"
import { Mail, Instagram, MapPin, ArrowUpRight } from "lucide-react"

export default function Footer() {
  // Split links into two arrays for the dual-column layout
  const linksCol1 = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]
  const linksCol2 = [
    { name: 'Summer School (Jawhar, May 2026)', href: '/camp-3' },
    { name: 'Winter School (Karjat - December 2025)', href: '/camp-2' },
    { name: 'Winter School (Palghar - January 2025)', href: '/camp-1' },
    { name: 'Career', href: '/career' },
  ]

  return (
    <footer className="relative text-frosted_mint pt-16 pb-8 overflow-hidden">

      {/* --- FIXED BACKGROUND IMAGE SETUP --- */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          // Replace this with your specific footer image path
          backgroundImage: "url('/Sahyadri-footer-2.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-evergreen/50 mix-blend-multiply" />
        {/* Optional: Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 mb-12">

          {/* 1. Brand Column (Left) */}
          <div className="lg:col-span-4 space-y-5">
            <h2 className="font-serif text-2xl text-white tracking-wide drop-shadow-md">Sahyadri Rural Connect</h2>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm font-medium">
              Empowering students to understand and contribute to rural development through experiential learning and community partnerships.
            </p>
          </div>

          {/* 2. Links Container (Right) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:pl-16">

            {/* Links Group: Split into Quick Links & Opportunities */}
            <div className="grid grid-cols-2 gap-x-4">

              {/* Column 1: Quick Links */}
              <div>
                <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-xs border-b border-white/20 pb-2 inline-block">Quick Links</h4>
                <ul className="space-y-3">
                  {linksCol1.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5 group w-fit text-sm font-medium"
                      >
                        {item.name}
                        <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-mint_leaf" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Opportunities */}
              <div>
                <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-xs border-b border-white/20 pb-2 inline-block">Opportunities</h4>
                <ul className="space-y-3">
                  {linksCol2.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5 group w-fit text-sm font-medium"
                      >
                        {item.name}
                        <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-mint_leaf" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Connect Section */}
            <div className="md:pl-8">
              <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-xs border-b border-white/20 pb-2 inline-block">Connect</h4>
              <div className="space-y-4">
                <a href="mailto:info@sahyadriwinterschool.in" className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm group font-medium">
                  <Mail size={16} className="mt-0.5 group-hover:text-mint_leaf transition-colors shrink-0" />
                  <span className="break-all">info@sahyadriruralconnect.org</span>
                </a>

                <div className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm group font-medium">
                  <MapPin size={16} className="mt-0.5 group-hover:text-mint_leaf transition-colors shrink-0" />
                  <span>Mumbai, Maharashtra</span>
                </div>

                <a href="https://www.instagram.com/sahyadriwinterschool" target="_blank" className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm group font-medium">
                  <Instagram size={16} className="mt-0.5 group-hover:text-mint_leaf transition-colors shrink-0" />
                  <span>Follow on Instagram</span>
                </a>
              </div>
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