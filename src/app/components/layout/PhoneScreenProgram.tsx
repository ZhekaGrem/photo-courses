'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { a_l_t,a_r_t,a_d_t,a_t_t } from '@/app/assets/animation';

type IndexType = number | null;

type HandleClickButton = (index: number) => void;
type InfoType = {
  id: number;
  title: string;
  content: {
    title: string;
    title2: string;
    list: Array<string>;
    img: string;
    loading?: string;
  };
};

type ComponentProps = {
  data: InfoType[];
};

const PhoneScreenProgram: React.FC<ComponentProps> = ({data}) => {
  const [openIndex, setOpenIndex] = useState<IndexType>(null);
  const handleButtonClick: HandleClickButton = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="container section">
      <div className="flex flex-col lg:flex-row gap-12 content-center">
        <div className=" w-full">
          <motion.ul
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className="space-y-4 px-6">
            {data.map((item, index) => (
              <motion.li
                variants={a_l_t}
                custom={item.id}
                key={item.id}
                className="bg-white  rounded-lg shadow-md overflow-hidden  ">
                <button
                  className="w-full text-left p-3 focus:outline-none flex items-center justify-between"
                  onClick={() => handleButtonClick(index)}>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openIndex === index ? 135 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="min-w-10 h-6 flex items-center justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px">
                      <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z" />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}>
                      <div className="px-6 pb-6 text-gray-600">
                        <div className="w-full h-full top-0 left-0  ">
                          {data.map((item) =>
                            item.id === openIndex ? (
                              <motion.div
                                viewport={{ once: true }}
                                initial="hidden"
                                whileInView="visible"
                                key={item.id}>
                                <div className="flex flex-col sm:flex-row sm:px-3 pb-3">
                                  <div className="w-full sm:w-1/2 sm:p-3">
                                    <motion.div variants={a_l_t} custom={1} className="w-full pl-3">
                                      <Image
                                        className="h-auto"
                                        src="/photo-1-2.png"
                                        alt="photoaparat"
                                        width={75}
                                        height={87}
                                      />
                                    </motion.div>
                                    <motion.div
                                      variants={a_d_t}
                                      custom={1}
                                      className="text-center text-2xl sm:text-3xl break-words overflow-hidden">
                                      {item.content.title}
                                    </motion.div>
                                    <motion.div variants={a_r_t} custom={1} className="flex justify-end">
                                      <Image
                                        className="h-auto"
                                        src="/phone-1-2.png"
                                        alt="phone"
                                        width={85}
                                        height={104}
                                      />
                                    </motion.div>
                                  </div>
                                  <div className="w-full sm:w-1/2 p-3">
                                    <motion.div variants={a_t_t} custom={1} className="text-3xl pb-4">
                                      {item.content.title2}
                                    </motion.div>
                                    <ul>
                                      {item.content.list.map((item, index) => (
                                        <li className="text-2xl list-disc list-inside" key={index}>
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                                <div className="w-full sm:px-12 sm:pb-5 flex justify-center">
                                  <Image
                                    loading={item.content.loading as 'eager' | 'lazy' | undefined}
                                    className=" object-cover rounded-lg shadow-2xl h-auto"
                                    src={item.content.img}
                                    alt={item.content.title}
                                    width={550}
                                    height={350}
                                  />
                                </div>
                              </motion.div>
                            ) : null
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default PhoneScreenProgram;
