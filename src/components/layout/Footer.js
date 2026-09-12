"use client"
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Mail, Phone, MapPin, ArrowUpRight, ArrowUp, 
  Instagram, Facebook, Twitter, Linkedin, Youtube, Check, Send
} from "lucide-react"

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterStatus, setNewsletterStatus] = useState("idle") // "idle" | "loading" | "success"

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!newsletterEmail || !newsletterEmail.includes("@")) return
    setNewsletterStatus("loading")
    setTimeout(() => {
      setNewsletterStatus("success")
      setNewsletterEmail("")
      setTimeout(() => setNewsletterStatus("idle"), 4000)
    }, 800)
  }

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  // Footer Links
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Field Stories & Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ]

  const campsLinks = [
    { name: "All Camps Directory", href: "/camps" },
    { name: "Summer School (Jawhar) • May 2026", href: "/camp-3" },
    { name: "Winter School (Karjat) • Dec 2025", href: "/camp-2" },
    { name: "Winter School (Palghar) • Jan 2025", href: "/camp-1" },
    { name: "Register for Camp", href: "/register" },
  ]

  const opportunitiesLinks = [
    { name: "Careers & Openings", href: "/career" },
    { name: "Student Fellowship", href: "/register" },
    { name: "Volunteer With Us", href: "/career" },
    { name: "Advisory & Mentorship", href: "/about#story" },
  ]

  const focusAreas = [
    { name: "PESA & Tribal Self-Governance", href: "/camp-3" },
    { name: "Warli Indigenous Heritage", href: "/camp-3" },
    { name: "Decentralised Rural Livelihoods", href: "/camp-2" },
    { name: "Forest Ecology & Agro-Systems", href: "/camp-1" },
  ]

  return (
    <footer className="relative bg-[#1a0e05] text-[#f5efe2] overflow-hidden border-t border-[#3e2410]/80">

      {/* ================= 1. PANORAMIC COLLAGE BANNER SECTION ================= */}
      <div className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#3e2410]/70">
        
        {/* Background Visual Montage Collage */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-25">
          <div className="absolute inset-0 grid grid-cols-4 h-full w-full filter grayscale contrast-125 brightness-75">
            <div className="relative h-full w-full">
              <Image src="/rural_immersion_real.jpg" alt="Immersion" fill className="object-cover" />
            </div>
            <div className="relative h-full w-full">
              <Image src="/camp2/camp2-day2-i3_copy.png" alt="Dialogue" fill className="object-cover" />
            </div>
            <div className="relative h-full w-full">
              <Image src="/palghar/palghar-cohort-memorial-courtyard.jpg" alt="Fellows" fill className="object-cover" />
            </div>
            <div className="relative h-full w-full">
              <Image src="/floating7.jpeg" alt="Fieldwork" fill className="object-cover" />
            </div>
          </div>
          {/* Organic Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0e05] via-[#1a0e05]/85 to-[#1a0e05]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0e05]/95 via-transparent to-[#1a0e05]" />
        </div>

        {/* Ambient Warm Spotlights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#3a8c7e]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[250px] bg-[#d4a825]/8 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          
          {/* 3-Column Top Grid: Addresses (Left) | Big Logo (Center) | Social & Newsletter (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: Addresses & Direct Contact */}
            <div className="lg:col-span-4 space-y-3.5 text-center lg:text-left text-xs sm:text-sm text-[#dccdb2]/90 order-2 lg:order-1">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4a825] block">
                  Regd. Address:
                </span>
                <p className="leading-relaxed text-[#f5efe2]/90">
                  Sahyadri Rural Connect, Maharashtra, India — 400001
                </p>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4a825] block">
                  Field Immersion Centers:
                </span>
                <p className="leading-relaxed text-[#f5efe2]/90">
                  Jawhar • Karjat • Palghar (Western Ghats Region)
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row lg:flex-col items-center lg:items-start justify-center gap-2">
                <a 
                  href="tel:+919002971010" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#f5efe2] hover:text-[#3a8c7e] transition-colors"
                >
                  <Phone size={13} className="text-[#d4a825]" />
                  <span>+91 90029 71010</span>
                </a>
                
                <a 
                  href="mailto:info@sahyadriruralconnect.org" 
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#dccdb2] hover:text-[#f5efe2] transition-colors"
                >
                  <Mail size={13} className="text-[#3a8c7e]" />
                  <span>info@sahyadriruralconnect.org</span>
                </a>
              </div>
            </div>

            {/* CENTER COLUMN: Hero Brand Logo & Emblem */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center order-1 lg:order-2 py-2">
              <Link href="/" className="group inline-flex flex-col items-center cursor-pointer">
                {/* Official Brand Logo Medal */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2.5 transition-transform duration-500 group-hover:scale-105 shrink-0 rounded-full bg-[#fdfbf7] p-1 shadow-lg border-2 border-[#d4a825]/60 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/logo.jpg"
                      alt="Sahyadri Rural Connect Logo"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Stately Brand Typography */}
                <div className="space-y-0.5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#f5efe2] group-hover:text-[#d4a825] transition-colors leading-tight">
                    SAHYADRI
                  </h2>
                  <div className="font-serif text-lg sm:text-xl tracking-widest uppercase text-[#f5efe2]/90 font-medium">
                    RURAL CONNECT
                  </div>
                  <div className="text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.25em] text-[#d4a825] uppercase pt-1">
                    DRIVING RURAL LEADERSHIP
                  </div>
                </div>
              </Link>
            </div>

            {/* RIGHT COLUMN: Social Links & Newsletter Box */}
            <div className="lg:col-span-4 space-y-4 text-center lg:text-left order-3">
              
              {/* Social Section */}
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-[#f5efe2] tracking-wide">
                  Follow our journey, be part of the movement
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-2.5 pt-1">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-full bg-[#2a170a] border border-[#3e2410] hover:border-[#d4a825] hover:bg-[#d4a825]/20 text-[#dccdb2] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Facebook size={15} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="w-8 h-8 rounded-full bg-[#2a170a] border border-[#3e2410] hover:border-[#d4a825] hover:bg-[#d4a825]/20 text-[#dccdb2] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Twitter size={15} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-full bg-[#2a170a] border border-[#3e2410] hover:border-[#d4a825] hover:bg-[#d4a825]/20 text-[#dccdb2] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={15} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-8 h-8 rounded-full bg-[#2a170a] border border-[#3e2410] hover:border-[#d4a825] hover:bg-[#d4a825]/20 text-[#dccdb2] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Youtube size={15} />
                  </a>
                  <a
                    href="https://www.instagram.com/sahyadriwinterschool"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full bg-[#2a170a] border border-[#3e2410] hover:border-[#3a8c7e] hover:bg-[#3a8c7e]/20 text-[#dccdb2] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Instagram size={15} />
                  </a>
                </div>
              </div>

              {/* Newsletter Form */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4a825] block">
                  SUBSCRIBE TO OUR NEWSLETTER!
                </span>
                
                <form onSubmit={handleSubscribe} className="space-y-2 max-w-sm mx-auto lg:mx-0">
                  <div className="relative">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white text-[#1a0e05] placeholder:text-[#1a0e05]/50 text-xs sm:text-sm font-medium border border-[#dccdb2] focus:outline-none focus:ring-2 focus:ring-[#3a8c7e] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={newsletterStatus === "loading"}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#2a170a] hover:bg-[#3a8c7e] text-white text-xs sm:text-sm font-semibold tracking-wide border border-[#5c3818] hover:border-[#3a8c7e] transition-all duration-300 cursor-pointer shadow-sm active:scale-98 flex items-center justify-center gap-1.5"
                  >
                    {newsletterStatus === "loading" ? (
                      <span>Subscribing...</span>
                    ) : newsletterStatus === "success" ? (
                      <>
                        <Check size={14} className="text-[#a3e635]" />
                        <span>Subscribed Successfully!</span>
                      </>
                    ) : (
                      <span>Subscribe</span>
                    )}
                  </button>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ================= 2. ORGANIZED DIRECTORY LINKS SECTION ================= */}
      <div className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Col 1: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[#d4a825] font-semibold uppercase tracking-wider text-xs border-b border-[#3e2410] pb-1.5 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#dccdb2]/85 hover:text-[#f5efe2] hover:translate-x-1 transition-all flex items-center gap-1 group w-fit font-medium"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 text-[#3a8c7e] transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Our Immersion Camps */}
          <div className="space-y-3">
            <h4 className="text-[#d4a825] font-semibold uppercase tracking-wider text-xs border-b border-[#3e2410] pb-1.5 inline-block">
              Our Camps
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {campsLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#dccdb2]/85 hover:text-[#f5efe2] hover:translate-x-1 transition-all flex items-center gap-1 group w-fit font-medium"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 text-[#3a8c7e] transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Opportunities */}
          <div className="space-y-3">
            <h4 className="text-[#d4a825] font-semibold uppercase tracking-wider text-xs border-b border-[#3e2410] pb-1.5 inline-block">
              Opportunities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {opportunitiesLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#dccdb2]/85 hover:text-[#f5efe2] hover:translate-x-1 transition-all flex items-center gap-1 group w-fit font-medium"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 text-[#3a8c7e] transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Key Pillars */}
          <div className="space-y-3">
            <h4 className="text-[#d4a825] font-semibold uppercase tracking-wider text-xs border-b border-[#3e2410] pb-1.5 inline-block">
              Focus Pillars
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {focusAreas.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#dccdb2]/85 hover:text-[#f5efe2] hover:translate-x-1 transition-all flex items-center gap-1 group w-fit font-medium"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 text-[#3a8c7e] transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ================= 3. BOTTOM BAR WITH BACK TO TOP BUTTON ================= */}
      <div className="bg-[#120903] py-4 px-4 sm:px-6 lg:px-8 border-t border-[#3e2410]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#dccdb2]/70 font-medium">
          
          <p>© {new Date().getFullYear()} Sahyadri Rural Connect. All rights reserved.</p>
          
          <p className="text-[11px] text-[#d4a825]/80">
            Holistic Experiential Learning • Understanding Real Bharat
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-8 h-8 rounded-lg bg-[#2a170a] hover:bg-[#3a8c7e] border border-[#3e2410] hover:border-[#3a8c7e] text-[#f5efe2] flex items-center justify-center transition-all duration-300 cursor-pointer group shadow-sm active:scale-95"
          >
            <ArrowUp size={15} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>

    </footer>
  )
}