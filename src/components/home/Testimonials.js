"use client"
import React, { useRef, useEffect, useState } from "react"
import { Quote, User, Sparkles } from "lucide-react"

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
      if (!isPaused && window.innerWidth < 768) {
        const cardWidth = container.offsetWidth
        const maxScroll = container.scrollWidth - container.clientWidth
        
        if (container.scrollLeft >= maxScroll - 20) {
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: cardWidth, behavior: 'smooth' })
        }
      }
    }, 2500)

    return () => clearInterval(scrollInterval)
  }, [isPaused])

  return (
    <section className="py-12 md:py-18 bg-[#f5efe2] border-b border-[#dccdb2]/70 relative overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ebe2d1]/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3a8c7e]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 md:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdfbf7] border border-[#dccdb2] shadow-xs text-[#3a8c7e] text-[11px] font-semibold tracking-widest uppercase mb-1.5">
            <Sparkles size={13} className="text-[#c8880a]" />
            <span>Community Voices</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3e2410] mb-2">
            Student <span className="italic text-[#3a8c7e]">Testimonials</span>
          </h2>
          <p className="mt-3 text-[#7a5232] text-sm md:text-base font-normal max-w-2xl mx-auto text-center leading-relaxed">
            &quot;Hear from fellows and students who have participated in our rural engagement programs.&quot;
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
            flex overflow-x-auto gap-4 snap-x snap-mandatory pb-6 -mx-3 px-3 
            md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:pb-0 md:mx-0 md:px-0
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
            touch-pan-x
          "
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="
                hover-lift group relative flex-shrink-0 snap-center
                w-[85vw] max-w-[340px] sm:w-[340px] md:w-auto md:max-w-none h-auto
              "
            >
              
              {/* MAIN CARD */}
              <div className="relative h-full bg-[#fdfbf7] border border-[#dccdb2] group-hover:border-[#3a8c7e]/60 rounded-3xl p-5 sm:p-6 flex flex-col shadow-xs transition-all duration-300 min-h-[250px] justify-between">
                
                <div>
                  {/* Quote Icon */}
                  <div className="mb-3 sm:mb-4 flex justify-between items-center">
                     <span className="text-[10px] font-bold text-[#3a8c7e] uppercase tracking-wider bg-[#3a8c7e]/10 px-2.5 py-0.5 rounded-full border border-[#3a8c7e]/20">
                        Fellow Reflection
                     </span>
                     <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c8880a]/10 border border-[#c8880a]/30 flex items-center justify-center text-[#c8880a]">
                        <Quote size={13} fill="currentColor" />
                     </div>
                  </div>

                  {/* Content */}
                  <p className="font-serif text-[#3e2410] text-sm sm:text-[15px] leading-relaxed italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>

                <div>
                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-[#ebe2d1] my-4" />

                  {/* Footer / Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#dccdb2] bg-[#ebe2d1] flex items-center justify-center text-[#3a8c7e] flex-shrink-0">
                      <User size={15} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-[#c8880a] uppercase tracking-wider">
                        Participant
                      </h4>
                      <p className="text-[11px] sm:text-xs font-semibold text-[#3e2410] leading-tight">
                        {testimonial.role}
                      </p>
                    </div>
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