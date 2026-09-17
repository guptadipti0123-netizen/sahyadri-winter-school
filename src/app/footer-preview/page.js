"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Instagram, MapPin, Check } from "lucide-react"

export default function FooterPreviewPage() {
  const options = [
    {
      id: "opt-1",
      title: "Option 1: Grassroots Village Tree Dialogue",
      desc: "Real field photo of cohort scholars & tribal elders sitting in a circle under the village tree in Palghar.",
      image: "/rural-footer-option1.jpg"
    },
    {
      id: "opt-2",
      title: "Option 2: Lush Green Rural Farmlands & Valley",
      desc: "Scenic view of authentic Maharashtra rural green farmlands and organic fields.",
      image: "/rural-footer-option2.jpg"
    },
    {
      id: "opt-3",
      title: "Option 3: Authentic Tribal Village Settlement",
      desc: "Traditional village settlement, rustic homesteads, and grassroots community setting.",
      image: "/rural-footer-option3.jpg"
    },
    {
      id: "opt-4",
      title: "Option 4: Panoramic Rural Village & Terraced Green Paddy Fields",
      desc: "Panoramic wide view of lush green terraced farmlands, country road, and village under golden light.",
      image: "/rural-footer-option4.jpg"
    }
  ]

  const [selectedOpt, setSelectedOpt] = useState(options[0])

  return (
    <main className="min-h-screen bg-[#faf6ee] text-[#3e2410] pt-20 pb-20 px-4 sm:px-6">
      
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center space-y-3 mb-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#fdfbf7] border border-[#dccdb2] text-[#1f5c54] text-xs font-bold uppercase tracking-wider shadow-xs">
          Footer Background Options
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a0e06]">
          Choose Your <span className="text-[#1f5c54] italic font-serif">Rural Connect</span> Background
        </h1>
        <p className="text-sm sm:text-base text-[#7a5232] max-w-2xl mx-auto">
          Neeche diye gaye 4 options par click karke dekhein ki har background image website ke live footer mein kaisi lagti hai:
        </p>
      </div>

      {/* SELECTOR CARDS */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {options.map((opt, idx) => {
          const isSelected = selectedOpt.id === opt.id
          return (
            <button
              key={opt.id}
              onClick={() => setSelectedOpt(opt)}
              className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? "bg-[#fdfbf7] border-[#1f5c54] ring-2 ring-[#1f5c54]/30 shadow-md scale-102"
                  : "bg-[#fdfbf7]/60 border-[#dccdb2] hover:bg-[#fdfbf7] hover:border-[#1f5c54]/50"
              }`}
            >
              <div className="space-y-2">
                <div className="relative h-28 w-full rounded-xl overflow-hidden bg-[#ebe2d1]">
                  <Image
                    src={opt.image}
                    alt={opt.title}
                    fill
                    className="object-cover"
                  />
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#1f5c54] text-white flex items-center justify-center shadow-md">
                      <Check size={14} />
                    </div>
                  )}
                </div>
                <h4 className="font-serif font-bold text-sm text-[#1a0e06] leading-tight">
                  Option {idx + 1}
                </h4>
                <p className="text-[11px] text-[#7a5232] line-clamp-2">
                  {opt.desc}
                </p>
              </div>
              <div className="pt-2 mt-2 border-t border-[#dccdb2]/40 text-center">
                <span className={`text-[11px] font-bold ${isSelected ? "text-[#1f5c54]" : "text-[#7a5232]"}`}>
                  {isSelected ? "✓ Active Preview" : "Click to Preview"}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* LIVE FOOTER PREVIEW CONTAINER */}
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-2 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1f5c54] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1f5c54]">
              Live Footer Preview — {selectedOpt.title}
            </span>
          </div>
          <span className="text-xs text-[#7a5232]">
            Image File: <code className="bg-[#ebe2d1] px-2 py-0.5 rounded text-[11px] text-[#3e2410] font-mono">{selectedOpt.image}</code>
          </span>
        </div>

        {/* MOCK FOOTER */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#dccdb2] relative text-white pt-10 sm:pt-14 pb-8">
          
          {/* Background Image with Fixed/Cover & Dark Overlay */}
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center transition-all duration-700"
            style={{
              backgroundImage: `url('${selectedOpt.image}')`,
            }}
          />
          {/* Dark Overlay for Ultra Sharp Readability */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1a0e06]/95 via-black/60 to-black/40 backdrop-blur-[0.5px]" />

          <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-8 mb-10">
              
              {/* Brand Col */}
              <div className="col-span-2 md:col-span-4 lg:col-span-3 space-y-3">
                <h2 className="font-serif text-xl sm:text-2xl text-white tracking-wide drop-shadow font-bold">
                  Sahyadri Rural Connect
                </h2>
                <p className="text-white/95 text-xs sm:text-sm leading-relaxed max-w-sm font-normal drop-shadow">
                  Empowering students to understand and contribute to rural development through experiential learning and community partnerships.
                </p>
              </div>

              {/* Quick Links */}
              <div className="col-span-1 md:col-span-2 lg:col-span-2">
                <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px] sm:text-xs border-b border-white/40 pb-1 inline-block drop-shadow">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-white/90">
                  <li><span className="hover:text-white cursor-pointer">Home</span></li>
                  <li><span className="hover:text-white cursor-pointer">About Us</span></li>
                  <li><span className="hover:text-white cursor-pointer">Field Stories &amp; Blog</span></li>
                  <li><span className="hover:text-white cursor-pointer">Contact Us</span></li>
                </ul>
              </div>

              {/* Opportunities */}
              <div className="col-span-1 md:col-span-2 lg:col-span-2">
                <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px] sm:text-xs border-b border-white/40 pb-1 inline-block drop-shadow">
                  Opportunities
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-white/90">
                  <li><span className="hover:text-white cursor-pointer">Careers &amp; Openings</span></li>
                  <li><span className="hover:text-white cursor-pointer">Student Fellowship</span></li>
                  <li><span className="hover:text-white cursor-pointer">Volunteer With Us</span></li>
                  <li><span className="hover:text-white cursor-pointer">Advisory &amp; Mentorship</span></li>
                </ul>
              </div>

              {/* Our Camps */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px] sm:text-xs border-b border-white/40 pb-1 inline-block drop-shadow">
                  Our Camps
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-white/90">
                  <li><span className="hover:text-white cursor-pointer">All Camps Directory</span></li>
                  <li><span className="hover:text-white cursor-pointer">Summer Camp (Jawhar) • May 2026</span></li>
                  <li><span className="hover:text-white cursor-pointer">Winter Camp (Karjat) • Dec 2025</span></li>
                  <li><span className="hover:text-white cursor-pointer">Winter Camp (Palghar) • Jan 2025</span></li>
                </ul>
              </div>

              {/* Connect */}
              <div className="col-span-1 md:col-span-2 lg:col-span-2">
                <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px] sm:text-xs border-b border-white/40 pb-1 inline-block drop-shadow">
                  Connect
                </h4>
                <div className="space-y-2.5 text-xs sm:text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="shrink-0 text-[#68d391]" />
                    <span className="break-all">info@sahyadriruralconnect.org</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="shrink-0 text-[#68d391]" />
                    <span>Mumbai, Maharashtra</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Instagram size={13} className="shrink-0 text-[#68d391]" />
                    <span>Follow Instagram</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/80 font-medium drop-shadow">
              <p>© 2026 Sahyadri Rural Connect. All rights reserved.</p>
            </div>
          </div>

        </div>

      </div>

    </main>
  )
}
