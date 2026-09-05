"use client"
import React, { useRef, useEffect, useState } from "react"
import { Quote, Sparkles, User, Leaf } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "An amazing and enriching opportunity that was more than just a programme - it was an experience of deep learning, self-reflection and human connection.",
      role: "Alumnus, IIT Bombay"
    },
    {
      text: "Humbling and inspiring to witness the resilience, creativity, and warmth of tribal communities and their inclusive learning environments despite limited resources.",
      role: "LL.B. Student, ILS Law College"
    },
    {
      text: "Truly opened my eyes to the power of community-led development and living examples of sustainability and local governance.",
      role: "MBA Student, IIM Mumbai"
    },
    {
      text: "Gave me a glimpse into how systems work and the critical role of policy, advocacy, and persistence in social change.",
      role: "Student, IIPS Mumbai"
    },
    {
      text: "Learning is a shared journey - making friends, sharing stories, exchanging readings with students from diverse institutions and backgrounds.",
      role: "MA Student, TISS Mumbai"
    },
    {
      text: "Meaningful change starts with relationships between people, their environment, and the institutions they build together.",
      role: "Ph.D., IGIDR Mumbai"
    }
  ]

  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  // --- MOBILE AUTO SCROLL LOGIC ---
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const scrollInterval = setInterval(() => {
      // Only auto-scroll on mobile (< 768px) and if not paused
      if (!isPaused && window.innerWidth < 768) {
        const cardWidth = container.offsetWidth
        const maxScroll = container.scrollWidth - container.clientWidth
        
        // If near end, snap to start; otherwise scroll one card width
        if (container.scrollLeft >= maxScroll - 20) {
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: cardWidth, behavior: 'smooth' })
        }
      }
    }, 2000)

    return () => clearInterval(scrollInterval)
  }, [isPaused])

  return (
    <section className="pt-12 pb-6 md:pb-12 bg-gradient-to-b from-frosted_mint/30 via-white to-frosted_mint/30 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sea_green/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-mint_leaf/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-celadon shadow-sm text-sea_green text-[10px] font-bold tracking-widest uppercase mb-2">
            <Sparkles size={12} />
            <span>Student Voices</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-evergreen mb-2">
            Student <span className="italic text-sea_green">Testimonials</span>
          </h2>
          <p className="mt-4 text-pine_teal/80 text-base md:text-lg font-medium max-w-2xl mx-auto text-center">
                  &quot;Hear from students who have participated in our rural engagement programs.&quot;
          </p>
        </div>
        
        {/* === LAYOUT CONTAINER === */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="
            flex overflow-x-auto gap-4 snap-x snap-mandatory pb-6 -mx-4 px-4 
            md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:pb-0 md:mx-0 md:px-3
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
          "
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="
                group relative flex-shrink-0 snap-center
                w-[90vw] md:w-auto h-auto
              "
            >
              
              {/* 1. DECORATIVE BACKDROP (Shadow Leaf) with Green Accent */}
              <div className="absolute inset-0 bg-celadon/25 border border-celadon/30 rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-lg rounded-br-lg transform rotate-2 scale-[1.02] group-hover:rotate-3 group-hover:bg-mint_leaf/30 transition-all duration-500 ease-out"></div>

              {/* 2. MAIN CARD (The Paper Leaf) with Green Border */}
              <div className="relative h-full bg-white border-2 border-celadon/60 group-hover:border-mint_leaf rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-lg rounded-br-lg p-6 flex flex-col shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-500 ease-out min-h-[260px]">
                
                {/* Decorative Leaf Icon */}
                <div className="absolute top-0 left-0 p-3">
                   <Leaf size={20} className="text-mint_leaf/60 transform -rotate-45" />
                </div>

                {/* Quote Icon */}
                <div className="mb-4 flex justify-end">
                   <div className="w-8 h-8 rounded-full bg-frosted_mint/40 border border-celadon/40 flex items-center justify-center text-sea_green">
                      <Quote size={14} fill="currentColor" />
                   </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <p className="font-serif text-pine_teal text-sm lg:text-[15px] leading-relaxed italic relative z-10">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>

                {/* Divider */}
                <div className="w-10 h-0.5 bg-gradient-to-r from-sea_green to-transparent my-5"></div>

                {/* Footer / Author */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-celadon/60 bg-frosted_mint/40 flex items-center justify-center text-dark_emerald flex-shrink-0">
                    <User size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-evergreen uppercase tracking-wide">
                      Participant
                    </h4>
                    <p className="text-xs font-semibold text-pine_teal/80 leading-tight">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}