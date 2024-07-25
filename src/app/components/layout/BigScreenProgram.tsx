'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { a_l_t, a_d_t, a_r_t, a_t_t } from '@/app/assets/animation';

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

const BigScreenProgram: React.FC<ComponentProps> = ({ data }) => {
  const [selectedId, setSelectedId] = useState(data[0].id);
  const handleClick = (id: number) => {
    setSelectedId(id);
  };
  return (
    <div
  
      className="flex   relative  items-start flex-row ">
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
      <div className="sticky top-4  w-full  px-6 ">
        <div className="w-full h-full top-0 left-0  ">
          {data.map((item) =>
            item.id === selectedId ? (
              <div
              
                key={item.id}>
                <div className="flex px-3 pb-3">
                  <div className="w-1/2 p-3 hidden">
                    {/* <div  className="w-full pl-3">
                      <Image src="/photo-1-2.png" alt="photoaparat" width={90} height={97} />
                    </div> */}
                    <div

                      className="text-center text-2xl lg:text-4xl  font-extrabold  break-words overflow-hidden max-w-full mt-4 p-4">
                      {item.content.title}
                    </div>
                    {/* <div  className="flex justify-end">
                      <Image className="" src="/phone-1-2.png" alt="phone" width={100} height={114} />
                    </div> */}
                  </div>
                  <div className="w-full lg:p-3">
                    <div
                    
                      className=" text-xl lg:text-2xl font-bold  pb-4">
                      {item.content.title}
                    </div>
                    <ul>
                      {item.content.list.map((item, index) => (
                        <li
                       
                          className="text-lg lg:text-xl list-disc list-inside"
                          key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div  className="w-full px-12 pb-5 flex justify-center">
                  <Image
                    loading={item.content.loading as 'eager' | 'lazy' | undefined}
                    className="w-full object-cover rounded-lg shadow-2xl"
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
};

export default BigScreenProgram;
