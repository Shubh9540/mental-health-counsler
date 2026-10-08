'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { TestimonialsData } from '@/types/templates.types';
import useEmblaCarousel from 'embla-carousel-react';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaStar, FaRegStar } from 'react-icons/fa';

export const TestimonialSection = ({ data }: { data?: TestimonialsData }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const init = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    };

    // Delay initialization slightly to avoid sync state update warnings during render
    Promise.resolve().then(init);

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', init);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', init);
    };
  }, [emblaApi]);

  if (!data || !data.testimonials) return null;

  return (
    <section className="bg-[var(--color-primary)] py-20 lg:py-12 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 relative flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16">

        {/* Left Side: Content & Controls */}
        <div className="w-full lg:w-[35%] flex flex-col justify-center text-left">

          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-white/40" />
            <h4 className="text-white font-bold text-sm tracking-widest uppercase">
              {data.subtitle}
            </h4>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {data.title1} <span className="text-[#e48b71]">{data.title2}</span>
          </h2>

          <p className="text-white/80 text-base leading-relaxed mb-10 max-w-md">
            {data.description}
          </p>

          {/* Controls */}
          <div className="flex flex-col gap-6">
            {/* Arrows */}
            <div className="flex gap-4">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-lg bg-[#3a735a] text-white flex items-center justify-center hover:bg-[#2e5d48] transition-colors"
                aria-label="Previous testimonial"
              >
                <FaArrowLeft className="text-sm" />
              </button>
              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-lg bg-[#e48b71] text-white flex items-center justify-center hover:bg-[#d17a61] transition-colors"
                aria-label="Next testimonial"
              >
                <FaArrowRight className="text-sm" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-[#e48b71]' : 'bg-[#6a9985]'
                    }`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Slider */}
        <div className="w-full lg:w-[65%] min-w-0">
          <div className="overflow-hidden py-4 -mr-4 pr-4 lg:-mr-8 lg:pr-8" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-6">
              {data.testimonials.map((testi, index) => (
                <div
                  key={testi.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] pl-6"
                >
                  <div className="bg-white rounded-2xl p-8 h-full flex flex-col shadow-sm border border-gray-100">

                    {/* Top Icon */}
                    <div className="w-14 h-14 rounded-full bg-[#e8f0ea] text-[var(--color-primary)] flex items-center justify-center text-xl mb-6">
                      <FaQuoteLeft />
                    </div>

                    {/* Quote */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                      {testi.quote}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-100 mb-6" />

                    {/* Footer Info */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testi.avatar}
                        alt={testi.name}
                        className="w-14 h-14 rounded-full object-cover shadow-sm"
                      />
                      <div className="flex flex-col">
                        <h4 className="font-bold text-[#1f2937] text-lg leading-tight mb-1">
                          {testi.name}
                        </h4>
                        <p className="text-sm text-gray-500 mb-1">{testi.location}</p>
                        <div className="flex text-[#e48b71] text-sm">
                          {[...Array(5)].map((_, i) => (
                            i < testi.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
