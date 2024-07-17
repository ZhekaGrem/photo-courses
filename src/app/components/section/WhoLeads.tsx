import React from 'react';
import Image from 'next/image';
import CarouselMini from '../layout/CarouselMini';
import {section_3} from '@/db/data'

type SectionInfo={
  title:string;
  name:string;
  text:string;
  text2:string;
  experience:string;
}

const data: SectionInfo = section_3;

const WhoLeads = () => {
  return (
    <section className="bg-background_section_3 ">
      <div className="container section">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h4 className="">{data.title}</h4>
            <h3 className="text-3xl font-semibold text-yellow-400 mb-8">{data.name}</h3>
            <div className=" rounded-lg shadow-lg p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-400 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-gray-700">{data.text}</p>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-400 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-gray-700">{data.text2}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative ">
              <Image
                loading="lazy"
                src="/ICH.png"
                width={600}
                height={600}
                alt="Олег Сернюк"
                className="rounded-lg shadow-2xl z-0"
              />
              <div className="absolute z-10 right-2  md:-right-6 bg-yellow-400 text-text_1 p-1  rounded-lg shadow-lg">
                <p className=" font-bold text-xl p-1">{data.experience}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <CarouselMini />
        </div>
      </div>
    </section>
  );
};

export default WhoLeads;
