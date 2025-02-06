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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});
  const [visibleSlides, setVisibleSlides] = useState<number[]>([0]);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      const current = slider.track.details.rel;
      setCurrentSlide(current);
      const next = (current + 1) % carousel.length;
      const prev = current === 0 ? carousel.length - 1 : current - 1;
      setVisibleSlides([prev, current, next]);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: 'snap',
    slides: { perView: 1, spacing: 0 },
  });

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const getImagePriority = (index: number): boolean => {
    return index === 0;
  };

  return (
    <div className="relative mx-auto min-h-[200px] w-full max-w-md md:min-h-[700px]">
      <div ref={ref} className="keen-slider">
        {carousel.map((item, index) => (
          <div key={item.id} className="keen-slider__slide flex items-center justify-center">
            {(visibleSlides.includes(index) || index === 0) && (
              <div className="flex h-full w-full content-center justify-center">
                <Image
                  className={`w-auto rounded-md object-contain transition-opacity duration-500 ${
                    imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                  width={400}
                  height={400}
                  src={item.src}
                  alt={item.alt}
                  priority={getImagePriority(index)}
                  loading={getImagePriority(index) ? 'eager' : 'lazy'}
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 700px"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRhICAABXRUJQVlA4WAoAAAAgAAAAAQAAAQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggJAAAAJABAJ0BKgIAAgADgFolpAAC51m2AAD+5vktfOMAEl7C5OgAAA=="
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            )}
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
      className={`arrow rounded-full bg-slate-200 fill-text_1 p-1 opacity-80 shadow-xl ${
        props.left ? 'arrow--left--program' : 'arrow--right--program'
      } `}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}

export default CarouselProgram;
