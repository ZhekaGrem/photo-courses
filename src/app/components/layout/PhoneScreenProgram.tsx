'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
          <ul className="space-y-4 px-6">
            {data.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden  ">
                <button
                  className="w-full text-left p-3 focus:outline-none flex items-center justify-between"
                  onClick={() => handleButtonClick(index)}>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="min-w-6 h-6 flex items-center justify-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 33 33"
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-600">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={5}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
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
                              <div key={item.id}>
                                <div className="flex px-3 pb-3">
                                  <div className="w-1/2 p-3">
                                    <div className="w-full pl-3">
                                      <Image src="/photo-1-2.png" alt="photoaparat" width={75} height={87} />
                                    </div>
                                    <div className="text-center text-4xl">{item.content.title}</div>
                                    <div className="flex justify-end">
                                      <Image src="/phone-1-2.png" alt="phone" width={85} height={104} />
                                    </div>
                                  </div>
                                  <div className="w-1/2 p-3">
                                    <div className="text-3xl pb-4">{item.content.title2}</div>
                                    <ul>
                                      {item.content.list.map((item, index) => (
                                        <li className="text-2xl list-disc list-inside" key={index}>
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                                <div className="w-full px-12 pb-5 flex justify-center">
                                  <Image
                                    loading={item.content.loading as 'eager' | 'lazy' | undefined}
                                    className=" object-cover rounded-lg shadow-2xl"
                                    src={item.content.img}
                                    alt={item.content.title}
                                    width={550}
                                    height={350}
                                  />
                                </div>
                              </div>
                            ) : null
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhoneScreenProgram;
