import React from 'react';
import { HealthCounselorTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { BlogGridSection } from '@/components/sections/BlogGridSection';

export const dynamic = 'force-dynamic';

export default function BlogPage() {
  const templateData: HealthCounselorTemplateData = rawData;
  const sectionData = templateData?.categories?.HealthCounselor?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  const breadcrumbData = {
    title: 'Blog',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Blog' }
    ],
    bgImage: '/main logo/breadcrumb.webp'
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header data={sectionData.Header?.variants?.HealthCounselorHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <BlogGridSection data={sectionData.Blogs?.variants?.HealthCounselorBlogGrid1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
