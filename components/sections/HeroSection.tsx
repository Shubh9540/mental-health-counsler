import React from 'react';
import { HeroData } from '@/types/templates.types';
import Link from 'next/link';

export const HeroSection = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section className="relative flex min-h-[480px] w-full items-center bg-[#173a30] overflow-hidden lg:min-h-[580px] pt-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 h-full w-full">
        <img 
          src={data.image1} 
          alt="" 
          aria-hidden="true" 
          className="h-full w-full object-cover object-[70%_center]" 
        />
        {/* Gradient Overlay that only covers the left text area and completely fades out before the right edge */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[80%] lg:w-[65%] bg-gradient-to-r from-[#173a30] via-[#173a30]/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1250px] px-6 py-12 lg:py-16 lg:px-8">
        <div className="w-full max-w-xl xl:max-w-2xl flex flex-col items-start text-left">
          {/* Subtitle */}
          <div className="mb-6 flex items-center gap-4 w-full">
            <h2 className="text-[11px] font-bold tracking-[0.25em] text-white uppercase sm:text-xs">
              {data.subtitle}
            </h2>
            <div className="h-px w-12 sm:w-16 bg-[var(--color-accent-muted)]" />
          </div>

          {/* Title */}
          <h1 className="mb-6 text-5xl sm:text-6xl lg:text-[75px] leading-[1.1] font-serif font-bold">
            <span className="block text-white">{data.title1}</span>
            <span className="block text-[var(--color-accent-muted)]">{data.title2}</span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg max-w-[500px]">
            {data.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-start gap-4">
            {data.button1 && (
              <Link 
                href={data.button1.url} 
                className="rounded-full border border-white/30 bg-[#599878]/80 backdrop-blur-md px-6 py-2.5 text-sm xl:text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent)] flex items-center justify-center gap-3 pl-8"
              >
                {data.button1.text.replace('>', '').trim()}
                {data.button1.text.includes('>') && (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--color-accent)]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                )}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
