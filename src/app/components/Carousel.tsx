'use client'
import React, { useState } from 'react';
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
  { id: 2, link: "/2.jpg",alt:"img", width:300, height:400 },
  { id: 3, link: "/1.jpg",alt:"img", width:300, height:400 },
  { id: 4, link: "/2.jpg",alt:"img", width:300, height:400 },
  { id: 5, link: "/1.jpg",alt:"img", width:300, height:400 },
  { id: 6, link: "/2.jpg",alt:"img", width:300, height:400 },
  { id: 7, link: "/1.jpg",alt:"img", width:300, height:400 },
  { id: 1, link: "/1.jpg",alt:"img", width:300, height:400 },
];

export default function Carousel() {
   const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
 const [ref, instanceRef] = useKeenSlider<HTMLUListElement>({
   initial: 0,
   slideChanged(slider) {
     setCurrentSlide(slider.track.details.rel);
   },
   created() {
     setLoaded(true);
   },
   loop: true,
   mode: 'free',
   slides: {
     perView: 5,
     spacing: 5,
   },
 });
 return (
   <>
     <div className=" relative">
       <ul ref={ref} className="keen-slider">
         {carousel.map((item) => (
           <li key={item.id} className="keen-slider__slide ">
             <Image
               className=" h-full rounded-lg shadow-2xl "
               width={item.width}
               height={item.height}
               src={item.link}
               alt={item.alt}
             />
           </li>
         ))}
       </ul>
       {loaded && instanceRef.current && (
         <>
           <Arrow left onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} />

           <Arrow onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()} />
         </>
       )}
     </div>{' '}
     {loaded && instanceRef.current && (
       <div className="dots">
         {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
           return (
             <button
               key={idx}
               onClick={() => {
                 instanceRef.current?.moveToIdx(idx);
               }}
               className={'dot' + (currentSlide === idx ? ' active' : '')}></button>
           );
         })}
       </div>
     )}
   </>
 );
}


function Arrow(props: { left?: boolean; onClick: (e: any) => void }) {
  
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? 'arrow--left' : 'arrow--right'} `}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}