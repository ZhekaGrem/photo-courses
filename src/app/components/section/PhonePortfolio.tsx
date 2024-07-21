'use client';
import React from 'react';
import PhoneCarousel from '../layout/PhoneCarousel';
import { section_5 } from '@/db/data';
import { motion } from 'framer-motion';
import { a_d_t } from '@/app/assets/animation';

const data: string = section_5;

const PhonePortfolio = () => {
  return (
    <motion.section
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      id="portfolio"
      className=" pb-0">
      <div className="block sm:hidden text-background_section_5">
        <motion.h4 className="absolute   z-10 pt-6" variants={a_d_t} custom={1}>
          {data}
        </motion.h4>
        <PhoneCarousel />
      </div>
    </motion.section>
  );
};

export default PhonePortfolio;
