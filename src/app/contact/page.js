'use client';

import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Instagram, XCircle, ArrowUpRight } from 'lucide-react';

const filledBg = (value) =>
  value.trim()
    ? 'bg-white text-[#3e2410] placeholder:text-[#7a5232]/50'
    : 'bg-[#241407]/40 text-[#f5efe2] placeholder:text-[#f5efe2]/50';


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
    <main className="min-h-screen bg-[#f5efe2] text-[#3e2410] font-sans overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 md:pt-32 pb-8 overflow-hidden bg-gradient-to-b from-[#241407] via-[#3e2410] to-[#1f5c54] text-[#f5efe2]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3a8c7e]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c8880a]/15 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f5efe2]/15 border border-[#f5efe2]/25 backdrop-blur-md mb-2 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4a825] animate-pulse" />
            <p className="text-[10px] sm:text-xs font-bold text-[#d4a825] tracking-widest uppercase">
              Contact Us
            </p>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl mb-2 text-[#f5efe2] leading-tight drop-shadow-sm">
            Get in <span className="italic text-[#d4a825] font-serif">Touch</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#f5efe2]/85 max-w-xl mx-auto leading-relaxed">
            Have questions or want to collaborate with us? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* 2. CARDS CONTAINER */}
      <div className="relative w-full max-w-4xl mx-auto h-auto lg:h-[430px] perspective z-20 px-4 my-10 sm:my-14 flex flex-col lg:block gap-4 lg:gap-0">

        {/* Left Card - Contact Info */}
        <div
          className="relative lg:absolute left-0 lg:left-3 top-0 w-full lg:w-1/2 h-auto lg:h-full z-30 transition-all duration-700 ease-in-out"
          style={{
            transform: isSeparated && canSeparate ? 'translateX(-100px)' : 'translateX(0)',
          }}
        >
          <div className="h-full bg-[#fdfbf7] rounded-2xl sm:rounded-3xl lg:rounded-r-none p-5 sm:p-7 lg:p-7 shadow-xl flex flex-col justify-center relative border border-[#dccdb2] text-left">
            <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 bg-[#fdfbf7] border-t border-r border-[#dccdb2] rotate-45 z-50" />
            <div className="relative z-10">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#3e2410] mb-1.5 leading-tight">
                Let&apos;s get in touch
              </h2>
              <p className="text-[#7a5232] mb-4 leading-relaxed text-xs sm:text-[13px] font-normal">
                Have questions or want to learn more about our programs? We&apos;d love to hear from you.
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-xl bg-[#3a8c7e]/15 border border-[#3a8c7e]/25 flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4 text-[#3a8c7e]" />
                  </div>
                  <div>
                    <p className="text-[9.5px] font-bold text-[#3a8c7e] tracking-wider uppercase mb-0.5">ADDRESS</p>
                    <p className="text-[#3e2410] font-medium text-xs sm:text-sm">Mumbai, Maharashtra 400076</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-xl bg-[#3a8c7e]/15 border border-[#3a8c7e]/25 flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-4 h-4 text-[#3a8c7e]" />
                  </div>
                  <div>
                    <p className="text-[9.5px] font-bold text-[#3a8c7e] tracking-wider uppercase mb-0.5">EMAIL</p>
                    <p className="text-[#3e2410] font-medium text-xs sm:text-sm break-all">info@sahyadriruralconnect.org</p>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <p className="text-[9.5px] font-bold text-[#7a5232] tracking-wider uppercase mb-2">
                  Follow Our Field Stories
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href="https://www.instagram.com/sahyadriwinterschool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-between p-2.5 rounded-xl bg-[#f5efe2] border border-[#dccdb2] hover:border-[#3a8c7e] hover:shadow-md transition-all group/ig"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-xs group-hover/ig:scale-105 transition-transform">
                        <Instagram size={13} />
                      </div>
                      <div className="text-left">
                        <span className="text-[8.5px] font-bold text-[#7a5232] uppercase tracking-wider block">Instagram</span>
                        <span className="text-[11px] font-bold text-[#3e2410] group-hover/ig:text-[#3a8c7e] transition-colors">@sahyadriwinterschool</span>
                      </div>
                    </div>
                    <ArrowUpRight size={13} className="text-[#7a5232] group-hover/ig:text-[#3a8c7e] group-hover/ig:translate-x-0.5 group-hover/ig:-translate-y-0.5 transition-all mr-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card - Contact Form */}
        <div
          className="relative lg:absolute right-0 lg:right-3 top-0 w-full lg:w-1/2 h-auto lg:h-full z-40 transition-all duration-700 ease-in-out"
          style={{
            transform: isSeparated && canSeparate ? 'translateX(100px)' : 'translateX(0)',
          }}
        >
          <div className="h-full bg-[#3e2410] rounded-2xl sm:rounded-3xl lg:rounded-l-none p-5 sm:p-7 lg:p-7 shadow-2xl relative flex flex-col justify-center border border-[#3e2410] text-left">
            <div className="hidden lg:block absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 bg-[#3e2410] rotate-45 z-50" />
            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-[#f5efe2] mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-[13px]
  ${emailError ? 'border-red-400' : 'border-[#dccdb2]/30'}
  ${filledBg(formData.email)}
  focus:outline-none focus:border-[#d4a825] transition-all duration-300
`}

                  />
                  {emailError && <p className="mt-0.5 text-[10px] text-red-300 font-medium">{emailError}</p>}
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-[#f5efe2] mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    required
                    className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-[13px]
  ${phoneError ? 'border-red-400' : 'border-[#dccdb2]/30'}
  ${filledBg(formData.phone)}
  focus:outline-none focus:border-[#d4a825] transition-all duration-300
`}

                  />
                  {phoneError && <p className="mt-0.5 text-[10px] text-red-300 font-medium">{phoneError}</p>}
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-[#f5efe2] mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Your message..."
                    className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-[13px] min-h-[55px]
  ${messageError ? 'border-red-400' : 'border-[#dccdb2]/30'}
  ${filledBg(formData.message)}
  focus:outline-none focus:border-[#d4a825] transition-all duration-300 resize-none
`}

                  />
                  {messageError && <p className="mt-0.5 text-[10px] text-red-300 font-medium">{messageError}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-2.5 px-5 rounded-full bg-[#3a8c7e] hover:bg-[#1f5c54] text-[#f5efe2] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
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
            fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4
            md:absolute md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bg-transparent md:p-0
            animate-in fade-in zoom-in duration-300
          `}>
            <div className={`
              bg-[#fdfbf7] rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-[#dccdb2]
              w-[85%] max-w-sm p-6
              md:min-w-[300px] md:p-8 md:w-auto
            `}>
              <div className="w-16 h-16 rounded-full bg-[#3a8c7e]/15 flex items-center justify-center mb-4 border border-[#3a8c7e]/30">
                <svg className="w-8 h-8 text-[#3a8c7e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#3e2410] text-center mb-2">Sent Successfully!</h3>
              <p className="text-[#7a5232] text-center text-sm md:text-base max-w-xs">
                Thank you for reaching out. We&apos;ll be in touch soon!
              </p>
            </div>
          </div>
        )}

        {/* Failure Popup */}
        {showError && (
          <div className={`
            fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4
            md:absolute md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bg-transparent md:p-0
            animate-in fade-in zoom-in duration-300
          `}>
            <div className={`
              bg-[#fdfbf7] rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-red-200
              w-[85%] max-w-sm p-6
              md:min-w-[300px] md:p-8 md:w-auto
            `}>
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#3e2410] text-center mb-2">Sending Failed</h3>
              <p className="text-[#7a5232] text-center text-sm md:text-base max-w-xs">
                We couldn&apos;t send your message. Please check your internet or try again later.
              </p>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}