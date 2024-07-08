'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
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
const Section01 = () => {
  const [openIndex, setOpenIndex] = useState<IndexType>(null);
  const handleButtonClick: HandleClickButton = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-[#E1E327]">
      <div className="flex w-full container section  rounded-lg">
        <div className="w-1/2">
          <h4 className="text-6xl  font-semibold">ЧАСТІ ЗАПИТАННЯ:</h4>
          <ul className="">
            {aboutuslist.map((item, index) => (
              <motion.li
                initial="hidden"
                animate="visible"
                variants={{ hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } }}
                transition={{ duration: 3 }}
                key={item.key}
                className="border-x-2 border-t-2 last:border-b-2 border-backgraund border-solid ">
                <div className="bg-yellow-300 text-black text-base p-5 ">
                  <button className="w-full text-start " onClick={() => handleButtonClick(index)}>
                    {item.title}
                  </button>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}>
                      <p>{item.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <Image
            className="max-w-full h-auto"
            src="/ICH_7748-копія-2-1.png"
            width={800}
            height={860}
            alt="kek"
          />
        </div>
      </div>
    </section>
  );
};

export default Section01;
