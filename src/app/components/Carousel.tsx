'use client'
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import "../styles/carousel.css"


type ImgType = {
  id: number;
  link: string;
  alt: string;
  width: number;
  height: number;
};

const carousel: ImgType[] = [
  { id: 1, link: "/1.jpg",alt:"img", width:200, height:300 },
  { id: 2, link: "/1.jpg",alt:"img", width:200, height:300 },
  { id: 3, link: "/1.jpg",alt:"img", width:200, height:300 },
  { id: 4, link: "/1.jpg",alt:"img", width:200, height:300 },
  { id: 5, link: "/1.jpg",alt:"img", width:200, height:300 },
  { id: 6, link: "/1.jpg",alt:"img", width:200, height:300 },
  { id: 7, link: "/1.jpg",alt:"img", width:200, height:300 },
];

export default function Carousel() {
 const [ref] = useKeenSlider<HTMLDivElement>({
   loop: true,
   mode: "free",
   slides: {
     perView: 5,
     spacing: 15,
   },
 });
 return (
   <div>
     <ul ref={ref} className='keen-slider'>
       {carousel.map((item) => (
         <li key={item.id} className='keen-slider__slide '>
           <Image
             className='rounded-3xl'
             width={item.width}
             height={item.height}
             src={item.link}
             alt={item.alt}
           />
         </li>
       ))}
     </ul>
   </div>
 );
}
