"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Camera, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"
// --- WINTER CAMP JAN 2025 DATA ---
const campDetails = {
  title: "Sahyadri Rural Connect",
  edition: "January 2025",
  tagline: "The beginning of a journey into Rural India.",
  dates: "Jan 09th - 12th",
  location: "Palghar, Maharashtra"
}

const palgharPhotos = [
  {
    src: "/palghar/palghar-cohort-memorial-courtyard.jpg",
    title: "Palghar Inaugural Cohort Group",
    desc: "The complete student fellowship cohort and organizers at the campus memorial courtyard.",
    tag: "Cohort Assembly",
    span: "lg:col-span-2 lg:row-span-2"
  },
  {
    src: "/palghar/palghar-solar-pump-valley-field.jpg",
    title: "Solar Lift Irrigation Demonstration",
    desc: "Hands-on field learning about solar-powered lift irrigation in hilly tribal terrain.",
    tag: "Clean Tech & Irrigation",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-solar-panels-valley-view.jpg",
    title: "Valley Micro-Grid & Renewable Energy",
    desc: "Understanding decentralized solar infrastructure supporting rural agricultural clusters.",
    tag: "Renewable Energy",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-irrigation-filter-demo.jpg",
    title: "Micro-Irrigation & Water Filtration Tech",
    desc: "Field demonstration of pressurized drip filtration and efficient water management systems.",
    tag: "Water Engineering",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-fort-stone-steps-cohort.jpg",
    title: "Heritage Fort Exploration",
    desc: "Fellows gathering on historic fort bastions during sunset field excursions.",
    tag: "Heritage & Trekking",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-mango-orchard-community.jpg",
    title: "Grassroots Dialogue with Farming Families",
    desc: "Student fellows engaging with local village farmers in Palghar mango orchards.",
    tag: "Orchard Immersion",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-classroom-reflection-session.jpg",
    title: "Peer Learning & Cohort Reflections",
    desc: "Interactive discussion and debrief sessions synthesizing daily grassroots field insights.",
    tag: "Cohort Reflection",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-community-tree-dialogue.jpg",
    title: "Village Tree Assembly & Dialogue",
    desc: "Conversations with village elders and farmers under the community tree shade.",
    tag: "Village Assembly",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-tribal-household-mangoes.jpg",
    title: "Tribal Household & Family Immersion",
    desc: "Fellows connecting with local village families and understanding rural livelihoods.",
    tag: "Community Connect",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-village-street-interaction.jpg",
    title: "Village Walk & Elder Interactions",
    desc: "Walking through village hamlets and engaging with local community leaders.",
    tag: "Hamlet Walk",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-traditional-community-meal.jpg",
    title: "Communal Dining in Village Hamlet",
    desc: "Sharing authentic, home-cooked Maharashtrian meals on traditional floor mats.",
    tag: "Cultural Lived Experience",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-village-children-fellows.jpg",
    title: "Learning with Village Youth",
    desc: "Interacting with rural schoolchildren, understanding village education & everyday aspirations.",
    tag: "Youth & Education",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-viewpoint-fellows-scooter.jpg",
    title: "Sahyadri Ridge Explorations",
    desc: "Fellows exploring scenic vantage points across the Western Ghats terrain.",
    tag: "Field Expeditions",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-mango-harvest-fellows.jpg",
    title: "Local Produce & Agro-Ecology",
    desc: "Learning about seasonal agricultural cycles, fruit orchards, and local livelihoods.",
    tag: "Rural Livelihoods",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-village-temple-community-assembly.jpg",
    title: "Village Temple Community Assembly",
    desc: "Engaging with village elders, temple trusts, and grassroots community leaders.",
    tag: "Cultural Assembly",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    src: "/palghar/palghar-heritage-stone-wada-dusk.png",
    title: "Traditional Stone Wada Architecture",
    desc: "Exploring indigenous basalt stone craftsmanship and rural heritage architecture at dusk.",
    tag: "Heritage Architecture",
    span: "lg:col-span-1 lg:row-span-1"
  }
]

export default function Camp1Page() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-slide for mobile view
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % palgharPhotos.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveSlide((prev) => (prev + 1) % palgharPhotos.length);
  };

  const handlePrev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveSlide((prev) => (prev - 1 + palgharPhotos.length) % palgharPhotos.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) handleNext();
    else if (distance < -40) handlePrev();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-[#f5efe2] text-[#3e2410]">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-28 md:pt-36 pb-12 sm:pb-16 overflow-hidden bg-[#f5efe2] text-[#3e2410] border-b border-[#dccdb2]/80">
        {/* Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#3a8c7e]/10 rounded-full blur-[110px] pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#c8880a]/10 rounded-full blur-[90px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          <div className="space-y-4 sm:space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdfbf7] border border-[#dccdb2] shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a8c7e] animate-pulse" />
              <p className="text-xs md:text-sm font-semibold text-[#1f5c54] tracking-widest uppercase">{campDetails.edition}</p>
            </div>
            <h1 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 text-[#3e2410] leading-tight tracking-tight">{campDetails.title}</h1>
            <div className="flex flex-wrap gap-3 text-sm font-medium text-[#3e2410]">
              <div className="flex items-center gap-2 bg-[#fdfbf7] px-4 py-2 rounded-full border border-[#dccdb2] shadow-xs"><Calendar className="w-4 h-4 text-[#3a8c7e]" /><span className="text-xs sm:text-sm">{campDetails.dates}</span></div>
              <div className="flex items-center gap-2 bg-[#fdfbf7] px-4 py-2 rounded-full border border-[#dccdb2] shadow-xs"><MapPin className="w-4 h-4 text-[#c8880a]" /><span className="text-xs sm:text-sm">{campDetails.location}</span></div>
            </div>

            <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#7a5232] border-l-2 border-[#3a8c7e] pl-4 ml-1 leading-relaxed">&quot;{campDetails.tagline}&quot;</p>
          </div>
          
          {/* Polaroid Hero Card */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[420px] h-[270px] xs:h-[300px] md:h-[360px] bg-[#fdfbf7] p-3 pb-10 sm:pb-12 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500 rounded-2xl cursor-pointer border border-[#dccdb2]"
              onClick={() => setSelectedPhoto(palgharPhotos[0])}
            >
              <div className="relative w-full h-full overflow-hidden bg-[#ebe2d1] rounded-xl border border-[#dccdb2]/60">
                <Image 
                  src="/palghar/palghar-mango-orchard-community.jpg" 
                  alt="Winter Camp Palghar Jan 2025" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-3 sm:bottom-4 left-0 w-full text-center px-2">
                <span className="font-serif text-[#3e2410] font-normal text-sm sm:text-base">Palghar Inaugural Cohort • Jan 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. PALGHAR PHOTO GALLERY ================= */}
      <section className="py-12 sm:py-18 px-3 sm:px-6 bg-[#f5efe2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c8880a]/15 border border-[#c8880a]/30 shadow-xs text-[#c8880a] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1">
              <Camera size={13} className="text-[#c8880a]" />
              <span>Palghar Visual Archive</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e2410]">
              Memories from <span className="text-[#3a8c7e] italic">Palghar</span>
            </h2>
            <p className="text-[#7a5232] text-xs sm:text-sm md:text-base font-medium max-w-2xl mx-auto">
              Real field moments capturing community dialogues, village immersion, and our inaugural cohort fellows.
            </p>
          </div>

          {/* --- RESPONSIVE PHOTO GALLERY GRID --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-[260px] sm:auto-rows-[280px]">
            {palgharPhotos.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(item)}
                className={`relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-[#ebe2d1] border border-[#dccdb2] ${
                  idx === 0 ? "sm:col-span-2 sm:row-span-2 auto-rows-[340px] sm:min-h-[420px]" : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241407]/90 via-[#241407]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Tag Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/60 text-[#d4a825] backdrop-blur-md border border-[#dccdb2]/20">
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/20 text-[#f5efe2] backdrop-blur-md border border-white/10">
                    #{idx + 1}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 text-[#f5efe2] text-left transform transition-transform duration-300">
                  <h3 className="font-serif font-bold text-sm sm:text-base lg:text-lg leading-snug text-[#f5efe2] mb-1 drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#f5efe2]/90 line-clamp-2 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 3. LIGHTBOX MODAL ================= */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#241407] rounded-2xl overflow-hidden border border-[#dccdb2]/30 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer border border-white/30"
            >
              ✕
            </button>

            {/* Photo Container */}
            <div className="relative w-full h-[360px] sm:h-[480px] md:h-[540px] bg-black">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Details */}
            <div className="p-4 sm:p-5 bg-[#3e2410] text-[#f5efe2] text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#3a8c7e] text-[#f5efe2]">
                  {selectedPhoto.tag}
                </span>
              </div>
              <h3 className="font-serif font-bold text-base sm:text-xl text-[#f5efe2]">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#f5efe2]/85 mt-0.5">
                {selectedPhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}