'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { data_section_2, title_2 } from '@/db/data';

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
const title: string = title_2;

const data: InfoType[] = data_section_2;
const CourseProgram = () => {
  
  return (
    <section id="program" className=" bg-background_section_2">
      <div className="container section text-text_2">
        <h4>{title}</h4>
        {/* <BigScreenProgram/> */}
        <PhoneScreenProgram />
      </div>
    </section>
  );
};
type IndexType = number | null;

type HandleClickButton = (index: number) => void;

export const PhoneScreenProgram =()=>{
const [openIndex, setOpenIndex] = useState<IndexType>(null);
const handleButtonClick: HandleClickButton = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};
return (
  <div className="container section">
    <div className="flex flex-col lg:flex-row gap-12 items-start">
      <div className=" w-full">
        <ul className="space-y-4">
          {data.map((item, index) => (
            <motion.li
              key={item.id}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                      <div className="w-full h-full top-0 left-0  ">
                        {data.map((item) =>
                          item.id === openIndex ? (
                            <div key={item.id}>
                              <div className="flex px-3 pb-3">
                                <div className="w-1/2 p-3">
                                  <div className="w-full pl-3">
                                    <Image src="/photo-1-2.png" alt="photoaparat" width={90} height={97} />
                                  </div>
                                  <div className="text-center text-4xl">{item.content.title}</div>
                                  <div className="flex justify-end">
                                    <Image src="/phone-1-2.png" alt="phone" width={114} height={124} />
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
}
export const BigScreenProgram =()=>{
  const [selectedId, setSelectedId] = useState(data[0].id);
  const handleClick = (id: number) => {
    setSelectedId(id);
  };
  return (
    <div className="flex   relative  items-start flex-row ">
      <ul className="w-1/3 p-4 ">
        {data.map((item) => (
          <li
            key={item.id}
            className={`p-2 mb-5 text-xl font-bold  cursor-pointer break-words ${
              selectedId === item.id
                ? ' border-b-4 border-text-text_2 border-solid'
                : ' border-text-text_2 border-solid border-b-2  '
            }`}
            onClick={() => handleClick(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>
      <div className=" bg-yellow-400 sticky top-4  w-full py-6 px-6 ">
        <div className="w-full h-full top-0 left-0  ">
          {data.map((item) =>
            item.id === selectedId ? (
              <div key={item.id}>
                <div className="flex px-3 pb-3">
                  <div className="w-1/2 p-3">
                    <div className="w-full pl-3">
                      <Image src="/photo-1-2.png" alt="photoaparat" width={90} height={97} />
                    </div>
                    <div className="text-center text-4xl">{item.content.title}</div>
                    <div className="flex justify-end">
                      <Image src="/phone-1-2.png" alt="phone" width={114} height={124} />
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
                    loading={item.content.loading as "eager" | "lazy" | undefined}
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
    </div>
  );
}

export default CourseProgram;