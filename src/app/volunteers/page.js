'use client';

import React, { useEffect, useState } from 'react';
import { Users, Handshake, Compass, TrendingUp, CloudUpload, Sparkles, Check } from "lucide-react";
import './volunteers.css';

const leftRoles = [
  {
    icon: Users,
    title: 'Hands-on Experience',
    description: 'In rural grassroots development, indigenous living, and tribal school projects.'
  },
  {
    icon: Handshake,
    title: 'Collaborative Social Work',
    description: 'Work alongside changemakers, academic mentors, and tribal village leaders.'
  },
  {
    icon: Compass,
    title: 'Real World Exposure',
    description: 'Fieldwork immersion in Sahyadri rural ecosystems and community centers.'
  },
  {
    icon: TrendingUp,
    title: 'Skill Development & Growth',
    description: 'Expand your leadership, social impact network, and hands-on portfolio.'
  }
];

const rightRoles = [
  {
    title: 'Program Support Volunteer',
    description:
      'Assist with on-ground camp logistics, workshop coordination, and community engagement during our rural winter and summer schools.',
    tags: ['On-site', 'Logistics', 'Flexible Hours', 'Mentorship']
  },
  {
    title: 'Content & Storytelling Volunteer',
    description:
      'Capture ground stories, photograph indigenous craft traditions, and document youth transformation across our social outreach platforms.',
    tags: ['Field Media', 'Creative Writing', 'Photography', 'Part-time']
  }
];

export default function VolunteerPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ].includes(file.type)) {
      setSelectedFile(file);
    } else {
      alert("Only PDF, DOC, DOCX files are allowed");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    setShowModal(false);
    setSelectedFile(null);

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#f5efe2] text-[#3e2410] selection:bg-[#3a8c7e]/25 selection:text-[#3e2410]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 md:pt-36 pb-8">
        
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
            Volunteer Opportunities
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[#7a5232] max-w-2xl mx-auto leading-relaxed">
            Make a tangible difference by volunteering with Sahyadri Rural Connect.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT CARD ================= */}
      <section className="px-3 sm:px-6 pt-4 md:pt-8 pb-12 relative z-10">
        <div
          className="
            max-w-[1340px] mx-auto bg-[#fdfbf7] rounded-3xl md:rounded-[2.5rem] shadow-sm border border-[#dccdb2]
            p-5 sm:p-8 md:p-10 lg:p-12 
            grid gap-8 sm:gap-10 lg:gap-12
            grid-cols-1
            lg:grid-cols-[1fr_100px_1fr]
          "
        >
          {/* --- LEFT SECTION --- */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebe2d1] border border-[#dccdb2] mb-3">
              <Sparkles size={12} className="text-[#c8880a]" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1f5c54]">Why Join Us</span>
            </div>
            
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#3e2410] mb-3 text-left leading-tight">
              Why Volunteer With Us?
            </h2>

            <p className="max-w-xl text-[#7a5232] mb-8 text-sm sm:text-base text-left font-light leading-relaxed">
              Volunteering with Sahyadri Rural Connect offers an immersive opportunity to contribute
              to grassroots rural transformation while building life-long friendships and hands-on skills.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {leftRoles.map((role, i) => (
                <div
                  key={i}
                  className="
                    flex flex-col items-center justify-start
                    p-5 sm:p-6
                    w-full min-h-[170px]
                    rounded-2xl
                    bg-[#ebe2d1]/50 border border-[#dccdb2]
                    text-center
                    shadow-xs hover:shadow-md hover:bg-[#ebe2d1]/80 hover:border-[#3a8c7e]/40
                    transition-all duration-300
                    hover:-translate-y-1"
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#fdfbf7] border border-[#dccdb2] flex items-center justify-center text-[#1f5c54] mb-3 shrink-0 shadow-xs">
                    <role.icon size={22} />
                  </div>

                  <h4 className="font-serif font-normal text-base sm:text-lg mb-1.5 text-[#3e2410] leading-tight">
                    {role.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#7a5232] font-light leading-relaxed">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --- CENTER LEAF SPINE --- */}
          <div className="hidden lg:flex lg:flex-col items-center lg:justify-center py-4">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#3a8c7e]/40" />
            {[...Array(9)].map((_, i) => (
              <div key={i} className="leafPair my-1">
                <svg viewBox="0 0 100 60" width="80" height="48" className="leafSvg">
                  <path
                    d="M50 50 C30 70, 90 10, 10 -10 C20 55, 45 38, 50 50 Z"
                    fill="#3a8c7e"
                    fillOpacity="0.3"
                  />
                  <path
                    d="M50 50 C70 70, 10 10, 90 -10 C80 55, 55 38, 50 50 Z"
                    fill="#c8880a"
                    fillOpacity="0.35"
                  />
                </svg>
              </div>
            ))}
            <div className="w-px h-12 bg-gradient-to-t from-transparent to-[#3a8c7e]/40" />
          </div>

          {/* --- RIGHT SECTION --- */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebe2d1] border border-[#dccdb2] mb-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1f5c54]">Open Calls</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#3e2410] mb-4 sm:mb-6 text-left leading-tight">
              Current Volunteer Roles
            </h2>

            <div className="grid grid-cols-1 gap-5">
              {rightRoles.map((role, i) => (
                <div
                  key={i}
                  className="
                    w-full p-6 sm:p-8 rounded-2xl bg-[#ebe2d1]/50 border border-[#dccdb2]
                    transition-all duration-300
                    hover:border-[#3a8c7e]/50 hover:shadow-md hover:bg-[#ebe2d1]/80
                  "
                >
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#3e2410] mb-2">{role.title}</h3>
                  <p className="text-[#7a5232] mb-5 text-xs sm:text-sm md:text-base leading-relaxed font-light">{role.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="
                          inline-flex items-center justify-center
                          px-3 py-1
                          text-xs
                          bg-[#fdfbf7] text-[#1f5c54] border border-[#dccdb2]
                          rounded-full
                          font-medium
                          whitespace-nowrap
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="pb-20 flex justify-center px-4 md:px-6">
        <div className="bg-[#fdfbf7] border border-[#dccdb2] max-w-[620px] w-full text-center p-8 sm:p-10 md:p-12 rounded-3xl shadow-sm">
          <div className="w-14 h-14 rounded-full bg-[#ebe2d1] border border-[#dccdb2] mx-auto mb-4 flex items-center justify-center text-[#1f5c54]">
            <CloudUpload size={24} />
          </div>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#3e2410] mb-3 text-center leading-tight">
            Ready to Volunteer?
          </h2>
          <p className="text-[#7a5232] mb-8 text-sm md:text-base font-light max-w-md mx-auto">
            Upload your resume or statement of interest to get started. Our team will review your application and connect with you.
          </p>
          
          <button
            onClick={() => setShowModal(true)}
            className="w-full sm:w-auto bg-[#3a8c7e] text-white px-8 py-4 rounded-full hover:bg-[#1f5c54] transition-all shadow-sm flex items-center justify-center gap-2.5 font-medium text-sm md:text-base mx-auto active:scale-95"
          >
            <CloudUpload size={18} />
            <span>Upload Your Resume</span>
          </button>
        </div>
      </section>

      {/* ================= UPLOAD MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#241407]/60 backdrop-blur-xs px-4">
          <div className="w-full max-w-md rounded-3xl bg-[#fdfbf7] border border-[#dccdb2] p-6 sm:p-8 shadow-2xl animate-scaleIn">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-serif text-2xl font-normal text-[#3e2410]">Upload Resume</h3>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 rounded-full bg-[#ebe2d1] text-[#7a5232] hover:text-[#3e2410] flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#7a5232] font-light mb-6">
              Please upload your resume (PDF, DOC, DOCX) for volunteering consideration.
            </p>

            {/* Upload Area */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="relative flex flex-col items-center justify-center gap-3 border-2 border-dashed border-[#dccdb2] rounded-2xl p-8 text-center bg-[#ebe2d1]/30 hover:border-[#3a8c7e] hover:bg-[#ebe2d1]/50 transition cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#fdfbf7] border border-[#dccdb2] flex items-center justify-center text-[#1f5c54]">
                <CloudUpload size={24} />
              </div>
              <p className="font-medium text-sm text-[#3e2410]">
                {selectedFile ? selectedFile.name : "Click or drag & drop resume"}
              </p>
              <span className="text-xs text-[#7a5232]">
                PDF, DOC, DOCX files only (Max 10MB)
              </span>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2.5 rounded-full border border-[#dccdb2] text-sm text-[#7a5232] hover:bg-[#ebe2d1] transition"
              >
                Cancel
              </button>
              <button
                onClick={handleUpload}
                disabled={!selectedFile}
                className="px-6 py-2.5 rounded-full bg-[#3a8c7e] text-white text-sm font-medium hover:bg-[#1f5c54] disabled:opacity-50 transition"
              >
                Submit Resume
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= SUCCESS TOAST ================= */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#241407]/40 backdrop-blur-xs px-4">
          <div className="bg-[#fdfbf7] border border-[#dccdb2] rounded-3xl p-8 w-full max-w-sm text-center shadow-2xl animate-scaleIn">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3a8c7e]/15 border border-[#3a8c7e]/30 text-[#1f5c54]">
              <Check size={24} strokeWidth={2.5} />
            </div>

            <h3 className="font-serif text-2xl font-normal text-[#3e2410] mb-1">
              Application Received!
            </h3>

            <p className="text-sm text-[#7a5232] font-light">
              Your resume was uploaded successfully. We will reach out to you shortly.
            </p>
          </div>
        </div>
      )}

    </main>
  );
}