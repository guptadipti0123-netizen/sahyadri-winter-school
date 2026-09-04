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

  // Modern Executive Speaker Card Component
  const SpeakerCard = ({ speaker }) => (
    <div className="w-[300px] sm:w-[340px] md:w-[360px] h-[450px] md:h-[470px] flex-shrink-0 flex flex-col justify-between bg-white rounded-3xl p-5 md:p-6 shadow-md hover:shadow-2xl border border-celadon/50 hover:border-mint_leaf/60 transition-all duration-300 hover:-translate-y-2 group snap-center relative overflow-hidden">
      
      {/* Top subtle gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-dark_emerald via-mint_leaf to-celadon" />

      {/* 1. TOP: Profile Header */}
      <div className="flex items-center gap-3.5 pt-1">
        {/* Avatar with gradient ring */}
        <div className="relative w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl overflow-hidden ring-2 ring-mint_leaf/40 shadow-md shrink-0 bg-frosted_mint/40 group-hover:scale-105 transition-transform duration-300">
          {speaker.image ? (
            <Image 
              src={speaker.image} 
              alt={speaker.name} 
              fill 
              className="object-cover" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-dark_emerald/50">
              <User size={28} />
            </div>
          )}
        </div>

        {/* Name & Designation */}
        <div className="flex flex-col min-w-0 flex-1">
          <span className="self-start px-2.5 py-0.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider bg-frosted_mint/70 text-dark_emerald border border-celadon mb-1">
            {speaker.tag}
          </span>
          <h3 className="font-serif text-base md:text-lg font-bold text-evergreen leading-tight truncate group-hover:text-dark_emerald transition-colors">
            {speaker.name}
          </h3>
          <p className="text-xs md:text-sm font-semibold text-sea_green leading-tight truncate mt-0.5">
            {speaker.title}
          </p>
          <p className="text-[11px] text-pine_teal/65 font-medium truncate mt-0.5">
            {speaker.role}
          </p>
        </div>
      </div>

      {/* 2. MIDDLE: Quote / Bio Section */}
      <div className="relative bg-gradient-to-br from-frosted_mint/35 to-frosted_mint/15 rounded-2xl p-4 md:p-5 border border-mint_leaf/20 my-3 flex-1 flex flex-col justify-center overflow-hidden">
        <Quote className="absolute top-2.5 right-3 text-mint_leaf/25 w-7 h-7 rotate-180 pointer-events-none" />
        
        <p className="text-pine_teal/85 text-xs md:text-[13px] leading-relaxed font-sans line-clamp-6 text-left relative z-10">
          &quot;{speaker.description}&quot;
        </p>
      </div>

      {/* 3. BOTTOM: Footer Badge */}
      <div className="pt-2 border-t border-celadon/30 flex items-center justify-between text-[11px] text-pine_teal/60 font-medium">
        <div className="flex items-center gap-1.5 text-dark_emerald font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-mint_leaf_2" />
          <span>Thought Leader</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-md bg-celadon/20 text-pine_teal/70 font-semibold">
          Sahyadri Connect
        </span>
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