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
  HelpCircle
} from 'lucide-react';

export default function RegisterPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const highlights = [
    {
      icon: <Users className="w-6 h-6 text-emerald-700" />,
      title: 'Curated 40-Fellow Cohort',
      desc: 'Selected scholars from IITs, TISS, IIMs, Law & Policy institutes across India.',
      bg: 'bg-emerald-50/80 border-emerald-200/80'
    },
    {
      icon: <TreePine className="w-6 h-6 text-sea_green" />,
      title: '100% Lived Field Immersion',
      desc: 'Off-grid village homestays, forest biodiversity trails, and organic farm work.',
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
      desc: 'Official certificate of completion with real interdisciplinary policy project credits.',
      bg: 'bg-lime-50/80 border-lime-200/80'
    },
  ];

  const faqs = [
    {
      q: 'What does "Are you Interested" mean?',
      a: 'By clicking "Are you Interested" and submitting your details, you register an early expression of interest for the upcoming winter camp. When admissions officially open, priority notifications and application guidelines will be sent directly to your email.'
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
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-celadon shadow-sm backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 -ml-5" />
            <p className="text-xs sm:text-sm font-bold text-evergreen tracking-wider uppercase">
              Upcoming Edition • Winter Camp Loading
            </p>
          </div>

          {/* Main Title */}
          <h1 className="font-extrabold font-serif text-3xl sm:text-5xl md:text-6xl text-evergreen leading-tight drop-shadow-sm">
            Winter Camp <span className="text-sea_green italic">Loading</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-pine_teal/90 max-w-3xl mx-auto leading-relaxed">
            A transformative 5-day grassroots residential fellowship taking university students and researchers to the heart of rural Maharashtra.
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
              href="#poster-details"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/90 text-evergreen border border-celadon font-semibold text-sm sm:text-base shadow-sm hover:bg-frosted_mint/40 transition-all duration-300"
            >
              <BookOpen size={17} />
              <span>Explore Camp Details</span>
            </a>
          </div>

        </div>
      </section>

      {/* ================= 2. FOUR PILLARS / HIGHLIGHTS ================= */}
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

      {/* ================= 3. POSTER & IMMERSION BLUEPRINT (SIDE-BY-SIDE) ================= */}
      <section id="poster-details" className="px-4 md:px-8 py-10 max-w-6xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl border-2 border-celadon/60 p-6 sm:p-10 shadow-lg grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Recreated Visual Card Template with Updated Winter 2026 Details */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#fcf8f0] text-[#2d241e] font-sans group">
              
              {/* Top Banner Image */}
              <div className="relative h-44 w-full bg-[#1b4332] overflow-hidden">
                <Image
                  src="/sahyadri-bg-hero6.jpeg"
                  alt="Sahyadri Rural Immersion"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fcf8f0] via-black/20 to-black/40" />
                
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-sea_green text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                  Upcoming Cohort
                </div>
                
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-wider">
                  3rd Edition
                </div>

                <div className="absolute bottom-2 inset-x-4 text-center">
                  <span className="text-[10px] font-extrabold tracking-widest uppercase text-emerald-900 drop-shadow-xs">
                    Sahyadri Rural Connect
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-black text-evergreen leading-tight">
                    Winter School 2026
                  </h3>
                </div>
              </div>

              {/* Middle Section: Dates & Location (Matching the template structure) */}
              <div className="p-5 pt-3 space-y-4">
                
                <div className="text-center space-y-0.5 border-b border-[#ebdcc6] pb-3">
                  <h4 className="font-serif text-base sm:text-lg font-extrabold text-[#7c2d12]">
                    Winter 2026 • Dates Announcing Soon
                  </h4>
                  <p className="text-xs font-semibold text-[#5c4033]">
                    Sahyadri Foothills & Rural Hamlets (Maharashtra)
                  </p>
                </div>

                {/* 3 Pillars Grid (Matching the Screenshot's 3-column Box Layout) */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  
                  {/* Column 1 */}
                  <div className="space-y-2">
                    <div className="bg-[#faeed6]/90 p-2.5 rounded-xl border border-[#ebdcc6] flex flex-col items-center justify-center min-h-[72px]">
                      <div className="w-7 h-7 rounded-full bg-[#4a3525] text-white flex items-center justify-center mb-1 text-xs">
                        📍
                      </div>
                      <span className="text-[11px] font-bold text-[#2d241e] leading-tight">
                        Sahyadri, Maha
                      </span>
                    </div>

                    <div className="bg-[#faeed6]/90 p-2.5 rounded-xl border border-[#ebdcc6] flex flex-col items-center justify-center min-h-[72px]">
                      <div className="w-7 h-7 rounded-full bg-[#c25e1a] text-white flex items-center justify-center mb-1 text-xs">
                        🏛️
                      </div>
                      <span className="text-[11px] font-bold text-[#c25e1a] leading-tight">
                        NGOs Impact
                      </span>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-2">
                    <div className="bg-[#faeed6]/90 p-2.5 rounded-xl border border-[#ebdcc6] flex flex-col items-center justify-center min-h-[72px]">
                      <div className="w-7 h-7 rounded-full bg-[#4a3525] text-white flex items-center justify-center mb-1 text-xs">
                        ⛰️
                      </div>
                      <span className="text-[11px] font-bold text-[#2d241e] leading-tight">
                        5 Days
                      </span>
                    </div>

                    <div className="bg-[#faeed6]/90 p-2.5 rounded-xl border border-[#ebdcc6] flex flex-col items-center justify-center min-h-[72px]">
                      <div className="w-7 h-7 rounded-full bg-[#4a3525] text-white flex items-center justify-center mb-1 text-xs">
                        🎖️
                      </div>
                      <span className="text-[11px] font-bold text-[#c25e1a] leading-tight">
                        Expert Sessions
                      </span>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-2">
                    <div className="bg-[#faeed6]/90 p-2.5 rounded-xl border border-[#ebdcc6] flex flex-col items-center justify-center min-h-[72px]">
                      <div className="w-7 h-7 rounded-full bg-[#4a3525] text-white flex items-center justify-center mb-1 text-xs">
                        🌾
                      </div>
                      <span className="text-[11px] font-bold text-[#2d241e] leading-tight">
                        Rural Immersion
                      </span>
                    </div>

                    <div className="bg-[#faeed6]/90 p-2.5 rounded-xl border border-[#ebdcc6] flex flex-col items-center justify-center min-h-[72px]">
                      <div className="w-7 h-7 rounded-full bg-[#4a3525] text-white flex items-center justify-center mb-1 text-xs">
                        🌿
                      </div>
                      <span className="text-[11px] font-bold text-[#c25e1a] leading-tight">
                        Delving into Culture
                      </span>
                    </div>
                  </div>

                </div>

                {/* Bottom Highlight: Premier Institutes Banner (Matching Screenshot) */}
                <div className="bg-[#faeed6] border border-[#ebdcc6] rounded-xl p-3 text-center shadow-xs">
                  <p className="text-xs font-extrabold text-[#7c2d12] leading-snug font-serif">
                    40 participants from Premier Institutes like IIT, IIM, TISS, IIPS, IGIDR, ILS etc.
                  </p>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-2 flex items-center justify-between border-t border-[#ebdcc6]/70">
                  <span className="text-[11px] font-bold text-[#5c4033] uppercase tracking-wider">
                    Early Expression Open
                  </span>
                  <Link
                    href="/register/form"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sea_green text-white text-xs font-bold shadow-xs hover:bg-dark_emerald hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>Express Interest</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

              </div>

            </div>

            <p className="text-[11px] text-pine_teal/70 font-medium text-center mt-3">
              Sahyadri Rural Connect • Winter 2026 Fellowship Notice
            </p>
          </div>

          {/* Right: Detailed Narrative & Features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-frosted_mint/50 border border-celadon text-sea_green text-xs font-bold uppercase tracking-wider">
                <Sparkles size={13} />
                <span>Upcoming Fellowship Preview</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-evergreen leading-snug">
                Step Out of the Classroom. <br />
                <span className="text-sea_green italic font-normal">Step into Real Bharat.</span>
              </h2>
            </div>

            <p className="text-pine_teal text-sm sm:text-base leading-relaxed">
              India&apos;s true developmental stories, agrarian resilience, and tribal heritage cannot be mastered inside lecture halls or online papers alone. <strong>Sahyadri Rural Connect</strong> is preparing its next flagship winter immersion for students, researchers, and aspiring change leaders.
            </p>

            {/* Upcoming Feature Checklist */}
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

      {/* ================= 4. ACCORDION FAQS ================= */}
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
