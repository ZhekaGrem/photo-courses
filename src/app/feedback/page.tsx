import React from 'react';
import type { Metadata } from 'next';
import LocalGallery from '@/app/_components/layout/Gallery';
import { getColumnImages, LocalImageFolders } from '@/lib/local-images';
import Testimonial from '../_components/section/Testimonial';

export const metadata: Metadata = {
  title: 'Відгуки та Роботи Студентів | Фотошкола',
  description:
    'Переглядайте відгуки наших студентів та їх вражаючі роботи після проходження курсів фотографії',
};

// Статична генерація - максимальна швидкість
export const dynamic = 'force-static';

const FeedbackPage = () => {
  // Отримуємо зображення студентів з локальних папок
  const studentColumnImages = getColumnImages(LocalImageFolders.STUDENT_GALLERY);

  return (
    <div className="min-h-screen bg-cloud_dancer">
      <div className="section container mx-auto">
        <h2 className="py-6 text-center text-pageant_blue">ВІДГУКИ</h2>
        <Testimonial />
      </div>

      <section className="bg-pageant_blue">
        <div className="container">
          <h2 className="py-6 text-center text-cloud_dancer">РОБОТИ УЧНІВ</h2>
          <LocalGallery columnImages={studentColumnImages} />
        </div>
      </section>
    </div>
  );
};

export default FeedbackPage;
