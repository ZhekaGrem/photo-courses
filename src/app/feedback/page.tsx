import React from 'react';
import type { Metadata } from 'next';
import Gallery from '@/app/_components/layout/Gallery';
// import CarouselTestimonial from '@/app/_components/layout/CarouselTestimonial';
import { getImagesFromFoldersFeedback } from '@/lib/cloudinary';
import Testimonial from '../_components/section/Testimonial';

export const metadata: Metadata = {
  title: 'Gallery | Photo School',
  description: 'View our students portfolio and professional work',
};

export const revalidate = 3600; // 1 hour

const GalleryPage = async () => {
  const feedback = await getImagesFromFoldersFeedback();

  return (
    <div className="min-h-screen bg-background_header py-8">
      <div className="container mx-auto">
        {/* <CarouselTestimonial /> */}
        <Testimonial />
        <h2 className="mb-12 text-center text-4xl font-bold text-text_2">РОБОТИ УЧНІВ</h2>
        <Gallery images={feedback} />
      </div>
    </div>
  );
};

export default GalleryPage;
