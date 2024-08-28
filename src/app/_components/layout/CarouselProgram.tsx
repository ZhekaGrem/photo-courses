// 'use client';
// import React, { useState } from 'react';
// import { useKeenSlider } from 'keen-slider/react';
// import Image from 'next/image';
// import 'keen-slider/keen-slider.min.css';
// import '@/app/styles/carousel.css';

// type ImgItem = {
//   id: number;
//   src: string;
//   alt: string;
// };

// type PhoneCarouselProps = {
//   carousel: ImgItem[];
// };

// export default function CarouselProgram({ сarousel }: PhoneCarouselProps) {
//   const [currentSlide, setCurrentSlide] = React.useState(0);
//   const [loaded, setLoaded] = useState(false);
//   const [ref, instanceRef] = useKeenSlider<HTMLUListElement>({
//     initial: 0,
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel);
//     },
//     created() {
//       setLoaded(true);
//     },
//     loop: true,
//     mode: 'snap',

//     slides: { perView: 1, spacing: 0 },
//   });
//   return (
//     <>
//       <div className="relative overflow-hidden">
//         <ul ref={ref} className="keen-slider">
//           {сarousel.map((item) => (
//             <li key={item.id} className="keen-slider__slide w-full">
//               <Image
//                 className="h-full w-full object-cover"
//                 width={400}
//                 height={400}
//                 src={item.link}
//                 alt={item.alt}
//                 loading="lazy"
//               />
//             </li>
//           ))}
//         </ul>
//         {loaded && instanceRef.current && (
//           <>
//             <Arrow left onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} />

//             <Arrow onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()} />
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// function Arrow(props: { left?: boolean; onClick: (e: any) => void }) {
//   return (
//     <svg
//       onClick={props.onClick}
//       className={`arrow max-w-6 fill-text_2 shadow-xl transition-transform duration-300 active:scale-150 ${
//         props.left ? 'arrow--left' : 'arrow--right'
//       } `}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24">
//       {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
//       {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
//     </svg>
//   );
// }
