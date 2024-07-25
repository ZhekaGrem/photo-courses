'use client';
import React from 'react';
import {Button} from '../common/Button';
import { usePortal } from '@/app/components/layout/PortalContext';

import { section_1 } from '@/db/data';
import InstagramIcon from '@/app/components/common/InstagramIcon';
import FacebookIcon from '@/app/components/common/FacebookIcon';
import TiktokIcon from '@/app/components/common/TiktokIcon';

//Icon socials
export const icon = [
  { id: 1, src: 'https://www.instagram.com/serniukphoto/', alt: 'instagram', svg: <InstagramIcon /> },
  { id: 2, src: 'https://www.facebook.com/SerNiuK', alt: 'facebook', svg: <FacebookIcon /> },
  { id: 3, src: 'https://www.tiktok.com/@serniukphoto', alt: 'tiktok', svg: <TiktokIcon /> },
];

type SectionInfo = {
  title: string;
  title2: string;
  text: string;
  button_text: string;
};

const data: SectionInfo = section_1;

const First = () => {
  const { isPortalOpen, setIsPortalOpen } = usePortal();

  return (
    <section
    
      className="imgBg bg-cover bg-center min-h-screen flex">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row  ">
          <div className="lg:w-2/3 mb-12 lg:mb-0">
         
            <h1  className="content-end text-text_2 text-4xl lg:text-5xl ">
            <span className="inline-block bg-background_btn text-white text-xl font-bold px-4  rounded-full lg:text-4xl md:hidden ">
              ONLINE
            </span>
             <div className='text-8xl lg:text-5xl'>   {data.title}   <span className="hidden bg-background_btn text-white  font-bold px-4  rounded-full text-5xl md:inline-block ">
              ONLINE
            </span>  </div>  
            {data.title2} 
            
            </h1>
            <div className='pt-60 md:pt-0'>

            
            <p className="font-bold text-text_2 lg:text-2xl mb-12 max-w-[90%] sm:max-w-[70%] ">
              {data.text}
            </p>

            <Button
              className="md:px-3 md:py-2 hover:underline hover:font-extrabold  text-2xl font-bold transition-all duration-300  hover:shadow-lg "
              text={data.button_text}
              onClick={() => setIsPortalOpen(true)}
            />
            </div>
          </div>
          <div className=" absolute  top-72 right-0 lg:right-[21%] ">
            <div className="   rounded-2xl p-5 mt-9">
              <ul className="flex flex-col gap-y-6">
                {icon.map((item) => (
                  <li
                    key={item.id}
                    className="transform transition-transform duration-300 hover:scale-110">
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
