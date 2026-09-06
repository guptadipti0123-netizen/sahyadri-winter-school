"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight, ArrowUpRight, MapPin, Mail, CheckCircle2,
  Calendar, Users, BookOpen, Landmark, Trees, Lightbulb,
  ShieldCheck, HeartHandshake
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
      tag: "Upcoming Summer School",
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
      year: "2026",
      edition: "Upcoming Edition",
      badge: "MAY 2026 • UPCOMING",
      title: "Summer School: Forest Ecology & Tribal Governance",
      location: "Jawhar, Palghar District",
      theme: "Warli Cultural Heritage, PESA 1996 & Non-Timber Produce",
      desc: "Expanding our immersive curriculum to Jawhar, the historic cultural cradle of the Warli community. The cohort will engage deeply with tribal self-governance under the PESA Act 1996, indigenous artisans, non-timber forest produce (NTFP) economies, and watershed preservation.",
      image: "/jawahar-village-tribal-community.jpg",
      tags: ["PESA Act 1996", "Warli Art Heritage", "Forest Livelihoods", "Gram Sabha Immersion"],
      href: "/summer-school",
      ctaText: "Explore Summer School",
      highlight: "Upcoming Cohort"
    },
    {
      year: "2025",
      edition: "2nd Edition",
      badge: "DEC 2025 • 2ND EDITION",
      title: "Winter Camp: Watersheds, Fort Heritage & Rural Enterprise",
      location: "Kothimbe & Sugave, Karjat",
      theme: "Maratha Water Architecture, Solar Initiatives & FPOs",
      desc: "A transformative 5-day immersion bringing together scholars and young professionals. Highlights included an arduous dawn trek to Kothaligad (Peth) Fort analyzing historic water harvesting, field visits to Farmer Producer Organisations (FPOs), solar micro-grids, and decentralized governance debates.",
      image: "/camp2/camp2-day2-i1.jpg",
      tags: ["Kothaligad Trek", "Farmer Producer Orgs", "Solar Micro-Grids", "Policy Case Studies"],
      href: "/camp-2",
      ctaText: "View 2nd Edition Archive",
      highlight: "40+ Fellows Graduated"
    },
    {
      year: "2025",
      edition: "1st Edition",
      badge: "JAN 2025 • INAUGURAL",
      title: "Inaugural Winter Camp: Tribal Education & Grassroots Realities",
      location: "Manor & Vikramgad, Palghar",
      theme: "Ashramshala Systems, Grassroots Sensitization & Rural Dialogues",
      desc: "Where the movement began. 40 selected students from premier institutions like IIT Bombay, TISS Mumbai, and ILS Pune spent 5 days living with local tribal communities, auditing Zilla Parishad schools, and engaging in grassroots dialogues that redefined development beyond classroom textbooks.",
      image: "/sahyadri-1.jpg",
      tags: ["Inaugural Cohort", "Tribal Ashramshalas", "Zilla Parishad Fieldwork", "TISS & IIT Fellows"],
      href: "/camp-1",
      ctaText: "View 1st Edition Archive",
      highlight: "Foundation Milestone"
    }
  ]

  const coreObjectives = [
    {
      num: "01",
      badge: "SENSITIZATION",
      title: "Empathy & Cultural Respect",
      desc: "Fostering deep respect for rural communities by breaking paternalistic development stereotypes through genuine peer-to-peer dialogues and lived experience."
    },
    {
      num: "02",
      badge: "COLLABORATION",
      title: "Interdisciplinary Synergy",
      desc: "Uniting engineers, lawyers, social scientists, and designers in joint field teams to examine complex rural problems from multifaceted perspectives."
    },
    {
      num: "03",
      badge: "APPLICATION",
      title: "Grassroots Policy & Enterprise",
      desc: "Equipping fellows to convert raw field insights into actionable research papers, public policy recommendations, and sustainable social enterprise models."
    },
    {
      num: "04",
      badge: "CONTINUITY",
      title: "Enduring Community Linkages",
      desc: "Ensuring host villages and tribal hamlets receive ongoing research support, youth educational workshops, and institutional linkages year-round."
    }
  ]

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-[#fbf8f1]">

      {/* ================= 1. EDITORIAL HERO SECTION (Vritant Style) ================= */}
      <section className="relative pt-28 md:pt-36 pb-16 overflow-hidden bg-gradient-to-b from-evergreen via-dark_emerald to-sea_green text-white">
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-black/25 mix-blend-multiply pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mint_leaf/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-celadon/15 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-frosted_mint text-xs font-bold tracking-wider uppercase">
              ABOUT SAHYADRI RURAL CONNECT
            </span>

            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-white drop-shadow-md">
              Where Ground-Level Immersion Becomes{" "}
              <span className="italic text-frosted_mint font-serif">Meaningful Leadership.</span>
            </h1>

            <p className="text-sm md:text-lg text-frosted_mint/90 leading-relaxed max-w-xl font-normal">
              Sahyadri Rural Connect is an experiential education and rural immersion initiative dedicated to bridging classroom knowledge with grassroots realities, indigenous culture, and sustainable social impact.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-evergreen font-bold text-sm md:text-base shadow-lg hover:shadow-xl hover:bg-frosted_mint hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Explore Upcoming Camp</span>
                <ArrowRight size={17} />
              </Link>
              <Link
                href="#story"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent border border-white/40 text-white font-semibold text-sm md:text-base hover:bg-white/10 transition-all duration-300"
              >
                <span>Our Story</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Camp Link Card with Instagram Captions & Background Images */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Camp Selector Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 mb-3 max-w-full overflow-x-auto">
              {heroCamps.map((camp, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCampIdx(idx)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all duration-300 ${
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
            <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/30 bg-evergreen/80 group">
              <div className="relative h-[340px] sm:h-[380px] w-full">
                <Image
                  src={heroCamps[activeCampIdx].image}
                  alt={heroCamps[activeCampIdx].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/30" />
                
                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-bold tracking-wider uppercase">
                    <MapPin size={11} className="text-frosted_mint" />
                    {heroCamps[activeCampIdx].badge}
                  </span>
                  <span className="text-[10px] font-semibold text-frosted_mint/90 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15">
                    {heroCamps[activeCampIdx].tag}
                  </span>
                </div>

                {/* Bottom Content & Instagram Caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 space-y-2.5 z-10 text-left">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-md">
                    {heroCamps[activeCampIdx].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-frosted_mint/95 leading-relaxed font-light line-clamp-3 bg-black/40 backdrop-blur-sm p-3 rounded-2xl border border-white/15">
                    &quot;{heroCamps[activeCampIdx].caption}&quot;
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <Link
                      href={heroCamps[activeCampIdx].href}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-evergreen hover:bg-frosted_mint text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all group/btn"
                    >
                      <span>Explore Camp Page</span>
                      <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[11px] font-medium text-white/75 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
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
      <section id="story" className="py-16 md:py-24 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Left Visual */}
          <div className="md:col-span-5 relative">
            <div className="relative h-[340px] sm:h-[440px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/jawahar-village-tribal-community.jpg"
                alt="Tribal Community & Village Immersion"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 bg-white p-5 rounded-2xl shadow-xl border border-[#ebdcc6] max-w-[220px]">
              <span className="text-[10px] font-bold text-sea_green uppercase tracking-wider block">
                COHORT REFLECTION
              </span>
              <p className="text-xs font-serif font-bold text-evergreen mt-1 leading-snug">
                Connecting urban aspirations with rural realities and ancient ecological wisdom.
              </p>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#fef3c7] text-[#92400e] text-xs font-bold tracking-wider uppercase border border-[#fde68a]">
              THE INSPIRATION
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-evergreen leading-tight">
              Understanding <span className="text-sea_green italic">Real Bharat</span>
            </h2>

            <div className="space-y-4 text-pine_teal text-sm md:text-base leading-relaxed">
              <p>
                Founded by a collective of educators, researchers, and grassroots social practitioners, <strong>Sahyadri Rural Connect</strong> was born out of a simple observation: there is a profound gap between theoretical classroom discussions and the ground-level complexities of rural India.
              </p>
              <blockquote className="pl-5 border-l-4 border-sea_green text-evergreen font-serif italic text-base md:text-lg leading-relaxed bg-white/80 p-5 rounded-r-2xl border border-y-0 border-r-0 shadow-sm">
                &quot;Rural India is not a problem statement waiting for an outside solution, but a living civilisational ecosystem with its own wisdom, resilience, and forms of knowledge.&quot;
              </blockquote>
              <p>
                Our 5-day immersive programs take students, young professionals, and scholars away from lecture halls into tribal villages, watershed hillsides, and community assemblies.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. OUR STORY TIMELINE / THE JOURNEY SO FAR ================= */}
      <section className="py-20 px-4 md:px-8 bg-[#faf7f2] border-y border-[#ebdcc6] relative">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#fef3c7] text-[#92400e] text-xs font-bold tracking-wider uppercase border border-[#fde68a]">
              OUR CHRONICLE &amp; FIELD ARCHIVES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-evergreen tracking-tight">
              The Journey <span className="text-sea_green italic">So Far</span>
            </h2>
            <p className="text-pine_teal/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              From our inaugural grassroots cohort in Palghar to multi-season field fellowships across Maharashtra&apos;s Western Ghats.
            </p>
          </div>

          {/* Timeline Cards Container */}
          <div className="space-y-12 relative before:hidden lg:before:block lg:before:absolute lg:before:inset-y-0 lg:before:left-1/2 lg:before:w-0.5 lg:before:bg-[#d8c3a5] lg:before:-translate-x-1/2">
            {timelineMilestones.map((item, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Spine Node / Year Marker for Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-sea_green items-center justify-center shadow-md z-10 text-xs font-bold text-evergreen font-serif">
                    {item.year}
                  </div>

                  {/* Spacer for 2-column alternating alignment */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Card Content (Occupies half width on desktop) */}
                  <div className="w-full lg:w-1/2 px-0 lg:px-6">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ebdcc6] shadow-sm hover:shadow-xl hover:border-sea_green/60 transition-all duration-300 group flex flex-col justify-between">
                      
                      {/* Card Image */}
                      <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden mb-6 border border-[#ebdcc6]/60">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        
                        {/* Overlay Badges */}
                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-evergreen text-[11px] font-bold tracking-wider uppercase shadow-xs">
                            {item.badge}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-frosted_mint text-[10px] font-medium border border-white/20">
                            {item.highlight}
                          </span>
                        </div>

                        {/* Location Tag */}
                        <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-white text-xs font-semibold drop-shadow-md">
                          <MapPin size={13} className="text-amber-300" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="space-y-3">
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-evergreen group-hover:text-sea_green transition-colors leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm font-semibold text-sea_green">
                          {item.theme}
                        </p>

                        <p className="text-xs sm:text-sm text-pine_teal/85 leading-relaxed">
                          {item.desc}
                        </p>

                        {/* Tag Pills (No icons inside tags) */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="px-2.5 py-1 rounded-lg bg-[#fbf8f1] border border-[#ebdcc6] text-[11px] font-medium text-evergreen"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA Link */}
                        <div className="pt-4 border-t border-[#ebdcc6]/60 flex items-center justify-between">
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-sea_green hover:text-dark_emerald group/link"
                          >
                            <span>{item.ctaText}</span>
                            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                          <span className="text-[11px] font-serif italic text-pine_teal/60">
                            Edition {item.edition}
                          </span>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ================= 4. MISSION, VISION & GUIDING OBJECTIVES ================= */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#fef3c7] text-[#92400e] text-xs font-bold tracking-wider uppercase border border-[#fde68a]">
            OUR CORE PURPOSE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-evergreen tracking-tight">
            Mission, Vision &amp; <span className="text-sea_green italic">Objectives</span>
          </h2>
          <p className="text-pine_teal/80 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            The foundational philosophy shaping our experiential pedagogy, community partnerships, and fellows.
          </p>
        </div>

        {/* Featured Dual Spotlight: Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-sea_green/30 hover:border-sea_green shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-sea_green/10 via-frosted_mint/20 to-transparent rounded-bl-full pointer-events-none" />
            <div className="absolute top-6 right-8 font-serif font-extrabold text-6xl sm:text-7xl text-sea_green/10 select-none pointer-events-none">
              01
            </div>

            <div className="relative z-10 space-y-5">
              <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold tracking-wider uppercase">
                OUR MISSION
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-evergreen leading-snug">
                To bridge academic theory and rural reality through lived, ground-level immersion.
              </h3>

              <p className="text-xs sm:text-sm text-pine_teal/90 leading-relaxed font-normal">
                We empower students, scholars, and emerging leaders to step outside classroom walls, engage directly with grassroots communities, understand ground-level socio-economic structures, and co-create contextually grounded solutions.
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sea_green flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-pine_teal leading-snug">
                    <strong>Lived Grassroots Immersion:</strong> Living inside tribal ashramshalas, village hamlets, and farm collectives.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sea_green flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-pine_teal leading-snug">
                    <strong>Practitioner Mentorship:</strong> Direct dialogues with seasoned IAS veterans, grassroots innovators, and social reformers.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sea_green flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-pine_teal leading-snug">
                    <strong>Sensitization over Solutionism:</strong> Listening first to indigenous wisdom rather than imposing external assumptions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-amber-500/30 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-amber-500/10 via-amber-100/30 to-transparent rounded-bl-full pointer-events-none" />
            <div className="absolute top-6 right-8 font-serif font-extrabold text-6xl sm:text-7xl text-amber-600/10 select-none pointer-events-none">
              02
            </div>

            <div className="relative z-10 space-y-5">
              <span className="inline-block px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold tracking-wider uppercase">
                OUR VISION
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-evergreen leading-snug">
                A generation of leaders who view rural India as a living civilisational strength.
              </h3>

              <p className="text-xs sm:text-sm text-pine_teal/90 leading-relaxed font-normal">
                We envision an India where future policymakers, engineers, legal scholars, journalists, and entrepreneurs possess firsthand wisdom of grassroots Bharat—catalyzing inclusive, ecologically sustainable, and culturally respectful national development.
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-pine_teal leading-snug">
                    <strong>Mainstreaming Rural Wisdom:</strong> Integrating indigenous knowledge into modern technological and policy paradigms.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-pine_teal leading-snug">
                    <strong>Self-Reliant Communities:</strong> Championing decentralized, sustainable village leadership under community ownership.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-pine_teal leading-snug">
                    <strong>Nationwide Changemaker Network:</strong> Building a dynamic fellowship of interdisciplinary leaders committed to Bharat.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Guiding Objectives Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreObjectives.map((obj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#ebdcc6] hover:border-sea_green hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-serif font-extrabold text-sea_green">
                    {obj.num}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#fbf8f1] border border-[#ebdcc6] text-[10px] font-bold text-evergreen tracking-wider uppercase">
                    {obj.badge}
                  </span>
                </div>

                <h4 className="font-serif text-lg font-bold text-evergreen mb-2">
                  {obj.title}
                </h4>

                <p className="text-xs text-pine_teal/80 leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ================= 5. MENTORS & ADVISORY ================= */}
      <MentorsSection />

      {/* ================= 6. START A CONVERSATION / CONTACT (Vritant Split Style) ================= */}
      <section id="contact-section" className="py-20 px-4 md:px-8 bg-white border-t border-[#ebdcc6] relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#fef3c7] text-[#92400e] text-xs font-bold tracking-wider uppercase border border-[#fde68a]">
                GET IN TOUCH
              </span>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-evergreen">
                Let&apos;s Start a <span className="italic text-sea_green">Conversation</span>
              </h2>

              <p className="text-pine_teal text-sm md:text-base leading-relaxed">
                Reach out for institutional partnerships, student cohort applications, volunteer opportunities, or questions about our upcoming camps.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#faf7f2] border border-[#ebdcc6]">
                  <Mail className="w-5 h-5 text-sea_green flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-evergreen block">Email Us</span>
                    <a href="mailto:sahyadriruralconnect@gmail.com" className="text-xs text-pine_teal hover:text-sea_green font-medium">
                      sahyadriruralconnect@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#faf7f2] border border-[#ebdcc6]">
                  <MapPin className="w-5 h-5 text-sea_green flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-evergreen block">Field Locations</span>
                    <span className="text-xs text-pine_teal font-medium">
                      Palghar • Karjat • Jawhar (Maharashtra)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-7 bg-[#faf7f2] border-2 border-[#ebdcc6] p-6 md:p-10 rounded-3xl shadow-sm">
              <h3 className="font-serif text-xl font-bold text-evergreen mb-4">
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