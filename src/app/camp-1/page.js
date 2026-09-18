"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Camera, ChevronLeft, ChevronRight, Calendar, MapPin,
  Sparkles, Sun, Trees, Users, ArrowRight, X, HeartHandshake, BookOpen
} from "lucide-react"

// --- WINTER CAMP JAN 2025 DATA ---
const campDetails = {
  title: "Sahyadri Rural Connect",
  edition: "January 2025",
  tagline: "The beginning of a transformative journey into grassroots rural Bharat.",
  dates: "Jan 09th - 12th, 2025",
  location: "Palghar, Maharashtra",
  status: "Inaugural Edition"
}

// --- STATS DATA ---
const stats = [
  {
    value: "25+",
    label: "Inaugural Fellows",
    desc: "Multi-disciplinary university scholars and changemakers",
    color: "from-amber-100 to-amber-200",
    textColor: "text-amber-800"
  },
  {
    value: "8+",
    label: "Disciplines",
    desc: "Scholars from Social Work, Engineering, Law & Economics",
    color: "from-emerald-100 to-emerald-200",
    textColor: "text-emerald-800"
  },
  {
    value: "4 Days",
    label: "Field Immersion",
    desc: "Direct living experience and community interaction",
    color: "from-teal-100 to-teal-200",
    textColor: "text-teal-800"
  },
  {
    value: "100%",
    label: "Grassroots Wisdom",
    desc: "Living with farmers, tribal families & village elders",
    color: "from-orange-100 to-orange-200",
    textColor: "text-orange-800"
  }
]

// --- CORE THEMES ---
const themes = [
  {
    title: "Clean Energy & Rural Irrigation",
    desc: "Exploring decentralized solar micro-grids and solar lift irrigation in hilly tribal agricultural terrains.",
    icon: <Sun className="w-6 h-6 text-amber-700" />,
    bg: "bg-amber-50/70 border-amber-200/80"
  },
  {
    title: "Orchard Immersion & Agrarian Livelihoods",
    desc: "Connecting with farming families in Palghar mango orchards to understand seasonal economics and local food systems.",
    icon: <Trees className="w-6 h-6 text-emerald-700" />,
    bg: "bg-emerald-50/70 border-emerald-200/80"
  },
  {
    title: "Community Wisdom & Hamlet Walks",
    desc: "Village walks, elder assemblies under community trees, and peer synthesis sessions on daily field observations.",
    icon: <Users className="w-6 h-6 text-teal-700" />,
    bg: "bg-teal-50/70 border-teal-200/80"
  }
]

const galleryImages = [
  "/palghar/palghar-cohort-memorial-courtyard.jpg",
  "/palghar/palghar-community-tree-dialogue.jpg",
  "/palghar/palghar-solar-pump-valley-field.jpg",
  "/palghar/palghar-solar-panels-valley-view.jpg",
  "/palghar/palghar-irrigation-filter-demo.jpg",
  "/palghar/palghar-fort-stone-steps-cohort.jpg",
  "/palghar/palghar-mango-orchard-community.jpg",
  "/palghar/palghar-classroom-reflection-session.jpg",
  "/palghar/palghar-tribal-household-mangoes.jpg",
  "/palghar/palghar-village-street-interaction.jpg",
  "/palghar/palghar-traditional-community-meal.jpg",
  "/palghar/palghar-village-children-fellows.jpg",
  "/palghar/palghar-viewpoint-fellows-scooter.jpg",
  "/palghar/palghar-mango-harvest-fellows.jpg",
  "/palghar/palghar-village-temple-community-assembly.jpg",
  "/palghar/palghar-heritage-stone-wada-dusk.png",
]

// --- SLIDER BLOCK COMPONENT FOR MOBILE ---
const AutoSlideBlock = ({ images, currentIndex, onPhotoClick }) => {
  return (
    <div className="relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden shadow-xs border border-[#dccdb2] group select-none cursor-pointer">
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out will-change-transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <div 
            key={i} 
            className="relative w-full h-full flex-shrink-0"
            onClick={() => onPhotoClick(src)}
          >
            <Image
              src={src}
              alt="Camp memory"
              fill
              className="object-cover pointer-events-none"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Camp1Page() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const timerRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Timer logic for mobile slider
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 4)
    }, 3200)
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const handleManualChange = (direction) => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % 4)
    } else {
      setCurrentIndex((prev) => (prev - 1 + 4) % 4)
    }
    startTimer()
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    if (distance > 40) handleManualChange('next')
    else if (distance < -40) handleManualChange('prev')
    touchStartX.current = 0
    touchEndX.current = 0
  }

  const sliderChunks = []
  for (let i = 0; i < galleryImages.length; i += 4) {
    sliderChunks.push(galleryImages.slice(i, i + 4))
  }

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-[#f5efe2] text-[#3e2410]">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative isolate pt-16 sm:pt-28 md:pt-36 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-[#faede0] via-[#f7e6d5] to-[#f5efe2] text-[#3e2410] border-b border-[#dccdb2]/80">
        {/* Soft Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#3a8c7e]/12 rounded-full blur-[110px] pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#c8880a]/12 rounded-full blur-[90px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          <div className="space-y-4 sm:space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdfbf7] border border-[#dccdb2] shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a8c7e] animate-pulse" />
              <p className="text-xs md:text-sm font-semibold text-[#1f5c54] tracking-widest uppercase">
                {campDetails.edition} • {campDetails.status}
              </p>
            </div>

            <h1 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#3e2410] leading-tight tracking-tight">
              {campDetails.title}
            </h1>

            <div className="flex flex-wrap gap-3 text-sm font-medium text-[#3e2410]">
              <div className="flex items-center gap-2 bg-[#fdfbf7] px-4 py-2 rounded-full border border-[#dccdb2] shadow-xs">
                <Calendar className="w-4 h-4 text-[#3a8c7e]" />
                <span className="text-xs sm:text-sm">{campDetails.dates}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#fdfbf7] px-4 py-2 rounded-full border border-[#dccdb2] shadow-xs">
                <MapPin className="w-4 h-4 text-[#c8880a]" />
                <span className="text-xs sm:text-sm">{campDetails.location}</span>
              </div>
            </div>

            <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#7a5232] border-l-2 border-[#3a8c7e] pl-4 ml-1 leading-relaxed">
              &quot;{campDetails.tagline}&quot;
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/camps"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3a8c7e] text-white hover:bg-[#1f5c54] font-medium text-xs sm:text-sm transition-all shadow-xs"
              >
                <span>View All Camps</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fdfbf7] border border-[#dccdb2] text-[#3e2410] hover:bg-[#ebe2d1] font-medium text-xs sm:text-sm transition-all shadow-xs"
              >
                <span>Join Next Cohort</span>
              </Link>
            </div>
          </div>

          {/* Polaroid Hero Card */}
          <div className="flex justify-center">
            <div 
              onClick={() => setSelectedPhoto("/palghar/palghar-cohort-memorial-courtyard.jpg")}
              className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[420px] h-[270px] xs:h-[300px] md:h-[360px] bg-[#fdfbf7] p-3 pb-10 sm:pb-12 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500 rounded-2xl cursor-pointer border border-[#dccdb2]"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl bg-[#ebe2d1]">
                <Image 
                  src="/palghar/palghar-cohort-memorial-courtyard.jpg" 
                  alt="Winter Camp Jan 2025 Memories" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                  priority 
                />
              </div>
              <div className="absolute bottom-3 left-0 w-full text-center">
                <span className="font-serif text-[#1f5c54] text-sm sm:text-base font-bold tracking-wide">
                  Where It Began • Palghar 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. STATS SECTION ================= */}
      <section className="py-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-b border-[#dccdb2]/60">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fdfbf7] rounded-2xl p-4 sm:p-6 border border-[#dccdb2] shadow-xs text-left space-y-1 hover:shadow-md transition-shadow"
            >
              <div className={`font-serif text-2xl sm:text-4xl font-normal ${item.textColor}`}>
                {item.value}
              </div>
              <div className="font-bold text-xs sm:text-sm text-[#3e2410]">
                {item.label}
              </div>
              <p className="text-[11px] sm:text-xs text-[#7a5232] font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 3. CORE THEMES SECTION ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-b border-[#dccdb2]/60">
        <div className="text-center mb-8 sm:mb-12 space-y-2">
          <div className="inline-block px-3 py-1 rounded-full bg-[#3a8c7e]/10 border border-[#3a8c7e]/20 text-xs font-bold tracking-widest text-[#1f5c54] uppercase">
            IMMERSION PILLARS
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#3e2410]">
            Core Immersion <span className="italic text-[#3a8c7e] font-serif">Themes</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#7a5232] max-w-xl mx-auto font-light">
            Grassroots touchpoints from our inaugural field cohort in Palghar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {themes.map((theme, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl border ${theme.bg} shadow-xs text-left space-y-3`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/80 border border-[#dccdb2] flex items-center justify-center shadow-xs">
                {theme.icon}
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3e2410]">
                {theme.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#7a5232] leading-relaxed font-light">
                {theme.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 4. VISUAL PHOTO ARCHIVE ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 bg-[#f5efe2] relative">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdfbf7] border border-[#dccdb2] shadow-xs text-[#1f5c54] text-[11px] font-bold tracking-widest uppercase">
              <Camera size={13} className="text-[#3a8c7e]" />
              <span>Visual Archive</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#3e2410]">
              Moments from the <span className="italic text-[#3a8c7e] font-serif">Start</span>
            </h2>
            <p className="text-[#7a5232] text-xs sm:text-sm md:text-base font-light max-w-xl mx-auto">
              Authentic field photos capturing the spirit of our very first rural connect cohort.
            </p>
          </div>

          {/* --- DESKTOP VIEW: STATELY MASONRY GRID --- */}
          <div className="hidden lg:grid grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                onClick={() => setSelectedPhoto(src)}
                className={`
                  relative rounded-2xl overflow-hidden group shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer border border-[#dccdb2] bg-[#ebe2d1]
                  ${i % 5 === 0 ? "col-span-2 row-span-2" : ""}
                  ${i % 7 === 0 ? "row-span-2" : ""}
                `}
              >
                <Image
                  src={src}
                  alt={`Winter Camp Jan 2025 Memory ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold drop-shadow-md">
                    Palghar Memory #{i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* --- MOBILE & TABLET VIEW (2 Cols with Slider) --- */}
          <div
            className="relative lg:hidden group/mobile-gallery"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Buttons */}
            <button
              onClick={() => handleManualChange('prev')}
              className="absolute -left-2 top-1/2 -translate-y-full z-20 p-2 bg-[#241407]/70 backdrop-blur-md rounded-full border border-white/30 text-white shadow-lg active:scale-95 transition-all"
              aria-label="Previous Photos"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => handleManualChange('next')}
              className="absolute -right-2 top-1/2 -translate-y-full z-20 p-2 bg-[#241407]/70 backdrop-blur-md rounded-full border border-white/30 text-white shadow-lg active:scale-95 transition-all"
              aria-label="Next Photos"
            >
              <ChevronRight size={18} />
            </button>

            {/* Grid Content */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {sliderChunks.slice(0, 4).map((chunk, i) => (
                <AutoSlideBlock
                  key={i}
                  images={chunk}
                  currentIndex={currentIndex}
                  onPhotoClick={(src) => setSelectedPhoto(src)}
                />
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-5">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (timerRef.current) clearInterval(timerRef.current)
                    setCurrentIndex(idx)
                    startTimer()
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-6 bg-[#1f5c54]" : "w-2 bg-[#1f5c54]/30"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. LIGHTBOX MODAL ================= */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 sm:right-0 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={22} />
            </button>
            <div className="relative w-full h-[60vh] sm:h-[75vh] rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl">
              <Image
                src={selectedPhoto}
                alt="Palghar Jan 2025 Full View"
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