import React from 'react';
import { HealthCounselorTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutPageSection } from '@/components/sections/AboutPageSection';

import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';
import { CounterSection } from '@/components/sections/CounterSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: HealthCounselorTemplateData = rawData;
  const sectionData = templateData?.categories?.HealthCounselor?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">

      <Header data={sectionData.Header?.variants?.HealthCounselorHeader1} />
      <Breadcrumb data={commonData.aboutBreadcrumb} />

      {/* About Page Content Section */}
      <AboutPageSection data={sectionData.AboutPage?.variants?.HealthCounselorAboutPage1} />

      {/* What We Do Section */}
      <WhatWeDoSection data={sectionData.WhatWeDo?.variants?.HealthCounselorWhatWeDo1} />

      {/* Counter Section */}
      <CounterSection data={sectionData.Counter?.variants?.HealthCounselorCounter1} />

      {/* Team Section */}
      <TeamSection data={sectionData.Team?.variants?.HealthCounselorTeam1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}

