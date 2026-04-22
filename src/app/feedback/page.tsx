import React from 'react';
import type { Metadata } from 'next';
import LocalGallery from '@/app/_components/layout/Gallery';
import { getColumnImages, LocalImageFolders } from '@/lib/local-images';
import Testimonial from '../_components/section/Testimonial';

export const metadata: Metadata = {
  title: 'Відгуки та Роботи Студентів | Фотошкола',
  description:
    'Переглядайте відгуки наших студентів та їх вражаючі роботи після проходження курсів фотографії',
  alternates: { canonical: 'https://www.screenphotoschool.com.ua/feedback' },
};

export const dynamic = 'force-static';

const FeedbackPage = () => {
  const studentColumnImages = getColumnImages(LocalImageFolders.STUDENT_GALLERY);

  return (
    <div className="min-h-screen bg-cloud_dancer">
      <div className="section container mx-auto">
        <h1 className="py-6 text-center text-pageant_blue">Відгуки студентів школи фотографії</h1>
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
