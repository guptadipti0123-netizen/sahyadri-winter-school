import React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { blogsData } from "@/data/blogsData"
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Sparkles, BookOpen, Quote, CheckCircle2 } from "lucide-react"

// Generate static params for all slugs
export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }))
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const blog = blogsData.find((b) => b.slug === slug)

  if (!blog) {
    notFound()
  }

  // Related articles (excluding current)
  const relatedArticles = blogsData.filter((b) => b.slug !== slug).slice(0, 2)

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#faf6ee] text-[#3e2410] selection:bg-[#3a8c7e]/25 selection:text-[#3e2410]">

      {/* ================= HERO HEADER ================= */}
      <section className="relative pt-16 sm:pt-28 md:pt-36 pb-12 sm:pb-16 overflow-hidden bg-[#faf6ee] text-[#3e2410] border-b border-[#dccdb2]/60">
        
        {/* Ambient Warm Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#3a8c7e]/15 rounded-full blur-[110px] pointer-events-none -z-10" />
        <div className="absolute top-16 right-[-10%] w-72 sm:w-96 h-72 sm:h-96 bg-[#c8880a]/12 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Top Skyline Ridge Silhouette */}
        <div className="absolute top-0 inset-x-0 h-36 sm:h-44 pointer-events-none select-none -z-10 opacity-25">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon
              fill="#1f5c54"
              points="0,0 1440,0 1440,50 1320,100 1180,45 960,115 760,35 540,105 320,45 140,80 0,35"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4 sm:space-y-5">
          
          {/* Back link */}
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#7a5232] hover:text-[#1f5c54] transition-colors group"
            >
              <ArrowLeft size={16} className="text-[#1f5c54] group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Stories</span>
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-[#fdfbf7] border border-[#dccdb2] text-[#1f5c54] text-xs font-bold uppercase tracking-wider shadow-2xs">
              {blog.category}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[#3a8c7e]/15 border border-[#3a8c7e]/30 text-[#1f5c54] text-xs font-semibold">
              {blog.edition}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[44px] leading-[1.2] text-[#1a0e06] tracking-tight">
            {blog.title}
          </h1>

          {blog.subtitle && (
            <p className="text-base sm:text-lg md:text-xl font-light text-[#7a5232] italic font-serif leading-relaxed">
              {blog.subtitle}
            </p>
          )}

          {/* Meta Bar */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#7a5232] pt-3 sm:pt-4 border-t border-[#dccdb2]/60 font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-[#1f5c54]" />
              {blog.date}
            </span>
            <span className="text-[#dccdb2]">•</span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#c8880a]" />
              {blog.readTime}
            </span>
            <span className="text-[#dccdb2]">•</span>
            <span>By {blog.author}</span>
          </div>

        </div>
      </section>

      {/* ================= ARTICLE CONTENT ================= */}
      <section className="py-8 sm:py-14 px-3.5 sm:px-6 max-w-4xl mx-auto">
        <div className="bg-[#fdfbf7] rounded-3xl border border-[#dccdb2] p-5 sm:p-10 md:p-14 shadow-sm space-y-7 sm:space-y-8">
          
          {/* Main Cover Image */}
          <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-[#dccdb2] shadow-xs">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Body Content */}
          <div className="space-y-6 text-[#3e2410] text-base sm:text-lg leading-relaxed font-light">
            {blog.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="font-serif text-2xl sm:text-3xl font-normal text-[#1a0e06] pt-6 border-t border-[#dccdb2]/60 first:border-none first:pt-0"
                  >
                    {block.text}
                  </h2>
                )
              }

              if (block.type === "quote") {
                return (
                  <blockquote
                    key={index}
                    className="relative my-6 p-6 rounded-2xl bg-[#faf6ee] border-l-4 border-[#3a8c7e] text-[#1f5c54] font-serif italic text-lg sm:text-xl leading-relaxed border border-[#dccdb2]/60"
                  >
                    <Quote className="w-8 h-8 text-[#3a8c7e]/25 absolute top-3 right-4 pointer-events-none" />
                    &quot;{block.text}&quot;
                  </blockquote>
                )
              }

              if (block.type === "list") {
                return (
                  <ul key={index} className="space-y-3.5 my-4">
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-[#7a5232]">
                        <CheckCircle2 className="w-5 h-5 text-[#3a8c7e] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )
              }

              return (
                <p key={index} className="text-[#3e2410]/90 leading-relaxed font-light">
                  {block.text}
                </p>
              )
            })}
          </div>

          {/* Author Card Footer */}
          <div className="mt-12 pt-8 border-t border-[#dccdb2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#faf6ee] p-6 rounded-2xl border border-[#dccdb2]/70">
            <div>
              <span className="text-xs font-semibold text-[#1f5c54] uppercase tracking-wider block">
                Published By
              </span>
              <h4 className="font-serif text-xl font-normal text-[#1a0e06] mt-0.5">
                {blog.author}
              </h4>
              <p className="text-xs text-[#7a5232] font-light">
                {blog.authorRole} • {blog.edition}
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fdfbf7] border border-[#dccdb2] text-[#1f5c54] hover:bg-[#1f5c54] hover:text-white text-xs font-semibold shadow-xs transition-all w-fit"
            >
              <ArrowLeft size={14} />
              <span>More Stories</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ================= RELATED STORIES ================= */}
      {relatedArticles.length > 0 && (
        <section className="pb-20 px-4 md:px-6 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#3e2410]">
              More Field Stories
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group bg-[#fdfbf7] rounded-3xl p-6 border border-[#dccdb2] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-semibold text-[#1f5c54] uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="font-serif font-normal text-lg sm:text-xl text-[#3e2410] group-hover:text-[#1f5c54] transition-colors leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#7a5232] font-light line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#dccdb2]/60 flex items-center justify-between text-xs font-semibold text-[#1f5c54]">
                    <span>Read Story</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  )
}

