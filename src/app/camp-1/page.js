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

const galleryImages = [
  "/sahyadri-1.jpg", "/floating1.jpeg", "/floating2.jpeg",
  "/floating4.jpeg", "/sahyadri-2.jpeg", "/floating8.jpeg",
  "/floating3.jpeg", "/sahyadri-3.jpg", "/floating6.jpeg",
  "/floating11.jpeg", "/sahyadri-6.jpg", "/floating5.jpeg",
  "/sahyadri-5.jpg", "/floating10.jpeg", "/sahyadri-7.jpg",
  "/floating9.jpeg", "/sahyadri-8.jpg", "/grassland-hero1.jpg",
]

// --- SLIDER BLOCK COMPONENT ---
const AutoSlideBlock = ({ images, currentIndex }) => {
  return (
    <div className="relative w-full h-40 md:h-56 rounded-xl overflow-hidden shadow-sm border border-white/50 group select-none">
      {/* Sliding Track */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out will-change-transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="relative w-full h-full flex-shrink-0">
            <Image
              src={src}
              alt="Camp memory"
              fill
              className="object-cover pointer-events-none" // Prevent image drag interfering with swipe
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Camp1Page() {

  // --- STATE ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // --- TIMER LOGIC ---
  const startTimer = () => {
    // Clear any existing timer first to avoid duplicates
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 4);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    // Cleanup on unmount
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // --- MANUAL NAVIGATION HANDLERS ---
  const handleManualChange = (direction) => {
    // 1. Stop auto-slide temporarily
    if (timerRef.current) clearInterval(timerRef.current);

    // 2. Change Slide
    setCurrentIndex((prev) => {
      if (direction === 'next') return (prev + 1) % 4;
      if (direction === 'prev') return (prev - 1 + 4) % 4; // +4 ensures positive modulo
      return prev;
    });

    // 3. Restart auto-slide
    startTimer();
  };

  // --- SWIPE HANDLERS ---
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleManualChange('next'); // Swiped Left -> Next
    } else if (distance < -minSwipeDistance) {
      handleManualChange('prev'); // Swiped Right -> Prev
    }

    // Reset
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // --- DATA SPLITTING ---
  const sliderChunks = [];
  for (let i = 0; i < galleryImages.length; i += 4) {
    sliderChunks.push(galleryImages.slice(i, i + 4));
  }

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-frosted_mint/20">

      {/* ================= 1. HERO SECTION (Unchanged) ================= */}
      <section className="relative pt-25 md:pt-30">
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

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-evergreen space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-evergreen/50 backdrop-blur-md mb-4 md:mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-evergreen animate-pulse" />
              <p className="text-xs md:text-sm font-bold text-evergreen tracking-wide uppercase">{campDetails.edition}</p>
            </div>
            <h1 className="font-extrabold font-serif text-2xl sm:text-3xl md:text-6xl mb-3 text-evergreen leading-tight drop-shadow-md">{campDetails.title}</h1>
            <div className="flex flex-col gap-2 text-sm md:text-lg font-light">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 md:w-5 md:h-5" /><span>{campDetails.dates}</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 md:w-5 md:h-5" /><span>{campDetails.location}</span></div>
            </div>

            <p className="text-base md:text-xl italic border-l-2 border-evergreen/70 pl-4 ml-2">&quot;{campDetails.tagline}&quot;</p>

          </div>
          <div className="relative z-10 flex justify-center">
            <div className="relative w-[300px] h-[280px] md:w-[450px] md:h-[400px] bg-white p-3 pb-12 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 rounded-sm">
              <div className="relative w-full h-full overflow-hidden bg-gray-200">
                <Image src="/grassland-hero1.jpg" alt="Winter Camp Jan 2025 Memories" fill className="object-cover" />
              </div>
              <div className="absolute bottom-4 left-0 w-full text-center">
                <span className="font-serif text-evergreen/90 text-lg font-bold">Where It Began</span>
              </div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-white/30 backdrop-blur-sm transform -rotate-2 shadow-sm border border-white/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. CAMP GALLERY ================= */}
      <section className="py-12 px-4 md:px-6 bg-frosted_mint/50 relative">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-8 space-y-3 md:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white border border-celadon shadow-sm text-sea_green text-[10px] font-bold tracking-widest uppercase mb-1">
              <Camera size={12} className="md:w-3.5 md:h-3.5" />
              <span>Visual Archive</span>
            </div>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-evergreen">
              Moments from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sea_green to-mint_leaf">Start</span>
            </h2>
            <p className="text-pine_teal/80 text-base md:text-lg font-medium max-w-2xl mx-auto">
              &quot;Capturing the spirit of our very first rural connect cohort.&quot;
            </p>
          </div>

          {/* --- LAYOUT 1: DESKTOP ONLY (Large Screens) --- */}
          <div className="hidden lg:grid grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className={`
                      relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500
                      ${i % 5 === 0 ? "col-span-2 row-span-2" : ""}
                      ${i % 7 === 0 ? "row-span-2" : ""}
                    `}
              >
                <Image
                  src={src}
                  alt={`Winter Camp Jan 2025 Memory ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          {/* --- LAYOUT 2: MOBILE & TABLET (2 Cols) --- */}
          {/* WRAPPER: Handles Touch Events */}
          <div
            className="relative lg:hidden group/mobile-gallery"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* UPDATED BUTTON STYLES: Glassmorphic & Inset */}
            <button
              onClick={() => handleManualChange('prev')}
              className="absolute -left-2 top-1/2 -translate-y-full z-20 p-2 bg-black/20 backdrop-blur-md rounded-full border border-white/30 text-white shadow-lg active:scale-95 transition-all hover:bg-black/40"
              aria-label="Previous Photos"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => handleManualChange('next')}
              className="absolute -right-2 top-1/2 -translate-y-full z-20 p-2 bg-black/20 backdrop-blur-md rounded-full border border-white/30 text-white shadow-lg active:scale-95 transition-all hover:bg-black/40"
              aria-label="Next Photos"
            >
              <ChevronRight size={20} />
            </button>

            {/* Grid Content */}
            <div className="grid grid-cols-2 gap-3">
              {sliderChunks.slice(0, 4).map((chunk, i) => (
                <AutoSlideBlock
                  key={i}
                  images={chunk}
                  currentIndex={currentIndex}
                />
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (timerRef.current) clearInterval(timerRef.current);
                    setCurrentIndex(idx);
                    startTimer();
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-6 bg-sea_green" : "w-2 bg-sea_green/30"
                    }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}