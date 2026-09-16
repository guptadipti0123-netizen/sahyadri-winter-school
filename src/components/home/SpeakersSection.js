"use client"
import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ArrowRight, User } from "lucide-react"

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

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setSelectedSpeaker(null)
    }
  }, [])

  useEffect(() => {
    if (selectedSpeaker) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedSpeaker, handleKeyDown])

  return (
    <section 
      id="speakers-section"
      className="py-12 sm:py-16 md:py-20 px-3.5 sm:px-6 md:px-8 bg-[#f7f1e6] border-b border-[#ded3bd] relative overflow-hidden font-sans"
    >
      {/* Dynamic Checkerboard Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Default 2-column checkerboard (mobile: <768px) */
        .speaker-tile-block:nth-child(4n+1),
        .speaker-tile-block:nth-child(4n+4) {
          background: linear-gradient(to bottom, #2c6a5f, #1d4a42);
          --tile-text-name: #f2ece0;
          --tile-text-role: #9fcabe;
          --tile-inset-bg: #225148;
          --tile-border: rgba(58, 140, 126, 0.35);
        }
        .speaker-tile-block:nth-child(4n+2),
        .speaker-tile-block:nth-child(4n+3) {
          background-color: #e7e0d0;
          --tile-text-name: #1d3b34;
          --tile-text-role: #8a6a44;
          --tile-inset-bg: #dad1be;
          --tile-border: rgba(200, 188, 159, 0.45);
        }

        /* 3-column checkerboard (tablet: 768px to 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .speaker-tile-block:nth-child(odd) {
            background: linear-gradient(to bottom, #2c6a5f, #1d4a42);
            --tile-text-name: #f2ece0;
            --tile-text-role: #9fcabe;
            --tile-inset-bg: #225148;
            --tile-border: rgba(58, 140, 126, 0.35);
          }
          .speaker-tile-block:nth-child(even) {
            background-color: #e7e0d0;
            --tile-text-name: #1d3b34;
            --tile-text-role: #8a6a44;
            --tile-inset-bg: #dad1be;
            --tile-border: rgba(200, 188, 159, 0.45);
          }
        }

        /* 4-column checkerboard (desktop: >=1024px) */
        @media (min-width: 1024px) {
          .speaker-tile-block:nth-child(8n+1),
          .speaker-tile-block:nth-child(8n+3),
          .speaker-tile-block:nth-child(8n+6),
          .speaker-tile-block:nth-child(8n+8) {
            background: linear-gradient(to bottom, #2c6a5f, #1d4a42);
            --tile-text-name: #f2ece0;
            --tile-text-role: #9fcabe;
            --tile-inset-bg: #225148;
            --tile-border: rgba(58, 140, 126, 0.35);
          }
          .speaker-tile-block:nth-child(8n+2),
          .speaker-tile-block:nth-child(8n+4),
          .speaker-tile-block:nth-child(8n+5),
          .speaker-tile-block:nth-child(8n+7) {
            background-color: #e7e0d0;
            --tile-text-name: #1d3b34;
            --tile-text-role: #8a6a44;
            --tile-inset-bg: #dad1be;
            --tile-border: rgba(200, 188, 159, 0.45);
          }
        }
      `}} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ========================================================= */}
        {/* TOP ROW: WARLI BORDER (LEFT) + RIGHT-ALIGNED HEADING (RIGHT) */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-4 sm:mb-6">
          
          {/* Top-Left: Inline-SVG Geometric Warli Border */}
          <div className="w-full md:w-auto flex items-center justify-start py-1">
            <svg 
              viewBox="0 0 320 40" 
              className="w-56 xs:w-64 sm:w-72 md:w-80 h-9 sm:h-10 text-[#3a8c7e]" 
              stroke="#3a8c7e" 
              strokeWidth="1.1" 
              fill="none" 
              opacity="0.3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              aria-hidden="true"
            >
              {/* 1. Pair of stick figures holding hands (circle heads + straight limbs + joined arm line) */}
              {/* Figure 1 */}
              <circle cx="20" cy="12" r="3.5" />
              <line x1="20" y1="15.5" x2="20" y2="27" />
              <line x1="20" y1="20" x2="13" y2="24" />
              <line x1="20" y1="20" x2="27" y2="20" />
              <line x1="20" y1="27" x2="14" y2="36" />
              <line x1="20" y1="27" x2="23" y2="36" />

              {/* Figure 2 */}
              <circle cx="34" cy="12" r="3.5" />
              <line x1="34" y1="15.5" x2="34" y2="27" />
              <line x1="27" y1="20" x2="34" y2="20" />
              <line x1="34" y1="20" x2="41" y2="24" />
              <line x1="34" y1="27" x2="31" y2="36" />
              <line x1="34" y1="27" x2="40" y2="36" />

              {/* 2. Triangular Tree (strictly straight lines & stacked triangle polygons) */}
              <line x1="80" y1="8" x2="80" y2="36" />
              <polygon points="80,8 70,18 90,18" />
              <polygon points="80,16 65,27 95,27" />
              <polygon points="80,24 60,35 100,35" />

              {/* 3. Hut (triangle roof over rectangle base + straight door) */}
              <polygon points="135,11 116,22 154,22" />
              <rect x="122" y="22" width="26" height="14" />
              <line x1="135" y1="26" x2="135" y2="36" />

              {/* 4. Sun (circle with short radiating straight ticks) */}
              <circle cx="185" cy="20" r="6" />
              <line x1="185" y1="10" x2="185" y2="12" />
              <line x1="185" y1="28" x2="185" y2="30" />
              <line x1="175" y1="20" x2="177" y2="20" />
              <line x1="193" y1="20" x2="195" y2="20" />
              <line x1="178" y1="13" x2="179.5" y2="14.5" />
              <line x1="190.5" y1="25.5" x2="192" y2="27" />
              <line x1="178" y1="27" x2="179.5" y2="25.5" />
              <line x1="190.5" y1="14.5" x2="192" y2="13" />

              {/* 5. Single Figure (circle head + straight spine + straight limbs) */}
              <circle cx="230" cy="12" r="3.5" />
              <line x1="230" y1="15.5" x2="230" y2="27" />
              <line x1="230" y1="20" x2="223" y2="16" />
              <line x1="230" y1="20" x2="237" y2="24" />
              <line x1="230" y1="27" x2="224" y2="36" />
              <line x1="230" y1="27" x2="236" y2="36" />

              {/* 6. Another Tree (straight trunk with geometric straight branch lines) */}
              <line x1="285" y1="8" x2="285" y2="36" />
              <line x1="285" y1="14" x2="273" y2="22" />
              <line x1="285" y1="14" x2="297" y2="22" />
              <line x1="285" y1="20" x2="269" y2="29" />
              <line x1="285" y1="20" x2="301" y2="29" />
              <line x1="285" y1="26" x2="266" y2="35" />
              <line x1="285" y1="26" x2="304" y2="35" />
            </svg>
          </div>

          {/* Top-Right: Right-Aligned Heading Block */}
          <div className="text-left md:text-right space-y-1">
            <div className="text-[11px] sm:text-xs font-bold tracking-widest text-[#3a8c7e] uppercase">
              EMINENT VOICES
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-[#1d3b34] tracking-tight leading-tight">
              Voices of Change: <span className="italic text-[#3a8c7e] font-serif">Faculty &amp; Speakers</span>
            </h2>
            <p className="text-[#a08a63] text-xs sm:text-sm font-medium tracking-wide uppercase">
              six practitioners
            </p>
          </div>

        </div>

        {/* 1px Divider spanning section width */}
        <div className="w-full h-px bg-[#ded3bd] mb-6 sm:mb-8" />

        {/* ========================================================= */}
        {/* UNIFORM FRAMED GRID (4 cols desktop, 3 tablet, 2 mobile) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 items-stretch">
          {speakers.map((speaker) => (
            <button
              key={speaker.id}
              onClick={() => setSelectedSpeaker(speaker)}
              className="speaker-tile-block group relative w-full aspect-[136/168] rounded-xl overflow-hidden p-1.5 sm:p-[6px] pb-0 flex flex-col justify-between text-left cursor-pointer transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c6a5f] focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0"
              style={{
                border: "1px solid var(--tile-border)"
              }}
              aria-label={`View bio for ${speaker.name}, ${speaker.title}`}
            >
              
              {/* Inset Portrait Photo Area (Inset ~6px on top, left, right) */}
              <div 
                className="relative w-full flex-1 rounded-lg overflow-hidden flex items-end justify-center select-none"
                style={{
                  backgroundColor: "var(--tile-inset-bg)"
                }}
              >
                {speaker.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={speaker.image}
                      alt={`${speaker.name} - ${speaker.title}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-[center_25%] filter grayscale contrast-[1.04] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-400 motion-reduce:transition-none motion-reduce:filter-none"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-current mb-4">
                    <User size={22} />
                  </div>
                )}
              </div>

              {/* Solid Bottom Strip: Speaker Name & Role Left-Aligned */}
              <div className="w-full pt-2 pb-2 px-1 text-left space-y-0.5 shrink-0">
                <h3 
                  className="font-serif font-bold text-xs xs:text-sm md:text-[14.5px] leading-tight truncate block"
                  style={{ color: "var(--tile-text-name)" }}
                >
                  {speaker.name}
                </h3>
                
                <p 
                  className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] font-semibold uppercase tracking-widest truncate block"
                  style={{ color: "var(--tile-text-role)" }}
                >
                  {speaker.title}
                </p>
              </div>

            </button>
          ))}

          {/* ========================================================= */}
          {/* CLOSING TILES (Completes desktop 4-column grid row) */}
          {/* ========================================================= */}
          <div 
            className="hidden lg:flex w-full aspect-[136/168] rounded-xl bg-[#efe9dc] border-2 border-dashed border-[#d8ccb4] p-4 flex-col justify-between text-left group hover:border-[#3a8c7e]/60 transition-all duration-300"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#8a6a44] block">
                FACULTY NETWORK
              </span>
              <h3 className="font-serif font-bold text-base text-[#1d3b34]">
                +6 more mentors
              </h3>
              <p className="text-[11px] text-[#8a6a44] leading-snug">
                Grassroots leaders, policy directors &amp; tribal education specialists.
              </p>
            </div>

            <Link
              href="/about#mentors"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2c6a5f] hover:text-[#1d4a42] group-hover:translate-x-0.5 transition-all"
            >
              <span>View all</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div 
            className="hidden lg:flex w-full aspect-[136/168] rounded-xl bg-[#efe9dc] border-2 border-dashed border-[#d8ccb4] p-4 flex-col justify-between text-left group hover:border-[#3a8c7e]/60 transition-all duration-300"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#3a8c7e] block">
                JOIN ADVISORY
              </span>
              <h3 className="font-serif font-bold text-base text-[#1d3b34]">
                Engage as Faculty
              </h3>
              <p className="text-[11px] text-[#8a6a44] leading-snug">
                Mentor interdisciplinary cohorts in field camps across Maharashtra.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2c6a5f] hover:text-[#1d4a42] group-hover:translate-x-0.5 transition-all"
            >
              <span>Get in touch</span>
              <ArrowRight size={13} />
            </Link>
          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* SPEAKER BIO MODAL (Accessible on click / keyboard focus) */}
      {/* ========================================================= */}
      {selectedSpeaker && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedSpeaker(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-speaker-name"
        >
          <div 
            className="relative w-full max-w-lg bg-[#fdfbf7] rounded-3xl p-6 sm:p-8 border border-[#ded3bd] shadow-2xl space-y-5 text-left animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedSpeaker(null)}
              aria-label="Close bio modal"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#e7e0d0] hover:bg-[#ded3bd] text-[#1d3b34] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c6a5f] cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Header with Photo & Details */}
            <div className="flex items-start gap-4 sm:gap-5 pr-8">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-[#e7e0d0] border border-[#ded3bd]">
                {selectedSpeaker.image ? (
                  <Image
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    fill
                    className="object-cover object-[center_25%]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#1d3b34]">
                    <User size={30} />
                  </div>
                )}
              </div>

              <div className="space-y-1 min-w-0">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#2c6a5f]/10 text-[#2c6a5f] text-[10px] font-bold uppercase tracking-wider border border-[#2c6a5f]/20">
                  {selectedSpeaker.tag}
                </span>
                <h3 id="modal-speaker-name" className="font-serif font-bold text-xl sm:text-2xl text-[#1d3b34]">
                  {selectedSpeaker.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#3a8c7e]">
                  {selectedSpeaker.title}
                </p>
              </div>
            </div>

            {/* Role & Affiliation */}
            <div className="p-3.5 rounded-xl bg-[#f7f1e6] border border-[#ded3bd] space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#8a6a44] block">
                ROLE &amp; AFFILIATION
              </span>
              <p className="text-xs sm:text-sm text-[#1d3b34] font-medium leading-snug">
                {selectedSpeaker.role}
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#8a6a44] block">
                BACKGROUND &amp; IMPACT
              </span>
              <p className="text-xs sm:text-sm text-[#5c4a38] leading-relaxed">
                {selectedSpeaker.bio}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="pt-2 flex items-center justify-end">
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="px-5 py-2 rounded-full bg-[#2c6a5f] hover:bg-[#1d4a42] text-[#f2ece0] text-xs font-semibold shadow-xs hover:shadow-sm transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c6a5f]"
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