import Image from 'next/image';
import React from 'react';
import Insta from './components/Insta';
import Carusel from './components/Carousel';
import Section01 from './section/Section01';
import Section02 from './section/Section02';
import Section03 from './section/Section03';
import Section04 from './section/Section04';
import Section05 from './section/Section05';
import Section06 from './section/Section06';

export default function Home() {
  return (
    <>
    
        <div className="w-full imgBg">
        <Section01 />
        </div>
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
     
    </>
  );
}
