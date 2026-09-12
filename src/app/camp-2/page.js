"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
   Calendar, MapPin, Play, ChevronLeft, ChevronRight, BookOpen, Mic, Sun, ArrowRight, Target, Pause, Volume2, VolumeX,
} from "lucide-react"

// --- WINTER CAMP DEC 2025 DATA ---
const campDetails = {
   title: "Sahyadri Rural Connect",
   edition: "December 2025",
   dates: "Dec 24th - 28th",
   location: "Kothimbe, Karjat",
   tagline: "Discover. Serve. Connect with Rural India."
}

// ... (Keep Stats Data & Itinerary Data as is) ...
const stats = [
   {
      value: "10+",
      label: "Disciplines",
      desc: "Law, Health, Social Work, Economics & more",
      color: "from-orange-100 to-orange-200",
      textColor: "text-orange-700",
      mountainColor: "fill-orange-500",
      mountainPath: "M0 100 L0 60 C30 60 40 20 70 20 C90 20 95 60 100 60 L100 100 Z"
   },
   {
      value: "15+",
      label: "Institutes",
      desc: "Including TISS, ILS, Fergusson, & IITs",
      color: "from-emerald-100 to-emerald-200",
      textColor: "text-emerald-700",
      mountainColor: "fill-emerald-600",
      mountainPath: "M0 100 L0 80 C20 80 30 10 50 10 C70 10 80 80 100 80 L100 100 Z"
   },
   {
      value: "5",
      label: "Study Levels",
      desc: "From 1st Year Undergrad to PhD/Post-Grad",
      color: "from-blue-100 to-blue-200",
      textColor: "text-blue-700",
      mountainColor: "fill-blue-500",
      mountainPath: "M0 100 L0 70 C20 70 25 20 35 20 C45 20 50 45 60 45 C70 45 75 10 85 10 C95 10 100 70 100 70 L100 100 Z"
   },
   {
      value: "40",
      label: "Selected Minds",
      desc: "Curated cohort of future social leaders",
      color: "from-purple-100 to-purple-200",
      textColor: "text-purple-700",
      mountainColor: "fill-purple-600",
      mountainPath: "M0 100 L0 80 C10 80 20 30 50 30 C80 30 90 80 100 80 L100 100 Z"
   },
]

const itinerary = [
   {
      day: "Day 01",
      date: "Dec 24",
      theme: "Inauguration & Policy",
      activities: ["Inauguration", "Discussions on Policy & Environment", "Icebreaking"],
      speakers: ["Mr. Suresh Hake (Vanvasi Kalyan Ashram)", "Dr. Tupkary (BAVP)", "Ms.Siddhi Advankar"],
      icon: <Sun size={20} />,
      color: "bg-orange-50 border-orange-200 text-orange-700",
      accentColor: "bg-gradient-to-br from-orange-700 to-orange-300"
   },
   {
      day: "Day 02",
      date: "Dec 25",
      theme: "History & Heritage",
      activities: ["Trekking", "Maratha Samrajya Discussion", "FPO Visit", "Preparation for Cultural Program", "Bonfire"],
      speakers: ["Prof. Nikhil Ghag", "Mr. Ashok Shedke"],
      icon: <MapPin size={20} />,
      color: "bg-emerald-50 border-emerald-200 text-emerald-700",
      accentColor: "bg-gradient-to-br from-emerald-700 to-emerald-300"
   },
   {
      day: "Day 03",
      date: "Dec 26",
      theme: "Rural Immersion",
      activities: ["Rural Immersion", "Organic Farming", "VKA Hostel Visit", "Bonfire"],
      speakers: ["Mr. Mithun Ovalekar"],
      icon: <Target size={20} />,
      color: "bg-blue-50 border-blue-200 text-blue-700",
      accentColor: "bg-gradient-to-br from-blue-700 to-blue-300"
   },
   {
      day: "Day 04",
      date: "Dec 27",
      theme: "Tribal Life & Innovation",
      activities: ["Forest Walk & Herbs Collection", "Documentry on Deep Forest Tribes", "Collaborative Cooking", "Solar Initiatives Discussion", "Cultural Night"],
      speakers: ["Mr. Chirag Rawat", "Mr. Atharv Patankar", "Mr. Amogh Sahaje"],
      icon: <BookOpen size={20} />,
      color: "bg-purple-50 border-purple-200 text-purple-700",
      accentColor: "bg-gradient-to-br from-purple-700 to-purple-300"
   },
   {
      day: "Day 05",
      date: "Dec 28",
      theme: "Reflections & Future",
      activities: ["Learning Beyond Semester", "Presentations", "Momento Distribution"],
      speakers: ["Mr. Shubham Gole", "Prof. Krishna Kanakgiri", "Mr. Amogh Sahaje"],
      icon: <Mic size={20} />,
      color: "bg-rose-50 border-rose-200 text-rose-700",
      accentColor: "bg-gradient-to-br from-rose-700 to-rose-300"
   }
]

const heroSlides = [
   "/camp2/videos/camp-2-v1.mp4",
   "/camp2/videos/camp-2-v2.mp4",
   "/camp2/videos/camp-2-v3.mp4",
   "/camp2/videos/camp-2-v5.mp4",
   "/camp2/videos/camp-2-v6.mp4",
]

const whiteboardImages = [
   "/day5-presentation1.png",
   "/day5-presentation2.png",
   "/day5-presentation3.png",
   "/day5-presentation4.png"
]

// 24 Images for Gallery
const photoGallery = [
   "/camp2/camp2-day2-i3.png", "/camp2/camp2-day1-i1.jpg", "/camp2/camp2-day1-i2.jpg", "/camp2/camp2-day1-i3.jpg",
   "/camp2/camp2-day1-i4.jpg", "/camp2/camp2-day1-i5.jpg", "/camp2/camp2-day1-i6.jpg", "/camp2/camp2-day2-i1.jpg",
   "/camp2/camp2-day2-i2.jpg", "/camp2/camp2-day3-i1.jpg", "/camp2/camp2-day3-i2.jpg", "/camp2/camp2-day3-i3.jpg",
   "/camp2/camp2-day3-i4.jpg", "/camp2/camp2-day3-i5.jpg", "/camp2/camp2-day3-i6.jpg", "/camp2/camp2-day4-i1.jpg",
   "/camp2/camp2-day4-i2.jpg", "/camp2/camp2-day4-i3.jpg", "/camp2/camp2-day4-i5.jpg", "/camp2/camp2-day4-i6.jpg",
   "/camp2/camp2-day5-i1.jpg", "/camp2/camp2-day5-i2.jpg", "/camp2/camp2-day5-i3.jpg", "/camp2/camp2-day5-i4.jpg",
]

// --- HELPER COMPONENT: SLIDING BLOCK ---
const AutoSlideBlock = ({ images, currentIndex }) => {
   return (
      <div className="relative w-full h-40 md:h-52 rounded-xl overflow-hidden shadow-sm border border-white/50 group">
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
                     className="object-cover"
                     sizes="(max-width: 768px) 50vw, 33vw"
                  />
               </div>
            ))}
         </div>
      </div>
   );
};

const formatTime = (time) => {
   if (!time) return "0:00"
   const minutes = Math.floor(time / 60)
   const seconds = Math.floor(time % 60)
   return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

export default function Camp2Page() {
   // --- VIDEO STATE ---
   const [currentSlide, setCurrentSlide] = useState(0)
   const [isPlaying, setIsPlaying] = useState(true)
   const [isMuted, setIsMuted] = useState(true)
   const [progress, setProgress] = useState(0)
   const [currentTime, setCurrentTime] = useState(0)
   const [duration, setDuration] = useState(0)

   // --- PRESENTATION STATE ---
   const [currentPresentation, setCurrentPresentation] = useState(0)

   // --- GALLERY STATE (AUTO SLIDE) ---
   const [galleryIndex, setGalleryIndex] = useState(0);
   const timerRef = useRef(null);
   const touchStartX = useRef(0);
   const touchEndX = useRef(0);

   const videoRef = useRef(null)

   // 1. Presentation Auto-Slide
   useEffect(() => {
      const timer = setInterval(() => {
         setCurrentPresentation((prev) => (prev + 1) % whiteboardImages.length)
      }, 3000)
      return () => clearInterval(timer)
   }, [])

   // 2. Gallery Auto-Slide (Global Timer Logic)
   const startTimer = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
         // 24 photos total / 4 blocks = 6 photos per block
         // Cycle 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 0
         setGalleryIndex((prev) => (prev + 1) % 6);
      }, 4000);
   };

   useEffect(() => {
      startTimer();
      return () => {
         if (timerRef.current) clearInterval(timerRef.current);
      };
   }, []);

   // --- MANUAL NAVIGATION HANDLERS ---
   const handleManualChange = (direction) => {
      if (timerRef.current) clearInterval(timerRef.current);
      setGalleryIndex((prev) => {
         if (direction === 'next') return (prev + 1) % 6;
         if (direction === 'prev') return (prev - 1 + 6) % 6; // +6 ensures positive modulo
         return prev;
      });
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
         handleManualChange('next');
      } else if (distance < -minSwipeDistance) {
         handleManualChange('prev');
      }
      touchStartX.current = 0;
      touchEndX.current = 0;
   };

   // 3. Video Logic
   useEffect(() => {
      const video = videoRef.current;
      if (!video) return;
      video.muted = isMuted;
      if (isPlaying) {
         const playPromise = video.play();
         if (playPromise !== undefined) playPromise.catch(() => { });
      } else {
         video.pause();
      }
   }, [currentSlide, isPlaying, isMuted])

   const handleTimeUpdate = () => {
      const video = videoRef.current
      if (video) {
         setCurrentTime(video.currentTime)
         setProgress((video.currentTime / video.duration) * 100)
      }
   }

   const handleLoadedMetadata = () => {
      const video = videoRef.current
      if (video) setDuration(video.duration)
   }

   const handleVideoEnded = () => {
      if (isPlaying) nextSlide()
   }

   const handleSeek = (e) => {
      const newTime = (e.target.value / 100) * duration
      if (videoRef.current) {
         videoRef.current.currentTime = newTime
         setCurrentTime(newTime)
         setProgress(e.target.value)
      }
   }

   const togglePlay = () => setIsPlaying(!isPlaying);
   const toggleMute = () => setIsMuted(!isMuted);

   const nextSlide = () => {
      setProgress(0)
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
   }

   const prevSlide = () => {
      setProgress(0)
      setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
   }

   // --- DATA PROCESSING FOR MOBILE/TABLET GALLERY ---
   // Split 24 images into 6 chunks of 4 images each
   const sliderChunks = [];
   for (let i = 0; i < photoGallery.length; i += 6) {
      sliderChunks.push(photoGallery.slice(i, i + 6));
   }

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

               <div className="relative z-10 flex justify-center">
                  <div className="relative w-full max-w-[270px] xs:max-w-[290px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[300px] h-[500px] xs:h-[540px] md:h-[600px] lg:h-[450px] bg-black rounded-[2rem] sm:rounded-[2.5rem] border-[6px] sm:border-[8px] border-[#3e2410] shadow-xl overflow-hidden ring-4 ring-[#dccdb2]/40 group">
                     {/* --- IPHONE NOTCH START --- */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-6 sm:h-7 bg-[#3e2410] rounded-b-2xl z-30 flex items-center justify-center gap-2">
                        {/* Speaker Grill */}
                        <div className="w-8 sm:w-10 h-1 bg-gray-800 rounded-full"></div>
                        {/* Camera Dot */}
                        <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                     </div>
                     {/* --- IPHONE NOTCH END --- */}
                     <div className="relative w-full h-full bg-black" onClick={togglePlay}>
                        <video ref={videoRef} key={currentSlide} className="w-full h-full object-cover opacity-90 cursor-pointer" playsInline preload="auto" onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} onEnded={handleVideoEnded}>
                           <source src={heroSlides[currentSlide]} type="video/mp4" />
                        </video>
                        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${isPlaying ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
                           <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/30">
                              {isPlaying ? <Pause size={28} className="text-white fill-current" /> : <Play size={28} className="text-white fill-current ml-1" />}
                           </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent pt-10 pb-5 px-4 z-20 flex flex-col gap-2.5" onClick={(e) => e.stopPropagation()}>
                           <div className="w-full flex items-center gap-2">
                              <span className="text-[9px] sm:text-[10px] text-white/80 font-mono w-7 text-right">{formatTime(currentTime)}</span>
                              <input type="range" min="0" max="100" value={progress || 0} onChange={handleSeek} className="flex-grow h-1 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:bg-[#3a8c7e] [&::-webkit-slider-thumb]:rounded-full" />
                              <span className="text-[9px] sm:text-[10px] text-white/80 font-mono w-7">{formatTime(duration)}</span>
                           </div>
                           <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2.5">
                                 <button onClick={togglePlay} className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer" aria-label="Play/Pause">{isPlaying ? <Pause size={16} /> : <Play size={16} />}</button>
                                 <button onClick={toggleMute} className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer" aria-label="Mute/Unmute">{isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}</button>
                              </div>
                              <span className="text-white/60 text-[9px] sm:text-[10px] font-medium uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded bg-black/20">Cam {currentSlide + 1}/{heroSlides.length}</span>
                           </div>
                        </div>
                     </div>
                     <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all z-30 cursor-pointer opacity-80 group-hover:opacity-100" aria-label="Previous Video"><ChevronLeft size={20} /></button>
                     <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all z-30 cursor-pointer opacity-80 group-hover:opacity-100" aria-label="Next Video"><ChevronRight size={20} /></button>
                  </div>
               </div>
            </div>
         </section>

         {/* ================= 2. STATS SECTION ================= */}
         <section className="py-10 md:py-14 px-3 sm:px-6 bg-[#ebe2d1]/40 relative overflow-hidden border-b border-[#dccdb2]">
            <div className="max-w-6xl mx-auto relative z-10">

               {/* Header */}
               <div className="text-center mb-6 md:mb-10">
                  <div className="inline-block bg-[#fdfbf7] border border-[#dccdb2] rounded-2xl px-5 sm:px-8 pt-4 pb-3 max-w-3xl mx-auto shadow-xs relative">
                     <p className="text-[#3e2410] text-xs sm:text-sm md:text-base font-medium leading-relaxed italic">
                        &quot;40 participants selected from Institutes like IIT, IIM, TISS, IIPS, IGIDR, ILS, FC etc.&quot;
                     </p>
                  </div>
               </div>

               {/* SCENIC LANDSCAPE GRID */}
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                  {stats.map((stat, i) => (
                     <div
                        key={i}
                        className="group relative min-h-[175px] sm:min-h-[195px] md:min-h-[235px] bg-[#fdfbf7] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#dccdb2] flex flex-col items-center justify-between hover:-translate-y-1"
                     >

                        {/* 1. THE SKY (Top Content) */}
                        <div
                           className={`w-full flex-1 bg-gradient-to-b ${stat.color} bg-opacity-25 p-2.5 pt-3 sm:p-4 sm:pt-6 md:p-6 md:pt-8 flex flex-col items-center relative z-10 transition-colors duration-500 group-hover:bg-opacity-40`}
                        >

                           {/* Floating Value */}
                           <div className="relative">
                              <div className={`absolute inset-0 bg-white blur-xl opacity-60 rounded-full scale-150`} />
                              <span
                                 className={`relative text-3xl sm:text-4xl md:text-5xl font-black ${stat.textColor} drop-shadow-sm tracking-tight`}
                              >
                                 {stat.value}
                              </span>
                           </div>

                           {/* Label */}
                           <span
                              className={`mt-1 sm:mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest ${stat.textColor} opacity-80`}
                           >
                              {stat.label}
                           </span>
                        </div>

                        {/* 2. THE MOUNTAIN */}
                        <div className="absolute bottom-0 w-full h-[52%] md:h-[55%] z-20 pointer-events-none">
                           <div className="relative w-full h-full">

                              {/* MIST LAYER */}
                              <svg
                                 className="absolute bottom-0 w-full h-full"
                                 viewBox="0 0 100 100"
                                 preserveAspectRatio="none"
                              >
                                 <path
                                    d={stat.mountainPath}
                                    className={`${stat.mountainColor} opacity-30`}
                                    style={{
                                       transform: "scale(1.1) translateY(5px)",
                                       transformOrigin: "bottom center",
                                     }}
                                 />
                              </svg>

                              {/* MAIN MOUNTAIN */}
                              <svg
                                 className="absolute bottom-0 w-full h-full drop-shadow-md transition-transform duration-500 group-hover:scale-[1.02] origin-bottom"
                                 viewBox="0 0 100 100"
                                 preserveAspectRatio="none"
                              >
                                 <path
                                    d={stat.mountainPath}
                                    className={`${stat.mountainColor}`}
                                 />
                              </svg>

                              {/* TEXT CONTENT */}
                              <div className="absolute bottom-0 left-0 right-0 pb-2 sm:pb-4 md:pb-5 px-2 text-center z-30">
                                 <p className="text-white text-[9.5px] xs:text-[10px] sm:text-xs md:text-sm font-medium leading-tight sm:leading-relaxed opacity-90 max-w-[130px] md:max-w-[160px] mx-auto relative text-shadow line-clamp-2 sm:line-clamp-none">
                                    {stat.desc}
                                 </p>
                              </div>

                           </div>
                        </div>

                     </div>
                  ))}
               </div>

            </div>
         </section>

         {/* ================= 3. THE ITINERARY ================= */}
         <section className="py-14 bg-[#f5efe2] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
               <div className="text-center mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c8880a] bg-[#c8880a]/10 px-3.5 py-1 rounded-full border border-[#c8880a]/20">
                     EXPERIENTIAL SCHEDULE
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e2410] mt-2">5 Days of Impact</h2>
                  <p className="text-[#7a5232] text-base md:text-lg font-medium mt-1">A journey through the camp experience.</p>
               </div>
               <div className="relative group/track">
                  <div className="flex items-stretch gap-4 overflow-x-auto pb-4 md:pb-12 pt-4 px-4 snap-x snap-mandatory hide-scrollbar">
                     {itinerary.map((item, index) => {
                        const iconColorClass = item.color.split(' ')[2];
                        const bgLightClass = item.color.split(' ')[0];
                        return (
                           <div key={index} className="flex items-center shrink-0">
                              <div className={`w-[280px] md:w-[320px] bg-[#fdfbf7] rounded-2xl p-6 border border-[#dccdb2] shadow-sm hover:shadow-xl transition-all duration-300 snap-center relative z-10 overflow-hidden flex flex-col h-full group hover:-translate-y-1`}>
                                 <div className={`absolute top-0 left-0 w-full h-1.5 ${item.accentColor}`} />
                                 <div className="flex justify-between items-start mb-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bgLightClass} ${iconColorClass} shadow-sm group-hover:scale-110 transition-transform`}>{item.icon}</div>
                                    <div className="text-right">
                                       <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#7a5232]">{item.date}</span>
                                       <span className={`text-base sm:text-lg font-bold ${iconColorClass}`}>{item.day}</span>
                                    </div>
                                 </div>
                                 <h3 className="font-serif text-base sm:text-lg font-bold text-[#3e2410] leading-tight min-h-[3rem] text-left">{item.theme}</h3>
                                 <ul className="space-y-2 mb-6 flex-grow text-left">
                                    {item.activities.map((act, i) => (
                                       <li key={i} className="text-sm sm:text-base text-[#7a5232] flex items-start gap-2">
                                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${item.accentColor}`} />
                                          <span className="leading-snug">{act}</span>
                                       </li>
                                    ))}
                                 </ul>
                                 {item.speakers && (
                                    <div className="pt-3 border-t border-[#dccdb2]/60 mt-auto text-left">
                                       <p className="text-[10px] font-bold text-[#7a5232] uppercase tracking-wider mb-2">Keynote Speakers</p>
                                       <div className="flex flex-wrap gap-1.5">
                                          {item.speakers.map((sp, i) => (
                                             <span key={i} className="px-2.5 py-1 bg-[#f5efe2] rounded-full text-xs font-semibold text-[#3e2410] border border-[#dccdb2] cursor-default transition-colors duration-300 hover:bg-[#3a8c7e] hover:text-[#f5efe2]">{sp}</span>
                                          ))}
                                       </div>
                                    </div>
                                 )}
                              </div>
                              {index !== itinerary.length - 1 && (
                                 <div className="hidden md:flex w-12 shrink-0 items-center justify-center relative z-0 mx-1">
                                    <div className="absolute left-0 right-0 h-[2px] border-t-2 border-dashed border-[#dccdb2] top-1/2 -translate-y-1/2" />
                                    <div className="w-7 h-7 rounded-full bg-[#fdfbf7] border border-[#dccdb2] flex items-center justify-center z-10 shadow-sm"><ArrowRight size={12} className="text-[#3a8c7e]" /></div>
                                 </div>
                              )}
                           </div>
                        );
                     })}
                  </div>
                  <div className="text-center text-xs sm:text-sm text-[#7a5232] animate-pulse">Swipe to follow the trail →</div>
               </div>
            </div>
            <style jsx global>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
         `}</style>
         </section>

         {/* ================= 4. PRESENTATIONS SECTION ================= */}
         <section className="px-4 py-12 relative bg-[#ebe2d1]/50 border-y border-[#dccdb2]">
            <div className="max-w-6xl md:max-w-4xl mx-auto bg-[#fdfbf7] rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden shadow-sm border border-[#dccdb2]">
               <div className="relative z-10 text-left">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
                     <div>
                        <span className="text-[#f5efe2] font-bold tracking-widest text-[10px] uppercase bg-[#3a8c7e] px-2.5 py-1 rounded-full">Outcomes</span>
                        <h2 className="mt-3 font-serif text-xl md:text-3xl font-bold text-[#3e2410]">Reflection &amp; Feature Presentations</h2>
                        <p className="mt-1 text-sm md:text-base text-[#7a5232] max-w-lg leading-relaxed">Snapshots of brainstorming sessions, mind maps, and community solutions.</p>
                     </div>
                     <div className="hidden md:block">
                        <div className="w-12 h-12 rounded-full border border-[#dccdb2] flex items-center justify-center text-[#3a8c7e] bg-[#f5efe2] shadow-sm"><BookOpen size={20} /></div>
                     </div>
                  </div>
                  <div className="hidden md:grid grid-cols-2 gap-4">
                     {whiteboardImages.map((src, i) => (
                        <div key={i} className="group relative h-48 rounded-xl overflow-hidden border border-[#dccdb2] shadow-sm bg-[#ebe2d1]">
                           <Image src={src} alt={`Presentation Board ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                     ))}
                  </div>
                  <div className="md:hidden relative h-64 rounded-2xl overflow-hidden shadow-inner border border-[#dccdb2] bg-[#ebe2d1]">
                     <div className="relative w-full h-full">
                        {whiteboardImages.map((src, i) => (
                           <div key={i} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === currentPresentation ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                              <Image src={src} alt={`Presentation ${i + 1}`} fill className="object-cover" />
                              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#241407]/90 to-transparent p-4 pt-12"><span className="text-[#f5efe2] text-sm font-medium">Team Presentation {i + 1}</span></div>
                           </div>
                        ))}
                     </div>
                     <div className="absolute bottom-4 right-4 z-20 flex gap-1.5">
                        {whiteboardImages.map((_, i) => (
                           <button key={i} onClick={() => setCurrentPresentation(i)} className={`w-2 h-2 rounded-full transition-all shadow-sm ${i === currentPresentation ? 'bg-[#3a8c7e] w-4' : 'bg-[#dccdb2]'}`} />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* ================= 5. CAMP GALLERY ================= */}
         <section className="py-14 px-6 bg-[#f5efe2]">
            <div className="max-w-7xl mx-auto text-center mb-8 md:mb-12">
               <span className="text-xs font-bold uppercase tracking-widest text-[#c8880a] bg-[#c8880a]/10 px-3.5 py-1 rounded-full border border-[#c8880a]/20">
                  VISUAL ARCHIVE
               </span>
               <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3e2410] mt-2">Captured Moments</h2>
               <p className="text-[#7a5232] text-base md:text-lg font-medium mt-1">Memories from Kothimbe, Karjat.</p>
            </div>

            {/* --- LAYOUT 1: DESKTOP MASONRY (lg+) --- */}
            <div className="hidden lg:grid grid-cols-4 gap-4 auto-rows-[200px]">
               {photoGallery.map((src, i) => (
                  <div
                     key={i}
                     className={`
                    relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-all border border-[#dccdb2] bg-[#ebe2d1]
                    ${i === 0 ? "col-span-2 row-span-2" : ""}
                    ${i === 3 ? "row-span-2" : ""}
                  `}
                  >
                     <Image
                        src={src}
                        alt={`Camp Memory`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                     />
                  </div>
               ))}
            </div>

            {/* --- LAYOUT 2: MOBILE & TABLET (2 Cols) SLIDERS --- */}
            <div
               className="relative lg:hidden group/mobile-gallery"
               onTouchStart={handleTouchStart}
               onTouchMove={handleTouchMove}
               onTouchEnd={handleTouchEnd}
            >
               <button
                  onClick={() => handleManualChange('prev')}
                  className="absolute left-1 top-1/2 -translate-y-full z-20 p-2 bg-[#241407]/60 backdrop-blur-md rounded-full border border-white/30 text-white shadow-lg active:scale-95 transition-all"
                  aria-label="Previous Photos"
               >
                  <ChevronLeft size={18} />
               </button>

               <button
                  onClick={() => handleManualChange('next')}
                  className="absolute right-1 top-1/2 -translate-y-full z-20 p-2 bg-[#241407]/60 backdrop-blur-md rounded-full border border-white/30 text-white shadow-lg active:scale-95 transition-all"
                  aria-label="Next Photos"
               >
                  <ChevronRight size={18} />
               </button>

               {/* Grid Content */}
               <div className="grid grid-cols-2 gap-3">
                  {sliderChunks.slice(0, 4).map((chunk, i) => (
                     <AutoSlideBlock
                        key={i}
                        images={chunk}
                        currentIndex={galleryIndex}
                     />
                  ))}
               </div>

               {/* Dots Indicator */}
               <div className="flex justify-center gap-2 mt-6">
                  {[0, 1, 2, 3, 4, 5].map((idx) => (
                     <button
                        key={idx}
                        onClick={() => {
                           if (timerRef.current) clearInterval(timerRef.current);
                           setGalleryIndex(idx);
                           startTimer();
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${galleryIndex === idx ? "w-6 bg-[#3a8c7e]" : "w-2 bg-[#dccdb2]"
                           }`}
                     />
                  ))}
               </div>
            </div>

         </section>

      </main>
   )
}