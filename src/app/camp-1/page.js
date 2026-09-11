"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Camera, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"
// --- WINTER CAMP JAN 2025 DATA ---
const campDetails = {
  title: "Sahyadri Winter School",
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
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-frosted_mint/20">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-24 md:pt-32 pb-10 overflow-hidden">
        {/* --- WAVE BACKGROUND --- */}
        <div className="absolute inset-0 z-0">
          <svg viewBox="0 0 1440 800" className="absolute -top-[420px] left-0 w-full h-[800px] -z-10" preserveAspectRatio="none">
            <path fill="#1B4332" fillOpacity="0.95" d="M0,520 C200,620 420,420 640,500 C860,560 1080,650 1280,560 C1380,500 1440,480 1440,460 L1440,0 L0,0 Z" />
          </svg>
          <svg viewBox="0 0 1440 700" className="absolute -top-[300px] left-0 w-full h-[700px] -z-10" preserveAspectRatio="none">
            <path fill="#40916C" fillOpacity="0.8" d="M0,460 C220,540 420,360 660,440 C900,500 1120,580 1320,500 C1400,460 1440,440 1440,420 L1440,0 L0,0 Z" />
          </svg>
          <svg viewBox="0 0 1440 600" className="absolute -top-[180px] left-0 w-full h-[600px] -z-10" preserveAspectRatio="none">
            <path fill="#d8f3dc" fillOpacity="0.65" d="M0,380 C260,430 460,320 700,380 C940,420 1140,470 1340,410 C1400,380 1440,360 1440,340 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-evergreen space-y-4 sm:space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-evergreen/30 backdrop-blur-md mb-2 md:mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-sea_green animate-pulse" />
              <p className="text-xs md:text-sm font-bold text-evergreen tracking-wider uppercase">{campDetails.edition}</p>
            </div>
            <h1 className="font-extrabold font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 text-evergreen leading-tight drop-shadow-sm">{campDetails.title}</h1>
            <div className="flex flex-col gap-2 text-sm md:text-base font-medium text-pine_teal/90">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-sea_green" /><span>{campDetails.dates}</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-sea_green" /><span>{campDetails.location}</span></div>
            </div>

            <p className="font-serif italic text-base sm:text-lg md:text-xl text-pine_teal/85 border-l-2 border-sea_green pl-4 ml-1 leading-relaxed">&quot;{campDetails.tagline}&quot;</p>
          </div>
          
          {/* Polaroid Hero Card */}
          <div className="relative z-10 flex justify-center">
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[420px] h-[270px] xs:h-[300px] md:h-[360px] bg-white p-3 pb-10 sm:pb-12 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 rounded-sm cursor-pointer"
              onClick={() => setSelectedPhoto(palgharPhotos[0])}
            >
              <div className="relative w-full h-full overflow-hidden bg-gray-100 rounded-xs">
                <Image 
                  src="/palghar/palghar-mango-orchard-community.jpg" 
                  alt="Winter Camp Palghar Jan 2025" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-3 sm:bottom-4 left-0 w-full text-center px-2">
                <span className="font-serif text-evergreen font-bold text-sm sm:text-base">Palghar Inaugural Cohort • Jan 2025</span>
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-8 bg-white/40 backdrop-blur-sm transform -rotate-2 shadow-xs border border-white/50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. PALGHAR PHOTO GALLERY ================= */}
      <section className="py-10 sm:py-16 px-3 sm:px-6 bg-frosted_mint/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-celadon shadow-xs text-sea_green text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1">
              <Camera size={13} className="text-sea_green" />
              <span>Palghar Visual Archive</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-evergreen">
              Memories from <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea_green to-mint_leaf">Palghar</span>
            </h2>
            <p className="text-pine_teal/80 text-xs sm:text-sm md:text-base font-medium max-w-2xl mx-auto">
              Real field moments capturing community dialogues, village immersion, and our inaugural cohort fellows.
            </p>
          </div>

          {/* --- DESKTOP VIEW: BENTO / EDITORIAL GRID --- */}
          <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-5 auto-rows-[240px]">
            {palgharPhotos.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(item)}
                className={`relative rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-evergreen/10 border-2 border-white ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Tag */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/50 text-frosted_mint backdrop-blur-md border border-white/20">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 text-white transform transition-transform duration-300">
                  <h3 className="font-serif font-bold text-sm sm:text-lg lg:text-xl leading-tight text-white mb-1 drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-frosted_mint/90 line-clamp-2 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* --- MOBILE VIEW: INTERACTIVE SLIDER CARDS --- */}
          <div 
            className="md:hidden relative px-1"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Nav Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center border border-white/30 active:scale-95 transition-transform shadow-md"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center border border-white/30 active:scale-95 transition-transform shadow-md"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>

            {/* Current Active Slide Card */}
            <div 
              className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-evergreen/10 cursor-pointer"
              onClick={() => setSelectedPhoto(palgharPhotos[activeSlide])}
            >
              <Image
                src={palgharPhotos[activeSlide].src}
                alt={palgharPhotos[activeSlide].title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

              {/* Tag */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-black/60 text-frosted_mint backdrop-blur-md border border-white/20">
                  {palgharPhotos[activeSlide].tag}
                </span>
              </div>

              {/* Text */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-white z-10">
                <h3 className="font-serif font-bold text-base leading-snug mb-1">
                  {palgharPhotos[activeSlide].title}
                </h3>
                <p className="text-xs text-frosted_mint/90 line-clamp-2 leading-relaxed font-light">
                  {palgharPhotos[activeSlide].desc}
                </p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-1.5 mt-4">
              {palgharPhotos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (timerRef.current) clearInterval(timerRef.current);
                    setActiveSlide(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === i ? "w-6 bg-sea_green" : "w-2 bg-sea_green/30"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
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
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#1b4332] rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
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
            <div className="p-4 sm:p-5 bg-evergreen text-white">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-sea_green text-white">
                  {selectedPhoto.tag}
                </span>
              </div>
              <h3 className="font-serif font-bold text-base sm:text-xl text-white">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-frosted_mint/85 mt-0.5">
                {selectedPhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}