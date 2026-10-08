import React from 'react';
import { TeamData } from '@/types/templates.types';

export const TeamSection = ({ data }: { data?: TeamData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-12 bg-[#fcfaf9] relative">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-[var(--color-primary)]" />
            <h4 className="text-[var(--color-primary)] font-bold text-sm tracking-widest uppercase">
              {data.subtitle}
            </h4>
            <div className="h-px w-10 bg-[var(--color-primary)]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-6">
            {data.title1} <span className="text-[var(--color-primary)]">{data.title2}</span>
          </h2>

          {data.description && (
            <p className="text-gray-500 max-w-2xl text-base leading-relaxed">
              {data.description}
            </p>
          )}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.members.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group">

              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Box */}
              <div className="p-6 flex flex-col text-left">
                <h3 className="text-xl font-bold text-[#1f2937] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-[#e48b71]">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
