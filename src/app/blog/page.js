import React from "react"
import Link from "next/link"
import Image from "next/image"
import { blogsData } from "@/data/blogsData"
import { Calendar, Clock, ArrowRight, Sparkles, Compass } from "lucide-react"

export default function BlogHubPage() {
  // Hero Featured Blog (First blog)
  const heroBlog = blogsData[0]
  const allBlogs = blogsData

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
      <section className="px-4 md:px-8 pb-12 max-w-6xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl border-2 border-celadon/60 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 grid lg:grid-cols-12 gap-0">
          
          {/* Image */}
          <div className="lg:col-span-6 relative h-64 lg:h-auto min-h-[300px] bg-gray-100">
            <Image
              src={heroBlog.heroImage || heroBlog.image}
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

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-medium text-pine_teal/70">
                By {heroBlog.author}
              </span>
              <Link
                href={`/blog/${heroBlog.slug}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sea_green to-dark_emerald text-white text-xs md:text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all whitespace-nowrap shrink-0 w-fit"
              >
                <span>Read Full Story</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. OUR STORY SECTION ================= */}
      <section className="px-4 md:px-8 pb-14 max-w-6xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl border-2 border-celadon/60 p-6 sm:p-10 md:p-12 shadow-lg space-y-8 relative overflow-hidden">
          
          {/* Header */}
          <div className="space-y-3 border-b border-celadon/30 pb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-frosted_mint/50 border border-celadon text-sea_green text-xs font-bold uppercase tracking-wider">
              <Sparkles size={13} />
              <span>Our Story</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-evergreen leading-tight">
              Bringing the Classroom Closer to the Ground
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-sea_green font-medium">
              &quot;There is a difference between knowing about a problem and knowing what it feels like on the ground.&quot;
            </p>
          </div>

          {/* 2-Column Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-4 text-pine_teal text-sm sm:text-base leading-relaxed">
              <p>
                In college, we learn about the challenges our country faces. We study development, public policy, government schemes, livelihoods, and the technological solutions designed to address them. But much of this learning happens within classrooms, textbooks, case studies, and statistics.
              </p>
              
              <div className="p-4 sm:p-5 rounded-2xl bg-frosted_mint/30 border-l-4 border-sea_green space-y-2">
                <h4 className="font-serif font-bold text-evergreen text-base sm:text-lg">
                  What happens when we step outside the classroom?
                </h4>
                <p className="text-xs sm:text-sm text-pine_teal/90 leading-relaxed">
                  We realised there was a gap between understanding a problem academically and experiencing how it actually unfolds on the ground. The realities of rural India are often more complex than what a textbook, a policy document, or a set of statistics can capture.
                </p>
              </div>

              <p className="font-medium text-evergreen">
                <strong>Sahyadri Rural Connect</strong> was born from the desire to bridge that gap.
              </p>

              <p>
                Through our rural immersion camps, we aim to give students a firsthand experience of rural India. We create spaces where participants can step beyond observation and engage directly with communities, understand their everyday realities, explore livelihoods, and learn from experiences that cannot be fully captured in a classroom.
              </p>

              <blockquote className="p-4 rounded-xl bg-white border border-celadon/50 text-evergreen font-serif italic text-xs sm:text-sm shadow-xs">
                &quot;For us, rural immersion is not about simply visiting a village. It is about learning with communities, questioning what we think we know, and exploring the stories that lie beyond the statistics.&quot;
              </blockquote>

              <p className="font-semibold text-sea_green">
                Sahyadri is an attempt to bring the classroom closer to the ground, and the ground closer to the classroom.
              </p>
            </div>

            {/* Right Column: Journey Timeline */}
            <div className="lg:col-span-5 bg-frosted_mint/20 border-2 border-celadon/50 rounded-2xl p-5 sm:p-6 space-y-5">
              <div className="flex items-center gap-2 text-evergreen border-b border-celadon/40 pb-3">
                <Compass size={18} className="text-sea_green" />
                <h3 className="font-serif text-lg font-bold text-evergreen">Our Journey</h3>
              </div>

              <div className="space-y-4">
                
                {/* Milestone 1 */}
                <div className="relative pl-5 border-l-2 border-sea_green/40 space-y-1">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-sea_green border-2 border-white shadow-xs" />
                  <span className="text-[11px] font-bold text-sea_green uppercase tracking-wider block">
                    January 2025 • Palghar
                  </span>
                  <h4 className="font-serif font-bold text-sm text-evergreen">
                    Winter School, Palghar
                  </h4>
                  <p className="text-xs text-pine_teal/80 leading-relaxed">
                    Our journey began with our first rural immersion camp in Palghar, bringing students together to step outside the classroom and experience rural realities first hand.
                  </p>
                </div>

                {/* Milestone 2 */}
                <div className="relative pl-5 border-l-2 border-sea_green/40 space-y-1">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-sea_green border-2 border-white shadow-xs" />
                  <span className="text-[11px] font-bold text-sea_green uppercase tracking-wider block">
                    December 2025 • Karjat
                  </span>
                  <h4 className="font-serif font-bold text-sm text-evergreen">
                    Winter School, Karjat
                  </h4>
                  <p className="text-xs text-pine_teal/80 leading-relaxed">
                    Building on our first experience, our second camp took us to Karjat, deepening our engagement with communities and strengthening our approach to experiential learning.
                  </p>
                </div>

                {/* Milestone 3 */}
                <div className="relative pl-5 border-l-2 border-sea_green/40 space-y-1">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-sea_green border-2 border-white shadow-xs" />
                  <span className="text-[11px] font-bold text-sea_green uppercase tracking-wider block">
                    May 2026 • Jawhar
                  </span>
                  <h4 className="font-serif font-bold text-sm text-evergreen">
                    Summer School, Jawhar
                  </h4>
                  <p className="text-xs text-pine_teal/80 leading-relaxed">
                    Our third camp brought us to Jawhar in the summer, continuing our journey of learning, questioning, and connecting with rural communities.
                  </p>
                </div>

              </div>

              {/* Tagline */}
              <div className="pt-3 border-t border-celadon/40 text-center">
                <span className="font-serif font-bold text-sm text-sea_green italic">
                  ✨ And this is only the beginning.
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= 4. ALL ARTICLES GRID ================= */}
      <section className="px-4 md:px-8 pb-16 max-w-6xl mx-auto">
        <div className="mb-8 space-y-2">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-evergreen">
            Field Reports & Articles
          </h3>
          <p className="text-xs sm:text-sm text-pine_teal/80 font-medium">
            Read detailed journals, case studies, and field observations written across our cohorts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allBlogs.map((blog) => (
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
      </section>

    </main>
  )
}
