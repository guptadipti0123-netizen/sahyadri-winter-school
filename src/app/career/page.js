"use client"

import React from "react"
import Link from "next/link"
import { Users, Mail, Sprout, Sparkles } from "lucide-react"

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#faf6ee] text-[#3e2410] overflow-x-hidden selection:bg-[#3a8c7e]/25 selection:text-[#3e2410]">

      {/* ================= TOP HERO & PILLARS SECTION (MATCHING REFERENCE DESIGN) ================= */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 md:pt-40 pb-28 sm:pb-36 md:pb-44 border-b border-[#dccdb2]/60">
        
        {/* Top-Right Faint Warli Line-Art Motif */}
        <div className="absolute top-28 md:top-36 right-8 sm:right-16 md:right-24 pointer-events-none select-none z-0 opacity-30">
          <svg className="w-32 h-32 md:w-40 md:h-40 text-[#458377]" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {/* Tree */}
            <line x1="35" y1="100" x2="35" y2="30" strokeWidth="2.2" />
            <line x1="35" y1="48" x2="18" y2="32" />
            <line x1="35" y1="48" x2="52" y2="32" />
            <line x1="35" y1="68" x2="12" y2="50" />
            <line x1="35" y1="68" x2="58" y2="50" />
            <line x1="35" y1="88" x2="8" y2="68" />
            <line x1="35" y1="88" x2="62" y2="68" />

            {/* Grassroots Figure */}
            <circle cx="85" cy="45" r="7" />
            <line x1="85" y1="52" x2="85" y2="78" />
            <line x1="68" y1="62" x2="102" y2="72" />
            <line x1="68" y1="72" x2="102" y2="62" />
            <line x1="85" y1="78" x2="70" y2="104" />
            <line x1="85" y1="78" x2="100" y2="104" />
          </svg>
        </div>

        {/* Layered Abstract Mountains at Bottom of Section */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none z-0">
          <svg
            className="w-full h-44 sm:h-56 md:h-72"
            viewBox="0 0 1440 340"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Layer 1: Lightest Sage */}
            <polygon
              fill="#a8cdc6"
              fillOpacity="0.45"
              points="0,150 200,75 400,150 640,60 880,165 1080,75 1280,160 1440,100 1440,340 0,340"
            />
            {/* Layer 2: Medium Soft Sage */}
            <polygon
              fill="#83b9af"
              fillOpacity="0.60"
              points="0,205 180,125 370,210 600,105 820,205 1040,115 1260,200 1440,140 1440,340 0,340"
            />
            {/* Layer 3: Muted Forest Green */}
            <polygon
              fill="#5f9e93"
              fillOpacity="0.75"
              points="0,250 220,170 460,255 720,150 960,265 1180,165 1360,245 1440,190 1440,340 0,340"
            />
            {/* Layer 4: Deep Front Teal */}
            <polygon
              fill="#3a8275"
              fillOpacity="0.85"
              points="0,295 250,220 520,305 800,195 1090,310 1310,225 1440,275 1440,340 0,340"
            />
          </svg>
          <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 md:h-36 bg-gradient-to-t from-[#faf6ee] via-[#faf6ee]/70 to-transparent" />
        </div>

        {/* Content Container (Left-Aligned, Matching Image 1) */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-10 sm:space-y-12">
          
          {/* Hero Header */}
          <div className="space-y-3 sm:space-y-4 text-left max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#1f5c54] uppercase">
              JOIN OUR MISSION
            </p>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1a332d] leading-tight tracking-tight">
              Career Opportunities
            </h1>

            <p className="font-serif italic text-base sm:text-xl text-[#5c5042] leading-relaxed font-light">
              Build a purposeful career rooted in meaningful impact, collective wisdom, and rural leadership.
            </p>
          </div>

          {/* Thin Horizontal Divider Line */}
          <div className="w-full h-[1px] bg-[#dccdb2]/80" />

          {/* 3 Pillars / Value Pillars Section (Seamless 3-Column Layout with Vertical Dividers) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 pt-2 sm:pt-4">
            
            {/* Column 1: Meaningful Work */}
            <div className="md:pr-8 md:border-r border-[#dccdb2]/70 flex flex-col items-start text-left space-y-4 group">
              <div className="h-14 flex items-center text-[#2d7367]">
                <svg className="w-16 h-12" viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="20" cy="12" r="5" />
                  <line x1="20" y1="17" x2="20" y2="33" />
                  <line x1="9" y1="24" x2="31" y2="30" />
                  <line x1="9" y1="30" x2="31" y2="24" />
                  <line x1="20" y1="33" x2="10" y2="47" />
                  <line x1="20" y1="33" x2="30" y2="47" />
                  <line x1="31" y1="27" x2="49" y2="27" strokeWidth="2.4" />
                  <circle cx="60" cy="12" r="5" />
                  <line x1="60" y1="17" x2="60" y2="33" />
                  <line x1="49" y1="24" x2="71" y2="30" />
                  <line x1="49" y1="30" x2="71" y2="24" />
                  <line x1="60" y1="33" x2="50" y2="47" />
                  <line x1="60" y1="33" x2="70" y2="47" />
                </svg>
              </div>

              <h2 className="font-serif text-2xl sm:text-[26px] font-normal text-[#1a332d] group-hover:text-[#1f5c54] transition-colors leading-snug">
                Meaningful Work
              </h2>

              <p className="text-sm sm:text-[14.5px] text-[#5c5042] leading-relaxed font-light">
                Contribute to impactful projects that make a real difference in rural communities across Maharashtra.
              </p>
            </div>

            {/* Column 2: Collaborative Team */}
            <div className="md:px-8 md:border-r border-[#dccdb2]/70 flex flex-col items-start text-left space-y-4 group">
              <div className="h-14 flex items-center text-[#2d7367]">
                <svg className="w-16 h-12" viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="25" y1="46" x2="25" y2="8" strokeWidth="2.4" />
                  <line x1="25" y1="18" x2="12" y2="9" />
                  <line x1="25" y1="18" x2="38" y2="9" />
                  <line x1="25" y1="28" x2="9" y2="17" />
                  <line x1="25" y1="28" x2="41" y2="17" />
                  <line x1="25" y1="38" x2="6" y2="26" />
                  <line x1="25" y1="38" x2="44" y2="26" />
                  <line x1="58" y1="46" x2="58" y2="14" strokeWidth="2.2" />
                  <line x1="58" y1="24" x2="48" y2="15" />
                  <line x1="58" y1="24" x2="68" y2="15" />
                  <line x1="58" y1="34" x2="45" y2="23" />
                  <line x1="58" y1="34" x2="71" y2="23" />
                </svg>
              </div>

              <h2 className="font-serif text-2xl sm:text-[26px] font-normal text-[#1a332d] group-hover:text-[#1f5c54] transition-colors leading-snug">
                Collaborative Team
              </h2>

              <p className="text-sm sm:text-[14.5px] text-[#5c5042] leading-relaxed font-light">
                Work with a diverse team of passionate professionals, educators, and ground leaders dedicated to social transformation.
              </p>
            </div>

            {/* Column 3: Growth & Learning */}
            <div className="md:pl-8 flex flex-col items-start text-left space-y-4 group">
              <div className="h-14 flex items-center text-[#2d7367]">
                <svg className="w-14 h-12" viewBox="0 0 60 50" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="30" cy="25" r="11" />
                  <line x1="30" y1="7" x2="30" y2="2" />
                  <line x1="30" y1="43" x2="30" y2="48" />
                  <line x1="12" y1="25" x2="7" y2="25" />
                  <line x1="48" y1="25" x2="53" y2="25" />
                  <line x1="17" y1="12" x2="13" y2="8" />
                  <line x1="43" y1="38" x2="47" y2="42" />
                  <line x1="17" y1="38" x2="13" y2="42" />
                  <line x1="43" y1="12" x2="47" y2="8" />
                </svg>
              </div>

              <h2 className="font-serif text-2xl sm:text-[26px] font-normal text-[#1a332d] group-hover:text-[#1f5c54] transition-colors leading-snug">
                Growth &amp; Learning
              </h2>

              <p className="text-sm sm:text-[14.5px] text-[#5c5042] leading-relaxed font-light">
                Develop your skills through grassroots fieldwork, continuous mentorship, and hands-on community leadership programs.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= GET INVOLVED / COLLABORATE SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 md:px-8 relative">
        <div className="relative overflow-hidden bg-[#fdfbf7] rounded-3xl md:rounded-[2.5rem] shadow-xs border border-[#dccdb2] max-w-5xl mx-auto">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#3a8c7e]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c8880a]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            
            {/* Left: Text Content */}
            <div className="p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebe2d1] border border-[#dccdb2] mb-5 w-fit">
                <Sparkles size={14} className="text-[#c8880a]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1f5c54]">Get Involved</span>
              </div>
              
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#1a332d] mb-4 leading-tight">
                Be a Catalyst for Rural Transformation
              </h2>
              
              <p className="text-[#5c5042] mb-8 leading-relaxed text-sm md:text-base font-light">
                While we do not have full-time staff vacancies open currently, we are always eager to collaborate with educators, researchers, and changemakers who share our vision.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1f5c54] text-white rounded-full font-medium hover:bg-[#3a8c7e] transition-all shadow-xs text-sm active:scale-95 text-center"
                >
                  <Mail size={16} />
                  <span>Contact Us</span>
                </Link>
                <Link
                  href="/volunteers"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-[#3e2410] border border-[#dccdb2] rounded-full font-medium hover:bg-[#ebe2d1] transition-all text-sm active:scale-95 text-center"
                >
                  <Sprout size={16} className="text-[#1f5c54]" />
                  <span>Volunteer With Us</span>
                </Link>
              </div>
            </div>

            {/* Right: Visual Area */}
            <div className="bg-[#ebe2d1]/40 p-8 sm:p-12 md:p-16 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-[#dccdb2]">
               <div className="text-center space-y-6">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto">
                     <div className="absolute inset-0 bg-[#3a8c7e]/15 rounded-full blur-xl animate-pulse" />
                     <div className="relative bg-[#fdfbf7] p-8 rounded-full shadow-xs border border-[#dccdb2] flex items-center justify-center h-full w-full">
                        <Users className="w-12 h-12 text-[#1f5c54]" />
                     </div>
                     <div className="absolute -top-2 -right-2 bg-[#fdfbf7] px-3 py-1.5 rounded-full shadow-xs border border-[#dccdb2] text-[11px] font-semibold text-[#1f5c54]">Community First</div>
                     <div className="absolute -bottom-2 -left-2 bg-[#fdfbf7] px-3 py-1.5 rounded-full shadow-xs border border-[#dccdb2] text-[11px] font-semibold text-[#c8880a]">Vedic Wisdom</div> 
                  </div>
                  <div>
                     <h3 className="font-serif text-lg md:text-xl font-normal text-[#1a332d]">Stay Connected</h3>
                     <p className="text-xs sm:text-sm text-[#7a5232] mt-1 font-light">Follow our journey and upcoming camp announcements.</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}