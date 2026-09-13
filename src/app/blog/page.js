import React from "react"
import Link from "next/link"
import Image from "next/image"
import { blogsData } from "@/data/blogsData"
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react"

export default function BlogHubPage() {
  const allBlogs = blogsData

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#f5efe2] dark:bg-[#0e1f1c] text-[#3e2410] dark:text-[#e8f0ec] selection:bg-[#3a8c7e]/25 selection:text-[#3e2410]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden min-h-[480px] md:min-h-[520px] pt-28 sm:pt-32 md:pt-40 pb-20 sm:pb-28 md:pb-32 bg-[#faf7f0] dark:bg-[#0e1f1c] border-b border-[#dccdb2]/50 dark:border-[#1f5c54]/30 flex flex-col justify-center">

        {/* ================= LAYER 1: WARLI MOTIF ASYMMETRIC EDGE SCATTER (INLINE SVG) ================= */}
        {/* Center 45% is completely clear so headline never fights a motif */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 dark:opacity-15 pointer-events-none select-none -z-20"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g
            stroke="#3a8c7e"
            className="dark:stroke-[#5ab8a8]"
            strokeWidth="1.3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* ---------------- TOP-LEFT CLUSTER ---------------- */}
            {/* Tarpa Dance Pair Holding Hands */}
            <g>
              <circle cx="140" cy="80" r="6" />
              <line x1="140" y1="86" x2="140" y2="108" />
              <line x1="126" y1="94" x2="154" y2="102" />
              <line x1="126" y1="102" x2="154" y2="94" />
              <line x1="140" y1="108" x2="128" y2="130" />
              <line x1="140" y1="108" x2="152" y2="130" />

              {/* Handshake connector */}
              <line x1="154" y1="98" x2="198" y2="98" />

              <circle cx="210" cy="80" r="6" />
              <line x1="210" y1="86" x2="210" y2="108" />
              <line x1="196" y1="94" x2="224" y2="102" />
              <line x1="196" y1="102" x2="224" y2="94" />
              <line x1="210" y1="108" x2="198" y2="130" />
              <line x1="210" y1="108" x2="222" y2="130" />
            </g>

            {/* Triangular Tree (Top-Left) */}
            <g className="hidden sm:block">
              <line x1="300" y1="145" x2="300" y2="65" />
              <line x1="300" y1="85" x2="278" y2="70" />
              <line x1="300" y1="85" x2="322" y2="70" />
              <line x1="300" y1="105" x2="272" y2="88" />
              <line x1="300" y1="105" x2="328" y2="88" />
              <line x1="300" y1="125" x2="268" y2="108" />
              <line x1="300" y1="125" x2="332" y2="108" />
            </g>

            {/* Small Top Tree (Left) */}
            <g className="hidden md:block">
              <line x1="430" y1="105" x2="430" y2="55" />
              <line x1="430" y1="72" x2="412" y2="60" />
              <line x1="430" y1="72" x2="448" y2="60" />
              <line x1="430" y1="88" x2="416" y2="76" />
              <line x1="430" y1="88" x2="444" y2="76" />
            </g>

            {/* ---------------- MID-LEFT MOTIFS ---------------- */}
            {/* Tribal Hut (Mid-Left) */}
            <g>
              <polygon points="145,215 185,180 225,215" />
              <polyline points="152,215 152,260 218,260 218,215" />
            </g>

            {/* Sun with Radiating Ticks (Mid-Left) */}
            <g className="hidden sm:block">
              <circle cx="310" cy="205" r="16" />
              <line x1="310" y1="181" x2="310" y2="173" />
              <line x1="310" y1="229" x2="310" y2="237" />
              <line x1="286" y1="205" x2="278" y2="205" />
              <line x1="334" y1="205" x2="342" y2="205" />
              <line x1="293" y1="188" x2="287" y2="182" />
              <line x1="327" y1="222" x2="333" y2="228" />
              <line x1="293" y1="222" x2="287" y2="228" />
              <line x1="327" y1="188" x2="333" y2="182" />
            </g>

            {/* ---------------- BOTTOM-LEFT MOTIFS (Near Hills) ---------------- */}
            <g className="hidden md:block">
              {/* Lower Hut */}
              <polygon points="115,445 150,415 185,445" />
              <polyline points="122,445 122,485 178,485 178,445" />

              {/* Lower Stick Figure */}
              <circle cx="240" cy="435" r="6" />
              <line x1="240" y1="441" x2="240" y2="463" />
              <line x1="226" y1="449" x2="254" y2="457" />
              <line x1="226" y1="457" x2="254" y2="449" />
              <line x1="240" y1="463" x2="228" y2="485" />
              <line x1="240" y1="463" x2="252" y2="485" />
            </g>

            {/* ---------------- TOP-RIGHT CLUSTER ---------------- */}
            {/* Stick Figure (Top-Right Inner) */}
            <g className="hidden md:block">
              <circle cx="930" cy="80" r="6" />
              <line x1="930" y1="86" x2="930" y2="108" />
              <line x1="916" y1="94" x2="944" y2="102" />
              <line x1="916" y1="102" x2="944" y2="94" />
              <line x1="930" y1="108" x2="918" y2="130" />
              <line x1="930" y1="108" x2="942" y2="130" />
            </g>

            {/* Triangular Tree (Top-Right) */}
            <g className="hidden sm:block">
              <line x1="1080" y1="145" x2="1080" y2="65" />
              <line x1="1080" y1="85" x2="1058" y2="70" />
              <line x1="1080" y1="85" x2="1102" y2="70" />
              <line x1="1080" y1="105" x2="1052" y2="88" />
              <line x1="1080" y1="105" x2="1108" y2="88" />
              <line x1="1080" y1="125" x2="1048" y2="108" />
              <line x1="1080" y1="125" x2="1112" y2="108" />
            </g>

            {/* Stick Figure (Top-Right Outer) */}
            <g>
              <circle cx="1220" cy="80" r="6" />
              <line x1="1220" y1="86" x2="1220" y2="108" />
              <line x1="1206" y1="94" x2="1234" y2="102" />
              <line x1="1206" y1="102" x2="1234" y2="94" />
              <line x1="1220" y1="108" x2="1208" y2="130" />
              <line x1="1220" y1="108" x2="1232" y2="130" />
            </g>

            {/* ---------------- MID-RIGHT MOTIFS ---------------- */}
            {/* Tribal Hut (Mid-Right) */}
            <g>
              <polygon points="1165,225 1205,190 1245,225" />
              <polyline points="1172,225 1172,270 1238,270 1238,225" />
            </g>

            {/* Sun with Radiating Ticks (Mid-Right) */}
            <g className="hidden sm:block">
              <circle cx="1300" cy="210" r="18" />
              <line x1="1300" y1="184" x2="1300" y2="176" />
              <line x1="1300" y1="236" x2="1300" y2="244" />
              <line x1="1274" y1="210" x2="1266" y2="210" />
              <line x1="1326" y1="210" x2="1334" y2="210" />
              <line x1="1282" y1="192" x2="1276" y2="186" />
              <line x1="1318" y1="228" x2="1324" y2="234" />
              <line x1="1282" y1="228" x2="1276" y2="234" />
              <line x1="1318" y1="192" x2="1324" y2="186" />
            </g>

            {/* ---------------- BOTTOM-RIGHT MOTIFS (Near Hills) ---------------- */}
            <g className="hidden md:block">
              <line x1="1270" y1="460" x2="1270" y2="395" />
              <line x1="1270" y1="412" x2="1252" y2="398" />
              <line x1="1270" y1="412" x2="1288" y2="398" />
              <line x1="1270" y1="428" x2="1248" y2="414" />
              <line x1="1270" y1="428" x2="1292" y2="414" />
            </g>
          </g>
        </svg>

        {/* ================= LAYER 2: SAHYADRI HILL SILHOUETTES (JAGGED GHATS PLATEAUS) ================= */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none -z-10">
          <svg
            className="w-full h-36 sm:h-52 md:h-64"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Back Mountain Ridge (16% Opacity - Hidden on small mobile for clean simplicity) */}
            <polygon
              fill="#3a8c7e"
              fillOpacity="0.16"
              className="hidden sm:block dark:fill-[#5ab8a8] dark:fill-opacity-15"
              points="0,170 240,75 420,165 620,60 840,185 1060,85 1280,180 1440,120 1440,320 0,320"
            />

            {/* Middle Mountain Ridge (30% Opacity) */}
            <polygon
              fill="#3a8c7e"
              fillOpacity="0.30"
              className="dark:fill-[#3a8c7e] dark:fill-opacity-25"
              points="0,225 180,140 380,235 680,115 920,250 1140,135 1340,230 1440,170 1440,320 0,320"
            />

            {/* Front Mountain Ridge (48% Opacity) */}
            <polygon
              fill="#2c6a5f"
              fillOpacity="0.48"
              className="dark:fill-[#1b433c] dark:fill-opacity-50"
              points="0,280 260,205 540,290 800,180 1080,295 1300,215 1440,265 1440,320 0,320"
            />
          </svg>

          {/* ================= LAYER 3: MIST GRADIENT ================= */}
          {/* Fades from #f5efe2 (95%) at bottom into transparent over hills area */}
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 md:h-44 bg-gradient-to-t from-[#f5efe2] via-[#f5efe2]/85 to-transparent dark:from-[#0e1f1c] dark:via-[#0e1f1c]/85" />
        </div>

        {/* ================= HERO FOREGROUND TEXT CONTENT (z-10, UNCHANGED) ================= */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdfbf7] dark:bg-[#162d28] border border-[#dccdb2] dark:border-[#2c6a5f]/40 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#3a8c7e] animate-pulse" />
            <p className="text-xs font-semibold text-[#1f5c54] dark:text-[#5ab8a8] tracking-widest uppercase">
              Dispatches from the Ground
            </p>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#3e2410] dark:text-[#f5efe2] leading-tight tracking-tight">
            Stories from <span className="text-[#1f5c54] dark:text-[#5ab8a8] italic font-serif">Real Bharat</span>
          </h1>

          <p className="font-serif italic text-base sm:text-xl text-[#7a5232] dark:text-[#a8c7bf] max-w-2xl mx-auto leading-relaxed">
            Deep-dives, field diaries, student research, and voices from our grassroots immersion cohorts.
          </p>
        </div>
      </section>

      {/* ================= ALL ARTICLES GRID ================= */}
      <section className="px-4 sm:px-6 md:px-8 pb-20 max-w-7xl mx-auto relative z-10 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="space-y-1.5 border-b border-[#dccdb2] dark:border-[#2c6a5f]/40 pb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebe2d1] dark:bg-[#162d28] border border-[#dccdb2] dark:border-[#2c6a5f]/40 mb-2">
              <Sparkles size={12} className="text-[#c8880a]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1f5c54] dark:text-[#5ab8a8]">FIELD DISPATCHES</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#3e2410] dark:text-[#f5efe2]">
              Stories &amp; Cohort Notes
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#7a5232] dark:text-[#a8c7bf] font-light max-w-md">
            Read detailed journals, case studies, and field observations written across our rural cohorts.
          </p>
        </div>

        {/* All Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group bg-[#fdfbf7] dark:bg-[#122622] rounded-3xl overflow-hidden border border-[#dccdb2] dark:border-[#2c6a5f]/40 hover:border-[#3a8c7e]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Thumbnail */}
                <div className="relative h-56 w-full bg-[#ebe2d1] dark:bg-[#162d28] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#fdfbf7]/90 dark:bg-[#122622]/90 backdrop-blur-md border border-[#dccdb2] dark:border-[#2c6a5f]/40 text-[#1f5c54] dark:text-[#5ab8a8] text-[10px] font-semibold uppercase tracking-wider">
                    {blog.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#7a5232] dark:text-[#a8c7bf] font-light">
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

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#3e2410] dark:text-[#f5efe2] group-hover:text-[#1f5c54] dark:group-hover:text-[#5ab8a8] transition-colors leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#7a5232] dark:text-[#a8c7bf] font-light leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#dccdb2]/60 dark:border-[#2c6a5f]/30 mt-2">
                <span className="text-xs text-[#7a5232] dark:text-[#a8c7bf] font-medium">{blog.edition}</span>
                <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#1f5c54] dark:text-[#5ab8a8] group-hover:text-[#3a8c7e]">
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
