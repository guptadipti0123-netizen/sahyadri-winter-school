"use client"
import React from "react"
import Image from "next/image"
import { Sparkles, GraduationCap, Building2, Lightbulb, Sprout, Award, UserCheck } from "lucide-react"

export default function MentorsSection() {
  const mentors = [
    {
      name: "Omkar Desai",
      affiliation: "IIT Bombay",
      role: "Grassroots Tech & Innovation Mentor",
      description: "Mentoring student cohorts in appropriate grassroots technology, rural engineering solutions, and interdisciplinary problem-solving.",
      tag: "IIT BOMBAY",
      icon: <GraduationCap size={18} className="text-white" />,
      color: "from-blue-600 to-indigo-800",
      accent: "bg-blue-50 text-blue-800 border-blue-200",
      image: null,
      initials: "OD"
    },
    {
      name: "Rakesh Arrawatia",
      affiliation: "IRMA - SEED",
      role: "Rural Management & Economics Mentor",
      description: "Expert in rural management, cooperative governance, and developmental economics, guiding students on sustainable rural enterprise models.",
      tag: "IRMA - SEED",
      icon: <Building2 size={18} className="text-white" />,
      color: "from-emerald-600 to-teal-800",
      accent: "bg-emerald-50 text-emerald-800 border-emerald-200",
      image: null,
      initials: "RA"
    },
    {
      name: "Virendra Champanerkar",
      affiliation: "Pragati Pratishthan",
      role: "CEO & Tribal Empowerment Mentor",
      description: "Over two decades leading ground-level tribal upliftment, solar water lifting, watershed development, and rural schooling programs in Maharashtra.",
      tag: "PRAGATI PRATISHTHAN",
      icon: <Sprout size={18} className="text-white" />,
      color: "from-amber-600 to-orange-800",
      accent: "bg-amber-50 text-amber-800 border-amber-200",
      image: "/Virendra Champanerkar.png",
      initials: "VC"
    },
    {
      name: "Chirag Rawat",
      affiliation: "Entrepreneur",
      role: "Social Enterprise & Clean Tech Mentor",
      description: "Pioneering decentralized solar initiatives, sustainable livelihood ecosystems, and community-led green technology for rural clusters.",
      tag: "ENTREPRENEUR",
      icon: <Lightbulb size={18} className="text-white" />,
      color: "from-teal-600 to-emerald-800",
      accent: "bg-teal-50 text-teal-800 border-teal-200",
      image: null,
      initials: "CR"
    }
  ]

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-b from-frosted_mint/40 via-white to-frosted_mint/20 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sea_green/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint_leaf/15 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-10 space-y-2.5">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-evergreen">
            Our <span className="italic text-sea_green">Mentors</span> & Advisory
          </h2>
          <p className="text-pine_teal/80 text-sm md:text-base font-medium max-w-2xl mx-auto">
            Distinguished academicians, practitioners, and leaders mentoring our student cohorts.
          </p>
        </div>

        {/* MENTORS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-celadon/50 hover:border-sea_green rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Avatar */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  {/* Avatar */}
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-celadon/60 shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-evergreen to-sea_green text-white">
                    {mentor.image ? (
                      <Image
                        src={mentor.image}
                        alt={mentor.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-lg font-serif font-bold text-white tracking-wider">
                        {mentor.initials}
                      </div>
                    )}
                  </div>

                  {/* Institution Tag */}
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${mentor.accent} tracking-wide text-right`}>
                    {mentor.tag}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="font-serif text-lg font-bold text-evergreen group-hover:text-sea_green transition-colors leading-snug">
                  {mentor.name}
                </h3>
                
                <p className="text-xs font-semibold text-sea_green mt-0.5 mb-2.5">
                  {mentor.affiliation}
                </p>

                <p className="text-xs text-pine_teal/80 leading-relaxed line-clamp-4">
                  {mentor.description}
                </p>
              </div>

              {/* Bottom Role indicator */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-[11px] font-medium text-pine_teal/70">
                <UserCheck size={14} className="text-sea_green flex-shrink-0" />
                <span className="truncate">{mentor.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
