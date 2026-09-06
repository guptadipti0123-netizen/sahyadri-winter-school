'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-frosted_mint/20">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-25 md:pt-30 pb-6 md:pb-12 overflow-hidden">
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

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-extrabold font-serif text-2xl sm:text-3xl md:text-6xl mb-3 text-evergreen leading-tight drop-shadow-md">
            Winter Camp Loading
          </h1>

          <p className="text-base md:text-xl italic text-pine_teal/80">
            Join Sahyadri Rural Connect and be part of something meaningful.
          </p>
        </div>
      </section>

      {/* ================= POSTER + ARE YOU INTERESTED BUTTON ================= */}
      <section className="px-4 md:px-6 pb-16 relative z-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">

          {/* --- ARE YOU INTERESTED BUTTON --- */}
          <Link
            href="/register/form"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 md:px-14 md:py-5 rounded-2xl bg-gradient-to-r from-sea_green to-dark_emerald text-white font-bold text-base md:text-lg shadow-xl hover:shadow-2xl hover:from-dark_emerald hover:to-evergreen hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
          >
            Are you Interested
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            {/* Subtle glow behind button */}
            <span className="absolute inset-0 rounded-2xl bg-sea_green/20 blur-xl -z-10 group-hover:bg-sea_green/30 transition-colors duration-300" />
          </Link>

          {/* --- POSTER --- */}
          <div className="relative w-full max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
            <Image
              src="/SRCRegistrationPoster.png"
              alt="Sahyadri Rural Connect Registration Poster"
              width={1120}
              height={1500}
              className="w-full h-auto object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
            />
          </div>


        </div>
      </section>

    </main>
  );
}
