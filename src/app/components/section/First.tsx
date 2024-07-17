'use client';
import React from 'react';
import Instagramicon from '@/app/assets/svg/instagram';
import Button from '../common/Button';
import { usePortal } from '@/app/components/layout/PortalContext';

const data = [
  { id: 1, src: '/svg/instagram.svg', alt: 'instagram' },
  { id: 2, src: '/svg/instagram.svg', alt: 'instagram' },
  { id: 3, src: '/svg/instagram.svg', alt: 'instagram' },
];
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
            <h1 className="text-text_2 text-4xl lg:text-7xl ">
              Курс фотографа
              <br />
              для початківців
            </h1>
            <p className=" text-white lg:text-3xl mb-12 max-w-2xl">
              Під час курсу ви освоїте професію фотографа від вибору фотоапарату і до пошуку перших клієнтів
            </p>

            <Button
              className="md:px-3 md:py-2   text-xl font-bold transition-all duration-300  hover:shadow-lg "
              text="ПОДАТИ ЗАЯВКУ"
              onClick={() => setIsPortalOpen(true)}
            />
          </div>
          <div className="lg:w-1/3 hidden lg:flex justify-end ">
            <div className="   rounded-2xl p-6">
              <ul className="flex flex-col gap-y-6">
                {data.map((item) => (
                  <li key={item.id} className="transform transition-transform duration-300 hover:scale-110">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.alt}
                      title={item.alt}
                      href="#"
                      className="text-white hover:text-yellow-400 transition-colors duration-300">
                      <Instagramicon />
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
