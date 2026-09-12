'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, CheckCircle, XCircle, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

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
    `w-full px-4 py-3 rounded-xl border bg-white text-[#3e2410] placeholder:text-[#7a5232]/50 focus:outline-none focus:ring-2 focus:ring-[#3a8c7e]/30 focus:border-[#3a8c7e] transition-all duration-300 text-sm ${errors[fieldName] ? 'border-red-400 ring-1 ring-red-300' : 'border-[#dccdb2] hover:border-[#3a8c7e]/50'
    }`;

  // --- Render a single field ---
  const renderField = (field) => {
    const isOptional = optionalFieldNames.has(field.name);
    return (
      <div
        key={field.name}
        ref={(el) => { fieldRefs.current[field.name] = el; }}
        className="relative text-left"
      >
        <label
          htmlFor={field.name}
          className="block text-sm font-semibold text-[#3e2410] mb-1.5"
        >
          {field.label} {!isOptional && <span className="text-red-500">*</span>}
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
          <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
            <XCircle className="w-3.5 h-3.5 shrink-0" />
            {errors[field.name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-[#f5efe2] text-[#3e2410]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 md:pt-36 pb-8 md:pb-12 overflow-hidden bg-gradient-to-b from-[#241407] via-[#3e2410] to-[#1f5c54] text-[#f5efe2]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3a8c7e]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c8880a]/15 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5efe2]/15 border border-[#f5efe2]/25 backdrop-blur-md mb-4 md:mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#d4a825] animate-pulse" />
            <p className="text-xs md:text-sm font-bold text-[#d4a825] tracking-widest uppercase">
              Registration
            </p>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 text-[#f5efe2] leading-tight drop-shadow-sm">
            Registration <span className="text-[#d4a825] italic font-serif">Form</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#f5efe2]/85 max-w-2xl mx-auto leading-relaxed">
            Fill in the form below to apply for Sahyadri Rural Connect fellowship programs.
          </p>
        </div>
      </section>

      {/* ================= SUCCESS / ERROR STATUS BANNERS ================= */}
      {submitStatus === 'success' && (
        <div className="px-4 md:px-6 relative z-20 max-w-5xl mx-auto my-6">
          <div className="p-5 rounded-2xl bg-[#3a8c7e]/15 border border-[#3a8c7e]/30 flex items-start gap-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="w-10 h-10 rounded-full bg-[#3a8c7e]/20 flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6 text-[#1f5c54]" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-bold text-[#1f5c54] text-base font-serif">
                Registration submitted successfully!
              </h4>
              <p className="text-[#3e2410] text-sm mt-1">
                Thank you for registering. We&apos;ll review your application and get in touch soon.
              </p>
            </div>
            <button
              onClick={() => setSubmitStatus(null)}
              className="text-[#7a5232] hover:text-[#3e2410] transition-colors p-1"
              aria-label="Dismiss success message"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="px-4 md:px-6 relative z-20 max-w-5xl mx-auto my-6">
          <div className="p-5 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-bold text-red-800 text-base font-serif">
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
      <section className="px-4 md:px-6 py-10 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Back to Register link */}
          <Link
            href="/register"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3a8c7e] hover:text-[#1f5c54] mb-6 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Details
          </Link>

          <div className="bg-[#fdfbf7] rounded-2xl sm:rounded-3xl shadow-sm border border-[#dccdb2] p-5 sm:p-8 md:p-10 text-left">

            {/* Form Header */}
            <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-[#dccdb2]">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#3e2410] mb-2">
                Camp Registration
              </h2>
              <p className="text-xs sm:text-sm text-[#7a5232]">
                Fields marked with <span className="text-red-500 font-semibold">*</span> are required. Please fill in accurate details.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>

              {/* ---- PART 1: Personal & Academic Details ---- */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3a8c7e] text-[#f5efe2] text-sm font-bold shadow-xs">
                    1
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-[#3e2410]">
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
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3a8c7e] text-[#f5efe2] text-sm font-bold shadow-xs">
                    2
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-[#3e2410]">
                    Experience &amp; Additional Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  {additionalFields.map(renderField)}
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-6 border-t border-[#dccdb2]">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto md:min-w-[280px] mx-auto py-3.5 px-8 rounded-full bg-[#3a8c7e] hover:bg-[#1f5c54] text-[#f5efe2] font-bold text-sm md:text-base flex items-center justify-center gap-2.5 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 shadow-md cursor-pointer"
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
