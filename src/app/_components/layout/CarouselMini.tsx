'use client';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { minicarousel } from '@/db/data';

type TypeImange = {
  id: number;
  alt: string;
  src: string;
  numberslider: string;
};

const data: TypeImange[] = minicarousel;

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
      <div ref={sliderRef} className="keen-slider rounded-2xl bg-white shadow-xl">
        {data.map((item) => (
          <div
            key={item.id}
            className={`keen-slider__slide flex max-h-20 max-w-64 items-center justify-center p-2 ${item.numberslider}`}>
            <Image
              className="max-h-full w-auto max-w-full object-contain"
              width={170}
              height={45}
              src={item.src}
              alt={item.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
}
