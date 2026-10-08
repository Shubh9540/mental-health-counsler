import React from 'react';
import { HealthCounselorTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { BlogDetailPageContent } from '@/components/sections/BlogDetailPageContent';

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: HealthCounselorTemplateData = rawData;
  const sectionData = templateData?.categories?.HealthCounselor?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  const detailData = sectionData.BlogDetail?.variants?.[id];

  if (!detailData) return <div className="text-black p-10">Blog not found...</div>;

  const breadcrumbData = {
    title: 'Blog Detail',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Blog Detail' }
    ],
    bgImage: '/main logo/breadcrumb.webp'
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header data={sectionData.Header?.variants?.HealthCounselorHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <BlogDetailPageContent data={detailData} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
