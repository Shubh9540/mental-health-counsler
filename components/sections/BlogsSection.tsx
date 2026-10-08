import React from 'react';
import { BlogsData } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa';

export const BlogsSection = ({ data }: { data?: BlogsData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-12 bg-[#fcfaf9]">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">

        {/* Header */}
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

          <p className="text-gray-500 max-w-2xl text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group">

              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Box */}
              <div className="p-8 flex flex-col flex-grow text-left">

                {/* Meta Row (Tag | Date) */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-[#feeae6] text-[#e48b71] rounded-full px-3 py-1 text-xs font-semibold">
                    {blog.tag}
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500 text-sm font-medium">
                    {blog.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#1f2937] mb-4 leading-tight group-hover:text-[var(--color-primary)] transition-colors">
                  {blog.title}
                </h3>

                {/* Summary */}
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {blog.summary}
                </p>

                {/* Read More */}
                <a
                  href={blog.url || '#'}
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold text-sm tracking-wide group-hover:text-[#e48b71] transition-colors mt-auto"
                >
                  Read More <FaArrowRight />
                </a>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
