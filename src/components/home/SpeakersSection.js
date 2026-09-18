"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, ArrowRight, User, ChevronLeft, ChevronRight } from "lucide-react"

export default function SpeakersSection() {
  const speakers = [
    {
      id: "v-giriraj",
      name: "V Giriraj",
      title: "IAS Officer (Retired)",
      role: "Former Additional Chief Secretary of Maharashtra & Chairman, 5th State Finance Commission",
      image: "/Giriraj.png",
      tag: "GOVERNANCE & POLICY",
      bio: "With over three decades of distinguished leadership in the Indian Administrative Service, V Giriraj has spearheaded transformative public finance, rural development, and state administrative reforms across Maharashtra."
    },
    {
      id: "surabhi-gajbhiye",
      name: "Surabhi Gajbhiye",
      title: "Program Director",
      role: "SAAD NGO, Rural Development & Child Safety Specialist",
      image: "/Surabhi Gajbhiye.png",
      tag: "COMMUNITY RESILIENCE",
      bio: "Dedicated grassroots innovator and child protection advocate, working closely with tribal and rural communities in Maharashtra to build resilient institutional safeguards and livelihood programs."
    },
    {
      id: "kiran-limaye",
      name: "Kiran Limaye",
      title: "Assistant Professor",
      role: "Gokhale Institute of Politics and Economics, Pune & Founder SAJAG",
      image: "/Kiran Limaye.png",
      tag: "ECONOMICS & EDUCATION",
      bio: "Development economist and academician pioneering participatory research and rural youth mentorship initiatives linking premier economics institutions with grassroots communities."
    },
    {
      id: "varsha-parchure",
      name: "Varsha Parchure",
      title: "Program Implementation Lead",
      role: "CEQUE, Tribal Education & Women's Empowerment (Palghar)",
      image: "/Varsha Parchure.png",
      tag: "TRIBAL EDUCATION",
      bio: "Veteran practitioner working across Palghar district in tribal ashramshalas and women's self-help collectives to advance foundational literacy and community-led education."
    },
    {
      id: "virendra-champanerkar",
      name: "Virendra Champanerkar",
      title: "CEO",
      role: "Pragati Pratishthan, Tribal Empowerment & Clean Tech",
      image: "/Virendra Champanerkar.png",
      tag: "TRIBAL LIVELIHOODS",
      bio: "Grassroots leader pioneering decentralized clean energy, solar water pumps, and vocational empowerment initiatives across tribal hamlets of Jawhar and Palghar."
    },
    {
      id: "kedar-joshi",
      name: "Kedar Joshi",
      title: "Industry Expert & Social Mentor",
      role: "Development Sector & Group Rural Activities (IIT Bombay)",
      image: "/Kedar Joshi.png",
      tag: "GRASSROOTS TECH",
      bio: "Engineering and social innovation mentor bridging premier technological expertise from IIT Bombay with real rural infrastructure and livelihood challenges in the Western Ghats."
    }
  ]

  const [selectedSpeaker, setSelectedSpeaker] = useState(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedSpeaker(null)
      }
    }

    if (selectedSpeaker) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedSpeaker])

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section 
      id="speakers-section"
      className="py-12 sm:py-16 md:py-20 bg-[#f5efe2] border-b border-[#dccdb2]/80 relative overflow-hidden font-sans"
    >
      {/* Subtle Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#3a8c7e]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* SECTION HEADER & MANUAL NAVIGATION BUTTONS */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div className="space-y-2 text-left max-w-2xl">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-[#3e2410] tracking-tight leading-tight">
              Voices of Change: <span className="italic text-[#3a8c7e] font-serif">Faculty &amp; Speakers</span>
            </h2>
            <p className="text-[#7a5232] text-xs sm:text-sm md:text-base font-normal leading-relaxed">
              Learn from distinguished practitioners with decades of experience in governance, social development, and education.
            </p>
          </div>

          {/* Manual Scroll Controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full bg-[#fdfbf7] border border-[#dccdb2] text-[#3e2410] hover:bg-[#3a8c7e] hover:text-white transition-all shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3a8c7e]"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full bg-[#fdfbf7] border border-[#dccdb2] text-[#3e2410] hover:bg-[#3a8c7e] hover:text-white transition-all shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3a8c7e]"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MANUAL SCROLLABLE TRACK */}
        {/* ========================================================= */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {speakers.map((speaker) => (
            <button
              key={speaker.id}
              onClick={() => setSelectedSpeaker(speaker)}
              className="group w-[230px] sm:w-[260px] md:w-[280px] shrink-0 snap-start bg-[#fdfbf7] hover:bg-[#faf6ee] rounded-2xl p-3 sm:p-4 border border-[#dccdb2] hover:border-[#3a8c7e]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3a8c7e] hover:-translate-y-1"
              aria-label={`View bio for ${speaker.name}, ${speaker.title}`}
            >
              
              {/* Compact Portrait Image with Soft Backdrop */}
              <div className="relative w-full h-36 sm:h-44 rounded-xl overflow-hidden bg-[#f5efe2] border border-[#dccdb2]/60 flex items-end justify-center select-none">
                {speaker.image ? (
                  <div className="relative w-full h-full flex items-end justify-center">
                    <Image
                      src={speaker.image}
                      alt={`${speaker.name} - ${speaker.title}`}
                      fill
                      className="object-contain object-bottom filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 230px, 280px"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7]/60 to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#ebe2d1] flex items-center justify-center text-[#7a5232] mb-3 border border-[#dccdb2]">
                    <User size={22} />
                  </div>
                )}
              </div>

              {/* Bottom Details */}
              <div className="pt-3 space-y-1 text-left">
                <span className="inline-block px-2 py-0.5 rounded bg-[#3a8c7e]/10 text-[#1f5c54] text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider border border-[#3a8c7e]/20">
                  {speaker.tag}
                </span>

                <h3 className="font-serif font-bold text-sm sm:text-base text-[#3e2410] group-hover:text-[#1f5c54] transition-colors leading-snug truncate">
                  {speaker.name}
                </h3>
                
                <p className="text-[11px] sm:text-xs font-semibold text-[#1f5c54] truncate">
                  {speaker.title}
                </p>

                <p className="text-[10.5px] sm:text-[11px] text-[#7a5232] leading-snug line-clamp-2">
                  {speaker.role}
                </p>
              </div>

            </button>
          ))}
        </div>

      </div>

      {/* ========================================================= */}
      {/* SPEAKER BIO MODAL (Accessible on click) */}
      {/* ========================================================= */}
      {selectedSpeaker && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setSelectedSpeaker(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-speaker-name"
        >
          <div 
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#fdfbf7] rounded-3xl p-5 sm:p-8 border border-[#dccdb2] shadow-2xl space-y-5 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedSpeaker(null)}
              aria-label="Close bio modal"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f5efe2] hover:bg-[#ebe2d1] text-[#3e2410] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3a8c7e] cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Header with Photo & Details */}
            <div className="flex items-start gap-4 sm:gap-5 pr-8">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-[#f5efe2] border border-[#dccdb2]">
                {selectedSpeaker.image ? (
                  <Image
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    fill
                    className="object-contain object-bottom p-1"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#3e2410]">
                    <User size={30} />
                  </div>
                )}
              </div>

              <div className="space-y-1 min-w-0">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#3a8c7e]/10 text-[#1f5c54] text-[10px] font-bold uppercase tracking-wider border border-[#3a8c7e]/20">
                  {selectedSpeaker.tag}
                </span>
                <h3 id="modal-speaker-name" className="font-serif font-bold text-xl sm:text-2xl text-[#3e2410]">
                  {selectedSpeaker.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#1f5c54]">
                  {selectedSpeaker.title}
                </p>
              </div>
            </div>

            {/* Role & Affiliation */}
            <div className="p-3.5 rounded-2xl bg-[#f5efe2] border border-[#dccdb2] space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#c8880a] block">
                ROLE &amp; AFFILIATION
              </span>
              <p className="text-xs sm:text-sm text-[#3e2410] font-medium leading-snug">
                {selectedSpeaker.role}
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#3a8c7e] block">
                BACKGROUND &amp; IMPACT
              </span>
              <p className="text-xs sm:text-sm text-[#7a5232] leading-relaxed">
                {selectedSpeaker.bio}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="pt-2 flex items-center justify-end">
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="px-6 py-2.5 rounded-full bg-[#3a8c7e] hover:bg-[#1f5c54] text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3a8c7e]"
              >
                Close Bio
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}