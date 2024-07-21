import React, { lazy, Suspense } from 'react';
import Loading from './loading';

const First = lazy(() => import('@/app/components/section/First'));
const CourseProgram = lazy(() => import('@/app/components/section/CourseProgram'));
const WhoLeads = lazy(() => import('@/app/components/section/WhoLeads'));
const Сertificate = lazy(() => import('@/app/components/section/Сertificate'));
const CustomerSearch = lazy(() => import('@/app/components/section/CustomerSearch'));
const Portfolio = lazy(() => import('@/app/components/section/Portfolio'));
const PhonePortfolio = lazy(() => import('@/app/components/section/PhonePortfolio'));
const CourseSteps = lazy(() => import('@/app/components/section/CourseSteps'));
const Price = lazy(() => import('@/app/components/section/Price'));
const Question = lazy(() => import('@/app/components/section/Question'));

export default function Home() {
  return (
    <>
      <First />
      <CourseProgram />
      <Suspense fallback={<Loading />}>
        <WhoLeads />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Сertificate />
      </Suspense>
      {/* <Suspense fallback={<Loading />}>
        <CustomerSearch />
      </Suspense> */}
      <Suspense fallback={<Loading />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <PhonePortfolio />
      </Suspense>
      {/* <Suspense fallback={<Loading />}>
        <CourseSteps />
      </Suspense> */}
      <Suspense fallback={<Loading />}>
        <Price />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Question />
      </Suspense>

      {/* <Feedback /> */}
    </>
  );
}
