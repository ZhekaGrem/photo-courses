'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ImgType } from '@/types/index';

import 'swiper/css';
import 'swiper/css/navigation';
import '@/app/styles/carousel.css';

import { porfoliocarousel } from '@/db/data';

const data: ImgType[] = porfoliocarousel;

export default function Carousel() {
  return (
    <div className="relative overflow-hidden">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={4}
        navigation
        loop={true}
        breakpoints={{
          680: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        className="custom-swiper h-full">
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              className="h-full object-cover"
              width={800}
              height={640}
              src={item.link}
              alt={item.alt}
              loading="lazy"
              placeholder="blur"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
