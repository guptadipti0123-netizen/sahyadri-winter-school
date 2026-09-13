import React from "react"
import Link from "next/link"
import Image from "next/image"
import { blogsData } from "@/data/blogsData"
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react"

export default function BlogHubPage() {
  const allBlogs = blogsData

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#f5efe2] dark:bg-[#0e1f1c] text-[#3e2410] dark:text-[#e8f0ec] selection:bg-[#3a8c7e]/25 selection:text-[#3e2410]">

      {/* ================= HERO SECTION WITH LAYERED CULTURAL COMPOSITION ================= */}
      <section className="relative pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-24 md:pb-28 overflow-hidden bg-[#faf7f0] dark:bg-[#0e1f1c] border-b border-[#dccdb2]/50 dark:border-[#1f5c54]/30">

        {/* --- LAYER 1: Paper Grain Noise Filter (Authentic Field Notebook Texture) --- */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.045] mix-blend-multiply dark:opacity-[0.035] dark:mix-blend-overlay -z-30"
          aria-hidden="true"
        >
          <filter id="field-notebook-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.85 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#field-notebook-grain)" />
        </svg>

        {/* --- LAYER 2: Authentic Geometric Warli Motif Pattern (Drifting SVG Pattern) --- */}
        <div className="absolute inset-0 pointer-events-none select-none -z-20 overflow-hidden">
          <svg className="w-full h-full opacity-[0.07] dark:opacity-[0.10] warli-drift-layer" aria-hidden="true">
            <defs>
              {/* Desktop Pattern (120px) */}
              <pattern id="warli-desktop" width="120" height="120" patternUnits="userSpaceOnUse">
                <g stroke="#3a8c7e" className="dark:stroke-[#5ab8a8]" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  {/* Single Warli Figure (Circle head, triangular torso, straight stick limbs) */}
                  <circle cx="28" cy="22" r="4" />
                  <polygon points="23,28 33,28 23,40 33,40" />
                  <line x1="23" y1="32" x2="16" y2="26" />
                  <line x1="33" y1="32" x2="40" y2="26" />
                  <line x1="25" y1="40" x2="20" y2="52" />
                  <line x1="31" y1="40" x2="36" y2="52" />

                  {/* Tarpa Dance Pair Holding Hands */}
                  <circle cx="58" cy="22" r="4" />
                  <polygon points="53,28 63,28 53,40 63,40" />
                  <line x1="53" y1="32" x2="47" y2="34" />
                  <line x1="63" y1="32" x2="73" y2="32" />
                  <line x1="55" y1="40" x2="50" y2="52" />
                  <line x1="61" y1="40" x2="66" y2="52" />

                  <circle cx="78" cy="22" r="4" />
                  <polygon points="73,28 83,28 73,40 83,40" />
                  <line x1="73" y1="32" x2="63" y2="32" />
                  <line x1="83" y1="32" x2="89" y2="26" />
                  <line x1="75" y1="40" x2="70" y2="52" />
                  <line x1="81" y1="40" x2="86" y2="52" />

                  {/* Triangular Sacred Tree (Straight trunk + herringbone branches) */}
                  <line x1="102" y1="58" x2="102" y2="18" strokeWidth="1.8" />
                  <line x1="102" y1="26" x2="94" y2="19" />
                  <line x1="102" y1="26" x2="110" y2="19" />
                  <line x1="102" y1="35" x2="92" y2="28" />
                  <line x1="102" y1="35" x2="112" y2="28" />
                  <line x1="102" y1="44" x2="90" y2="37" />
                  <line x1="102" y1="44" x2="114" y2="37" />
                  <line x1="102" y1="53" x2="92" y2="46" />
                  <line x1="102" y1="53" x2="112" y2="46" />

                  {/* Traditional Tribal Hut with Pitched Roof & Frame */}
                  <polygon points="16,92 28,78 40,92" />
                  <polyline points="20,92 20,106 36,106 36,92" />
                  <line x1="25" y1="106" x2="25" y2="98" />
                  <line x1="31" y1="106" x2="31" y2="98" />
                  <line x1="25" y1="98" x2="31" y2="98" />

                  {/* Small Sun Circle with Minimal Cardinal Rays */}
                  <circle cx="85" cy="88" r="7" />
                  <line x1="85" y1="77" x2="85" y2="79" />
                  <line x1="85" y1="97" x2="85" y2="99" />
                  <line x1="74" y1="88" x2="76" y2="88" />
                  <line x1="94" y1="88" x2="96" y2="88" />
                </g>
              </pattern>

              {/* Mobile Pattern (80px) */}
              <pattern id="warli-mobile" width="80" height="80" patternUnits="userSpaceOnUse">
                <g stroke="#3a8c7e" className="dark:stroke-[#5ab8a8]" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="scale(0.666)">
                  <circle cx="28" cy="22" r="4" />
                  <polygon points="23,28 33,28 23,40 33,40" />
                  <line x1="23" y1="32" x2="16" y2="26" />
                  <line x1="33" y1="32" x2="40" y2="26" />
                  <line x1="25" y1="40" x2="20" y2="52" />
                  <line x1="31" y1="40" x2="36" y2="52" />

                  <line x1="102" y1="58" x2="102" y2="18" strokeWidth="1.8" />
                  <line x1="102" y1="26" x2="94" y2="19" />
                  <line x1="102" y1="26" x2="110" y2="19" />
                  <line x1="102" y1="38" x2="92" y2="30" />
                  <line x1="102" y1="38" x2="112" y2="30" />

                  <polygon points="16,92 28,78 40,92" />
                  <polyline points="20,92 20,106 36,106 36,92" />

                  <circle cx="85" cy="88" r="7" />
                </g>
              </pattern>
            </defs>

            {/* Responsive Pattern fill */}
            <rect width="100%" height="100%" fill="url(#warli-desktop)" className="hidden sm:block" />
            <rect width="100%" height="100%" fill="url(#warli-mobile)" className="block sm:hidden" />
          </svg>
        </div>

        {/* --- LAYER 3: Jagged Sahyadri Mountain Plateau Silhouettes (3 Overlapping Layers) --- */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none -z-10">
          <svg
            className="w-full h-32 sm:h-44 md:h-56"
            viewBox="0 0 1440 260"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Back Mountain Ridge (16% Opacity, Asymmetric Basalt Escarpments - Hidden on small mobile for clean simplicity) */}
            <path
              fill="#3a8c7e"
              fillOpacity="0.16"
              className="hidden sm:block dark:fill-[#5ab8a8] dark:fill-opacity-15"
              d="M0,190 L140,120 L220,90 L340,140 L460,80 L580,135 L700,70 L840,150 L980,90 L1120,165 L1260,105 L1380,150 L1440,110 L1440,260 L0,260 Z"
            />

            {/* Middle Mountain Ridge (30% Opacity, Rugged Tableland Plateau Ridges) */}
            <path
              fill="#3a8c7e"
              fillOpacity="0.30"
              className="dark:fill-[#3a8c7e] dark:fill-opacity-25"
              d="M0,225 L160,160 L280,195 L400,130 L540,175 L680,120 L820,185 L960,135 L1100,190 L1240,145 L1360,195 L1440,165 L1440,260 L0,260 Z"
            />

            {/* Front Mountain Ridge (45% Opacity, Deep Teal Foreground Crags) */}
            <path
              fill="#2c6a5f"
              fillOpacity="0.45"
              className="dark:fill-[#1b433c] dark:fill-opacity-50"
              d="M0,255 L180,210 L320,240 L480,185 L620,230 L780,180 L920,235 L1060,190 L1200,240 L1340,205 L1440,235 L1440,260 L0,260 Z"
            />
          </svg>

          {/* --- LAYER 4: Bottom Mist Gradient (Fades into articles grid) --- */}
          <div className="absolute inset-x-0 bottom-0 h-36 sm:h-44 md:h-48 bg-gradient-to-t from-[#faf7f0] via-[#faf7f0]/75 to-transparent dark:from-[#0e1f1c] dark:via-[#0e1f1c]/80" />
        </div>

        {/* --- LAYER 5: Soft Radial Glow Behind Text for WCAG AA Readability & Pop --- */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-radial from-[#faf7f0] via-[#faf7f0]/80 to-transparent dark:from-[#0e1f1c] dark:via-[#0e1f1c]/85 rounded-full blur-2xl pointer-events-none -z-10" />

          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdfbf7] dark:bg-[#162d28] border border-[#dccdb2] dark:border-[#2c6a5f]/40 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#3a8c7e] animate-pulse" />
            <p className="text-xs font-semibold text-[#1f5c54] dark:text-[#5ab8a8] tracking-[0.22em] uppercase">
              Dispatches from the Ground
            </p>
          </div>

          {/* Main H1 Title */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#12332e] dark:text-[#f5efe2] leading-tight tracking-tight">
            Stories from <span className="text-[#3a8c7e] dark:text-[#5ab8a8] italic font-serif">Real Bharat</span>
          </h1>

          {/* Subtitle */}
          <p className="font-serif italic text-base sm:text-xl text-[#3f5c56] dark:text-[#a8c7bf] max-w-2xl mx-auto leading-relaxed font-light">
            Deep-dives, field diaries, student research, and voices from our grassroots immersion cohorts.
          </p>
        </div>

        {/* CSS Motion Styles: Subtle Linear Infinite Warli Drift with Reduced Motion Support */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes warliDrift {
            0% { transform: translate(0, 0); }
            100% { transform: translate(120px, 120px); }
          }
          @media (prefers-reduced-motion: no-preference) {
            .warli-drift-layer {
              animation: warliDrift 60s linear infinite;
              will-change: transform;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .warli-drift-layer {
              animation: none;
            }
          }
        `}} />
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
              className="group bg-[#fdfbf7] dark:bg-[#122622] rounded-3xl overflow-hidden border border-[#dccdb2] dark:border-[#2c6a5f]/40 hover:border-[#3a8c7e]/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
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
