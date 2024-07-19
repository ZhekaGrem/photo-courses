import React from 'react'
import Image from 'next/image';
import {section_4} from '@/db/data'

type SectionInfo = {
  text1:string;
  text2:string;
};

const data: SectionInfo = section_4;
const Сertificate = () => {
  return (
    <section className="bg-background_section_4 ">
      <div className="container section flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0 px-6">
          <a href="https://ukrainianphotographers.com/" target="_blank" >

          <h2 className="text-4xl lg:text-5xl font-bold text-text_2 leading-tight mb-6">{data.text1}</h2>
          </a>
          <div className="relative">
            <a href="https://ukrainianphotographers.com/" target="_blank" >
              <h3 className="relative text-8xl lg:text-9xl font-black text-background_header leading-none">
                {data.text2}
              </h3>
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-full overflow-hidden shadow-2xl border-8 border-yellow-400">
            <Image
              className="object-cover h-auto m-auto"
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