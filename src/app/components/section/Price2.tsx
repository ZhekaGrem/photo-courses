'use client';
import React from 'react';
import { Button } from '../common/Button';
import { usePortal } from '@/app/components/layout/PortalContext';
import { section_6 } from '@/db/data';
import CheckmarkIcon from '../common/Checkmark';
import { motion } from 'framer-motion';

 

  const plans = [
    {
      title: 'Хочу самостійно',
      price: '4900₴',
      description: 'Проходьте самостійно навчання, без викладача.',
      features: ['Доступ до відео матеріалів', 'Доступ до додаткових матеріалів'],
    },
    {
      title: 'Стандарт',
      price: '5900₴',
      description: 'Навчання проходить з викладачем',
      features: [
        'Доступ до відео матеріалів',
        'Доступ до додаткових матеріалів',
        'Достіп до загального телеграм чату учнів(всіх потоків)',
        'Індивідувальне вирішення питань з викладачем'
      ],
    },
    {
      title: 'Індивідуальний',
      price: '10900₴',
      description: 'Індивідуально з викладачем (до 5 осіб)',
      features: [
        'Доступ до відео матеріалів',
        'Доступ до додаткових матеріалів',
        'Достіп до загального телеграм чату учнів(всіх потоків)',
        'Індивідувальне вирішення питань з викладачем',
        'Консультація з викладачем після курсу(пів року)',
      ],
    },
  ];

const Price2 = () => {
  const { isPortalOpen, setIsPortalOpen } = usePortal();
  return (
    <section id="price" className="bg-background_section_6">
      <div className="container mx-auto">
        <h4>{section_6.title}</h4>
        <h2 className="my-12 text-center text-4xl font-bold text-white">Вартість навчання</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-gray-800">{plan.title}</h3>
                <p className="mb-4 text-4xl font-bold text-background_section_6">{plan.price}</p>
                <p className="mb-6 min-h-20 text-gray-600">{plan.description}</p>
                <Button
                  text="Замовити"
                  onClick={() => setIsPortalOpen(true)}
                  className="w-full rounded-lg bg-background_section_6 px-4 py-3 font-bold text-white transition-colors hover:bg-opacity-90"
                />
              </div>
              <div className="bg-gray-50 p-8">
                <h3 className="mb-4 font-semibold text-gray-800">Що входить:</h3>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckmarkIcon className="text-background_section_6" />
                      {feature}
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
