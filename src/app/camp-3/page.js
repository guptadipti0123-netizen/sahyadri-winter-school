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
  {
    src: "/palghar/palghar-cohort-memorial-courtyard.jpg",
    title: "Palghar Inaugural Cohort Group",
    desc: "The complete student fellowship cohort and organizers at the campus memorial courtyard.",
    tag: "Cohort Assembly",
    span: "lg:col-span-2 lg:row-span-2"
  },
  {
    src: "/palghar/palghar-solar-pump-valley-field.jpg",
    title: "Solar Lift Irrigation Demonstration",
    desc: "Hands-on field learning about solar-powered lift irrigation in hilly tribal terrain.",
    tag: "Clean Tech & Irrigation",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-solar-panels-valley-view.jpg",
    title: "Valley Micro-Grid & Renewable Energy",
    desc: "Understanding decentralized solar infrastructure supporting rural agricultural clusters.",
    tag: "Renewable Energy",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-irrigation-filter-demo.jpg",
    title: "Micro-Irrigation & Water Filtration Tech",
    desc: "Field demonstration of pressurized drip filtration and efficient water management systems.",
    tag: "Water Engineering",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-fort-stone-steps-cohort.jpg",
    title: "Heritage Fort Exploration",
    desc: "Fellows gathering on historic fort bastions during sunset field excursions.",
    tag: "Heritage & Trekking",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-mango-orchard-community.jpg",
    title: "Grassroots Dialogue with Farming Families",
    desc: "Student fellows engaging with local village farmers in Palghar mango orchards.",
    tag: "Orchard Immersion",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-classroom-reflection-session.jpg",
    title: "Peer Learning & Cohort Reflections",
    desc: "Interactive discussion and debrief sessions synthesizing daily grassroots field insights.",
    tag: "Cohort Reflection",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-community-tree-dialogue.jpg",
    title: "Village Tree Assembly & Dialogue",
    desc: "Conversations with village elders and farmers under the community tree shade.",
    tag: "Village Assembly",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-tribal-household-mangoes.jpg",
    title: "Tribal Household & Family Immersion",
    desc: "Fellows connecting with local village families and understanding rural livelihoods.",
    tag: "Community Connect",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-village-street-interaction.jpg",
    title: "Village Walk & Elder Interactions",
    desc: "Walking through village hamlets and engaging with local community leaders.",
    tag: "Hamlet Walk",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-traditional-community-meal.jpg",
    title: "Communal Dining in Village Hamlet",
    desc: "Sharing authentic, home-cooked Maharashtrian meals on traditional floor mats.",
    tag: "Cultural Lived Experience",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-village-children-fellows.jpg",
    title: "Learning with Village Youth",
    desc: "Interacting with rural schoolchildren, understanding village education & everyday aspirations.",
    tag: "Youth & Education",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-viewpoint-fellows-scooter.jpg",
    title: "Sahyadri Ridge Explorations",
    desc: "Fellows exploring scenic vantage points across the Western Ghats terrain.",
    tag: "Field Expeditions",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-mango-harvest-fellows.jpg",
    title: "Local Produce & Agro-Ecology",
    desc: "Learning about seasonal agricultural cycles, fruit orchards, and local livelihoods.",
    tag: "Rural Livelihoods",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-village-temple-community-assembly.jpg",
    title: "Village Temple Community Assembly",
    desc: "Engaging with village elders, temple trusts, and grassroots community leaders.",
    tag: "Cultural Assembly",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-heritage-stone-wada-dusk.png",
    title: "Traditional Stone Wada Architecture",
    desc: "Exploring indigenous basalt stone craftsmanship and rural heritage architecture at dusk.",
    tag: "Heritage Architecture",
    span: "lg:col-span-1 lg:row-span-1"
  }
]

export default function SummerSchoolJawharPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-[#f5efe2] text-[#3e2410]">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-28 md:pt-36 pb-12 sm:pb-16 overflow-hidden bg-[#f5efe2] text-[#3e2410] border-b border-[#dccdb2]/80">
        
        {/* Ambient Warm Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#3a8c7e]/10 rounded-full blur-[110px] pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#c8880a]/10 rounded-full blur-[90px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center relative z-10">
          
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

            {/* ACTION BUTTONS */}
            <div className="flex flex-row items-center gap-3 sm:gap-4 pt-3">
              <Link
                href="#themes"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-[#3a8c7e] hover:bg-[#1f5c54] text-white font-medium text-xs sm:text-sm md:text-base shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap active:scale-95"
              >
                <span>Explore Themes</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-transparent text-[#3e2410] border border-[#dccdb2] font-medium text-xs sm:text-sm md:text-base shadow-xs hover:bg-[#ebe2d1] transition-all duration-300 whitespace-nowrap active:scale-95"
              >
                <span>Visual Archive</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: POLAROID / FEATURE CARD */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[380px] bg-[#fdfbf7] p-4 shadow-md rounded-3xl transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-[#dccdb2] flex flex-col gap-4">
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#ebe2d1] shrink-0 border border-[#dccdb2]/60">
                <Image
                  src="/floating7.jpeg"
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
                  Cradle of Warli Art &amp; Tribal Heritage
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
                <CheckCircle2 className="w-5 h-5 text-[#3a8c7e] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-[#3e2410]">
                  Live in-depth dialogues with Gram Panchayat &amp; tribal councils
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#3a8c7e] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-[#3e2410]">
                  Hands-on workshops with master indigenous Warli painters
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#3a8c7e] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-[#3e2410]">
                  Ethnobotany &amp; forest biodiversity expeditions
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#3a8c7e] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-[#3e2410]">
                  Multi-disciplinary policy and rural economy problem-solving
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. CORE IMMERSION THEMES ================= */}
      <section id="themes" className="py-14 px-4 md:px-8 bg-[#ebe2d1]/40 border-y border-[#dccdb2] relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdfbf7] border border-[#dccdb2] text-[#c8880a] text-xs font-bold uppercase tracking-wider">
              <BookOpen size={14} />
              <span>Pillars of Learning</span>
            </div>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#3e2410]">
              Key Themes of the Summer School
            </h2>
            <p className="text-[#7a5232] text-sm md:text-base max-w-xl mx-auto">
              A comprehensive curriculum designed to blend cultural heritage, environmental stewardship, and social policy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {themes.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl border border-[#dccdb2] bg-[#fdfbf7] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center gap-3.5 sm:gap-4 mb-3 sm:mb-3.5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#f5efe2] border border-[#dccdb2] flex items-center justify-center shadow-xs shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#3e2410] leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#7a5232] text-xs sm:text-sm leading-relaxed">
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdfbf7] border border-[#dccdb2] text-[#3a8c7e] text-xs font-bold uppercase tracking-wider">
            <Calendar size={14} />
            <span>5-Day Immersive Plan</span>
          </div>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#3e2410]">
            Indicative Day-by-Day Schedule
          </h2>
          <p className="text-[#7a5232] text-sm md:text-base max-w-xl mx-auto">
            Each day connects field interactions with conceptual reflections and peer learning.
          </p>
        </div>

        {/* 5-DAY HORIZONTAL TRACK */}
        <div className="relative group/track">
          <div className="flex items-stretch gap-4 overflow-x-auto pb-4 md:pb-6 pt-2 px-2 snap-x snap-mandatory hide-scrollbar">
            {itinerary.map((item, index) => (
              <div key={index} className="flex items-center shrink-0">
                <div className="w-[280px] sm:w-[320px] bg-[#fdfbf7] rounded-3xl p-5 sm:p-6 border border-[#dccdb2] shadow-sm hover:shadow-xl transition-all duration-300 snap-center relative z-10 overflow-hidden flex flex-col h-full group hover:-translate-y-1 text-left">
                  <div className={`absolute top-0 left-0 w-full h-1.5 ${item.accent}`} />
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color} shadow-xs`}>
                      {item.icon}
                    </div>
                    <div className="text-right">
                      <span className="block text-xs font-bold uppercase tracking-widest text-[#3a8c7e]">
                        {item.day}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#3e2410] leading-tight mb-3 min-h-[2.75rem]">
                    {item.theme}
                  </h3>
                  <ul className="space-y-2 flex-grow">
                    {item.activities.map((act, i) => (
                      <li key={i} className="text-xs sm:text-sm text-[#7a5232] flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-[#3a8c7e]" />
                        <span className="leading-snug">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index !== itinerary.length - 1 && (
                  <div className="hidden xl:flex w-6 shrink-0 items-center justify-center relative z-0 mx-0.5">
                    <div className="w-6 h-6 rounded-full bg-[#fdfbf7] border border-[#dccdb2] flex items-center justify-center shadow-xs">
                      <ArrowRight size={11} className="text-[#3a8c7e]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ================= 6. GLIMPSES & PALGHAR VISUAL ARCHIVE (ALL 16 REAL PHOTOS) ================= */}
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

          {/* --- 16-PHOTO RESPONSIVE GALLERY GRID --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-[260px] sm:auto-rows-[280px]">
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
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241407]/90 via-[#241407]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Tag Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/60 text-[#d4a825] backdrop-blur-md border border-[#dccdb2]/20">
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/20 text-[#f5efe2] backdrop-blur-md border border-white/10">
                    #{idx + 1}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 text-[#f5efe2] text-left transform transition-transform duration-300">
                  <h3 className="font-serif font-bold text-sm sm:text-base lg:text-lg leading-snug text-[#f5efe2] mb-1 drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#f5efe2]/90 line-clamp-2 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#241407] rounded-2xl overflow-hidden border border-[#dccdb2]/30 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer border border-white/30"
              aria-label="Close photo preview"
            >
              <X size={18} />
            </button>

            {/* Photo Container */}
            <div className="relative w-full h-[360px] sm:h-[480px] md:h-[540px] bg-black">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Details */}
            <div className="p-4 sm:p-5 bg-[#3e2410] text-[#f5efe2] text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#3a8c7e] text-[#f5efe2]">
                  {selectedPhoto.tag}
                </span>
              </div>
              <h3 className="font-serif font-bold text-base sm:text-xl text-[#f5efe2]">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#f5efe2]/85 mt-0.5">
                {selectedPhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}
