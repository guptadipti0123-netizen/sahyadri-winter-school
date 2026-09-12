"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function MentorsSection() {
  const mentors = [
    {
      name: "Dr. Omkar Desai",
      role: "Grassroots Tech & Innovation Mentor",
      affiliation: "IIT Bombay",
      image: null,
      initials: "OD",
    },
    {
      name: "Dr. Rakesh Arrawatia",
      role: "Rural Management & Economics Mentor",
      affiliation: "IRMA - SEED",
      image: null,
      initials: "RA",
    },
    {
      name: "Virendra Champanerkar",
      role: "CEO & Tribal Empowerment Mentor",
      affiliation: "Pragati Pratishthan",
      image: "/Virendra Champanerkar.png",
      initials: "VC",
    },
    {
      name: "Chirag Rawat",
      role: "Social Enterprise & Clean Tech Mentor",
      affiliation: "Entrepreneur",
      image: null,
      initials: "CR",
    }
  ]

  const [windowWidth, setWindowWidth] = useState(1200)
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
    }
    return () => {
      if (typeof window !== "undefined") window.removeEventListener("resize", handleResize)
    }
  }, [])

  const itemsPerView = windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 4
  const maxIndex = Math.max(0, mentors.length - itemsPerView)

  // Ensure index stays in bounds on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [maxIndex, currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
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
    if (distance > 45 && currentIndex < maxIndex) {
      handleNext()
    } else if (distance < -45 && currentIndex > 0) {
      handlePrev()
    }
    touchStartX.current = 0
    touchEndX.current = 0
  }

  // Sliced mentors for current view in carousel mode
  const visibleMentors = itemsPerView === 4 
    ? mentors 
    : mentors.slice(currentIndex, currentIndex + itemsPerView)

  const totalPages = Math.max(1, mentors.length - itemsPerView + 1)

  return (
    <section className="py-12 sm:py-16 md:py-20 px-3.5 sm:px-6 md:px-8 bg-[#f5efe2] border-b border-[#dccdb2]/70 relative overflow-hidden">
      
      {/* Subtle Warm Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#3a8c7e]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-10 sm:mb-14 space-y-2.5">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#3a8c7e]/10 border border-[#3a8c7e]/20 text-[11px] sm:text-xs font-bold tracking-widest text-[#1f5c54] uppercase">
            ADVISORY &amp; GUIDANCE
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-[#3e2410] tracking-tight">
            Our <span className="italic text-[#3a8c7e] font-serif">Mentors</span> &amp; Advisory
          </h2>
          <p className="text-[#7a5232] text-xs sm:text-sm md:text-base font-normal max-w-xl mx-auto leading-relaxed px-2">
            Distinguished academicians, practitioners, and grassroots leaders guiding our fellows.
          </p>
        </div>

        {/* ================= CAROUSEL WRAPPER WITH SIDE ARROWS ================= */}
        <div 
          className="relative px-0 sm:px-6"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Navigation Arrow */}
          {maxIndex > 0 && (
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous Mentors"
              className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fdfbf7] border border-[#dccdb2] shadow-sm text-[#3e2410] hover:text-[#1f5c54] hover:border-[#1f5c54] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed hidden sm:flex"
            >
              <ChevronLeft size={18} />
            </button>
          )}

          {/* Right Navigation Arrow */}
          {maxIndex > 0 && (
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              aria-label="Next Mentors"
              className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fdfbf7] border border-[#dccdb2] shadow-sm text-[#3e2410] hover:text-[#1f5c54] hover:border-[#1f5c54] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed hidden sm:flex"
            >
              <ChevronRight size={18} />
            </button>
          )}

          {/* ================= 4-CARD INSTITUTIONAL PORTRAIT GRID ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            {visibleMentors.map((mentor, idx) => {
              const actualIndex = itemsPerView === 4 ? idx : currentIndex + idx
              return (
                <div
                  key={actualIndex}
                  className="group bg-[#fdfbf7] rounded-2xl border border-[#dccdb2] shadow-xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between text-left relative"
                >
                  
                  {/* Top Decorative Gold/Teal Accent Bar */}
                  <div className="h-1 bg-gradient-to-r from-[#c8880a] via-[#d4a825] to-[#1f5c54] w-full" />

                  {/* Top Row: Index Marker */}
                  <div className="px-4 sm:px-5 pt-3.5 sm:pt-4 pb-0 flex items-center justify-between z-10 relative">
                    <span className="font-serif font-bold text-xs sm:text-sm text-[#c8880a] tracking-wider">
                      {String(actualIndex + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* ================= PORTRAIT MEDIA (NO INNER BOX OR CIRCLE, SEAMLESS SOFT SHADE) ================= */}
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden flex items-end justify-center select-none pt-2">
                    
                    {/* Soft Ambient Backdrop Shade */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#ebe2d1]/20 via-transparent to-transparent pointer-events-none" />

                    {mentor.image ? (
                      <div className="relative w-full h-full flex items-end justify-center">
                        <Image
                          src={mentor.image}
                          alt={mentor.name}
                          fill
                          className="object-contain object-bottom filter contrast-[1.04] group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Soft gradient shade dissolving smoothly into card background */}
                        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7]/50 to-transparent pointer-events-none" />
                      </div>
                    ) : (
                      /* Dignified Academic Monogram with soft ambient shade, NO box or circle */
                      <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                        {/* Soft radial backdrop shade */}
                        <div className="absolute w-28 h-28 bg-[#3a8c7e]/8 rounded-full blur-xl pointer-events-none" />
                        
                        {/* Clean elegant monogram with subtle underline */}
                        <div className="relative z-10 flex flex-col items-center">
                          <span className="font-serif italic font-bold text-4xl sm:text-5xl text-[#1f5c54] tracking-widest drop-shadow-xs group-hover:scale-105 transition-transform duration-300">
                            {mentor.initials}
                          </span>
                          <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-[#c8880a] to-transparent mt-2 opacity-80" />
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#7a5232] mt-2">
                            Faculty Advisor
                          </span>
                        </div>

                        {/* Bottom fade into card background */}
                        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#fdfbf7] to-transparent pointer-events-none" />
                      </div>
                    )}
                  </div>

                  {/* Bottom: Typography Hierarchy (Name, Designation, Affiliation) */}
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 space-y-2 flex-1 flex flex-col justify-between relative z-10">
                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-base sm:text-lg md:text-[17px] text-[#3e2410] leading-snug group-hover:text-[#1f5c54] transition-colors">
                        {mentor.name}
                      </h3>
                      <p className="text-xs sm:text-[13px] font-medium text-[#1f5c54] leading-snug">
                        {mentor.role}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#ebe2d1] flex items-center justify-between text-xs text-[#7a5232]">
                      <span className="font-normal text-[11.5px] sm:text-xs text-[#7a5232]">
                        {mentor.affiliation}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8880a] shrink-0" />
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

          {/* ================= PAGINATION DOTS (Active when maxIndex > 0) ================= */}
          {maxIndex > 0 && (
            <div className="flex justify-center items-center gap-2 mt-8 sm:mt-10">
              {Array.from({ length: totalPages }).map((_, pageIdx) => (
                <button
                  key={pageIdx}
                  onClick={() => setCurrentIndex(pageIdx)}
                  aria-label={`Go to mentor slide ${pageIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === pageIdx 
                      ? "w-6 bg-[#1f5c54]" 
                      : "w-2 bg-[#dccdb2] hover:bg-[#c4b49a]"
                  }`}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  )
}
