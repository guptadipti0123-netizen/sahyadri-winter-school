'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, CheckCircle, XCircle, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Noto_Sans } from 'next/font/google';

const noto_Sans = Noto_Sans({
  subsets: ['Cyrillic'],
  weight: ['400', '700', '800', '900'],
  display: 'swap',
});

// --- FORM FIELD DEFINITIONS (split into two sections) ---
const personalFields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
  { name: 'email', label: 'Email Id', type: 'email', placeholder: 'your@email.com' },
  { name: 'contactNumber', label: 'Contact Number', type: 'tel', placeholder: '9876543210' },
  { name: 'college', label: 'College / Institute', type: 'text', placeholder: 'Your college or institute name' },
  { name: 'course', label: 'Course / Program', type: 'text', placeholder: 'e.g. B.Tech, BA, MSW' },
  { name: 'yearOfStudy', label: 'Year of Study', type: 'text', placeholder: 'e.g. 2nd Year' },
  { name: 'interests', label: 'Interests / Hobbies', type: 'textarea', placeholder: 'Tell us about your interests and hobbies...' },
  { name: 'whyJoin', label: 'Why do you want to join the Camp?', type: 'textarea', placeholder: 'Share your motivation...' },
  { name: 'academicProfile', label: 'Academic and Co-curricular Profile', type: 'textarea', placeholder: 'Describe your academic achievements and co-curricular activities...' },
  { name: 'sports', label: 'Recent Book Read (if any)', type: 'textarea', placeholder: 'Recent book you have read' },
];

const additionalFields = [
  { name: 'musicDanceArt', label: 'Music / Dance / Art Interest', type: 'textarea', placeholder: 'Share your creative interests...' },
  { name: 'trekkingExperience', label: 'Sports / Trekking / Hiking Experience', type: 'textarea', placeholder: 'Any sports / trekking / hiking experience...' },
  { name: 'fieldNgoExperience', label: 'Field / NGO Experience', type: 'textarea', placeholder: 'Any field work or NGO experience...' },
  { name: 'previousCampExperience', label: 'Previous Camp Experience', type: 'textarea', placeholder: 'Any previous camp or similar experience...' },
  { name: 'medicalIssues', label: 'Medical Issues / Allergies', type: 'textarea', placeholder: 'Any medical conditions or allergies we should know about...' },
  { name: 'fellowshipProgram', label: 'Fellowship Program', type: 'text', placeholder: 'Enter fellowship program details (if any)' },
  { name: 'fellowshipDetails', label: 'Fellowship Details', type: 'textarea', placeholder: 'If yes, please provide details about the fellowship...' },
  { name: 'expectations', label: 'Expectations from Camp', type: 'textarea', placeholder: 'What do you expect to gain from this camp...' },
  { name: 'skills', label: 'Skills / Strengths', type: 'textarea', placeholder: 'Describe your key skills and strengths...' },
];

const allFields = [...personalFields, ...additionalFields];

// --- OPTIONAL FIELDS (not required for submission) ---
const optionalFieldNames = new Set([
  'interests',
  'academicProfile',
  'sports',
  ...additionalFields.map((f) => f.name).filter((n) => n !== 'medicalIssues' && n !== 'expectations'),
]);

// --- INITIAL FORM STATE ---
const initialFormState = allFields.reduce((acc, field) => {
  acc[field.name] = '';
  return acc;
}, {});

export default function RegisterFormPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const fieldRefs = useRef({});
  const successTimerRef = useRef(null);

  // Clean up success timer on unmount
  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  // Auto-dismiss success message after 5 seconds
  useEffect(() => {
    if (submitStatus === 'success') {
      successTimerRef.current = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }
    };
  }, [submitStatus]);

  // --- VALIDATION ---
  const validate = useCallback(() => {
    const newErrors = {};

    allFields.forEach((field) => {
      if (optionalFieldNames.has(field.name)) return; // Skip optional fields
      const value = formData[field.name]?.trim();
      if (!value) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    // Email format
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    // Phone format (Indian 10-digit)
    if (formData.contactNumber) {
      const cleaned = formData.contactNumber.replace(/\D/g, '');
      if (!/^[6-9]\d{9}$/.test(cleaned)) {
        newErrors.contactNumber = 'Enter a valid 10-digit phone number';
      }
    }

    setErrors(newErrors);
    return newErrors;
  }, [formData]);

  // --- SCROLL TO FIRST ERROR ---
  const scrollToFirstError = useCallback((validationErrors) => {
    // Find the first field with an error (in DOM order)
    const firstErrorField = allFields.find((field) => validationErrors[field.name]);
    if (firstErrorField && fieldRefs.current[firstErrorField.name]) {
      fieldRefs.current[firstErrorField.name].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      // Focus the input after scrolling
      setTimeout(() => {
        const el = fieldRefs.current[firstErrorField.name];
        const input = el?.querySelector('input, textarea, select');
        if (input) input.focus();
      }, 400);
    }
  }, []);

  // --- HANDLE CHANGE ---
  const handleChange = (e) => {
    const { name, value } = e.target;

    // For phone, allow only digits, +, -, spaces
    if (name === 'contactNumber') {
      const filtered = value.replace(/[^\d+\-\s]/g, '');
      setFormData((prev) => ({ ...prev, [name]: filtered }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // --- HANDLE SUBMIT ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      // Scroll to the first error field
      setTimeout(() => scrollToFirstError(validationErrors), 100);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(initialFormState);
        // Scroll to top so user sees the success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Shared input styling helper ---
  const inputBaseClass = (fieldName) =>
    `w-full px-4 py-3 rounded-xl border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sea_green/50 focus:border-sea_green transition-all duration-300 text-sm ${errors[fieldName] ? 'border-red-400 ring-1 ring-red-300' : 'border-gray-200 hover:border-gray-300'
    }`;

  // --- Render a single field ---
  const renderField = (field) => {
    const isOptional = optionalFieldNames.has(field.name);
    return (
      <div
        key={field.name}
        ref={(el) => { fieldRefs.current[field.name] = el; }}
        className="relative"
      >
        <label
          htmlFor={field.name}
          className="block text-sm font-semibold text-gray-700 mb-1.5"
        >
          {field.label} {!isOptional && <span className="text-red-400">*</span>}
        </label>

        {/* TEXT / EMAIL / TEL */}
        {(field.type === 'text' || field.type === 'email' || field.type === 'tel') && (
          <input
            id={field.name}
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={!isOptional}
            className={inputBaseClass(field.name)}
          />
        )}

        {/* TEXTAREA */}
        {field.type === 'textarea' && (
          <textarea
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            rows={3}
            required={!isOptional}
            className={`${inputBaseClass(field.name)} resize-none`}
          />
        )}

        {/* SELECT */}
        {field.type === 'select' && (
          <select
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required={!isOptional}
            className={inputBaseClass(field.name)}
          >
            <option value="" disabled>
              Select an option
            </option>
            {field.options
              .filter((opt) => opt !== '')
              .map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
          </select>
        )}

        {/* Error Message */}
        {errors[field.name] && (
          <p className="mt-1.5 text-xs text-red-500 font-medium flex items-center gap-1">
            <XCircle className="w-3.5 h-3.5 shrink-0" />
            {errors[field.name]}
          </p>
        )}
      </div>
    );
  };

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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-evergreen/50 backdrop-blur-md mb-4 md:mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-evergreen animate-pulse" />
            <p className="text-xs md:text-sm font-bold text-evergreen tracking-wide uppercase">
              Registration
            </p>
          </div>

          <h1 className={`${noto_Sans.className} font-extrabold font-serif text-2xl sm:text-3xl md:text-6xl mb-3 text-evergreen leading-tight drop-shadow-md`}>
            Registration Form
          </h1>

          <p className="text-base md:text-xl italic text-pine_teal/80">
            Fill in the form below to apply for Sahyadri Rural Connect.
          </p>
        </div>
      </section>

      {/* ================= SUCCESS / ERROR STATUS BANNERS ================= */}
      {submitStatus === 'success' && (
        <div className="px-4 md:px-6 relative z-20 max-w-5xl mx-auto mb-6">
          <div className="p-5 rounded-2xl bg-green-50 border border-green-200 flex items-start gap-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-green-800 text-base">
                Registration submitted successfully!
              </h4>
              <p className="text-green-700 text-sm mt-1">
                Thank you for registering. We&apos;ll review your application and get in touch soon.
              </p>
            </div>
            <button
              onClick={() => setSubmitStatus(null)}
              className="text-green-400 hover:text-green-600 transition-colors p-1"
              aria-label="Dismiss success message"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="px-4 md:px-6 relative z-20 max-w-5xl mx-auto mb-6">
          <div className="p-5 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-red-800 text-base">
                Submission failed
              </h4>
              <p className="text-red-700 text-sm mt-1">
                Something went wrong. Please check your connection and try again.
              </p>
            </div>
            <button
              onClick={() => setSubmitStatus(null)}
              className="text-red-400 hover:text-red-600 transition-colors p-1"
              aria-label="Dismiss error message"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* ================= FORM SECTION ================= */}
      <section className="px-4 md:px-6 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Back to Register link */}
          <Link
            href="/register"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sea_green hover:text-dark_emerald mb-6 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Details
          </Link>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">

            {/* Form Header */}
            <div className="mb-8 pb-6 border-b border-gray-100">
              <h2 className="font-serif text-xl md:text-3xl font-bold text-evergreen mb-2">
                Camp Registration
              </h2>
              <p className="text-sm text-gray-500">
                Fields marked with <span className="text-red-400 font-semibold">*</span> are required. Please fill in accurate details.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>

              {/* ---- PART 1: Personal & Academic Details ---- */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sea_green text-white text-sm font-bold shadow-md">
                    1
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-pine_teal">
                    Personal &amp; Academic Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  {personalFields.map(renderField)}
                </div>
              </div>

              {/* ---- PART 2: Additional Information ---- */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sea_green text-white text-sm font-bold shadow-md">
                    2
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-pine_teal">
                    Experience &amp; Additional Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  {additionalFields.map(renderField)}
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-6 border-t border-gray-100">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto md:min-w-[280px] mx-auto py-3.5 px-8 rounded-xl bg-gradient-to-r from-sea_green to-dark_emerald text-white font-bold text-sm md:text-base flex items-center justify-center gap-2.5 hover:from-dark_emerald hover:to-evergreen hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Registration
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
