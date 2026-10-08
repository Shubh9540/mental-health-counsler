import React from 'react';
import Link from 'next/link';
import { AboutPageData } from '@/types/templates.types';
import { FaArrowRight, FaBrain, FaUsers, FaLeaf, FaCalendarAlt } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaBrain': return <FaBrain />;
    case 'FaUsers': return <FaUsers />;
    case 'FaLeaf': return <FaLeaf />;
    default: return <FaBrain />;
  }
};

export const AboutPageSection = ({ data }: { data?: AboutPageData }) => {
  if (!data) return null;

  return (
    <section className="w-full bg-white py-16 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Side: Images */}
          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[650px]">

            {/* Front Image (Left) */}
            <div className="absolute left-0 top-0 w-[48%] h-[88%] rounded-2xl overflow-hidden shadow-lg z-10">
              <img
                src={data.imageFront}
                alt="Therapy session"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Back Image (Right) */}
            <div className="absolute right-0 bottom-0 w-[48%] h-[88%] rounded-2xl overflow-hidden shadow-md z-0">
              <img
                src={data.imageBack}
                alt="Supportive care"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute z-20 left-1/2 bottom-[15%] transform -translate-x-1/2 bg-white rounded-2xl shadow-xl p-4 md:p-6 flex items-center gap-4 border border-gray-100 min-w-[240px]">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#3d6556] text-white flex items-center justify-center text-2xl shrink-0">
                <FaCalendarAlt />
              </div>
              <div className="flex flex-col">
                <span className="text-[#3d6556] font-extrabold text-xl md:text-2xl leading-tight">
                  {data.experienceText1}
                </span>
                <span className="text-gray-500 text-sm md:text-base font-medium">
                  {data.experienceText2}
                </span>
              </div>
            </div>

          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col text-left">

            {/* Subtitle */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#6b9b8b]" />
              <h4 className="text-[#6b9b8b] font-bold text-sm tracking-widest uppercase">
                {data.subtitle}
              </h4>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.15]">
              <span className="text-[var(--color-primary)] block mb-2">{data.title1}</span>
              <span className="text-[#6b9b8b] block">{data.title2}</span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
              {data.description}
            </p>

            {/* Features Row */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 lg:gap-8 mb-12">
              {data.features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#e8efec] text-[var(--color-primary)] flex items-center justify-center text-xl shrink-0">
                    {renderIcon(feature.icon)}
                  </div>
                  <span className="text-[var(--color-primary)] font-bold text-sm leading-tight max-w-[100px]">
                    {feature.title.split(' ').map((word, i) => (
                      <React.Fragment key={i}>
                        {word}
                        <br />
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div>
              <Link
                href={data.buttonUrl}
                className="inline-flex items-center justify-center gap-3 bg-[#6b9b8b] hover:bg-[#5a8677] text-white rounded-full px-8 py-3.5 font-bold text-base transition-colors shadow-sm"
              >
                {data.buttonText}
                <div className="w-6 h-6 rounded-full bg-white text-[#6b9b8b] flex items-center justify-center text-xs">
                  <FaArrowRight />
                </div>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
