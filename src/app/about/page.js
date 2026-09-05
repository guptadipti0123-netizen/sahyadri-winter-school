"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Sparkles, ArrowRight, Target, Sun, Compass, HeartHandshake,
  MapPin, Mail, Phone, Calendar, CheckCircle2, Users, Trees,
  BookOpen, Landmark, ArrowUpRight
} from "lucide-react"
import { Noto_Sans } from 'next/font/google'
import MentorsSection from "@/components/home/MentorsSection"

const noto_Sans = Noto_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
})

export default function AboutPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  const timelineMilestones = [
    {
      date: "Jan 2025",
      title: "Inaugural Winter Camp — Palghar",
      edition: "1st Edition",
      location: "Palghar, Maharashtra",
      desc: "Where the journey began. 40 selected students from premier institutions like IIT Bombay, TISS, and ILS engaged in tribal education, community dialogues, and rural immersion.",
      href: "/camp-1"
    },
    {
      date: "Dec 2025",
      title: "2nd Edition Winter Camp — Karjat",
      edition: "2nd Edition",
      location: "Kothimbe, Karjat",
      desc: "Deepening field immersion. Highlights included Maratha heritage fort trekking, Farmer Producer Organisation (FPO) visits, solar initiatives, and policy case studies.",
      href: "/camp-2"
    },
    {
      date: "May 2026",
      title: "Upcoming Summer School — Jawhar",
      edition: "Upcoming Edition",
      location: "Jawhar, Palghar District",
      desc: "Expanding to the cradle of Warli art and forest ecology. Exploring tribal self-governance under PESA, non-timber produce, and decentralized rural livelihoods.",
      href: "/camp-3"
    }
  ]

  const visionPillars = [
    {
      title: "Mission",
      tag: "Our Purpose",
      desc: "To inspire, equip, and empower future leaders from diverse disciplines to make meaningful differences in communities through immersive rural development experiences.",
      icon: <Target className="w-6 h-6 text-sea_green" />,
      accentColor: "from-sea_green/10 to-transparent",
      borderColor: "border-sea_green/40 hover:border-sea_green"
    },
    {
      title: "Vision",
      tag: "Our Future",
      desc: "Creating a generation of socially conscious leaders who understand the complexities of rural India and are equipped with the skills to drive inclusive development.",
      icon: <Sun className="w-6 h-6 text-amber-600" />,
      accentColor: "from-amber-500/10 to-transparent",
      borderColor: "border-amber-400/40 hover:border-amber-500"
    },
    {
      title: "Objective",
      tag: "Our Goal",
      desc: "To engage bright minds in social sensitization, learn alongside communities, and nurture future social leaders and entrepreneurs for India.",
      icon: <Compass className="w-6 h-6 text-teal-700" />,
      accentColor: "from-teal-600/10 to-transparent",
      borderColor: "border-teal-500/40 hover:border-teal-600"
    }
  ]

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-frosted_mint/20">

      {/* ================= 1. EDITORIAL HERO SECTION (Vritant Style) ================= */}
      <section className="relative pt-28 md:pt-36 pb-14 overflow-hidden bg-gradient-to-b from-evergreen via-dark_emerald to-sea_green text-white">
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mint_leaf/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-celadon/15 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-md">
              <Sparkles size={14} className="text-frosted_mint" />
              <span className="text-xs md:text-sm font-bold text-frosted_mint tracking-widest uppercase">
                About Sahyadri Rural Connect
              </span>
            </div>

            <h1 className={`${noto_Sans.className} font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-white drop-shadow-md`}>
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

          {/* Right Column: Visual Offset Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/30 shadow-2xl">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-evergreen/50">
                <Image
                  src="/camp2/camp2-day2-i3_copy.png"
                  alt="Sahyadri Rural Immersion Cohort"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <div>
                    <span className="text-white text-xs font-bold uppercase tracking-wider block">
                      Experiential Learning
                    </span>
                    <p className="text-white/90 text-sm font-medium">
                      In the Heart of Rural Bharat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. NARRATIVE FRAME: UNDERSTANDING REAL BHARAT ================= */}
      <section id="story" className="py-14 md:py-20 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          
          {/* Left Visual */}
          <div className="md:col-span-5 relative">
            <div className="relative h-[320px] sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/jawahar-village-tribal-community.jpg"
                alt="Tribal Community & Village Immersion"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 bg-white p-4 rounded-2xl shadow-xl border border-celadon/50 max-w-[200px]">
              <span className="text-[10px] font-bold text-sea_green uppercase tracking-wider block">Cohort Reflection</span>
              <p className="text-xs font-semibold text-evergreen mt-0.5">
                Connecting urban aspirations with rural realities.
              </p>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-celadon text-sea_green text-[11px] font-bold tracking-widest uppercase">
              <BookOpen size={13} />
              <span>Genesis & Purpose</span>
            </div>

            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-evergreen leading-tight">
              Understanding <span className="text-sea_green italic">Real Bharat</span>
            </h2>

            <div className="space-y-4 text-pine_teal text-sm md:text-base leading-relaxed">
              <p>
                Founded by a collective of educators, researchers, and grassroots social practitioners, <strong>Sahyadri Rural Connect</strong> was born out of a simple observation: there is a profound gap between theoretical classroom discussions and the ground-level complexities of rural India.
              </p>
              <blockquote className="pl-5 border-l-3 border-sea_green text-evergreen font-serif italic text-base md:text-lg leading-relaxed bg-frosted_mint/40 p-4 rounded-r-2xl">
                &quot;Rural India is not a problem statement waiting for an outside solution, but a living civilisational ecosystem with its own wisdom, resilience, and forms of knowledge.&quot;
              </blockquote>
              <p>
                Our 5-day immersive programs take students, young professionals, and scholars away from lecture halls into tribal villages, watershed hillsides, and community assemblies.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. OUR STORY TIMELINE (Vritant Style) ================= */}
      <section className="py-14 px-4 md:px-8 bg-white border-y border-celadon/40 relative">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold text-sea_green uppercase tracking-widest">
              Milestones
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-evergreen">
              The Journey So Far
            </h2>
            <p className="text-pine_teal/80 text-sm md:text-base max-w-xl mx-auto">
              From our first rural cohort in Palghar to upcoming summer schools across the Sahyadris.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-celadon before:-translate-x-1/2">
            {timelineMilestones.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-sea_green flex items-center justify-center shadow-md z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-evergreen" />
                </div>

                {/* Content Box */}
                <div className="ml-10 md:ml-0 md:w-1/2 px-2 md:px-8">
                  <div className="bg-frosted_mint/30 border border-celadon/60 p-6 rounded-3xl hover:border-sea_green hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-xs font-bold text-sea_green uppercase tracking-wider">
                        {item.date} • {item.edition}
                      </span>
                      <span className="text-[11px] font-medium text-pine_teal/70 flex items-center gap-1">
                        <MapPin size={12} />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg md:text-xl font-bold text-evergreen mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-pine_teal/80 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sea_green hover:text-dark_emerald group"
                    >
                      <span>Explore Camp Archive</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. MISSION, VISION & OBJECTIVE ================= */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-celadon shadow-xs text-sea_green text-[11px] font-bold tracking-widest uppercase">
            <Sparkles size={13} />
            <span>Core Pillars</span>
          </div>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-evergreen">
            Mission, Vision &amp; <span className="text-sea_green italic">Objective</span>
          </h2>
          <p className="text-pine_teal/80 text-sm md:text-base font-medium max-w-xl mx-auto">
            The guiding principles shaping our experiential curriculum and grassroots community partnerships.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {visionPillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-7 border-2 ${pillar.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
            >
              <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${pillar.accentColor} rounded-full blur-2xl pointer-events-none`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold text-sea_green uppercase tracking-wider px-3 py-1 rounded-full bg-frosted_mint/40 border border-celadon/50">
                    {pillar.tag}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-frosted_mint/50 border border-celadon/40 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    {pillar.icon}
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-evergreen mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-pine_teal/85 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 5. MENTORS & ADVISORY ================= */}
      <MentorsSection />

      {/* ================= 6. START A CONVERSATION / CONTACT (Vritant Split Style) ================= */}
      <section id="contact-section" className="py-16 px-4 md:px-8 bg-white border-t border-celadon/40 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-frosted_mint/50 border border-celadon text-sea_green text-[11px] font-bold tracking-widest uppercase">
                <Mail size={13} />
                <span>Get In Touch</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-evergreen">
                Let&apos;s Start a <span className="italic text-sea_green">Conversation</span>
              </h2>

              <p className="text-pine_teal text-sm md:text-base leading-relaxed">
                Reach out for institutional partnerships, student cohort applications, volunteer opportunities, or questions about our upcoming camps.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-frosted_mint/30 border border-celadon/40">
                  <Mail className="w-5 h-5 text-sea_green flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-evergreen block">Email Us</span>
                    <a href="mailto:sahyadriruralconnect@gmail.com" className="text-xs text-pine_teal hover:text-sea_green">
                      sahyadriruralconnect@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-frosted_mint/30 border border-celadon/40">
                  <MapPin className="w-5 h-5 text-sea_green flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-evergreen block">Locations</span>
                    <span className="text-xs text-pine_teal">
                      Palghar • Karjat • Jawhar (Maharashtra)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-7 bg-frosted_mint/20 border-2 border-celadon/60 p-6 md:p-10 rounded-3xl shadow-sm">
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
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-celadon/60 text-xs text-evergreen focus:outline-none focus:border-sea_green"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-celadon/60 text-xs text-evergreen focus:outline-none focus:border-sea_green"
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
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-celadon/60 text-xs text-evergreen focus:outline-none focus:border-sea_green"
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
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-celadon/60 text-xs text-evergreen focus:outline-none focus:border-sea_green resize-none"
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