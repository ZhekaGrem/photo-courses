'use client';
import React from 'react';
import { Button } from '../common/Button';
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
    <section className="imgBg flex min-h-screen bg-cover bg-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-12 lg:mb-0 lg:w-2/3">
            <h1 className="content-end text-4xl text-text_2 lg:text-5xl">
              <span className="inline-block rounded-full bg-background_btn px-4 text-xl font-bold text-white md:hidden lg:text-4xl">
                ONLINE
              </span>
              <div className="text-8xl lg:text-5xl">
                {' '}
                {data.title}{' '}
                <span className="hidden rounded-full bg-background_btn px-4 text-5xl font-bold text-white md:inline-block">
                  ONLINE
                </span>{' '}
              </div>
              {data.title2}
            </h1>
            <div className="w-full pt-60 text-end">
              <Button
                className="bg-background_btn_burger text-2xl font-bold transition-all duration-300 hover:font-extrabold hover:underline hover:shadow-lg sm:hidden md:px-3 md:py-2"
                text={data.button_text}
                onClick={() => setIsPortalOpen(true)}
              />
            </div>
            <div className="pt-20 md:pt-0">
              <p className="mb-12 max-w-[90%] font-bold text-text_2 sm:max-w-[70%] lg:text-2xl">
                {data.text}
              </p>
            </div>
          </div>
          <div className="absolute right-0 top-72 lg:right-[21%]">
            <div className="mt-9 rounded-2xl p-5">
              <ul className="flex flex-col gap-y-6">
                {icon.map((item) => (
                  <li key={item.id} className="transform transition-transform duration-300 hover:scale-110">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.alt}
                      title={item.alt}
                      href={item.src}
                      className="fill-text_2 transition-colors duration-300 hover:fill-background_btn_hover">
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
