import React from 'react';
import { HealthCounselorTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { ServiceDetailPageContent } from '@/components/sections/ServiceDetailPageContent';

export const dynamic = 'force-dynamic';

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: HealthCounselorTemplateData = rawData;
  const sectionData = templateData?.categories?.HealthCounselor?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  // Fetch the specific data for this service ID
  const detailData = sectionData.CustomServiceDetail?.variants?.[id];

  if (!detailData) return <div className="text-black p-10">Service not found...</div>;

  const fullTitle = `${detailData.title1} ${detailData.title2}`.trim();

  const breadcrumbData = {
    title: fullTitle,
    paths: [
      { label: 'Home', url: '/' },
      { label: fullTitle }
    ],
    bgImage: '/main logo/breadcrumb.webp'
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header data={sectionData.Header?.variants?.HealthCounselorHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <ServiceDetailPageContent data={detailData} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
