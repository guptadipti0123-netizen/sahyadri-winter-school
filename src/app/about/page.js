"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight, ArrowUpRight, MapPin, Mail, CheckCircle2,
  Calendar, Users, BookOpen, Landmark, Trees, Lightbulb,
  ShieldCheck, HeartHandshake, Compass, Eye, Target, Sparkles, Quote
} from "lucide-react"
import MentorsSection from "@/components/home/MentorsSection"

export default function AboutPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [activeCampIdx, setActiveCampIdx] = useState(0)
  const [hasMounted, setHasMounted] = useState(false)
  const [timelineVisible, setTimelineVisible] = useState(false)
  const timelineRef = useRef(null)
  const [visionVisible, setVisionVisible] = useState(false)
  const visionRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMounted(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    )

    const currentRef = timelineRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisionVisible(true)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    )

    const currentRef = visionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  const heroCamps = [
    {
      badge: "Jawhar • May 2026",
      title: "Forest Ecology & Livelihoods",
      tag: "Summer Edition",
      caption: "Exploring PESA self-governance, Warli cultural heritage, and decentralized rural livelihoods in the Sahyadris.",
      image: "/floating7.jpeg",
      href: "/camp-3",
      duration: "Summer 2026"
    },
    {
      badge: "Karjat • Dec 2025",
      title: "Access True Expertise",
      tag: "2nd Edition Camp",
      caption: "Expertise, here, was measured in years of practice, not pages. Direct mentorship from distinguished experts in governance and social development.",
      image: "/camp2/camp2-day2-i3_copy.png",
      href: "/camp-2",
      duration: "5 Days Immersion"
    },
    {
      badge: "Palghar • Jan 2025",
      title: "Where The Journey Began",
      tag: "1st Edition Camp",
      caption: "40 students, tribal hamlets, and immersive grassroots dialogue. Real learning happens outside the four walls of a classroom.",
      image: "/palghar/palghar-cohort-memorial-courtyard.jpg",
      href: "/camp-1",
      duration: "Tribal Education"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  const timelineMilestones = [
    {
      date: "May '26",
      year: "2026",
      edition: "Summer '26",
      badge: "Summer Edition",
      title: "Summer School, Jawhar",
      location: "Jawhar, Maharashtra",
      desc: "Our third camp brought us to Jawhar in the summer, continuing our journey of learning, questioning, and connecting with rural communities.",
      href: "/camp-3",
      ctaText: "Explore Summer School"
    },
    {
      date: "Dec '25",
      year: "2025",
      edition: "2nd Edition",
      badge: "2nd Edition",
      title: "Winter School, Karjat",
      location: "Karjat, Raigad",
      desc: "Building on our first experience, our second camp took us to Karjat, deepening our engagement with communities and strengthening our approach to experiential learning.",
      href: "/camp-2",
      ctaText: "View 2nd Edition"
    },
    {
      date: "Jan '25",
      year: "2025",
      edition: "1st Edition",
      badge: "Inaugural",
      title: "Winter School, Palghar",
      location: "Palghar, Maharashtra",
      desc: "Our journey began with our first rural immersion camp in Palghar, bringing students together to step outside the classroom and experience rural realities first hand.",
      href: "/camp-1",
      ctaText: "View 1st Edition"
    }
  ]

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-[#f5efe2] text-[#3e2410]">

      {/* ================= 1. EDITORIAL HERO SECTION WITH RIGHT-SIDE CAMP SHOWCASE ================= */}
      <section className="relative pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-3 sm:px-6 overflow-hidden bg-gradient-to-b from-[#faede0] via-[#f7e6d5] to-[#f5efe2] text-[#3e2410] border-b border-[#dccdb2]/80">
        
        {/* Warm Ambient Glows */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-[#e8a87c]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#3a8c7e]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-1 sm:px-4 relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Hero Copy & CTA (Staggered smooth slide-up from bottom) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* 1. Badge */}
            <div 
              style={{
                transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: hasMounted ? "translateY(0)" : "translateY(40px)",
                opacity: hasMounted ? 1 : 0
              }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#fdfbf7] border border-[#dccdb2] text-[#1f5c54] text-[11px] sm:text-xs font-semibold tracking-widest uppercase shadow-xs">
                ABOUT SAHYADRI RURAL CONNECT
              </span>
            </div>

            {/* 2. Main Title */}
            <div
              style={{
                transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.12s, opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.12s",
                transform: hasMounted ? "translateY(0)" : "translateY(55px)",
                opacity: hasMounted ? 1 : 0
              }}
            >
              <h1 className="font-serif font-normal text-3xl xs:text-4xl sm:text-5xl md:text-6xl leading-[1.15] text-[#3e2410] tracking-tight">
                Where Ground-Level Immersion Becomes{" "}
                <span className="italic text-[#3a8c7e] font-serif">Meaningful Leadership.</span>
              </h1>
            </div>

            {/* 3. Description Paragraph */}
            <div
              style={{
                transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.24s, opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.24s",
                transform: hasMounted ? "translateY(0)" : "translateY(55px)",
                opacity: hasMounted ? 1 : 0
              }}
            >
              <p className="text-xs sm:text-base md:text-lg text-[#5c3818] leading-relaxed max-w-xl font-light">
                Sahyadri Rural Connect is an experiential education and rural immersion initiative dedicated to bridging classroom knowledge with grassroots realities, indigenous culture, and sustainable social impact.
              </p>
            </div>

            {/* 4. Action Button */}
            <div
              style={{
                transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.36s, opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.36s",
                transform: hasMounted ? "translateY(0)" : "translateY(55px)",
                opacity: hasMounted ? 1 : 0
              }}
            >
              <div className="flex flex-row items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-[#3a8c7e] text-white font-medium text-xs sm:text-sm md:text-base shadow-sm hover:shadow-md hover:bg-[#1f5c54] active:scale-95 transition-all duration-300 whitespace-nowrap"
                >
                  <span>Winter Camp Loading</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: Camp Link Card with Interactive Switcher & Background Images */}
          <div 
            className="lg:col-span-5 flex flex-col items-center w-full"
            style={{
              transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
              transform: hasMounted ? "translateY(0)" : "translateY(60px)",
              opacity: hasMounted ? 1 : 0
            }}
          >
            
            {/* Camp Selector Tabs */}
            <div className="flex items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-[#fdfbf7] border border-[#dccdb2] mb-3 max-w-full overflow-x-auto shadow-xs">
              {heroCamps.map((camp, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCampIdx(idx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeCampIdx === idx
                      ? "bg-[#3a8c7e] text-white shadow-xs font-semibold"
                      : "text-[#5c3818] hover:text-[#3e2410] hover:bg-[#ebe2d1]"
                  }`}
                >
                  {camp.badge.split(" • ")[0]}
                </button>
              ))}
            </div>

            {/* Feature Card with Background Image, Caption & Camp Link */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl overflow-hidden shadow-md border border-[#dccdb2] bg-[#fdfbf7] group mx-auto">
              <div className="relative h-[380px] xs:h-[410px] sm:h-[440px] w-full">
                <Image
                  src={heroCamps[activeCampIdx].image}
                  alt={heroCamps[activeCampIdx].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241407]/90 via-[#241407]/45 to-transparent" />
                
                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdfbf7]/90 backdrop-blur-md border border-[#dccdb2] text-[#1f5c54] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase">
                    <MapPin size={11} className="text-[#3a8c7e]" />
                    {heroCamps[activeCampIdx].badge}
                  </span>
                  <span className="text-[10px] font-semibold text-[#fdfbf7] bg-[#3a8c7e]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#dccdb2]/40">
                    {heroCamps[activeCampIdx].tag}
                  </span>
                </div>

                {/* Bottom Content & Caption */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 space-y-2 sm:space-y-2.5 z-10 text-left">
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-normal text-[#fdfbf7] leading-tight drop-shadow-sm">
                    {heroCamps[activeCampIdx].title}
                  </h3>

                  <p className="text-[11px] sm:text-xs md:text-sm text-[#fdfbf7]/95 leading-relaxed font-light bg-[#241407]/60 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-[#dccdb2]/30 line-clamp-3 sm:line-clamp-none">
                    &quot;{heroCamps[activeCampIdx].caption}&quot;
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <Link
                      href={heroCamps[activeCampIdx].href}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#3a8c7e] hover:bg-[#1f5c54] text-white text-xs sm:text-sm font-medium shadow-sm hover:scale-102 transition-all group/btn"
                    >
                      <span>Explore Camp Page</span>
                      <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[10px] sm:text-[11px] font-medium text-[#fdfbf7]/90 bg-black/40 px-2.5 py-1 rounded-full border border-white/20">
                      {heroCamps[activeCampIdx].duration}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 2. OUR STORY SECTION ================= */}
      <section id="story" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 space-y-3">
          <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#c8880a] bg-[#c8880a]/10 px-3.5 py-1 rounded-full border border-[#c8880a]/20">
            ORIGIN &amp; PURPOSE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3e2410] tracking-tight">
            Our Story
          </h2>

          <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#3a8c7e] font-medium max-w-2xl mx-auto leading-relaxed">
            &quot;There is a difference between knowing about a problem and knowing what it feels like on the ground.&quot;
          </p>
        </div>

        {/* Main 2-Column Content Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Visual Story Card & Photo with Floating Overlay */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#dccdb2] group bg-[#3e2410]/10">
              <div className="relative h-[320px] xs:h-[380px] sm:h-[440px] w-full">
                <Image
                  src="/rural_immersion_real.jpg"
                  alt="Students and village community immersion"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241407]/90 via-[#241407]/30 to-transparent" />
                
                {/* Floating Top Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#fdfbf7]/90 backdrop-blur-md text-[#3e2410] font-bold text-xs uppercase tracking-wider shadow-md border border-[#dccdb2]">
                    🌱 Rural Immersion Fieldwork
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-[#fdfbf7]/95 backdrop-blur-md border border-[#dccdb2] shadow-lg text-left">
                  <span className="text-[10px] font-bold text-[#3a8c7e] uppercase tracking-wider block">
                    GROUND REALITIES
                  </span>
                  <p className="text-xs sm:text-sm font-serif font-bold text-[#3e2410] mt-0.5 leading-snug">
                    Learning with communities, questioning assumptions, and exploring stories beyond statistics.
                  </p>
                </div>
              </div>
            </div>

            {/* Pull Quote Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#fdfbf7] border border-[#dccdb2] shadow-xs relative">
              <Quote className="w-8 h-8 text-[#3a8c7e]/25 absolute top-4 right-4" />
              <p className="font-serif italic text-xs sm:text-sm md:text-[14.5px] text-[#3e2410] leading-relaxed pr-6 text-left">
                &quot;For us, rural immersion is not about simply visiting a village. It is about learning with communities, questioning what we think we know, and exploring the stories that lie beyond the statistics.&quot;
              </p>
            </div>
          </div>

          {/* Right Column: Full Narrative Flow */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            <p className="text-sm sm:text-base text-[#7a5232] leading-relaxed">
              In college, we learn about the challenges our country faces. We study development, public policy, government schemes, livelihoods, and the technological solutions designed to address them. But much of this learning happens within classrooms, textbooks, case studies, and statistics.
            </p>

            {/* Featured Highlight Box */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#fdfbf7] border border-[#dccdb2] space-y-2.5 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#3a8c7e] animate-pulse" />
                <h3 className="font-serif font-bold text-[#3e2410] text-base sm:text-lg">
                  What happens when we step outside the classroom?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#7a5232] leading-relaxed">
                We realised there was a gap between understanding a problem academically and experiencing how it actually unfolds on the ground. The realities of rural India are often more complex than what a textbook, a policy document, or a set of statistics can capture.
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#7a5232] leading-relaxed">
              <strong className="text-[#3e2410] font-bold">Sahyadri Rural Connect</strong> was born from the desire to bridge that gap. Through our rural immersion camps, we aim to give students a firsthand experience of rural India. We create spaces where participants can step beyond observation and engage directly with communities, understand their everyday realities, explore livelihoods, and learn from experiences that cannot be fully captured in a classroom.
            </p>

            {/* Impact Banner Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#fdfbf7] border border-[#dccdb2] shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#3a8c7e]/15 text-[#3a8c7e] flex items-center justify-center shrink-0 border border-[#3a8c7e]/20">
                <Compass size={20} />
              </div>
              <p className="font-serif font-bold text-xs sm:text-sm md:text-base text-[#3e2410] leading-snug">
                Sahyadri is an attempt to bring the classroom closer to the ground, and the ground closer to the classroom.
              </p>
            </div>

            {/* 3 Value Pillars Mini-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[#fdfbf7] border border-[#dccdb2] space-y-1">
                <span className="text-[10px] font-bold text-[#3a8c7e] uppercase tracking-wider block">
                  EXPERIENCE
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#3e2410]">
                  Lived Immersion
                </h4>
                <p className="text-[11px] text-[#7a5232] leading-snug">
                  Staying in tribal hamlets &amp; farms.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fdfbf7] border border-[#dccdb2] space-y-1">
                <span className="text-[10px] font-bold text-[#c8880a] uppercase tracking-wider block">
                  DIALOGUE
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#3e2410]">
                  Beyond Statistics
                </h4>
                <p className="text-[11px] text-[#7a5232] leading-snug">
                  Unpacking ground complexity with elders.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fdfbf7] border border-[#dccdb2] space-y-1">
                <span className="text-[10px] font-bold text-[#7a3a1c] uppercase tracking-wider block">
                  FELLOWSHIP
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#3e2410]">
                  Interdisciplinary
                </h4>
                <p className="text-[11px] text-[#7a5232] leading-snug">
                  IIT, IIM, TISS &amp; Law scholars.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ================= 3. OUR STORY TIMELINE / THE JOURNEY SO FAR ================= */}
      <section 
        className="py-12 sm:py-20 px-3 sm:px-6 md:px-8 bg-[#ebe2d1]/50 border-y border-[#dccdb2] relative overflow-hidden"
      >
        <div className="max-w-3xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center mb-10 sm:mb-12 space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3e2410] tracking-tight">
              The Journey <span className="text-[#3a8c7e] italic">So Far</span>
            </h2>
            <p className="text-[#7a5232] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed px-2">
              From our inaugural cohort in Palghar to multi-season field fellowships across Maharashtra&apos;s Western Ghats.
            </p>
          </div>

          {/* Pure Editorial Timeline (Items slide in one-by-one from the right on scroll) */}
          <div ref={timelineRef} className="relative pl-1 sm:pl-0">
            {timelineMilestones.map((item, idx) => {
              const isLast = idx === timelineMilestones.length - 1
              return (
                <div 
                  key={idx} 
                  className="relative flex items-start group"
                  style={{
                    transition: `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 240}ms, opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 240}ms`,
                    transform: timelineVisible ? "translateX(0)" : "translateX(85px)",
                    opacity: timelineVisible ? 1 : 0
                  }}
                >
                  
                  {/* Left Column: Date / Year (Serif Italic) */}
                  <div className="w-14 xs:w-18 sm:w-28 text-right pr-2.5 sm:pr-6 shrink-0 pt-0.5">
                    <span className="font-serif italic text-xs xs:text-sm sm:text-base font-semibold text-[#7a5232] group-hover:text-[#3a8c7e] transition-colors">
                      {item.date}
                    </span>
                  </div>

                  {/* Center Column: Node Dot & Vertical Line Spine */}
                  <div className="relative flex flex-col items-center shrink-0 self-stretch">
                    {/* Circular Ring Node */}
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-[#3e2410] bg-[#f5efe2] group-hover:border-[#3a8c7e] group-hover:scale-110 group-hover:bg-[#3a8c7e]/20 transition-all z-10 mt-1 shadow-xs" />
                    
                    {/* Vertical Connector Line */}
                    {!isLast && (
                      <div className="w-px bg-[#dccdb2] flex-1 my-1" />
                    )}
                  </div>

                  {/* Right Column: Content */}
                  <div className={`pl-3 sm:pl-6 flex-1 text-left ${!isLast ? "pb-8 sm:pb-12" : "pb-2"}`}>
                    
                    {/* Top Badges / Meta */}
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#c8880a]/15 text-[#c8880a] text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider border border-[#c8880a]/30">
                        {item.badge}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-[#7a5232]">
                        <MapPin size={11} className="text-[#3a8c7e] shrink-0" />
                        <span>{item.location}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-sm xs:text-base sm:text-xl font-bold text-[#3e2410] group-hover:text-[#3a8c7e] transition-colors leading-snug mb-1">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#7a5232] leading-relaxed max-w-xl mb-2.5">
                      {item.desc}
                    </p>

                    {/* CTA Link */}
                    <div>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3a8c7e] hover:text-[#1f5c54] group/link"
                      >
                        <span>{item.ctaText}</span>
                        <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ================= 4. VISION, MISSION & OBJECTIVES (Directional Slide-in on Scroll) ================= */}
      <section 
        className="py-12 sm:py-18 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative z-10 overflow-hidden"
      >
        
        {/* Section Heading */}
        <div 
          className="text-center mb-8 sm:mb-10 space-y-2"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#c8880a]/15 text-[#c8880a] text-xs font-bold tracking-wider uppercase border border-[#c8880a]/30">
            GUIDING PRINCIPLES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3e2410] tracking-tight">
            Vision, Mission &amp; <span className="text-[#3a8c7e] italic">Objectives</span>
          </h2>
          <p className="text-[#7a5232] text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed px-2">
            The foundational philosophy shaping our experiential pedagogy, community partnerships, and fellows.
          </p>
        </div>

        {/* 3 Compact Modern Cards Grid */}
        <div ref={visionRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
          
          {/* Card 1: OUR MISSION (Slides in from LEFT) */}
          <div 
            className="bg-[#fdfbf7] rounded-2xl p-5 sm:p-6 border border-[#dccdb2] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
            style={{
              transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: visionVisible ? "translateX(0)" : "translateX(-90px)",
              opacity: visionVisible ? 1 : 0
            }}
          >
            <div>
              {/* Header: Icon Next to Title */}
              <div className="flex items-center gap-3 pb-3 mb-3 border-b border-[#dccdb2]">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#3a8c7e]/15 text-[#3a8c7e] flex items-center justify-center shrink-0 border border-[#3a8c7e]/30 group-hover:bg-[#3a8c7e] group-hover:text-white transition-colors">
                  <Compass size={18} />
                </div>
                <h3 className="font-bold text-xs sm:text-sm md:text-base tracking-wider uppercase text-[#3e2410] font-sans">
                  OUR MISSION
                </h3>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm md:text-[14px] text-[#7a5232] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#3a8c7e] shrink-0 mt-1.5" />
                  <span>Lived grassroots immersion in tribal ashramshalas &amp; farm collectives</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#3a8c7e] shrink-0 mt-1.5" />
                  <span>Structured mentorship from veteran IAS leaders &amp; grassroots innovators</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#3a8c7e] shrink-0 mt-1.5" />
                  <span>Bridging academic classroom theory with real ground-level challenges</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: OUR VISION (Slides up from BOTTOM) */}
          <div 
            className="bg-[#fdfbf7] rounded-2xl p-5 sm:p-6 border border-[#dccdb2] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
            style={{
              transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
              transform: visionVisible ? "translateY(0)" : "translateY(80px)",
              opacity: visionVisible ? 1 : 0
            }}
          >
            <div>
              {/* Header: Icon Next to Title */}
              <div className="flex items-center gap-3 pb-3 mb-3 border-b border-[#dccdb2]">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#6e9e97]/20 text-[#1f5c54] flex items-center justify-center shrink-0 border border-[#6e9e97]/30 group-hover:bg-[#1f5c54] group-hover:text-white transition-colors">
                  <Eye size={18} />
                </div>
                <h3 className="font-bold text-xs sm:text-sm md:text-base tracking-wider uppercase text-[#3e2410] font-sans">
                  OUR VISION
                </h3>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm md:text-[14px] text-[#7a5232] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#6e9e97] shrink-0 mt-1.5" />
                  <span>A generation of leaders viewing rural India as civilisational strength</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#6e9e97] shrink-0 mt-1.5" />
                  <span>Mainstreaming indigenous wisdom &amp; sustainable ecological practices</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#6e9e97] shrink-0 mt-1.5" />
                  <span>Nationwide network of interdisciplinary leaders committed to Bharat</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: OBJECTIVES (Slides in from RIGHT) */}
          <div 
            className="bg-[#fdfbf7] rounded-2xl p-5 sm:p-6 border border-[#dccdb2] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
            style={{
              transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
              transform: visionVisible ? "translateX(0)" : "translateX(90px)",
              opacity: visionVisible ? 1 : 0
            }}
          >
            <div>
              {/* Header: Icon Next to Title */}
              <div className="flex items-center gap-3 pb-3 mb-3 border-b border-[#dccdb2]">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#c8880a]/15 text-[#c8880a] flex items-center justify-center shrink-0 border border-[#c8880a]/30 group-hover:bg-[#c8880a] group-hover:text-white transition-colors">
                  <Target size={18} />
                </div>
                <h3 className="font-bold text-xs sm:text-sm md:text-base tracking-wider uppercase text-[#3e2410] font-sans">
                  OBJECTIVES
                </h3>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm md:text-[14px] text-[#7a5232] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#c8880a] shrink-0 mt-1.5" />
                  <span><strong className="text-[#3e2410]">Empathy:</strong> Breaking paternalistic development stereotypes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#c8880a] shrink-0 mt-1.5" />
                  <span><strong className="text-[#3e2410]">Synergy:</strong> Law, engineering &amp; policy fellows working together</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#c8880a] shrink-0 mt-1.5" />
                  <span><strong className="text-[#3e2410]">Policy:</strong> Converting field insights into research &amp; enterprise</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#c8880a] shrink-0 mt-1.5" />
                  <span><strong className="text-[#3e2410]">Linkages:</strong> Year-round institutional support for villages</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </section>

      {/* ================= 5. MENTORS & ADVISORY ================= */}
      <MentorsSection />

      {/* ================= 6. START A CONVERSATION / CONTACT ================= */}
      <section id="contact-section" className="py-14 sm:py-20 px-4 sm:px-6 md:px-8 bg-[#fdfbf7] border-t border-[#dccdb2] relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-left">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#c8880a]/15 text-[#c8880a] text-xs font-bold tracking-wider uppercase border border-[#c8880a]/30">
                GET IN TOUCH
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3e2410]">
                Let&apos;s Start a <span className="italic text-[#3a8c7e]">Conversation</span>
              </h2>

              <p className="text-[#7a5232] text-xs sm:text-sm md:text-base leading-relaxed">
                Reach out for institutional partnerships, student cohort applications, volunteer opportunities, or questions about our upcoming camps.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#f5efe2] border border-[#dccdb2]">
                  <Mail className="w-5 h-5 text-[#3a8c7e] flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#3e2410] block">Email Us</span>
                    <a href="mailto:sahyadriruralconnect@gmail.com" className="text-xs text-[#7a5232] hover:text-[#3a8c7e] font-medium truncate block">
                      sahyadriruralconnect@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#f5efe2] border border-[#dccdb2]">
                  <MapPin className="w-5 h-5 text-[#3a8c7e] flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#3e2410] block">Field Locations</span>
                    <span className="text-xs text-[#7a5232] font-medium block">
                      Palghar • Karjat • Jawhar (Maharashtra)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-7 bg-[#f5efe2] border border-[#dccdb2] p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm text-left">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3e2410] mb-3.5 sm:mb-4">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 bg-[#3a8c7e]/10 border border-[#3a8c7e]/30 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#3a8c7e] mx-auto" />
                  <h4 className="font-serif font-bold text-[#1f5c54] text-lg">Message Received!</h4>
                  <p className="text-xs text-[#3e2410]">Thank you for reaching out. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-[#3e2410] uppercase tracking-wider block mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#dccdb2] text-xs text-[#3e2410] focus:outline-none focus:border-[#3a8c7e]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#3e2410] uppercase tracking-wider block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#dccdb2] text-xs text-[#3e2410] focus:outline-none focus:border-[#3a8c7e]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#3e2410] uppercase tracking-wider block mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Student Cohort Application / Partnership"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#dccdb2] text-xs text-[#3e2410] focus:outline-none focus:border-[#3a8c7e]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#3e2410] uppercase tracking-wider block mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about yourself or your query..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#dccdb2] text-xs text-[#3e2410] focus:outline-none focus:border-[#3a8c7e] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#3a8c7e] hover:bg-[#1f5c54] text-[#f5efe2] text-xs md:text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}