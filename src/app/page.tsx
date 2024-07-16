import React, { lazy } from 'react';
import { First, CourseProgram } from '@/app/components/section/sectionsgroup';

const WhoLeads = lazy(() => import('@/app/components/section/WhoLeads'));
const Сertificate = lazy(() => import('@/app/components/section/Сertificate'));
const CustomerSearch = lazy(() => import('@/app/components/section/CustomerSearch'));
const Portfolio = lazy(() => import('@/app/components/section/Portfolio'));
const CourseSteps = lazy(() => import('@/app/components/section/CourseSteps'));
const Price = lazy(() => import('@/app/components/section/Price'));
const Question = lazy(() => import('@/app/components/section/Question'));

export default function Home() {
  return (
    <>
      <First />
      <CourseProgram />
      <WhoLeads />
      <Сertificate />
      <CustomerSearch />
      <Portfolio />
      <CourseSteps />
      {/* <Feedback /> */}
      <Price />
      <Question />
    </>
  );
}
