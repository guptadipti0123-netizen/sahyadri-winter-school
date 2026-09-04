'use client';

import React, { useEffect, useState } from 'react';
import { Users, Handshake, Compass, TrendingUp, CloudUpload } from "lucide-react"; // Changed icon
import './volunteers.css';
import { Noto_Sans } from 'next/font/google'

const noto_Sans = Noto_Sans({
  subsets: ['Cyrillic'],
  weight: ['400', '700', '800', '900'], // Load the weights you need
  display: 'swap',
})

const leftRoles = [
  {
    icon: Users,
    title: 'Hands-on Experience',
    description: 'In rural development and community work'
  },
  {
    icon: Handshake,
    title: 'Collaborative Social Work',
    description: 'With passionate change-driven individuals'
  },
  {
    icon: Compass,
    title: 'Real World Exposure',
    description: 'Through immersive field engagement'
  },
  {
    icon: TrendingUp,
    title: 'Skill Development Growth',
    description: 'And professional network expansion'
  }
];


const rightRoles = [
  {
    title: 'Program Support Volunteer',
    description:
      'Assist with program logistics, our permissions, ensuring smooth execution of our social outreach programs',
    tags: ['On-site', 'Creative', 'Flexible hours', 'Part-time']
  },
  {
    title: 'Content Creation Volunteer',
    description:
      'Help create engaging content on our platforms, ensuring storytelling and increased visibility in our social media programs',
    tags: ['On-site', 'Creative', 'Flexible hours', 'Part-time']
  }
];

export default function VolunteerPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && ["application/pdf",
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



  useEffect(() => {
    const path = document.querySelector(".roadmapPath");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && path) {
          path.style.strokeDashoffset = "0";
        }
      },
      { threshold: 0.4 }
    );

    if (path) observer.observe(path);

    return () => observer.disconnect();
  }, []);


  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-frosted_mint/20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-25 md:pt-30">

        {/* --- WAVE BACKGROUND --- */}
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-evergreen/50 backdrop-blur-md mb-4 md:mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-evergreen animate-pulse" />
            <p className="text-xs md:text-sm font-bold text-evergreen tracking-wide uppercase">
              Join Our Mission
            </p>
          </div>

          <h1 className={`${noto_Sans.className} font-extrabold font-serif text-2xl sm:text-3xl md:text-6xl mb-3 text-evergreen leading-tight drop-shadow-md`}>
            Volunteer Opportunities
          </h1>

          <p className="text-base md:text-xl italic">
            Make a difference by volunteering with Sahyadri Rural Connect.
          </p>
        </div>
      </section>


      {/* ================= MAIN CONTENT CARD ================= */}
      <section className="px-2 sm:px-6 pt-6 md:pt-12 pb-6 md:pb-12 relative z-10">
        <div
          className="
            max-w-[1400px] mx-auto bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.08)]
            p-4 sm:p-5 sm:p-10 
            grid gap-8 lg:gap-10
            grid-cols-1
            lg:grid-cols-[1fr_120px_1fr]
          "
        >
          {/* --- LEFT SECTION --- */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-left">
              Why Volunteer With Us?
            </h2>

            <p className="max-w-xl text-gray-600 mb-6 text-sm sm:text-base lg:text-lg text-left mx-auto lg:mx-0">
              Volunteering with Sahyadri Rural Connect offers a unique opportunity to contribute
              to rural development while gaining valuable experience.
            </p>

            <div className="grid grid-cols-2 gap-6 place-items-center">
              {leftRoles.map((role, i) => (
                <div
                  key={i}
                  className="
                  flex flex-col items-center justify-start
                  p-3 md:p-4
                  w-[170px] h-[170px]
                  md:w-[230px] md:h-[200px]
                  rounded-[28px]
                  bg-[#d8f3dc]
                  text-center
                  shadow-md
                  transition-none
                  md:transition-all md:duration-300
                  md:hover:shadow-xl"
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/60 flex items-center justify-center text-sea_green mb-2 md:mb-4">
                    <role.icon size={22} />
                </div>


                <h4 className="font-bold text-sm md:text-base mb-1 md:mb-2 text-gray-800">
                  {role.title}
                </h4>


                <p className="text-xs md:text-sm text-gray-600 px-3 md:px-6 leading-snug md:leading-relaxed">
                  {role.description}
                </p>


                </div>
              ))}
            </div>
          </div>

          {/* --- CENTER LEAF SPINE --- */}
          {/* hidden lg:flex ensures it is ONLY visible on Large screens (Desktop) */}
          <div className="lg:leafSpine hidden lg:flex lg:flex-col items-center lg:justify-center">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="leafPair">
                <svg viewBox="0 0 100 60" width="100" height="60" className="leafSvg">
                  <path
                    d="M50 50 C30 70, 90 10, 10 -10 C20 55, 45 38, 50 50 Z"
                    fill="#4cb977"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M50 50 C70 70, 10 10, 90 -10 C80 55, 55 38, 50 50 Z"
                    fill="#74c69d"
                    fillOpacity="0.45"
                  />
                </svg>
              </div>
            ))}
          </div>

          {/* --- RIGHT SECTION --- */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-left">
              Current Volunteer Roles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
              {rightRoles.map((role, i) => (
                <div
                  key={i}
                  className="roleCardDetail
                  w-full
                  transition-none
                  md:transition-all md:duration-300
                  md:hover:shadow-lg"
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{role.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{role.description}</p>
                  <div className="flex flex-nowrap gap-1 sm:gap-2 overflow-hidden">
                    {role.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="
                          flex items-center justify-center
                          w-24 h-8 px-1
                          text-[10px] sm:text-xs
                          bg-gray-100 text-gray-600
                          rounded-md
                          font-medium
                          whitespace-nowrap
                          transition-none
                          md:transition-all md:duration-200
                          md:hover:bg-sea_green md:hover:text-white
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
      <section className="pb-12 flex justify-center px-2 md:px-6">
        <div className="ctaContent max-w-[560px] w-full text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-center">Ready to Volunteer?</h2>
          <p className="ctaDescription text-gray-600 mb-6">
            Upload your resume to get started. We’ll review your application and get in touch.
          </p>
          
          {/* Updated Icon to CloudUpload */}
          <button
            onClick={() => setShowModal(true)}
            className="ctaButton w-full sm:w-auto bg-evergreen text-white px-8 py-4 rounded-xl hover:bg-sea_green transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 font-bold"
          >
            <CloudUpload size={20} />
            Upload Your Resume
          </button>


        </div>
      </section>
      {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl animate-none md:animate-scaleIn">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold">Upload Resume</h3>
        <button
          onClick={() => setShowModal(false)}
          className="text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        Please upload your resume for volunteering consideration.
      </p>

      {/* Upload Area */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="relative flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-evergreen transition cursor-pointer"
      >
        <CloudUpload className="text-gray-400" size={36} />
        <p className="font-semibold text-sm">
          {selectedFile ? selectedFile.name : "Click or drag & drop resume"}
        </p>
        <span className="text-xs text-gray-500">
          PDF, DOC, DOCX files only
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
          className="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={handleUpload}
          className="px-4 py-2 rounded-lg bg-evergreen text-white text-sm hover:bg-sea_green"
        >
          OK
        </button>
      </div>
    </div>
  </div>
)}

{showSuccess && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
    <div className="bg-white rounded-2xl p-8 w-full max-w-sm text-center shadow-xl animate-none md:animate-scaleIn">
      
      {/* Green Tick */}
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <svg
          className="h-8 w-8 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h3 className="text-lg font-bold text-gray-800 mb-1">
        Success!
      </h3>

      <p className="text-sm text-gray-600">
        Resume uploaded successfully
      </p>
    </div>
  </div>
)}


    </main>
  );
}