import React from 'react';
import { HealthCounselorTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ContactUsComponent } from '@/components/sections/ContactUsComponent';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const templateData: HealthCounselorTemplateData = rawData;
  const sectionData = templateData?.categories?.HealthCounselor?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-white">
      <Header data={sectionData.Header?.variants?.HealthCounselorHeader1} />
      
      <Breadcrumb data={{
        title: 'Contact Us',
        paths: [{ label: 'Home', url: '/' }, { label: 'Contact Us' }]
      }} />
      
      <ContactUsComponent data={sectionData.ContactUs?.variants?.HealthCounselorContactUs1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
