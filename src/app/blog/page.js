"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { blogsData } from "@/data/blogsData"
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Feather, 
  Search, 
  X, 
  Compass,
  MapPin,
  FileText
} from "lucide-react"

export default function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const unique = Array.from(new Set(blogsData.map((b) => b.category).filter(Boolean)))
    return ["All", ...unique]
  }, [])

  // Filter blogs based on category and search term
  const filteredBlogs = useMemo(() => {
    return blogsData.filter((blog) => {
      const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory
      const matchesSearch = 
        !searchQuery.trim() ||
        blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.subtitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.author?.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#f5efe2] text-[#3e2410] selection:bg-[#3a8c7e]/25 selection:text-[#3e2410]">

      {/* ================= HERO SECTION WITH RICH SMOOTH THEMATIC BACKGROUND ================= */}
      <section className="relative pt-28 md:pt-36 pb-16 sm:pb-20 overflow-hidden border-b border-[#dccdb2]/60">
        
        {/* --- 1. Ambient Warm Sunlight & Mountain Mist Glows --- */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#3a8c7e]/12 via-[#c8880a]/8 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute top-16 left-10 w-[350px] h-[350px] bg-[#3a8c7e]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#c8880a]/12 rounded-full blur-[110px] pointer-events-none -z-10" />

        {/* --- 2. Literary Giant Background Watermark Text --- */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10 overflow-hidden">
          <span className="font-serif text-[13vw] sm:text-[11vw] font-bold text-[#3e2410]/[0.028] tracking-[0.2em] whitespace-nowrap uppercase transform -rotate-1">
            DISPATCHES • JOURNAL
          </span>
        </div>

        {/* --- 3. Smooth Topographic Contour Lines & Open Journal SVG Artwork --- */}
        <div className="absolute inset-0 pointer-events-none select-none -z-10">
          <svg className="w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 600">
            <defs>
              <linearGradient id="contourGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3a8c7e" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#c8880a" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#3a8c7e" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="contourGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#c8880a" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#3a8c7e" stopOpacity="0.12" />
              </linearGradient>
            </defs>

            {/* Sahyadri Elevation Contour Curves */}
            <path d="M-100,220 C250,140 500,320 850,210 C1100,130 1350,280 1550,200" fill="none" stroke="url(#contourGrad1)" strokeWidth="1.5" strokeDasharray="6,8" />
            <path d="M-50,300 C300,220 600,390 950,270 C1200,180 1400,340 1600,260" fill="none" stroke="url(#contourGrad2)" strokeWidth="1.2" />
            <path d="M-100,420 C200,360 480,480 800,390 C1150,290 1380,460 1550,380" fill="none" stroke="url(#contourGrad1)" strokeWidth="1" strokeDasharray="4,6" />
            <path d="M-80,120 C350,70 650,190 1000,110 C1250,50 1420,160 1600,100" fill="none" stroke="url(#contourGrad2)" strokeWidth="1" opacity="0.7" />

            {/* Subtle Sahyadri Ridge Horizon Profile at base of Hero */}
            <path d="M0,580 Q180,510 360,540 T720,490 T1080,530 T1440,495 L1440,600 L0,600 Z" fill="#ebe2d1" opacity="0.35" />
          </svg>

          {/* Left Decorative Watermark Icon: Open Field Notebook */}
          <div className="absolute top-24 left-[4%] hidden xl:block opacity-25 transform -rotate-12 text-[#1f5c54]">
            <BookOpen size={90} strokeWidth={1} />
          </div>

          {/* Right Decorative Watermark Icon: Feather Quill & Compass */}
          <div className="absolute top-28 right-[5%] hidden xl:block opacity-20 transform rotate-12 text-[#c8880a]">
            <Feather size={85} strokeWidth={1} />
          </div>
        </div>

        {/* --- 4. Hero Content Container --- */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#fdfbf7]/90 backdrop-blur-md border border-[#dccdb2] shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3a8c7e] animate-pulse" />
            <p className="text-xs font-semibold text-[#1f5c54] tracking-widest uppercase flex items-center gap-1.5">
              <Compass size={13} className="text-[#3a8c7e]" />
              Dispatches from the Ground
            </p>
            <span className="text-[#dccdb2]">•</span>
            <span className="text-[11px] text-[#7a5232] font-mono">19°02&apos;N, 73°19&apos;E</span>
          </div>

          {/* Main Title */}
          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#3e2410] leading-[1.1] tracking-tight">
              Stories from <span className="text-[#1f5c54] italic font-serif relative">
                Real Bharat
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#c8880a]/40" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="font-serif italic text-lg sm:text-2xl text-[#7a5232] max-w-3xl mx-auto leading-relaxed font-light">
              Deep-dives, field diaries, student research, and voices from our grassroots immersion cohorts.
            </p>
          </div>

          {/* Floating Subtle Micro Badges for Context (Visible on md+ screens) */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#7a5232]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdfbf7]/70 border border-[#dccdb2]/80 backdrop-blur-xs">
              <FileText size={13} className="text-[#3a8c7e]" />
              <span><strong>{blogsData.length}</strong> Cohort Dispatches</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdfbf7]/70 border border-[#dccdb2]/80 backdrop-blur-xs">
              <MapPin size={13} className="text-[#c8880a]" />
              <span>Western Ghats • Karjat • Palghar</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdfbf7]/70 border border-[#dccdb2]/80 backdrop-blur-xs">
              <Feather size={13} className="text-[#1f5c54]" />
              <span>Peer-Authored Field Notes</span>
            </div>
          </div>

          {/* --- Interactive Search & Discovery Box --- */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative flex items-center">
              <Search size={18} className="absolute left-4 text-[#7a5232]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search journals, topics, authors, or keywords..."
                className="w-full pl-11 pr-10 py-3 bg-[#fdfbf7] border border-[#dccdb2] rounded-full text-sm text-[#3e2410] placeholder-[#7a5232]/60 focus:outline-none focus:border-[#3a8c7e] focus:ring-2 focus:ring-[#3a8c7e]/20 transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 p-1 rounded-full text-[#7a5232] hover:text-[#3e2410] hover:bg-[#ebe2d1] transition-colors"
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>

          {/* --- Interactive Category Filter Pills --- */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const count = cat === "All" 
                ? blogsData.length 
                : blogsData.filter((b) => b.category === cat).length
              const isActive = selectedCategory === cat

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-[#1f5c54] text-[#f5efe2] shadow-sm scale-105"
                      : "bg-[#fdfbf7] text-[#7a5232] border border-[#dccdb2] hover:border-[#3a8c7e] hover:text-[#1f5c54]"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-[#3a8c7e] text-white" : "bg-[#ebe2d1] text-[#7a5232]"
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

        </div>
      </section>

      {/* ================= ALL ARTICLES GRID ================= */}
      <section className="px-4 sm:px-6 md:px-8 py-12 md:py-16 max-w-7xl mx-auto relative z-10 space-y-8 sm:space-y-10">
        
        {/* Section Header with dynamic results counter */}
        <div className="space-y-1.5 border-b border-[#dccdb2] pb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebe2d1] border border-[#dccdb2] mb-2">
              <Sparkles size={12} className="text-[#c8880a]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1f5c54]">FIELD DISPATCHES</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#3e2410]">
              {selectedCategory === "All" ? "Stories & Cohort Notes" : `${selectedCategory} Notes`}
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <p className="text-xs sm:text-sm text-[#7a5232] font-light">
              Showing <span className="font-semibold text-[#1f5c54]">{filteredBlogs.length}</span> of {blogsData.length} dispatches
            </p>
            {(selectedCategory !== "All" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchQuery("")
                }}
                className="text-xs font-semibold text-[#3a8c7e] hover:underline cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Articles Grid or Empty State */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredBlogs.map((blog) => (
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
        ) : (
          <div className="text-center py-16 px-4 bg-[#fdfbf7] rounded-3xl border border-[#dccdb2] space-y-3">
            <BookOpen size={40} className="mx-auto text-[#7a5232]/50" />
            <h3 className="font-serif text-xl text-[#3e2410]">No dispatches found</h3>
            <p className="text-xs sm:text-sm text-[#7a5232] max-w-md mx-auto">
              We couldn&apos;t find any stories matching &quot;{searchQuery}&quot;. Try searching with another keyword or reset the filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All")
                setSearchQuery("")
              }}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1f5c54] text-[#f5efe2] text-xs font-semibold hover:bg-[#3a8c7e] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

    </main>
  )
}
