"use client"

import { 
  Users, TrendingUp, Mail, 
  HeartHandshake, ArrowRight, Sprout, Sparkles
} from "lucide-react"

import Link from "next/link"

export default function CareerPage() {

  const benefits = [
    {
      title: "Meaningful Work",
      description: "Contribute to impactful projects that make a real difference in rural communities across Maharashtra.",
      icon: <HeartHandshake size={28} />, 
      theme: "teal",
      bg: "bg-[#3a8c7e]/10",
      text: "text-[#1f5c54]",
      border: "border-[#dccdb2] hover:border-[#3a8c7e]/50",
      dashColor: "bg-[#3a8c7e]",
      shape: "rounded-2xl rounded-tr-[4rem] rounded-bl-[4rem]", 
    },
    {
      title: "Collaborative Team",
      description: "Work with a diverse team of passionate professionals, educators, and ground leaders dedicated to social transformation.",
      icon: <Users size={28} />,
      theme: "gold",
      bg: "bg-[#c8880a]/10",
      text: "text-[#c8880a]",
      border: "border-[#dccdb2] hover:border-[#c8880a]/50",
      dashColor: "bg-[#c8880a]",
      shape: "rounded-2xl rounded-tl-[4rem] rounded-br-[4rem]", 
    },
    {
      title: "Growth & Learning",
      description: "Develop your skills through grassroots fieldwork, continuous mentorship, and hands-on community leadership programs.",
      icon: <TrendingUp size={28} />,
      theme: "terracotta",
      bg: "bg-[#7a3a1c]/10",
      text: "text-[#7a3a1c]",
      border: "border-[#dccdb2] hover:border-[#7a3a1c]/50",
      dashColor: "bg-[#7a3a1c]",
      shape: "rounded-2xl rounded-tr-[4rem] rounded-bl-[4rem]", 
    },
  ]

  return (
    <main className="min-h-screen bg-[#f5efe2] text-[#3e2410] overflow-x-hidden selection:bg-[#3a8c7e]/25 selection:text-[#3e2410]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 md:pt-36 pb-12 sm:pb-16">
        
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#3a8c7e]/10 rounded-full blur-[110px] pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#c8880a]/10 rounded-full blur-[90px] pointer-events-none -z-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdfbf7] border border-[#dccdb2] mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#3a8c7e] animate-pulse" />
            <p className="text-xs md:text-sm font-semibold text-[#1f5c54] tracking-widest uppercase">
              Join Our Mission
            </p>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal mb-4 text-[#3e2410] leading-tight tracking-tight">
            Career Opportunities
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[#7a5232] max-w-2xl mx-auto leading-relaxed">
            Build a purposeful career rooted in meaningful impact, collective wisdom, and rural leadership.
          </p>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="pb-16 pt-2 px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col gap-5 sm:gap-6 md:grid md:grid-cols-3 md:gap-6 lg:gap-8 relative z-20">
            
            {benefits.map((item, index) => (
              <div 
                key={index}
                className={`
                  group relative bg-[#fdfbf7] transition-all duration-500 ease-out shadow-sm hover:shadow-md
                  /* MOBILE STYLES */
                  flex flex-row items-center text-left p-5 sm:p-6 gap-4 sm:gap-5 rounded-2xl border ${item.border}
                  /* TABLET & DESKTOP STYLES */
                  md:flex-col md:items-center md:text-center md:p-8 lg:p-10
                  md:hover:-translate-y-2 
                  md:border-[1.5px] lg:${item.shape}
                  ${index === 1 ? 'lg:-translate-y-3 md:z-10' : 'md:z-0'}
                `}
              >
                <div className="shrink-0 flex items-center justify-center relative z-10 w-14 h-14 rounded-2xl md:w-18 md:h-18 md:rounded-full bg-[#ebe2d1]/60 border border-[#dccdb2] shadow-xs group-hover:scale-105 transition-transform duration-500">
                  <div className={item.text}>{item.icon}</div>
                </div>

                <div className="relative z-10 flex-1 md:mt-3">
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-normal text-[#3e2410] mb-2 group-hover:text-[#1f5c54] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#7a5232] text-xs sm:text-sm md:text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="hidden md:block mt-6 pt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                   <div className={`w-12 h-1 rounded-full ${item.dashColor} transition-colors`} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CURRENT STATUS SECTION ================= */}
      <section className="pb-20 px-4 sm:px-6 relative">
        <div className="relative overflow-hidden bg-[#fdfbf7] rounded-3xl md:rounded-[2.5rem] shadow-sm border border-[#dccdb2] max-w-5xl mx-auto">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#3a8c7e]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c8880a]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            
            {/* Left: Text Content */}
            <div className="p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebe2d1] border border-[#dccdb2] mb-5 w-fit">
                <Sparkles size={14} className="text-[#c8880a]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1f5c54]">Get Involved</span>
              </div>
              
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#3e2410] mb-4 leading-tight">
                Be a Catalyst for Rural Transformation
              </h2>
              
              <p className="text-[#7a5232] mb-8 leading-relaxed text-sm md:text-base font-light">
                While we do not have full-time staff vacancies open currently, we are always eager to collaborate with educators, researchers, and changemakers who share our vision.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3a8c7e] text-white rounded-full font-medium hover:bg-[#1f5c54] transition-all shadow-sm text-sm active:scale-95 text-center"
                >
                  <Mail size={16} />
                  <span>Contact Us</span>
                </Link>
                <Link
                  href="/volunteers"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-[#3e2410] border border-[#dccdb2] rounded-full font-medium hover:bg-[#ebe2d1] transition-all text-sm active:scale-95 text-center"
                >
                  <Sprout size={16} className="text-[#3a8c7e]" />
                  <span>Volunteer With Us</span>
                </Link>
              </div>
            </div>

            {/* Right: Visual Area */}
            <div className="bg-[#ebe2d1]/40 p-8 sm:p-12 md:p-16 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-[#dccdb2]">
               <div className="text-center space-y-6">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto">
                     <div className="absolute inset-0 bg-[#3a8c7e]/15 rounded-full blur-xl animate-pulse" />
                     <div className="relative bg-[#fdfbf7] p-8 rounded-full shadow-sm border border-[#dccdb2] flex items-center justify-center h-full w-full">
                        <Users className="w-12 h-12 text-[#1f5c54]" />
                     </div>
                     <div className="absolute -top-2 -right-2 bg-[#fdfbf7] px-3 py-1.5 rounded-full shadow-xs border border-[#dccdb2] text-[11px] font-semibold text-[#1f5c54]">Community First</div>
                     <div className="absolute -bottom-2 -left-2 bg-[#fdfbf7] px-3 py-1.5 rounded-full shadow-xs border border-[#dccdb2] text-[11px] font-semibold text-[#c8880a]">Vedic Wisdom</div> 
                  </div>
                  <div>
                     <h3 className="font-serif text-lg md:text-xl font-normal text-[#3e2410]">Stay Connected</h3>
                     <p className="text-xs sm:text-sm text-[#7a5232] mt-1 font-light">Follow our journey and upcoming camp announcements.</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}