import React from 'react';
import { HealthCounselorTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';
import { CounterSection } from '@/components/sections/CounterSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { BlogsSection } from '@/components/sections/BlogsSection';


import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: HealthCounselorTemplateData = rawData;
  const sectionData = templateData?.categories?.HealthCounselor?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">

      <Header data={sectionData.Header?.variants?.HealthCounselorHeader1} />
      <HeroSection data={sectionData.Hero?.variants?.HealthCounselorHero1} />
      <AboutUsSection data={sectionData.AboutUs?.variants?.HealthCounselorAboutUs1} />
      <ServicesSection data={sectionData.Services?.variants?.HealthCounselorServices1} />
      <WhatWeDoSection data={sectionData.WhatWeDo?.variants?.HealthCounselorWhatWeDo1} />
      <CounterSection data={sectionData.Counter?.variants?.HealthCounselorCounter1} />
      <TeamSection data={sectionData.Team?.variants?.HealthCounselorTeam1} />
      <TestimonialSection data={sectionData.Testimonials?.variants?.HealthCounselorTestimonials1} />
      <BlogsSection data={sectionData.Blogs?.variants?.HealthCounselorBlogs1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}

