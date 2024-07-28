'use client';
import React from 'react';
import { Button } from '../common/Button';
import { usePortal } from '@/app/components/layout/PortalContext';
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
    features: ['Доступ до (5+)годинного курсу на дванадцять уроків', 'Розбір домашніх завдань(по розкладу)'],
  },
  {
    title: 'Індивідуальний',
    price: '20k₴',
    description: 'Індивідуально з викладачем (до 5 осіб)',
    features: ['Доступ до (5+)годинного курсу на дванадцять уроків', 'Розбір домашніх завдань(по розкладу)'],
  },
];

const Price2 = () => {
  const { setIsPortalOpen, setTitle } = usePortal();

  const openPortal = (title: string) => {
    setTitle?.(title);
    setIsPortalOpen(true);
  };
  return (
    <section id="price" className="bg-background_section_6">
      <div className="section container mx-auto">
        <h4 className="mb-12 text-center text-text_1">ВАРТІСТЬ НАВЧАННЯ</h4>
        {/* <h2 className="my-12 text-center text-4xl font-bold text-white">Вартість навчання</h2> */}
        <div className="grid grid-cols-1 gap-8 px-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-text_1">{plan.title}</h3>
                <p className="mb-4 text-4xl font-bold">{plan.price}</p>
                <p className="mb-6 min-h-20 text-[#4a4a4a]">{plan.description}</p>
                <Button
                  text="Замовити"
                  onClick={() => openPortal(plan.title)}
                  className="w-full rounded-lg bg-[#e4722b] px-4 py-3 font-bold text-text_2 transition-colors hover:bg-opacity-90"
                />
              </div>
              <div className="bg-[#fff5f0] p-8">
                <h3 className="mb-4 font-semibold text-text_1">Що входить:</h3>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckmarkIcon className="text-background_section_6" />
                      <span className="ml-2 text-[#4a4a4a]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price2;
