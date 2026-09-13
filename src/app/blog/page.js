import React from "react"
import Link from "next/link"
import Image from "next/image"
import { blogsData } from "@/data/blogsData"
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react"

export default function BlogHubPage() {
  const allBlogs = blogsData

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#f5efe2] text-[#3e2410] selection:bg-[#3a8c7e]/25 selection:text-[#3e2410]">

      {/* ================= HERO SECTION (MATCHING EXACT REFERENCE DESIGN) ================= */}
      <section className="relative overflow-hidden min-h-[500px] md:min-h-[560px] pt-28 sm:pt-36 md:pt-40 pb-28 sm:pb-36 md:pb-40 bg-[#faf6ee] border-b border-[#dccdb2]/60 flex flex-col justify-center">

        {/* ================= LAYER 1: WARLI MOTIF ASYMMETRIC EDGE SCATTER (INLINE SVG) ================= */}
        {/* Exact hand-drawn motif positioning matching Image 2 */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none select-none -z-20"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g
            stroke="#60968b"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.55"
          >
            {/* ---------------- 1. TOP-LEFT CLUSTER ---------------- */}
            {/* Tarpa Dance Pair Holding Hands */}
            <g transform="translate(40, 0)">
              {/* Left Figure */}
              <circle cx="100" cy="75" r="7" />
              <line x1="100" y1="82" x2="100" y2="108" />
              <line x1="84" y1="92" x2="116" y2="102" />
              <line x1="84" y1="102" x2="116" y2="92" />
              <line x1="100" y1="108" x2="86" y2="134" />
              <line x1="100" y1="108" x2="114" y2="134" />

              {/* Handshake connector line */}
              <line x1="116" y1="97" x2="164" y2="97" />

              {/* Right Figure */}
              <circle cx="180" cy="75" r="7" />
              <line x1="180" y1="82" x2="180" y2="108" />
              <line x1="164" y1="92" x2="196" y2="102" />
              <line x1="164" y1="102" x2="196" y2="92" />
              <line x1="180" y1="108" x2="166" y2="134" />
              <line x1="180" y1="108" x2="194" y2="134" />
            </g>

            {/* Tree 1 (Top-Left) */}
            <g transform="translate(40, 0)">
              <line x1="290" y1="150" x2="290" y2="55" strokeWidth="2" />
              <line x1="290" y1="78" x2="265" y2="60" />
              <line x1="290" y1="78" x2="315" y2="60" />
              <line x1="290" y1="102" x2="258" y2="82" />
              <line x1="290" y1="102" x2="322" y2="82" />
              <line x1="290" y1="126" x2="252" y2="104" />
              <line x1="290" y1="126" x2="328" y2="104" />
            </g>

            {/* Small Tree Branch (Top-Left Center) */}
            <g transform="translate(40, 0)">
              <line x1="420" y1="110" x2="420" y2="50" strokeWidth="1.8" />
              <line x1="420" y1="72" x2="398" y2="56" />
              <line x1="420" y1="72" x2="442" y2="56" />
            </g>

            {/* ---------------- 2. MID-LEFT MOTIFS ---------------- */}
            {/* Big Tribal Hut (Mid-Left) */}
            <g transform="translate(30, 0)">
              <polygon points="110,210 155,165 200,210" />
              <polyline points="118,210 118,265 192,265 192,210" />
            </g>

            {/* Sun with Radiating Ticks (Mid-Left) */}
            <g transform="translate(20, 0)">
              <circle cx="285" cy="210" r="18" />
              <line x1="285" y1="184" x2="285" y2="174" />
              <line x1="285" y1="236" x2="285" y2="246" />
              <line x1="259" y1="210" x2="249" y2="210" />
              <line x1="311" y1="210" x2="321" y2="210" />
              <line x1="267" y1="192" x2="260" y2="185" />
              <line x1="303" y1="228" x2="310" y2="235" />
              <line x1="267" y1="228" x2="260" y2="235" />
              <line x1="303" y1="192" x2="310" y2="185" />
            </g>

            {/* ---------------- 3. BOTTOM-LEFT MOTIFS (On/Behind Hills) ---------------- */}
            <g transform="translate(10, 0)">
              {/* Lower Hut */}
              <polygon points="110,440 145,405 180,440" />
              <polyline points="116,440 116,480 174,480 174,440" />

              {/* Lower Stick Figure */}
              <circle cx="240" cy="430" r="7" />
              <line x1="240" y1="437" x2="240" y2="463" />
              <line x1="224" y1="447" x2="256" y2="457" />
              <line x1="224" y1="457" x2="256" y2="447" />
              <line x1="240" y1="463" x2="226" y2="488" />
              <line x1="240" y1="463" x2="254" y2="488" />
            </g>

            {/* ---------------- 4. TOP-RIGHT CLUSTER ---------------- */}
            {/* Stick Figure 1 (Top-Right Inner) */}
            <g>
              <circle cx="940" cy="85" r="7" />
              <line x1="940" y1="92" x2="940" y2="118" />
              <line x1="924" y1="102" x2="956" y2="112" />
              <line x1="924" y1="112" x2="956" y2="102" />
              <line x1="940" y1="118" x2="926" y2="144" />
              <line x1="940" y1="118" x2="954" y2="144" />
            </g>

            {/* Triangular Tree (Top-Right) */}
            <g>
              <line x1="1090" y1="155" x2="1090" y2="60" strokeWidth="2" />
              <line x1="1090" y1="84" x2="1065" y2="66" />
              <line x1="1090" y1="84" x2="1115" y2="66" />
              <line x1="1090" y1="108" x2="1058" y2="88" />
              <line x1="1090" y1="108" x2="1122" y2="88" />
              <line x1="1090" y1="132" x2="1052" y2="110" />
              <line x1="1090" y1="132" x2="1128" y2="110" />
            </g>

            {/* Stick Figure 2 (Top-Right Outer) */}
            <g>
              <circle cx="1230" cy="85" r="7" />
              <line x1="1230" y1="92" x2="1230" y2="118" />
              <line x1="1214" y1="102" x2="1246" y2="112" />
              <line x1="1214" y1="112" x2="1246" y2="102" />
              <line x1="1230" y1="118" x2="1216" y2="144" />
              <line x1="1230" y1="118" x2="1244" y2="144" />
            </g>

            {/* ---------------- 5. MID-RIGHT MOTIFS ---------------- */}
            {/* Big Tribal Hut (Mid-Right) */}
            <g>
              <polygon points="1170,225 1215,180 1260,225" />
              <polyline points="1178,225 1178,280 1252,280 1252,225" />
            </g>

            {/* Sun with Radiating Ticks (Mid-Right) */}
            <g>
              <circle cx="1310" cy="215" r="20" />
              <line x1="1310" y1="186" x2="1310" y2="174" />
              <line x1="1310" y1="244" x2="1310" y2="256" />
              <line x1="1281" y1="215" x2="1269" y2="215" />
              <line x1="1339" y1="215" x2="1351" y2="215" />
              <line x1="1290" y1="195" x2="1281" y2="186" />
              <line x1="1330" y1="235" x2="1339" y2="244" />
              <line x1="1290" y1="235" x2="1281" y2="244" />
              <line x1="1330" y1="195" x2="1339" y2="186" />
            </g>

            {/* ---------------- 6. BOTTOM-RIGHT MOTIFS (On/Behind Hills) ---------------- */}
            <g>
              {/* Lower Tree */}
              <line x1="1280" y1="465" x2="1280" y2="385" strokeWidth="2" />
              <line x1="1280" y1="405" x2="1258" y2="390" />
              <line x1="1280" y1="405" x2="1302" y2="390" />
              <line x1="1280" y1="425" x2="1252" y2="408" />
              <line x1="1280" y1="425" x2="1308" y2="408" />
            </g>
          </g>
        </svg>

        {/* ================= LAYER 2: SAHYADRI HILL SILHOUETTES (MATCHING IMAGE 2 EXACTLY) ================= */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none -z-10">
          <svg
            className="w-full h-44 sm:h-64 md:h-80"
            viewBox="0 0 1440 380"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Back Mountain Ridge (Light Sage Teal) */}
            <polygon
              fill="#3a8c7e"
              fillOpacity="0.20"
              points="0,200 220,105 400,195 650,75 880,210 1080,100 1280,205 1440,130 1440,380 0,380"
            />

            {/* Middle Mountain Ridge (Medium Sage Teal) */}
            <polygon
              fill="#3a8c7e"
              fillOpacity="0.34"
              points="0,260 180,165 390,270 690,135 940,285 1160,150 1350,255 1440,190 1440,380 0,380"
            />

            {/* Front Mountain Ridge (Deepest Foreground Teal) */}
            <polygon
              fill="#2c6a5f"
              fillOpacity="0.48"
              points="0,320 250,230 520,325 800,200 1090,330 1310,235 1440,295 1440,380 0,380"
            />
          </svg>

          {/* ================= LAYER 3: SOFT MIST GRADIENT AT BASE ================= */}
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 md:h-44 bg-gradient-to-t from-[#faf6ee] via-[#faf6ee]/80 to-transparent" />
        </div>

        {/* ================= HERO FOREGROUND CONTENT (CENTER 45% CLEAR & CRISP) ================= */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          
          {/* Eyebrow Pill Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#fdfbf7] border border-[#dccdb2] shadow-xs">
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
