import { lazy, Suspense } from 'react';
import Loading from '@/app/loading';
import { section_5 } from '@/db/data';

const PhoneCarousel = lazy(() => import('@/app/components/layout/PhoneCarousel'));

const data: string = section_5;

const PhonePortfolio = () => {
  return (
    <section id="portfolio" className="pb-0">
      <div className="block text-text_2 drop-shadow-2xl text-shadow-black sm:hidden">
        <h2 className="absolute z-10 w-full pt-6 text-center">{data}</h2>
        <Suspense fallback={<Loading />}>
          <PhoneCarousel />
        </Suspense>
      </div>
    </section>
  );
};

export default PhonePortfolio;
