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
    <div className="min-h-screen bg-cloud_dancer py-8">
      <div className="container mx-auto">
        <Testimonial />
        <h2 className="my-5 pt-5 text-center text-4xl font-bold text-pageant_blue">РОБОТИ УЧНІВ</h2>
        {/* <Gallery columnImages={studentColumnImages} /> */}
      </div>
    </div>
  );
};

export default GalleryPage;
