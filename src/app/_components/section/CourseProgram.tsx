'use client';
import { Suspense, lazy } from 'react';
import { data_section_2, title_2 } from '@/db/data';
import Loading from '@/app/loading';

const BigScreenProgram = lazy(() => import('../layout/BigScreenProgram'));
const PhoneScreenProgram = lazy(() => import('../layout/PhoneScreenProgram'));

type InfoType = {
  id: number;
  title: string;
  content: {
    title: string;
    title2: string;
    list: Array<string>;
    img: string;
    loading?: string;
  };
};
const title: string = title_2;

const data: InfoType[] = data_section_2;
const CourseProgram = () => {
  return (
    <section id="program" className="bg-background_header">
      <div className="section container text-text_2">
        <h2>{title}</h2>
        <Suspense fallback={<Loading />}>
          <div className="big-screen">
            <BigScreenProgram data={data} />
          </div>
          <div className="phone-screen">
            <PhoneScreenProgram data={data} />
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default CourseProgram;