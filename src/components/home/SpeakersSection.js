"use client"
import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { 
  Quote, 
  Sparkles, 
  User, 
  Briefcase, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  HeartHandshake 
} from "lucide-react"

export default function SpeakersSection() {
  const speakers = [
    {
      name: "Kedar Joshi",
      title: "Industry Expert",
      role: "Development Sector",
      description: "Actively involved in GRA (Group Rural Activities, IIT Bombay). To understand North East, volunteered for 3 years during Swami Birth Centenary of Swami Vivekanand in Maharashtra and North East India.",
      image: "/Kedar Joshi.png",
      tag: "M.TECH IIT BOMBAY",
    },
    {
      name: "V Giriraj",
      title: "IAS Officer (Retired)",
      role: "Additional Chief Secretary of Maharashtra",
      description: "Distinguished Indian Administrative Service officer who retired as Additional Chief Secretary of Maharashtra. Held key positions including Chairman of 5th State Finance Commission, and more.",
      image: "/Giriraj.png",
      tag: "IAS OFFICER",
    },
    {
      name: "Varsha Parchure",
      title: "Program Implementation Lead",
      role: "CEQUE",
      description: "Over 17 years in social sector focusing on women's and children's rights. Extensive work on children's education for underserved tribal communities, led Kheiwadi project in Palghar for academic and life skills.",
      image: "/Varsha Parchure.png",
      tag: "PROGRAM LEAD",
    },
    {
      name: "Kiran Limaye",
      title: "Assistant Professor",
      role: "Gokhale Institute of Politics and Economics, Pune",
      description: "Works with Centre for Excellence in Entrepreneurship and Development, overseeing research agenda. Founder of SAJAG, organization working in early age education.",
      image: "/Kiran Limaye.png",
      tag: "PROFESSOR",
    },
    {
      name: "Surabhi Gajbhiye",
      title: "Program Director",
      role: "SAAD NGO",
      description: "Surabhi has over a decade of experience in rural development, disaster risk reduction, child safety, mental health, climate change, and sustainable development. Former child safety specialist at SEEDS India.",
      image: "/Surabhi Gajbhiye.png",
      tag: "PROGRAM DIRECTOR",
    },
    {
      name: "Virendra Champanerkar",
      title: "CEO",
      role: "Pragati Pratishthan",
      description: "Leads impactful initiatives uplifting tribal communities through education, water conservation, agriculture, and skill development. Implemented solar-powered irrigation and livelihood programs.",
      image: "/Virendra Champanerkar.png",
      tag: "CEO",
    },
  ]

  /* ---------------- AUTO SCROLL LOGIC ---------------- */
  const sliderRef = useRef(null)
  const isPaused = useRef(false)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let rafId
    const speed = 0.5

    const animate = () => {
      if (!isPaused.current) {
        slider.scrollLeft += speed
        // Infinite loop logic: reset to 0 when halfway
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0
        }
      }
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [])

  // Icon Helper mapped to role
  const getSpeakerIcon = (tag, title) => {
    const t = (tag + " " + title).toLowerCase();
    if (t.includes("ias") || t.includes("officer") || t.includes("secretary")) {
      return <ShieldCheck size={16} className="text-white" />;
    }
    if (t.includes("lead") || t.includes("program") || t.includes("social")) {
      return <Users size={16} className="text-white" />;
    }
    if (t.includes("prof") || t.includes("academic") || t.includes("education")) {
      return <GraduationCap size={16} className="text-white" />;
    }
    if (t.includes("director") || t.includes("ngo")) {
      return <HeartHandshake size={16} className="text-white" />;
    }
    return <Briefcase size={16} className="text-white" />;
  };

  // Exact Card Component from Reference
  const SpeakerCard = ({ speaker }) => (
    <div className="w-[250px] sm:w-[270px] md:w-[285px] h-[395px] sm:h-[410px] md:h-[420px] flex-shrink-0 flex flex-col justify-between bg-white rounded-3xl p-4 sm:p-5 shadow-lg border border-celadon/40 hover:shadow-2xl hover:border-mint_leaf/60 transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group snap-center">
      
      {/* 1. TOP: Quote & Description */}
      <div className="flex flex-col items-center text-center">
        <Quote className="self-start text-sea_green w-6 h-6 rotate-180 mb-2 shrink-0" />
        <p className="text-pine_teal/80 text-xs sm:text-[12.5px] leading-relaxed font-sans line-clamp-6 px-1">
          {speaker.description}
        </p>
      </div>

      {/* 2. MIDDLE & BOTTOM: Curved Wave Background with Avatar & Details */}
      <div className="relative pt-6 pb-1">
        
        {/* Soft arch background */}
        <div className="absolute inset-0 top-3 -mx-5 -mb-5 bg-gradient-to-b from-frosted_mint/20 via-frosted_mint/40 to-celadon/25 rounded-t-[40px] -z-0" />

        {/* Decorative SVG curves matching reference screenshot */}
        <svg className="absolute bottom-0 left-0 w-20 h-28 pointer-events-none -z-0" viewBox="0 0 100 120" fill="none">
          <path d="M0,120 L0,25 Q30,80 100,120 Z" fill="#1b4332" opacity="0.9" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-20 h-28 pointer-events-none -z-0" viewBox="0 0 100 120" fill="none">
          <path d="M100,120 L100,15 Q70,75 0,120 Z" fill="#95d5b2" opacity="0.45" />
        </svg>

        {/* Avatar in Center */}
        <div className="relative z-10 flex justify-center -mt-8 mb-2">
          <div className="relative w-14 h-14 sm:w-15 sm:h-15 rounded-full border-2 border-white shadow-md overflow-hidden bg-white shrink-0 group-hover:scale-105 transition-transform duration-300">
            {speaker.image ? (
              <Image 
                src={speaker.image} 
                alt={speaker.name} 
                fill 
                className="object-cover" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-pine_teal">
                <User size={24} />
              </div>
            )}
          </div>
        </div>

        {/* Name & Pill Tag */}
        <div className="relative z-10 text-center mb-2.5">
          <h3 className="font-serif text-base sm:text-lg font-bold text-evergreen leading-tight">
            {speaker.name}
          </h3>
          <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-frosted_mint text-dark_emerald border border-celadon">
            {speaker.tag}
          </span>
        </div>

        {/* Bottom Row: Icon + Title & Role */}
        <div className="relative z-10 flex items-center gap-2.5 px-1 pt-1">
          <div className="w-8 h-8 rounded-full bg-dark_emerald text-white flex items-center justify-center shrink-0 shadow-sm">
            {getSpeakerIcon(speaker.tag, speaker.title)}
          </div>
          <div className="min-w-0 flex-1 text-left">
            <p className="text-xs sm:text-[12.5px] font-bold text-evergreen leading-tight truncate">
              {speaker.title}
            </p>
            <p className="text-[10px] sm:text-[11px] text-pine_teal/75 font-medium leading-tight truncate mt-0.5">
              {speaker.role}
            </p>
          </div>
        </div>

      </div>

    </div>
  );

  return (
    <section className="pb-6 md:px-8 bg-frosted_mint/20 relative overflow-hidden">
      
      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--color-frosted_mint),_transparent_70%)] opacity-50 -z-10" />

      <div className="max-w-full mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-6 md:mb-10 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-celadon shadow-sm text-sea_green text-[10px] font-bold tracking-widest uppercase mb-3 mt-6">
            <Sparkles size={12} />
            <span>Thought Leadership</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-evergreen">
            Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea_green to-mint_leaf">Change</span>
          </h2>
          <p className="mt-4 text-pine_teal/80 text-base md:text-lg font-medium max-w-2xl mx-auto text-center">
                  &quot;Learn from distinguished professionals with decades of experience in governance, social development, and education.&quot;
          </p>
          
        </div>

        {/* --- SLIDER CONTAINER --- */}
        <div className="relative w-full group/slider">
          
          {/* MAIN SCROLL AREA - Applied Logic from Code 1 */}
          <div 
             ref={sliderRef}
             className="flex overflow-x-auto hide-scrollbar pb-8 md:pb-0"
             onMouseEnter={() => (isPaused.current = true)}
             onMouseLeave={() => (isPaused.current = false)}
             onTouchStart={() => (isPaused.current = true)}
             onTouchEnd={() => (isPaused.current = false)}
          >
            
            {/* Set 1 */}
            <div className="flex gap-4 md:gap-8 px-2 md:px-4 shrink-0">
              {speakers.map((speaker, index) => (
                <SpeakerCard key={`a-${index}`} speaker={speaker} />
              ))}
            </div>

            {/* Set 2 (Clone for infinite loop) */}
            <div className="flex gap-4 md:gap-8 px-2 md:px-4 shrink-0">
              {speakers.map((speaker, index) => (
                <SpeakerCard key={`b-${index}`} speaker={speaker} />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-4 md:mt-8">
           <span className="text-[10px] font-bold text-pine_teal/30 uppercase tracking-widest animate-pulse border border-pine_teal/10 px-3 py-1 rounded-full">
              Swipe to explore
           </span>
        </div>

      </div>

      <style jsx global>{`
        /* Keep scrollbar hidden for cleaner look */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Description Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(45, 106, 79, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(45, 106, 79, 0.5);
        }
      `}</style>
    </section>
  )
}