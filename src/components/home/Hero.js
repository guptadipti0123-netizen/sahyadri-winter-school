"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Clock 
} from "lucide-react"
import { Lora, Inter, Outfit } from "next/font/google"

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
})

// Main Featured Slides (Left Big Carousel)
const featuredSlides = [
  {
    id: "real-bharat",
    category: "RURAL IMMERSION",
    title: "Understanding Real Bharat: Ground-Level Leadership & Grassroots Realities",
    subtitle: "A transformative 5-day residential fellowship taking students from premier universities to rural Maharashtra communities.",
    image: "/sahyadri-bg-hero6.jpeg",
    link: "/about",
    urlTag: "sahyadriconnect.org/about",
    date: "Dec 2025",
    readTime: "5 Days Immersion",
  },
  {
    id: "jawhar-summer-school",
    category: "SUMMER SCHOOL 2026",
    title: "Cradle of Warli Art: Previewing Summer School 2026 in Jawhar",
    subtitle: "Explore sacred forest groves, indigenous art traditions, and self-governance models under PESA in Palghar district.",
    image: "/jawahar-village-tribal-community.jpg",
    link: "/summer-school",
    urlTag: "sahyadriconnect.org/summer-school",
    date: "May 2026",
    readTime: "Registrations Open",
  },
  {
    id: "sustainable-ecology",
    category: "ECOLOGY & INNOVATION",
    title: "Deep Roots: Tribal Ecology, Organic Agriculture & Solar Innovation",
    subtitle: "Documenting ethnobotany, decentralized solar micro-grids, and regenerative farming with local tribal elders.",
    image: "/camp2/camp2-day3-i2.jpg",
    link: "/blog/sustainable-livelihoods-and-tribal-wisdom",
    urlTag: "sahyadriconnect.org/blog/sustainable-livelihoods",
    date: "Dec 27, 2025",
    readTime: "5 min read",
  },
  {
    id: "maratha-heritage",
    category: "CULTURE & ECONOMY",
    title: "Echoes of History & Grassroots Enterprise: Fort Trekking & FPOs",
    subtitle: "Examining the strategic water architecture of Maratha forts and visiting farmer collectives in Karjat.",
    image: "/camp2/camp2-day2-i1.jpg",
    link: "/blog/maratha-heritage-and-rural-immersion",
    urlTag: "sahyadriconnect.org/blog/maratha-heritage",
    date: "Dec 25, 2025",
    readTime: "6 min read",
  },
]

// Right Side Latest Articles / Featured Cards (Clickable Links)
const sideArticles = [
  {
    id: "art-1",
    category: "GOVERNANCE & PESA",
    title: "Summer School 2026: Jawhar Warli Art & Tribal Governance",
    date: "May 2026",
    readTime: "5 Days",
    image: "/jawahar-village-tribal-community.jpg",
    link: "/summer-school",
    tagColor: "bg-[#eef2ff] text-[#3730a3] border-[#c7d2fe]",
  },
  {
    id: "art-2",
    category: "ECOLOGY & TECH",
    title: "Deep Roots: Organic Farming, Forest Walks & Solar Innovation",
    date: "Dec 27, 2025",
    readTime: "5 min read",
    image: "/camp2/camp2-day3-i2.jpg",
    link: "/blog/sustainable-livelihoods-and-tribal-wisdom",
    tagColor: "bg-[#ecfdf5] text-[#065f46] border-[#a7f3d0]",
  },
  {
    id: "art-3",
    category: "CULTURE & HISTORY",
    title: "Echoes of History: Maratha Heritage & Farmer Collectives",
    date: "Dec 25, 2025",
    readTime: "6 min read",
    image: "/camp2/camp2-day2-i1.jpg",
    link: "/blog/maratha-heritage-and-rural-immersion",
    tagColor: "bg-[#fef3c7] text-[#92400e] border-[#fde68a]",
  },
  {
    id: "art-4",
    category: "FIELD STORIES",
    title: "A Day at Sahyadri Rural Connect: Arrivals & Ground Notes",
    date: "Dec 24, 2025",
    readTime: "5 min read",
    image: "/camp2/camp2-day1-i1.jpg",
    link: "/blog/a-day-at-sahyadri-rural-connect",
    tagColor: "bg-[#f5f3ff] text-[#5b21b6] border-[#ddd6fe]",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  const slideCount = featuredSlides.length

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slideCount)
  }, [slideCount])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount)
  }, [slideCount])

  // Autoplay
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide()
      }, 7000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, nextSlide])

  const activeSlide = featuredSlides[current]

  return (
    <section 
      className="relative w-full bg-[#fbf8f1] pt-20 md:pt-24 pb-12 px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* --- MAIN 2-COLUMN GRID (Matching Vritant Reference Screenshot) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Featured Hero Slider Card (7 cols / ~60%) */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="relative w-full h-[460px] sm:h-[520px] md:h-[580px] lg:h-[600px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#ebdcc6] group flex flex-col justify-between select-none">
              
              {/* Background Slides */}
              {featuredSlides.map((slide, index) => {
                const isActive = index === current
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={index === 0}
                      className="object-cover object-center"
                    />

                    {/* Clean and Light Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  </div>
                )
              })}

              {/* Top Bar: Category Pill Badge (Clean text, no icons) */}
              <div className="relative z-20 p-5 sm:p-7 flex items-center justify-between">
                <Link
                  href={activeSlide.link}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#fef3c7]/95 hover:bg-[#fef3c7] text-[#78350f] text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-sm border border-[#fde68a] backdrop-blur-sm transition-all hover:scale-105"
                >
                  <span>{activeSlide.category}</span>
                </Link>

                {/* Slide Counter */}
                <div className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-xs font-mono border border-white/20">
                  0{current + 1} / 0{slideCount}
                </div>
              </div>

              {/* Side Navigation Buttons (Circular buttons) */}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  prevSlide()
                }}
                aria-label="Previous Slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/75 active:scale-95 text-white/90 hover:text-white border border-white/30 backdrop-blur-md flex items-center justify-center transition-all shadow-lg cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  nextSlide()
                }}
                aria-label="Next Slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/75 active:scale-95 text-white/90 hover:text-white border border-white/30 backdrop-blur-md flex items-center justify-center transition-all shadow-lg cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>

              {/* Bottom Content Area (Clickable to open page) */}
              <div className="relative z-20 p-5 sm:p-8 md:p-10 pt-12 flex flex-col justify-end">
                
                {/* Title Linking to page */}
                <Link 
                  href={activeSlide.link}
                  className="group/title block"
                >
                  <h1 
                    key={`title-${activeSlide.id}`}
                    className={`${lora.className} text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] font-medium text-white leading-[1.22] tracking-tight drop-shadow-md mb-3 group-hover/title:text-[#d8f3dc] transition-colors`}
                  >
                    {activeSlide.title}
                  </h1>
                </Link>

                {/* Subtitle */}
                <p 
                  key={`sub-${activeSlide.id}`}
                  className={`${inter.className} text-gray-200 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mb-5 line-clamp-2 drop-shadow`}
                >
                  {activeSlide.subtitle}
                </p>

                {/* Footer Link & Indicators Row */}
                <div className="flex items-center justify-between gap-4 pt-3 border-t border-white/20">
                  <Link
                    href={activeSlide.link}
                    className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-white font-mono transition-colors group/link"
                  >
                    <span className="text-[#52b788]">https://</span>
                    <span className="group-hover/link:underline">{activeSlide.urlTag}</span>
                    <ArrowRight size={13} className="ml-0.5 text-gray-300 transition-transform group-hover/link:translate-x-1" />
                  </Link>

                  {/* Slide Indicators */}
                  <div className="flex items-center gap-1.5">
                    {featuredSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === current 
                            ? "w-6 bg-white" 
                            : "w-1.5 bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: "LATEST ARTICLES" Side Stack (5 cols / ~40%) */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
            
            {/* Section Heading (Clean text, no icons) */}
            <div className="flex items-center justify-between mb-4 px-1">
              <h2 className={`${outfit.className} text-xs md:text-sm font-bold tracking-widest text-[#4a3b2c] uppercase`}>
                LATEST ARTICLES
              </h2>
              <Link 
                href="/blog" 
                className="text-xs font-semibold text-[#2d6a4f] hover:text-[#1b4332] hover:underline"
              >
                View All
              </Link>
            </div>

            {/* Vertical Stack of Clean White Cards */}
            <div className="flex flex-col gap-3.5">
              {sideArticles.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="group bg-white hover:bg-[#fefdfb] rounded-2xl p-3 sm:p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-[#ebdcc6]/70 hover:border-[#2d6a4f]/40 transition-all duration-300 flex items-center gap-3.5 sm:gap-4 hover:-translate-y-0.5"
                  >
                    {/* Square Thumbnail */}
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-black/5 bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Card Text Content */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      {/* Category Badge (Clean text, no icons) */}
                      <div className="mb-1.5 flex items-center">
                        <span className={`inline-block text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md border ${item.tagColor} tracking-wider uppercase`}>
                          {item.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`${lora.className} text-xs sm:text-sm font-semibold text-[#1c1917] leading-snug line-clamp-2 group-hover:text-[#2d6a4f] transition-colors`}>
                        {item.title}
                      </h3>

                      {/* Date & Read Time */}
                      <div className="mt-1 flex items-center gap-2 text-[11px] text-gray-500 font-medium">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} className="text-gray-400" />
                          {item.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}