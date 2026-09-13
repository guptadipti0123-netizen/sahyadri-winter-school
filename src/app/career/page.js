"use client"

import React from "react"
import Link from "next/link"
import { Mail, Sprout, Sparkles, Users } from "lucide-react"

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#faf6ee] text-[#3e2410] overflow-x-hidden selection:bg-[#3a8c7e]/25 selection:text-[#3e2410]">

      {/* ================= TOP HERO & PILLARS SECTION (HIGH CONTRAST & CRISP READABILITY) ================= */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 md:pt-40 pb-36 sm:pb-44 md:pb-52 border-b border-[#dccdb2]/60">
        
        {/* Top-Left Faint Background Line Accent */}
        <div className="absolute top-28 md:top-36 left-6 sm:left-12 pointer-events-none select-none z-0 opacity-20">
          <svg className="w-24 h-24 text-[#458377]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="10,80 50,20 90,80" />
            <line x1="50" y1="20" x2="50" y2="80" strokeDasharray="3,3" />
          </svg>
        </div>

        {/* Top-Right Faint Warli Line-Art Motif (Tree & Stick Figure) */}
        <div className="absolute top-24 md:top-32 right-6 sm:right-12 md:right-20 pointer-events-none select-none z-0 opacity-35">
          <svg className="w-36 h-36 md:w-44 md:h-44 text-[#458377]" viewBox="0 0 140 140" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="40" y1="110" x2="40" y2="35" strokeWidth="2.2" />
            <line x1="40" y1="52" x2="22" y2="35" />
            <line x1="40" y1="52" x2="58" y2="35" />
            <line x1="40" y1="74" x2="16" y2="54" />
            <line x1="40" y1="74" x2="64" y2="54" />
            <line x1="40" y1="96" x2="10" y2="74" />
            <line x1="40" y1="96" x2="70" y2="74" />

            <circle cx="100" cy="50" r="8" />
            <line x1="100" y1="58" x2="100" y2="88" />
            <line x1="82" y1="68" x2="118" y2="80" />
            <line x1="82" y1="80" x2="118" y2="68" />
            <line x1="100" y1="88" x2="84" y2="116" />
            <line x1="100" y1="88" x2="116" y2="116" />
          </svg>
        </div>

        {/* Layered Abstract Mountains at Bottom of Section (Comfortably below text) */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none z-0">
          <svg
            className="w-full h-40 sm:h-52 md:h-64"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Layer 1: Lightest Sage (Back) */}
            <polygon
              fill="#a8cdc6"
              fillOpacity="0.50"
              points="0,120 220,55 440,130 680,45 920,140 1140,60 1340,130 1440,85 1440,320 0,320"
            />
            {/* Layer 2: Medium Soft Sage */}
            <polygon
              fill="#83b9af"
              fillOpacity="0.65"
              points="0,175 180,105 380,185 640,85 860,180 1080,95 1280,170 1440,125 1440,320 0,320"
            />
            {/* Layer 3: Muted Forest Green */}
            <polygon
              fill="#5f9e93"
              fillOpacity="0.75"
              points="0,225 220,155 460,235 720,135 960,245 1180,145 1360,225 1440,175 1440,320 0,320"
            />
            {/* Layer 4: Deep Front Teal */}
            <polygon
              fill="#3a8275"
              fillOpacity="0.85"
              points="0,270 250,200 520,280 800,175 1090,285 1310,205 1440,255 1440,320 0,320"
            />
          </svg>
          <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 md:h-28 bg-gradient-to-t from-[#faf6ee] via-[#faf6ee]/60 to-transparent" />
        </div>

        {/* Content Container (Left-Aligned, Exactly matching Image 1) */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-8 sm:space-y-10 pb-6 sm:pb-8">
          
          {/* Header Area */}
          <div className="space-y-2.5 sm:space-y-3.5 text-left max-w-3xl">
            <p className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#124d45] uppercase font-sans">
              JOIN OUR MISSION
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#1a0e06] leading-tight tracking-tight">
              Career Opportunities
            </h1>

            <p className="font-serif italic text-base sm:text-xl text-[#2b180d] font-medium leading-relaxed" style={{ color: '#2b180d' }}>
              Build a purposeful career rooted in meaningful impact, collective wisdom, and rural leadership.
            </p>
          </div>

          {/* Thin Horizontal Divider Line */}
          <div className="w-full h-[1.5px] bg-[#dccdb2]" />

          {/* 3 Value Pillars (High Contrast Dark Text & Clear Spacing) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 pt-2 sm:pt-4">
            
            {/* Column 1: Meaningful Work */}
            <div className="md:pr-8 md:border-r border-[#dccdb2] flex flex-col items-start text-left space-y-3.5 group">
              <div className="h-16 flex items-center text-[#1f5c54]">
                <svg className="w-20 h-14" viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="20" cy="12" r="5.5" />
                  <line x1="20" y1="18" x2="20" y2="34" />
                  <line x1="8" y1="24" x2="32" y2="31" />
                  <line x1="8" y1="31" x2="32" y2="24" />
                  <line x1="20" y1="34" x2="9" y2="48" />
                  <line x1="20" y1="34" x2="31" y2="48" />
                  <line x1="32" y1="27.5" x2="48" y2="27.5" strokeWidth="2.8" />
                  <circle cx="60" cy="12" r="5.5" />
                  <line x1="60" y1="18" x2="60" y2="34" />
                  <line x1="48" y1="24" x2="72" y2="31" />
                  <line x1="48" y1="31" x2="72" y2="24" />
                  <line x1="60" y1="34" x2="49" y2="48" />
                  <line x1="60" y1="34" x2="71" y2="48" />
                </svg>
              </div>

              <h2 className="font-serif text-2xl sm:text-[27px] font-medium text-[#112620] group-hover:text-[#1f5c54] transition-colors leading-snug" style={{ color: '#112620' }}>
                Meaningful Work
              </h2>

              <p className="text-sm sm:text-[15px] text-[#241508] font-normal leading-relaxed" style={{ color: '#241508' }}>
                Contribute to impactful projects that make a real difference in rural communities across Maharashtra.
              </p>
            </div>

            {/* Column 2: Collaborative Team */}
            <div className="md:px-8 md:border-r border-[#dccdb2] flex flex-col items-start text-left space-y-3.5 group">
              <div className="h-16 flex items-center text-[#1f5c54]">
                <svg className="w-20 h-14" viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="24" y1="48" x2="24" y2="6" strokeWidth="2.6" />
                  <line x1="24" y1="16" x2="10" y2="6" />
                  <line x1="24" y1="16" x2="38" y2="6" />
                  <line x1="24" y1="28" x2="8" y2="16" />
                  <line x1="24" y1="28" x2="40" y2="16" />
                  <line x1="24" y1="38" x2="6" y2="26" />
                  <line x1="24" y1="38" x2="42" y2="26" />
                  <line x1="58" y1="48" x2="58" y2="14" strokeWidth="2.4" />
                  <line x1="58" y1="24" x2="47" y2="15" />
                  <line x1="58" y1="24" x2="69" y2="15" />
                  <line x1="58" y1="35" x2="44" y2="24" />
                  <line x1="58" y1="35" x2="72" y2="24" />
                </svg>
              </div>

              <h2 className="font-serif text-2xl sm:text-[27px] font-medium text-[#112620] group-hover:text-[#1f5c54] transition-colors leading-snug" style={{ color: '#112620' }}>
                Collaborative Team
              </h2>

              <p className="text-sm sm:text-[15px] text-[#241508] font-normal leading-relaxed" style={{ color: '#241508' }}>
                Work with a diverse team of passionate professionals, educators, and ground leaders dedicated to social transformation.
              </p>
            </div>

            {/* Column 3: Growth & Learning */}
            <div className="md:pl-8 flex flex-col items-start text-left space-y-3.5 group">
              <div className="h-16 flex items-center text-[#1f5c54]">
                <svg className="w-16 h-14" viewBox="0 0 60 50" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

              <h2 className="font-serif text-2xl sm:text-[27px] font-medium text-[#112620] group-hover:text-[#1f5c54] transition-colors leading-snug" style={{ color: '#112620' }}>
                Growth &amp; Learning
              </h2>

              <p className="text-sm sm:text-[15px] text-[#241508] font-normal leading-relaxed" style={{ color: '#241508' }}>
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
              
              <p className="text-[#2b180d] mb-8 leading-relaxed text-sm md:text-base font-normal">
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