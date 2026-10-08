import React from 'react';
import { WhatWeDoData } from '@/types/templates.types';
import { FaLaptopMedical, FaBrain, FaUserMd, FaFileMedical } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaLaptopMedical': return <FaLaptopMedical />;
    case 'FaBrain': return <FaBrain />;
    case 'FaUserMd': return <FaUserMd />;
    case 'FaFileMedical': return <FaFileMedical />;
    default: return <FaLaptopMedical />;
  }
};

export const WhatWeDoSection = ({ data }: { data?: WhatWeDoData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-8">

        {/* Left Side: Content */}
        <div className="w-full lg:w-[45%] flex flex-col lg:pr-4">

          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-10 bg-[var(--color-primary)]" />
            <h4 className="text-[var(--color-primary)] font-bold text-sm tracking-widest uppercase">
              {data.subtitle}
            </h4>
            <div className="h-px w-10 bg-[var(--color-primary)]" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight mb-3">
            <span className="text-[var(--color-primary)]">{data.title1} </span>
            <span className="text-[var(--color-accent-muted)]">{data.title2}</span>
          </h2>

          {/* Subheading */}
          {data.subheading && (
            <h3 className="text-2xl font-medium text-[#e48b71] mb-3">
              {data.subheading}
            </h3>
          )}

          {/* Description */}
          <p className="text-gray-500 text-base mb-6 leading-relaxed max-w-xl">
            {data.description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {(data.features || []).map((feature, idx) => {
              const borderClasses = 
                idx === 0 ? 'border-b border-gray-200 sm:border-r' :
                idx === 1 ? 'border-b border-gray-200' :
                idx === 2 ? 'border-b sm:border-b-0 sm:border-r border-gray-200' : '';
              
              const paddingClasses = 
                idx % 2 === 0 ? 'py-4 sm:pr-6' : 'py-4 sm:pl-6';

              return (
              <div
                key={feature.id}
                className={`flex items-start gap-4 ${borderClasses} ${paddingClasses}`}
              >
                {/* Icon */}
                <div className="w-11 h-11 shrink-0 rounded-full bg-[#e8f0ea] text-[var(--color-primary)] flex items-center justify-center text-lg">
                  {renderIcon(feature.icon)}
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-[var(--color-primary)] mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              );
            })}
          </div>

        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end pr-4 lg:pr-0 mt-8 lg:mt-0">
          <div className="relative w-full max-w-full aspect-[4/3] z-10">

            {/* Background Decorative Blocks */}
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#e8f0ea] rounded-3xl z-0" />
            <div className="absolute -bottom-6 -right-2 w-48 h-64 bg-[var(--color-primary)] rounded-3xl z-0" />

            {/* Main Image */}
            <div className="relative w-full h-full z-10 rounded-xl overflow-hidden shadow-xl bg-white border border-gray-100">
              <img
                src={data.image}
                alt={data.title1}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
