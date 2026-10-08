import React from 'react';
import { HealthCounselorTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServicesSection } from '@/components/sections/ServicesSection';

import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const templateData: HealthCounselorTemplateData = rawData;
  const sectionData = templateData?.categories?.HealthCounselor?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">

      <Header data={sectionData.Header?.variants?.HealthCounselorHeader1} />
      <Breadcrumb data={commonData.servicesBreadcrumb} />

      {/* Services Section */}
      <ServicesSection data={sectionData.Services?.variants?.HealthCounselorServices1} />


      <Footer data={commonData.Footer} />
    </main>
  );
}

