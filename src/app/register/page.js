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
  GraduationCap,
  Sprout,
  SunMedium,
  HeartHandshake,
  ShieldCheck,
  Check,
  ChevronRight,
  Lightbulb
} from 'lucide-react';

export default function RegisterPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeDomain, setActiveDomain] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const domainTracks = [
    {
      domain: 'Engineering & Technology',
      badge: 'Tech & Infrastructure',
      title: 'Solar Grids, Rural Telemetry & Water Systems',
      desc: 'Understand how decentralized solar irrigation, IoT telemetry, and low-cost gravity water grids operate in real rural terrains.',
      keyTakeaway: 'Design technology solutions rooted in field constraints rather than lab assumptions.'
    },
    {
      domain: 'Policy, Economics & Social Sciences',
      badge: 'Governance & Policy',
      title: 'Gram Sabhas, PESA Act & Micro-Financing',
      desc: 'Engage directly with tribal village councils, understand forest rights legislation, and analyze self-help group micro-credit models.',
      keyTakeaway: 'Bridge the gap between theoretical macro-policy and lived grassroots reality.'
    },
    {
      domain: 'Agriculture & Environmental Sciences',
      badge: 'Agro-Ecology & Soil',
      title: 'Living Soil Chemistry & Indigenous Seed Banks',
      desc: 'Work alongside smallholder farmers in mango orchards, understand multi-cropping, zero-chemical composting, and ethnobotany.',
      keyTakeaway: 'Experience regenerative farming practices and indigenous ecological knowledge.'
    },
    {
      domain: 'Management, Law & Design',
      badge: 'FPO & Grassroots Enterprise',
      title: 'Farmer Producer Companies & Rural Supply Chains',
      desc: 'Analyze post-harvest storage, tribal craft cooperatives, and legal frameworks protecting community forest resources.',
      keyTakeaway: 'Formulate viable grassroots business models and sustainable market linkages.'
    }
  ];

  const pathwayDays = [
    {
      day: '01',
      tag: 'Day 1 • Arrival & Orientation',
      title: 'Crossing the Urban-Rural Threshold',
      desc: 'Arrival at the heritage stone wada in the Sahyadri foothills. Unpack assumptions, understand agro-climatic zones, and meet fellow scholars from across India over traditional Maharashtrian hospitality.',
      image: '/palghar/palghar-cohort-memorial-courtyard.jpg',
      alt: 'Cohorts arriving and gathering in courtyard',
      highlights: ['Heritage Wada Welcome', 'Agro-Climatic Briefing', 'Cohort Icebreaking']
    },
    {
      day: '02',
      tag: 'Day 2 • Living Soil & Orchards',
      title: 'Hands in the Soil: Agro-Ecology in Action',
      desc: 'Morning field immersion in tribal mango orchards and organic farm plots. Learn natural composting, indigenous seed preservation, and the physics of local micro-irrigation systems.',
      image: '/palghar/palghar-mango-orchard-community.jpg',
      alt: 'Organic farming and orchard dialogue',
      highlights: ['Native Seed Preservation', 'Bio-Composting Labs', 'Orchard Micro-Irrigation']
    },
    {
      day: '03',
      tag: 'Day 3 • Grassroots Democracy',
      title: 'Under the Banyan: Gram Sabha & PESA Dialogues',
      desc: 'Participate in open community tree-shade assemblies. Direct dialogues with Sarpanches, tribal elders, women SHG leaders, and rural youth on decentralized self-governance and forest rights.',
      image: '/palghar/palghar-community-tree-dialogue.jpg',
      alt: 'Tree shade community dialogue with village elders',
      highlights: ['Gram Sabha Assembly', 'PESA Act Implementation', 'Women SHG Micro-Credit']
    },
    {
      day: '04',
      tag: 'Day 4 • Forest Trails & Solar Telemetry',
      title: 'Ethnobotany & Decentralized Energy Grids',
      desc: 'Guided forest biodiversity walk identifying wild medicinal flora and wild edibles. Afternoon inspection of solar-powered mountain irrigation pumps and rural wireless connectivity networks.',
      image: '/camp2/camp2-day2-i3_copy.png',
      alt: 'Forest trails and rural energy inspection',
      highlights: ['Medicinal Ethnobotany Walk', 'Solar Micro-Grid Telemetry', 'Wild Edibles Workshop']
    },
    {
      day: '05',
      tag: 'Day 5 • Action Blueprints & Certification',
      title: 'Synthesis, Policy Presentation & Valediction',
      desc: 'Interdisciplinary teams present actionable rural development blueprints to NGO founders and mentors. Closing valedictory ceremony and award of official fellowship certificates.',
      image: '/palghar/palghar-classroom-reflection-session.jpg',
      alt: 'Scholars presenting capstone blueprints',
      highlights: ['Capstone Blueprint Defense', 'Policy Feedback from Mentors', 'Immersion Certification']
    }
  ];

  const bentoPillars = [
    {
      number: '01',
      title: '100% Lived Field Immersion',
      desc: 'No hotel stays or simulated tours. Live within authentic village settings, share nutritious traditional meals, and experience rural day-to-day life.',
      icon: <TreePine className="w-5 h-5 text-[#1f5c54]" />,
      accent: 'border-[#1f5c54]/30 bg-[#fdfbf7]'
    },
    {
      number: '02',
      title: 'Curated 40-Scholar Interdisciplinary Cohort',
      desc: 'Collaborate with top students selected from IITs, TISS, IIMs, Law & Policy institutes across engineering, economics, design, and agriculture.',
      icon: <Users className="w-5 h-5 text-[#3a8c7e]" />,
      accent: 'border-[#3a8c7e]/30 bg-[#fdfbf7]'
    },
    {
      number: '03',
      title: 'Direct Grassroots Dialogue',
      desc: 'Engage in candid, unscripted discussions with Gram Panchayats, tribal elders, frontline health workers, and grassroots social entrepreneurs.',
      icon: <Compass className="w-5 h-5 text-[#c8880a]" />,
      accent: 'border-[#c8880a]/30 bg-[#fdfbf7]'
    },
    {
      number: '04',
      title: 'Appropriate Technology & Solar Labs',
      desc: 'Study real-world deployment of gravity-fed water networks, solar pumps, decentralized energy, and rural communication infrastructure.',
      icon: <SunMedium className="w-5 h-5 text-[#c8880a]" />,
      accent: 'border-[#c8880a]/30 bg-[#fdfbf7]'
    },
    {
      number: '05',
      title: 'Indigenous Seed & Agro-Ecology',
      desc: 'Understand living soil microbiology, traditional organic pest repellents, and climate-resilient indigenous crop varieties.',
      icon: <Sprout className="w-5 h-5 text-[#1f5c54]" />,
      accent: 'border-[#1f5c54]/30 bg-[#fdfbf7]'
    },
    {
      number: '06',
      title: 'Official Fellowship Certification',
      desc: 'Receive an interdisciplinary fellowship certificate endorsed by grassroots organizations with credits applicable for university projects.',
      icon: <Award className="w-5 h-5 text-[#7a3a1c]" />,
      accent: 'border-[#7a3a1c]/30 bg-[#fdfbf7]'
    }
  ];

  const galleryMoments = [
    {
      src: '/palghar/palghar-traditional-community-meal.jpg',
      title: 'Nutritious Traditional Meals',
      caption: 'Fresh organic farm produce and indigenous millets prepared with village families.'
    },
    {
      src: '/palghar/palghar-community-tree-dialogue.jpg',
      title: 'Tree-Shade Gram Sabhas',
      caption: 'Direct dialogues on tribal self-governance and community forest rights.'
    },
    {
      src: '/palghar/palghar-village-children-fellows.jpg',
      title: 'Community Connections',
      caption: 'Interactive educational games and cultural exchange with village children.'
    },
    {
      src: '/palghar/palghar-solar-pump-valley-field.jpg',
      title: 'Renewable Valley Systems',
      caption: 'Field exploration of solar micro-irrigation and gravity water networks.'
    }
  ];

  const faqs = [
    {
      q: 'How does registration and cohort selection work?',
      a: 'Registering on this portal logs your initial application for the upcoming winter cohort. When admissions open, shortlisted candidates receive full schedule briefings, pre-camp readings, and confirmation guidelines directly at their email address.'
    },
    {
      q: 'Is prior rural, farming, or trekking experience mandatory?',
      a: 'Not at all. The fellowship is purposefully designed for students and researchers from diverse disciplines (engineering, humanities, economics, business, science). All that is required is an open mind, intellectual curiosity, and empathy.'
    },
    {
      q: 'What are the arrangements for food, lodging, and safety?',
      a: 'Participants reside in clean, secure community guesthouses and heritage wadas. Nutritious, authentic Maharashtrian meals are provided thrice daily alongside clean filtered water. Cohort leads and medical kits are on-site 24/7.'
    },
    {
      q: 'Will participants receive an official certificate?',
      a: 'Yes. Every participant who completes the 5-day immersion and defends their group action blueprint receives an official Certificate of Rural Immersion from Sahyadri Rural Connect.'
    },
    {
      q: 'Can I apply if I am enrolled in an undergraduate or postgraduate program?',
      a: 'Yes! Students across bachelor’s, master’s, PhD programs, and young professionals/fellows are warmly invited to apply.'
    }
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-[#f5efe2] text-[#3e2410] selection:bg-[#3a8c7e]/20 selection:text-[#1f5c54]">

      {/* Atmospheric Editorial Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#3a8c7e]/15 via-[#c8880a]/10 to-transparent blur-3xl" />
        <div className="absolute top-40 right-[-10%] w-96 h-96 bg-[#3a8c7e]/15 rounded-full blur-3xl" />
        <div className="absolute top-[600px] left-[-10%] w-96 h-96 bg-[#c8880a]/15 rounded-full blur-3xl" />
      </div>

      {/* ================= 1. EDITORIAL HERO SECTION ================= */}
      <section className="relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Status Capsule */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#fdfbf7] border border-[#dccdb2] shadow-sm backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a8c7e] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-[#3e2410] tracking-widest uppercase">
                Winter Camp 2026 • Registration Loading
              </span>
              <span className="hidden sm:inline-block text-[10px] font-semibold text-[#c8880a] bg-[#c8880a]/10 px-2 py-0.5 rounded-full">
                40 Selected Seats
              </span>
            </div>
          </div>

          {/* Main Grid: Editorial Headline & Luxury Interactive Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Narrative (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

              <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-[#3e2410] leading-[1.12] tracking-tight">
                Where Classroom Theory <br className="hidden sm:inline" />
                <span className="text-[#3a8c7e] italic font-normal">Meets Living Soil</span>
              </h1>

              <p className="text-base sm:text-lg text-[#7a5232] max-w-2xl leading-relaxed font-normal">
                Step away from sterile lecture halls into the vibrant grassroots of Maharashtra&apos;s Western Ghats. A high-impact 5-day residential immersion camp exploring indigenous farming, tribal self-governance, and sustainable village economies.
              </p>

              {/* Trust Metric Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#fdfbf7] border border-[#dccdb2] text-[#3e2410] text-xs font-semibold shadow-xs">
                  <Users className="w-4 h-4 text-[#3a8c7e]" />
                  <span>40 Selected Scholars</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#fdfbf7] border border-[#dccdb2] text-[#3e2410] text-xs font-semibold shadow-xs">
                  <MapPin className="w-4 h-4 text-[#c8880a]" />
                  <span>Palghar &amp; Sahyadri Hamlets</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#fdfbf7] border border-[#dccdb2] text-[#3e2410] text-xs font-semibold shadow-xs">
                  <GraduationCap className="w-4 h-4 text-[#1f5c54]" />
                  <span>IIT, TISS, IIM &amp; Policy Scholars</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3 w-full sm:w-auto">
                <Link
                  href="/register/form"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#3a8c7e] hover:bg-[#1f5c54] text-[#f5efe2] font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center"
                >
                  <span>Register for Winter Camp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <a
                  href="#pathway"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#fdfbf7] text-[#3e2410] border border-[#dccdb2] font-semibold text-xs sm:text-sm shadow-xs hover:bg-[#ebe2d1] hover:border-[#c8880a]/50 transition-all duration-300 text-center"
                >
                  <BookOpen size={16} className="text-[#3a8c7e]" />
                  <span>Explore 5-Day Pathway</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#7a5232]">
                <ShieldCheck className="w-4 h-4 text-[#3a8c7e]" />
                <span>Zero spam • Official cohort selection notifications sent directly to email</span>
              </div>

            </div>

            {/* Right Showcase Card (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
              <div className="relative w-full max-w-[420px] rounded-[32px] overflow-hidden shadow-2xl border border-[#dccdb2] bg-[#fdfbf7] text-[#3e2410] font-sans group transition-all duration-500 hover:shadow-3xl hover:border-[#3a8c7e]/40">

                {/* Top Real Photo Banner */}
                <div className="relative h-56 w-full bg-[#3e2410] overflow-hidden">
                  <Image
                    src="/palghar/palghar-community-tree-dialogue.jpg"
                    alt="Sahyadri Community Dialogue"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] via-black/20 to-black/40" />

                  <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#3a8c7e] text-[#f5efe2] text-[11px] font-bold uppercase tracking-wider shadow-md">
                    Winter Cohort 2026
                  </div>

                  <div className="absolute bottom-3 inset-x-5 text-left">
                    <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#3e2410]/90 block">
                      Grassroots Immersion
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#3e2410] leading-tight">
                      Sahyadri Rural Connect
                    </h3>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#dccdb2]/80 pb-3">
                    <div className="text-left">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#c8880a] block">
                        Dates &amp; Venue
                      </span>
                      <p className="font-serif text-sm font-bold text-[#3e2410]">
                        Winter 2026 • Palghar, Maharashtra
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#3a8c7e] block">
                        Duration
                      </span>
                      <p className="font-serif text-sm font-bold text-[#3e2410]">
                        5 Days Residential
                      </p>
                    </div>
                  </div>

                  {/* 4 Feature Pills */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-[#f5efe2] p-2.5 rounded-xl border border-[#dccdb2] flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#3a8c7e]/15 text-[#3a8c7e] flex items-center justify-center shrink-0">
                        <Sprout className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-[#3e2410]">Living Soil</span>
                    </div>

                    <div className="bg-[#f5efe2] p-2.5 rounded-xl border border-[#dccdb2] flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#c8880a]/15 text-[#c8880a] flex items-center justify-center shrink-0">
                        <Compass className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-[#3e2410]">Gram Sabhas</span>
                    </div>

                    <div className="bg-[#f5efe2] p-2.5 rounded-xl border border-[#dccdb2] flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#1f5c54]/15 text-[#1f5c54] flex items-center justify-center shrink-0">
                        <TreePine className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-[#3e2410]">Ethnobotany</span>
                    </div>

                    <div className="bg-[#f5efe2] p-2.5 rounded-xl border border-[#dccdb2] flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#7a3a1c]/15 text-[#7a3a1c] flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-[#3e2410]">Certification</span>
                    </div>
                  </div>

                  {/* Institutional Note */}
                  <div className="bg-[#f5efe2]/80 border border-[#dccdb2] rounded-xl p-3 text-center">
                    <p className="text-[11px] text-[#7a5232] font-serif leading-snug">
                      Collaborative cohort bringing together curious minds from engineering, policy, business, law, and environmental studies.
                    </p>
                  </div>

                  <Link
                    href="/register/form"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#3e2410] hover:bg-[#1f5c54] text-[#f5efe2] text-xs font-bold transition-all shadow-md"
                  >
                    <span>Complete Application Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 2. KWINA-STYLE CENTRAL AXIS: 5-DAY IMMERSION PATHWAY ================= */}
      <section id="pathway" className="px-4 sm:px-6 lg:px-8 py-16 max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c8880a]/15 text-[#c8880a] text-xs font-bold uppercase tracking-widest border border-[#c8880a]/30">
            <span>The Transformative Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3e2410]">
            The 5-Day Immersion Pathway
          </h2>
          <p className="text-sm sm:text-base text-[#7a5232]">
            Each day builds upon the previous—from unraveling unexamined urban assumptions to synthesizing viable policy action blueprints with grassroots leaders.
          </p>
        </div>

        {/* Central Axis Timeline */}
        <div className="relative">

          {/* Central Vertical Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#3a8c7e] via-[#c8880a] to-[#1f5c54] -translate-x-1/2 z-0 opacity-40" />

          {/* Day Cards Flow */}
          <div className="space-y-12 md:space-y-16 relative z-10">
            {pathwayDays.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.day}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Photo Card Side */}
                  <div className="w-full md:w-1/2">
                    <div className="group relative rounded-3xl overflow-hidden border border-[#dccdb2] bg-[#fdfbf7] shadow-lg hover:shadow-xl transition-all duration-500">
                      <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#3e2410]">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3e2410]/70 via-transparent to-black/20" />
                        <div className="absolute bottom-3 left-4 right-4 text-white">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#c8880a] bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 inline-block mb-1">
                            {item.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Central Node Badge (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#fdfbf7] border-2 border-[#3a8c7e] shadow-md items-center justify-center font-serif text-xs font-bold text-[#3e2410] z-20">
                    {item.day}
                  </div>

                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2 text-left">
                    <div className="bg-[#fdfbf7] p-6 sm:p-8 rounded-3xl border border-[#dccdb2] shadow-sm space-y-4 hover:border-[#3a8c7e]/40 transition-all">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex md:hidden w-8 h-8 rounded-full bg-[#3a8c7e] text-white text-xs font-bold items-center justify-center">
                          {item.day}
                        </span>
                        <span className="text-xs font-bold text-[#c8880a] tracking-wider uppercase">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3e2410] leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#7a5232] leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Day Key Features */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5efe2] border border-[#dccdb2] text-[11px] font-semibold text-[#3e2410]"
                          >
                            <Check className="w-3 h-3 text-[#3a8c7e]" />
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </section>

      {/* ================= 3. ARTISANAL 6-PILLAR BENTO GRID ================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1f5c54] bg-[#1f5c54]/10 px-3.5 py-1 rounded-full border border-[#1f5c54]/20">
            Core Foundations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3e2410]">
            The 6 Dimensions of Immersion
          </h2>
          <p className="text-xs sm:text-sm text-[#7a5232]">
            Carefully structured to give scholars a rigorous, multi-faceted understanding of rural India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bentoPillars.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl border ${item.accent} shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between text-left group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#f5efe2] border border-[#dccdb2] flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                  <span className="font-serif text-xs font-bold text-[#7a5232]/60">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#3e2410] leading-snug group-hover:text-[#3a8c7e] transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#7a5232] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#dccdb2]/60 flex items-center text-[11px] font-bold text-[#3a8c7e] gap-1">
                <span>Field Practicum</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 4. INTERACTIVE DOMAIN TRACK SELECTOR ================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto relative z-10">
        <div className="bg-[#fdfbf7] rounded-3xl border border-[#dccdb2] p-6 sm:p-10 shadow-md text-left">
          
          <div className="max-w-2xl mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8880a]/15 text-[#c8880a] text-xs font-bold uppercase tracking-wider mb-2">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Multi-Disciplinary Fellowship Tracks</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3e2410]">
              What Will You Learn From Your Field?
            </h3>
            <p className="text-xs sm:text-sm text-[#7a5232] mt-1">
              Select your academic discipline to see how the fellowship enriches your career and research.
            </p>
          </div>

          {/* Track Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {domainTracks.map((d, index) => (
              <button
                key={index}
                onClick={() => setActiveDomain(index)}
                className={`px-3.5 py-3 rounded-2xl text-left text-xs font-bold transition-all border cursor-pointer ${
                  activeDomain === index
                    ? 'bg-[#3a8c7e] text-white border-[#3a8c7e] shadow-md'
                    : 'bg-[#f5efe2] text-[#3e2410] border-[#dccdb2] hover:bg-[#ebe2d1]'
                }`}
              >
                <span className="block opacity-75 text-[10px] uppercase font-semibold">Track {index + 1}</span>
                <span className="leading-tight block mt-0.5">{d.domain.split('&')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Domain Panel */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#f5efe2] border border-[#dccdb2] space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#3e2410]">
                {domainTracks[activeDomain].title}
              </h4>
              <span className="px-3 py-1 rounded-full bg-[#3a8c7e]/15 text-[#1f5c54] text-xs font-bold">
                {domainTracks[activeDomain].badge}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#7a5232] leading-relaxed">
              {domainTracks[activeDomain].desc}
            </p>

            <div className="pt-2 flex items-start gap-2 text-xs font-semibold text-[#3e2410] border-t border-[#dccdb2]/80">
              <CheckCircle2 className="w-4 h-4 text-[#3a8c7e] shrink-0 mt-0.5" />
              <span>Core Takeaway: {domainTracks[activeDomain].keyTakeaway}</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. REAL FIELD PHOTOGRAPHIC MOMENTS ================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c8880a] bg-[#c8880a]/10 px-3.5 py-1 rounded-full border border-[#c8880a]/20">
            Real Stories From The Ground
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3e2410]">
            Memories from Sahyadri Hamlets
          </h2>
          <p className="text-xs sm:text-sm text-[#7a5232]">
            Authentic moments captured during recent Palghar &amp; Karjat immersion cohorts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryMoments.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-[#dccdb2] bg-[#fdfbf7] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#3e2410]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3e2410]/80 via-transparent to-transparent" />
              </div>
              <div className="p-4 text-left space-y-1">
                <h4 className="font-serif text-sm font-bold text-[#3e2410]">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#7a5232] leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 6. REFINED ACCORDION FAQS ================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdfbf7] border border-[#dccdb2] text-[#3a8c7e] text-xs font-bold uppercase tracking-wider">
            <HelpCircle size={13} />
            <span>Essential Information</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3e2410]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#fdfbf7] rounded-2xl border border-[#dccdb2] overflow-hidden shadow-xs transition-all text-left"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-[#3e2410] hover:text-[#3a8c7e] transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                {openFaq === index ? (
                  <ChevronUp size={18} className="text-[#3a8c7e] flex-shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-[#7a5232] flex-shrink-0" />
                )}
              </button>

              {openFaq === index && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-[#7a5232] leading-relaxed border-t border-[#dccdb2]/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= 7. HIGH-IMPACT EDITORIAL CALLOUT ================= */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-5xl mx-auto relative z-10">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1f5c54] via-[#2c6a5f] to-[#3e2410] text-[#f5efe2] p-8 sm:p-12 text-center shadow-xl">
          
          {/* Subtle Ambient Background Light */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8880a]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#f5efe2] text-xs font-bold uppercase tracking-widest">
              Limited 40-Fellow Cohort
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              Ready to Experience the Living Soul of Rural India?
            </h2>

            <p className="text-sm sm:text-base text-[#e7e0d0] leading-relaxed">
              Join scholars and future leaders in an unvarnished, eye-opening field fellowship. Applications reviewed on a rolling basis.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/register/form"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#c8880a] hover:bg-[#a06b05] text-[#fdfbf7] font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Register for Winter Camp</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="mailto:contact@sahyadri.org"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#f5efe2] border border-white/20 font-semibold text-xs sm:text-sm transition-all duration-300 w-full sm:w-auto"
              >
                <span>Inquire with Organizers</span>
              </a>
            </div>

            <p className="text-[11px] text-[#e7e0d0]/80 pt-2">
              Sahyadri Rural Connect • Winter School Immersion Cohort 2026
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
