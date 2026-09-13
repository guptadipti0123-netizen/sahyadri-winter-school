import React from "react"
import Link from "next/link"
import Image from "next/image"
import { blogsData } from "@/data/blogsData"
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react"

export default function BlogHubPage() {
  const allBlogs = blogsData

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#faf6ee] text-[#3e2410] selection:bg-[#3a8c7e]/25 selection:text-[#3e2410]">

      {/* ================= HERO SECTION (MATCHING 2ND REFERENCE DESIGN) ================= */}
      <section className="relative overflow-hidden min-h-[520px] md:min-h-[580px] pt-32 sm:pt-36 md:pt-44 pb-32 sm:pb-36 md:pb-44 bg-[#faf6ee] border-b border-[#dccdb2]/60 flex flex-col justify-center">

        {/* ================= LAYER 1: WARLI & NATURE LINE-ART SCATTER (VISIBLE & CRISP) ================= */}
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
            opacity="0.75"
          >
            {/* ---------------- 1. TOP-LEFT CLUSTER ---------------- */}
            {/* Tarpa Dance Pair Holding Hands */}
            <g transform="translate(30, 10)">
              {/* Left Figure */}
              <circle cx="100" cy="70" r="8" />
              <line x1="100" y1="78" x2="100" y2="108" />
              <line x1="82" y1="90" x2="118" y2="102" />
              <line x1="82" y1="102" x2="118" y2="90" />
              <line x1="100" y1="108" x2="84" y2="136" />
              <line x1="100" y1="108" x2="116" y2="136" />

              {/* Handshake connector */}
              <line x1="118" y1="96" x2="162" y2="96" strokeWidth="2.4" />

              {/* Right Figure */}
              <circle cx="180" cy="70" r="8" />
              <line x1="180" y1="78" x2="180" y2="108" />
              <line x1="162" y1="90" x2="198" y2="102" />
              <line x1="162" y1="102" x2="198" y2="90" />
              <line x1="180" y1="108" x2="164" y2="136" />
              <line x1="180" y1="108" x2="196" y2="136" />
            </g>

            {/* Tree 1 (Top-Left) */}
            <g transform="translate(30, 10)">
              <line x1="290" y1="155" x2="290" y2="50" strokeWidth="2.4" />
              <line x1="290" y1="76" x2="262" y2="58" />
              <line x1="290" y1="76" x2="318" y2="58" />
              <line x1="290" y1="102" x2="254" y2="80" />
              <line x1="290" y1="102" x2="326" y2="80" />
              <line x1="290" y1="128" x2="248" y2="104" />
              <line x1="290" y1="128" x2="332" y2="104" />
            </g>

            {/* Minimal Branch (Top-Left Center) */}
            <g transform="translate(30, 10)">
              <line x1="430" y1="110" x2="430" y2="45" strokeWidth="2.2" />
              <line x1="430" y1="70" x2="405" y2="52" />
              <line x1="430" y1="70" x2="455" y2="52" />
            </g>

            {/* ---------------- 2. MID-LEFT MOTIFS ---------------- */}
            {/* Simple House / Hut (Mid-Left) */}
            <g transform="translate(20, 0)">
              <polygon points="105,210 155,160 205,210" strokeWidth="2.4" />
              <polyline points="115,210 115,270 195,270 195,210" strokeWidth="2.4" />
            </g>

            {/* Sun with Radiating Ticks (Mid-Left) */}
            <g transform="translate(10, 0)">
              <circle cx="290" cy="210" r="20" strokeWidth="2.2" />
              <line x1="290" y1="180" x2="290" y2="170" strokeWidth="2.2" />
              <line x1="290" y1="240" x2="290" y2="250" strokeWidth="2.2" />
              <line x1="260" y1="210" x2="250" y2="210" strokeWidth="2.2" />
              <line x1="320" y1="210" x2="330" y2="210" strokeWidth="2.2" />
              <line x1="269" y1="189" x2="261" y2="181" strokeWidth="2.2" />
              <line x1="311" y1="231" x2="319" y2="239" strokeWidth="2.2" />
              <line x1="269" y1="231" x2="261" y2="239" strokeWidth="2.2" />
              <line x1="311" y1="189" x2="319" y2="181" strokeWidth="2.2" />
            </g>

            {/* ---------------- 3. BOTTOM-LEFT MOTIFS (On Mountains) ---------------- */}
            <g transform="translate(10, 0)">
              {/* Lower House */}
              <polygon points="105,440 145,400 185,440" strokeWidth="2.2" />
              <polyline points="112,440 112,485 178,485 178,440" strokeWidth="2.2" />

              {/* Lower Figure */}
              <circle cx="240" cy="430" r="8" />
              <line x1="240" y1="438" x2="240" y2="465" />
              <line x1="222" y1="448" x2="258" y2="458" />
              <line x1="222" y1="458" x2="258" y2="448" />
              <line x1="240" y1="465" x2="225" y2="492" />
              <line x1="240" y1="465" x2="255" y2="492" />
            </g>

            {/* ---------------- 4. TOP-RIGHT CLUSTER ---------------- */}
            {/* Figure 1 (Top-Right Inner) */}
            <g transform="translate(-10, 10)">
              <circle cx="930" cy="80" r="8" />
              <line x1="930" y1="88" x2="930" y2="118" />
              <line x1="912" y1="100" x2="948" y2="110" />
              <line x1="912" y1="110" x2="948" y2="100" />
              <line x1="930" y1="118" x2="915" y2="146" />
              <line x1="930" y1="118" x2="945" y2="146" />
            </g>

            {/* Triangular Tree (Top-Right) */}
            <g transform="translate(-10, 10)">
              <line x1="1080" y1="155" x2="1080" y2="50" strokeWidth="2.4" />
              <line x1="1080" y1="76" x2="1052" y2="58" />
              <line x1="1080" y1="76" x2="1108" y2="58" />
              <line x1="1080" y1="102" x2="1044" y2="80" />
              <line x1="1080" y1="102" x2="1116" y2="80" />
              <line x1="1080" y1="128" x2="1038" y2="104" />
              <line x1="1080" y1="128" x2="1122" y2="104" />
            </g>

            {/* Figure 2 (Top-Right Outer) */}
            <g transform="translate(-10, 10)">
              <circle cx="1230" cy="80" r="8" />
              <line x1="1230" y1="88" x2="1230" y2="118" />
              <line x1="1212" y1="100" x2="1248" y2="110" />
              <line x1="1212" y1="110" x2="1248" y2="100" />
              <line x1="1230" y1="118" x2="1215" y2="146" />
              <line x1="1230" y1="118" x2="1245" y2="146" />
            </g>

            {/* ---------------- 5. MID-RIGHT MOTIFS ---------------- */}
            {/* Simple House / Hut (Mid-Right) */}
            <g transform="translate(-15, 0)">
              <polygon points="1165,220 1215,170 1265,220" strokeWidth="2.4" />
              <polyline points="1175,220 1175,280 1255,280 1255,220" strokeWidth="2.4" />
            </g>

            {/* Sun with Radiating Ticks (Mid-Right) */}
            <g transform="translate(-10, 0)">
              <circle cx="1310" cy="210" r="22" strokeWidth="2.2" />
              <line x1="1310" y1="178" x2="1310" y2="166" strokeWidth="2.2" />
              <line x1="1310" y1="242" x2="1310" y2="254" strokeWidth="2.2" />
              <line x1="1278" y1="210" x2="1266" y2="210" strokeWidth="2.2" />
              <line x1="1342" y1="210" x2="1354" y2="210" strokeWidth="2.2" />
              <line x1="1287" y1="187" x2="1278" y2="178" strokeWidth="2.2" />
              <line x1="1333" y1="233" x2="1342" y2="242" strokeWidth="2.2" />
              <line x1="1287" y1="233" x2="1278" y2="242" strokeWidth="2.2" />
              <line x1="1333" y1="187" x2="1342" y2="178" strokeWidth="2.2" />
            </g>

            {/* ---------------- 6. BOTTOM-RIGHT MOTIFS (On Mountains) ---------------- */}
            <g transform="translate(-10, 0)">
              {/* Lower Tree */}
              <line x1="1280" y1="475" x2="1280" y2="385" strokeWidth="2.4" />
              <line x1="1280" y1="410" x2="1255" y2="392" />
              <line x1="1280" y1="410" x2="1305" y2="392" />
              <line x1="1280" y1="432" x2="1248" y2="412" />
              <line x1="1280" y1="432" x2="1312" y2="412" />
            </g>
          </g>
        </svg>

        {/* ================= LAYER 2: LAYERED ABSTRACT MOUNTAINS (BOLD, PROMINENT & BEAUTIFUL) ================= */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none z-0">
          <svg
            className="w-full h-48 sm:h-64 md:h-88"
            viewBox="0 0 1440 380"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Mountain Layer 1: Back Lightest Sage */}
            <polygon
              fill="#a8cdc6"
              fillOpacity="0.50"
              points="0,170 200,85 400,165 640,65 880,180 1080,85 1280,175 1440,110 1440,380 0,380"
            />

            {/* Mountain Layer 2: Medium Soft Sage */}
            <polygon
              fill="#83b9af"
              fillOpacity="0.65"
              points="0,225 180,140 370,230 600,115 820,225 1040,125 1260,220 1440,155 1440,380 0,380"
            />

            {/* Mountain Layer 3: Muted Forest Green */}
            <polygon
              fill="#5f9e93"
              fillOpacity="0.75"
              points="0,270 220,185 460,280 720,165 960,290 1180,180 1360,265 1440,210 1440,380 0,380"
            />

            {/* Mountain Layer 4: Deep Front Teal */}
            <polygon
              fill="#3a8275"
              fillOpacity="0.85"
              points="0,320 250,240 520,335 800,215 1090,340 1310,245 1440,305 1440,380 0,380"
            />
          </svg>

          {/* Soft Bottom Mist Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 md:h-40 bg-gradient-to-t from-[#faf6ee] via-[#faf6ee]/70 to-transparent" />
        </div>

        {/* ================= HERO FOREGROUND CONTENT (z-10 ON TOP) ================= */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#fdfbf7]/90 backdrop-blur-xs border border-[#dccdb2] shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3a8c7e] animate-pulse" />
            <p className="text-xs font-semibold text-[#1f5c54] tracking-[0.2em] uppercase">
              Dispatches from the Ground
            </p>
          </div>

          {/* Main H1 Title */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1a332d] leading-tight tracking-tight">
            Stories from <span className="text-[#1f5c54] italic font-serif">Real Bharat</span>
          </h1>

          {/* Subtitle */}
          <p className="font-serif italic text-base sm:text-xl text-[#5c5042] max-w-2xl mx-auto leading-relaxed font-light">
            Deep-dives, field diaries, student research, and voices from our grassroots immersion cohorts.
          </p>
        </div>

      </section>

      {/* ================= ALL ARTICLES GRID ================= */}
      <section className="px-4 sm:px-6 md:px-8 pb-20 max-w-7xl mx-auto relative z-10 space-y-8 sm:space-y-10 pt-12">
        
        {/* Section Header */}
        <div className="space-y-1.5 border-b border-[#dccdb2] pb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebe2d1] border border-[#dccdb2] mb-2">
              <Sparkles size={12} className="text-[#c8880a]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1f5c54]">FIELD DISPATCHES</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#3e2410]">
              Stories &amp; Cohort Notes
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#7a5232] font-light max-w-md">
            Read detailed journals, case studies, and field observations written across our rural cohorts.
          </p>
        </div>

        {/* All Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group bg-[#fdfbf7] rounded-3xl overflow-hidden border border-[#dccdb2] hover:border-[#3a8c7e]/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Thumbnail */}
                <div className="relative h-56 w-full bg-[#ebe2d1] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#fdfbf7]/90 backdrop-blur-md border border-[#dccdb2] text-[#1f5c54] text-[10px] font-semibold uppercase tracking-wider">
                    {blog.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#7a5232] font-light">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-[#3a8c7e]" />
                      {blog.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} className="text-[#c8880a]" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#3e2410] group-hover:text-[#1f5c54] transition-colors leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#7a5232] font-light leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#dccdb2]/60 mt-2">
                <span className="text-xs text-[#7a5232] font-medium">{blog.edition}</span>
                <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#1f5c54] group-hover:text-[#3a8c7e]">
                  <span>Read Story</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </section>

    </main>
  )
}
