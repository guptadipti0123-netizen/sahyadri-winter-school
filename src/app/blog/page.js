import React from "react"
import Link from "next/link"
import Image from "next/image"
import { blogsData } from "@/data/blogsData"
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react"

// Helper to format date into Day Month and Year for timeline
function formatTimelineDate(dateStr) {
  if (!dateStr) return { dayMonth: "FIELD", year: "2025" }
  const clean = dateStr.replace(",", "").trim()
  const parts = clean.split(" ")
  if (parts.length === 3) {
    const [month, day, year] = parts
    return { dayMonth: `${day} ${month.toUpperCase()}`, year }
  } else if (parts.length === 2) {
    const [month, year] = parts
    return { dayMonth: month.toUpperCase(), year }
  }
  return { dayMonth: dateStr.toUpperCase(), year: "" }
}

export default function BlogHubPage() {
  const allBlogs = blogsData

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#faf6ee] text-[#3e2410] selection:bg-[#3a8c7e]/25 selection:text-[#3e2410]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden min-h-[500px] md:min-h-[560px] pt-32 sm:pt-36 md:pt-44 pb-32 sm:pb-36 md:pb-44 bg-[#faf6ee] border-b border-[#dccdb2]/60 flex flex-col justify-center">

        {/* ================= LAYER 1: WARLI & NATURE LINE-ART SCATTER ================= */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g
            stroke="#458377"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.65"
          >
            {/* ---------------- 1. TOP-LEFT CLUSTER ---------------- */}
            <g transform="translate(40, 60)">
              <circle cx="90" cy="80" r="8" />
              <line x1="90" y1="88" x2="90" y2="118" />
              <line x1="72" y1="100" x2="108" y2="112" />
              <line x1="72" y1="112" x2="108" y2="100" />
              <line x1="90" y1="118" x2="74" y2="146" />
              <line x1="90" y1="118" x2="106" y2="146" />
              <line x1="108" y1="106" x2="152" y2="106" strokeWidth="2.4" />
              <circle cx="170" cy="80" r="8" />
              <line x1="170" y1="88" x2="170" y2="118" />
              <line x1="152" y1="100" x2="188" y2="112" />
              <line x1="152" y1="112" x2="188" y2="100" />
              <line x1="170" y1="118" x2="154" y2="146" />
              <line x1="170" y1="118" x2="186" y2="146" />
            </g>

            {/* Tree 1 (Top-Left) */}
            <g transform="translate(40, 60)">
              <line x1="280" y1="165" x2="280" y2="60" strokeWidth="2.4" />
              <line x1="280" y1="86" x2="254" y2="68" />
              <line x1="280" y1="86" x2="306" y2="68" />
              <line x1="280" y1="112" x2="246" y2="90" />
              <line x1="280" y1="112" x2="314" y2="90" />
              <line x1="280" y1="138" x2="240" y2="114" />
              <line x1="280" y1="138" x2="320" y2="114" />
            </g>

            {/* Minimal Tree Branch (Top-Left Center) */}
            <g transform="translate(40, 60)">
              <line x1="410" y1="120" x2="410" y2="55" strokeWidth="2.2" />
              <line x1="410" y1="80" x2="385" y2="62" />
              <line x1="410" y1="80" x2="435" y2="62" />
            </g>

            {/* ---------------- 2. MID-LEFT MOTIFS ---------------- */}
            <g transform="translate(30, 20)">
              <polygon points="105,230 155,180 205,230" strokeWidth="2.4" />
              <polyline points="115,230 115,290 195,290 195,230" strokeWidth="2.4" />
            </g>

            <g transform="translate(20, 20)">
              <circle cx="280" cy="230" r="20" strokeWidth="2.2" />
              <line x1="280" y1="200" x2="280" y2="190" strokeWidth="2.2" />
              <line x1="280" y1="260" x2="280" y2="270" strokeWidth="2.2" />
              <line x1="250" y1="230" x2="240" y2="230" strokeWidth="2.2" />
              <line x1="310" y1="230" x2="320" y2="230" strokeWidth="2.2" />
              <line x1="259" y1="209" x2="251" y2="201" strokeWidth="2.2" />
              <line x1="301" y1="251" x2="309" y2="259" strokeWidth="2.2" />
              <line x1="259" y1="251" x2="251" y2="259" strokeWidth="2.2" />
              <line x1="301" y1="209" x2="309" y2="201" strokeWidth="2.2" />
            </g>

            {/* ---------------- 3. BOTTOM-LEFT MOTIFS ---------------- */}
            <g transform="translate(20, 0)">
              <polygon points="105,440 145,400 185,440" strokeWidth="2.2" />
              <polyline points="112,440 112,485 178,485 178,440" strokeWidth="2.2" />
              <circle cx="240" cy="430" r="8" />
              <line x1="240" y1="438" x2="240" y2="465" />
              <line x1="222" y1="448" x2="258" y2="458" />
              <line x1="222" y1="458" x2="258" y2="448" />
              <line x1="240" y1="465" x2="225" y2="492" />
              <line x1="240" y1="465" x2="255" y2="492" />
            </g>

            {/* ---------------- 4. TOP-RIGHT CLUSTER ---------------- */}
            <g transform="translate(-20, 60)">
              <circle cx="950" cy="80" r="8" />
              <line x1="950" y1="88" x2="950" y2="118" />
              <line x1="932" y1="100" x2="968" y2="110" />
              <line x1="932" y1="110" x2="968" y2="100" />
              <line x1="950" y1="118" x2="935" y2="146" />
              <line x1="950" y1="118" x2="965" y2="146" />
            </g>

            <g transform="translate(-20, 60)">
              <line x1="1080" y1="165" x2="1080" y2="60" strokeWidth="2.4" />
              <line x1="1080" y1="86" x2="1052" y2="68" />
              <line x1="1080" y1="86" x2="1108" y2="68" />
              <line x1="1080" y1="112" x2="1044" y2="90" />
              <line x1="1080" y1="112" x2="1116" y2="90" />
              <line x1="1080" y1="138" x2="1038" y2="114" />
              <line x1="1080" y1="138" x2="1122" y2="114" />
            </g>

            <g transform="translate(-20, 60)">
              <circle cx="1220" cy="80" r="8" />
              <line x1="1220" y1="88" x2="1220" y2="118" />
              <line x1="1202" y1="100" x2="1238" y2="110" />
              <line x1="1202" y1="110" x2="1238" y2="100" />
              <line x1="1220" y1="118" x2="1205" y2="146" />
              <line x1="1220" y1="118" x2="1235" y2="146" />
            </g>

            {/* ---------------- 5. MID-RIGHT MOTIFS ---------------- */}
            <g transform="translate(-20, 20)">
              <polygon points="1165,230 1215,180 1265,230" strokeWidth="2.4" />
              <polyline points="1175,230 1175,290 1255,290 1255,230" strokeWidth="2.4" />
            </g>

            <g transform="translate(-15, 20)">
              <circle cx="1310" cy="225" r="22" strokeWidth="2.2" />
              <line x1="1310" y1="193" x2="1310" y2="181" strokeWidth="2.2" />
              <line x1="1310" y1="257" x2="1310" y2="269" strokeWidth="2.2" />
              <line x1="1278" y1="225" x2="1266" y2="225" strokeWidth="2.2" />
              <line x1="1342" y1="225" x2="1354" y2="225" strokeWidth="2.2" />
              <line x1="1287" y1="202" x2="1278" y2="193" strokeWidth="2.2" />
              <line x1="1333" y1="248" x2="1342" y2="257" strokeWidth="2.2" />
              <line x1="1287" y1="248" x2="1278" y2="257" strokeWidth="2.2" />
              <line x1="1333" y1="202" x2="1342" y2="193" strokeWidth="2.2" />
            </g>

            {/* ---------------- 6. BOTTOM-RIGHT MOTIFS ---------------- */}
            <g transform="translate(-15, 0)">
              <line x1="1280" y1="475" x2="1280" y2="385" strokeWidth="2.4" />
              <line x1="1280" y1="410" x2="1255" y2="392" />
              <line x1="1280" y1="410" x2="1305" y2="392" />
              <line x1="1280" y1="432" x2="1248" y2="412" />
              <line x1="1280" y1="432" x2="1312" y2="412" />
            </g>
          </g>
        </svg>

        {/* ================= LAYER 2: LAYERED ABSTRACT MOUNTAINS ================= */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none z-0">
          <svg
            className="w-full h-48 sm:h-64 md:h-88"
            viewBox="0 0 1440 380"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon
              fill="#a8cdc6"
              fillOpacity="0.45"
              points="0,170 200,85 400,165 640,65 880,180 1080,85 1280,175 1440,110 1440,380 0,380"
            />
            <polygon
              fill="#83b9af"
              fillOpacity="0.60"
              points="0,225 180,140 370,230 600,115 820,225 1040,125 1260,220 1440,155 1440,380 0,380"
            />
            <polygon
              fill="#5f9e93"
              fillOpacity="0.75"
              points="0,270 220,185 460,280 720,165 960,290 1180,180 1360,265 1440,210 1440,380 0,380"
            />
            <polygon
              fill="#3a8275"
              fillOpacity="0.85"
              points="0,320 250,240 520,335 800,215 1090,340 1310,245 1440,305 1440,380 0,380"
            />
          </svg>
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 md:h-40 bg-gradient-to-t from-[#faf6ee] via-[#faf6ee]/70 to-transparent" />
        </div>

        {/* ================= HERO FOREGROUND CONTENT ================= */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#fdfbf7]/90 backdrop-blur-xs border border-[#dccdb2] shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3a8c7e] animate-pulse" />
            <p className="text-xs font-semibold text-[#1f5c54] tracking-[0.2em] uppercase">
              Dispatches from the Ground
            </p>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1a332d] leading-tight tracking-tight">
            Stories from <span className="text-[#1f5c54] italic font-serif">Real Bharat</span>
          </h1>

          <p className="font-serif italic text-base sm:text-xl text-[#2f1e10] max-w-2xl mx-auto leading-relaxed font-normal">
            Deep-dives, field diaries, student research, and voices from our grassroots immersion cohorts.
          </p>
        </div>

      </section>

      {/* ================= EDITORIAL TIMELINE ALTERNATING ARTICLES LAYOUT ================= */}
      <section className="px-4 sm:px-6 md:px-8 py-16 md:py-24 max-w-5xl mx-auto relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-1.5 border-b border-[#dccdb2] pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebe2d1] border border-[#dccdb2] mb-2">
              <Sparkles size={12} className="text-[#c8880a]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1f5c54]">FIELD DISPATCHES</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#3e2410]">
              Stories &amp; Cohort Notes
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#7a5232] font-light max-w-md leading-relaxed">
            Read detailed journals, case studies, and field observations written across our rural cohorts.
          </p>
        </div>

        {/* Timeline Articles Container */}
        <div className="relative">
          
          {/* Vertical Timeline Guide Line (Desktop / Tablet) */}
          <div className="hidden md:block absolute top-6 bottom-6 left-[82px] w-[1.5px] bg-[#dccdb2]" />

          {/* Timeline Items List */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {allBlogs.map((blog, idx) => {
              const { dayMonth, year } = formatTimelineDate(blog.date)
              const isEven = idx % 2 === 0

              return (
                <div
                  key={blog.slug}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 md:gap-10 group"
                >
                  {/* Left Column: Timeline Date & Node Indicator */}
                  <div className="shrink-0 flex md:flex-col items-center md:items-end justify-between w-full md:w-[72px] pr-0 md:pr-4 text-left md:text-right relative">
                    <div className="space-y-0.5">
                      <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#3e2410] uppercase font-sans">
                        {dayMonth}
                      </p>
                      {year && (
                        <p className="text-[11px] text-[#7a5232] font-light font-mono">
                          {year}
                        </p>
                      )}
                    </div>

                    {/* Timeline Circular Dot on the vertical line (Desktop) */}
                    <div className="hidden md:block absolute -right-[15px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#1f5c54] border-2 border-[#faf6ee] shadow-xs group-hover:scale-125 group-hover:bg-[#3a8c7e] transition-all duration-300 z-10" />
                  </div>

                  {/* Right Column: Alternating Card Layout */}
                  <div className="flex-1 w-full pl-0 md:pl-6">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="block p-5 sm:p-7 md:p-8 rounded-3xl bg-[#fdfbf7] border border-[#dccdb2] hover:border-[#3a8c7e]/60 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                        
                        {/* If isEven: Image on Left, Content on Right */}
                        {isEven ? (
                          <>
                            {/* Image Box */}
                            <div className="relative h-52 sm:h-60 w-full rounded-2xl overflow-hidden bg-[#ebe2d1] order-1">
                              <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>

                            {/* Content Box */}
                            <div className="space-y-2.5 order-2">
                              <p className="text-[11px] font-semibold tracking-widest text-[#8a6a44] uppercase">
                                {blog.category}
                              </p>
                              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1a332d] group-hover:text-[#1f5c54] transition-colors leading-snug">
                                {blog.title}
                              </h3>
                              <p className="text-xs sm:text-[13.5px] text-[#7a5232] font-light leading-relaxed line-clamp-3">
                                {blog.excerpt}
                              </p>
                              
                              <div className="pt-2 flex items-center justify-between border-t border-[#dccdb2]/40 text-xs text-[#7a5232] mt-3">
                                <span className="flex items-center gap-1 font-light">
                                  <Clock size={12} className="text-[#c8880a]" />
                                  {blog.readTime}
                                </span>
                                <span className="font-semibold text-[#1f5c54] group-hover:text-[#3a8c7e] flex items-center gap-1">
                                  <span>Read Story</span>
                                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                              </div>
                            </div>
                          </>
                        ) : (
                          /* If isOdd: Content on Left, Image on Right */
                          <>
                            {/* Content Box */}
                            <div className="space-y-2.5 order-2 md:order-1">
                              <p className="text-[11px] font-semibold tracking-widest text-[#8a6a44] uppercase">
                                {blog.category}
                              </p>
                              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1a332d] group-hover:text-[#1f5c54] transition-colors leading-snug">
                                {blog.title}
                              </h3>
                              <p className="text-xs sm:text-[13.5px] text-[#7a5232] font-light leading-relaxed line-clamp-3">
                                {blog.excerpt}
                              </p>

                              <div className="pt-2 flex items-center justify-between border-t border-[#dccdb2]/40 text-xs text-[#7a5232] mt-3">
                                <span className="flex items-center gap-1 font-light">
                                  <Clock size={12} className="text-[#c8880a]" />
                                  {blog.readTime}
                                </span>
                                <span className="font-semibold text-[#1f5c54] group-hover:text-[#3a8c7e] flex items-center gap-1">
                                  <span>Read Story</span>
                                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                              </div>
                            </div>

                            {/* Image Box */}
                            <div className="relative h-52 sm:h-60 w-full rounded-2xl overflow-hidden bg-[#ebe2d1] order-1 md:order-2">
                              <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </>
                        )}

                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </section>

    </main>
  )
}
