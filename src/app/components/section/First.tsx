'use client';
import React from 'react';
import Instagramicon from '@/app/assets/svg/instagram';
import Button from '../common/Button';
import { usePortal } from '@/app/components/layout/PortalContext';
import { section_1,icon } from '@/db/data';


type SectionInfo = {
  title: string;
  text: string;
  button_text:string;
};

const data: SectionInfo = section_1;


const First = () => {
  const { isPortalOpen, setIsPortalOpen } = usePortal();

  return (
    <section className="imgBg bg-cover bg-center min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/3 mb-12 lg:mb-0">
            {/* <span className="inline-block bg-[#cc3151] text-white text-xl font-bold px-4 py-2 rounded-full mb-6">
              ОНЛАЙН-КУРС
            </span> */}
            <h1 className="text-text_2 text-4xl lg:text-7xl ">{data.title}</h1>
            <p className=" text-text_2 lg:text-3xl mb-12 max-w-2xl">{data.text}</p>

            <Button
              className="md:px-3 md:py-2   text-xl font-bold transition-all duration-300  hover:shadow-lg "
              text={data.button_text}
              onClick={() => setIsPortalOpen(true)}
            />
          </div>
          <div className="lg:w-1/3 hidden lg:flex justify-end ">
            <div className="   rounded-2xl p-6">
              <ul className="flex flex-col gap-y-6">
                {icon.map((item) => (
                  <li key={item.id} className="transform transition-transform duration-300 hover:scale-110">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.alt}
                      title={item.alt}
                      href={item.src}
                      className=" transition-colors duration-300 fill-text_2  hover:fill-background_btn_hover">
                      {item.svg}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default First;
