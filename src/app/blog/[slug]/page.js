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

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#faf6ee] text-[#3e2410] selection:bg-[#3a8c7e]/25 selection:text-[#3e2410]">

      {/* ================= HERO HEADER (2-Column with Side Photo Card) ================= */}
      <section className="relative isolate pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-[#faede0] via-[#f7e6d5] to-[#f5efe2] text-[#3e2410] border-b border-[#dccdb2]/80">
        
        {/* Ambient Warm Atmosphere Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-[#3a8c7e]/12 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#c8880a]/12 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-4 left-10 w-64 h-64 bg-[#7a3a1c]/08 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Story Details */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            {/* Back link */}
            <div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdfbf7] border border-[#dccdb2] text-xs md:text-sm font-semibold text-[#1f5c54] hover:bg-[#ebe2d1] hover:text-[#184841] transition-all shadow-xs group"
              >
                <ArrowLeft size={15} className="text-[#1f5c54] group-hover:-translate-x-1 transition-transform" />
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
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#7a5232] pt-3 sm:pt-4 border-t border-[#dccdb2]/80 font-medium">
              <span className="flex items-center gap-1.5 bg-[#fdfbf7] px-3 py-1 rounded-full border border-[#dccdb2]/60 shadow-2xs">
                <Calendar size={14} className="text-[#1f5c54]" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1.5 bg-[#fdfbf7] px-3 py-1 rounded-full border border-[#dccdb2]/60 shadow-2xs">
                <Clock size={14} className="text-[#c8880a]" />
                {blog.readTime}
              </span>
            </div>
          </div>

          {/* Right Column: Hero Side Polaroid / Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[400px] bg-[#fdfbf7] p-3.5 sm:p-4 shadow-xl rounded-3xl transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-[#dccdb2] flex flex-col gap-3">
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#ebe2d1] shrink-0 border border-[#dccdb2]/60 shadow-inner">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-[#fdfbf7]/95 backdrop-blur-md rounded-full text-[11px] font-semibold text-[#1f5c54] tracking-wider uppercase border border-[#dccdb2] shadow-sm">
                  {blog.category}
                </div>
              </div>
              <div className="text-center px-2 pt-1 pb-1.5">
                <span className="font-serif text-[#3e2410] font-medium text-base sm:text-lg block leading-snug line-clamp-2">
                  {blog.title}
                </span>
                <span className="text-xs text-[#7a5232] font-light block mt-1">
                  {blog.edition} • {blog.date}
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= ARTICLE CONTENT ================= */}
      <section className="py-8 sm:py-14 px-3.5 sm:px-6 max-w-4xl mx-auto">
        <div className="bg-[#fdfbf7] rounded-3xl border border-[#dccdb2] p-5 sm:p-10 md:p-14 shadow-sm space-y-7 sm:space-y-8">

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
              <span>Back to All Stories</span>
            </Link>
          </div>

        </div>
      </section>

    </main>
  )
}

