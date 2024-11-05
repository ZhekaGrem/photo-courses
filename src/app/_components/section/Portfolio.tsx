import Loading from '@/app/loading';
import { section_5 } from '@/db/data';
import dynamic from 'next/dynamic';
const Carousel = dynamic(() => import('@/app/_components/layout/Carousel'), {
  loading: () => <Loading />,
});
const PhoneCarousel = dynamic(() => import('@/app/_components/layout/PhoneCarousel'), {
  loading: () => <Loading />,
});

const data: string = section_5;

const Portfolio = () => {
  return (
    <section id="portfolio" className="p-0">
      <div className="hidden sm:block">
        <div className="flex justify-center text-text_2">
          <h2 className="absolute z-10 justify-center rounded-3xl pt-6 drop-shadow-2xl text-shadow-black">
            {data}
          </h2>
          <Carousel />
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="text-text_2 drop-shadow-2xl text-shadow-black sm:hidden">
          <h2 className="absolute z-10 w-full pt-6 text-center">{data}</h2>
          <PhoneCarousel />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
