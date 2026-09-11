"use client"
import React, { useState, useRef, useEffect } from "react"
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
      circleBg: "bg-[#2d6a4f]",
      barColor: "bg-[#b84a2b]"
    },
    {
      name: "Dr. Rakesh Arrawatia",
      role: "Rural Management & Economics Mentor",
      affiliation: "IRMA - SEED",
      image: null,
      initials: "RA",
      circleBg: "bg-[#245b44]",
      barColor: "bg-[#b84a2b]"
    },
    {
      name: "Virendra Champanerkar",
      role: "CEO & Tribal Empowerment Mentor",
      affiliation: "Pragati Pratishthan",
      image: "/Virendra Champanerkar.png",
      initials: "VC",
      circleBg: "bg-[#1b4332]",
      barColor: "bg-[#b84a2b]"
    },
    {
      name: "Chirag Rawat",
      role: "Social Enterprise & Clean Tech Mentor",
      affiliation: "Entrepreneur",
      image: null,
      initials: "CR",
      circleBg: "bg-[#31694f]",
      barColor: "bg-[#b84a2b]"
    }
  ]

  const [activePage, setActivePage] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handlePrev = () => {
    setActivePage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setActivePage((prev) => (prev < 1 ? prev + 1 : 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) handleNext();
    else if (distance < -40) handlePrev();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="py-12 sm:py-16 px-3 sm:px-6 md:px-8 bg-gradient-to-b from-[#f8f6f0]/60 via-white to-[#f8f6f0]/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-8 sm:mb-12 space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b4332] tracking-tight">
            Our <span className="italic text-[#2d6a4f]">Mentors</span> &amp; Advisory
          </h2>
          <p className="text-[#2d6a4f]/80 text-xs sm:text-sm md:text-base font-medium max-w-xl mx-auto">
            Distinguished academicians, practitioners, and grassroots leaders guiding our fellows.
          </p>
        </div>

        {/* CAROUSEL WRAPPER WITH SIDE ARROWS */}
        <div 
          className="relative px-2 sm:px-8"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Mentors"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-gray-200 shadow-md text-gray-700 hover:text-black hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hidden sm:flex"
            disabled={activePage === 0}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Mentors"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-gray-200 shadow-md text-gray-700 hover:text-black hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hidden sm:flex"
            disabled={activePage === 1}
          >
            <ChevronRight size={18} />
          </button>

          {/* MENTORS 4-COL GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-start">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="group flex flex-col transition-all duration-300"
              >
                {/* 1. ARTISTIC CIRCULAR PORTRAIT CONTAINER */}
                <div className="relative w-36 h-36 xs:w-40 xs:h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 mx-auto mb-3 sm:mb-4 flex items-center justify-center select-none">
                  
                  {/* Top-Right 2 Vertical Terracotta Accent Stripes */}
                  <div className="absolute top-1 sm:top-2 right-4 sm:right-6 md:right-7 flex gap-1.5 z-0 pointer-events-none">
                    <span className="w-1.5 sm:w-2 h-10 sm:h-14 bg-[#b84a2b] rounded-xs" />
                    <span className="w-1.5 sm:w-2 h-14 sm:h-18 bg-[#b84a2b] rounded-xs" />
                  </div>

                  {/* Circular Graphic Disc */}
                  <div className={`relative w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full ${mentor.circleBg} overflow-hidden flex items-end justify-center shadow-lg border-2 border-white group-hover:scale-105 transition-transform duration-500 z-10`}>
                    
                    {/* Left 3 Horizontal White Stripes */}
                    <div className="absolute left-2 sm:left-2.5 top-9 sm:top-11 flex flex-col gap-1.5 z-10 pointer-events-none">
                      <span className="w-7 sm:w-8 md:w-9 h-[2px] sm:h-[2.5px] bg-white/90 rounded-full" />
                      <span className="w-5 sm:w-6 md:w-7 h-[2px] sm:h-[2.5px] bg-white/90 rounded-full" />
                      <span className="w-4 sm:w-5 md:w-6 h-[2px] sm:h-[2.5px] bg-white/90 rounded-full" />
                    </div>

                    {/* Portrait Image or Stylized Monogram */}
                    {mentor.image ? (
                      <div className="relative w-full h-[94%] z-20">
                        <Image
                          src={mentor.image}
                          alt={mentor.name}
                          fill
                          className="object-cover object-top filter contrast-[1.05]"
                        />
                      </div>
                    ) : (
                      <div className="relative w-full h-full z-20 flex flex-col items-center justify-center bg-gradient-to-t from-black/25 via-transparent to-transparent">
                        {/* Elegant Initial Monogram */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center border border-white/30 shadow-inner">
                          <span className="font-serif font-bold text-xl sm:text-2xl text-white tracking-widest drop-shadow-sm">
                            {mentor.initials}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>

                {/* 2. TYPOGRAPHY CONTENT BELOW PORTRAIT */}
                <div className="text-left px-1 sm:px-2 space-y-0.5 sm:space-y-1">
                  <h3 className="font-serif font-bold text-sm sm:text-base md:text-[17px] text-[#1c1917] leading-tight group-hover:text-[#2d6a4f] transition-colors">
                    {mentor.name}
                  </h3>
                  
                  <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-snug">
                    {mentor.role}
                  </p>

                  <p className="text-[11px] sm:text-xs text-gray-500 font-normal leading-snug">
                    {mentor.affiliation}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* DOTS PAGINATION */}
          <div className="flex justify-center items-center gap-2 mt-8 sm:mt-10">
            <button
              onClick={() => setActivePage(0)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activePage === 0 ? "bg-[#2d6a4f] scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
              aria-label="Page 1"
            />
            <button
              onClick={() => setActivePage(1)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activePage === 1 ? "bg-[#2d6a4f] scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
              aria-label="Page 2"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
