"use client"
import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { Quote, Sparkles, User } from "lucide-react"

export default function SpeakersSection() {
  const speakers = [
    {
      name: "V Giriraj",
      title: "IAS Officer (Retired)",
      role: "Additional Chief Secretary of Maharashtra",
      description: "Distinguished Indian Administrative Service officer who retired as Additional Chief Secretary of Maharashtra. Held key positions including Chairman of 5th State Finance Commission, and Secretary in Finance, Rural Development, Rural Employment, and Water Conservation departments. Currently CEO of Maharashtra Bamboo Promotion Foundation.",
      image: "/Giriraj.png",
      tag: "IAS Officer",
    },
    {
      name: "Varsha Parchure",
      title: "Program Implementation Lead",
      role: "CEQUE",
      description: "Over 17 years in social sector focusing on women's and children's rights. Extensive work on children's education for underserved tribal communities, led Kheiwadi project in Palghar for academic and life skills. Empowers women through self-help groups and training on gender sensitivity, PESA Act, and MGNREGA schemes. Recipient of Antyoday Award and Thane Bhushan Award. MBA in Social Entrepreneurship and Master's in Social Work.",
      image: "/Varsha Parchure.png",
      tag: "Program Lead",
    },
    {
      name: "Kiran Limaye",
      title: "Assistant Professor",
      role: "Gokhale Institute of Politics and Economics, Pune",
      description: "Works with Centre for Excellence in Entrepreneurship and Development, overseeing research agenda. Founder of SAJAG, organization working in early age education.",
      image: "/Kiran Limaye.png",
      tag: "Professor",
    },
    {
      name: "Surabhi Gajbhiye",
      title: "Program Director",
      role: "SAAD NGO",
      description: "Surabhi has over a decade of experience in rural development, disaster risk reduction, child safety, mental health, climate change, and sustainable development. Former child safety specialist at SEEDS India and consultant at SAAD, Nagpur. Currently pursuing her PhD in Disaster Studies at Tata Institute of Social Sciences, Mumbai.",
      image: "/Surabhi Gajbhiye.png",
      tag: "Program Director",
    },
    {
      name: "Virendra Champanerkar",
      title: "CEO",
      role: "Pragati Pratishthan",
      description: "Leads impactful initiatives uplifting tribal communities through education, water conservation, agriculture, and skill development. Implemented solar-powered irrigation, livelihood programs, and a residential school for hearing-impaired students. His CSR partnerships improved lives of over 10,000 individuals, positioning Pragati Pratishthan as a leader in tribal development.",
      image: "/Virendra Champanerkar.png",
      tag: "CEO",
    },
    {
      name: "Kedar Joshi",
      title: "Industry Expert",
      role: "Development Sector",
      description: "Actively involved in GRA (Group for Rural Activities, IIT Bombay). To understand North East, volunteered for 3 years during 150th Birth Centenary of Swami Vivekanand in Maharashtra and Arunachal Pradesh.",
      image: "/Kedar Joshi.png",
      tag: "M.Tech IIT Bombay",
    },
  ]

  /* ---------------- AUTO SCROLL LOGIC FROM CODE 1 ---------------- */
  const sliderRef = useRef(null)
  const isPaused = useRef(false)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let rafId
    const speed = 0.5 // Adjusted slightly for the larger cards in Code 2

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

  // Card Component
  // Card Component (Updated for Smaller Size)
  const SpeakerCard = ({ speaker }) => (
    <div className="w-[240px] md:w-[280px] flex-shrink-0 flex flex-col h-[42vh] sm:h-[52vh] md:h-[60vh] min-h-[280px] max-h-[500px] bg-white rounded-3xl shadow-xl overflow-hidden border border-white/60 relative group snap-center">
      
      {/* 1. TOP: Description */}
      <div className="bg-white p-5 md:p-6 pb-10 relative flex-col flex h-[55%]">
        <Quote className="absolute top-4 left-4 text-frosted_mint/40 w-6 h-6 md:w-8 md:h-8 rotate-180 flex-shrink-0" />
        
        {/* Scrollable Text Area */}
        <div className="relative z-10 pt-4 flex-grow overflow-y-auto md:overflow-hidden md:group-hover:overflow-y-auto custom-scrollbar pr-1">
           <p className="text-pine_teal/70 text-xs md:text-sm leading-relaxed text-center font-medium">
             &quot;{speaker.description}&quot;
           </p>
        </div>
      </div>

      {/* 2. MIDDLE: Floating Avatar */}
      <div className="absolute top-[59%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border-[4px] border-white shadow-lg overflow-hidden bg-gray-50">
          {speaker.image ? (
            <Image 
              src={speaker.image} 
              alt={speaker.name} 
              fill 
              className="object-cover" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <User size={24} />
            </div>
          )}
        </div>
      </div>

      {/* 3. BOTTOM: Details */}
      <div className="relative bg-gradient-to-br from-evergreen to-pine_teal pt-10 px-3 md:px-4 text-center h-[45%] flex flex-col justify-center">
        {/* SVG Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden -mt-[1px]">
           <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-8 md:h-10 text-white fill-current transform rotate-180">
              <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" />
           </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-1.5">
          <h3 className="mt-1 font-serif text-lg md:text-xl font-bold text-white">
            {speaker.name}
          </h3>
          <span className="px-2 py-0.5 bg-white/10 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-sea_green border border-white/10 shadow-sm">
            {speaker.tag}
          </span>
          <p className="text-xs md:text-sm font-bold text-frosted_mint/90 leading-tight">
            {speaker.title}
          </p>
          <p className="text-[10px] text-white/60 font-light px-1 line-clamp-2">
            {speaker.role}
          </p>
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