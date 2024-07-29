'use client';
import React from 'react';
import { Button } from '../common/Button';
import { usePortal } from '@/app/components/layout/PortalContext';
import { section_6 } from '@/db/data';
import CheckmarkIcon from '../common/Checkmark';
import { motion } from 'framer-motion';

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
    <section id="price" className="imgBg3 min-h-screen bg-cover bg-center pb-0">
      <div className="section container mx-auto flex justify-center text-text_2">
        <h2 className="justify-center rounded-3xl drop-shadow-2xl text-shadow-black">РОБОТИ УЧНІВ </h2>
      </div>
    </section>
  );
};

export default PortfolioStudent;
