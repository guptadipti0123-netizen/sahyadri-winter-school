"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, User } from "lucide-react"

export default function SpeakersSection() {
  const speakers = [
    {
      name: "V Giriraj",
      title: "IAS Officer (Retired)",
      role: "Former Additional Chief Secretary of Maharashtra & Chairman, 5th State Finance Commission",
      image: "/Giriraj.png",
      tag: "GOVERNANCE & POLICY"
    },
    {
      name: "Surabhi Gajbhiye",
      title: "Program Director",
      role: "SAAD NGO, Rural Development & Child Safety Specialist",
      image: "/Surabhi Gajbhiye.png",
      tag: "COMMUNITY RESILIENCE"
    },
    {
      name: "Kiran Limaye",
      title: "Assistant Professor",
      role: "Gokhale Institute of Politics and Economics, Pune & Founder SAJAG",
      image: "/Kiran Limaye.png",
      tag: "ECONOMICS & EDUCATION"
    },
    {
      name: "Varsha Parchure",
      title: "Program Implementation Lead",
      role: "CEQUE, Tribal Education & Women's Empowerment (Palghar)",
      image: "/Varsha Parchure.png",
      tag: "TRIBAL EDUCATION"
    },
    {
      name: "Virendra Champanerkar",
      title: "CEO",
      role: "Pragati Pratishthan, Tribal Empowerment & Clean Tech",
      image: "/Virendra Champanerkar.png",
      tag: "TRIBAL LIVELIHOODS"
    },
    {
      name: "Kedar Joshi",
      title: "Industry Expert & Social Mentor",
      role: "Development Sector & Group Rural Activities (IIT Bombay)",
      image: "/Kedar Joshi.png",
      tag: "GRASSROOTS TECH"
    }
  ]

  const [itemsPerView, setItemsPerView] = useState(4)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const updateItems = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 1024) setItemsPerView(2)
        else setItemsPerView(4)
      }
    }
    updateItems()
    window.addEventListener("resize", updateItems)
    return () => window.removeEventListener("resize", updateItems)
  }, [])

  const maxIndex = Math.max(0, speakers.length - itemsPerView)

  // Auto-scroll automation right-to-left every 3 seconds
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(timer)
  }, [isPaused, maxIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e) => {
    setIsPaused(true)
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) {
      setTimeout(() => setIsPaused(false), 2500)
      return
    }
    const distance = touchStartX.current - touchEndX.current
    if (distance > 30) handleNext()
    else if (distance < -30) handlePrev()
    touchStartX.current = 0
    touchEndX.current = 0
    setTimeout(() => setIsPaused(false), 2500)
  }

  return (
    <section 
      className="py-12 sm:py-20 px-3 sm:px-6 md:px-8 bg-[#fcfbf7] border-t border-[#ebdcc6]/60 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= 1. SECTION HEADER (Clean Institutional Typography) ================= */}
        <div className="text-center mb-8 sm:mb-14 space-y-2">
          <h2 className="font-sans font-extrabold text-lg xs:text-xl sm:text-3xl md:text-4xl text-[#1c1917] tracking-wider uppercase">
            VOICES OF CHANGE: <span className="font-serif italic font-normal text-[#2d6a4f] capitalize">Faculty &amp; Mentors</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base font-normal max-w-2xl mx-auto leading-relaxed px-2">
            Learn from distinguished professionals with decades of experience in governance, social development, and education.
          </p>
        </div>

        {/* ================= 2. CAROUSEL WRAPPER WITH AUTOMATED SCROLL ================= */}
        <div 
          className="relative px-0.5 sm:px-10"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Faculty"
            className="absolute left-0 sm:left-1 top-[35%] -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-md text-gray-700 hover:text-black hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer hidden sm:flex"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Faculty"
            className="absolute right-0 sm:right-1 top-[35%] -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 shadow-md text-gray-700 hover:text-black hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer hidden sm:flex"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards Slider / Grid View */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-3 sm:gap-4 md:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="w-[calc(50%-6px)] sm:w-[calc(50%-8px)] lg:w-[calc(25%-18px)] flex-shrink-0 flex flex-col group cursor-pointer"
                >
                  
                  {/* --- TOP: ARTISTIC HERITAGE PARCHMENT CARD --- */}
                  <div className="relative w-full aspect-[4/3.8] rounded-xs bg-[#f6f2e9] border border-[#e5dec9] overflow-hidden shadow-xs group-hover:shadow-md transition-all duration-300 flex items-end justify-center select-none">
                    
                    {/* Subtle Ruled Lines Texture */}
                    <div 
                      className="absolute inset-0 pointer-events-none opacity-40"
                      style={{
                        backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 18px, #e2d7c3 19px)"
                      }}
                    />

                    {/* Left Vertical Accent Stitch Line */}
                    <div className="absolute top-0 bottom-0 left-2 sm:left-3 w-[1.5px] sm:w-[2px] bg-[#cbb898] opacity-60 pointer-events-none" />

                    {/* Left Mandala Watermark Seal */}
                    <div className="absolute top-6 sm:top-10 left-1 sm:left-1.5 w-4 h-4 sm:w-6 sm:h-6 rounded-full border border-[#cbb898] flex items-center justify-center opacity-40 pointer-events-none">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-[#cbb898]" />
                    </div>

                    {/* Faint Sanskrit Calligraphy Watermark */}
                    <div className="absolute top-2 sm:top-3 left-4 sm:left-7 right-2 sm:right-3 text-left pointer-events-none select-none opacity-30">
                      <p className="font-serif text-[8px] sm:text-[9.5px] leading-[11px] sm:leading-[13px] text-[#4a3f35]">
                        आचार्यात् पादमादत्ते<br />
                        पादं शिष्यः स्वमेधया ।<br />
                        पादं सब्रह्मचारिभ्यः<br />
                        पादं कालक्रमेण च ॥
                      </p>
                      <p className="text-[6.5px] sm:text-[7.5px] leading-[9px] sm:leading-[10px] text-[#5c4e43] mt-1 sm:mt-1.5 font-serif italic hidden xs:block">
                        From the teacher, one learns a quarter.<br />
                        A quarter from one&apos;s own study.<br />
                        A quarter from peers and companions.<br />
                        A quarter from time and experience.
                      </p>
                    </div>

                    {/* Portrait Photo of Faculty (Compact & Distinctly Sized) */}
                    <div className="relative w-[48%] sm:w-[45%] h-[58%] sm:h-[55%] z-10 flex items-end justify-center pb-0">
                      {speaker.image ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            fill
                            className="object-contain object-bottom filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 30vw, (max-width: 1024px) 25vw, 15vw"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/60 flex items-center justify-center text-gray-500 mb-2 sm:mb-3 border border-gray-300">
                          <User size={18} />
                        </div>
                      )}
                    </div>

                  </div>

                  {/* --- BOTTOM: CLEAN EDITORIAL TYPOGRAPHY --- */}
                  <div className="text-left pt-2.5 sm:pt-3.5 pb-1 space-y-0.5 sm:space-y-1">
                    <h3 className="font-sans font-bold text-xs xs:text-sm sm:text-base md:text-[17px] text-[#1c1917] leading-tight group-hover:text-[#2d6a4f] transition-colors">
                      {speaker.name}
                    </h3>
                    
                    <p className="text-[11px] sm:text-xs md:text-[13px] text-gray-700 font-medium leading-snug">
                      {speaker.title}
                    </p>

                    <p className="text-[10px] sm:text-[11px] md:text-xs text-gray-500 font-normal leading-snug line-clamp-2">
                      {speaker.role}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* ================= 3. PAGINATION DOTS ================= */}
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-6 sm:mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "bg-[#2d6a4f] w-5 sm:w-6" : "w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}