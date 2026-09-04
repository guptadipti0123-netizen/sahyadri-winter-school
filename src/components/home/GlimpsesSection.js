"use client"
import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"

// --- DATA ---
const videoSlides = [
  "/camp2/videos/camp-2-v1.mp4",
   "/camp2/videos/camp-2-v2.mp4",
   "/camp2/videos/camp-2-v3.mp4",
   "/camp2/videos/camp-2-v5.mp4",
   "/camp2/videos/camp-2-v6.mp4",
]

const highlights = [
  { day: "Day 01", title: "Inauguration & Policy", desc: "Setting the foundation with policy frameworks." },
  { day: "Day 02", title: "History & Heritage", desc: "Exploring the legacy of the Maratha Samrajya." },
  { day: "Day 03", title: "Rural Immersion", desc: "Living and learning with tribal communities." },
  { day: "Day 04", title: "Tribal Life & Innovation", desc: "Forest walks and sustainable tribal solutions." },
  { day: "Day 05", title: "Reflections & Future", desc: "Presenting outcomes and future pathways." },
]

// --- UTILS ---
const formatTime = (time) => {
  if (!time) return "0:00"
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

export default function GlimpsesSection() {
  // --- VIDEO STATE ---
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef(null)

  // Video Logic
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = isMuted
    if (isPlaying) {
      const playPromise = video.play()
      if (playPromise !== undefined) playPromise.catch(() => {})
    } else {
      video.pause()
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

  const togglePlay = () => setIsPlaying(!isPlaying)
  const toggleMute = () => setIsMuted(!isMuted)

  const nextSlide = () => {
    setProgress(0)
    setCurrentSlide((prev) => (prev + 1) % videoSlides.length)
  }
  
  const prevSlide = () => {
    setProgress(0)
    setCurrentSlide((prev) => (prev === 0 ? videoSlides.length - 1 : prev - 1))
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-frosted_mint/30 via-white to-frosted_mint/30">
      
      

      <div className="max-w-4xl mx-auto px-4 w-full">

        {/* Header */}
             <div className="my-6 md:my-8 text-center lg:text-left flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white border border-celadon shadow-sm text-sea_green text-[10px] font-bold tracking-widest uppercase mb-1">
                   <Play size={12} className="md:w-3.5 md:h-3.5"/>
                   <span>Winter Camp Dec 2025 Highlights</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-evergreen leading-tight">
                   A Journey of <span className="italic text-sea_green">Discovery</span>
                </h2>
                <p className="mt-4 text-pine_teal/80 text-base md:text-lg font-medium max-w-2xl mx-auto text-center">
                  &quot;Every frame tells a story of curiosity, resilience, and the bonds built between future leaders and rural communities.&quot;
                </p>
             </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT: CONTEXT & HIGHLIGHTS (The Journey Roadmap) */}
          <div className="flex flex-col justify-center">
             
             {/* UNIQUE DESIGN: The Journey Roadmap */}
             <div className="relative pl-4 space-y-3">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-2 bottom-4 w-0.5 bg-gradient-to-b from-sea_green/60 to-sea_green/50" />

                {highlights.map((item, i) => (
                   <div key={i} className="relative flex items-center gap-4 group">
                      {/* Timeline Stepped Block */}
                      <div className="relative z-10 flex flex-col gap-0.5">
                        <div className="w-5 h-2 bg-sea_green"></div>
                        <div className="w-4 h-2 bg-sea_green/80"></div>
                        <div className="w-3 h-2 bg-sea_green/60"></div>
                      </div>

                      
                      {/* Content Card */}
                      <div className="flex-1 bg-white/60 hover:bg-white border border-gray-100 hover:border-sea_green/30 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                         <div className="flex justify-between items-center mb-1">
                            <h4 className="font-bold text-evergreen text-xs sm:text-sm">{item.title}</h4>
                            <span className="text-[10px] font-bold text-sea_green bg-frosted_mint/20 px-2 py-0.5 rounded-full">
                               {item.day}
                            </span>
                         </div>
                         <p className="text-xs md:text-sm text-gray-500 line-clamp-1">{item.desc}</p>
                      </div>
                   </div>
                ))}
             </div>

             {/* Action Button */}
             <div className="mt-8 text-center pl-4">
                <Link 
                   href="/camp-2" 
                   className="inline-flex items-center gap-3 text-sm font-bold bg-evergreen px-6 py-3 rounded-full hover:bg-dark_emerald  hover:scale-102 shadow-lg shadow-evergreen/20
                   bg-evergreen text-white hover:bg-sea_green transition-colors shadow-evergreen/20 md:mb-4
                   "
                >
                   View Full Report
                   <ArrowRight size={16} />
                </Link>
             </div>
          </div>

          {/* RIGHT: VIDEO PLAYER (Exact Dimensions from Winter Camp Dec 2025) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
             
             {/* Decor Blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-frosted_mint/40 rounded-full blur-3xl -z-10" />

             {/* Video Container - STRICT DIMENSIONS APPLIED */}
             <div className="relative w-[300px] h-[580px] md:w-[340px] md:h-[640px] lg:w-[300px] lg:h-[450px] bg-black rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden ring-4 ring-gray-100 group">
               {/* --- IPHONE NOTCH START --- */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-950 rounded-b-2xl z-30 flex items-center justify-center gap-2">
                     {/* Speaker Grill */}
                     <div className="w-10 h-1 bg-gray-800 rounded-full"></div>
                     {/* Camera Dot */}
                     <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                  </div>
                  {/* --- IPHONE NOTCH END --- */}
                
                <div className="relative w-full h-full bg-black" onClick={togglePlay}>
                   <video 
                      ref={videoRef} 
                      key={currentSlide} 
                      className="w-full h-full object-cover opacity-90 cursor-pointer" 
                      playsInline 
                      preload="auto" 
                      onTimeUpdate={handleTimeUpdate} 
                      onLoadedMetadata={handleLoadedMetadata} 
                      onEnded={handleVideoEnded}
                   >
                      <source src={videoSlides[currentSlide]} type="video/mp4" />
                   </video>

                   {/* Play/Pause Overlay */}
                   <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${isPlaying ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
                      <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/30">
                         {isPlaying ? <Pause size={32} className="text-white fill-current" /> : <Play size={32} className="text-white fill-current ml-1" />}
                      </div>
                   </div>

                   {/* Controls Overlay */}
                   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent pt-12 pb-6 px-5 z-20 flex flex-col gap-3" onClick={(e) => e.stopPropagation()}>
                      {/* Timeline */}
                      <div className="w-full flex items-center gap-3">
                         <span className="text-[10px] text-white/80 font-mono w-8 text-right">{formatTime(currentTime)}</span>
                         <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={progress || 0} 
                            onChange={handleSeek} 
                            className="flex-grow h-1 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-frosted_mint [&::-webkit-slider-thumb]:rounded-full" 
                         />
                         <span className="text-[10px] text-white/80 font-mono w-8">{formatTime(duration)}</span>
                      </div>
                      
                      {/* Buttons */}
                      <div className="flex justify-between items-center">
                         <div className="flex items-center gap-3">
                            <button onClick={togglePlay} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer">
                               {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                            </button>
                            <button onClick={toggleMute} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer">
                               {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                            </button>
                         </div>
                         <span className="text-white/60 text-[10px] font-medium uppercase tracking-widest border border-white/10 px-2 py-1 rounded bg-black/20">
                            Clip {currentSlide + 1}/{videoSlides.length}
                         </span>
                      </div>
                   </div>
                </div>

                {/* Nav Buttons */}
                <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-sm transition-all z-30 cursor-pointer opacity-80 group-hover:opacity-100">
                   <ChevronLeft size={24} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-sm transition-all z-30 cursor-pointer opacity-80 group-hover:opacity-100">
                   <ChevronRight size={24} />
                </button>

             </div>
          </div>

        </div>
      </div>
    </section>
  )
}