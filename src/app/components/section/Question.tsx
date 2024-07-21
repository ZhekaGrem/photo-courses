'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { a_d_t, a_t_t } from '@/app/assets/animation';

import {section_7} from '@/db/data'

type IndexType = number | null;

type HandleClickButton = (index: number) => void;


const Question = () => {
  const [openIndex, setOpenIndex] = useState<IndexType>(null);
  const handleButtonClick: HandleClickButton = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-background_section_7">
      <motion.div initial="hidden" whileInView="visible" className="container section">
        <motion.h4 variants={a_d_t} custom={1} className="  text-text_1 mb-12">
          {section_7.title}
        </motion.h4>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2 w-full p-6">
            <ul className="space-y-4">
              {section_7.faqs.map((item, index) => (
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
                        className={`min-w-6 h-6 transform transition-transform duration-300 ${
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
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <Image
                loading="lazy"
                className="rounded-lg shadow-2xl"
                src="/ICH_7748-копія-2-1.png"
                width={800}
                height={860}
                alt="Фотограф за роботою"
              />
              <div className="absolute inset-0 bg-gradient-to-t  to-transparent rounded-lg"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <motion.h3 variants={a_t_t} custom={2} className="text-3xl font-bold mb-2">
                  {section_7.text1}
                </motion.h3>
                <motion.p variants={a_t_t} custom={2.5} className="text-xl">
                  {section_7.text2}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Question;
