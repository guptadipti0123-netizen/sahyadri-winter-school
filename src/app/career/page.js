"use client"

import { useState } from "react"
import { 
  Briefcase, Users, TrendingUp, Mail, 
  HeartHandshake, ArrowRight, Sprout, Star, Sparkles 
} from "lucide-react"

import Link from "next/link"
import { Noto_Sans } from 'next/font/google'

const noto_Sans = Noto_Sans({
  subsets: ['Cyrillic'],
  weight: ['400', '700', '800', '900'], // Load the weights you need
  display: 'swap',
})

export default function CareerPage() {

  const benefits = [
    {
      title: "Meaningful Work",
      description: "Contribute to impactful projects that make a real difference in rural communities across India.",
      icon: <HeartHandshake size={28} />, 
      // Styles
      theme: "orange",
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-100 group-hover:border-orange-300",
      dashColor: "bg-orange-200 group-hover:bg-orange-400",
      shape: "rounded-2xl rounded-tr-[5rem] rounded-bl-[5rem]", 
    },
    {
      title: "Collaborative Team",
      description: "Work with a diverse team of passionate professionals dedicated to social change and innovation.",
      icon: <Users size={28} />,
      // Styles
      theme: "emerald",
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-100 group-hover:border-emerald-300",
      dashColor: "bg-emerald-200 group-hover:bg-emerald-400",
      shape: "rounded-2xl rounded-tl-[5rem] rounded-br-[5rem]", 
    },
    {
      title: "Growth & Learning",
      description: "Develop your skills through continuous learning, mentorship, and professional development programs.",
      icon: <TrendingUp size={28} />,
      // Styles
      theme: "blue",
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-100 group-hover:border-blue-300",
      dashColor: "bg-blue-200 group-hover:bg-blue-400",
      shape: "rounded-2xl rounded-tr-[5rem] rounded-bl-[5rem]", 
    },
  ]

  return (
    <main className="min-h-screen bg-frosted_mint/20 font-sans selection:bg-sea_green selection:text-white overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-25 md:pt-30">
        
        {/* --- WAVE BACKGROUND --- */}
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

         <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-evergreen/50 backdrop-blur-md mb-4 md:mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-evergreen animate-pulse" />
            <p className="text-xs md:text-sm font-bold text-evergreen tracking-wide uppercase">
              Join Our Mission
            </p>
          </div>

          <h1 className={`${noto_Sans.className} font-extrabold font-serif text-2xl sm:text-3xl md:text-6xl mb-3 text-evergreen leading-tight drop-shadow-md`}>
            Career Opportunities
          </h1>

          <p className="text-base md:text-xl italic">
            Build a career with purpose. Join a team that is redefining rural development.
          </p>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="pb-8 pt-5 md:pt-50 md:pb-12 px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-8 md:-mt-24 relative z-20">
            
            {benefits.map((item, index) => (
              <div 
                key={index}
                className={`
                  group relative bg-white transition-all duration-500 ease-out shadow-sm hover:shadow-lg
                  /* MOBILE STYLES */
                  flex flex-row items-center text-left p-5 gap-5 rounded-2xl border border-gray-100
                  /* DESKTOP STYLES */
                  md:flex-col md:items-center md:text-center md:p-8 md:shadow-xl 
                  md:hover:shadow-2xl md:hover:-translate-y-3 
                  md:border-[3px] md:${item.border} md:${item.shape}
                  ${index === 1 ? 'md:-translate-y-11 md:hover:-translate-y-14 md:z-10' : 'md:z-0'}
                `}
              >
                <div className={`hidden md:block absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${item.bg.replace('50', '200')}`} />

                <div className={`
                  shrink-0 flex items-center justify-center relative z-10
                  w-12 h-12 rounded-xl ${item.bg} ${item.text}
                  md:w-20 md:h-20 md:rounded-full md:shadow-sm md:border md:border-white 
                  md:transition-transform md:duration-500 md:group-hover:scale-110 md:group-hover:rotate-6
                `}>
                  <div className="scale-75 md:scale-100">{item.icon}</div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-serif text-base md:text-2xl font-bold text-gray-900 mb-1 md:mb-4 group-hover:text-evergreen transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed md:px-2">
                    {item.description}
                  </p>
                </div>

                <div className={`hidden md:block mt-auto pt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500`}>
                   <div className={`w-16 h-1.5 rounded-full ${item.dashColor} transition-colors`} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CURRENT STATUS SECTION ================= */}
      <section className="pb-12 px-6 relative">
        <div className="relative overflow-hidden bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl border-2 border-emerald-100 max-w-6xl mx-auto">
          
          <div className="absolute inset-0 opacity-70" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-frosted_mint/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            
            {/* Left: Text Content */}
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-frosted_mint rounded-lg text-sea_green"><Sparkles size={20} /></div>
                 <span className="text-sm font-bold uppercase tracking-wider text-sea_green">Get Involved</span>
              </div>
              
              <h2 className="font-serif text-xl md:text-4xl font-bold text-gray-800 mb-4">
                Be the part of Change
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                We currently don&apos;t have any specific job openings available. However, we are always looking for talented individuals who are passionate about rural development.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-evergreen text-white rounded-xl font-medium hover:bg-sea_green transition-colors shadow-lg shadow-evergreen/20 text-sm md:text-base">
                  <Mail size={18} /> Contact Us
                </button>
                </a>
                <Link href="/volunteers">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-evergreen border border-evergreen/20 rounded-xl font-medium hover:bg-frosted_mint transition-colors text-sm md:text-base">
                    <Sprout size={18} /> Volunteer With Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Right: Visual Area */}
            <div className="bg-frosted_mint/30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] p-10 md:p-16 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
               <div className="text-center space-y-6">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
                     <div className="absolute inset-0 bg-sea_green/20 rounded-full blur-xl animate-pulse" />
                     <div className="relative bg-white p-8 rounded-full shadow-sm border border-white/50 flex items-center justify-center h-full w-full">
                        {/* FIX: Used Tailwind classes for responsive sizing instead of unsupported props */}
                        <Users className="w-[50px] h-[50px] md:w-16 md:h-16 text-pine_teal/50" />
                     </div>
                     <div className="absolute -top-2 -right-2 bg-white px-3 py-1.5 rounded-lg shadow-md border border-gray-100 text-[10px] font-bold text-evergreen animate-bounce">Join the Tribe</div>
                     <div className = "absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100 text-[10px] font-bold text-sea_green animate-bounce delay-700" > Make Impact </div> 
                  </div>
                  <div>
                     <h3 className="font-bold text-pine_teal text-base md:text-lg">Stay Connected</h3>
                     <p className="text-sm text-gray-500 mt-1">Follow us for updates.</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}