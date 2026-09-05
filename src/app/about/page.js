"use client"

import Image from "next/image"
import Link from "next/link"
import { Target, Sun, Compass, ArrowRight, Sparkles } from "lucide-react"
import { Noto_Sans } from 'next/font/google'
import MentorsSection from "@/components/home/MentorsSection"

const noto_Sans = Noto_Sans({
  subsets: ['Cyrillic'],
  weight: ['400', '700', '800', '900'], // Load the weights you need
  display: 'swap',
})

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-frosted_mint/20">

      {/* ================= 1. HERO SECTION (KEPT SAME) ================= */}
      <section className="relative pt-25 md:pt-30">
        <div className="absolute inset-0" />
        {/* WAVE LAYER 1 */}
        <svg viewBox="0 0 1440 800" className="absolute -top-[420px] left-0 w-full h-[800px] -z-10" preserveAspectRatio="none">
          <path fill="#1B4332" fillOpacity="0.95" d="M0,520 C200,620 420,420 640,500 C860,560 1080,650 1280,560 C1380,500 1440,480 1440,460 L1440,0 L0,0 Z" />
        </svg>
        {/* WAVE LAYER 2 */}
        <svg viewBox="0 0 1440 700" className="absolute -top-[300px] left-0 w-full h-[700px] -z-10" preserveAspectRatio="none">
          <path fill="#40916C" fillOpacity="0.8" d="M0,460 C220,540 420,360 660,440 C900,500 1120,580 1320,500 C1400,460 1440,440 1440,420 L1440,0 L0,0 Z" />
        </svg>
        {/* WAVE LAYER 3 */}
        <svg viewBox="0 0 1440 600" className="absolute -top-[180px] left-0 w-full h-[600px] -z-10" preserveAspectRatio="none">
          <path fill="#d8f3dc" fillOpacity="0.65" d="M0,380 C260,430 460,320 700,380 C940,420 1140,470 1340,410 C1400,380 1440,360 1440,340 L1440,0 L0,0 Z" />
        </svg>

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-evergreen/50 backdrop-blur-md mb-4 md:mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-evergreen animate-pulse" />
            <p className="text-xs md:text-sm font-bold text-evergreen tracking-wide uppercase">
               Experiential Rural Immersion
            </p>
          </div>
          
          <h1 className={`${noto_Sans.className} font-extrabold font-serif text-2xl sm:text-3xl md:text-6xl mb-3 text-evergreen leading-tight drop-shadow-md`}>
            Sahyadri Rural Connect
          </h1>
        </div>
      </section>


      {/* ================= 2. THE "FRAME" SECTION (KEPT SAME) ================= */}
      <section className="py-3 md:py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left: Creative Offset Image */}
          <div className="md:col-span-6 relative pl-4 pb-4">
             <div className="absolute top-0 left-0 w-[90%] h-[90%] bg-evergreen rounded-3xl -z-10" />
             <div className="relative h-[280px] sm:h-[400px] w-full bg-gray-200 rounded-3xl overflow-hidden shadow-2xl md:translate-x-2 translate-y-4 border-4 border-white">
                <Image src="/camp2/camp2-day2-i3_copy.png" alt="Rural Immersion" fill className="object-cover hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[180px]">
                <p className="text-xs md:text-sm font-medium text-pine_teal">Experiential Learning in Rural India</p>
             </div>
          </div>

          {/* Right: Typography Content */}
          <div className="md:col-span-6 space-y-4 md:space-y-8">
            <h2 className="font-serif text-xl md:text-4xl font-bold text-gray-900 leading-tight">
              Understanding <span className="text-sea_green italic">Real Bharat</span>
            </h2>
            <div className="space-y-3 md:space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
              <p>
                Sahyadri Rural Connect is a unique opportunity for budding social leaders to gain ground-level experience and engage in interactive workshops with social changemakers. We believe in experiential learning that connects participants with the realities of rural India.
              </p>
              <div className="pl-6 border-l-4 border-frosted_mint">
                <p className="italic text-gray-800 font-medium">
                  &quot;Our program bridges the gap between urban aspirations and rural challenges, fostering empathy, understanding, and actionable solutions for sustainable development.&quot;
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ================= 3. MISSION, VISION & OBJECTIVE SECTION ================= */}
      <section className="py-8 md:py-14 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-celadon shadow-xs text-sea_green text-[11px] font-bold tracking-widest uppercase">
              <Sparkles size={13} />
              <span>Our Guiding Principles</span>
            </div>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-evergreen">
              Mission, Vision & <span className="text-sea_green italic">Objective</span>
            </h2>
            <p className="text-pine_teal/80 text-sm md:text-base font-medium max-w-xl mx-auto">
              Bridging classroom knowledge with grassroots realities to nurture empathetic leadership for India.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Mission Card */}
            <div className="bg-white p-8 rounded-[2rem] border-2 border-celadon/50 hover:border-sea_green shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                <Target size={100} className="text-orange-700" />
              </div>
              <div className="relative z-10 space-y-3">
                <span className="text-orange-700 font-bold tracking-wider text-xs uppercase block">
                  Our Purpose
                </span>
                <h3 className="font-serif text-2xl font-bold text-evergreen">
                  Mission
                </h3>
                <p className="text-pine_teal text-sm md:text-base leading-relaxed">
                  To inspire, equip, and empower future leaders from diverse disciplines to make meaningful differences in communities through immersive rural development experiences.
                </p>
              </div>
            </div>

            {/* 2. Vision Card */}
            <div className="bg-white p-8 rounded-[2rem] border-2 border-celadon/50 hover:border-sea_green shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                <Sun size={100} className="text-amber-500" />
              </div>
              <div className="relative z-10 space-y-3">
                <span className="text-amber-600 font-bold tracking-wider text-xs uppercase block">
                  Our Future
                </span>
                <h3 className="font-serif text-2xl font-bold text-evergreen">
                  Vision
                </h3>
                <p className="text-pine_teal text-sm md:text-base leading-relaxed">
                  Creating a generation of socially conscious leaders who understand the complexities of rural India and are equipped with the skills to drive inclusive development.
                </p>
              </div>
            </div>

            {/* 3. Objective Card */}
            <div className="bg-white p-8 rounded-[2rem] border-2 border-celadon/50 hover:border-sea_green shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                <Compass size={100} className="text-teal-600" />
              </div>
              <div className="relative z-10 space-y-3">
                <span className="text-sea_green font-bold tracking-wider text-xs uppercase block">
                  Our Goal
                </span>
                <h3 className="font-serif text-2xl font-bold text-evergreen">
                  Objective
                </h3>
                <p className="text-pine_teal text-sm md:text-base leading-relaxed">
                  To engage bright minds in social sensitization, learn alongside communities, and nurture future social leaders and entrepreneurs for India.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 4. MENTORS SECTION ================= */}
      <MentorsSection />

      {/* ================= 6. CTA SECTION (KEPT SAME) ================= */}
      <section className="md:mb-12 relative overflow-hidden px-4">
        <div className="max-w-5xl mx-auto relative overflow-hidden px-6 py-10 md:pt-0 md:pb-5 text-center">
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="font-serif text-xl sm:text-2xl md:text-4xl font-bold text-evergreen leading-tight">
              Ready to start your journey?
            </h2>
            <Link 
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-evergreen font-bold py-4 px-10 text-sm md:text-base rounded-full transition-all duration-300 shadow-lg hover:bg-frosted_mint hover:scale-105 hover:shadow-white/20"
            >
              Get Involved
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}