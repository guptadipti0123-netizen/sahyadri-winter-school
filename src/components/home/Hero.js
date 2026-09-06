"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Leaf, 
  Compass, 
  Sprout, 
  Palette, 
  Bell, 
  Hash, 
  Sparkles,
  Calendar,
  MapPin,
  ExternalLink
} from "lucide-react"
import { Lora, Inter } from "next/font/google"

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

const heroSlides = [
  {
    id: "digital-india",
    tag: "Environment & Digital Society",
    tagIcon: Leaf,
    tagBg: "bg-[#fbeece]/95 text-[#633f12] border-[#ebd4ab]",
    title: "Digitalizing India: A Leap towards a Digitally Empowered Society",
    description: "Bridging the gap between technological progress and rural communities through grassroots digital inclusion, local empowerment, and sustainable infrastructure.",
    image: "/hero/digital-india.jpg",
    url: "s://sahyadriconnect.org/article/digitalizing-india",
    primaryCta: {
      text: "Read Article",
      href: "/blog/a-day-at-sahyadri-rural-connect",
    },
    secondaryCta: {
      text: "Explore Initiatives",
      href: "/about",
    },
    badges: [
      {
        id: "b1",
        icon: Hash,
        label: "DigitalDivide",
        posClass: "top-10 right-10 sm:right-16 md:right-24",
        colorClass: "bg-[#0b5394] text-white shadow-[#0b5394]/40",
        size: "w-11 h-11 md:w-14 md:h-14",
        iconSize: 22,
        delay: "0s",
      },
      {
        id: "b2",
        icon: Bell,
        label: "Grassroots Tech",
        posClass: "top-1/3 left-10 sm:left-16 md:left-24",
        colorClass: "bg-[#023e8a] text-white shadow-[#023e8a]/40",
        size: "w-10 h-10 md:w-13 md:h-13",
        iconSize: 20,
        delay: "0.4s",
      },
      {
        id: "b3",
        icon: Hash,
        label: "EmpoweredSociety",
        posClass: "top-[48%] left-16 sm:left-24 md:left-32",
        colorClass: "bg-[#0f4c81] text-white shadow-[#0f4c81]/40",
        size: "w-11 h-11 md:w-14 md:h-14",
        iconSize: 22,
        delay: "0.8s",
      },
    ],
  },
  {
    id: "real-bharat",
    tag: "Grassroots Leadership",
    tagIcon: Compass,
    tagBg: "bg-[#fdedd8]/95 text-[#7c2d12] border-[#fdba74]/60",
    title: "Understanding Real Bharat: Ground-Level Leadership & Social Impact",
    description: "A transformative 5-day residential fellowship taking young leaders from classrooms to rural grassroots communities to engage with social changemakers.",
    image: "/hero/rural-bharat.jpg",
    url: "s://sahyadriconnect.org/fellowship/understanding-real-bharat",
    primaryCta: {
      text: "Discover Fellowship",
      href: "/about",
    },
    secondaryCta: {
      text: "View Past Camps",
      href: "/camp-2",
    },
    badges: [
      {
        id: "b4",
        icon: Hash,
        label: "RealBharat",
        posClass: "top-10 right-12 sm:right-20 md:right-28",
        colorClass: "bg-[#1b4332] text-white shadow-[#1b4332]/40",
        size: "w-11 h-11 md:w-14 md:h-14",
        iconSize: 22,
        delay: "0.2s",
      },
      {
        id: "b5",
        icon: Compass,
        label: "Field Immersion",
        posClass: "top-[32%] left-12 sm:left-20 md:left-28",
        colorClass: "bg-[#2d6a4f] text-white shadow-[#2d6a4f]/40",
        size: "w-10 h-10 md:w-13 md:h-13",
        iconSize: 20,
        delay: "0.6s",
      },
      {
        id: "b6",
        icon: Sparkles,
        label: "SocialChange",
        posClass: "top-[47%] left-16 sm:left-28 md:left-36",
        colorClass: "bg-[#40916c] text-white shadow-[#40916c]/40",
        size: "w-11 h-11 md:w-14 md:h-14",
        iconSize: 22,
        delay: "1s",
      },
    ],
  },
  {
    id: "sustainable-ecology",
    tag: "Ecology & Innovation",
    tagIcon: Sprout,
    tagBg: "bg-[#e8f5e9]/95 text-[#1b5e20] border-[#a5d6a7]",
    title: "Sustainable Futures: Clean Energy & Indigenous Forest Wisdom",
    description: "Hands-on immersion with decentralized solar microgrids, regenerative organic farming, and ethnobotany guided by tribal elders in Maharashtra.",
    image: "/hero/sustainable-ecology.jpg",
    url: "s://sahyadriconnect.org/article/sustainable-futures",
    primaryCta: {
      text: "Read Field Notes",
      href: "/blog/sustainable-livelihoods-and-tribal-wisdom",
    },
    secondaryCta: {
      text: "Winter Camp Diaries",
      href: "/camp-2",
    },
    badges: [
      {
        id: "b7",
        icon: Hash,
        label: "CleanEnergy",
        posClass: "top-10 right-10 sm:right-16 md:right-24",
        colorClass: "bg-[#1565c0] text-white shadow-[#1565c0]/40",
        size: "w-11 h-11 md:w-14 md:h-14",
        iconSize: 22,
        delay: "0s",
      },
      {
        id: "b8",
        icon: Sprout,
        label: "OrganicSoil",
        posClass: "top-1/3 left-10 sm:left-16 md:left-24",
        colorClass: "bg-[#2e7d32] text-white shadow-[#2e7d32]/40",
        size: "w-10 h-10 md:w-13 md:h-13",
        iconSize: 20,
        delay: "0.5s",
      },
      {
        id: "b9",
        icon: Hash,
        label: "ForestWisdom",
        posClass: "top-[48%] left-16 sm:left-24 md:left-32",
        colorClass: "bg-[#00695c] text-white shadow-[#00695c]/40",
        size: "w-11 h-11 md:w-14 md:h-14",
        iconSize: 22,
        delay: "0.9s",
      },
    ],
  },
  {
    id: "warli-summer-school",
    tag: "Upcoming • Summer School 2026",
    tagIcon: Palette,
    tagBg: "bg-[#fef3c7]/95 text-[#92400e] border-[#fde68a]",
    title: "Cradle of Warli Art: Summer School 2026 in Jawhar",
    description: "Registrations are open for the May 2026 cohort. Experience indigenous art, sacred groves, and pioneer models of tribal self-governance under PESA.",
    image: "/jawahar-village-tribal-community.jpg",
    url: "s://sahyadriconnect.org/summer-school-jawhar",
    primaryCta: {
      text: "Register for Camp",
      href: "/register",
    },
    secondaryCta: {
      text: "View Curriculum",
      href: "/summer-school",
    },
    badges: [
      {
        id: "b10",
        icon: Hash,
        label: "Jawhar2026",
        posClass: "top-10 right-10 sm:right-16 md:right-24",
        colorClass: "bg-[#b45309] text-white shadow-[#b45309]/40",
        size: "w-11 h-11 md:w-14 md:h-14",
        iconSize: 22,
        delay: "0.1s",
      },
      {
        id: "b11",
        icon: Calendar,
        label: "May 2026",
        posClass: "top-1/3 left-10 sm:left-16 md:left-24",
        colorClass: "bg-[#78350f] text-white shadow-[#78350f]/40",
        size: "w-10 h-10 md:w-13 md:h-13",
        iconSize: 20,
        delay: "0.5s",
      },
      {
        id: "b12",
        icon: Sparkles,
        label: "WarliTradition",
        posClass: "top-[48%] left-16 sm:left-24 md:left-32",
        colorClass: "bg-[#92400e] text-white shadow-[#92400e]/40",
        size: "w-11 h-11 md:w-14 md:h-14",
        iconSize: 22,
        delay: "0.9s",
      },
    ],
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const timerRef = useRef(null)

  const slideCount = heroSlides.length

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slideCount)
  }, [slideCount])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount)
  }, [slideCount])

  // Autoplay functionality
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide()
      }, 6500)
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

  // Touch swipe handling
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50
    if (distance > minSwipeDistance) {
      nextSlide()
    } else if (distance < -minSwipeDistance) {
      prevSlide()
    }
  }

  const activeSlide = heroSlides[current]
  const TagIcon = activeSlide.tagIcon

  return (
    <section 
      className="relative w-full bg-[#081c15] pt-16 sm:pt-20 pb-6 md:pb-10 px-3 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient glow matching Sahyadri tones */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sea_green/15 blur-[120px] pointer-events-none rounded-full" />

      {/* --- HERO MAGAZINE CARD CONTAINER --- */}
      <div 
        className="relative w-full max-w-7xl h-[82vh] min-h-[580px] max-h-[820px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/15 flex flex-col justify-between select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* --- BACKGROUND SLIDES LAYER --- */}
        {heroSlides.map((slide, index) => {
          const isActive = index === current
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              {/* Background Image with subtle Ken-Burns zoom on active */}
              <div 
                className={`relative w-full h-full transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                />
              </div>

              {/* Layer 1: Cinematic Duotone & High-Contrast Overlay */}
              <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />

              {/* Layer 2: Deep Dark Gradient Overlay for optimal typography legibility (Screenshot match) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />
              
              {/* Layer 3: Subtle Side Vignette */}
              <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,rgba(0,0,0,0.6)_100%]" />
            </div>
          )
        })}

        {/* --- FLOATING DECORATIVE BADGES (Screenshot exact match) --- */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          {activeSlide.badges.map((badge) => {
            const BadgeIcon = badge.icon
            return (
              <div
                key={badge.id}
                className={`absolute ${badge.posClass} transition-all duration-700 ease-out`}
                style={{
                  animation: `heroFloat 4s ease-in-out infinite`,
                  animationDelay: badge.delay,
                }}
              >
                <div
                  className={`${badge.size} ${badge.colorClass} rounded-full flex items-center justify-center shadow-xl backdrop-blur-md border border-white/25 transform transition-transform duration-300 hover:scale-110 pointer-events-auto cursor-pointer group`}
                  title={badge.label}
                >
                  <BadgeIcon size={badge.iconSize} className="transition-transform duration-300 group-hover:rotate-12" />
                </div>
              </div>
            )
          })}
        </div>

        {/* --- TOP BAR / CATEGORY TAG BADGE --- */}
        <div className="relative z-30 p-5 sm:p-7 md:p-9 flex items-center justify-between">
          {/* Category Capsule Tag (Screenshot exact match) */}
          <div 
            className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-105 ${activeSlide.tagBg}`}
          >
            <TagIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className={`${inter.className} text-xs sm:text-sm font-semibold tracking-wide capitalize`}>
              {activeSlide.tag}
            </span>
          </div>

          {/* Slide Counter indicator */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-xs font-mono">
            <span className="font-bold text-white">0{current + 1}</span>
            <span className="text-white/40">/</span>
            <span className="text-white/60">0{slideCount}</span>
          </div>
        </div>

        {/* --- SIDE NAVIGATION BUTTONS (Screenshot exact match) --- */}
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-5 md:left-7 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/40 hover:bg-black/80 active:bg-black backdrop-blur-md text-white/90 hover:text-white border border-white/25 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl cursor-pointer group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-5 md:right-7 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/40 hover:bg-black/80 active:bg-black backdrop-blur-md text-white/90 hover:text-white border border-white/25 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl cursor-pointer group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>

        {/* --- BOTTOM HERO CONTENT LAYER --- */}
        <div className="relative z-30 px-5 sm:px-8 md:px-12 lg:px-16 pb-6 sm:pb-8 md:pb-10 pt-16 flex flex-col justify-end">
          
          {/* Main Editorial Serif Heading (Screenshot exact typography match) */}
          <h1 
            key={`title-${activeSlide.id}`}
            className={`${lora.className} text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] font-normal sm:font-medium text-white leading-[1.2] md:leading-[1.15] tracking-[-0.01em] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] max-w-4xl mb-3 sm:mb-4 transition-all duration-500 animate-fadeIn`}
          >
            {activeSlide.title}
          </h1>

          {/* Subtitle / Excerpt */}
          <p 
            key={`desc-${activeSlide.id}`}
            className={`${inter.className} text-gray-200/90 text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-2xl mb-5 sm:mb-6 line-clamp-2 sm:line-clamp-3 drop-shadow-md animate-fadeIn`}
            style={{ animationDelay: "100ms" }}
          >
            {activeSlide.description}
          </p>

          {/* Action CTAs and Bottom Metadata Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1 border-t border-white/15">
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Link
                href={activeSlide.primaryCta.href}
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-[#081c15] font-semibold text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(255,255,255,0.25)] hover:bg-[#d8f3dc] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>{activeSlide.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href={activeSlide.secondaryCta.href}
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-black/40 hover:bg-black/60 text-white font-medium text-xs sm:text-sm tracking-wide border border-white/20 backdrop-blur-md hover:border-white/40 transition-all duration-300"
              >
                <span>{activeSlide.secondaryCta.text}</span>
              </Link>
            </div>

            {/* Bottom Meta Link / URL indicator (Screenshot match: s://www.vritant.org/article/30) */}
            <div className="flex items-center justify-between sm:justify-end gap-4">
              <Link 
                href={activeSlide.primaryCta.href}
                className="inline-flex items-center gap-1.5 text-xs text-gray-300/80 hover:text-white font-mono transition-colors group truncate max-w-[260px] sm:max-w-none"
              >
                <ExternalLink size={12} className="shrink-0 text-sea_green group-hover:text-celadon" />
                <span className="truncate group-hover:underline">{activeSlide.url}</span>
              </Link>

              {/* Slide Navigation Pagination Dots */}
              <div className="flex items-center gap-1.5 shrink-0">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full h-1.5 sm:h-2 ${
                      idx === current 
                        ? "w-6 sm:w-8 bg-white" 
                        : "w-1.5 sm:w-2 bg-white/35 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Embedded keyframe styles for smooth animations */}
      <style jsx global>{`
        @keyframes heroFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  )
}