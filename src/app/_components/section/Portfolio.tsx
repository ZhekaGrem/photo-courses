import { lazy, Suspense } from 'react';
import Loading from '@/app/loading';
import { section_5 } from '@/db/data';
const Carousel = lazy(() => import('@/app/_components/layout/Carousel'));

const data: string = section_5;

const Portfolio = () => {
  return (
    <section id="portfolio" className="hidden p-0 sm:block">
      <div className="flex justify-center text-text_2">
        <h2 className="absolute z-10 justify-center rounded-3xl pt-6 drop-shadow-2xl text-shadow-black">
          {data}
        </h2>
        <Suspense fallback={<Loading />}>
          <Carousel />
        </Suspense>
      </div>
    </section>
  );
};

export default Portfolio;
