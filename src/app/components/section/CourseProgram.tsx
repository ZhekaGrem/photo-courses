'use client'
import React, { Suspense, lazy} from 'react';
import { motion } from 'framer-motion';
import { a_d_t } from '@/app/assets/animation';

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
      <motion.div
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        className="container section text-text_1">
        <motion.h4 variants={a_d_t} custom={2}>
          {title}
        </motion.h4>
        <Suspense fallback={<Loading />}>
          <div className="big-screen">
            <BigScreenProgram data={data} />
          </div>
          <div className="phone-screen">
            <PhoneScreenProgram data={data} />
          </div>
        </Suspense>
      </motion.div>
    </section>
  );
};



export default CourseProgram;