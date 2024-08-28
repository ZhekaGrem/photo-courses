'use client';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import '@/app/styles/carousel.css';

type ImgItem = {
  id: number;
  src: string;
  alt: string;
};

type PhoneCarouselProps = {
  carousel: ImgItem[];
};

const CarouselProgram: React.FC<PhoneCarouselProps> = ({ carousel }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: 'snap',

    slides: { perView: 1, spacing: 0 },
  });

  return (
    <div className="relative mx-auto min-h-[700px] w-full max-w-md">
      <div ref={ref} className="keen-slider">
        {carousel.map((item) => (
          <div key={item.id} className="keen-slider__slide flex items-center justify-center">
            <Image
              className="w-auto rounded-md object-contain"
              width={400}
              height={400}
              src={item.src}
              alt={item.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow left onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} />
          <Arrow onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()} />
        </>
      )}
    </div>
  );
};

function Arrow(props: { left?: boolean; onClick: (e: any) => void }) {
  return (
    <svg
      onClick={props.onClick}
      className={`arrow rounded-full bg-slate-200 fill-text_1 p-1 opacity-80 shadow-xl ${props.left ? 'arrow--left--program' : 'arrow--right--program'} `}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}

export default CarouselProgram;
