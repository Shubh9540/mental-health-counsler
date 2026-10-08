'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderData } from '@/types/templates.types';
import { FaArrowRight, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

export const Header = ({ data }: { data?: HeaderData }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!data) return null;

  return (
    <header className="absolute top-0 left-0 z-40 w-full bg-transparent">
      <div className="max-w-[1250px] mx-auto w-full flex min-h-[70px] lg:min-h-[100px] items-center px-4 lg:px-8 gap-6 xl:gap-10">
        
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 mr-auto -ml-2 lg:-ml-6 xl:-ml-8">
          <img src={data.logo} alt={data.logoAlt || 'Logo'} className="h-20 md:h-24 lg:h-[100px] xl:h-[110px] object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-6">
          {data.navLinks?.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link 
                key={link.id} 
                href={link.url} 
                className={`relative flex items-center gap-1.5 whitespace-nowrap text-sm xl:text-base font-medium px-2 py-2 transition-all duration-300 ${
                  isActive 
                    ? 'text-[var(--color-accent-muted)] border-b-2 border-[var(--color-accent-muted)]' 
                    : 'text-white hover:text-[var(--color-accent-muted)]'
                }`}
              >
                {link.label}
                {link.hasDropdown && <FaChevronDown className="text-[10px]" />}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu */}
        <div className="flex items-center gap-4 shrink-0">
          {data.contactButton && (
            <Link 
              href={data.contactButton.url} 
              className="hidden lg:flex items-center justify-center gap-3 border border-white/30 bg-[#599878]/80 backdrop-blur-md px-6 py-2.5 rounded-full text-sm xl:text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent)] pl-8"
            >
              {data.contactButton.text.replace('->', '').trim()}
              {data.contactButton.text.includes('->') && (
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              )}
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="flex h-10 w-10 items-center justify-center rounded-md text-xl text-white lg:hidden"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full flex max-h-[calc(100vh-70px)] w-full flex-col overflow-y-auto border-t border-[#e8e1ee] bg-white p-4 shadow-lg lg:hidden">
          {data.navLinks?.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link 
                key={link.id} 
                href={link.url} 
                onClick={() => setMobileMenuOpen(false)} 
                className={`flex items-center justify-between border-b border-[#eee9f2] px-4 py-3 text-base font-semibold ${
                  isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-primary)]'
                }`}
              >
                {link.label}
                {link.hasDropdown && <FaChevronDown className="text-sm" />}
              </Link>
            );
          })}
          {data.contactButton && (
            <Link 
              href={data.contactButton.url} 
              onClick={() => setMobileMenuOpen(false)} 
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent-muted)] px-6 py-3 text-base font-semibold text-white"
            >
              {data.contactButton.text.replace('->', '').trim()}
              {data.contactButton.text.includes('->') && <FaArrowRight className="text-sm" />}
            </Link>
          )}
        </div>
      )}
    </header>
  );
};
