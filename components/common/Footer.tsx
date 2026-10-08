'use client';
import React, { useEffect, useState } from 'react';
import { FooterData } from '@/types/templates.types';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaChevronRight, FaArrowUp, FaPinterestP } from 'react-icons/fa';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF size={14} />;
    case 'FaInstagram': return <FaInstagram size={14} />;
    case 'FaLinkedinIn': return <FaLinkedinIn size={14} />;
    case 'FaTwitter': return <FaTwitter size={14} />;
    case 'FaYoutube': return <FaYoutube size={14} />;
    case 'FaPinterestP': return <FaPinterestP size={14} />;
    default: return <FaFacebookF size={14} />;
  }
};

export const Footer = ({ data }: { data?: FooterData }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!data) return null;

  return (
    <footer className="w-full relative bg-[var(--color-primary)] pt-12 pb-6 mt-0">
      
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 lg:divide-x lg:divide-white/30">
          
          {/* Column 1: Brand & Social */}
          <div className="pr-0 lg:pr-6">
            <img src={data.logo} alt={data.logoAlt || 'Logo'} className="h-28 object-contain mb-4" />
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6 pr-4">
              {data.description}
            </p>
            
            <div className="h-px w-full bg-white/20 mb-6"></div>
            
            <h4 className="text-white font-bold text-lg mb-4">{data.followUsText || ''}</h4>
            
            <div className="flex items-center gap-3">
              {data.socialLinks.map(social => (
                <Link
                  key={social.id}
                  href={social.url}
                  className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  {renderSocialIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="pl-0 lg:pl-10">
            <h3 className="text-lg font-bold text-white mb-6">{data.col2Title || 'Quick Links'}</h3>
            <ul className="flex flex-col gap-4">
              {(data.quickLinks || []).map((link) => (
                <li key={link.id}>
                  <Link href={link.url} className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-4">
                    <FaChevronRight className="text-sm" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="pl-0 lg:pl-8">
            <h3 className="text-lg font-bold text-white mb-6">{data.col3Title || 'Contact Us'}</h3>
            <ul className="flex flex-col gap-4">
              
              <li className="flex items-start gap-4">
                <FaChevronRight className="text-white text-sm mt-1 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-white text-sm leading-snug">{data.contactInfo.phone}</span>
                  <span className="text-gray-400 text-xs mt-1">{data.contactInfo.phoneTitle || ''}</span>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <FaChevronRight className="text-white text-sm mt-1 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-white text-sm leading-snug">{data.contactInfo.email}</span>
                  <span className="text-gray-400 text-xs mt-1">{data.contactInfo.emailTitle || ''}</span>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <FaChevronRight className="text-white text-sm mt-1 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-white text-sm leading-relaxed pr-4">{data.contactInfo.address}</span>
                  <span className="text-gray-400 text-xs mt-1">{data.contactInfo.addressTitle || ''}</span>
                </div>
              </li>

            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="pl-0 lg:pl-8">
            <h3 className="text-lg font-bold text-white mb-6">{data.col4Title || 'Services'}</h3>
            <ul className="flex flex-col gap-4">
              {(data.servicesLinks || []).map((link) => (
                <li key={link.id}>
                  <Link href={link.url} className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-4">
                    <FaChevronRight className="text-sm" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="mt-10 mb-6 h-px w-full bg-white/20"></div>

        {/* Copyright */}
        <div className="text-center text-gray-300 text-sm">
          {data.copyrightText}
        </div>

      </div>

      {/* Fixed Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#185244] border border-white/20 text-white flex items-center justify-center shadow-lg hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

    </footer>
  );
};
