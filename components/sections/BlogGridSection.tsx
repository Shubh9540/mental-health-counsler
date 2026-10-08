'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BlogsData } from '@/types/templates.types';
import { FaArrowRight, FaUser, FaRegCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const BlogGridSection = ({ data }: { data?: BlogsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  if (!data || !data.blogs) return null;

  const totalPages = Math.ceil(data.blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = data.blogs.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-[#6b9b8b]" />
            <h4 className="text-[#6b9b8b] font-bold text-sm tracking-widest uppercase">
              {data.subtitle}
            </h4>
            <div className="h-px w-10 bg-[#6b9b8b]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-6">
            {data.title1} <span className="text-[#6b9b8b]">{data.title2}</span>
          </h2>

          <p className="text-gray-500 max-w-2xl text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <Link 
              key={blog.id} 
              href={`/blog/${blog.id}`}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group block hover:shadow-md transition-shadow"
            >

              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Box */}
              <div className="p-6 md:p-8 flex flex-col flex-grow text-left">

                {/* Meta Row (Author | Date) */}
                <div className="flex items-center gap-4 mb-4 text-sm font-medium text-gray-500">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-[#6b9b8b]" />
                    <span>{blog.author || blog.tag}</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-2">
                    <FaRegCalendarAlt className="text-[#6b9b8b]" />
                    <span>{blog.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] mb-4 leading-tight group-hover:text-[#6b9b8b] transition-colors">
                  {blog.title}
                </h3>

                {/* Summary */}
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {blog.summary}
                </p>

                {/* Read More */}
                <div
                  className="inline-flex items-center gap-2 text-[#6b9b8b] font-bold text-sm tracking-wide group-hover:text-[#5a8677] transition-colors mt-auto"
                >
                  Read More <FaArrowRight />
                </div>

              </div>

            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-14 flex items-center justify-center gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-[#6b9b8b]/10 text-[#6b9b8b] hover:bg-[#6b9b8b] hover:text-white'
                }`}
            >
              <FaChevronLeft className="text-xs" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold text-sm transition-colors ${currentPage === pageNum
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-[#6b9b8b]/10 text-[#6b9b8b] hover:bg-[#6b9b8b] hover:text-white'
                }`}
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
