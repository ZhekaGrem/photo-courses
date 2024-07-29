'use client';
import Image from 'next/image';
import React from 'react';
import { usePortal } from '@/app/components/layout/PortalContext';

const plans = [
  {
    title: 'Базовий',
    price: '3k₴',
    description: "П'ятигодинний курс на дванадцять уроків ",
    features: ['Доступ до (5+)годинного курсу на дванадцять уроків'],
  },
  {
    title: 'Досвідчений',
    price: '5.5k₴',
    description: 'Навчання проходить з викладачем',
    features: [
      'Доступ до (5+)годинного курсу на дванадцять уроків',
      'Розбір домашніх завдань(по розкладу)',
      'Індивідуальна школа',
    ],
  },
  {
    title: 'Індивідуальний',
    price: '20k₴',
    description: 'Індивідуально з викладачем (до 5 осіб)',
    features: [
      'Доступ до (5+)годинного курсу на дванадцять уроків',
      'Розбір домашніх завдань(по розкладу)',
      'Індивідуальна школа',
    ],
  },
];

const PortfolioStudent = () => {
  const { setIsPortalOpen, setTitle } = usePortal();

  const openPortal = (title: string) => {
    setTitle?.(title);
    setIsPortalOpen(true);
  };
  return (
    <section className="relative">
      <div className="section absolute z-10 mx-auto flex w-full justify-center text-text_2">
        <h2 className="justify-center rounded-3xl drop-shadow-2xl text-shadow-black">РОБОТИ УЧНІВ </h2>
      </div>
      <FullScreenImage />
    </section>
  );
};

export default PortfolioStudent;

const FullScreenImage = () => (
  <div className="relative h-screen w-full">
    <Image
      loading="lazy"
      src="/BG_block2.png"
      alt="PortfolioStudent"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </div>
);
