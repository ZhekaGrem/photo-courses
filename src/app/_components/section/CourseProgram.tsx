'use client';
import { Suspense, lazy } from 'react';
import { data_section_2 } from '@/db/data';
import Loading from '@/app/loading';
const BigScreenProgram = lazy(() => import('../layout/BigScreenProgram'));
const PhoneScreenProgram = lazy(() => import('../layout/PhoneScreenProgram'));

type InfoType = {
  title_2: string;
  program: Array<{
    id: number;
    title: string;
    content: {
      title: string;
      title2: string;
      list: Array<string>;
      img: string;
      img_alt: string;
      video?: string;
    };
  }>;
};

const data: InfoType = data_section_2;
const CourseProgram = () => {
  return (
    <section id="program" className="bg-background_header">
      <div className="section container text-text_2">
        <h2 className="text-center sm:text-left">{data.title_2}</h2>
        <Suspense fallback={<Loading />}>
          <div className="big-screen">
            <BigScreenProgram data={data.program} />
          </div>
          <div className="phone-screen">
            <PhoneScreenProgram data={data.program} />
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default CourseProgram;
