"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { blogsData } from "@/data/blogsData"
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogSection() {
  // Show top 3 recent stories on homepage
  const featuredBlogs = blogsData.slice(0, 3)

  return (
    <section className="py-12 md:py-18 px-3.5 sm:px-6 md:px-8 bg-[#f5efe2] border-b border-[#dccdb2]/70 relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ebe2d1]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3a8c7e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdfbf7] border border-[#dccdb2] shadow-xs text-[#3a8c7e] text-[11px] font-semibold tracking-widest uppercase">
              <BookOpen size={13} className="text-[#c8880a]" />
              <span>Field Dispatches</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3e2410]">
              Stories from the <span className="italic text-[#3a8c7e]">Field</span>
            </h2>
            <p className="text-[#7a5232] text-sm md:text-base font-normal max-w-xl leading-relaxed">
              Narratives, student reflections, and key takeaways from our rural immersion programs across Maharashtra.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3e2410] hover:text-[#3a8c7e] transition-colors group w-fit"
          >
            <span>View All Stories</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-[#3a8c7e]" />
          </Link>
        </div>

        {/* BLOG CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="hover-lift group bg-[#fdfbf7] hover:bg-[#f5efe2] rounded-3xl overflow-hidden border border-[#dccdb2] hover:border-[#3a8c7e]/60 shadow-xs transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 sm:h-52 w-full bg-[#ebe2d1] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#241407]/70 backdrop-blur-md text-[#f5efe2] text-[10px] font-semibold uppercase tracking-wider border border-[#dccdb2]/20">
                    {blog.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] text-[#7a5232] font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-[#c8880a]" />
                      {blog.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-[#c4b49a]" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#3e2410] group-hover:text-[#3a8c7e] transition-colors leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#7a5232] leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="p-5 sm:p-6 pt-0 flex items-center gap-1.5 text-xs font-semibold text-[#3a8c7e] group-hover:text-[#1f5c54]">
                <span>Read Story</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

