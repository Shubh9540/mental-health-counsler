'use client';

import React, { useState } from 'react';
import { VideoGalleryData } from '@/types/templates.types';
import { FaPlay } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export const VideoGallerySection = ({ data }: { data?: VideoGalleryData }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  if (!data || !data.videos) return null;

  return (
    <section className="w-full bg-[#f8fcfb] py-16 lg:py-12">
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

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.videos.map((video) => (
            <div key={video.id} className="flex flex-col gap-4 group">
              {/* Thumbnail Container */}
              <div
                onClick={() => setActiveVideo(video.youtubeId)}
                className="relative overflow-hidden rounded-2xl bg-gray-200 cursor-pointer shadow-sm w-full aspect-[4/3] flex items-center justify-center"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#6b9b8b] pl-1 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <FaPlay className="text-2xl" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Video Title */}
              <h3 className="text-xl font-bold text-[var(--color-primary)] px-2 group-hover:text-[#6b9b8b] transition-colors">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        {/* YouTube Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
            onClick={() => setActiveVideo(null)}
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition-colors z-50"
              onClick={() => setActiveVideo(null)}
            >
              <FiX />
            </button>

            <div
              className="relative w-full max-w-[1000px] aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
