'use client';
import Image from 'next/image';
import CarouselMini from '../layout/CarouselMini';
import { section_3 } from '@/db/data';
import CheckmarkIcon from '../common/Checkmark';

type SectionInfo = {
  title: string;
  name: string;
  text: string;
  text2: string;
  experience: string;
};

const data: SectionInfo = section_3;

const WhoLeads = () => {
  return (
    <section id="author" className="bg-background_section_3">
      <div className="section container">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <h2>{data.title}</h2>
            <h3 className="mb-8 px-6 text-3xl font-semibold">{data.name}</h3>
            <div className="">
              <ul className="space-y-4 rounded-lg p-6">
                <li className="flex items-start">
                  <CheckmarkIcon />
                  <p className="text-gray-800">{data.text}</p>
                </li>
                <li className="flex items-start">
                  <CheckmarkIcon />
                  <p className="text-gray-800">{data.text2}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-6 sm:px-0 lg:w-1/2 lg:pl-12">
            <div className="relative">
              <Image
                loading="lazy"
                src="/oleg.png"
                width={600}
                height={600}
                alt="Олег Сернюк"
                className="z-0 rounded-lg"
              />
              <div className="m- absolute right-2 z-10 flex rounded-lg bg-white p-1 text-text_1 shadow-lg md:-right-6">
                <p className="p-1 text-lg font-bold">{data.experience}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 px-6 sm:px-0">
          <CarouselMini />
        </div>
      </div>
    </section>
  );
};

export default WhoLeads;