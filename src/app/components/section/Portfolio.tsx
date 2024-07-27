'use client';
import React from 'react';
import Carousel from '../layout/Carousel';
import { section_5 } from '@/db/data';

const data: string = section_5;

const Portfolio = () => {
  return (
    <section id="portfolio" className="hidden bg-background_section_5 sm:block">
      <div className="section text-text_1">
        <h4 className="container">{data}</h4>
        <Carousel />
      </div>
    </section>
  );
};

export default Portfolio;
