'use client';

import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Instagram, XCircle, ArrowUpRight } from 'lucide-react';

const filledBg = (value) =>
  value.trim()
    ? 'bg-white text-green-900 placeholder:text-gray-400'
    : 'bg-green-800/40 text-white placeholder:text-green-100/50';


export default function ContactPage() {
  const [formData, setFormData] = useState({ email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSeparated, setIsSeparated] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [canSeparate, setCanSeparate] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setCanSeparate(window.innerWidth >= 1200);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return 'Email is required';
    if (!emailRegex.test(email)) return 'Enter a valid email address';
    return '';
  };

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    if (!cleaned) return 'Phone number is required';
    if (!indianPhoneRegex.test(cleaned))
      return 'Enter a valid 10-digit Indian phone number';
    return '';
  };

  const validateMessage = (message) => {
    if (!message.trim()) return 'Message cannot be empty';
    if (message.trim().length < 10)
      return 'Message should be at least 10 characters';
    return '';
  };

  const handleSubmit = async (e) => {
    const emailErr = validateEmail(formData.email);
    const phoneErr = validatePhone(formData.phone);
    const messageErr = validateMessage(formData.message);

    setEmailError(emailErr);
    setPhoneError(phoneErr);
    setMessageError(messageErr);

    if (emailErr || phoneErr || messageErr) {
      setIsSubmitting(false);
      return;
    }

    e.preventDefault();
    setIsSubmitting(true);

    setIsSeparated(true);
    setShowSuccess(false);
    setShowError(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ email: '', phone: '', message: '' });

        setTimeout(() => {
          setShowSuccess(false);
          setIsSeparated(false);
        }, 3000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
        setIsSeparated(false);
      }, 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const filteredValue = value.replace(/[^\d+\-\s]/g, '');
      setFormData({ ...formData, phone: filteredValue });
      setPhoneError(validatePhone(filteredValue));
    }

    if (name === 'email') {
      setFormData({ ...formData, email: value });
      setEmailError(validateEmail(value));
    }

    if (name === 'message') {
      setFormData({ ...formData, message: value });
      setMessageError(validateMessage(value));
    }
  };

  return (
    <main className="min-h-screen bg-frosted_mint/20 font-sans overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 md:pt-36 pb-6 md:pb-12 overflow-hidden">
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-evergreen/30 backdrop-blur-md mb-4 md:mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-sea_green animate-pulse" />
            <p className="text-xs md:text-sm font-bold text-evergreen tracking-wider uppercase">
              Contact Us
            </p>
          </div>

          <h1 className="font-extrabold font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 text-evergreen leading-tight drop-shadow-sm">
            Get in Touch
          </h1>

          <p className="font-serif italic text-base sm:text-lg md:text-xl text-pine_teal/85 max-w-2xl mx-auto leading-relaxed">
            Have questions or want to collaborate with us? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* 2. CARDS CONTAINER */}
      <div className="relative w-full max-w-5xl mx-auto h-auto lg:h-[490px] perspective z-20 px-4 mb-10 sm:mb-12 flex flex-col lg:block gap-5 sm:gap-6 lg:gap-0">

        {/* Left Card - Contact Info */}
        <div
          className="relative lg:absolute left-0 lg:left-4 top-0 w-full lg:w-1/2 h-auto lg:h-full z-30 transition-all duration-700 ease-in-out"
          style={{
            transform: isSeparated && canSeparate ? 'translateX(-120px)' : 'translateX(0)',
          }}
        >
          <div className="h-full bg-white rounded-2xl sm:rounded-3xl lg:rounded-r-none p-5 sm:p-7 md:p-8 lg:p-9 shadow-xl flex flex-col justify-center relative border border-gray-100">
            <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 bg-white rotate-45 z-50" />
            <div className="relative z-10">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-evergreen mb-2 text-left leading-tight">
                Let&apos;s get in touch
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm font-normal">
                Have questions or want to learn more about our programs? We&apos;d love to hear from you.
              </p>
              <div className="space-y-3.5 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-frosted_mint/40 border border-celadon/50 flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4 text-sea_green" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-sea_green tracking-wider uppercase mb-0.5">ADDRESS</p>
                    <p className="text-gray-900 font-medium text-xs sm:text-sm">Mumbai, Maharashtra 400076</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-frosted_mint/40 border border-celadon/50 flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-4 h-4 text-sea_green" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-sea_green tracking-wider uppercase mb-0.5">EMAIL</p>
                    <p className="text-gray-900 font-medium text-xs sm:text-sm break-all">info@sahyadriruralconnect.org</p>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-2">
                  Follow Our Field Stories
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href="https://www.instagram.com/sahyadriwinterschool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-rose-50/80 via-pink-50/40 to-amber-50/50 border border-rose-200/70 hover:border-rose-300 hover:shadow-md transition-all group/ig"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-xs group-hover/ig:scale-105 transition-transform">
                        <Instagram size={15} />
                      </div>
                      <div className="text-left">
                        <span className="text-[9px] font-bold text-rose-700 uppercase tracking-wider block">Instagram</span>
                        <span className="text-xs font-bold text-gray-900 group-hover/ig:text-rose-700 transition-colors">@sahyadriwinterschool</span>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-gray-400 group-hover/ig:text-rose-600 group-hover/ig:translate-x-0.5 group-hover/ig:-translate-y-0.5 transition-all mr-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card - Contact Form */}
        <div
          className="relative lg:absolute right-0 lg:right-4 top-0 w-full lg:w-1/2 h-auto lg:h-full z-40 transition-all duration-700 ease-in-out"
          style={{
            transform: isSeparated && canSeparate ? 'translateX(120px)' : 'translateX(0)',
          }}
        >
          <div className="h-full bg-sea_green rounded-2xl sm:rounded-3xl lg:rounded-l-none p-5 sm:p-7 md:p-8 lg:p-9 shadow-2xl relative flex flex-col justify-center">
            <div className="hidden lg:block absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 bg-sea_green rotate-45 z-50" />
            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-white mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-3.5 py-2 sm:py-2.5 rounded-lg border text-xs sm:text-sm
  ${emailError ? 'border-red-400' : 'border-green-400/30'}
  ${filledBg(formData.email)}
  focus:outline-none focus:border-white transition-all duration-300
`}

                  />
                  {emailError && <p className="mt-1 text-xs text-red-200 font-medium">{emailError}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-white mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    required
                    className={`w-full px-3.5 py-2 sm:py-2.5 rounded-lg border text-xs sm:text-sm
  ${phoneError ? 'border-red-400' : 'border-green-400/30'}
  ${filledBg(formData.phone)}
  focus:outline-none focus:border-white transition-all duration-300
`}

                  />
                  {phoneError && <p className="mt-1 text-xs text-red-200 font-medium">{phoneError}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-white mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Your message..."
                    className={`w-full px-3.5 py-2 sm:py-2.5 rounded-lg border text-xs sm:text-sm min-h-[58px] sm:min-h-[72px]
  ${messageError ? 'border-red-400' : 'border-green-400/30'}
  ${filledBg(formData.message)}
  focus:outline-none focus:border-white transition-all duration-300 resize-none
`}

                  />
                  {messageError && <p className="mt-1 text-xs text-red-200 font-medium">{messageError}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-2.5 sm:py-3 px-5 rounded-full bg-white text-green-800 font-bold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-green-600/30 border-t-green-600 rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 3. RESPONSIVE POPUP OVERLAYS */}

        {/* Success Popup */}
        {showSuccess && (
          <div className={`
            /* Mobile Styles: Fixed center screen, dark overlay only (NO BLUR) */
            fixed inset-0 z-[100] flex items-center justify-center bg-black/10 p-4
            /* Desktop Styles: Absolute inside container, no overlay */
            md:absolute md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bg-transparent md:p-0
            animate-in fade-in zoom-in duration-300
          `}>
            <div className={`
              bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-gray-100
              /* Mobile Size: Small */
              w-[85%] max-w-sm p-6
              /* Desktop Size: Original */
              md:min-w-[300px] md:p-8 md:w-auto
            `}>
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">Sent Successfully!</h3>
              <p className="text-gray-500 text-center text-sm md:text-base max-w-xs">
                Thank you for reaching out. We&apos;ll be in touch soon!
              </p>
            </div>
          </div>
        )}

        {/* Failure Popup */}
        {showError && (
          <div className={`
            /* Mobile Styles: Fixed center screen, dark overlay only (NO BLUR) */
            fixed inset-0 z-[100] flex items-center justify-center bg-black/10 p-4
            /* Desktop Styles: Absolute inside container, no overlay */
            md:absolute md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bg-transparent md:p-0
            animate-in fade-in zoom-in duration-300
          `}>
            <div className={`
              bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-red-50
              /* Mobile Size: Small */
              w-[85%] max-w-sm p-6
              /* Desktop Size: Original */
              md:min-w-[300px] md:p-8 md:w-auto
            `}>
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">Sending Failed</h3>
              <p className="text-gray-500 text-center text-sm md:text-base max-w-xs">
                We couldn&apos;t send your message. Please check your internet or try again later.
              </p>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}