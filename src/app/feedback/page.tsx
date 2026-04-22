import React from 'react';
import type { Metadata } from 'next';
import LocalGallery from '@/app/_components/layout/Gallery';
import { getColumnImages, LocalImageFolders } from '@/lib/local-images';
import Testimonial from '../_components/section/Testimonial';

const SITE_URL = 'https://www.screenphotoschool.com.ua';
const OG_IMAGE = `${SITE_URL}/assets/img/oleg.png`;

const TITLE = 'Відгуки та Роботи Студентів | Фотошкола';
const DESCRIPTION =
  'Переглядайте відгуки наших студентів та їх вражаючі роботи після проходження курсів фотографії';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/feedback` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/feedback`,
    siteName: 'Screen Photo School',
    locale: 'uk_UA',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const dynamic = 'force-static';

const FeedbackPage = () => {
  const studentColumnImages = getColumnImages(LocalImageFolders.STUDENT_GALLERY);

  return (
    <div className="min-h-screen bg-cloud_dancer">
      <div className="section container mx-auto">
        <h1 className="px-6 py-6 text-center text-xl font-bold leading-[1.1334] text-pageant_blue sm:text-[2rem] sm:font-black sm:leading-[1.1334]">
          Відгуки студентів школи фотографії
        </h1>
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
