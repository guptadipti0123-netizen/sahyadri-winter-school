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
  MapPin,
  Calendar,
  Building2,
  GraduationCap
} from 'lucide-react';

export default function RegisterPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const highlights = [
    {
      icon: <Users className="w-5 h-5 text-emerald-700" />,
      title: 'Curated 40-Fellow Cohort',
      desc: 'Selected scholars from IITs, TISS, IIMs, Law & Policy institutes across India.',
      bg: 'bg-emerald-50/80 border-emerald-200/80'
    },
    {
      icon: <TreePine className="w-5 h-5 text-sea_green" />,
      title: '100% Lived Field Immersion',
      desc: 'Off-grid village homestays, forest biodiversity trails, and organic farm work.',
      bg: 'bg-teal-50/80 border-teal-200/80'
    },
    {
      icon: <Compass className="w-5 h-5 text-amber-700" />,
      title: 'Grassroots Dialogue',
      desc: 'Direct interaction with Gram Sabhas, tribal elders, NGO founders & administrators.',
      bg: 'bg-amber-50/80 border-amber-200/80'
    },
    {
      icon: <Award className="w-5 h-5 text-dark_emerald" />,
      title: 'Fellowship Certification',
      desc: 'Official certificate of completion with interdisciplinary policy credits.',
      bg: 'bg-lime-50/80 border-lime-200/80'
    },
  ];

  const faqs = [
    {
      q: 'How does camp registration work?',
      a: 'By submitting the registration form, you register your application for the upcoming fellowship camp. When admissions officially open, official selection guidelines, schedule details, and confirmation will be sent directly to your registered email.'
    },
    {
      q: 'Is prior rural or trekking experience mandatory?',
      a: 'Not at all. The fellowship welcomes students and researchers from all backgrounds. All you need is intellectual curiosity, empathy, and willingness to participate actively in community life.'
    },
    {
      q: 'Are food, lodging, and local transit arranged?',
      a: 'Yes. All selected fellows receive organized community lodging, authentic nutritious Maharashtrian meals, and guided field logistics throughout the 5 days.'
    },
    {
      q: 'Will participants receive a certificate?',
      a: 'Yes. All participants who complete the 5-day immersion and present their group action blueprint will receive a certificate of completion from Sahyadri Rural Connect.'
    }
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-frosted_mint/20">

      {/* Ambient Atmospheric Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] bg-gradient-to-b from-sea_green/15 via-frosted_mint/25 to-transparent blur-3xl" />
        <div className="absolute top-20 right-[-10%] w-72 sm:w-96 h-72 sm:h-96 bg-mint_leaf/15 rounded-full blur-3xl" />
        <div className="absolute top-72 left-[-10%] w-72 sm:w-80 h-72 sm:h-80 bg-celadon/20 rounded-full blur-3xl" />
      </div>

      {/* ================= 1. HERO SECTION & TEMPLATE SHOWCASE ================= */}
      <section className="relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* DESKTOP SPLIT GRID (lg: 2-Cols) | MOBILE FLOW: Template on Top (order-1), Content on Bottom (order-2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">

            {/* ================= 1. POSTER TEMPLATE CARD (Top on Mobile, Right on Desktop) ================= */}
            <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center justify-center w-full">

              {/* THE POSTER TEMPLATE CARD */}
              <div className="relative w-full max-w-[360px] xs:max-w-[380px] sm:max-w-[400px] rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(27,67,50,0.16)] border-[3px] border-white bg-[#fdfaf3] text-[#2d241e] font-sans group transition-all duration-500 hover:shadow-[0_28px_60px_rgba(45,106,79,0.24)]">

                {/* Poster Header Image with Sunset Mountains */}
                <div className="relative h-44 sm:h-48 w-full bg-[#1b4332] overflow-hidden">
                  <Image
                    src="/sahyadri-bg-hero6.jpeg"
                    alt="Sahyadri Rural Immersion Winter Cohort"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fdfaf3] via-black/25 to-black/50" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-sea_green text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    Winter Cohort
                  </div>

                  {/* Title on Banner */}
                  <div className="absolute bottom-2 inset-x-4 text-center">
                    <span className="text-[10px] font-extrabold tracking-widest uppercase text-emerald-950/90 drop-shadow-xs block">
                      Sahyadri Rural Connect
                    </span>
                    <h3 className="font-serif text-2xl font-black text-evergreen leading-tight">
                      Winter School 2026
                    </h3>
                  </div>
                </div>

                {/* Poster Body */}
                <div className="p-4 sm:p-5 pt-3 space-y-3">

                  {/* Date & Location Box */}
                  <div className="text-center space-y-0.5 border-b border-[#ebdcc6] pb-2.5">
                    <h4 className="font-serif text-base sm:text-lg font-extrabold text-[#7c2d12] leading-snug">
                      Winter 2026 • Dates Announcing Soon
                    </h4>
                    <p className="text-xs font-semibold text-[#5c4033]">
                      Sahyadri Foothills &amp; Rural Hamlets (Maharashtra)
                    </p>
                  </div>

                  {/* 6 Immersion Pillars (3x2 Grid) */}
                  <div className="grid grid-cols-3 gap-2 text-center">

                    {/* Card 1: Location */}
                    <div className="bg-[#f5e9d2]/90 p-2 rounded-xl border border-[#ebdcc6] flex flex-col items-center justify-center min-h-[64px] shadow-2xs">
                      <div className="w-6 h-6 rounded-full bg-[#4a3525] text-white flex items-center justify-center mb-1 text-[11px]">
                        📍
                      </div>
                      <span className="text-[10px] font-bold text-[#2d241e] leading-tight">
                        Sahyadri, Maha
                      </span>
                    </div>

                    {/* Card 2: 5 Days */}
                    <div className="bg-[#f5e9d2]/90 p-2 rounded-xl border border-[#ebdcc6] flex flex-col items-center justify-center min-h-[64px] shadow-2xs">
                      <div className="w-6 h-6 rounded-full bg-[#4a3525] text-white flex items-center justify-center mb-1 text-[11px]">
                        ⛰️
                      </div>
                      <span className="text-[10px] font-bold text-[#2d241e] leading-tight">
                        5 Days
                      </span>
                    </div>

                    {/* Card 3: Rural Immersion */}
                    <div className="bg-[#f5e9d2]/90 p-2 rounded-xl border border-[#ebdcc6] flex flex-col items-center justify-center min-h-[64px] shadow-2xs">
                      <div className="w-6 h-6 rounded-full bg-[#4a3525] text-white flex items-center justify-center mb-1 text-[11px]">
                        🌾
                      </div>
                      <span className="text-[10px] font-bold text-[#2d241e] leading-tight">
                        Rural Immersion
                      </span>
                    </div>

                    {/* Card 4: NGOs Impact */}
                    <div className="bg-[#f5e9d2]/90 p-2 rounded-xl border border-[#ebdcc6] flex flex-col items-center justify-center min-h-[64px] shadow-2xs">
                      <div className="w-6 h-6 rounded-full bg-[#c25e1a] text-white flex items-center justify-center mb-1 text-[11px]">
                        🏛️
                      </div>
                      <span className="text-[10px] font-bold text-[#c25e1a] leading-tight">
                        NGOs Impact
                      </span>
                    </div>

                    {/* Card 5: Expert Sessions */}
                    <div className="bg-[#f5e9d2]/90 p-2 rounded-xl border border-[#ebdcc6] flex flex-col items-center justify-center min-h-[64px] shadow-2xs">
                      <div className="w-6 h-6 rounded-full bg-[#c25e1a] text-white flex items-center justify-center mb-1 text-[11px]">
                        🎖️
                      </div>
                      <span className="text-[10px] font-bold text-[#c25e1a] leading-tight">
                        Expert Sessions
                      </span>
                    </div>

                    {/* Card 6: Culture */}
                    <div className="bg-[#f5e9d2]/90 p-2 rounded-xl border border-[#ebdcc6] flex flex-col items-center justify-center min-h-[64px] shadow-2xs">
                      <div className="w-6 h-6 rounded-full bg-[#c25e1a] text-white flex items-center justify-center mb-1 text-[11px]">
                        🌿
                      </div>
                      <span className="text-[10px] font-bold text-[#c25e1a] leading-tight">
                        Tribal Culture
                      </span>
                    </div>

                  </div>

                  {/* Premier Institutes Banner */}
                  <div className="bg-[#f5e9d2] border border-[#ebdcc6] rounded-xl p-2.5 text-center shadow-2xs">
                    <p className="text-[11px] font-extrabold text-[#7c2d12] leading-snug font-serif">
                      40 participants from Premier Institutes like IIT, IIM, TISS, IIPS, IGIDR, ILS etc.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* ================= 2. HERO NARRATIVE CONTENT (Bottom on Mobile, Left on Desktop) ================= */}
            <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5">

              {/* Status Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-celadon shadow-xs backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold text-evergreen tracking-wider uppercase">
                  Winter Camp 2026 • Registration Open
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-extrabold font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-evergreen leading-[1.15] tracking-tight">
                Sahyadri Winter School <br className="hidden sm:inline" />
                <span className="text-sea_green italic font-normal">2026 Cohort</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-pine_teal/90 max-w-xl leading-relaxed font-normal">
                A transformative 5-day grassroots residential fellowship taking university students and researchers to the heart of rural Maharashtra. Experience living soil, tribal self-governance, and sustainable village ecosystems.
              </p>

              {/* Value / Trust Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#ebdcc6] text-[#2d6a4f] text-xs font-semibold shadow-xs">
                  <Users className="w-3.5 h-3.5 text-sea_green" />
                  <span>40-Fellow Cohort</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#ebdcc6] text-[#2d6a4f] text-xs font-semibold shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  <span>Sahyadri Rural Hamlets</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#ebdcc6] text-[#2d6a4f] text-xs font-semibold shadow-xs">
                  <GraduationCap className="w-3.5 h-3.5 text-evergreen" />
                  <span>IIT, TISS, IIM Scholars</span>
                </span>
              </div>

              {/* Primary Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-2 sm:pt-3 w-full sm:w-auto">
                <Link
                  href="/register/form"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-sea_green via-[#2d6a4f] to-dark_emerald text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center"
                >
                  <span>Register for Winter Camp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="absolute inset-0 rounded-full bg-sea_green/20 blur-xl -z-10 group-hover:bg-sea_green/40 transition-colors" />
                </Link>

                <a
                  href="#camp-curriculum"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full bg-white text-evergreen border border-celadon font-semibold text-xs sm:text-sm shadow-xs hover:bg-frosted_mint/50 transition-all duration-300 text-center"
                >
                  <BookOpen size={16} />
                  <span>Explore Curriculum</span>
                </a>
              </div>

              <p className="text-xs text-pine_teal/75 font-medium">
                *Early registration helps with cohort shortlisting &amp; field logistics.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ================= 2. FOUR PILLARS / HIGHLIGHTS ================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-celadon shadow-2xs text-sea_green text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles size={13} />
            <span>Fellowship Highlights</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-evergreen">
            Why Join the Winter Cohort?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border ${item.bg} bg-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-celadon/50 flex items-center justify-center shadow-xs shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-evergreen leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-pine_teal/85 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 3. DETAILED NARRATIVE & CURRICULUM ================= */}
      <section id="camp-curriculum" className="px-4 sm:px-6 lg:px-8 py-10 max-w-6xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl border-2 border-celadon/60 p-6 sm:p-10 shadow-lg space-y-6">

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-frosted_mint text-sea_green text-xs font-bold uppercase tracking-wider mb-3">
              <span>Grassroots Immersion Blueprint</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-evergreen leading-snug">
              Step Out of the Classroom. <br />
              <span className="text-sea_green italic font-normal">Step into Real Bharat.</span>
            </h2>
          </div>

          <p className="text-pine_teal text-sm sm:text-base leading-relaxed max-w-4xl">
            India&apos;s true developmental stories, agrarian resilience, and tribal heritage cannot be mastered inside lecture halls or online papers alone. <strong>Sahyadri Rural Connect</strong> is preparing its next flagship winter immersion for students, researchers, and aspiring change leaders.
          </p>

          {/* Upcoming Feature Checklist */}
          <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-frosted_mint/30 border border-celadon/40">
              <CheckCircle2 className="w-5 h-5 text-sea_green shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-medium text-evergreen">
                Hands-on organic farming &amp; living soil preparation
              </span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-frosted_mint/30 border border-celadon/40">
              <CheckCircle2 className="w-5 h-5 text-sea_green shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-medium text-evergreen">
                Ethnobotany forest walks &amp; wild edible cuisine
              </span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-frosted_mint/30 border border-celadon/40">
              <CheckCircle2 className="w-5 h-5 text-sea_green shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-medium text-evergreen">
                Dialogues with Gram Panchayats, Tribal Elders &amp; FPOs
              </span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-frosted_mint/30 border border-celadon/40">
              <CheckCircle2 className="w-5 h-5 text-sea_green shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-medium text-evergreen">
                Decentralized solar micro-grids &amp; rural telemetry
              </span>
            </div>
          </div>

          {/* Direct Register Callout */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-100">
            <Link
              href="/register/form"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-sea_green to-dark_emerald text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all w-fit"
            >
              <span>Register for Fellowship</span>
              <ArrowRight size={16} />
            </Link>

            <span className="text-xs text-pine_teal/75 font-medium">
              *Takes only 2 minutes to fill your registration details.
            </span>
          </div>

        </div>
      </section>

      {/* ================= 4. ACCORDION FAQS ================= */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-4xl mx-auto">
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
