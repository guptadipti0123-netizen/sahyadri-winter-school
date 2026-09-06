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
      a: 'By clicking "Are you Interested" and submitting your details, you register an early expression of interest. When admissions officially open, priority notifications and application guidelines will be sent directly to your email.'
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
              Next Cohort in the Making • Winter / Summer 2026
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
          
          {/* Left: Official Poster Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[360px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <Image
                src="/SRCRegistrationPoster.png"
                alt="Sahyadri Rural Connect Registration Poster"
                width={1120}
                height={1500}
                className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                Official Camp Notice
              </div>
            </div>

            <p className="text-[11px] text-pine_teal/70 font-medium text-center mt-3">
              Sahyadri Rural Connect • Winter Fellowship Announcement
            </p>
          </div>

          {/* Right: Detailed Narrative & Features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-frosted_mint/50 border border-celadon text-sea_green text-xs font-bold uppercase tracking-wider">
                <Sparkles size={13} />
                <span>The Sahyadri Experience</span>
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

      {/* ================= 4. ACCORDION FAQS ================= */}
      <section className="px-4 md:px-8 py-10 max-w-4xl mx-auto">
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

      {/* ================= 5. FINAL GRAND CTA ================= */}
      <section className="px-4 md:px-8 pb-16 max-w-5xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-evergreen via-dark_emerald to-sea_green text-white rounded-3xl p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden space-y-6">
          
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase text-frosted_mint">
              Limited to 40 Seats Per Cohort
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-sm">
              Ready to Join the Movement?
            </h2>

            <p className="text-frosted_mint/90 text-sm sm:text-base leading-relaxed">
              Express your interest today to receive early access when final registration slots open for the upcoming Sahyadri Winter / Summer School cohort.
            </p>

            <div className="pt-2">
              <Link
                href="/register/form"
                className="inline-flex items-center gap-3 px-10 py-4.5 rounded-full bg-white text-evergreen font-extrabold text-base shadow-xl hover:shadow-2xl hover:bg-frosted_mint hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Are you Interested</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Background Decorative Blurs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint_leaf/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        </div>
      </section>

    </main>
  );
}
