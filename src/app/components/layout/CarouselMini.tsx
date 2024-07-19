'use client'
import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import {minicarousel} from '@/db/data'

type TypeImange ={
id:number;
alt:string;
src:string;
numberslider:string;
}

const data:TypeImange[]=minicarousel;


export default function CarouselMini() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      breakpoints: {
        '(min-width: 681px)': {
          slides: { perView: 4, spacing: 0 },
        },
        '(min-width: 425px) and (max-width: 680px)': {
          slides: { perView: 2, spacing: 0 },
        },
      },
     
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider bg-white rounded-2xl shadow-xl">
        {data.map((item) => (
          <div
            key={item.id}
            className={`max-w-64 p-2 keen-slider__slide max-h-20 flex items-center justify-center ${item.numberslider}`}>
            <Image
              className="w-auto max-w-full max-h-full object-contain"
              width={170}
              height={45}
              src={item.src}
              alt={item.alt}
            />
          </div>
        ))}
        {/* <div className="keen-slider__slide number-slide1">
          <Image
            className="rounded-3xl w-full h-auto"
            width={222}
            height={222}
            src="/carouselmini/kava-logo.png"
            alt="kek"
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image
            loading="lazy"
            className="rounded-3xl w-full h-auto"
            width={222}
            height={222}
            src="/4.png"
            alt="kek"
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image
            loading="lazy"
            className="rounded-3xl w-full h-auto"
            width={222}
            height={222}
            src="/4.png"
            alt="kek"
          />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image
            loading="lazy"
            className="rounded-3xl w-full h-auto"
            width={222}
            height={222}
            src="/4.png"
            alt="kek"
          />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image
            loading="lazy"
            className="rounded-3xl w-full h-auto"
            width={222}
            height={222}
            src="/4.png"
            alt="kek"
          />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image
            loading="lazy"
            className="rounded-3xl w-full h-auto"
            width={222}
            height={222}
            src="/4.png"
            alt="kek"
          />
        </div> */}
      </div>
    </>
  );
}
