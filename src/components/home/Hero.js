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

// Main Featured Slides (Left Big Carousel) — All Unique Real Images
const featuredSlides = [
  {
    id: "real-bharat",
    category: "RURAL IMMERSION",
    title: "Understanding Real Bharat: Ground-Level Leadership & Grassroots Realities",
    subtitle: "A transformative 5-day residential fellowship taking students from premier universities to rural Maharashtra communities.",
    image: "/sahyadri-bg-hero6.jpeg", // Panoramic Sahyadri Ghats
    link: "/blog/a-day-at-sahyadri-rural-connect",
    date: "Dec 2025",
    readTime: "5 Days Immersion",
  },
  {
    id: "rural-connectivity",
    category: "TECH & INFRASTRUCTURE",
    title: "Bridging the Divide: Physical & Digital Connectivity in Rural Bharat",
    subtitle: "Examining last-mile PMGSY road networks, BharatNet optical fiber, and solar telecom towers across Sahyadri villages.",
    image: "/camp2/camp2-day4-i1.jpg", // Real field photo: solar telecom & rural infrastructure
    link: "/blog/rural-connectivity-and-digital-divide",
    date: "Dec 28, 2025",
    readTime: "5 min read",
  },
  {
    id: "jawhar-summer-school",
    category: "CULTURE & ART",
    title: "Cradle of Warli Art: Previewing Summer School in Jawhar",
    subtitle: "Explore sacred forest groves, indigenous art traditions, and self-governance models under PESA in Palghar district.",
    image: "/floating7.jpeg", // Jawhar tribal palace & landscape
    link: "/blog/cradle-of-warli-art-jawhar-preview",
    date: "May 2026",
    readTime: "4 min read",
  },
  {
    id: "sustainable-ecology",
    category: "ECOLOGY & INNOVATION",
    title: "Deep Roots: Organic Farming, Forest Walks & Solar Innovation",
    subtitle: "Documenting ethnobotany, decentralized solar micro-grids, and regenerative farming with local tribal elders.",
    image: "/camp2/camp2-day3-i2.jpg", // Real field photo: organic farm & forest walk
    link: "/blog/sustainable-livelihoods-and-tribal-wisdom",
    date: "Dec 27, 2025",
    readTime: "5 min read",
  },
  {
    id: "maratha-heritage",
    category: "CULTURE & ECONOMY",
    title: "Grassroots Enterprise & Maratha Heritage: Fort Trails to Farmer Collectives",
    subtitle: "Examining the strategic water architecture of Maratha forts and visiting farmer collectives in Karjat.",
    image: "/camp2/camp2-day2-i1.jpg", // Real photo: fort trek trail & grassroots enterprise
    link: "/blog/maratha-heritage-and-rural-immersion",
    date: "Dec 25, 2025",
    readTime: "6 min read",
  },
]

// Right Side Latest Articles — Styled with Kwina earthy palette
const sideArticles = [
  {
    id: "art-1",
    category: "CULTURE & ART",
    title: "Cradle of Warli Art: Previewing Summer School in Jawhar",
    date: "May 2026",
    readTime: "4 min read",
    image: "/floating7.jpeg",
    link: "/blog/cradle-of-warli-art-jawhar-preview",
    tagColor: "bg-[#3a8c7e]/10 text-[#3a8c7e] border-[#3a8c7e]/30",
  },
  {
    id: "art-2",
    category: "TECH & CONNECTIVITY",
    title: "Bridging the Divide: Physical & Digital Connectivity in Rural Bharat",
    date: "Dec 28, 2025",
    readTime: "5 min read",
    image: "/camp2/camp2-day4-i1.jpg",
    link: "/blog/rural-connectivity-and-digital-divide",
    tagColor: "bg-[#6e9e97]/15 text-[#1f5c54] border-[#6e9e97]/30",
  },
  {
    id: "art-3",
    category: "ECOLOGY & INNOVATION",
    title: "Deep Roots: Organic Farming, Forest Walks & Solar Innovation",
    date: "Dec 27, 2025",
    readTime: "5 min read",
    image: "/camp2/camp2-day3-i2.jpg",
    link: "/blog/sustainable-livelihoods-and-tribal-wisdom",
    tagColor: "bg-[#c8880a]/10 text-[#c8880a] border-[#c8880a]/30",
  },
  {
    id: "art-4",
    category: "CULTURE & HISTORY",
    title: "Grassroots Enterprise & Maratha Heritage: Fort Trails to Farmer Collectives",
    date: "Dec 25, 2025",
    readTime: "6 min read",
    image: "/camp2/camp2-day2-i1.jpg",
    link: "/blog/maratha-heritage-and-rural-immersion",
    tagColor: "bg-[#7a3a1c]/10 text-[#7a3a1c] border-[#7a3a1c]/30",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const slideCount = featuredSlides.length

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slideCount)
  }, [slideCount])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount)
  }, [slideCount])

  // Continuous smooth autoplay every 4 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount)
    }, 4500)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [slideCount])

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 45
    if (distance > minSwipeDistance) {
      nextSlide()
    } else if (distance < -minSwipeDistance) {
      prevSlide()
    }
    touchStartX.current = 0
    touchEndX.current = 0
  }

  const activeSlide = featuredSlides[current]

  return (
    <section className="relative w-full bg-[#f5efe2] pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-14 px-3.5 sm:px-6 lg:px-8 font-sans border-b border-[#dccdb2]/70">
      <div className="max-w-7xl mx-auto">
        
        {/* --- MAIN 2-COLUMN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Featured Hero Slider Card (7 cols / ~60%) */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div 
              className="relative w-full h-[460px] xs:h-[490px] sm:h-[540px] md:h-[580px] lg:h-[600px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_12px_36px_rgba(62,36,16,0.12)] border border-[#dccdb2] group flex flex-col justify-between select-none touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              
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

                    {/* Kwina Rich Warm Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241407]/95 via-[#241407]/50 to-black/20" />
                  </div>
                )
              })}

              {/* Top Bar: Category Pill Badge */}
              <div className="relative z-20 p-4 sm:p-7 flex items-center justify-between">
                <Link
                  href={activeSlide.link}
                  className="inline-flex items-center px-3.5 sm:px-4 py-1.5 rounded-full bg-[#f5efe2]/90 hover:bg-[#f5efe2] text-[#c8880a] text-[11px] sm:text-xs font-semibold tracking-wider uppercase shadow-sm border border-[#dccdb2] backdrop-blur-md transition-all hover:scale-105"
                >
                  <span>{activeSlide.category}</span>
                </Link>

                {/* Slide Counter */}
                <div className="px-3 py-1 rounded-full bg-[#241407]/60 backdrop-blur-md text-[#f5efe2] text-[11px] sm:text-xs font-mono border border-[#dccdb2]/30">
                  0{current + 1} / 0{slideCount}
                </div>
              </div>

              {/* Side Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  prevSlide()
                }}
                aria-label="Previous Slide"
                className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#241407]/60 hover:bg-[#241407]/90 active:scale-95 text-[#f5efe2] border border-[#dccdb2]/30 backdrop-blur-md flex items-center justify-center transition-all shadow-lg cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  nextSlide()
                }}
                aria-label="Next Slide"
                className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#241407]/60 hover:bg-[#241407]/90 active:scale-95 text-[#f5efe2] border border-[#dccdb2]/30 backdrop-blur-md flex items-center justify-center transition-all shadow-lg cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Bottom Content Area */}
              <div className="relative z-20 p-4 sm:p-8 md:p-10 pt-8 flex flex-col justify-end">
                
                {/* Title Linking to page */}
                <Link 
                  href={activeSlide.link}
                  className="group/title block relative z-30 cursor-pointer pointer-events-auto"
                >
                  <h1 
                    key={`title-${activeSlide.id}`}
                    className="font-serif text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] font-semibold text-[#f5efe2] leading-[1.2] tracking-tight drop-shadow-md mb-2 sm:mb-3 group-hover/title:text-[#d4a825] transition-colors line-clamp-3 sm:line-clamp-none"
                  >
                    {activeSlide.title}
                  </h1>
                </Link>

                {/* Subtitle */}
                <p 
                  key={`sub-${activeSlide.id}`}
                  className="text-[#f5efe2]/85 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mb-3 sm:mb-5 line-clamp-2 drop-shadow"
                >
                  {activeSlide.subtitle}
                </p>

                {/* Footer CTA Button & Indicators Row */}
                <div className="relative z-30 flex items-center justify-between gap-3 pt-3 border-t border-[#f5efe2]/20">
                  <Link
                    href={activeSlide.link}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#3a8c7e] text-[#f5efe2] hover:bg-[#1f5c54] text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer pointer-events-auto group/btn"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform text-[#f5efe2]" />
                  </Link>

                  {/* Slide Indicators */}
                  <div className="flex items-center gap-1.5">
                    {featuredSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          setCurrent(idx)
                        }}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === current 
                            ? "w-6 bg-[#3a8c7e]" 
                            : "w-1.5 bg-[#f5efe2]/40 hover:bg-[#f5efe2]/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: "FIELD STORIES" Side Stack (Desktop Only) */}
          {/* ========================================================= */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col">
            
            {/* Section Heading */}
            <div className="flex items-center justify-between mb-4 px-1">
              <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#3a8c7e] uppercase">
                FIELD STORIES
              </h2>
              <Link 
                href="/blog" 
                className="text-xs font-semibold text-[#7a5232] hover:text-[#3a8c7e] hover:underline transition-colors"
              >
                View All →
              </Link>
            </div>

            {/* Vertical Stack of Clean Warm Cards */}
            <div className="flex flex-col gap-3.5">
              {sideArticles.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="hover-lift group bg-[#fdfbf7] hover:bg-[#f5efe2] rounded-2xl p-3 sm:p-3.5 shadow-sm hover:shadow-md border border-[#dccdb2] hover:border-[#3a8c7e]/60 transition-all duration-300 flex items-center gap-3.5 sm:gap-4"
                  >
                    {/* Square Thumbnail */}
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-[#dccdb2]/60 bg-[#ebe2d1]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Card Text Content */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      {/* Category Badge */}
                      <div className="mb-1 flex items-center">
                        <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-md border ${item.tagColor} tracking-wider uppercase`}>
                          {item.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xs sm:text-sm font-semibold text-[#3e2410] leading-snug line-clamp-2 group-hover:text-[#3a8c7e] transition-colors">
                        {item.title}
                      </h3>

                      {/* Date & Read Time */}
                      <div className="mt-1 flex items-center gap-2 text-[11px] text-[#7a5232] font-medium">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} className="text-[#c4b49a]" />
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