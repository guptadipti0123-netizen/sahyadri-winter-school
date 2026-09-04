"use client"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Oswald, Open_Sans } from 'next/font/google'

// 1. Fonts setup
const oswald = Oswald({ 
  subsets: ['latin'],
  weight: ['500', '700'], 
  display: 'swap',
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400', '600'], 
  display: 'swap',
})

export default function Hero() {
  return (
    <section className="relative h-[85vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        {/* Parallax-style fixed background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: "url('/sahyadri-bg-hero6.jpeg')" }}
        />
        
        {/* Cinematic Overlay: Vignette + Gradient for focus */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-evergreen/30 mix-blend-multiply" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-12">

        {/* MAIN HEADING */}
        <h1 className={`${oswald.className} text-4xl md:text-7xl font-bold text-white leading-[1.1] uppercase tracking-wide drop-shadow-2xl mb-6`}>
          Understanding <br />
          {/* Vibrant Gradient Text */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-green-400">
            Real Bharat
          </span>
        </h1>

        {/* PARAGRAPH */}
        <p className={`${openSans.className} text-base md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed tracking-wide mb-8 md:mb-12 opacity-90`}>
          A unique opportunity for budding social leaders to have ground level experience and engage in interactive workshops with social changemakers.
        </p>

        {/* SIMPLE & CLEAN BUTTON */}
        <Link 
            href="/about" 
            className="group flex items-center gap-2 px-5 md:px-7 py-2.5 md:py-3.5 bg-white text-evergreen rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-frosted_mint hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
        >
            <span className={`text-sm md:text-base font-bold uppercase tracking-widest ${oswald.className}`}>
                Discover More
            </span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

      </div>
    </section>
  )
}