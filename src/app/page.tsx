import React from 'react';
import {
  First,
  CourseProgram,
  WhoLeads,
  Сertificate,
  CustomerSearch,
  Portfolio,
  CourseSteps,
  Feedback,
  Price,
  Question,
} from '@/app/section/sectionsgroup';
import Portal from './components/layout/Portal';

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
