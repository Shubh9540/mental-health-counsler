import React from 'react';
import { ServicesData } from '@/types/templates.types';
import Link from 'next/link';
import { FaUserAlt, FaUserFriends, FaUsers, FaChild, FaSpa, FaChartBar, FaArrowRight } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUserAlt': return <FaUserAlt />;
    case 'FaUserFriends': return <FaUserFriends />;
    case 'FaUsers': return <FaUsers />;
    case 'FaChild': return <FaChild />;
    case 'FaSpa': return <FaSpa />;
    case 'FaChartBar': return <FaChartBar />;
    default: return <FaUserAlt />;
  }
};

export const ServicesSection = ({ data }: { data?: ServicesData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-px bg-[var(--color-primary)]" />
            <h4 className="text-[var(--color-primary)] font-bold text-sm tracking-widest uppercase">
              {data.subtitle}
            </h4>
            <div className="w-10 h-px bg-[var(--color-primary)]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-[var(--color-primary)]">{data.title1}</span>
            <span className="text-[var(--color-accent-muted)]"> {data.title2}</span>
          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service) => (
            <Link
              href={service.url}
              key={service.id}
              className="flex flex-col group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="p-4 sm:p-5 flex items-start gap-3 flex-1">
                {/* Icon */}
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#e8f0ea] text-[var(--color-primary)] flex items-center justify-center text-xl">
                  {renderIcon(service.icon)}
                </div>

                {/* Text & Link */}
                <div className="flex flex-col flex-1">
                  <h3 className="text-base font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors line-clamp-1 sm:line-clamp-none">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-[var(--color-accent)] font-semibold text-sm mt-auto">
                    Read More <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
