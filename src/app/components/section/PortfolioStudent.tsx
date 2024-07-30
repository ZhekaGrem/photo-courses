import React, { lazy, Suspense } from 'react';
import Loading from '@/app/loading';
const FullScreenImage = lazy(() => import('@/app/components/common/BgImage'));

const PortfolioStudent = () => {
  return (
    <section className="relative">
      <div className="section absolute z-10 mx-auto flex w-full justify-center text-text_2">
        <h2 className="justify-center rounded-3xl drop-shadow-2xl text-shadow-black">РОБОТИ УЧНІВ </h2>
      </div>
      <Suspense fallback={<Loading />}>
        <FullScreenImage />
      </Suspense>
    </section>
  );
};

export default PortfolioStudent;
