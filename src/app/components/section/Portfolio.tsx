import React from 'react';
import Carousel from '../layout/Carousel';
import { section_5 } from '@/db/data';

const data: string = section_5;

const Portfolio = () => {
  return (
    <section id="portfolio" className=" bg-background_section_8 ">
      <div className="section text-text_2">
        <h4 className='container'>{data}</h4>
        <Carousel />
      </div>
    </section>
  );
};

export default Portfolio;
