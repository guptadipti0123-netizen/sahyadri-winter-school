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
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-10 md:py-16 bg-gradient-to-b from-frosted_mint/30 via-white to-frosted_mint/30">
      
      <div className="max-w-4xl mx-auto px-3 sm:px-6 w-full">

        {/* Header */}
        <div className="mb-6 md:mb-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white border border-celadon shadow-sm text-sea_green text-[10px] font-bold tracking-widest uppercase mb-1">
             <Play size={12} className="md:w-3.5 md:h-3.5"/>
             <span>Winter Camp Dec 2025 Highlights</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-evergreen leading-tight">
             A Journey of <span className="italic text-sea_green">Discovery</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-pine_teal/80 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto text-center">
            &quot;Every frame tells a story of curiosity, resilience, and the bonds built between future leaders and rural communities.&quot;
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: CONTEXT & HIGHLIGHTS (The Journey Roadmap) */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
             
             {/* The Journey Roadmap */}
             <div className="relative pl-3 sm:pl-4 space-y-2.5 sm:space-y-3">
                {/* Vertical Line */}
                <div className="absolute left-[17px] sm:left-[19px] top-2 bottom-4 w-0.5 bg-gradient-to-b from-sea_green/60 to-sea_green/50" />

                {highlights.map((item, i) => (
                   <div key={i} className="relative flex items-center gap-3 sm:gap-4 group">
                      {/* Timeline Stepped Block */}
                      <div className="relative z-10 flex flex-col gap-0.5 shrink-0">
                        <div className="w-4 sm:w-5 h-2 bg-sea_green"></div>
                        <div className="w-3 sm:w-4 h-2 bg-sea_green/80"></div>
                        <div className="w-2.5 sm:w-3 h-2 bg-sea_green/60"></div>
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 bg-white/70 hover:bg-white border border-gray-100 hover:border-sea_green/30 rounded-xl p-2.5 sm:p-3 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm min-w-0">
                         <div className="flex justify-between items-center mb-0.5">
                            <h4 className="font-bold text-evergreen text-xs sm:text-sm truncate mr-2">{item.title}</h4>
                            <span className="text-[10px] font-bold text-sea_green bg-frosted_mint/20 px-2 py-0.5 rounded-full shrink-0">
                               {item.day}
                            </span>
                         </div>
                         <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 line-clamp-1">{item.desc}</p>
                      </div>
                   </div>
                ))}
             </div>

             {/* Action Button */}
             <div className="mt-6 sm:mt-8 text-center lg:text-left pl-3 sm:pl-4">
                <Link 
                   href="/camp-2" 
                   className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-evergreen px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-sea_green text-white transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                >
                   <span>View Full Report</span>
                   <ArrowRight size={15} />
                </Link>
             </div>
          </div>

          {/* RIGHT: VIDEO PLAYER */}
          <div className="order-1 lg:order-2 flex justify-center relative">
             
             {/* Decor Blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[350px] sm:h-[350px] bg-frosted_mint/40 rounded-full blur-3xl -z-10" />

             {/* Video Container - RESPONSIVE SCALING */}
             <div className="relative w-full max-w-[270px] xs:max-w-[290px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[300px] h-[500px] xs:h-[540px] md:h-[600px] lg:h-[450px] bg-black rounded-[2rem] sm:rounded-[2.5rem] border-[6px] sm:border-[8px] border-gray-900 shadow-2xl overflow-hidden ring-4 ring-gray-100 group">
               {/* --- IPHONE NOTCH START --- */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-6 sm:h-7 bg-gray-950 rounded-b-2xl z-30 flex items-center justify-center gap-2">
                     {/* Speaker Grill */}
                     <div className="w-8 sm:w-10 h-1 bg-gray-800 rounded-full"></div>
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
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/30">
                         {isPlaying ? <Pause size={28} className="text-white fill-current" /> : <Play size={28} className="text-white fill-current ml-1" />}
                      </div>
                   </div>

                   {/* Controls Overlay */}
                   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent pt-10 pb-5 px-4 z-20 flex flex-col gap-2.5" onClick={(e) => e.stopPropagation()}>
                      {/* Timeline */}
                      <div className="w-full flex items-center gap-2">
                         <span className="text-[9px] sm:text-[10px] text-white/80 font-mono w-7 text-right">{formatTime(currentTime)}</span>
                         <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={progress || 0} 
                            onChange={handleSeek} 
                            className="flex-grow h-1 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:bg-frosted_mint [&::-webkit-slider-thumb]:rounded-full" 
                         />
                         <span className="text-[9px] sm:text-[10px] text-white/80 font-mono w-7">{formatTime(duration)}</span>
                      </div>
                      
                      {/* Buttons */}
                      <div className="flex justify-between items-center">
                         <div className="flex items-center gap-2.5">
                            <button onClick={togglePlay} className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer" aria-label="Play/Pause Video">
                               {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                            </button>
                            <button onClick={toggleMute} className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer" aria-label="Mute/Unmute Video">
                               {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                            </button>
                         </div>
                         <span className="text-white/70 text-[9px] sm:text-[10px] font-medium uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded bg-black/20">
                            Clip {currentSlide + 1}/{videoSlides.length}
                         </span>
                      </div>
                   </div>
                </div>

                {/* Nav Buttons */}
                <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all z-30 cursor-pointer opacity-80 group-hover:opacity-100" aria-label="Previous Clip">
                   <ChevronLeft size={20} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all z-30 cursor-pointer opacity-80 group-hover:opacity-100" aria-label="Next Clip">
                   <ChevronRight size={20} />
                </button>

             </div>
          </div>

        </div>
      </div>
    </section>
  )
}