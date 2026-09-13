import React from "react"
import Link from "next/link"
import Image from "next/image"
import { blogsData } from "@/data/blogsData"
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react"

export default function BlogHubPage() {
  const allBlogs = blogsData

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#f5efe2] text-[#3e2410] selection:bg-[#3a8c7e]/25 selection:text-[#3e2410]">

      {/* ================= HERO SECTION WITH WARLI ART & SAHYADRI HILLS ================= */}
      <section className="relative pt-28 md:pt-36 pb-20 sm:pb-24 overflow-hidden">
        
        {/* 1. Ambient Warm Sunlight & Mist Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#3a8c7e]/12 rounded-full blur-[110px] pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#c8880a]/12 rounded-full blur-[90px] pointer-events-none -z-10" />

        {/* 2. Warli Art Motif Pattern (Faint Repeating Background) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.065] pointer-events-none select-none -z-10" aria-hidden="true">
          <defs>
            <pattern id="warli-art" width="120" height="120" patternUnits="userSpaceOnUse">
              <g stroke="#1f5c54" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                {/* Warli Dancing Human Figures */}
                <circle cx="30" cy="24" r="4.5" fill="#1f5c54" />
                <path d="M25,29 L35,29 L25,43 L35,43 Z" fill="none" />
                <path d="M25,33 L18,26 M35,33 L42,26" />
                <path d="M27,43 L22,54 M33,43 L38,54" />

                {/* Second Dancing Figure */}
                <circle cx="50" cy="24" r="4.5" fill="#1f5c54" />
                <path d="M45,29 L55,29 L45,43 L55,43 Z" fill="none" />
                <path d="M45,33 L42,26 M55,33 L62,26" />
                <path d="M47,43 L42,54 M53,43 L58,54" />

                {/* Indigenous Sacred Tree / Plant */}
                <path d="M92,60 L92,25" strokeWidth="1.8" />
                <path d="M92,35 L82,27 M92,35 L102,27" />
                <path d="M92,44 L80,36 M92,44 L104,36" />
                <path d="M92,53 L84,47 M92,53 L100,47" />

                {/* Traditional Tribal Hut */}
                <path d="M18,98 L32,82 L46,98 Z" />
                <path d="M22,98 L22,110 L42,110 L42,98" />
                <path d="M28,110 L28,102 L36,102 L36,110" />

                {/* Sun & Radiant Birds */}
                <circle cx="95" cy="92" r="7" />
                <path d="M95,81 L95,84 M95,100 L95,103 M84,92 L87,92 M103,92 L106,92" />
                <path d="M68,80 Q74,75 80,80 Q86,75 92,80" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#warli-art)" />
        </svg>

        {/* 3. Layered Sahyadri Mountain Ridges (SVG Silhouettes) */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none -z-10">
          <svg className="w-full h-36 sm:h-48 md:h-56" viewBox="0 0 1440 240" preserveAspectRatio="none" aria-hidden="true">
            {/* Back Mountain Ridge (Lightest) */}
            <path
              fill="#3a8c7e"
              fillOpacity="0.15"
              d="M0,150 Q180,60 380,130 T780,60 T1180,140 T1440,80 L1440,240 L0,240 Z"
            />
            {/* Mid Mountain Ridge */}
            <path
              fill="#2c6a5f"
              fillOpacity="0.22"
              d="M0,185 Q220,110 440,170 T880,105 T1300,180 T1440,140 L1440,240 L0,240 Z"
            />
            {/* Front Mountain Ridge (Deepest) */}
            <path
              fill="#1f5c54"
              fillOpacity="0.28"
              d="M0,215 Q260,165 520,205 T1040,160 T1440,200 L1440,240 L0,240 Z"
            />
          </svg>

          {/* 4. Bottom Mist / Fog Gradient (Smooth blending into articles section) */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f5efe2] via-[#f5efe2]/75 to-transparent" />
        </div>

        {/* 5. Clean Hero Text Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdfbf7]/90 backdrop-blur-md border border-[#dccdb2] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#3a8c7e] animate-pulse" />
            <p className="text-xs font-semibold text-[#1f5c54] tracking-widest uppercase">
              Dispatches from the Ground
            </p>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#3e2410] leading-tight tracking-tight">
            Stories from <span className="text-[#1f5c54] italic font-serif">Real Bharat</span>
          </h1>

          <p className="font-serif italic text-base sm:text-xl text-[#7a5232] max-w-2xl mx-auto leading-relaxed font-light">
            Deep-dives, field diaries, student research, and voices from our grassroots immersion cohorts.
          </p>
        </div>
      </section>

      {/* ================= ALL ARTICLES GRID ================= */}
      <section className="px-4 sm:px-6 md:px-8 pb-20 max-w-7xl mx-auto relative z-10 space-y-8 sm:space-y-10">
        
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
