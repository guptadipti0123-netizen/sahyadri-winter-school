"use client"
import React from "react"
import Image from "next/image"
import { Camera } from "lucide-react"

export default function ProfessionalCampCollage() {
  const memories = [
    { 
      id: 1, 
      src: "/camp2/camp2-day2-i3_copy.png",
      span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
      visibility: "block" 
    },
    { 
      id: 2, 
      src: "/camp2/camp2-day1-i2.jpg",
      span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
      visibility: "block" 
    },
    { 
      id: 3, 
      src: "/camp2/camp2-day1-i5.jpg",
      span: "col-span-1 row-span-2 md:col-span-1 md:row-span-2",
      visibility: "hidden md:block" 
    },
    { 
      id: 4, 
      src: "/camp2/camp2-day4-i1.jpg",
      span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
      visibility: "hidden md:block"
    },
    { 
      id: 5, 
      src: "/camp2/camp2-day1-i3.jpg",
      span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
      visibility: "block"
    },
    { 
      id: 6, 
      src: "/camp2/camp2-day3-i1.jpg",
      span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
      visibility: "hidden md:block"
    },
    { 
      id: 7, 
      src: "/camp2/camp2-day4-i4.jpg",
      span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
      visibility: "block"
    },
    { 
      id: 8, 
      src: "/camp2/camp2-day5-i2.jpg",
      span: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
      visibility: "block"
    },
  ]

  return (
    <section className="py-12 md:py-18 px-3.5 sm:px-6 md:px-8 bg-[#f5efe2] border-b border-[#dccdb2]/70 relative overflow-hidden">
      {/* Subtle organic background accent glows */}
      <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-[#ebe2d1]/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-[#3a8c7e]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-8 md:mb-10 space-y-2 md:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdfbf7] border border-[#dccdb2] shadow-xs text-[#3a8c7e] text-[11px] font-semibold tracking-widest uppercase mb-1">
            <Camera size={13} className="text-[#c8880a]" />
            <span>Visual Chronicle</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3e2410]">
            Gallery of <span className="italic text-[#3a8c7e]">Impact &amp; Learning</span>
          </h2>
          <p className="text-[#7a5232] text-sm md:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            &quot;Every photograph captures a story of resilience, learning, and the lifelong bonds formed in the heart of nature.&quot;
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[130px] sm:auto-rows-[140px] md:auto-rows-[160px] gap-3 sm:gap-4">
          
          {memories.map((item) => (
            <div 
              key={item.id}
              className={`hover-lift relative group rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer border border-[#dccdb2] hover:border-[#3a8c7e]/60 shadow-sm ${item.span} ${item.visibility}`}
            >
              {/* IMAGE LAYER */}
              <div className="absolute inset-0 w-full h-full bg-[#ebe2d1]">
                <Image
                  src={item.src}
                  alt="Camp Experience Memories"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}