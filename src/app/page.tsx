import Link from 'next/link';
import Hero from '@/app/_components/section/Hero';
import CourseOverview from '@/app/_components/section/CourseOverview';
import LearningStory from '@/app/_components/section/LearningStory';
import CourseProgram from '@/app/_components/section/CourseProgram';
import Price2 from '@/app/_components/section/Price2';
import Testimonial from '@/app/_components/section/Testimonial';
import FAQ from '@/app/_components/section/FAQ';
import { courses } from '@/lib/courses';
const site = 'https://www.screenphotoschool.com.ua';
const structuredCourses = courses.map((course) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.name,
  description: course.summary,
  url: `${site}/#${course.id}`,
  inLanguage: 'uk',
  provider: { '@type': 'Organization', name: 'Screen Photo School', url: site },
  hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'Online' },
  offers: course.plans.map((plan) => ({
    '@type': 'Offer',
    name: plan.title,
    price: plan.price,
    priceCurrency: 'UAH',
    url: `${site}/?variant=${course.id}#price`,
  })),
}));
export default function Home() {
  return (
    <>
      <Hero />
      <CourseOverview />
      <LearningStory />
      <CourseProgram />
      <Price2 />
      <section className="section-space reviews-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">06 / Досвід учнів</p>
              <h2>За кожним відгуком — своя історія</h2>
            </div>
            <Link className="text-link" href="/feedback">
              Усі відгуки ↗
            </Link>
          </div>
          <Testimonial compact />
          <p className="gallery-caption">
            Особисті історії учнів школи. Результати навчання залежать від досвіду та практики кожного.
          </p>
        </div>
      </section>
      <FAQ />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredCourses) }}
      />
    </>
  );
}
