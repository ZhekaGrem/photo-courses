'use client';
import Image from 'next/image';
import { section_4 } from '@/db/data';

type SectionInfo = {
  text1: string;
  text2: string;
};

const data: SectionInfo = section_4;
const Сertificate = () => {
  return (
    <section className="bg-background_section_4">
      <div className="section container flex flex-col items-center lg:flex-row">
        <div className="mb-12 px-6 lg:mb-0 lg:w-1/2">
          <a href="https://ukrainianphotographers.com/" target="_blank" rel="noreferrer nofollow">
            <h3 className="mb-6 text-3xl font-bold leading-tight text-text_2 lg:text-4xl xl:text-5xl">
              {data.text1}
            </h3>
          </a>
          <div className="relative">
            <a href="https://ukrainianphotographers.com/" target="_blank" rel="noreferrer nofollow">
              <h3 className="relative text-7xl font-black leading-none text-background_header lg:text-8xl xl:text-9xl">
                {data.text2}
              </h3>
            </a>
          </div>
        </div>
        <div className="flex justify-center px-6 lg:w-1/2">
          <div className="w-full overflow-hidden border-8">
            <Image
              className="h-full rounded-lg object-cover"
              loading="lazy"
              src="/certifies.jpg"
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
