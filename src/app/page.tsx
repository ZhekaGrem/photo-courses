import Image from "next/image";
import React from 'react';
import Insta from './components/Insta'
import Carusel from "./components/Carousel";
import Section01 from "./section/Section01";
import Section02 from "./section/Section02";

export default function Home() {
  return (
    
    <>
    <Section01/>
    <Section02/>
    <Section01/>
    </>
  );
}
