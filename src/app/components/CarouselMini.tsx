'use client'
import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

export default function CarouselMini() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 5,
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
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          {' '}
          <Image className="rounded-3xl w-full h-auto" width={222} height={222} src="/3.png" alt="kek" />
        </div>
        <div className="keen-slider__slide number-slide2">
          {' '}
          <Image className="rounded-3xl w-full h-auto" width={222} height={222} src="/4.png" alt="kek" />
        </div>
        <div className="keen-slider__slide number-slide3">
          {' '}
          <Image className="rounded-3xl w-full h-auto" width={222} height={222} src="/4.png" alt="kek" />
        </div>
        <div className="keen-slider__slide number-slide4">
          {' '}
          <Image className="rounded-3xl w-full h-auto" width={222} height={222} src="/4.png" alt="kek" />
        </div>
        <div className="keen-slider__slide number-slide5">
          {' '}
          <Image className="rounded-3xl w-full h-auto" width={222} height={222} src="/4.png" alt="kek" />
        </div>
        <div className="keen-slider__slide number-slide6">
          {' '}
          <Image className="rounded-3xl w-full h-auto" width={222} height={222} src="/4.png" alt="kek" />
        </div>
      </div>
    </>
  );
}
