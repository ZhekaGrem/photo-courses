'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import CarouselProgram from '@/app/_components/layout/CarouselProgram';

type IndexType = number | null;
type HandleClickButton = (index: number) => void;

type CarouselType = {
  id: number;
  src: string;
  alt: string;
};

type InfoType = {
  id: number;
  title: string;
  content: {
    title: string;
    title2: string;
    list: Array<string>;
    img?: string;
    img_alt?: string;
    video?: string;
    сarousel?: Array<CarouselType>;
  };
};

type ComponentProps = {
  data: InfoType[];
};

const PhoneScreenProgram: React.FC<ComponentProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<IndexType>(null);

  const handleButtonClick: HandleClickButton = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="section container">
      <div className="flex flex-col content-center gap-12 lg:flex-row">
        <div className="w-full">
          <motion.ol
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className="list-decimal space-y-4 px-6">
            {data.map((item, index) => (
              <li key={item.id} className="overflow-hidden rounded-lg bg-white shadow-md">
                <button
                  className="flex w-full items-center justify-between p-3 text-left focus:outline-none"
                  onClick={() => handleButtonClick(index)}>
                  <span className="text-base font-semibold text-gray-800">
                    {index + 1}. {item.title}
                  </span>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openIndex === index ? 135 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-4 min-w-10 items-center justify-center">
                    <Image className="h-auto" src="/svg/plus.svg" alt="photoaparat" width={35} height={40} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}>
                      <div className="px-6 pb-6 text-gray-700">
                        <div className="left-0 top-0 h-full w-full">
                          {data.map((item) =>
                            item.id === openIndex ? (
                              <motion.div key={item.id}>
                                <div className="flex flex-col pb-3 sm:flex-row sm:px-3">
                                  <div className="hidden w-full sm:w-1/2 sm:p-3"></div>
                                  <div className="w-full p-3">
                                    <div className="text-1xl pb-4 font-semibold">{item.content.title}</div>
                                    <ul>
                                      {item.content.list.map((item, index) => (
                                        <li className="list-inside list-disc" key={index}>
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                                <div className="relative">
                                  {item.content.сarousel ? (
                                    <CarouselProgram carousel={item.content.сarousel} />
                                  ) : item.content.video ? (
                                    <>
                                      <video
                                        className={`h-full w-full rounded-lg object-cover shadow-2xl`}
                                        controls>
                                        <source src={item.content.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                      </video>
                                    </>
                                  ) : item.content.img ? (
                                    <Image
                                      className="h-full rounded-lg object-cover shadow-2xl"
                                      src={item.content.img}
                                      alt={item.content.img_alt || 'Content image'}
                                      width={640}
                                      height={360}
                                      priority={true}
                                    />
                                  ) : null}
                                </div>
                              </motion.div>
                            ) : null
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </motion.ol>
        </div>
      </div>
    </div>
  );
};

export default PhoneScreenProgram;
