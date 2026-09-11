"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight, ArrowUpRight, MapPin, Mail, CheckCircle2,
  Calendar, Users, BookOpen, Landmark, Trees, Lightbulb,
  ShieldCheck, HeartHandshake, Compass, Eye, Target, Sparkles, Quote,
  ChevronRight, Layers, Award, Sparkle
} from "lucide-react"
import MentorsSection from "@/components/home/MentorsSection"

export default function AboutPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [activeCampIdx, setActiveCampIdx] = useState(0)

  const heroCamps = [
    {
      badge: "Karjat • Dec 2025",
      title: "Access True Expertise",
      tag: "2nd Edition Camp",
      caption: "Expertise, here, was measured in years of practice, not pages. Direct mentorship from distinguished experts in governance and social development.",
      image: "/camp2/camp2-day2-i3_copy.png",
      href: "/camp-2",
      duration: "5 Days Immersion",
      location: "Karjat, Raigad"
    },
    {
      badge: "Palghar • Jan 2025",
      title: "Where The Journey Began",
      tag: "1st Edition Camp",
      caption: "40 students, tribal hamlets, and immersive grassroots dialogue. Real learning happens outside the four walls of a classroom.",
      image: "/floating1.jpeg",
      href: "/camp-1",
      duration: "Tribal Education",
      location: "Vikramgad, Palghar"
    },
    {
      badge: "Jawhar • May 2026",
      title: "Forest Ecology & Livelihoods",
      tag: "Summer Edition",
      caption: "Exploring PESA self-governance, Warli cultural heritage, and decentralized rural livelihoods in the Sahyadris.",
      image: "/floating7.jpeg",
      href: "/summer-school",
      duration: "Summer 2026",
      location: "Jawhar, Palghar"
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
      location: "Jawhar, Palghar",
      desc: "Our third camp brought us to Jawhar in the summer, continuing our journey of learning, questioning, and connecting with rural communities.",
      image: "/floating7.jpeg",
      href: "/summer-school",
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
      image: "/camp2/camp2-day2-i3_copy.png",
      href: "/camp-2",
      ctaText: "View 2nd Edition"
    },
    {
      date: "Jan '25",
      year: "2025",
      edition: "1st Edition",
      badge: "Inaugural",
      title: "Winter School, Palghar",
      location: "Vikramgad, Palghar",
      desc: "Our journey began with our first rural immersion camp in Palghar, bringing students together to step outside the classroom and experience rural realities first hand.",
      image: "/floating1.jpeg",
      href: "/camp-1",
      ctaText: "View 1st Edition"
    }
  ]

  const objectivesList = [
    {
      title: "Empathy",
      desc: "Breaking paternalistic development stereotypes through deep grassroots listening.",
      icon: HeartHandshake,
      accentColor: "text-[#b84a2b]",
      bgAccent: "bg-[#b84a2b]/10",
      borderAccent: "border-[#b84a2b]/20"
    },
    {
      title: "Synergy",
      desc: "Law, engineering & policy fellows working together on complex rural realities.",
      icon: Users,
      accentColor: "text-[#2d6a4f]",
      bgAccent: "bg-[#2d6a4f]/10",
      borderAccent: "border-[#2d6a4f]/20"
    },
    {
      title: "Policy",
      desc: "Converting field insights into actionable research and social enterprise.",
      icon: BookOpen,
      accentColor: "text-[#92400e]",
      bgAccent: "bg-[#92400e]/10",
      borderAccent: "border-[#92400e]/20"
    },
    {
      title: "Linkages",
      desc: "Year-round institutional support and sustained partnerships for villages.",
      icon: Landmark,
      accentColor: "text-[#1b4332]",
      bgAccent: "bg-[#1b4332]/10",
      borderAccent: "border-[#1b4332]/20"
    }
  ]

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-[#fbf9f4] text-[#1c1917]">

      {/* ================= 1. EDITORIAL HERO SECTION ================= */}
      <section className="relative pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 md:px-8 bg-[#0a2318] text-white overflow-hidden border-b border-[#1b4332]">
        
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#2d6a4f]/25 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#b84a2b]/15 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="max-w-3xl space-y-4 sm:space-y-6 text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#d8f3dc] text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#74c69d]" />
              <span>ABOUT SAHYADRI RURAL CONNECT</span>
            </div>

            {/* Main Heading with Editorial Serif Typography */}
            <h1 className="font-serif font-extrabold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.14] text-white tracking-tight">
              Where Ground-Level Immersion Becomes{" "}
              <span className="italic font-serif text-[#d8f3dc] font-normal underline decoration-[#74c69d]/40 underline-offset-8">
                Meaningful Leadership.
              </span>
            </h1>

            {/* Descriptive Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-[#d8f3dc]/90 leading-relaxed font-normal max-w-2xl pt-1">
              Sahyadri Rural Connect is an experiential education and rural immersion initiative dedicated to bridging classroom knowledge with grassroots realities, indigenous culture, and sustainable social impact.
            </p>

            {/* Call to Action Button */}
            <div className="pt-2 sm:pt-4 flex items-center gap-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#fbf9f4] text-[#081c15] font-bold text-xs sm:text-sm hover:bg-[#d8f3dc] active:scale-95 shadow-lg transition-all duration-300"
              >
                <span>Winter Camp Loading</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. CAMP HIGHLIGHT SECTION (INTERACTIVE EDITORIAL SHOWCASE) ================= */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative z-10">
        
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 pb-4 border-b border-[#e5dec9]">
          <div className="space-y-1.5 text-left">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#2d6a4f] block">
              FIELD EDITIONS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#081c15]">
              Camp Highlights &amp; <span className="italic text-[#2d6a4f] font-normal">Immersion Tracks</span>
            </h2>
          </div>

          {/* Interactive Tab Switcher Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#ede7d8] border border-[#dfd7c3] overflow-x-auto max-w-full">
            {heroCamps.map((camp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCampIdx(idx)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeCampIdx === idx
                    ? "bg-[#1b4332] text-white shadow-md font-bold"
                    : "text-[#1b4332]/75 hover:text-[#1b4332] hover:bg-white/50"
                }`}
              >
                <span>{camp.badge.split(" • ")[0]}</span>
                <span className="text-[10px] opacity-75 hidden xs:inline">({camp.badge.split(" • ")[1]})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Camp Interactive Card */}
        <div className="relative rounded-3xl overflow-hidden bg-[#1b4332] text-white shadow-xl border-2 border-[#1b4332] transition-all duration-500">
          <div className="grid lg:grid-cols-12 min-h-[380px] sm:min-h-[420px]">
            
            {/* Left Image Area */}
            <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-auto overflow-hidden group">
              <Image
                src={heroCamps[activeCampIdx].image}
                alt={heroCamps[activeCampIdx].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b4332] via-transparent to-black/30 lg:bg-gradient-to-r lg:from-transparent lg:to-[#1b4332]" />
              
              {/* Location Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 text-xs font-semibold">
                  <MapPin size={12} className="text-[#74c69d]" />
                  {heroCamps[activeCampIdx].badge}
                </span>
              </div>
            </div>

            {/* Right Narrative Content Area */}
            <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#2d6a4f] text-[#d8f3dc] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                    {heroCamps[activeCampIdx].tag}
                  </span>
                  <span className="text-xs text-[#d8f3dc]/80 font-medium">
                    {heroCamps[activeCampIdx].duration}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {heroCamps[activeCampIdx].title}
                </h3>

                <p className="font-serif italic text-sm sm:text-base text-[#d8f3dc]/90 leading-relaxed bg-white/5 border border-white/10 p-4 rounded-2xl">
                  &quot;{heroCamps[activeCampIdx].caption}&quot;
                </p>
              </div>

              {/* Action Link Button */}
              <div className="pt-2">
                <Link
                  href={heroCamps[activeCampIdx].href}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-[#1b4332] hover:bg-[#d8f3dc] text-xs sm:text-sm font-bold shadow-md hover:scale-102 transition-all"
                >
                  <span>Explore Camp Page</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ================= 3. OUR STORY SECTION ================= */}
      <section id="story" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-[#f5f0e6] border-y border-[#e5dec9] relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold tracking-widest uppercase border border-[#1b4332]/15">
              FOUNDATION &amp; ETHOS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#081c15] tracking-tight">
              Our Story
            </h2>
            <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#2d6a4f] font-normal max-w-2xl mx-auto leading-relaxed">
              &quot;There is a difference between knowing about a problem and knowing what it feels like on the ground.&quot;
            </p>
          </div>

          {/* Main 2-Column Content Layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Visual Story Card & Photo with Floating Overlay */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white group bg-[#1b4332]/10">
                <div className="relative h-[320px] xs:h-[380px] sm:h-[420px] w-full">
                  <Image
                    src="/rural_immersion_real.jpg"
                    alt="Students and village community immersion"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Top Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#1b4332] font-bold text-xs uppercase tracking-wider shadow-md">
                      🌱 Rural Immersion Fieldwork
                    </span>
                  </div>

                  {/* Bottom Overlay Info */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#ebdcc6] shadow-md text-left">
                    <span className="text-[10px] font-bold text-[#2d6a4f] uppercase tracking-wider block">
                      GROUND REALITIES
                    </span>
                    <p className="text-xs sm:text-sm font-serif font-bold text-[#081c15] mt-0.5 leading-snug">
                      Learning with communities, questioning assumptions, and exploring stories beyond statistics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pull Quote Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#e5dec9] shadow-xs relative">
                <Quote className="w-8 h-8 text-[#2d6a4f]/20 absolute top-4 right-4" />
                <p className="font-serif italic text-xs sm:text-sm md:text-[14.5px] text-[#1b4332] leading-relaxed pr-6 text-left">
                  &quot;For us, rural immersion is not about simply visiting a village. It is about learning with communities, questioning what we think we know, and exploring the stories that lie beyond the statistics.&quot;
                </p>
              </div>
            </div>

            {/* Right Column: Full Narrative Flow */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              
              <p className="text-sm sm:text-base text-[#2b2927] leading-relaxed">
                In college, we learn about the challenges our country faces. We study development, public policy, government schemes, livelihoods, and the technological solutions designed to address them. But much of this learning happens within classrooms, textbooks, case studies, and statistics.
              </p>

              {/* Featured Highlight Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#2d6a4f]/30 space-y-2.5 shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2d6a4f]" />
                  <h3 className="font-serif font-bold text-[#081c15] text-base sm:text-lg">
                    What happens when we step outside the classroom?
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#3d3a36] leading-relaxed">
                  We realised there was a gap between understanding a problem academically and experiencing how it actually unfolds on the ground. The realities of rural India are often more complex than what a textbook, a policy document, or a set of statistics can capture.
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#2b2927] leading-relaxed">
                <strong className="text-[#081c15] font-bold">Sahyadri Rural Connect</strong> was born from the desire to bridge that gap. Through our rural immersion camps, we aim to give students a firsthand experience of rural India. We create spaces where participants can step beyond observation and engage directly with communities, understand their everyday realities, explore livelihoods, and learn from experiences that cannot be fully captured in a classroom.
              </p>

              {/* Impact Banner Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#1b4332] text-white shadow-sm flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/15 text-[#d8f3dc] flex items-center justify-center shrink-0 border border-white/20">
                  <Compass size={20} />
                </div>
                <p className="font-serif font-bold text-xs sm:text-sm md:text-base text-white leading-snug">
                  Sahyadri is an attempt to bring the classroom closer to the ground, and the ground closer to the classroom.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= 4. EXPERIENCE SECTION (3 PREMIUM CARDS) ================= */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#2d6a4f] block">
            IMMERSION PILLARS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#081c15]">
            The Sahyadri Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Card 1 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#e5dec9] shadow-xs hover:shadow-md hover:border-[#2d6a4f]/50 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#2d6a4f]/10 text-[#2d6a4f] flex items-center justify-center mb-5 group-hover:bg-[#2d6a4f] group-hover:text-white transition-colors">
              <Trees size={24} />
            </div>
            <span className="text-[10px] font-bold text-[#2d6a4f] uppercase tracking-widest block mb-1">
              EXPERIENCE
            </span>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-[#081c15] mb-2">
              Lived Immersion
            </h3>
            <p className="text-xs sm:text-sm text-[#5a554e] leading-relaxed">
              Staying in tribal hamlets &amp; farms.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#e5dec9] shadow-xs hover:shadow-md hover:border-[#b84a2b]/50 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#b84a2b]/10 text-[#b84a2b] flex items-center justify-center mb-5 group-hover:bg-[#b84a2b] group-hover:text-white transition-colors">
              <HeartHandshake size={24} />
            </div>
            <span className="text-[10px] font-bold text-[#b84a2b] uppercase tracking-widest block mb-1">
              DIALOGUE
            </span>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-[#081c15] mb-2">
              Beyond Statistics
            </h3>
            <p className="text-xs sm:text-sm text-[#5a554e] leading-relaxed">
              Unpacking ground complexity with elders.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#e5dec9] shadow-xs hover:shadow-md hover:border-[#92400e]/50 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#92400e]/10 text-[#92400e] flex items-center justify-center mb-5 group-hover:bg-[#92400e] group-hover:text-white transition-colors">
              <Users size={24} />
            </div>
            <span className="text-[10px] font-bold text-[#92400e] uppercase tracking-widest block mb-1">
              FELLOWSHIP
            </span>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-[#081c15] mb-2">
              Interdisciplinary
            </h3>
            <p className="text-xs sm:text-sm text-[#5a554e] leading-relaxed">
              IIT, IIM, TISS &amp; Law scholars.
            </p>
          </div>

        </div>
      </section>

      {/* ================= 5. OUR STORY TIMELINE / THE JOURNEY SO FAR ================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-[#f5f0e6] border-y border-[#e5dec9] relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center mb-12 sm:mb-16 space-y-2">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#2d6a4f] block">
              CHRONOLOGY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#081c15] tracking-tight">
              The Journey <span className="text-[#2d6a4f] italic font-normal">So Far</span>
            </h2>
            <p className="text-[#5a554e] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed px-2">
              From our inaugural cohort in Palghar to multi-season field fellowships across Maharashtra&apos;s Western Ghats.
            </p>
          </div>

          {/* Interactive Timeline Connected Stream */}
          <div className="space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:-translate-x-1/2 before:bg-[#dfd7c3] before:hidden sm:before:block">
            {timelineMilestones.map((item, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Node Marker on Desktop */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex w-7 h-7 rounded-full bg-white border-4 border-[#1b4332] shadow-sm z-20 items-center justify-center text-[10px] font-bold text-[#1b4332]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1b4332]" />
                  </div>

                  {/* Spacer Column */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card Column */}
                  <div className={`w-full sm:w-1/2 ${isEven ? "sm:pr-10" : "sm:pl-10"}`}>
                    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e5dec9] shadow-sm hover:shadow-md transition-all duration-300 group text-left">
                      
                      {/* Card Header with Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#2d6a4f]/10 text-[#2d6a4f] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                            {item.badge}
                          </span>
                          <span className="font-serif italic font-bold text-xs sm:text-sm text-[#92400e]">
                            {item.date}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] text-[#5a554e] font-medium">
                          <MapPin size={11} className="text-[#2d6a4f]" />
                          {item.location}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#081c15] group-hover:text-[#2d6a4f] transition-colors mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#5a554e] leading-relaxed mb-4">
                        {item.desc}
                      </p>

                      {/* CTA Button Link */}
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2d6a4f] hover:text-[#1b4332] group/btn"
                      >
                        <span>{item.ctaText}</span>
                        <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>

                    </div>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ================= 6. VISION, MISSION & OBJECTIVES ================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 space-y-2">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold tracking-widest uppercase border border-[#1b4332]/15">
            GUIDING PRINCIPLES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#081c15] tracking-tight">
            Vision, Mission &amp; <span className="text-[#2d6a4f] italic font-normal">Objectives</span>
          </h2>
          <p className="text-[#5a554e] text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed px-2">
            The foundational philosophy shaping our experiential pedagogy, community partnerships, and fellows.
          </p>
        </div>

        {/* 2 Institutional Anchor Cards: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
          
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5dec9] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-[#ebdcc6]/70">
                <div className="w-10 h-10 rounded-xl bg-[#2d6a4f]/10 text-[#2d6a4f] flex items-center justify-center shrink-0 border border-[#2d6a4f]/20">
                  <Compass size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#2d6a4f] uppercase tracking-widest block">
                    PURPOSE
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#081c15]">
                    Our Mission
                  </h3>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#3d3a36] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2d6a4f] shrink-0 mt-1.5" />
                  <span>Lived grassroots immersion in tribal ashramshalas &amp; farm collectives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2d6a4f] shrink-0 mt-1.5" />
                  <span>Structured mentorship from veteran IAS leaders &amp; grassroots innovators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2d6a4f] shrink-0 mt-1.5" />
                  <span>Bridging academic classroom theory with real ground-level challenges</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5dec9] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-[#ebdcc6]/70">
                <div className="w-10 h-10 rounded-xl bg-[#1b4332]/10 text-[#1b4332] flex items-center justify-center shrink-0 border border-[#1b4332]/20">
                  <Eye size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#1b4332] uppercase tracking-widest block">
                    HORIZON
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#081c15]">
                    Our Vision
                  </h3>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#3d3a36] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1b4332] shrink-0 mt-1.5" />
                  <span>A generation of leaders viewing rural India as civilisational strength</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1b4332] shrink-0 mt-1.5" />
                  <span>Mainstreaming indigenous wisdom &amp; sustainable ecological practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1b4332] shrink-0 mt-1.5" />
                  <span>Nationwide network of interdisciplinary leaders committed to Bharat</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* 4 Dedicated Objectives Cards */}
        <div className="space-y-4 text-left">
          <div>
            <h4 className="font-serif font-bold text-lg sm:text-xl text-[#081c15] mb-4">
              Strategic Objectives
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {objectivesList.map((obj, idx) => {
              const IconComp = obj.icon
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#e5dec9] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className={`w-9 h-9 rounded-xl ${obj.bgAccent} ${obj.accentColor} flex items-center justify-center border ${obj.borderAccent}`}>
                      <IconComp size={18} />
                    </div>
                    <h5 className="font-serif font-bold text-base text-[#081c15]">
                      {obj.title}
                    </h5>
                    <p className="text-xs text-[#5a554e] leading-relaxed">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </section>

      {/* ================= 7. MENTORS & ADVISORY ================= */}
      <MentorsSection />

      {/* ================= 8. CONTACT & FIELD CONNECT SECTION ================= */}
      <section id="contact-section" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-white border-t border-[#e5dec9] relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold tracking-widest uppercase border border-[#1b4332]/15">
                GET IN TOUCH
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#081c15]">
                Let&apos;s Start a <span className="italic text-[#2d6a4f] font-normal">Conversation</span>
              </h2>

              <p className="text-[#5a554e] text-xs sm:text-sm md:text-base leading-relaxed">
                Reach out for institutional partnerships, student cohort applications, volunteer opportunities, or questions about our upcoming camps.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#fbf9f4] border border-[#e5dec9]">
                  <div className="w-9 h-9 rounded-xl bg-[#2d6a4f]/10 text-[#2d6a4f] flex items-center justify-center shrink-0 border border-[#2d6a4f]/20">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#081c15] block">Email Us</span>
                    <a href="mailto:sahyadriruralconnect@gmail.com" className="text-xs text-[#2d6a4f] hover:underline font-medium truncate block">
                      sahyadriruralconnect@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#fbf9f4] border border-[#e5dec9]">
                  <div className="w-9 h-9 rounded-xl bg-[#2d6a4f]/10 text-[#2d6a4f] flex items-center justify-center shrink-0 border border-[#2d6a4f]/20">
                    <MapPin size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#081c15] block">Field Locations</span>
                    <span className="text-xs text-[#5a554e] font-medium block">
                      Palghar • Karjat • Jawhar (Maharashtra)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-7 bg-[#fbf9f4] border border-[#e5dec9] p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm text-left">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#081c15] mb-4">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-serif font-bold text-emerald-900 text-lg">Message Received!</h4>
                  <p className="text-xs text-emerald-700">Thank you for reaching out. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-[#081c15] uppercase tracking-wider block mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#e5dec9] text-xs text-[#081c15] focus:outline-none focus:border-[#2d6a4f]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#081c15] uppercase tracking-wider block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#e5dec9] text-xs text-[#081c15] focus:outline-none focus:border-[#2d6a4f]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#081c15] uppercase tracking-wider block mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Student Cohort Application / Partnership"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#e5dec9] text-xs text-[#081c15] focus:outline-none focus:border-[#2d6a4f]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#081c15] uppercase tracking-wider block mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about yourself or your query..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#e5dec9] text-xs text-[#081c15] focus:outline-none focus:border-[#2d6a4f] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1b4332] text-white text-xs md:text-sm font-bold shadow-md hover:bg-[#2d6a4f] active:scale-95 transition-all cursor-pointer"
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