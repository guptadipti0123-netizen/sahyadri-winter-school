"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { X, User } from "lucide-react"

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

  // Duplicate speakers to ensure smooth infinite loop
  const marqueeSpeakers = [...speakers, ...speakers, ...speakers, ...speakers]

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

  return (
    <section 
      id="speakers-section"
      className="py-12 sm:py-16 md:py-20 bg-[#f5efe2] border-b border-[#dccdb2]/80 relative overflow-hidden font-sans"
    >
      {/* Subtle Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#3a8c7e]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* SECTION HEADER */}
        {/* ========================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-[#3e2410] tracking-tight leading-tight">
            Voices of Change: <span className="italic text-[#3a8c7e] font-serif">Faculty &amp; Speakers</span>
          </h2>
          <p className="text-[#7a5232] text-xs sm:text-sm md:text-base font-normal leading-relaxed">
            Learn from distinguished practitioners with decades of experience in governance, social development, and education.
          </p>
        </div>

      </div>

      {/* ========================================================= */}
      {/* CONTINUOUS AUTO-SCROLLING MARQUEE TRACK */}
      {/* ========================================================= */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left Edge Soft Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-[#f5efe2] via-[#f5efe2]/80 to-transparent z-20 pointer-events-none" />

        {/* Right Edge Soft Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-[#f5efe2] via-[#f5efe2]/80 to-transparent z-20 pointer-events-none" />

        {/* Continuous Horizontal Marquee Track (Smooth hardware-accelerated scroll on both mobile & desktop) */}
        <div 
          className="flex flex-row flex-nowrap w-max animate-continuous-scroll gap-3 sm:gap-4.5 px-3"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            width: "max-content",
          }}
        >
          {marqueeSpeakers.map((speaker, idx) => (
            <button
              key={`${speaker.id}-${idx}`}
              onClick={() => setSelectedSpeaker(speaker)}
              className="group w-[175px] sm:w-[210px] md:w-[225px] shrink-0 bg-[#fdfbf7] hover:bg-[#faf6ee] rounded-2xl p-2.5 sm:p-3.5 border border-[#dccdb2] hover:border-[#3a8c7e]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3a8c7e] hover:-translate-y-1 select-none"
              style={{ flexShrink: 0 }}
              aria-label={`View bio for ${speaker.name}, ${speaker.title}`}
            >
              
              {/* Compact Portrait Image with Soft Backdrop */}
              <div className="relative w-full h-28 sm:h-34 rounded-xl overflow-hidden bg-[#f5efe2] border border-[#dccdb2]/60 flex items-end justify-center select-none">
                {speaker.image ? (
                  <div className="relative w-full h-full flex items-end justify-center">
                    <Image
                      src={speaker.image}
                      alt={`${speaker.name} - ${speaker.title}`}
                      fill
                      className="object-contain object-bottom filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 185px, 225px"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7]/60 to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#ebe2d1] flex items-center justify-center text-[#7a5232] mb-2 border border-[#dccdb2]">
                    <User size={18} />
                  </div>
                )}
              </div>

              {/* Bottom Details (Compact & Clean) */}
              <div className="pt-2 space-y-1 text-left">
                <span className="inline-block px-1.5 py-0.5 rounded bg-[#3a8c7e]/10 text-[#1f5c54] text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wider border border-[#3a8c7e]/20 truncate max-w-full">
                  {speaker.tag}
                </span>

                <h3 className="font-serif font-bold text-xs sm:text-[14.5px] text-[#3e2410] group-hover:text-[#1f5c54] transition-colors leading-tight truncate">
                  {speaker.name}
                </h3>
                
                <p className="text-[10px] sm:text-[11.5px] font-semibold text-[#1f5c54] truncate">
                  {speaker.title}
                </p>

                <p className="text-[9.5px] sm:text-[10.5px] text-[#7a5232] leading-snug line-clamp-2">
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