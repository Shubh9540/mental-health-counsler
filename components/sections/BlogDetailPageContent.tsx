import React from 'react';
import { BlogDetailData } from '@/types/templates.types';
import { FaUser, FaRegCalendarAlt, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';

export const BlogDetailPageContent = ({ data }: { data?: BlogDetailData }) => {
  if (!data) return null;

  return (
    <section className="w-full bg-white py-16 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">

        {/* Banner Image */}
        <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden mb-10 shadow-sm">
          <img
            src={data.imageMain}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-6 text-sm font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <FaUser className="text-[#6b9b8b]" />
            <span>By {data.author}</span>
          </div>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt className="text-[#6b9b8b]" />
            <span>{data.date}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-6 leading-tight">
          {data.title}
        </h1>

        {/* Summary */}
        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          {data.summary}
        </p>

        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-[2px] after:bg-[#6b9b8b]">
              {data.section1Title}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              {data.section1Text}
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm">
            <img src={data.section1Image} alt={data.section1Title} className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Quote Block */}
        <div className="bg-[#f4faf8] p-6 md:p-8 mb-8 border-l-[6px] border-[#6b9b8b] flex gap-6 shadow-sm rounded-r-xl">
          <FaQuoteLeft className="text-4xl text-[#6b9b8b] flex-shrink-0" />
          <div>
            <p className="text-xl italic text-[var(--color-primary)] font-medium leading-relaxed mb-4">
              {data.quoteText}
            </p>
            <p className="text-gray-500 font-semibold text-sm">
              — {data.quoteAuthor}
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div className="rounded-xl overflow-hidden shadow-sm order-2 md:order-1">
            <img src={data.section2Image} alt={data.section2Title} className="w-full h-auto object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-[2px] after:bg-[#6b9b8b]">
              {data.section2Title}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              {data.section2Text}
            </p>
            <ul className="flex flex-col gap-4">
              {data.section2List.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-gray-500 text-base leading-relaxed">
                  <FaCheckCircle className="text-[#6b9b8b] mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-[2px] after:bg-[#6b9b8b]">
              {data.section3Title}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              {data.section3Text}
            </p>
            <ul className="flex flex-col gap-4">
              {data.section3List.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-gray-500 text-base leading-relaxed">
                  <FaCheckCircle className="text-[#6b9b8b] mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm">
            <img src={data.section3Image} alt={data.section3Title} className="w-full h-auto object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};
