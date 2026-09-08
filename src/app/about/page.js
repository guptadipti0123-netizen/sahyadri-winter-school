"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight, ArrowUpRight, MapPin, Mail, CheckCircle2,
  Calendar, Users, BookOpen, Landmark, Trees, Lightbulb,
  ShieldCheck, HeartHandshake, Compass, Eye, Target
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
      duration: "5 Days Immersion"
    },
    {
      badge: "Palghar • Jan 2025",
      title: "Where The Journey Began",
      tag: "1st Edition Camp",
      caption: "40 students, tribal hamlets, and immersive grassroots dialogue. Real learning happens outside the four walls of a classroom.",
      image: "/floating1.jpeg",
      href: "/camp-1",
      duration: "Tribal Education"
    },
    {
      badge: "Jawhar • May 2026",
      title: "Forest Ecology & Livelihoods",
      tag: "Summer Edition",
      caption: "Exploring PESA self-governance, Warli cultural heritage, and decentralized rural livelihoods in the Sahyadris.",
      image: "/jawahar-village-tribal-community.jpg",
      href: "/summer-school",
      duration: "Summer 2026"
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
      href: "/camp-1",
      ctaText: "View 1st Edition"
    }
  ]

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-[#fbf8f1]">

      {/* ================= 1. EDITORIAL HERO SECTION (Vritant Style) ================= */}
      <section className="relative pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-evergreen via-dark_emerald to-sea_green text-white">
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-black/25 mix-blend-multiply pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mint_leaf/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-celadon/15 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-6xl mx-auto px-1 sm:px-4 relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-frosted_mint text-xs font-bold tracking-wider uppercase">
              ABOUT SAHYADRI RURAL CONNECT
            </span>

            <h1 className="font-serif font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.18] text-white drop-shadow-md">
              Where Ground-Level Immersion Becomes{" "}
              <span className="italic text-frosted_mint font-serif">Meaningful Leadership.</span>
            </h1>

            <p className="text-xs sm:text-base md:text-lg text-frosted_mint/90 leading-relaxed max-w-xl font-normal">
              Sahyadri Rural Connect is an experiential education and rural immersion initiative dedicated to bridging classroom knowledge with grassroots realities, indigenous culture, and sustainable social impact.
            </p>

            <div className="flex flex-row items-center gap-2.5 sm:gap-4 pt-2">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-white text-evergreen font-bold text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl hover:bg-frosted_mint hover:scale-102 active:scale-95 transition-all duration-300 whitespace-nowrap"
              >
                <span>Winter Camp Loading</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="#story"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-transparent border border-white/40 text-white font-semibold text-xs sm:text-sm md:text-base hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
              >
                <span>Our Story</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Camp Link Card with Instagram Captions & Background Images */}
          <div className="lg:col-span-5 flex flex-col items-center w-full">
            
            {/* Camp Selector Tabs */}
            <div className="flex items-center justify-center gap-1.5 p-1 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 mb-3 max-w-full overflow-x-auto">
              {heroCamps.map((camp, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCampIdx(idx)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeCampIdx === idx
                      ? "bg-white text-evergreen shadow-sm font-bold scale-102"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {camp.badge.split(" • ")[0]}
                </button>
              ))}
            </div>

            {/* Feature Card with Background Image, Instagram Caption & Camp Link */}
            <div className="relative w-full max-w-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/30 bg-evergreen/80 group mx-auto">
              <div className="relative h-[390px] xs:h-[420px] sm:h-[440px] w-full">
                <Image
                  src={heroCamps[activeCampIdx].image}
                  alt={heroCamps[activeCampIdx].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
                
                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                    <MapPin size={11} className="text-frosted_mint" />
                    {heroCamps[activeCampIdx].badge}
                  </span>
                  <span className="text-[10px] font-semibold text-frosted_mint/90 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15">
                    {heroCamps[activeCampIdx].tag}
                  </span>
                </div>

                {/* Bottom Content & Instagram Caption */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 space-y-2 sm:space-y-2.5 z-10 text-left">
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-white leading-tight drop-shadow-md">
                    {heroCamps[activeCampIdx].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-frosted_mint/95 leading-relaxed font-light bg-black/50 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-white/15">
                    &quot;{heroCamps[activeCampIdx].caption}&quot;
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <Link
                      href={heroCamps[activeCampIdx].href}
                      className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-evergreen hover:bg-frosted_mint text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all group/btn"
                    >
                      <span>Explore Camp Page</span>
                      <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[10px] sm:text-[11px] font-medium text-white/75 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                      {heroCamps[activeCampIdx].duration}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 2. NARRATIVE FRAME: UNDERSTANDING REAL BHARAT ================= */}
      <section id="story" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-center">
          
          {/* Left Visual */}
          <div className="md:col-span-5 relative">
            <div className="relative h-[280px] xs:h-[340px] sm:h-[440px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/jawahar-village-tribal-community.jpg"
                alt="Tribal Community & Village Immersion"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative sm:absolute sm:-bottom-5 sm:-right-3 mt-4 sm:mt-0 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-[#ebdcc6] max-w-full sm:max-w-[220px]">
              <span className="text-[10px] font-bold text-sea_green uppercase tracking-wider block">
                COHORT REFLECTION
              </span>
              <p className="text-xs font-serif font-bold text-evergreen mt-1 leading-snug">
                Connecting urban aspirations with rural realities and ancient ecological wisdom.
              </p>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="md:col-span-7 space-y-4 sm:space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#fef3c7] text-[#92400e] text-xs font-bold tracking-wider uppercase border border-[#fde68a]">
              OUR STORY
            </span>

            <h2 className="font-serif text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-evergreen leading-tight">
              Beyond the Classroom, <span className="text-sea_green italic">Onto the Ground</span>
            </h2>

            <div className="space-y-3.5 sm:space-y-4 text-pine_teal text-xs sm:text-base leading-relaxed">
              <p>
                There is a difference between knowing about a problem and knowing what it feels like on the ground. In college, we learn about public policy, schemes, livelihoods, and development. But much of this learning happens within classrooms, textbooks, and statistics.
              </p>
              <blockquote className="pl-4 sm:pl-5 border-l-4 border-sea_green text-evergreen font-serif italic text-sm sm:text-base md:text-lg leading-relaxed bg-white/80 p-4 sm:p-5 rounded-r-2xl border border-y-0 border-r-0 shadow-sm">
                &quot;For us, rural immersion is not about simply visiting a village. It is about learning with communities, questioning what we think we know, and exploring the stories that lie beyond the statistics.&quot;
              </blockquote>
              <p>
                <strong>Sahyadri Rural Connect</strong> was born from the desire to bridge that gap — bringing the classroom closer to the ground, and the ground closer to the classroom.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. OUR STORY TIMELINE / THE JOURNEY SO FAR ================= */}
      <section className="py-12 sm:py-20 px-3 sm:px-6 md:px-8 bg-[#faf7f2] border-y border-[#ebdcc6] relative">
        <div className="max-w-3xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center mb-10 sm:mb-12 space-y-2">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#fef3c7] text-[#92400e] text-xs font-bold tracking-wider uppercase border border-[#fde68a]">
              OUR CHRONICLE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-evergreen tracking-tight">
              The Journey <span className="text-sea_green italic">So Far</span>
            </h2>
            <p className="text-pine_teal/80 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed px-2">
              From our inaugural cohort in Palghar to multi-season field fellowships across Maharashtra&apos;s Western Ghats.
            </p>
          </div>

          {/* Pure Editorial Timeline (Vritant Style) */}
          <div className="relative pl-1 sm:pl-0">
            {timelineMilestones.map((item, idx) => {
              const isLast = idx === timelineMilestones.length - 1
              return (
                <div key={idx} className="relative flex items-start group">
                  
                  {/* Left Column: Date / Year (Serif Italic) */}
                  <div className="w-14 xs:w-18 sm:w-28 text-right pr-2.5 sm:pr-6 shrink-0 pt-0.5">
                    <span className="font-serif italic text-xs xs:text-sm sm:text-base font-semibold text-pine_teal/75 group-hover:text-sea_green transition-colors">
                      {item.date}
                    </span>
                  </div>

                  {/* Center Column: Node Dot & Vertical Line Spine */}
                  <div className="relative flex flex-col items-center shrink-0 self-stretch">
                    {/* Circular Ring Node */}
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-evergreen bg-[#faf7f2] group-hover:border-sea_green group-hover:scale-110 group-hover:bg-sea_green/10 transition-all z-10 mt-1 shadow-xs" />
                    
                    {/* Vertical Connector Line */}
                    {!isLast && (
                      <div className="w-px bg-[#d8c3a5] flex-1 my-1" />
                    )}
                  </div>

                  {/* Right Column: Content */}
                  <div className={`pl-3 sm:pl-6 flex-1 ${!isLast ? "pb-8 sm:pb-12" : "pb-2"}`}>
                    
                    {/* Top Badges / Meta */}
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded-full bg-[#fef3c7] text-[#92400e] text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider border border-[#fde68a]">
                        {item.badge}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-pine_teal/70">
                        <MapPin size={11} className="text-sea_green shrink-0" />
                        <span>{item.location}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-sm xs:text-base sm:text-xl font-bold text-evergreen group-hover:text-sea_green transition-colors leading-snug mb-1">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-pine_teal/80 leading-relaxed max-w-xl mb-2.5">
                      {item.desc}
                    </p>

                    {/* CTA Link */}
                    <div>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-sea_green hover:text-dark_emerald group/link"
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

      {/* ================= 4. VISION, MISSION & OBJECTIVES (Compact Reference Style) ================= */}
      <section className="py-12 sm:py-18 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10 space-y-2">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fef3c7] text-[#92400e] text-xs font-bold tracking-wider uppercase border border-[#fde68a]">
            GUIDING PRINCIPLES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-evergreen tracking-tight">
            Vision, Mission &amp; <span className="text-sea_green italic">Objectives</span>
          </h2>
          <p className="text-pine_teal/80 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed px-2">
            The foundational philosophy shaping our experiential pedagogy, community partnerships, and fellows.
          </p>
        </div>

        {/* 3 Compact Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1: OUR MISSION */}
          <div className="bg-white rounded-2xl p-4.5 sm:p-6 border border-[#ebdcc6] shadow-[2px_3px_0px_#2f6f55] sm:shadow-[3px_4px_0px_#2f6f55] hover:shadow-[5px_6px_0px_#1e3d34] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header: Icon Next to Title */}
              <div className="flex items-center gap-3 pb-3 mb-3 border-b border-[#ebdcc6]/60">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-sea_green/10 text-sea_green flex items-center justify-center shrink-0 border border-sea_green/20 group-hover:bg-sea_green group-hover:text-white transition-colors">
                  <Compass size={18} />
                </div>
                <h3 className="font-extrabold text-xs sm:text-sm md:text-base tracking-wider uppercase text-evergreen font-sans">
                  OUR MISSION
                </h3>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm md:text-[14.5px] text-pine_teal leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-sea_green shrink-0 mt-1.5" />
                  <span>Lived grassroots immersion in tribal ashramshalas &amp; farm collectives</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-sea_green shrink-0 mt-1.5" />
                  <span>Structured mentorship from veteran IAS leaders &amp; grassroots innovators</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-sea_green shrink-0 mt-1.5" />
                  <span>Bridging academic classroom theory with real ground-level challenges</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: OUR VISION */}
          <div className="bg-white rounded-2xl p-4.5 sm:p-6 border border-[#ebdcc6] shadow-[2px_3px_0px_#2f6f55] sm:shadow-[3px_4px_0px_#2f6f55] hover:shadow-[5px_6px_0px_#1e3d34] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header: Icon Next to Title */}
              <div className="flex items-center gap-3 pb-3 mb-3 border-b border-[#ebdcc6]/60">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                  <Eye size={18} />
                </div>
                <h3 className="font-extrabold text-xs sm:text-sm md:text-base tracking-wider uppercase text-evergreen font-sans">
                  OUR VISION
                </h3>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm md:text-[14.5px] text-pine_teal leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                  <span>A generation of leaders viewing rural India as civilisational strength</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                  <span>Mainstreaming indigenous wisdom &amp; sustainable ecological practices</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                  <span>Nationwide network of interdisciplinary leaders committed to Bharat</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: OBJECTIVES */}
          <div className="bg-white rounded-2xl p-4.5 sm:p-6 border border-[#ebdcc6] shadow-[2px_3px_0px_#2f6f55] sm:shadow-[3px_4px_0px_#2f6f55] hover:shadow-[5px_6px_0px_#1e3d34] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header: Icon Next to Title */}
              <div className="flex items-center gap-3 pb-3 mb-3 border-b border-[#ebdcc6]/60">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-50 text-[#92400e] flex items-center justify-center shrink-0 border border-amber-200 group-hover:bg-[#92400e] group-hover:text-white transition-colors">
                  <Target size={18} />
                </div>
                <h3 className="font-extrabold text-xs sm:text-sm md:text-base tracking-wider uppercase text-evergreen font-sans">
                  OBJECTIVES
                </h3>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm md:text-[14.5px] text-pine_teal leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                  <span><strong>Empathy:</strong> Breaking paternalistic development stereotypes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                  <span><strong>Synergy:</strong> Law, engineering &amp; policy fellows working together</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                  <span><strong>Policy:</strong> Converting field insights into research &amp; enterprise</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                  <span><strong>Linkages:</strong> Year-round institutional support for villages</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </section>

      {/* ================= 5. MENTORS & ADVISORY ================= */}
      <MentorsSection />

      {/* ================= 6. START A CONVERSATION / CONTACT (Vritant Split Style) ================= */}
      <section id="contact-section" className="py-14 sm:py-20 px-4 sm:px-6 md:px-8 bg-white border-t border-[#ebdcc6] relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#fef3c7] text-[#92400e] text-xs font-bold tracking-wider uppercase border border-[#fde68a]">
                GET IN TOUCH
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-evergreen">
                Let&apos;s Start a <span className="italic text-sea_green">Conversation</span>
              </h2>

              <p className="text-pine_teal text-xs sm:text-sm md:text-base leading-relaxed">
                Reach out for institutional partnerships, student cohort applications, volunteer opportunities, or questions about our upcoming camps.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#faf7f2] border border-[#ebdcc6]">
                  <Mail className="w-5 h-5 text-sea_green flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-evergreen block">Email Us</span>
                    <a href="mailto:sahyadriruralconnect@gmail.com" className="text-xs text-pine_teal hover:text-sea_green font-medium truncate block">
                      sahyadriruralconnect@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#faf7f2] border border-[#ebdcc6]">
                  <MapPin className="w-5 h-5 text-sea_green flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-evergreen block">Field Locations</span>
                    <span className="text-xs text-pine_teal font-medium block">
                      Palghar • Karjat • Jawhar (Maharashtra)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-7 bg-[#faf7f2] border-2 border-[#ebdcc6] p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-evergreen mb-3.5 sm:mb-4">
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
                      <label className="text-[11px] font-bold text-evergreen uppercase tracking-wider block mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#ebdcc6] text-xs text-evergreen focus:outline-none focus:border-sea_green"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-evergreen uppercase tracking-wider block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#ebdcc6] text-xs text-evergreen focus:outline-none focus:border-sea_green"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-evergreen uppercase tracking-wider block mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Student Cohort Application / Partnership"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#ebdcc6] text-xs text-evergreen focus:outline-none focus:border-sea_green"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-evergreen uppercase tracking-wider block mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about yourself or your query..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#ebdcc6] text-xs text-evergreen focus:outline-none focus:border-sea_green resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-sea_green to-dark_emerald text-white text-xs md:text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
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