import { lazy, Suspense } from 'react';
import Loading from '@/app/loading';

const First = lazy(() => import('@/app/_components/section/First'));
const CourseProgram = lazy(() => import('@/app/_components/section/CourseProgram'));
const WhoLeads = lazy(() => import('@/app/_components/section/WhoLeads'));
const Certificate = lazy(() => import('@/app/_components/section/Certificate'));
// const CustomerSearch = lazy(() => import('@/app/_components/section/CustomerSearch'));
const Portfolio = lazy(() => import('@/app/_components/section/Portfolio'));
// const PhonePortfolio = lazy(() => import('@/app/_components/section/PhonePortfolio'));
const PortfolioStudent = lazy(() => import('@/app/_components/section/PortfolioStudent'));

// const Price = lazy(() => import('@/app/_components/section/Price'));
const Price2 = lazy(() => import('@/app/_components/section/Price2'));
// const Question = lazy(() => import('@/app/_components/section/Question'));

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <First />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <WhoLeads />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <CourseProgram />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Price2 />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Certificate />
      </Suspense>
      {/* <Suspense fallback={<Loading />}>
        <CustomerSearch />
      </Suspense> */}
      <Suspense fallback={<Loading />}>
        <Portfolio />
      </Suspense>
      {/* <Suspense fallback={<Loading />}>
        <PhonePortfolio />
      </Suspense> */}
      {/* <Suspense fallback={<Loading />}>
        <Price />
      </Suspense> */}

      <Suspense fallback={<Loading />}>
        <PortfolioStudent />
      </Suspense>

      {/* <Suspense fallback={<Loading />}>
        <Question />
      </Suspense> */}
    </>
  );
}
