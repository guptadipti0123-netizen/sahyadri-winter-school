'use client';

import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Instagram, XCircle } from 'lucide-react';

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

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-evergreen/50 backdrop-blur-md mb-4 md:mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-evergreen animate-pulse" />
            <p className="text-xs md:text-sm font-bold text-evergreen tracking-wide uppercase">
              Contact Us
            </p>
          </div>

          <h1 className="font-extrabold font-serif text-2xl sm:text-3xl md:text-6xl mb-3 text-evergreen leading-tight drop-shadow-md">
            Get in Touch
          </h1>

          <p className="text-base md:text-xl italic">
            Have questions or want to collaborate with us? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* 2. CARDS CONTAINER */}
      <div className="relative w-full max-w-5xl mx-auto h-auto md:h-[540px] perspective z-20 px-4 mb-12 flex flex-col md:block gap-8 md:gap-0">

        {/* Left Card - Contact Info */}
        <div
          className="relative md:absolute left-0 md:left-4 top-0 w-full md:w-1/2 h-auto md:h-full z-30 transition-all duration-700 ease-in-out"
          style={{
            transform: isSeparated && !isMobile ? 'translateX(-180px)' : 'translateX(0)',
          }}
        >
          <div className="h-full bg-white rounded-3xl md:rounded-r-none p-8 md:p-12 shadow-xl flex flex-col justify-center relative border border-gray-100">
            <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 bg-white rotate-45 z-50" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-left">Let&apos;s get in touch</h2>
              <p className="text-gray-500 mb-10 leading-relaxed text-sm md:text-base">
                Have questions or want to learn more about our programs? We&apos;d love to hear from you.
              </p>
              <div className="space-y-8 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-sea_green" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 tracking-wide mb-1">ADDRESS</p>
                    <p className="text-gray-900 font-medium text-sm md:text-base">Mumbai, Maharashtra 400076</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-sea_green" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 tracking-wide mb-1">EMAIL</p>
                    <p className="text-gray-900 font-medium text-sm md:text-base">info@sahyadriruralconnect.org</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 tracking-wide mb-4 uppercase">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/sahyadriwinterschool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-sea_green text-white flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card - Contact Form */}
        <div
          className="relative md:absolute right-0 md:right-4 top-0 w-full md:w-1/2 h-auto md:h-full z-40 transition-all duration-700 ease-in-out"
          style={{
            transform: isSeparated && !isMobile ? 'translateX(180px)' : 'translateX(0)',
          }}
        >
          <div className="h-full bg-sea_green rounded-3xl md:rounded-l-none p-8 md:p-12 shadow-2xl relative flex flex-col justify-center">
            <div className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 bg-sea_green rotate-45 z-50" />
            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-5 py-4 rounded-xl border
  ${emailError ? 'border-red-400' : 'border-green-400/30'}
  ${filledBg(formData.email)}
  focus:outline-none focus:border-white transition-all duration-300
`}

                  />
                  {emailError && <p className="mt-1 text-sm text-red-200 font-medium">{emailError}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    required
                    className={`w-full px-5 py-4 rounded-xl border
  ${messageError ? 'border-red-400' : 'border-green-400/30'}
  ${filledBg(formData.message)}
  focus:outline-none focus:border-white transition-all duration-300 resize-none
`}

                  />
                  {phoneError && <p className="mt-1 text-sm text-red-200 font-medium">{phoneError}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your message..."
                    className={`w-full px-5 py-4 rounded-xl border
  ${messageError ? 'border-red-400' : 'border-green-400/30'}
  ${filledBg(formData.message)}
  focus:outline-none focus:border-white transition-all duration-300 resize-none
`}

                  />
                  {messageError && <p className="mt-1 text-sm text-red-200 font-medium">{messageError}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 py-3 px-6 rounded-full bg-white text-green-700 font-bold text-base md:text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-green-600/30 border-t-green-600 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
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