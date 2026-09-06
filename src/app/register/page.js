'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
  Compass,
  TreePine,
  Award,
  ChevronDown,
  ChevronUp,
  BookOpen,
  HelpCircle,
  Calendar,
  MapPin,
  Flame,
  GraduationCap
} from 'lucide-react';

export default function RegisterPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const snapshotMetrics = [
    {
      icon: <Calendar className="w-5 h-5 text-emerald-700" />,
      label: 'Upcoming Cohort',
      value: 'Winter 2026 Edition',
      sub: 'Dates Announcing Soon'
    },
    {
      icon: <MapPin className="w-5 h-5 text-sea_green" />,
      label: 'Immersion Location',
      value: 'Sahyadri Rural Hamlets',
      sub: 'Maharashtra'
    },
    {
      icon: <Users className="w-5 h-5 text-amber-700" />,
      label: 'Cohort Strength',
      value: '40 Selected Fellows',
      sub: 'Pan-India Representation'
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-dark_emerald" />,
      label: 'Who Can Apply',
      value: 'UG, PG & Researchers',
      sub: 'All Academic Disciplines'
    },
  ];

  const highlights = [
    {
      icon: <Users className="w-6 h-6 text-emerald-700" />,
      title: 'Curated Interdisciplinary Cohort',
      desc: 'Selected scholars from IITs, TISS, IIMs, Law & Policy institutes across India learning together.',
      bg: 'bg-emerald-50/80 border-emerald-200/80'
    },
    {
      icon: <TreePine className="w-6 h-6 text-sea_green" />,
      title: '100% Lived Field Immersion',
      desc: 'Hands-on village homestays, forest biodiversity trails, and organic agricultural practice.',
      bg: 'bg-teal-50/80 border-teal-200/80'
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-700" />,
      title: 'Grassroots Dialogue',
      desc: 'Direct interaction with Gram Sabhas, tribal elders, NGO founders & district administrators.',
      bg: 'bg-amber-50/80 border-amber-200/80'
    },
    {
      icon: <Award className="w-6 h-6 text-dark_emerald" />,
      title: 'Fellowship Certification',
      desc: 'Official certificate of completion with real interdisciplinary policy case project credits.',
      bg: 'bg-lime-50/80 border-lime-200/80'
    },
  ];

  const faqs = [
    {
      q: 'What does "Are you Interested" mean?',
      a: 'By submitting the "Are you Interested" form, you register an early expression of interest for the upcoming winter school. You will receive priority notifications, application guidelines, and curriculum updates directly before public rollout.'
    },
    {
      q: 'Who is eligible to participate in the upcoming cohort?',
      a: 'The fellowship is open to undergraduate, postgraduate, and PhD scholars from all academic disciplines (Law, Engineering, Public Policy, Economics, Social Sciences, Management, etc.) as well as early-career professionals.'
    },
    {
      q: 'Are food, lodging, and safety arranged?',
      a: 'Yes. All selected fellows receive organized community lodging, authentic nutritious Maharashtrian meals, 24/7 faculty supervision, and guided field logistics throughout the 5 days.'
    },
    {
      q: 'Will participants receive a certificate?',
      a: 'Yes. All fellows who complete the 5-day immersion and present their group action blueprint will receive a verified certificate of completion from Sahyadri Rural Connect.'
    }
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-frosted_mint/20">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-28 md:pt-36 pb-12 overflow-hidden">
        {/* Wave Background */}
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

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-5">
          
          {/* Upcoming Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-celadon shadow-sm backdrop-blur-md">
            <Flame className="w-4 h-4 text-emerald-600 animate-bounce" />
            <p className="text-xs sm:text-sm font-bold text-evergreen tracking-wider uppercase">
              Upcoming Edition • Winter Camp Loading
            </p>
          </div>

          {/* Main Title */}
          <h1 className="font-extrabold font-serif text-3xl sm:text-5xl md:text-6xl text-evergreen leading-tight drop-shadow-sm">
            Sahyadri Winter School <span className="text-sea_green italic">2026</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-pine_teal/90 max-w-3xl mx-auto leading-relaxed">
            A transformative 5-day grassroots residential fellowship in rural Maharashtra. Experience lived field realities, engage with community leaders, and co-create actionable policy solutions.
          </p>

          {/* Top CTA Buttons */}
          <div className="pt-3 flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/register/form"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-full bg-gradient-to-r from-sea_green to-dark_emerald text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Are you Interested</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <span className="absolute inset-0 rounded-full bg-sea_green/20 blur-xl -z-10 group-hover:bg-sea_green/40 transition-colors" />
            </Link>

            <a
              href="#upcoming-details"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/90 text-evergreen border border-celadon font-semibold text-sm sm:text-base shadow-sm hover:bg-frosted_mint/40 transition-all duration-300"
            >
              <BookOpen size={17} />
              <span>Upcoming Cohort Blueprint</span>
            </a>
          </div>

        </div>
      </section>

      {/* ================= 2. UPCOMING EDITION SNAPSHOT MATRIX ================= */}
      <section className="px-4 md:px-8 py-6 max-w-6xl mx-auto relative z-10">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-celadon/60 p-6 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {snapshotMetrics.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3.5 p-2">
              <div className="w-10 h-10 rounded-2xl bg-frosted_mint/50 border border-celadon/50 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-pine_teal/70 block">
                  {item.label}
                </span>
                <span className="font-serif text-sm md:text-base font-bold text-evergreen block leading-tight">
                  {item.value}
                </span>
                <span className="text-[11px] text-sea_green font-medium">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 3. FOUR PILLARS / HIGHLIGHTS ================= */}
      <section className="px-4 md:px-8 py-8 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border ${item.bg} bg-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
            >
              <div className="space-y-2.5">
                <div className="w-11 h-11 rounded-xl bg-white border border-celadon/50 flex items-center justify-center shadow-xs">
                  {item.icon}
                </div>
                <h3 className="font-serif text-base font-bold text-evergreen">
                  {item.title}
                </h3>
                <p className="text-xs text-pine_teal/85 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 4. UPCOMING FELLOWSHIP TEMPLATE / BLUEPRINT ================= */}
      <section id="upcoming-details" className="px-4 md:px-8 py-10 max-w-6xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl border-2 border-celadon/60 p-6 sm:p-10 shadow-lg grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Modern Upcoming Announcement Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#1b4332] to-[#2d6a4f] text-white p-6 flex flex-col justify-between min-h-[460px] group">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-mint_leaf/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              {/* Card Header */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-frosted_mint">
                    Cohort 2026
                  </span>
                  <span className="text-[11px] font-mono text-frosted_mint/80">
                    5-Day Fellowship
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white leading-snug">
                  Sahyadri Rural Connect
                </h3>

                <p className="text-xs text-frosted_mint/90 leading-relaxed font-light">
                  A structured ground-level immersion bridging premier university scholars with the lived reality of rural Bharat.
                </p>
              </div>

              {/* Card Focus Tracks */}
              <div className="relative z-10 my-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200 block">
                  Upcoming Immersion Tracks:
                </span>
                <div className="space-y-1.5 text-xs text-white/90">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Tribal Ecology & Forest Rights (PESA)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Agrarian FPOs & Regenerative Agriculture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Decentralized Solar & Clean Tech</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Rural Infrastructure & Digital Access</span>
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="relative z-10 pt-2 border-t border-white/20 flex items-center justify-between">
                <span className="text-[11px] font-medium text-frosted_mint">
                  Early Expression Open
                </span>
                <Link
                  href="/register/form"
                  className="px-4 py-2 rounded-full bg-white text-evergreen font-bold text-xs shadow-md hover:bg-frosted_mint hover:scale-105 transition-all"
                >
                  Join Cohort
                </Link>
              </div>

            </div>

            <p className="text-[11px] text-pine_teal/70 font-medium text-center mt-3">
              Official Sahyadri Rural Connect Fellowship Template
            </p>
          </div>

          {/* Right: Detailed Narrative & Features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-frosted_mint/50 border border-celadon text-sea_green text-xs font-bold uppercase tracking-wider">
                <Sparkles size={13} />
                <span>Next Edition Preview</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-evergreen leading-snug">
                Step Out of the Classroom. <br />
                <span className="text-sea_green italic font-normal">Step into Real Bharat.</span>
              </h2>
            </div>

            <p className="text-pine_teal text-sm sm:text-base leading-relaxed">
              India&apos;s true developmental stories, agrarian resilience, and tribal heritage cannot be mastered inside lecture halls or online papers alone. <strong>Sahyadri Rural Connect</strong> provides a structured, intellectually rigorous, and culturally grounded immersion for the next generation of researchers, leaders, and policymakers.
            </p>

            {/* Feature Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sea_green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-evergreen">
                  Hands-on organic farming & living soil prep
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sea_green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-evergreen">
                  Ethnobotany walks & wild edible cuisine
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sea_green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-evergreen">
                  Dialogues with Gram Panchayats & FPOs
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sea_green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-evergreen">
                  Decentralized solar micro-grids & telemetry
                </span>
              </div>
            </div>

            {/* Direct Register Callout */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4 border-t border-gray-100">
              <Link
                href="/register/form"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-sea_green to-dark_emerald text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <span>Are you Interested</span>
                <ArrowRight size={16} />
              </Link>

              <span className="text-xs text-pine_teal/75 font-medium">
                *Early expression of interest takes 2 minutes to fill.
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 5. ACCORDION FAQS ================= */}
      <section className="px-4 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-celadon text-sea_green text-xs font-bold uppercase tracking-wider">
            <HelpCircle size={13} />
            <span>Common Queries</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-evergreen">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-celadon/50 overflow-hidden shadow-xs transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-evergreen hover:text-sea_green transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === index ? (
                  <ChevronUp size={18} className="text-sea_green flex-shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-pine_teal/60 flex-shrink-0" />
                )}
              </button>

              {openFaq === index && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-pine_teal/85 leading-relaxed border-t border-gray-50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
