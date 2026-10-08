'use client';

import React, { useState } from 'react';
import { GalleryData } from '@/types/templates.types';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';

export const GalleryGridSection = ({ data }: { data?: GalleryData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const itemsPerPage = 6; // To match the 6 images from services

  if (!data || !data.images) return null;

  const totalPages = Math.ceil(data.images.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = data.images.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const lightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex < data.images.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const lightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  return (
    <section className="w-full bg-white py-16 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-[#6b9b8b]" />
            <h4 className="text-[#6b9b8b] font-bold text-sm tracking-widest uppercase">
              {data.subtitle}
            </h4>
            <div className="h-px w-10 bg-[#6b9b8b]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-6">
            {data.title1} <span className="text-[#6b9b8b]">{data.title2}</span>
          </h2>
          {data.description && (
            <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
              {data.description}
            </p>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentImages.map((item, idx) => {
            const globalIndex = startIndex + idx;
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(globalIndex)}
                className="relative group overflow-hidden rounded-2xl bg-gray-100 cursor-pointer shadow-sm w-full aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={item.alt || "Gallery Image"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[var(--color-primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
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
              <FiArrowLeft />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageClick(pageNum)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-colors ${currentPage === pageNum
                  ? 'bg-[#6b9b8b] text-white'
                  : 'bg-[#6b9b8b]/10 text-[#6b9b8b] hover:bg-[#6b9b8b] hover:text-white'
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
              <FiArrowRight />
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <FiX />
            </button>

            <button
              className={`absolute left-4 md:left-10 text-white text-4xl p-2 transition-colors ${lightboxIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:text-gray-300'}`}
              onClick={lightboxPrev}
              disabled={lightboxIndex === 0}
            >
              <FiArrowLeft />
            </button>

            <img
              src={data.images[lightboxIndex].image}
              alt={data.images[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className={`absolute right-4 md:right-10 text-white text-4xl p-2 transition-colors ${lightboxIndex === data.images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-gray-300'}`}
              onClick={lightboxNext}
              disabled={lightboxIndex === data.images.length - 1}
            >
              <FiArrowRight />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
