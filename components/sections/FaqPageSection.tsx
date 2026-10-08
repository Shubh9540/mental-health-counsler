'use client';
import React, { useState } from 'react';
import { FaqData } from '@/types/templates.types';
import { FaPlus, FaMinus } from 'react-icons/fa';

export const FaqPageSection = ({ data }: { data?: FaqData }) => {
  const [openId, setOpenId] = useState<string | null>(data?.faqs?.[0]?.id || null);

  if (!data || !data.faqs) return null;

  return (
    <section className="w-full bg-white py-20 lg:py-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        
        {/* Header Centered */}
        <div className="mb-16 text-center flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-[#6b9b8b]" />
            <h4 className="text-[#6b9b8b] font-bold text-sm tracking-widest uppercase">
              {data.subtitle}
            </h4>
            <div className="h-px w-10 bg-[#6b9b8b]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-4">
            {data.title1} <span className="text-[#6b9b8b]">{data.title2}</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left Column - Image (Sticky so it doesn't move when FAQ opens/closes) */}
          <div className="w-full lg:w-[50%] lg:sticky lg:top-32">
            <div className="w-full h-[500px] lg:h-[750px] rounded-xl overflow-hidden shadow-sm">
              <img
                src={data.image}
                alt="FAQ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - FAQ Content */}
          <div className="w-full lg:w-[50%] flex flex-col gap-4">
            {data.faqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              const formattedIndex = (index + 1).toString().padStart(2, '0');

              return (
                <div 
                  key={faq.id} 
                  className={`w-full rounded-xl border transition-colors duration-300 ${
                    isOpen ? 'bg-[#f4faf8] border-[#e2f1ec]' : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center shrink-0 font-bold transition-colors ${
                        isOpen ? 'bg-[#d8efe8] text-[#6b9b8b]' : 'bg-[#eef5f3] text-[#6b9b8b]'
                      }`}>
                        {formattedIndex}
                      </div>
                      <span className={`font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-[var(--color-primary)]' : 'text-[var(--color-primary)]'}`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`shrink-0 ml-4 font-bold text-lg transition-colors ${isOpen ? 'text-[var(--color-primary)]' : 'text-gray-400'}`}>
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 md:pl-[88px] md:pr-10 md:pb-8 text-gray-500 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
