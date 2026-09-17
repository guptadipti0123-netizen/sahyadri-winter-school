import React from "react"
import Link from "next/link"
import Image from "next/image"
import { blogsData } from "@/data/blogsData"
import { Calendar, Clock, ArrowRight } from "lucide-react"

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

      {/* ================= HERO SECTION (Rich Forest Teal Theme Banner) ================= */}
      <section className="relative overflow-hidden min-h-[340px] sm:min-h-[420px] md:min-h-[460px] pt-20 sm:pt-32 md:pt-40 pb-16 sm:pb-24 border-b border-[#123832] flex flex-col justify-center bg-gradient-to-br from-[#123832] via-[#1a4e45] to-[#0d2a25] text-white">

        {/* Warm Golden Sunlight & Teal Atmosphere */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[320px] bg-[#c8880a]/20 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-16 right-[-5%] w-80 h-80 bg-[#3a8c7e]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-[#c8880a]/15 rounded-full blur-3xl pointer-events-none" />

        {/* ================= HERO FOREGROUND CONTENT ================= */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4 sm:space-y-5">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#68d391] animate-pulse" />
            <p className="text-[11px] sm:text-xs font-semibold text-[#a7f3d0] tracking-[0.2em] uppercase font-sans">
              Dispatches from the Ground
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight tracking-tight drop-shadow-md">
            Stories from <span className="text-[#a7f3d0] italic font-serif">Real Bharat</span>
          </h1>

          {/* Subtitle */}
          <p className="font-serif italic text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed drop-shadow">
            Deep-dives, field diaries, student research, and voices from our grassroots immersion cohorts across Palghar, Karjat &amp; Jawhar.
          </p>

          {/* Theme Color Stat Pills */}
          <div className="pt-2 flex flex-wrap justify-center items-center gap-2.5 text-xs font-medium">
            <span className="px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-white shadow-sm">
              📖 5 Field Dispatches
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-[#3a8c7e]/50 text-[#a7f3d0] shadow-sm">
              📍 Palghar • Karjat • Jawhar
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-[#c8880a]/50 text-[#fcd34d] shadow-sm">
              🏔️ 3 Immersion Editions
            </span>
          </div>
        </div>

      </section>

      {/* ================= EDITORIAL TIMELINE ALTERNATING ARTICLES LAYOUT ================= */}
      <section className="px-3.5 sm:px-6 md:px-8 py-6 sm:py-10 md:py-16 max-w-5xl mx-auto relative z-10 space-y-5 sm:space-y-8 md:space-y-12">
        
        {/* Section Header */}
        <div className="space-y-1 border-b border-[#dccdb2] pb-3 sm:pb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-1.5 md:gap-4">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[#3e2410]">
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

          {/* Timeline Items List - tightly spaced on mobile */}
          <div className="space-y-3.5 sm:space-y-5 md:space-y-10">
            {allBlogs.map((blog, idx) => {
              const { dayMonth, year } = formatTimelineDate(blog.date)
              const isEven = idx % 2 === 0

              return (
                <div
                  key={blog.slug}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-1.5 sm:gap-3 md:gap-10 group"
                >
                  {/* Left Column: Timeline Date & Node Indicator */}
                  <div className="shrink-0 flex md:flex-col items-center md:items-end justify-between w-full md:w-[72px] px-1 md:px-0 md:pr-4 text-left md:text-right relative">
                    <div className="flex md:flex-col items-baseline md:items-end gap-1.5 md:gap-0">
                      <p className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider text-[#3e2410] uppercase font-sans">
                        {dayMonth}
                      </p>
                      {year && (
                        <p className="text-[10px] sm:text-[11px] text-[#7a5232] font-medium font-mono">
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
                      className="block p-3 sm:p-5 md:p-7 rounded-2xl md:rounded-3xl bg-[#fdfbf7] border border-[#dccdb2] hover:border-[#3a8c7e]/60 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 md:gap-8 items-center">
                        
                        {/* If isEven: Image on Left, Content on Right */}
                        {isEven ? (
                          <>
                            {/* Image Box */}
                            <div className="relative h-36 xs:h-40 sm:h-52 md:h-56 w-full rounded-xl md:rounded-2xl overflow-hidden bg-[#ebe2d1] order-1">
                              <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>

                            {/* Content Box */}
                            <div className="space-y-1 sm:space-y-2 order-2">
                              <p className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#8a6a44] uppercase">
                                {blog.category}
                              </p>
                              <h3 className="font-serif text-base sm:text-xl md:text-2xl font-normal text-[#1a332d] group-hover:text-[#1f5c54] transition-colors leading-snug">
                                {blog.title}
                              </h3>
                              <p className="text-xs sm:text-[13.5px] text-[#7a5232] font-light leading-relaxed line-clamp-2 sm:line-clamp-3">
                                {blog.excerpt}
                              </p>
                              
                              <div className="pt-1.5 flex items-center justify-between border-t border-[#dccdb2]/40 text-xs text-[#7a5232] mt-1.5">
                                <span className="flex items-center gap-1 font-light text-[11px] sm:text-xs">
                                  <Clock size={11} className="text-[#c8880a]" />
                                  {blog.readTime}
                                </span>
                                <span className="font-semibold text-[#1f5c54] group-hover:text-[#3a8c7e] flex items-center gap-1 text-[11px] sm:text-xs">
                                  <span>Read Story</span>
                                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                              </div>
                            </div>
                          </>
                        ) : (
                          /* If isOdd: Content on Left, Image on Right */
                          <>
                            {/* Content Box */}
                            <div className="space-y-1 sm:space-y-2 order-2 md:order-1">
                              <p className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#8a6a44] uppercase">
                                {blog.category}
                              </p>
                              <h3 className="font-serif text-base sm:text-xl md:text-2xl font-normal text-[#1a332d] group-hover:text-[#1f5c54] transition-colors leading-snug">
                                {blog.title}
                              </h3>
                              <p className="text-xs sm:text-[13.5px] text-[#7a5232] font-light leading-relaxed line-clamp-2 sm:line-clamp-3">
                                {blog.excerpt}
                              </p>

                              <div className="pt-1.5 flex items-center justify-between border-t border-[#dccdb2]/40 text-xs text-[#7a5232] mt-1.5">
                                <span className="flex items-center gap-1 font-light text-[11px] sm:text-xs">
                                  <Clock size={11} className="text-[#c8880a]" />
                                  {blog.readTime}
                                </span>
                                <span className="font-semibold text-[#1f5c54] group-hover:text-[#3a8c7e] flex items-center gap-1 text-[11px] sm:text-xs">
                                  <span>Read Story</span>
                                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                              </div>
                            </div>

                            {/* Image Box */}
                            <div className="relative h-36 xs:h-40 sm:h-52 md:h-56 w-full rounded-xl md:rounded-2xl overflow-hidden bg-[#ebe2d1] order-1 md:order-2">
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
