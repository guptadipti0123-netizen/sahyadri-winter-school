import React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { blogsData } from "@/data/blogsData"
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Sparkles, BookOpen, Quote, CheckCircle2 } from "lucide-react"
import { Noto_Sans } from 'next/font/google'

const noto_Sans = Noto_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
})

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
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-frosted_mint/20">

      {/* ================= HERO HEADER ================= */}
      <section className="relative pt-28 md:pt-36 pb-12 overflow-hidden bg-gradient-to-b from-evergreen via-dark_emerald to-sea_green text-white">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-mint_leaf/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-5">
          
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-frosted_mint/90 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to All Stories</span>
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
              {blog.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-frosted_mint/20 backdrop-blur-md text-frosted_mint text-[11px] font-semibold">
              {blog.edition}
            </span>
          </div>

          {/* Title */}
          <h1 className={`${noto_Sans.className} font-serif font-extrabold text-2xl sm:text-4xl md:text-5xl leading-tight text-white drop-shadow-md`}>
            {blog.title}
          </h1>

          {blog.subtitle && (
            <p className="text-base sm:text-xl font-light text-frosted_mint/90 italic font-serif">
              {blog.subtitle}
            </p>
          )}

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-frosted_mint/80 pt-2 border-t border-white/20">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {blog.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {blog.readTime}
            </span>
            <span>•</span>
            <span>By {blog.author}</span>
          </div>

        </div>
      </section>

      {/* ================= ARTICLE CONTENT ================= */}
      <section className="py-12 px-4 md:px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl border border-celadon/50 p-6 md:p-12 shadow-sm space-y-8">
          
          {/* Main Cover Image */}
          <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden shadow-md">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Body Content */}
          <div className="space-y-6 text-pine_teal text-base sm:text-lg leading-relaxed font-normal">
            {blog.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="font-serif text-2xl sm:text-3xl font-bold text-evergreen pt-6 border-t border-gray-100 first:border-none first:pt-0"
                  >
                    {block.text}
                  </h2>
                )
              }

              if (block.type === "quote") {
                return (
                  <blockquote
                    key={index}
                    className="relative my-6 p-6 rounded-2xl bg-frosted_mint/40 border-l-4 border-sea_green text-evergreen font-serif italic text-lg sm:text-xl leading-relaxed shadow-xs"
                  >
                    <Quote className="w-8 h-8 text-sea_green/30 absolute top-3 right-4 pointer-events-none" />
                    &quot;{block.text}&quot;
                  </blockquote>
                )
              }

              if (block.type === "list") {
                return (
                  <ul key={index} className="space-y-3.5 my-4">
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-sea_green mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )
              }

              return (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {block.text}
                </p>
              )
            })}
          </div>

          {/* Author Card Footer */}
          <div className="mt-12 pt-8 border-t-2 border-celadon/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-frosted_mint/20 p-6 rounded-2xl">
            <div>
              <span className="text-xs font-bold text-sea_green uppercase tracking-wider block">
                Published By
              </span>
              <h4 className="font-serif text-lg font-bold text-evergreen">
                {blog.author}
              </h4>
              <p className="text-xs text-pine_teal/80">
                {blog.authorRole} • {blog.edition}
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-celadon text-evergreen text-xs font-bold shadow-xs hover:bg-sea_green hover:text-white transition-all w-fit"
            >
              <ArrowLeft size={14} />
              More Stories
            </Link>
          </div>

        </div>
      </section>

      {/* ================= RELATED STORIES ================= */}
      {relatedArticles.length > 0 && (
        <section className="pb-16 px-4 md:px-6 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-evergreen">
              More Field Stories
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group bg-white rounded-2xl p-5 border border-celadon/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-sea_green uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="font-serif font-bold text-base text-evergreen group-hover:text-sea_green transition-colors leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-pine_teal/75 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-sea_green">
                    <span>Read Article</span>
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
