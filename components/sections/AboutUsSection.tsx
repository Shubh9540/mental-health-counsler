'use client';
import React from 'react';
import { AboutUsData } from '@/types/templates.types';
import { FaUserAlt, FaUsers, FaPlay, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUserAlt': return <FaUserAlt />;
    case 'FaUsers': return <FaUsers />;
    default: return <FaUserAlt />;
  }
};

export const AboutUsSection = ({ data }: { data?: AboutUsData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

        {/* Left Side: Images */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start pt-12 pl-6 sm:pl-12">

          {/* Background Decorative Blocks */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#e8f0ea] z-0" />
          <div className="absolute top-20 -left-4 w-40 h-4/5 bg-[var(--color-primary)] z-0" />

          {/* Main Image */}
          <div className="relative w-full max-w-lg z-10">
            <div className="relative w-full aspect-square sm:aspect-[4/4.2] shadow-xl overflow-hidden bg-white">
              <img
                src={data.imageMain}
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Play Button */}
            <div className="absolute -top-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 bg-[var(--color-accent)] rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer border-4 border-white">
              <FaPlay className="ml-1" />
            </div>

            {/* Experience Box */}
            <div className="absolute bottom-8 right-0 sm:-right-6 w-40 h-40 sm:w-44 sm:h-44 bg-[var(--color-accent)] text-white flex flex-col items-center justify-center p-6 shadow-xl border-4 border-white">
              <h3 className="text-4xl sm:text-4xl font-bold mb-2">{data.yearsOfExperience}</h3>
              <div className="w-8 h-px bg-white/50 mb-3" />
              <p className="text-center text-sm sm:text-base font-medium leading-snug">{data.experienceLabel || ''}</p>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col mt-16 lg:mt-0 lg:pl-4">

          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-3">
            <h4 className="text-[var(--color-accent)] font-semibold text-sm tracking-[0.15em] uppercase">
              {data.subtitle}
            </h4>
            <div className="h-px w-16 bg-[var(--color-accent)]" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-[1.2] mb-6">
            <span className="text-[var(--color-primary)]">{data.title1}</span>
            <span className="text-[var(--color-accent)]"> {data.title2}</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed max-w-[95%]">
            {data.description1}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 mb-10">
            {data.features?.map((feature, idx) => (
              <div key={feature.id} className={`flex gap-3 sm:gap-4 ${idx > 0 ? 'sm:border-l sm:border-gray-200 sm:pl-6' : ''}`}>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shrink-0 text-lg sm:text-xl shadow-sm ${idx === 0 ? 'bg-[#769d8a]' : 'bg-[var(--color-primary)]'}`}>
                  {renderIcon(feature.icon)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[var(--color-primary)] mb-1.5">{feature.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          {data.button && (
            <div>
              <Link
                href={data.button.url}
                className="inline-flex items-center gap-3 bg-[var(--color-accent)] hover:bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-xl font-semibold transition-colors shadow-md"
              >
                {data.button.text.replace('->', '').trim()}
                {data.button.text.includes('->') && <FaArrowRight className="text-sm font-light" />}
              </Link>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
