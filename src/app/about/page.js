"use client"

import Image from "next/image"
import Link from "next/link"
import { CirclePile ,Target, Sun, Users, Heart, Sprout, Globe, MapPin, ArrowRight } from "lucide-react"
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
               Initiative of Pravah Foundation
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


      {/* ================= 3. THE "JOURNEY" SECTION (REDESIGNED) ================= */}
      {/* Changes: Compact, Unique "Leaf Cluster" Shape, No boxy grid */}
      <section className="px-4 py-4 relative overflow-hidden">
        
        <div className="max-w-3xl mx-auto bg-[#D8F3DC]/80 backdrop-blur-lg rounded-[3rem] border border-white relative overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_white,_transparent)] opacity-50 pointer-events-none" />

          <div className="px-6 py-6 md:px-10 md:py-10 relative z-10">
            
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white border border-celadon shadow-sm text-sea_green text-[10px] font-bold tracking-widest uppercase mb-1">
            <CirclePile size={12} className="md:w-3.5 md:h-3.5" />
            <span>Our Roots</span>
          </div>
              <h2 className="font-serif text-xl md:text-3xl font-bold text-evergreen mb-2">
                About Pravah Foundation
              </h2>
              <p className="text-base md:text-xl text-evergreen/80 italic font-light">
                &quot;Exploring cultures, exchanging ideas, connecting with people.&quot;
              </p>
            </div>

            {/* The 4 Petals Cluster Layout */}
            <div className="max-w-2xl mx-0 sm:mx-12 grid grid-cols-2 gap-4">
              
              {/* Petal 1: Connect (Rounded Top-Left & Bottom-Right) */}
              <div className="bg-white p-6 flex items-center gap-5 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group border border-blue-50">
                 <div className="w-4 h-4 sm:w-10 sm:h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Users size={18} />
                 </div>
                 <h3 className="text-sm sm:text-lg font-bold text-gray-800">Connect</h3>
              </div>

              {/* Petal 2: Learn (Rounded Top-Right & Bottom-Left) */}
              <div className="bg-white p-6 flex items-center gap-5 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group border border-emerald-50 md:flex-row-reverse md:text-right">
                 <div className="w-4 h-4 sm:w-10 sm:h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Sun size={18} />
                 </div>
                 <h3 className="text-sm sm:text-lg font-bold text-gray-800">Learn</h3>
              </div>

              {/* Petal 3: Network (Rounded Top-Right & Bottom-Left inverted logic) */}
              <div className="bg-white p-6 flex items-center gap-5 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group border border-purple-50">
                 <div className="w-4 h-4 sm:w-10 sm:h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Globe size={18} />
                 </div>
                 <h3 className="text-sm sm:text-lg font-bold text-gray-800">Network</h3>
              </div>

              {/* Petal 4: Grow (Rounded Top-Left & Bottom-Right) */}
              <div className="bg-white p-6 flex items-center gap-5 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group border border-amber-50 md:flex-row-reverse md:text-right">
                 <div className="w-4 h-4 sm:w-10 sm:h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Sprout size={18} />
                 </div>
                 <h3 className="text-sm sm:text-lg font-bold text-gray-800">Grow</h3>
              </div>

            </div>

            {/* Minimal Footer */}
            <div className="mt-6 pt-8 border-t border-evergreen/10 flex flex-col md:flex-row items-center justify-center gap-3 text-center">
               <div className="flex items-center gap-2">
                  <Heart size={18} className="text-rose-500 fill-current" />
                  <span className="font-bold text-evergreen text-sm md:text-base">Not a group, It&apos;s Family 🌱</span>
               </div>
               
               <div className="hidden md:block w-1 h-1 rounded-full bg-evergreen/40" />
               
               <div className="flex items-start gap-2 text-sm md:text-base text-evergreen font-medium">
                  <MapPin size={16} className="shrink-0" />
                  <span>1002, Unnati Dham, Katraj Kondhwa Road, Pune 411048</span>
               </div>
            </div>

          </div>
        </div>
      </section>

      <section className="md:py-8 md:pb-12 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          
          {/* LAYOUT LOGIC:
             - Mobile: flex row + overflow-auto + snap-x (Horizontal Carousel)
             - Desktop: grid + grid-cols-2 (Original Grid)
          */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:px-6 pb-6 md:grid md:grid-cols-2 md:gap-8 hide-scrollbar">
            
            {/* Mission Card */}
            <div className="min-w-[85vw] md:min-w-0 snap-center bg-[#ecf9f1] p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                  <Target size={100} className="text-orange-700 md:w-[120px] md:h-[120px]" />
               </div>
               <div className="relative z-10">
                  <span className="text-evergreen/80 font-bold tracking-wider text-xs uppercase mb-2 block">Our Purpose</span>
                  <h3 className="font-serif  font-bold text-evergreen mb-4 md:mb-6">Mission</h3>
                  <p className="text-evergreen leading-relaxed text-sm md:text-lg">
                    To inspire, equip, and empower future leaders from diverse disciplines to make meaningful differences in communities through immersive rural development experiences.
                  </p>
               </div>
            </div>

            {/* Vision Card */}
            <div className="min-w-[85vw] md:min-w-0 snap-center bg-frosted_mint/50 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-md hover:shadow-lg relative overflow-hidden group text-evergreen">
               <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                  <Sun size={100} className="text-yellow-500 md:w-[120px] md:h-[120px]" />
               </div>
               <div className="relative z-10">
                  <span className="text-evergreen/80 font-bold tracking-wider text-xs uppercase mb-2 block">Our Future</span>
                  <h3 className="font-serif text-xl md:text-3xl font-bold text-evergreen mb-4 md:mb-6">Vision</h3>
                  <p className="text-evergreen leading-relaxed text-sm md:text-lg">
                    Creating a generation of socially conscious leaders who understand the complexities of rural India and are equipped with the skills to drive inclusive development.
                  </p>
               </div>
            </div>

          </div>

          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex justify-center gap-2 mt-2">
             <div className="w-1.5 h-1.5 rounded-full bg-evergreen/40"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-evergreen/20"></div>
          </div>

        </div>
        
        {/* Hide scrollbar utility */}
        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* ================= 5. MENTORS SECTION ================= */}
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