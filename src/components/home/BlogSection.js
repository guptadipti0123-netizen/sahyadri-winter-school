"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { blogsData } from "@/data/blogsData"
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react"

export default function BlogSection() {
  // Show top 3 recent stories on homepage
  const featuredBlogs = blogsData.slice(0, 3)

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-frosted_mint/30 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sea_green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mint_leaf/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-celadon shadow-xs text-sea_green text-[11px] font-bold tracking-widest uppercase">
              <BookOpen size={13} />
              <span>Voices & Reflections</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-evergreen">
              Stories from the <span className="italic text-sea_green">Field</span>
            </h2>
            <p className="text-pine_teal/80 text-sm md:text-base font-medium max-w-xl">
              Narratives, student reflections, and key takeaways from our rural immersion programs.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-evergreen hover:text-sea_green transition-colors group w-fit"
          >
            <span>View All Articles</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* BLOG CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border-2 border-celadon/50 hover:border-sea_green shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 sm:h-52 w-full bg-gray-100 overflow-hidden">
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

              {/* Read More Footer */}
              <div className="p-5 pt-0 flex items-center gap-1 text-xs font-bold text-sea_green group-hover:text-dark_emerald">
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
