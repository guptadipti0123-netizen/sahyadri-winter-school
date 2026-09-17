"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Calendar, MapPin, Sparkles, BookOpen, Users, Palette,
  Trees, Landmark, ArrowRight, CheckCircle2, Compass, Sun,
  Award, ShieldCheck, HeartHandshake, Eye, Camera, X
} from "lucide-react"

// --- SUMMER SCHOOL MAY 2026 DATA ---
const campDetails = {
  title: "Sahyadri Rural Connect",
  edition: "May 2026",
  tagline: "Exploring Tribal Heritage, Ecology & Rural Governance in the Cradle of Warli Art.",
  dates: "May 2026",
  location: "Jawhar, Palghar District, Maharashtra",
  status: "Summer Edition"
}

// --- STATS DATA ---
const stats = [
  {
    value: "40",
    label: "Selected Minds",
    desc: "Curated multi-disciplinary cohort of future leaders",
    color: "from-amber-100 to-amber-200",
    textColor: "text-amber-800"
  },
  {
    value: "15+",
    label: "Institutes",
    desc: "Scholars from IITs, TISS, IIMs, Law & Policy colleges",
    color: "from-emerald-100 to-emerald-200",
    textColor: "text-emerald-800"
  },
  {
    value: "5 Days",
    label: "Field Immersion",
    desc: "Hands-on grassroots learning in tribal hamlets",
    color: "from-teal-100 to-teal-200",
    textColor: "text-teal-800"
  },
  {
    value: "100%",
    label: "Experiential",
    desc: "Direct interactions with artisans, Gram Sabhas & NGOs",
    color: "from-orange-100 to-orange-200",
    textColor: "text-orange-800"
  }
]

// --- CORE THEMES ---
const themes = [
  {
    title: "Warli Art & Cultural Heritage",
    desc: "Learn the philosophy, mythology, and master strokes of Warli art directly from indigenous masters and folk artists in their ancestral villages.",
    icon: <Palette className="w-6 h-6 text-amber-700" />,
    bg: "bg-amber-50/70 border-amber-200/80"
  },
  {
    title: "Forest Ecology & Ethnobotany",
    desc: "Traverse Sahyadri forest trails to document biodiversity, medicinal plant knowledge, traditional water bodies, and non-timber forest produce.",
    icon: <Trees className="w-6 h-6 text-emerald-700" />,
    bg: "bg-emerald-50/70 border-emerald-200/80"
  },
  {
    title: "Grassroots Governance & PESA",
    desc: "Engage directly with Gram Panchayats and tribal elders to examine the functioning of the Panchayat (Extension to Scheduled Areas) Act and Forest Rights.",
    icon: <Landmark className="w-6 h-6 text-teal-700" />,
    bg: "bg-teal-50/70 border-teal-200/80"
  },
  {
    title: "Rural Economy & Tribal Livelihoods",
    desc: "Analyze local value chains, self-help groups (SHGs), agrarian practices, and innovative tribal micro-enterprises creating self-reliant models.",
    icon: <HeartHandshake className="w-6 h-6 text-rose-700" />,
    bg: "bg-rose-50/70 border-rose-200/80"
  }
]

// --- ITINERARY SCHEDULE ---
const itinerary = [
  {
    day: "Day 01",
    theme: "Orientation & Jawhar's Heritage",
    activities: [
      "Cohort Arrival & Welcome in Jawhar",
      "Orientation & Context Setting: History, Demographics & Tribal Lineage",
      "Interactive Ice-Breaking & Interdisciplinary Group Formation"
    ],
    icon: <Sun size={20} />,
    color: "bg-amber-50 border-amber-200 text-amber-700",
    accent: "bg-gradient-to-br from-amber-700 to-amber-400"
  },
  {
    day: "Day 02",
    theme: "Forest Trail & Ethnobotany",
    activities: [
      "Guided Forest Walk & Biodiversity Mapping with Tribal Naturalists",
      "Exploration of Medicinal Herbs & Ethno-botanical Wisdom",
      "Visit to Traditional Water Harvesting Systems & Watershed Structures"
    ],
    icon: <Compass size={20} />,
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    accent: "bg-gradient-to-br from-emerald-700 to-emerald-400"
  },
  {
    day: "Day 03",
    theme: "Warli Art & Village Immersion",
    activities: [
      "Hands-on Warli Painting Masterclass with Renowned Indigenous Artists",
      "Tribal Hamlet Immersion: Food, Music & Daily Life Rhythms",
      "Folk Storytelling & Community Bonfire Dialogue"
    ],
    icon: <Palette size={20} />,
    color: "bg-orange-50 border-orange-200 text-orange-700",
    accent: "bg-gradient-to-br from-orange-700 to-orange-400"
  },
  {
    day: "Day 04",
    theme: "Governance, PESA & Livelihoods",
    activities: [
      "Gram Sabha & PESA Implementation Case Study Interaction",
      "Meeting Women's Self-Help Groups (SHGs) & Agrarian Cooperatives",
      "Field Observations on Health, Education & Infrastructure Delivery"
    ],
    icon: <BookOpen size={20} />,
    color: "bg-teal-50 border-teal-200 text-teal-700",
    accent: "bg-gradient-to-br from-teal-700 to-teal-400"
  },
  {
    day: "Day 05",
    theme: "Policy Synthesis & Valedictory",
    activities: [
      "Interdisciplinary Policy Case Presentations by Cohort Teams",
      "Evaluation & Feedback with Grassroots Practitioners and Mentors",
      "Certificate & Memento Distribution, Valedictory Ceremony"
    ],
    icon: <Award size={20} />,
    color: "bg-rose-50 border-rose-200 text-rose-700",
    accent: "bg-gradient-to-br from-rose-700 to-rose-400"
  }
]

// --- COMPLETE PALGHAR & JAWHAR FIELD IMMERSION PHOTO GALLERY (16 Photos) ---
const palgharPhotos = [
  { src: "/palghar/palghar-cohort-memorial-courtyard.jpg", alt: "Palghar Inaugural Cohort Group" },
  { src: "/palghar/palghar-solar-pump-valley-field.jpg", alt: "Solar Lift Irrigation Demonstration" },
  { src: "/palghar/palghar-solar-panels-valley-view.jpg", alt: "Valley Micro-Grid & Renewable Energy" },
  { src: "/palghar/palghar-irrigation-filter-demo.jpg", alt: "Micro-Irrigation & Water Filtration Tech" },
  { src: "/palghar/palghar-fort-stone-steps-cohort.jpg", alt: "Heritage Fort Exploration" },
  { src: "/palghar/palghar-mango-orchard-community.jpg", alt: "Grassroots Dialogue with Farming Families" },
  { src: "/palghar/palghar-classroom-reflection-session.jpg", alt: "Peer Learning & Cohort Reflections" },
  { src: "/palghar/palghar-community-tree-dialogue.jpg", alt: "Village Tree Assembly & Dialogue" },
  { src: "/palghar/palghar-tribal-household-mangoes.jpg", alt: "Tribal Household & Family Immersion" },
  { src: "/palghar/palghar-village-street-interaction.jpg", alt: "Village Walk & Elder Interactions" },
  { src: "/palghar/palghar-traditional-community-meal.jpg", alt: "Communal Dining in Village Hamlet" },
  { src: "/palghar/palghar-village-children-fellows.jpg", alt: "Learning with Village Youth" },
  { src: "/palghar/palghar-viewpoint-fellows-scooter.jpg", alt: "Sahyadri Ridge Explorations" },
  { src: "/palghar/palghar-mango-harvest-fellows.jpg", alt: "Local Produce & Agro-Ecology" },
  { src: "/palghar/palghar-village-temple-community-assembly.jpg", alt: "Village Temple Community Assembly" },
  { src: "/palghar/palghar-heritage-stone-wada-dusk.png", alt: "Traditional Stone Wada Architecture" }
]

export default function SummerSchoolJawharPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-[#f5efe2] text-[#3e2410]">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative isolate pt-16 sm:pt-28 md:pt-36 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-[#faede0] via-[#f7e6d5] to-[#f5efe2] text-[#3e2410] border-b border-[#dccdb2]/80">
        
        {/* Ambient Warm Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#3a8c7e]/12 rounded-full blur-[110px] pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#c8880a]/12 rounded-full blur-[90px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdfbf7] border border-[#dccdb2] shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a8c7e] animate-pulse" />
              <p className="text-xs md:text-sm font-semibold text-[#1f5c54] tracking-widest uppercase">
                {campDetails.edition} • {campDetails.status}
              </p>
            </div>

            <h1 className="font-serif font-normal text-3xl sm:text-5xl md:text-6xl text-[#3e2410] leading-[1.15] tracking-tight">
              {campDetails.title}
              <span className="block text-2xl sm:text-3xl md:text-4xl text-[#3a8c7e] font-normal italic mt-1 font-serif">
                Jawhar, Maharashtra
              </span>
            </h1>

            <div className="flex flex-wrap gap-3 sm:gap-4 text-sm font-medium text-[#3e2410]">
              <div className="flex items-center gap-2 bg-[#fdfbf7] px-4 py-2 rounded-full border border-[#dccdb2] shadow-xs">
                <Calendar className="w-4 h-4 text-[#3a8c7e]" />
                <span className="text-xs sm:text-sm">{campDetails.dates}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#fdfbf7] px-4 py-2 rounded-full border border-[#dccdb2] shadow-xs">
                <MapPin className="w-4 h-4 text-[#c8880a]" />
                <span className="text-xs sm:text-sm">{campDetails.location}</span>
              </div>
            </div>

            <p className="text-base md:text-lg italic font-serif border-l-2 border-[#3a8c7e] pl-4 text-[#7a5232] leading-relaxed">
              &quot;{campDetails.tagline}&quot;
            </p>
          </div>

          {/* RIGHT: POLAROID / FEATURE CARD */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[380px] bg-[#fdfbf7] p-4 shadow-md rounded-3xl transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-[#dccdb2] flex flex-col gap-4">
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#ebe2d1] shrink-0 border border-[#dccdb2]/60">
                <Image
                  src="/palghar/palghar-community-tree-dialogue.jpg"
                  alt="Summer School Jawhar Tribal Community"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-[#fdfbf7]/90 backdrop-blur-md rounded-full text-[11px] font-semibold text-[#1f5c54] tracking-wider uppercase border border-[#dccdb2]">
                  Jawhar Hub
                </div>
              </div>
              <div className="text-center px-3 pt-1 pb-2">
                <span className="font-serif text-[#3e2410] font-normal text-lg md:text-xl block leading-snug">
                  Grassroots Dialogue with Tribal Elders
                </span>
                <span className="text-xs text-[#7a5232] font-light block mt-1.5">
                  Jawhar, Palghar District (May 2026)
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. COHORT STATS ================= */}
      <section className="py-10 px-4 md:px-6 relative z-10 bg-[#ebe2d1]/40 border-b border-[#dccdb2]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#fdfbf7] border border-[#dccdb2] rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center"
              >
                <span className="text-2xl md:text-4xl font-extrabold text-[#3e2410] font-serif">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-bold text-[#3a8c7e] uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] md:text-xs text-[#7a5232] mt-1 leading-tight font-medium">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. ABOUT JAWHAR & SUMMER SCHOOL ================= */}
      <section className="py-14 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="bg-[#fdfbf7] rounded-3xl p-6 md:p-10 border border-[#dccdb2] shadow-sm relative overflow-hidden text-left">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c8880a]/15 border border-[#c8880a]/30 text-[#c8880a] text-xs font-bold uppercase tracking-wider">
              <span>Why Jawhar?</span>
            </div>

            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#3e2410]">
              A Living Classroom in the Western Ghats
            </h2>

            <p className="text-[#7a5232] text-sm md:text-base leading-relaxed">
              Known as the picturesque hill-station and cultural heartland of Palghar district, <strong className="text-[#3e2410]">Jawhar</strong> provides a rich backdrop for experiential inquiry into indigenous traditions, forest ecosystems, and local self-rule.
            </p>

            <p className="text-[#7a5232] text-sm md:text-base leading-relaxed">
              Participants will move beyond theoretical textbooks to live, learn, and engage with tribal leaders, master Warli painters, forestry experts, and rural development institutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#3a8c7e] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#3e2410] font-medium">Direct mentorship from tribal grassroots practitioners</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#3a8c7e] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#3e2410] font-medium">Hands-on indigenous art workshops in authentic tribal wadas</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#3a8c7e] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#3e2410] font-medium">Field study of PESA governance &amp; Forest Rights Act</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#3a8c7e] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#3e2410] font-medium">Peer synthesis and collaborative policy presentations</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. ACADEMIC & FIELD THEMES ================= */}
      <section id="themes" className="py-14 px-4 md:px-8 bg-[#ebe2d1]/30 border-y border-[#dccdb2]">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#3a8c7e] uppercase">
              Curriculum &amp; Immersion
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#3e2410]">
              Interdisciplinary Immersion Themes
            </h2>
            <p className="text-xs sm:text-sm text-[#7a5232]">
              Bridging traditional community wisdom with modern policy research frameworks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 text-left">
            {themes.map((theme, i) => (
              <div
                key={i}
                className="bg-[#fdfbf7] p-6 rounded-2xl border border-[#dccdb2] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#ebe2d1]/70 border border-[#dccdb2] flex items-center justify-center">
                    {theme.icon}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3e2410]">
                    {theme.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7a5232] leading-relaxed">
                    {theme.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 5. 5-DAY DETAILED SCHEDULE ================= */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#c8880a] uppercase">
            Day-By-Day Progression
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#3e2410]">
            The 5-Day Summer School Journey
          </h2>
          <p className="text-xs sm:text-sm text-[#7a5232]">
            A structured progression from village orientation to actionable policy presentations.
          </p>
        </div>

        <div className="space-y-4">
          {itinerary.map((item, i) => (
            <div
              key={i}
              className="bg-[#fdfbf7] border border-[#dccdb2] rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center gap-5 text-left"
            >
              {/* Day Badge */}
              <div className="flex items-center gap-3 shrink-0 md:w-44">
                <div className="w-10 h-10 rounded-xl bg-[#ebe2d1] border border-[#dccdb2] flex items-center justify-center text-[#3a8c7e]">
                  {item.icon}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3a8c7e] block">
                    {item.day}
                  </span>
                  <span className="font-serif font-bold text-base text-[#3e2410] leading-tight">
                    {item.theme}
                  </span>
                </div>
              </div>

              {/* Activities */}
              <div className="flex-1 border-t md:border-t-0 md:border-l border-[#dccdb2]/70 pt-3 md:pt-0 md:pl-6">
                <ul className="space-y-1.5">
                  {item.activities.map((act, actIdx) => (
                    <li key={actIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#7a5232]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8880a] mt-1.5 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 6. GLIMPSES & PALGHAR VISUAL ARCHIVE (ALL 16 REAL PHOTOS - CLEAN IMAGES ONLY) ================= */}
      <section id="gallery" className="py-14 sm:py-18 px-4 sm:px-6 md:px-8 bg-[#ebe2d1]/30 border-t border-[#dccdb2]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c8880a]/15 border border-[#c8880a]/30 shadow-xs text-[#c8880a] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1">
              <Camera size={13} className="text-[#c8880a]" />
              <span>Palghar &amp; Jawhar Visual Archive</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e2410]">
              Memories &amp; Glimpses from <span className="text-[#3a8c7e] italic">Palghar</span>
            </h2>
            <p className="text-[#7a5232] text-xs sm:text-sm md:text-base font-medium max-w-2xl mx-auto">
              100% real field moments capturing community dialogues, tribal immersion, clean-tech demonstrations, and cohort fellowship across Palghar district.
            </p>
          </div>

          {/* --- 16-PHOTO RESPONSIVE GALLERY GRID (CLEAN IMAGES ONLY) --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-[240px] sm:auto-rows-[280px]">
            {palgharPhotos.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(item)}
                className={`relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-[#ebe2d1] border border-[#dccdb2] ${
                  idx === 0 ? "sm:col-span-2 sm:row-span-2 auto-rows-[340px] sm:min-h-[420px]" : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt || "Sahyadri Rural Connect Photo"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-transparent rounded-2xl overflow-hidden flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/30 shadow-lg"
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>

            {/* Photo Container */}
            <div className="relative w-full h-[60vh] sm:h-[75vh] max-h-[800px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt || "Sahyadri Photo"}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

    </main>
  )
}
