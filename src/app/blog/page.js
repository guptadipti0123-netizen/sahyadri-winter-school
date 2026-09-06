"use client"
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { blogsData } from "@/data/blogsData"
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles, Filter, Search } from "lucide-react"

export default function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["All", "Field Stories", "Culture & Economy", "Ecology & Innovation", "Policy & Reflection", "Culture & Art"]

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Hero Featured Blog (e.g. Day 1)
  const heroBlog = blogsData[0]

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-frosted_mint/20">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-28 md:pt-36 pb-10 overflow-hidden">
        {/* Wave Background */}
        <div className="absolute inset-0 z-0">
          <svg viewBox="0 0 1440 800" className="absolute -top-[420px] left-0 w-full h-[800px] -z-10" preserveAspectRatio="none">
            <path fill="#1B4332" fillOpacity="0.95" d="M0,520 C200,620 420,420 640,500 C860,560 1080,650 1280,560 C1380,500 1440,480 1440,460 L1440,0 L0,0 Z" />
          </svg>
          <svg viewBox="0 0 1440 700" className="absolute -top-[300px] left-0 w-full h-[700px] -z-10" preserveAspectRatio="none">
            <path fill="#40916C" fillOpacity="0.8" d="M0,460 C220,540 420,360 660,440 C900,500 1120,580 1320,500 C1400,460 1440,440 1440,420 L1440,0 L0,0 Z" />
          </svg>
          <svg viewBox="0 0 1440 600" className="absolute -top-[180px] left-0 w-full h-[600px] -z-10" preserveAspectRatio="none">
            <path fill="#d8f3dc" fillOpacity="0.65" d="M0,380 C260,430 460,320 700,380 C940,420 1140,470 1340,410 C1400,380 1440,360 1440,340 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10 space-y-4">
          <h1 className="font-extrabold font-serif text-3xl sm:text-4xl md:text-6xl text-evergreen leading-tight drop-shadow-sm">
            Stories from <span className="text-sea_green italic">Real Bharat</span>
          </h1>

          <p className="text-base md:text-lg text-pine_teal/90 max-w-2xl mx-auto">
            Deep-dives, field diaries, student presentations, and voices from our grassroots immersion cohorts.
          </p>
        </div>
      </section>

      {/* ================= 2. FEATURED HERO BLOG ================= */}
      <section className="px-4 md:px-8 pb-10 max-w-6xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl border-2 border-celadon/60 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 grid lg:grid-cols-12 gap-0">
          
          {/* Image */}
          <div className="lg:col-span-6 relative h-64 lg:h-auto min-h-[300px] bg-gray-100">
            <Image
              src={heroBlog.image}
              alt={heroBlog.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-4 left-4 px-3 py-1 bg-sea_green text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
              Featured Story
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 p-6 md:p-10 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-pine_teal/80 font-semibold">
                <span className="text-sea_green font-bold uppercase">{heroBlog.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar size={13} />
                  {heroBlog.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {heroBlog.readTime}
                </span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-evergreen hover:text-sea_green transition-colors leading-snug">
                <Link href={`/blog/${heroBlog.slug}`}>{heroBlog.title}</Link>
              </h2>

              <p className="text-xs font-semibold text-pine_teal/70 italic">
                {heroBlog.subtitle}
              </p>

              <p className="text-pine_teal text-sm leading-relaxed line-clamp-3">
                {heroBlog.excerpt}
              </p>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-medium text-pine_teal/70">
                By {heroBlog.author}
              </span>
              <Link
                href={`/blog/${heroBlog.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sea_green to-dark_emerald text-white text-xs md:text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                Read Full Story
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. FILTER & SEARCH BAR ================= */}
      <section className="px-4 md:px-8 pb-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-celadon/50 shadow-xs">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-sea_green text-white shadow-xs"
                    : "bg-frosted_mint/40 text-pine_teal hover:bg-frosted_mint/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pine_teal/60" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-1.5 text-xs rounded-xl bg-white border border-celadon/60 focus:outline-none focus:border-sea_green text-evergreen placeholder:text-pine_teal/50"
            />
          </div>

        </div>
      </section>

      {/* ================= 4. ARTICLES GRID ================= */}
      <section className="px-4 md:px-8 pb-16 max-w-6xl mx-auto">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-celadon/40 p-8">
            <p className="text-pine_teal font-medium text-base">No stories match your filter.</p>
            <button
              onClick={() => {
                setSelectedCategory("All")
                setSearchQuery("")
              }}
              className="mt-3 px-4 py-2 bg-sea_green text-white text-xs font-bold rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-celadon/50 hover:border-sea_green shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
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

                  {/* Body */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-3 text-[11px] text-pine_teal/70 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {blog.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-evergreen group-hover:text-sea_green transition-colors leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-pine_teal/80 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between border-t border-gray-50 mt-2">
                  <span className="text-[11px] text-pine_teal/60 font-medium">{blog.edition}</span>
                  <div className="flex items-center gap-1 text-xs font-bold text-sea_green group-hover:text-dark_emerald">
                    <span>Read</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

    </main>
  )
}
