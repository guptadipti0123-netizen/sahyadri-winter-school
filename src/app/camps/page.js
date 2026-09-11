"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, ArrowRight, Sparkles, CheckCircle2, Award, Users, BookOpen, Camera } from "lucide-react"

export default function CampsHubPage() {
  const camps = [
    {
      id: "camp-3",
      title: "Sahyadri Summer School",
      edition: "Summer School (Jawhar - May 2026)",
      location: "Jawhar, Maharashtra",
      dates: "May 2026",
      status: "Archive / Completed",
      statusBadge: "bg-amber-100 text-amber-800 border-amber-300",
      description: "Exploring Warli indigenous art, Sahyadri forest ethnobotany, and grassroots tribal governance under PESA in Jawhar.",
      image: "/floating7.jpeg",
      href: "/camp-3",
      highlights: ["Warli Masterclass", "Ethnobotany Trail", "Gram Sabha Dialogue", "Policy Synthesis"]
    },
    {
      id: "camp-2",
      title: "Sahyadri Winter School",
      edition: "Winter School (Karjat - December 2025)",
      location: "Kothimbe, Karjat, Maharashtra",
      dates: "Dec 24th - 28th, 2025",
      status: "Archive / Completed",
      statusBadge: "bg-emerald-100 text-emerald-800 border-emerald-300",
      description: "5 days of deep rural immersion, organic farming, historical Maratha discussions, tribal medicine, and interdisciplinary student presentations.",
      image: "/camp2/camp2-day2-i3_copy.png",
      href: "/camp-2",
      highlights: ["Trekking & History", "Organic Farming", "Documentary & Bonfire", "40 Fellow Cohort"]
    },
    {
      id: "camp-1",
      title: "Sahyadri Winter School",
      edition: "Winter School (Palghar - January 2025)",
      location: "Palghar, Maharashtra",
      dates: "Jan 09th - 12th, 2025",
      status: "Archive / Completed",
      statusBadge: "bg-teal-100 text-teal-800 border-teal-300",
      description: "The beginning of our grassroots journey into rural Bharat. Connecting university scholars with rural livelihoods and community wisdom.",
      image: "/palghar/palghar-cohort-memorial-courtyard.jpg",
      href: "/camp-1",
      highlights: ["Inaugural Cohort", "Grassroots Connect", "Visual Photo Archive", "Community Bonding"]
    }
  ]

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-frosted_mint/20">
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-28 md:pt-36 pb-12 overflow-hidden">
        {/* Wave Background */}
        <div className="absolute inset-0 z-0">
          <svg viewBox="0 0 1440 800" className="absolute -top-[420px] left-0 w-full h-[800px] -z-10" preserveAspectRatio="none">
            <path fill="#1B4332" fillOpacity="0.95" d="M0,520 C200,620 420,420 640,500 C860,560 1080,650 1280,560 C1380,500 1440,480 1440,460 L1440,0 L0,0 Z" />
          </svg>
          <svg viewBox="0 0 1440 700" className="absolute -top-[300px] left-0 w-full h-[700px] -z-10" preserveAspectRatio="none">
            <path fill="#40916C" fillOpacity="0.8" d="M0,460 C220,540 420,360 660,440 C900,500 1120,580 1320,500 C1400,460 1440,440 1440,420 L1440,0 L0,0 Z" />
          </svg>
          <svg viewBox="0 0 1440 600" className="absolute -top-[180px] left-0 w-full h-[600px] -z-10" preserveAspectRatio="none">
            <path fill="#d8f3dc" fillOpacity="0.65" d="M0,380 C260,430 460,320 700,380 C940,420 1140,470 1340,410 C1400,380 1440,360 1440,340 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-celadon shadow-sm backdrop-blur-md">
            <Sparkles size={14} className="text-sea_green" />
            <p className="text-xs sm:text-sm font-bold text-evergreen tracking-wider uppercase">
              All Editions &amp; Cohorts
            </p>
          </div>

          <h1 className="font-extrabold font-serif text-3xl sm:text-5xl md:text-6xl text-evergreen leading-tight drop-shadow-sm">
            Sahyadri <span className="text-sea_green italic">Camps Directory</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-pine_teal/90 max-w-2xl mx-auto leading-relaxed">
            Explore our past immersion cohorts, field archives, and the upcoming fellowship application portal.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
            >
              <span>Upcoming Camp Registration</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 2. CAMPS LIST ================= */}
      <section className="px-4 md:px-8 py-10 max-w-6xl mx-auto relative z-10 space-y-8">
        
        {/* UPCOMING FELLOWSHIP HIGHLIGHT CARD */}
        <div className="bg-gradient-to-br from-evergreen via-sea_green to-dark_emerald text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl relative overflow-hidden border-2 border-white/20">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-frosted_mint text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-mint_leaf animate-ping" />
                <span>Upcoming Flagship Edition</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                Sahyadri Winter School 2026
              </h2>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
                40 selected students &amp; researchers from premier institutes (IIT, TISS, IIM, ILS) for a 5-day grassroots residential fellowship in rural Maharashtra.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-evergreen font-bold text-xs sm:text-sm shadow-lg hover:bg-frosted_mint transition-all hover:scale-105 active:scale-95"
              >
                <span>Register for Camp</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* PAST CAMPS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {camps.map((camp) => (
            <div
              key={camp.id}
              className="bg-white rounded-3xl overflow-hidden border border-celadon/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 shrink-0">
                <Image
                  src={camp.image}
                  alt={camp.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md ${camp.statusBadge}`}>
                    {camp.edition}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-evergreen leading-tight">
                    {camp.title}
                  </h3>

                  <div className="flex flex-col gap-1 text-xs text-pine_teal/80 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-sea_green shrink-0" />
                      <span>{camp.dates}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-sea_green shrink-0" />
                      <span className="truncate">{camp.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-pine_teal/85 leading-relaxed pt-1">
                    {camp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {camp.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] font-semibold bg-[#fbf8f1] border border-[#ebdcc6] text-[#2d6a4f] px-2 py-0.5 rounded-md">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-3 border-t border-gray-100">
                  <Link
                    href={camp.href}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-frosted_mint/50 hover:bg-sea_green text-evergreen hover:text-white font-bold text-xs transition-all duration-300 border border-celadon/60"
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
