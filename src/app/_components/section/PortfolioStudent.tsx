import dynamic from 'next/dynamic';
import Loading from '@/app/loading';
const FullScreenImage = dynamic(() => import('@/app/_components/common/BgImage'), {
  loading: () => <Loading />,
  ssr: false,
});

const PortfolioStudent = () => {
  return (
    <section className="relative">
      <div className="section absolute z-10 mx-auto flex w-full justify-center text-text_2">
        <h2 className="justify-center rounded-3xl drop-shadow-2xl text-shadow-black">РОБОТИ УЧНІВ </h2>
      </div>
      <FullScreenImage />
    </section>
  );
};

export default PortfolioStudent;
