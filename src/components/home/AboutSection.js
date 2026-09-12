"use client"
import { useState, useEffect } from "react"
import { 
  MapPin, Calendar, Users, Sprout, School,
  Leaf, Heart, Lightbulb, Globe, ChevronLeft, ChevronRight 
} from "lucide-react"
import Image from "next/image"

// --- WINTER CAMP DEC 2025 ASSETS ---
const sliderImages = [
  "/camp2/camp2-day1-i1.jpg",
  "/camp2/camp2-day1-i4.jpg",
  "/camp2/camp2-day2-i1.jpg",
  "/camp2/camp2-day2-i2.jpg",
  "/camp2/camp2-day3-i2.jpg",
  "/camp2/camp2-day4-i3.jpg",
  "/camp2/camp2-day5-i1.jpg",
  "/camp2/camp2-day5-i3.jpg",
]

// --- DATA FROM PDF PAGE 3 (Kwina Earthy Palette) ---
const coreThemes = [
  { 
    title: "Roots & Tribe", 
    desc: "Formation & Identity", 
    icon: <Users className="w-3.5 h-3.5" />,
    color: "bg-[#7a3a1c]/10 text-[#7a3a1c] border-[#7a3a1c]/20" 
  },
  { 
    title: "Field Immersion", 
    desc: "NGOs & Rural Economy", 
    icon: <Sprout className="w-3.5 h-3.5" />, 
    color: "bg-[#3a8c7e]/10 text-[#3a8c7e] border-[#3a8c7e]/20" 
  },
  { 
    title: "Wellness & Team", 
    desc: "Reflections & Dynamics", 
    icon: <Heart className="w-3.5 h-3.5" />, 
    color: "bg-[#b23a1c]/10 text-[#b23a1c] border-[#b23a1c]/20" 
  },
  { 
    title: "Grassroots Innovation", 
    desc: "Future Insights & Action", 
    icon: <Lightbulb className="w-3.5 h-3.5" />,
    color: "bg-[#c8880a]/10 text-[#c8880a] border-[#c8880a]/20" 
  },
  { 
    title: "Culture & Ecology", 
    desc: "Lifestyle & Sustainability", 
    icon: <Leaf className="w-3.5 h-3.5" />,
    color: "bg-[#6e9e97]/15 text-[#1f5c54] border-[#6e9e97]/25" 
  }
]

// --- Institutes ---
const institutes = [
  "IIT Bombay", "TISS Mumbai", "IIM Bangalore", 
  "ILS Law College", "Fergusson College", "IIPS Mumbai",
  "IGIDR", "SRTMU Nanded", "DES Navalmal Firodia Law", "IGNOU"
]

export default function AboutSection() {
  // Slider Logic
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 4500) 
    return () => clearInterval(timer)
  }, []) 

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1))

  return (
    <section className="py-12 sm:py-16 px-3.5 sm:px-6 bg-[#f5efe2] border-b border-[#dccdb2]/70 flex flex-col items-center justify-center">

      <div className="text-center mb-8 max-w-2xl mx-auto">
        <div className="text-xs font-semibold tracking-widest text-[#3a8c7e] uppercase mb-1.5">
          Experiential Curriculum
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#3e2410]">
          Beyond the <span className="italic text-[#3a8c7e]">Classroom Walls</span>
        </h2>
      </div>
      
      {/* --- MAIN CONTAINER --- */}
      <div className="max-w-5xl w-full h-auto min-h-[460px] lg:h-[490px] bg-[#fdfbf7] rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_12px_36px_rgba(62,36,16,0.06)] overflow-hidden border border-[#dccdb2] flex flex-col md:flex-row relative">
        
        {/* --- LEFT: SLIDER (40% Width) --- */}
        <div className="w-full md:w-5/12 h-[260px] sm:h-[300px] md:h-auto min-h-[260px] relative group shrink-0">
          {/* Slides */}
          {sliderImages.map((src, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image 
                src={src} 
                alt="Camp Memories" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241407]/90 via-[#241407]/30 to-transparent" />
            </div>
          ))}
          
          {/* Slider Overlay Info */}
          <div className="absolute bottom-5 left-5 text-[#f5efe2] z-10">
             <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#241407]/60 backdrop-blur-md border border-[#dccdb2]/30 mb-1.5">
                <Calendar size={11} className="text-[#d4a825]" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#f5efe2]">Dec 24-28</span>
             </div>
             <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#f5efe2] leading-none">Camp Diaries</h3>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-5 right-5 flex gap-1.5 z-20">
            <button onClick={prevSlide} className="p-1.5 sm:p-2 rounded-full bg-[#241407]/60 backdrop-blur-md hover:bg-[#241407]/90 text-[#f5efe2] transition-all cursor-pointer border border-[#dccdb2]/30" aria-label="Previous Slide">
              <ChevronLeft size={15} />
            </button>
            <button onClick={nextSlide} className="p-1.5 sm:p-2 rounded-full bg-[#241407]/60 backdrop-blur-md hover:bg-[#241407]/90 text-[#f5efe2] transition-all cursor-pointer border border-[#dccdb2]/30" aria-label="Next Slide">
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* --- RIGHT: CONTENT (60% Width) --- */}
        <div className="w-full md:w-7/12 p-5 sm:p-7 md:p-8 flex flex-col justify-between relative bg-[#fdfbf7]">
           
           {/* HEADER */}
           <div>
              <div className="flex justify-between items-start">
                 <div>
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-[#3e2410] leading-tight">
                       About <span className="text-[#3a8c7e] italic">Sahyadri Rural Connect</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7a5232] font-medium mt-1 flex items-center gap-1">
                       <MapPin size={13} className="text-[#3a8c7e]" /> Kothimbe, Karjat | 2nd Edition
                    </p>
                 </div>
              </div>

              <div className="h-px w-full bg-[#ebe2d1] my-3 sm:my-3.5" />

              {/* DESCRIPTION */}
              <p className="text-[#7a5232] text-xs sm:text-sm font-normal leading-relaxed mb-3">
                 Textbooks teach the “what.” Our ground mentors explain the “why” and “how” through direct immersive dialogue.
              </p>
           </div>
           
          {/* --- SPLIT CONTENT: CURRICULUM & INSTITUTES --- */}
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 overflow-hidden">
            
            {/* COL 1: SCROLLABLE THEMES LIST */}
            <div className="flex-grow max-h-[220px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
              
              {/* Title */}
              <p className="text-[10px] sm:text-xs font-bold text-[#c8880a] uppercase tracking-widest mb-2 sticky top-0 bg-[#fdfbf7] py-1 z-10">
                Core Themes
              </p>

              {/* Grid Wrapper for Items */}
              <div className="grid grid-cols-1 gap-2">
                {coreThemes.map((theme, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border transition-all ${theme.color}`}
                  >
                    <div className="p-1.5 rounded-full bg-[#fdfbf7] shadow-xs text-current shrink-0 border border-[#dccdb2]/40">
                      {theme.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#3e2410] leading-tight truncate">{theme.title}</h4>
                      <p className="text-[11px] text-[#7a5232] leading-tight mt-0.5 truncate">{theme.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COL 2: Participating Institutes */}
            <div className="mt-2 sm:mt-0">
              <p className="text-[10px] sm:text-xs font-bold text-[#c8880a] uppercase tracking-widest mb-2 sm:mb-3 text-center flex items-center justify-center gap-1">
                <School size={12} className="text-[#3a8c7e]" /> Participating Institutes
              </p>
              <div className="relative overflow-hidden bg-[#ebe2d1]/35 rounded-2xl border border-[#dccdb2] p-2.5 sm:p-3">
                {/* Marquee Mask */}
                <div className="relative h-[130px] sm:h-[150px] md:h-[170px] overflow-hidden mask-gradient">
                  <div className="absolute top-0 w-full animate-vertical-marquee space-y-2">
                    {/* Duplicate list for seamless loop */}
                    {[...institutes, ...institutes].map((inst, i) => (
                      <div key={i} className="bg-[#fdfbf7] p-2 rounded-lg border border-[#dccdb2]/70 shadow-2xs text-center">
                        <span className="text-[11px] sm:text-xs font-medium text-[#3e2410]">{inst}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #dccdb2;
          border-radius: 10px;
        }

        /* Vertical Marquee Animation */
        @keyframes vertical-marquee {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-marquee {
          animation: vertical-marquee 20s linear infinite;
        }
        .animate-vertical-marquee:hover {
          animation-play-state: paused;
        }
        
        /* Top/Bottom Fade Mask for Marquee */
        .mask-gradient {
           mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
           -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  )
}