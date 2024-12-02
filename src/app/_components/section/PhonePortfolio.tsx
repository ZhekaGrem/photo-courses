import Loading from '@/app/loading';
import { section_5 } from '@/db/data';

import dynamic from 'next/dynamic';
const PhoneCarousel = dynamic(() => import('@/app/_components/layout/PhoneCarousel'), {
  loading: () => <Loading />,
  ssr: false,
});

const data: string = section_5;

const PhonePortfolio = () => {
  return (
    <section id="portfolio" className="pb-0">
      <div className="block text-text_2 drop-shadow-2xl text-shadow-black sm:hidden">
        <h2 className="absolute z-10 w-full pt-6 text-center">{data}</h2>
        <PhoneCarousel />
      </div>
    </section>
  );
};

export default PhonePortfolio;
