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

// --- DATA FROM PDF PAGE 3  ---
const coreThemes = [
  { 
    title: "Roots & Tribe", 
    desc: "Formation & Identity", 
    icon: <Users className="w-3 h-3 sm:w-4 sm:h-4" />,
    color: "bg-orange-50 text-orange-700" 
  },
  { 
    title: "Field Immersion", 
    desc: "NGOs & Rural Economy", 
    icon: <Sprout className="w-3 h-3 sm:w-4 sm:h-4" />, 
    color: "bg-emerald-50 text-emerald-700" 
  },
  { 
    title: "Wellness", 
    desc: "Team Dynamics", 
    icon: <Heart className="w-3 h-3 sm:w-4 sm:h-4" />, 
    color: "bg-rose-50 text-rose-700" 
  },
  { 
    title: "Innovation", 
    desc: "Future Insights", 
    icon: <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4" />,
    color: "bg-amber-50 text-amber-700" 
  },
  { 
    title: "Culture", 
    desc: "Lifestyle & Sustainability", 
    icon: <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />,
    color: "bg-blue-50 text-blue-700" 
  }
]

// --- Institutes  ---
const institutes = [
  "IIT Bombay", "TISS Mumbai", "IIM Bangalore", 
  "ILS Law College", "Fergusson Col    lege", "IIPS Mumbai",
  "IGIDR", "SRTMU Nanded", "DES Navalmal Firodia Law", "IGNOU"
]

export default function AboutSection() {
  // Slider Logic
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 4000) 
    return () => clearInterval(timer)
  }, []) 

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1))

  return (
    <section className="py-6 sm:py-12 px-4 bg-gradient-to-b from-frosted_mint/30 via-white to-frosted_mint/30 flex flex-col sm:flex-row items-center justify-center">

      <h2 className="sm:hidden font-serif text-3xl font-bold text-evergreen mb-6">
            Beyond the  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea_green to-mint_leaf">Classroom</span>
      </h2>
      
      {/* --- MAIN CONTAINER (Max Width 5XL + Fixed Height on Desktop) --- */}
      <div className="max-w-5xl w-full h-auto md:h-[450px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/50 flex flex-col md:flex-row relative">
        
        {/* --- LEFT: SLIDER (40% Width) --- */}
        <div className="w-full md:w-5/12 h-[300px] md:h-full relative group">
          {/* Slides */}
          {sliderImages.map((src, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image 
                src={src} 
                alt="Winter Camp Dec 2025 Memories" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>
          ))}
          
          {/* Slider Overlay Info */}
          <div className="absolute bottom-6 left-6 text-white z-10">
             <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/30 mb-2">
                <Calendar size={12} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Dec 24-28</span>
             </div>
             <h3 className="font-serif text-2xl font-bold leading-none">Camp Diaries</h3>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-6 right-6 flex gap-2 z-20">
            <button onClick={prevSlide} className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white hover:text-black text-white transition-all">
              <ChevronLeft size={16} />
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white hover:text-black text-white transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* --- RIGHT: CONTENT (60% Width) --- */}
        <div className="w-full md:w-7/12 p-4 sm:p-8 md:p-10 flex flex-col justify-between relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
           
           {/* HEADER */}
           <div>
              <div className="flex justify-between items-start">
                 <div>
                    <h2 className="font-serif text-xl md:text-3xl font-bold text-evergreen leading-tight">
                       About <span className="text-sea_green italic">Sahyadri Rural Connect</span>
                    </h2>
                    <p className="text-sm text-pine_teal/70 font-medium mt-2 flex items-center gap-1">
                       <MapPin size={14} /> Kothimbe, Karjat | 2nd Edition
                    </p>
                 </div>
              </div>

              <div className="h-px w-full bg-gray-100 my-2 sm:my-4" />

              {/* DESCRIPTION  */}
              <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed mb-4">
                 Textbooks teach the “what.” Our experts explain the “why” and “how.”
              </p>
           </div>
          {/* --- SPLIT CONTENT: CURRICULUM & INSTITUTES --- */}
<div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-hidden">
  
  {/* COL 1: SCROLLABLE THEMES LIST */}
  <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
    
    {/* Title (Kept outside the grid so it stays sticky and full width) */}
    <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 sticky top-0 bg-white/95 py-1 z-10">
      Core Curriculum
    </p>

    {/* Grid Wrapper for Items */}
    <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
      {coreThemes.map((theme, i) => (
        <div 
          key={i} 
          // last:col-span-2 makes the 5th item span full width on mobile
          // sm:last:col-span-1 resets it to single column on tablet/desktop
          className={`flex items-center gap-3 p-2.5 h-18 rounded-xl border border-transparent hover:border-gray-100 transition-all ${theme.color} bg-opacity-20 last:col-span-2 sm:last:col-span-1`}
        >
          <div className={`p-1 sm:p-1.5 rounded-full bg-white shadow-sm text-current shrink-0`}>
                        {theme.icon}
                      </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-gray-800 leading-tight">{theme.title}</h4>
            <p className="text-xs md:text-sm text-gray-500 leading-tight mt-1">{theme.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* COL 2: Participating Institutes (Vertical Marquee) */}
  <div>
    <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 text-center flex items-center justify-center gap-1">
      <School size={10} /> Participating Institutes
    </p>
    <div className="relative overflow-hidden bg-frosted_mint/30 rounded-2xl border border-gray-100 p-3">
      {/* Marquee Mask */}
      <div className="relative h-[140px] md:h-[170px] overflow-hidden mask-gradient">
        <div className="absolute top-0 w-full animate-vertical-marquee space-y-2">
          {/* Duplicate list for seamless loop */}
          {[...institutes, ...institutes].map((inst, i) => (
            <div key={i} className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm text-center">
              <span className="text-xs font-semibold text-pine_teal">{inst}</span>
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
          background: #d1d5db;
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