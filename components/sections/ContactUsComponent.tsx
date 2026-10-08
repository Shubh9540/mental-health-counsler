import React from 'react';
import { ContactUsData } from '@/types/templates.types';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaArrowRight, FaCommentDots, FaTag } from 'react-icons/fa';

export const ContactUsComponent = ({ data }: { data?: ContactUsData }) => {
  if (!data) return null;

  return (
    <section className="w-full relative bg-white">
      {/* Top Content Area */}
      <div className="w-full flex flex-col lg:flex-row relative z-10">

        {/* Left Side: Content & Info */}
        <div className="w-full lg:w-[50%] bg-white py-16 lg:py-12 px-6 lg:pl-[max(2rem,calc((100vw-1250px)/2))] lg:pr-16 flex flex-col justify-center">

          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
            <span className="text-sm font-bold tracking-[0.15em] text-[var(--color-accent)] uppercase">
              {data.subtitle}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-primary)] mb-6 leading-tight">
            {data.title1} <br />
            <span className="text-[var(--color-accent-muted)]">{data.title2}</span>
          </h2>

          {/* Description */}
          <p className="text-[var(--color-text-light)] text-lg mb-12 max-w-lg leading-relaxed">
            {data.description}
          </p>

          {/* Contact Items List */}
          <div className="flex flex-col gap-8">

            {/* Address */}
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-[var(--color-accent-muted)]/10 text-[var(--color-accent-muted)] flex items-center justify-center text-xl shrink-0 group-hover:bg-[var(--color-accent-muted)] group-hover:text-white transition-all duration-300">
                <FaMapMarkerAlt />
              </div>
              <div className="pt-1">
                <h4 className="text-lg font-bold text-[var(--color-primary)] mb-1">{data.contactInfo.addressTitle}</h4>
                <p className="text-[var(--color-text-light)] leading-relaxed whitespace-pre-line text-sm md:text-base">
                  {data.contactInfo.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-[var(--color-accent-muted)]/10 text-[var(--color-accent-muted)] flex items-center justify-center text-xl shrink-0 group-hover:bg-[var(--color-accent-muted)] group-hover:text-white transition-all duration-300">
                <FaPhoneAlt />
              </div>
              <div className="pt-1">
                <h4 className="text-lg font-bold text-[var(--color-primary)] mb-1">{data.contactInfo.phoneTitle}</h4>
                <p className="text-[var(--color-text-light)] leading-relaxed whitespace-pre-line text-sm md:text-base">
                  {data.contactInfo.phone}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-[var(--color-accent-muted)]/10 text-[var(--color-accent-muted)] flex items-center justify-center text-xl shrink-0 group-hover:bg-[var(--color-accent-muted)] group-hover:text-white transition-all duration-300">
                <FaEnvelope />
              </div>
              <div className="pt-1">
                <h4 className="text-lg font-bold text-[var(--color-primary)] mb-1">{data.contactInfo.emailTitle}</h4>
                <p className="text-[var(--color-text-light)] leading-relaxed whitespace-pre-line text-sm md:text-base">
                  {data.contactInfo.email}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Image & Overlapping Form */}
        <div className="w-full lg:w-[50%] relative min-h-[500px] lg:min-h-0 flex items-center justify-center p-6 lg:p-0">

          {/* Background Image (fills right side) */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src={data.image}
              alt={data.title1}
              className="w-full h-full object-cover"
            />
            {/* Subtle Overlay to ensure form stands out */}
            <div className="absolute inset-0 bg-[var(--color-primary)]/20" />
          </div>

          {/* Overlapping Form Card */}
          <div className="relative z-10 w-full max-w-xl bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-8 md:p-12 lg:-ml-24 xl:-ml-32 mt-10 lg:mt-0 mb-10 lg:mb-0 border border-gray-100">

            <h3 className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-3">
              {data.form?.title}
            </h3>
            <p className="text-[var(--color-text-light)] text-sm md:text-base mb-8">
              {data.form?.description}
            </p>

            <form className="flex flex-col gap-5">

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    placeholder={data.form?.namePlaceholder}
                    className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 text-sm text-[var(--color-primary)] bg-gray-50/50 focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                    required
                  />
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="email"
                    placeholder={data.form?.emailPlaceholder}
                    className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 text-sm text-[var(--color-primary)] bg-gray-50/50 focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Phone & Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="tel"
                    placeholder={data.form?.phonePlaceholder}
                    className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 text-sm text-[var(--color-primary)] bg-gray-50/50 focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                  />
                </div>
                <div className="relative">
                  <FaTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    placeholder={data.form?.subjectPlaceholder}
                    className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 text-sm text-[var(--color-primary)] bg-gray-50/50 focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <FaCommentDots className="absolute left-4 top-[18px] text-gray-400 text-sm" />
                <textarea
                  placeholder={data.form?.messagePlaceholder}
                  rows={4}
                  className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-200 text-sm text-[var(--color-primary)] bg-gray-50/50 focus:outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 w-full sm:w-auto self-start bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white font-bold py-3.5 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
              >
                {data.form?.buttonText} <FaArrowRight className="text-xs" />
              </button>
            </form>

          </div>
        </div>
      </div>

      {/* Full Width Map at the Bottom */}
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative z-0 -mt-1">
        <iframe
          src={data.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="transition-all duration-700"
        ></iframe>
      </div>
    </section>
  );
};
