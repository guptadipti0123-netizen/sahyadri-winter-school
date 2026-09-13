"use client"
import React from "react"
import Image from "next/image"

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

  return (
    <section className="py-10 sm:py-16 md:py-20 px-3 sm:px-6 md:px-8 bg-[#f5efe2] border-b border-[#dccdb2]/70 relative overflow-hidden">
      
      {/* Subtle Warm Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#3a8c7e]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-6 sm:mb-12 space-y-2">
          <div className="inline-block px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#3a8c7e]/10 border border-[#3a8c7e]/20 text-[10px] sm:text-xs font-bold tracking-widest text-[#1f5c54] uppercase">
            ADVISORY &amp; GUIDANCE
          </div>
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-[#3e2410] tracking-tight">
            Our <span className="italic text-[#3a8c7e] font-serif">Mentors</span> &amp; Advisory
          </h2>
          <p className="text-[#7a5232] text-xs sm:text-sm md:text-base font-normal max-w-xl mx-auto leading-relaxed px-2">
            Distinguished academicians, practitioners, and grassroots leaders guiding our fellows.
          </p>
        </div>

        {/* ================= 2-COLUMNS ON MOBILE, 4-COLUMNS ON DESKTOP ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 items-stretch">
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              className="group bg-[#fdfbf7] rounded-xl sm:rounded-2xl border border-[#dccdb2] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between text-left relative"
            >
              {/* ================= PORTRAIT MEDIA ================= */}
              <div className="relative w-full h-32 xs:h-36 sm:h-44 md:h-52 overflow-hidden flex items-end justify-center select-none pt-2">
                
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
                    <div className="absolute inset-x-0 bottom-0 h-8 sm:h-10 bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7]/50 to-transparent pointer-events-none" />
                  </div>
                ) : (
                  /* Dignified Academic Monogram */
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-4">
                    {/* Soft radial backdrop shade */}
                    <div className="absolute w-16 sm:w-28 h-16 sm:h-28 bg-[#3a8c7e]/8 rounded-full blur-lg pointer-events-none" />
                    
                    {/* Clean elegant monogram with subtle underline */}
                    <div className="relative z-10 flex flex-col items-center">
                      <span className="font-serif italic font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-[#1f5c54] tracking-widest drop-shadow-xs group-hover:scale-105 transition-transform duration-300">
                        {mentor.initials}
                      </span>
                      <div className="w-8 sm:w-10 h-[1.5px] sm:h-[2px] bg-gradient-to-r from-transparent via-[#c8880a] to-transparent mt-1.5 opacity-80" />
                      <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-widest text-[#7a5232] mt-1.5 text-center">
                        Faculty Advisor
                      </span>
                    </div>

                    {/* Bottom fade into card background */}
                    <div className="absolute inset-x-0 bottom-0 h-6 sm:h-8 bg-gradient-to-t from-[#fdfbf7] to-transparent pointer-events-none" />
                  </div>
                )}
              </div>

              {/* Bottom: Typography Hierarchy (Name, Designation, Affiliation) */}
              <div className="p-2.5 sm:p-4 md:p-5 pt-1 space-y-1.5 flex-1 flex flex-col justify-between relative z-10">
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="font-serif font-bold text-xs xs:text-sm sm:text-base md:text-[17px] text-[#3e2410] leading-snug group-hover:text-[#1f5c54] transition-colors">
                    {mentor.name}
                  </h3>
                  <p className="text-[10px] xs:text-[11px] sm:text-xs md:text-[13px] font-medium text-[#1f5c54] leading-tight line-clamp-2">
                    {mentor.role}
                  </p>
                </div>

                <div className="pt-1.5 border-t border-[#ebe2d1] flex items-center justify-between text-[#7a5232]">
                  <span className="font-normal text-[9.5px] xs:text-[10.5px] sm:text-xs text-[#7a5232] truncate">
                    {mentor.affiliation}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8880a] shrink-0 ml-1" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
