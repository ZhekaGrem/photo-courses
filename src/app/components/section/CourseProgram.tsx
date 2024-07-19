import React, { Suspense, lazy} from 'react';


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
    <section id="program" className=" bg-background_section_2">
      <div className="container section text-text_2">
        <h4 className=''>{title}</h4>
        <Suspense fallback={<Loading/>}>
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