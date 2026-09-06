"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Calendar, MapPin, Sparkles, BookOpen, Users, Palette,
  Trees, Landmark, ArrowRight, CheckCircle2, Compass, Sun,
  Award, ShieldCheck, HeartHandshake, Eye
} from "lucide-react"

// --- SUMMER SCHOOL MAY 2026 DATA ---
const campDetails = {
  title: "Sahyadri Summer School",
  edition: "May 2026",
  tagline: "Exploring Tribal Heritage, Ecology & Rural Governance in the Cradle of Warli Art.",
  dates: "May 2026",
  location: "Jawhar, Palghar District, Maharashtra",
  status: "Upcoming Edition"
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

// --- PHOTO GALLERY SAMPLES ---
const galleryImages = [
  { src: "/jawahar-village-tribal-community.jpg", caption: "Scenic landscapes and tribal hamlets of Jawhar" },
  { src: "/grassland-hero1.jpg", caption: "Sahyadri hills & forest ecosystems" },
  { src: "/sahyadri-1.jpg", caption: "Field learning and grassroots conversations" },
  { src: "/sahyadri-2.jpeg", caption: "Cohort reflections and team engagement" },
  { src: "/floating4.jpeg", caption: "Local community and youth interactions" },
  { src: "/sahyadri-bg-hero.jpeg", caption: "Experiential outdoor study sessions" }
]

export default function SummerSchoolJawharPage() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-frosted_mint/20">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-28 md:pt-36 pb-12 overflow-hidden">
        
        {/* --- WAVE BACKGROUND --- */}
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

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-7 text-evergreen space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-celadon shadow-sm backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
              <p className="text-xs md:text-sm font-bold text-evergreen tracking-wider uppercase">
                {campDetails.edition} • {campDetails.status}
              </p>
            </div>

            <h1 className="font-extrabold font-serif text-3xl sm:text-4xl md:text-6xl text-evergreen leading-[1.15] drop-shadow-sm">
              {campDetails.title}
              <span className="block text-2xl sm:text-3xl md:text-4xl text-sea_green font-normal italic mt-1 font-serif">
                Jawhar, Maharashtra
              </span>
            </h1>

            <div className="flex flex-wrap gap-4 text-sm md:text-base font-medium text-pine_teal/90">
              <div className="flex items-center gap-2 bg-white/70 px-3.5 py-1.5 rounded-full border border-celadon/50 shadow-xs">
                <Calendar className="w-4 h-4 text-sea_green" />
                <span>{campDetails.dates}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-3.5 py-1.5 rounded-full border border-celadon/50 shadow-xs">
                <MapPin className="w-4 h-4 text-sea_green" />
                <span>{campDetails.location}</span>
              </div>
            </div>

            <p className="text-base md:text-lg italic border-l-3 border-sea_green pl-4 text-pine_teal">
              &quot;{campDetails.tagline}&quot;
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/register/form"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-sea_green to-dark_emerald text-white font-bold text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Are you Interested
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#themes"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/90 text-evergreen border border-celadon font-semibold text-sm md:text-base shadow-sm hover:bg-frosted_mint/40 transition-all duration-300"
              >
                Explore Themes
              </Link>
            </div>
          </div>

          {/* RIGHT: POLAROID / FEATURE CARD */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] bg-white p-4 pb-14 shadow-2xl rounded-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-celadon/40">
              <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src="/jawahar-village-tribal-community.jpg"
                  alt="Summer School Jawhar Tribal Community"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[11px] font-semibold text-white tracking-wider uppercase">
                  Jawhar Hub
                </div>
              </div>
              <div className="absolute bottom-4 left-0 w-full text-center px-4">
                <span className="font-serif text-evergreen font-bold text-base md:text-lg block">
                  Cradle of Warli Art & Tribal Heritage
                </span>
                <span className="text-xs text-pine_teal/80 font-medium">
                  Jawhar, Palghar District (May 2026)
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. COHORT STATS ================= */}
      <section className="py-8 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-sm border border-celadon/40 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center"
              >
                <span className="text-2xl md:text-4xl font-extrabold text-evergreen font-serif">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-bold text-sea_green uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] md:text-xs text-pine_teal/80 mt-1 leading-tight font-medium">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. ABOUT JAWHAR & SUMMER SCHOOL ================= */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-celadon/50 shadow-sm relative overflow-hidden">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-frosted_mint/50 border border-celadon text-sea_green text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Why Jawhar?</span>
            </div>

            <h2 className="font-serif text-2xl md:text-4xl font-bold text-evergreen">
              A Living Classroom in the Western Ghats
            </h2>

            <p className="text-pine_teal text-sm md:text-base leading-relaxed">
              Known as the picturesque hill-station and cultural heartland of Palghar district, <strong>Jawhar</strong> provides a rich backdrop for experiential inquiry into indigenous traditions, forest ecosystems, and local self-rule.
            </p>

            <p className="text-pine_teal text-sm md:text-base leading-relaxed">
              Participants will move beyond theoretical textbooks to live, learn, and engage with tribal leaders, master Warli painters, forestry experts, and rural development institutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sea_green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-evergreen">
                  Live in-depth dialogues with Gram Panchayat & tribal councils
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sea_green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-evergreen">
                  Hands-on workshops with master indigenous Warli painters
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sea_green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-evergreen">
                  Ethnobotany & forest biodiversity expeditions
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sea_green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-evergreen">
                  Multi-disciplinary policy and rural economy problem-solving
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. CORE IMMERSION THEMES ================= */}
      <section id="themes" className="py-12 px-4 md:px-8 bg-frosted_mint/40 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-celadon text-sea_green text-xs font-bold uppercase tracking-wider">
              <BookOpen size={14} />
              <span>Pillars of Learning</span>
            </div>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-evergreen">
              Key Themes of the Summer School
            </h2>
            <p className="text-pine_teal/80 text-sm md:text-base max-w-xl mx-auto">
              A comprehensive curriculum designed to blend cultural heritage, environmental stewardship, and social policy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {themes.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl border ${item.bg} bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-celadon/40 flex items-center justify-center shadow-xs mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-evergreen mb-2">
                    {item.title}
                  </h3>
                  <p className="text-pine_teal/80 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 5. ITINERARY OVERVIEW ================= */}
      <section className="py-14 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-celadon text-sea_green text-xs font-bold uppercase tracking-wider">
            <Calendar size={14} />
            <span>5-Day Immersive Plan</span>
          </div>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-evergreen">
            Indicative Day-by-Day Schedule
          </h2>
          <p className="text-pine_teal/80 text-sm md:text-base max-w-xl mx-auto">
            Each day connects field interactions with conceptual reflections and peer learning.
          </p>
        </div>

        {/* DAY SELECTOR BUTTONS */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
          {itinerary.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDay(idx)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 ${
                activeDay === idx
                  ? "bg-sea_green text-white shadow-md scale-105"
                  : "bg-white text-pine_teal border border-celadon/50 hover:bg-frosted_mint/50"
              }`}
            >
              {day.day}
            </button>
          ))}
        </div>

        {/* ACTIVE DAY CARD */}
        <div className="bg-white border-2 border-celadon/60 rounded-3xl p-6 md:p-8 shadow-sm transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-celadon/30 pb-4 mb-5">
            <div>
              <span className="text-xs font-bold uppercase text-sea_green tracking-wider">
                {itinerary[activeDay].day} Focus
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-evergreen">
                {itinerary[activeDay].theme}
              </h3>
            </div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${itinerary[activeDay].color}`}>
              {itinerary[activeDay].icon}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-evergreen/80 uppercase tracking-wider">
              Key Sessions & Field Engagements:
            </h4>
            <ul className="space-y-2.5">
              {itinerary[activeDay].activities.map((act, actIdx) => (
                <li key={actIdx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-sea_green mt-1.5 flex-shrink-0" />
                  <span className="text-sm font-medium text-pine_teal">
                    {act}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>

      {/* ================= 6. GLIMPSES GALLERY ================= */}
      <section className="py-12 px-4 md:px-8 bg-frosted_mint/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 space-y-2">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-evergreen">
              Glimpses of Jawhar & Sahyadri
            </h2>
            <p className="text-pine_teal/80 text-sm md:text-base">
              The landscapes, art, and vibrant village life awaiting the cohort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative h-56 rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-white/60"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-medium drop-shadow-sm">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. CTA / REGISTRATION ================= */}
      <section className="py-16 px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-evergreen via-sea_green to-dark_emerald text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          
          <div className="relative z-10 space-y-5">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase text-frosted_mint">
              May 2026 Cohort
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
              Ready to Experience Grassroots India in Jawhar?
            </h2>

            <p className="text-white/85 text-sm md:text-base max-w-xl mx-auto">
              Join students, researchers, and aspiring change leaders for an unforgettable 5-day immersion into culture, ecology, and governance.
            </p>

            <div className="pt-3 flex flex-wrap justify-center gap-4">
              <Link
                href="/register/form"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-evergreen font-bold text-sm md:text-base shadow-lg hover:shadow-xl hover:bg-frosted_mint hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Are you Interested
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-transparent border border-white/40 text-white font-semibold text-sm md:text-base hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Decorative background blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-mint_leaf/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        </div>
      </section>

    </main>
  )
}
