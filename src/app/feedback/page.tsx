import React from 'react';
import type { Metadata } from 'next';
import Gallery from '@/app/_components/layout/Gallery'; // Updated import
import { getColumnImages, ColumnImages, CloudinaryFolders } from '@/lib/cloudinary'; // Add CloudinaryFolders
import Testimonial from '../_components/section/Testimonial';

export const metadata: Metadata = {
  title: 'Gallery | Photo School',
  description: 'View our students portfolio and professional work',
};

export const revalidate = 3600; // 1 hour

const GalleryPage = async () => {
  // Default: студентські роботи
  const studentColumnImages: ColumnImages = await getColumnImages(CloudinaryFolders.STUDENT_COLUMNS);

  // Або автор роботи (якщо потрібно)
  // const authorColumnImages: ColumnImages = await getColumnImages(CloudinaryFolders.AUTHOR);

  return (
    <div className="min-h-screen bg-cloud_dancer">
      <div className="container mx-auto">
        {/* need add section */}
        <h2 className="py-6 text-center text-pageant_blue">ВІДГУКИ</h2>
        <Testimonial />
      </div>
      <section className="container bg-pageant_blue">
        <h2 className="py-6 text-center text-cloud_dancer">РОБОТИ УЧНІВ</h2>
        <Gallery columnImages={studentColumnImages} />
      </section>
    </div>
  );
};

export default GalleryPage;
