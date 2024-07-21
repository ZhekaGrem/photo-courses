'use client';
import React from 'react';
import {Button} from '../common/Button';
import { motion } from 'framer-motion';
import { usePortal } from '@/app/components/layout/PortalContext';

import { a_r_t, a_l_t, a_d_r_i } from '@/app/assets/animation';
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
  text: string;
  button_text: string;
};

const data: SectionInfo = section_1;

const First = () => {
  const { isPortalOpen, setIsPortalOpen } = usePortal();

  return (
    <motion.section
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      className="imgBg bg-cover bg-center min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/3 mb-12 lg:mb-0">
            {/* <span className="inline-block bg-[#cc3151] text-white text-xl font-bold px-4 py-2 rounded-full mb-6">
              ОНЛАЙН-КУРС
            </span> */}
            <motion.h1 variants={a_r_t} custom={1} className="text-text_2 text-4xl lg:text-7xl ">
              {data.title}
            </motion.h1>
            <motion.p variants={a_l_t} custom={2} className=" text-text_2 lg:text-3xl mb-12 max-w-2xl">
              {data.text}
            </motion.p>

            <Button
              className="md:px-3 md:py-2 hover:underline hover:font-extrabold  text-2xl font-bold transition-all duration-300  hover:shadow-lg "
              text={data.button_text}
              onClick={() => setIsPortalOpen(true)}
            />
          </div>
          <div className="lg:w-1/3 hidden lg:flex justify-end ">
            <div className="   rounded-2xl p-6">
              <ul className="flex flex-col gap-y-6">
                {icon.map((item) => (
                  <motion.li
                    custom={item.id}
                    variants={a_d_r_i}
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
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default First;
