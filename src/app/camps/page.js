"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react"

export default function CampsHubPage() {
  const camps = [
    {
      id: "camp-3",
      title: "Sahyadri Rural Connect",
      edition: "Summer Edition (Jawhar - May 2026)",
      location: "Jawhar, Maharashtra",
      dates: "May 2026",
      status: "Archive / Completed",
      statusBadge: "bg-[#c8880a]/15 text-[#c8880a] border-[#c8880a]/30",
      description: "Exploring Warli indigenous art, Sahyadri forest ethnobotany, and grassroots tribal governance under PESA in Jawhar.",
      image: "/floating7.jpeg",
      href: "/camp-3",
      highlights: ["Warli Masterclass", "Ethnobotany Trail", "Gram Sabha Dialogue", "Policy Synthesis"]
    },
    {
      id: "camp-2",
      title: "Sahyadri Rural Connect",
      edition: "Winter Edition (Karjat - December 2025)",
      location: "Kothimbe, Karjat, Maharashtra",
      dates: "Dec 24th - 28th, 2025",
      status: "Archive / Completed",
      statusBadge: "bg-[#3a8c7e]/15 text-[#1f5c54] border-[#3a8c7e]/30",
      description: "5 days of deep rural immersion, organic farming, historical Maratha discussions, tribal medicine, and interdisciplinary student presentations.",
      image: "/camp2/camp2-day2-i3_copy.png",
      href: "/camp-2",
      highlights: ["Trekking & History", "Organic Farming", "Documentary & Bonfire", "40 Fellow Cohort"]
    },
    {
      id: "camp-1",
      title: "Sahyadri Rural Connect",
      edition: "Inaugural Edition (Palghar - January 2025)",
      location: "Palghar, Maharashtra",
      dates: "Jan 09th - 12th, 2025",
      status: "Archive / Completed",
      statusBadge: "bg-[#7a3a1c]/15 text-[#7a3a1c] border-[#7a3a1c]/30",
      description: "The beginning of our grassroots journey into rural Bharat. Connecting university scholars with rural livelihoods and community wisdom.",
      image: "/palghar/palghar-cohort-memorial-courtyard.jpg",
      href: "/camp-1",
      highlights: ["Inaugural Cohort", "Grassroots Connect", "Visual Photo Archive", "Community Bonding"]
    }
  ]

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-[#f5efe2] text-[#3e2410]">
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-28 md:pt-36 pb-14 overflow-hidden bg-gradient-to-b from-[#241407] via-[#3e2410] to-[#1f5c54] text-[#f5efe2]">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3a8c7e]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c8880a]/15 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f5efe2]/15 border border-[#f5efe2]/25 backdrop-blur-md">
            <Sparkles size={14} className="text-[#d4a825]" />
            <p className="text-xs sm:text-sm font-bold text-[#d4a825] tracking-widest uppercase">
              All Editions &amp; Cohorts
            </p>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-[#f5efe2] leading-tight drop-shadow-md">
            Sahyadri <span className="text-[#d4a825] italic font-serif">Camps Directory</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-[#f5efe2]/85 max-w-2xl mx-auto leading-relaxed">
            Explore our past immersion cohorts, field archives, and the upcoming fellowship application portal.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#3a8c7e] hover:bg-[#1f5c54] text-[#f5efe2] font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span>Upcoming Camp Registration</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 2. CAMPS LIST ================= */}
      <section className="px-4 md:px-8 py-12 max-w-6xl mx-auto relative z-10 space-y-8">
        
        {/* UPCOMING FELLOWSHIP HIGHLIGHT CARD */}
        <div className="bg-gradient-to-br from-[#241407] via-[#3e2410] to-[#1f5c54] text-[#f5efe2] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-[#dccdb2]/30">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-3 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8880a]/20 border border-[#c8880a]/30 text-[#d4a825] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#d4a825] animate-ping" />
                <span>Upcoming Flagship Edition</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#f5efe2]">
                Sahyadri Rural Connect 2026
              </h2>
              <p className="text-[#f5efe2]/85 text-xs sm:text-sm leading-relaxed">
                40 selected students &amp; researchers from premier institutes (IIT, TISS, IIM, ILS) for a 5-day grassroots residential fellowship in rural Maharashtra.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#3a8c7e] hover:bg-[#1f5c54] text-[#f5efe2] font-bold text-xs sm:text-sm shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <span>Register for Camp</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* PAST CAMPS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {camps.map((camp) => (
            <div
              key={camp.id}
              className="bg-[#fdfbf7] rounded-3xl overflow-hidden border border-[#dccdb2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-[#ebe2d1] shrink-0">
                <Image
                  src={camp.image}
                  alt={camp.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241407]/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md ${camp.statusBadge}`}>
                    {camp.edition}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2.5">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3e2410] leading-tight">
                    {camp.title}
                  </h3>

                  <div className="flex flex-col gap-1 text-xs text-[#7a5232] font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#3a8c7e] shrink-0" />
                      <span>{camp.dates}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#3a8c7e] shrink-0" />
                      <span className="truncate">{camp.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#7a5232] leading-relaxed pt-1">
                    {camp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {camp.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] font-semibold bg-[#f5efe2] border border-[#dccdb2] text-[#3e2410] px-2.5 py-0.5 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-3 border-t border-[#dccdb2]/60">
                  <Link
                    href={camp.href}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#f5efe2] hover:bg-[#3a8c7e] text-[#3e2410] hover:text-[#f5efe2] font-bold text-xs transition-all duration-300 border border-[#dccdb2]"
                  >
                    <span>Open Camp Archive</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  )
}
