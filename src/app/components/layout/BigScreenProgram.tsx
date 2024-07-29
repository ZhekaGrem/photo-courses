'use client';
import React, { useState } from 'react';
import Image from 'next/image';

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
    <div className="relative flex flex-row items-start">
      <ul className="w-1/3 p-4">
        {data.map((item) => (
          <li
            key={item.id}
            className={`mb-5 cursor-pointer break-words p-2 text-xl font-bold ${
              selectedId === item.id
                ? 'border-text-text_2 border-b-4 border-solid'
                : 'border-text-text_2 border-b-2 border-solid'
            }`}
            onClick={() => handleClick(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>
      <div className="sticky top-4 w-full px-6">
        <div className="left-0 top-0 h-full w-full pt-4">
          {data.map((item) =>
            item.id === selectedId ? (
              <div key={item.id}>
                <div className="flex justify-center px-3 pb-5">
                  <div className="px-12">
                    <div className="pb-3 text-xl font-bold lg:text-2xl">{item.content.title}</div>
                    <ul className="flex w-full flex-col justify-center px-12 pb-5">
                      {item.content.list.map((item, index) => (
                        <li className="list-inside list-disc text-lg lg:text-xl" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex w-full justify-center px-12 pb-5">
                  <Image
                    loading={item.content.loading as 'eager' | 'lazy' | undefined}
                    className="w-auto rounded-lg object-cover shadow-2xl"
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
