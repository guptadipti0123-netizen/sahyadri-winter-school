"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Users, 
  Compass,
  ArrowUpRight
} from "lucide-react"
import { Oswald, Lora, Open_Sans } from "next/font/google"

const oswald = Oswald({ 
  subsets: ["latin"],
  weight: ["500", "600", "700"], 
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const openSans = Open_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"], 
  display: "swap",
})

// Original Sahyadri high-res photos & camp editions
const heroSlides = [
  {
    id: "real-bharat",
    tag: "Sahyadri Rural Connect",
    badge: "Residential Fellowship",
    titlePrefix: "Understanding",
    titleHighlight: "Real Bharat",
    subtitle: "A unique opportunity for budding social leaders to have ground level experience and engage in interactive workshops with social changemakers.",
    image: "/sahyadri-bg-hero6.jpeg",
    location: "Western Ghats, Maharashtra",
    duration: "5-Day Fellowship",
    primaryCta: {
      text: "Explore Program",
      href: "/about",
    },
    secondaryCta: {
      text: "Upcoming Camp",
      href: "/register",
    },
  },
  {
    id: "summer-school-2026",
    tag: "Upcoming Edition • May 2026",
    badge: "Registrations Open",
    titlePrefix: "Summer School",
    titleHighlight: "Jawhar 2026",
    subtitle: "Experience tribal self-governance under PESA, sacred forest groves, and ancient Warli indigenous art in the misty plateaus of Palghar.",
    image: "/jawahar-village-tribal-community.jpg",
    location: "Jawhar, Palghar",
    duration: "May 2026",
    primaryCta: {
      text: "Register for Camp",
      href: "/register",
    },
    secondaryCta: {
      text: "View Curriculum",
      href: "/summer-school",
    },
  },
  {
    id: "winter-school-karjat",
    tag: "Previous Edition Highlights",
    badge: "Winter School 2025",
    titlePrefix: "Grassroots",
    titleHighlight: "Field Immersion",
    subtitle: "Students from IIT Bombay, TISS, IIM Bangalore, and ILS explored agrarian economy, FPOs, and renewable solar energy in Kothimbe, Karjat.",
    image: "/sahyadri-bg-hero5.jpeg",
    location: "Kothimbe, Karjat",
    duration: "Dec 2025",
    primaryCta: {
      text: "Read Camp Diaries",
      href: "/camp-2",
    },
    secondaryCta: {
      text: "View Gallery",
      href: "/blog",
    },
  },
  {
    id: "tribal-ecology",
    tag: "Living Heritage & Ecology",
    badge: "Sustainable Futures",
    titlePrefix: "Ecology &",
    titleHighlight: "Tribal Wisdom",
    subtitle: "Walk through dense forest trails with tribal elders, discover ethnobotany, and learn indigenous community conservation practices.",
    image: "/sahyadri-bg-hero4.jpeg",
    location: "Sahyadri Mountains",
    duration: "Field Research",
    primaryCta: {
      text: "Explore Ecology",
      href: "/blog/sustainable-livelihoods-and-tribal-wisdom",
    },
    secondaryCta: {
      text: "About Us",
      href: "/about",
    },
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  const slideCount = heroSlides.length

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide()
      if (e.key === "ArrowRight") nextSlide()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  const activeSlide = heroSlides[current]

  return (
    <section 
      className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#081c15]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* --- BACKGROUND SLIDER LAYER (Real Sahyadri Photos) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroSlides.map((slide, index) => {
          const isActive = index === current
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              {/* High-res natural background photo with slow parallax zoom */}
              <div 
                className={`relative w-full h-full transition-transform duration-[8000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.titleHighlight}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                />
              </div>

              {/* Natural Dark & Evergreen Cinematic Gradient Overlays for High Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30 md:from-black/90 md:via-black/55 md:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              <div className="absolute inset-0 bg-[#081c15]/30 mix-blend-multiply" />
            </div>
          )
        })}
      </div>

      {/* --- MAIN HERO CONTENT (Side Content Layout) --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-16 md:py-32 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        
        {/* LEFT COLUMN: Main Title, Badge & Text Content */}
        <div className="max-w-2xl text-left">
          
          {/* Top Pill Category Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white shadow-lg mb-6 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-[#ffb703] animate-pulse" />
            <span className={`${openSans.className} text-xs md:text-sm font-semibold tracking-wide uppercase`}>
              {activeSlide.tag}
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/60" />
            <span className="hidden sm:inline-block text-[11px] text-white/80 font-medium">
              {activeSlide.badge}
            </span>
          </div>

          {/* Large Main Heading with Vibrant Gradient Highlight */}
          <h1 
            key={`title-${activeSlide.id}`}
            className={`${oswald.className} text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-white uppercase leading-[1.08] tracking-wide drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)] mb-5 animate-fadeIn`}
          >
            {activeSlide.titlePrefix} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa726] via-[#d8f3dc] to-[#52b788] drop-shadow-sm">
              {activeSlide.titleHighlight}
            </span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p 
            key={`sub-${activeSlide.id}`}
            className={`${openSans.className} text-sm sm:text-base md:text-lg text-gray-200/90 font-light leading-relaxed max-w-xl mb-8 drop-shadow-md animate-fadeIn`}
            style={{ animationDelay: "100ms" }}
          >
            {activeSlide.subtitle}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Action Button */}
            <Link 
              href={activeSlide.primaryCta.href}
              className="group flex items-center gap-2.5 px-6 md:px-8 py-3 md:py-3.5 bg-white text-[#081c15] rounded-full shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:bg-[#d8f3dc] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span className={`text-sm md:text-base font-bold uppercase tracking-wider ${oswald.className}`}>
                {activeSlide.primaryCta.text}
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary Action Button */}
            <Link 
              href={activeSlide.secondaryCta.href}
              className="group flex items-center gap-2 px-5 md:px-7 py-3 md:py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full border border-white/25 hover:border-white/50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className={`text-sm md:text-base font-semibold tracking-wide ${openSans.className}`}>
                {activeSlide.secondaryCta.text}
              </span>
              <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Quick Info Tags Strip */}
          <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-gray-300">
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-[#52b788]" />
              <span>{activeSlide.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-[#ffa726]" />
              <span>{activeSlide.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-[#95d5b2]" />
              <span>10+ Premier Institutes</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Interactive Slide Preview Cards & Navigation */}
        <div className="w-full lg:max-w-md flex flex-col items-start lg:items-end gap-4">
          
          {/* Active Card Preview Box */}
          <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 shadow-2xl text-white">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d8f3dc] flex items-center gap-1.5">
                <Compass size={14} /> Featured Edition
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/15 border border-white/20">
                0{current + 1} / 0{slideCount}
              </span>
            </div>

            {/* Mini Thumbnails Slider */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrent(idx)}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    idx === current 
                      ? "border-[#52b788] ring-2 ring-[#52b788]/50 scale-105" 
                      : "border-transparent opacity-60 hover:opacity-100 hover:border-white/40"
                  }`}
                  title={slide.titleHighlight}
                >
                  <Image
                    src={slide.image}
                    alt={slide.titleHighlight}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Quick Caption */}
            <div className="flex items-center justify-between pt-2 border-t border-white/15 text-xs text-gray-200">
              <span className="font-semibold truncate mr-2">
                {activeSlide.titleHighlight} ({activeSlide.duration})
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                {/* Prev button */}
                <button 
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 active:scale-95 flex items-center justify-center transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                {/* Next button */}
                <button 
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 active:scale-95 flex items-center justify-center transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* Slide Progress Line Indicator */}
          <div className="w-full flex items-center gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === current 
                    ? "flex-1 bg-[#52b788]" 
                    : "w-4 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Global Animation Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

    </section>
  )
}