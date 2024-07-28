'use client';
import React from 'react';
import Image from 'next/image';
import { section_4 } from '@/db/data';
import { motion } from 'framer-motion';
import { a_r_t, a_l_t } from '@/app/assets/animation';
type SectionInfo = {
  text1: string;
  text2: string;
};

const data: SectionInfo = section_4;
const Сertificate = () => {
  return (
    <section className="bg-background_section_4">
      <div className="section container flex flex-col items-center lg:flex-row">
        <div className="mb-12 px-6 sm:p-0 lg:mb-0 lg:w-1/2">
          <a href="https://ukrainianphotographers.com/" target="_blank">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-text_2 lg:text-5xl">{data.text1}</h2>
          </a>
          <div className="relative">
            <a href="https://ukrainianphotographers.com/" target="_blank">
              <h3 className="relative text-7xl font-black leading-none text-background_header lg:text-9xl">
                {data.text2}
              </h3>
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <div className="w-full overflow-hidden border-8 shadow-2xl">
            <Image
              className="m-auto h-auto object-cover"
              loading="lazy"
              src="/Rectangle-e1676897018833.png"
              width={520}
              height={465}
              alt="Сертифікат UAPP"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Сertificate;
