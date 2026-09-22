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

const FeedbackPage = async () => {
  const studentColumnImages = await getColumnImages(LocalImageFolders.STUDENT_GALLERY);

  return (
    <>
      <div className="page-intro container">
        <p className="eyebrow">Досвід Screen Photo School</p>
        <h1>
          Історії учнів.
          <br />
          Погляд у фотографіях.
        </h1>
        <p>
          Відгуки про навчання й роботи з галереї школи. Особистий досвід кожного учня — зі своїм темпом і
          результатом.
        </p>
      </div>
      <section className="section-space">
        <div className="container">
          <Testimonial />
        </div>
      </section>
      <section className="section-space student-preview" id="student-work">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Практика в кадрах</p>
              <h2>Роботи учнів</h2>
            </div>
          </div>
          <LocalGallery columnImages={studentColumnImages} />
        </div>
      </section>
    </>
  );
};

export default FeedbackPage;
