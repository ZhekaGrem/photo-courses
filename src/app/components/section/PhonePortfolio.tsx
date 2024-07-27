'use client';
import React from 'react';
import PhoneCarousel from '../layout/PhoneCarousel';
import { section_5 } from '@/db/data';

const data: string = section_5;

const PhonePortfolio = () => {
  return (
    <section id="portfolio" className="pb-0">
      <div className="block text-background_section_5 sm:hidden">
        <h4 className="absolute z-10 pt-6">{data}</h4>
        <PhoneCarousel />
      </div>
    </section>
  );
};

export default PhonePortfolio;
