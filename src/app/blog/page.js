import React from "react"
import Link from "next/link"
import Image from "next/image"
import { blogsData } from "@/data/blogsData"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogHubPage() {
  const allBlogs = blogsData

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-[#fcfbf7]">

      {/* ================= 1. HERO SECTION WITH NATURAL PHOTO BACKGROUND (NO BLACK SHADE) ================= */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden flex items-center justify-center min-h-[440px] sm:min-h-[500px]">
        {/* Natural Background Image (No black shade) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/camp2/camp2-day1-i4.jpg"
            alt="Sahyadri Rural Connect Cohort at Karjat Camp"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle soft light gradient for top navbar visibility and bottom transition only */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#fcfbf7]/90" />
        </div>

        {/* Hero Content inside Frosted Card */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="bg-white/90 sm:bg-white/92 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-white/80 shadow-xl text-center space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
              <p className="text-xs sm:text-xs font-bold text-[#1b4332] tracking-wider uppercase">
                Dispatches from the Ground
              </p>
            </div>

            <h1 className="font-extrabold font-serif text-3xl sm:text-4xl md:text-5xl text-[#1c1917] leading-tight">
              Stories from <span className="text-[#2d6a4f] italic font-normal">Real Bharat</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-xl mx-auto font-normal leading-relaxed">
              Deep-dives, field diaries, student presentations, and voices from our grassroots immersion cohorts.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 2. ALL ARTICLES GRID ================= */}
      <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 max-w-7xl mx-auto relative z-10 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="space-y-1.5 border-b border-[#e5dec9] pb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2d6a4f]">
            FIELD DISPATCHES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1c1917]">
            Stories &amp; Cohort Notes
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-medium">
            Read detailed journals, case studies, and field observations written across our cohorts.
          </p>
        </div>

        {/* All Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-[#ebdcc6] hover:border-[#2d6a4f]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Thumbnail */}
                <div className="relative h-52 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                    {blog.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] sm:text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {blog.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c1917] group-hover:text-[#2d6a4f] transition-colors leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 sm:p-6 pt-0 flex items-center justify-between border-t border-gray-100 mt-2">
                <span className="text-[11px] sm:text-xs text-gray-500 font-medium">{blog.edition}</span>
                <div className="flex items-center gap-1 text-xs sm:text-sm font-bold text-[#2d6a4f] group-hover:text-[#1b4332]">
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
