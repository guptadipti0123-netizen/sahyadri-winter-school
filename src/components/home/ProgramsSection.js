"use client"
import React from "react"
import Image from "next/image"
import { Camera } from "lucide-react"

export default function ProfessionalCampCollage() {
  const memories = [
    { 
      id: 1, 
      src: "/camp2/camp2-day2-i3_copy.png",
      // Main image: visible on all screens
      span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
      visibility: "block" 
    },
    { 
      id: 2, 
      src: "/camp2/camp2-day1-i2.jpg",
      // Mobile Request 1: Visible
      span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
      visibility: "block" 
    },
    { 
      id: 3, 
      src: "/camp2/camp2-day1-i5.jpg",
      // NOT in mobile request: Hide on mobile, show on desktop (md)
      span: "col-span-1 row-span-2 md:col-span-1 md:row-span-2",
      visibility: "hidden md:block" 
    },
    { 
      id: 4, 
      src: "/camp2/camp2-day4-i1.jpg",
      // NOT in mobile request: Hide on mobile
      span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
      visibility: "hidden md:block"
    },
    { 
      id: 5, 
      src: "/camp2/camp2-day1-i3.jpg",
      // Mobile Request 2: Visible
      span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
      visibility: "block"
    },
    { 
      id: 6, 
      src: "/camp2/camp2-day3-i1.jpg",
      // NOT in mobile request: Hide on mobile
      span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
      visibility: "hidden md:block"
    },
    { 
      id: 7, 
      src: "/camp2/camp2-day4-i4.jpg",
      // Mobile Request 3: Visible
      span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
      visibility: "block"
    },
    { 
      id: 8, 
      src: "/camp2/camp2-day5-i2.jpg",
      // Mobile Request 4: Visible
      span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
      visibility: "block"
    },
  ]

  return (
    <section className="py-12 px-4 md:px-8 bg-gradient-to-b from-frosted_mint/30 via-white to-frosted_mint/30 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-celadon/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-mint_leaf/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-8 space-y-3 md:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white border border-celadon shadow-sm text-sea_green text-[10px] font-bold tracking-widest uppercase mb-1">
            <Camera size={12} className="md:w-3.5 md:h-3.5" />
            <span>Visual Chronicle</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-evergreen">
            Gallery of <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea_green to-mint_leaf">Impact</span>
          </h2>
          <p className="text-pine_teal/80 text-base md:text-lg font-medium max-w-2xl mx-auto">
            &quot;Every photograph captures a story of resilience, learning, and the bonds formed in the heart of nature.&quot;
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[150px] gap-3 md:gap-4">
          
          {memories.map((item) => (
            <div 
              key={item.id}
              // Added item.visibility to control show/hide on mobile
              className={`relative group rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer border-2 border-dark_emerald shadow-sm ${item.span} ${item.visibility}`}
            >
              {/* 1. IMAGE LAYER */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={item.src}
                  alt="Winter Camp Dec 2025 Memories"
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

            </div>
          ))}
        </div>

      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  )
}