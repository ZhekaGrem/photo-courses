'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type IndexType = number | null;

type HandleClickButton = (index: number) => void;

const aboutuslist = [
  {
    key: 1,
    title: 'СКІЛЬКИ ЧАСУ ДІЄ ДОСТУП ДО УРОКІВ?',
    description: 'В ПАКЕТІ “ЛЮБИТЕЛЬ” ВИ ОТРИМУЄТЕ ДОСТУП НА ПІВ РОКУ. І НАЗАВЖДИ – В ПАКЕТІ “ПРОФІ”.',
  },
  {
    key: 2,
    title: 'ЧИ БУДЕ ЗАВДАННЯ ЯКЕ ПОТРІБНО ВИКОНАТИ?',
    description:
      'У КОЖНОМУ УРОЦІ БУДЕ ПРОПИСАНО ЗАВДАННЯ, ЯКЕ БУДЕ ПОТРІБНО ВИКОНАТИ, ЯКЩО ЗАВДАННЯ НЕ ВИКОНУЄТЬСЯ, ТО ЦЕ ПРАВО КОЖНОГО, АЛЕ БЕЗ ЦИХ ЗАВДАНЬ, ТЕОРІЯ ЗАСВОЮВАТИМЕТЬСЯ ГІРШЕ. ТАКОЖ ЗАВДАННЯ СФОРМОВАНІ ТАК, ЩОБ ОДРАЗУ МОЖНА БУЛО СФОРМУВАТИ СВОЄ ПОРТФОЛІО.',
  },
  {
    key: 3,
    title: 'ЧИ БУДУТЬ ПЕРЕВІРЯТИ ЗАВДАННЯ?',
    description:
      'КОЖНЕ ЗАВДАННЯ БУДЕ ПЕРЕВІРЕНО. БУДЕ ФІДБЕК З ПОПРАВКАМИ, ТА РЕКОМЕНДАЦІЯМИ ВІД ВИКЛАДАЧА, ЩО ПОТРІБНО ДОПРАЦЮВАТИ, НА ЩО ПОТРІБНО ЗВЕРНУТИ УВАГУ. У РАЗІ, ЯКЩО ЗОВСІМ НЕПРАВИЛЬНО ЗРОБЛЕНО, ТО БУДЕ РОЗПИСАНО ПОСЛІДОВНІСТЬ ЩО ЗА ЧИМ, ЩОБ ВСЕ ПОЛУЧИЛОСЯ.',
  },
  {
    key: 4,
    title: 'ЧИ БУДЕ ПРАКТИКА?',
    description:
      'ПРАКТИКОЮ І Є ВАШІ ЗАВДАННЯ, ЯКІ ДАЮТЬСЯ ПІСЛЯ КОЖНОЇ ТЕМИ. ТАК ЦЕ СКЛАДНІШЕ, БО НЕМА БІЛЯ ВАС ЛЮДИНИ ЯКА Б ВАМ ПІДКАЗАЛА В ПРОЦЕСІ, АЛЕ ЕФЕКТИВНІШЕ, БО В ПРОЦЕСІ ВИ ПРАКТИКУЄТЕ НАВИКИ, МЕТОДОМ ПОВТОРЮВАННЯ ТАК ЩОБ ПОЛУЧИВСЯ ПРАВИЛЬНИЙ РЕЗУЛЬТАТ.',
  },
];
const Question = () => {
  const [openIndex, setOpenIndex] = useState<IndexType>(null);
  const handleButtonClick: HandleClickButton = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-background_section_10">
      <div className="container section">
        <h4 className=" text-center text-text_1 mb-12">ЧАСТІ ЗАПИТАННЯ:</h4>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2">
            <ul className="space-y-4">
              {aboutuslist.map((item, index) => (
                <motion.li
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="w-full text-left p-6 focus:outline-none"
                    onClick={() => handleButtonClick(index)}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                      <svg
                        className={`w-6 h-6 transform transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}>
                        <div className="px-6 pb-6 text-gray-600">
                          <p>{item.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <Image
                className="rounded-lg shadow-2xl"
                src="/ICH_7748-копія-2-1.png"
                width={800}
                height={860}
                alt="Фотограф за роботою"
              />
              <div className="absolute inset-0 bg-gradient-to-t  to-transparent rounded-lg"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Розкрийте свій потенціал</h3>
                <p className="text-xl">Станьте професійним фотографом з нашим курсом</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
