import React from 'react';
import { HealthCounselorTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { GalleryGridSection } from '@/components/sections/GalleryGridSection';
import { VideoGallerySection } from '@/components/sections/VideoGallerySection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function GalleryPage() {
  const templateData: HealthCounselorTemplateData = rawData;
  const sectionData = templateData?.categories?.HealthCounselor?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  const breadcrumbData = {
    title: 'Gallery',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Gallery' }
    ],
    bgImage: '/main logo/breadcrumb.webp'
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header data={sectionData.Header?.variants?.HealthCounselorHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      {/* Image Gallery */}
      <GalleryGridSection data={sectionData.Gallery?.variants?.HealthCounselorGalleryGrid1} />

      {/* Video Gallery */}
      <VideoGallerySection data={sectionData.VideoGallery?.variants?.HealthCounselorVideoGallery1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
