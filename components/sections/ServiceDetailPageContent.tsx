import React from 'react';
import Link from 'next/link';
import { CustomServiceDetailData } from '@/types/templates.types';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaTwitter': return <FaTwitter />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    default: return null;
  }
};

export const ServiceDetailPageContent = ({ data }: { data?: CustomServiceDetailData }) => {
  if (!data) return null;

  return (
    <section className="w-full bg-white py-16 lg:py-12">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Doctor Info Card */}
            <div className="bg-[#f8fcfb] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="w-full h-[320px]">
                <img
                  src={data.sidebar.doctorImage}
                  alt={data.sidebar.doctorName}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-1">
                  {data.sidebar.doctorName}
                </h3>
                <p className="text-gray-400 text-sm font-medium mb-6">
                  {data.sidebar.doctorRole}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {data.sidebar.doctorDescription}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  {data.sidebar.socialLinks.map((social) => (
                    <Link
                      key={social.id}
                      href={social.url}
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors shadow-sm"
                    >
                      {renderSocialIcon(social.icon)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className="bg-[#f4f7f6] rounded-2xl p-8 border border-gray-100">
              <FaQuoteLeft className="text-4xl text-gray-300 mb-4" />
              <p className="text-gray-600 italic text-sm leading-relaxed font-medium mb-4">
                "{data.sidebar.quoteText}"
              </p>
              <p className="text-gray-500 text-sm font-semibold">
                — {data.sidebar.quoteAuthor}
              </p>
            </div>

          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 flex flex-col text-left">

            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-[#6b9b8b]" />
              <h4 className="text-[#6b9b8b] font-bold text-sm tracking-widest uppercase">
                {data.subtitle}
              </h4>
            </div>

            <h2 className="text-4xl font-extrabold mb-6">
              <span className="text-[var(--color-primary)]">{data.title1} </span>
              <span className="text-[#6b9b8b]">{data.title2}</span>
            </h2>

            {/* Main Description */}
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              {data.mainDescription}
            </p>

            {/* What You Can Expect */}
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
              {data.whatYouCanExpectTitle}
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-5">
              {data.whatYouCanExpectDescription}
            </p>

            {/* Key Benefits */}
            <div className="bg-[#f4f7f6] rounded-2xl p-6 md:p-7 mb-6 border border-gray-100">
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4">
                {data.keyBenefitsTitle}
              </h3>
              <ul className="flex flex-col gap-3">
                {data.keyBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-[#6b9b8b] font-bold mt-0.5">—</span>
                    <span className="text-gray-500 text-sm md:text-base leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who Can Benefit */}
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
              {data.whoCanBenefitTitle}
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              {data.whoCanBenefitDescription}
            </p>

            {/* Button */}
            <div>
              <Link
                href={data.buttonUrl}
                className="inline-flex items-center justify-center gap-3 bg-[#6b9b8b] hover:bg-[#5a8677] text-white rounded-full px-8 py-3.5 font-bold text-base transition-colors shadow-sm"
              >
                {data.buttonText}
                <div className="w-6 h-6 rounded-full bg-white text-[#6b9b8b] flex items-center justify-center text-xs">
                  <FaArrowRight />
                </div>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
