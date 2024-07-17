'use client'
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
    loading?: 'eager' | 'lazy';
  };
};

const data: InfoType[] = [
  {
    id: 1,
    title: '01 ВИБІР ТЕХНІКИ',
    content: {
      title: 'ВИБІР ТЕХНІКИ',
      title2: 'Програма уроку',
      list: ['Кроп та повний кадр', 'Об‘єктиви', '«Універсальний рюкзак»'],
      img: '/1-2.png',
      loading: 'eager',
    },
  },
  {
    id: 2,
    title: '02 ЕКСПОЗИЦІЯ, ДІАФРАГМА, ЗАМІР ЕКСПОЗИЦІЇ ',
    content: {
      title: 'ВИБІР ТЕХНІКИ',
      title2: 'Програма уроку',
      list: ['Кроп та повний кадр', 'Об‘єктиви', '«Універсальний рюкзак»'],
      img: '/1-2.png',
      loading: 'lazy',
    },
  },
  {
    id: 3,
    title: '03 ВИТРИМКА ТА ISO (СВІТЛОЧУТЛИВІСТЬ)',
    content: {
      title: 'ВИБІР ТЕХНІКИ',
      title2: 'Програма уроку',
      list: ['Кроп та повний кадр', 'Об‘єктиви', '«Універсальний рюкзак»'],
      img: '/1-2.png',
      loading: 'lazy',
    },
  },
  {
    id: 4,
    title: '04 КОМПОЗИЦІЯ',
    content: {
      title: 'ВИБІР ТЕХНІКИ',
      title2: 'Програма уроку',
      list: ['Кроп та повний кадр', 'Об‘єктиви', '«Універсальний рюкзак»'],
      img: '/1-2.png',
      loading: 'lazy',
    },
  },
  {
    id: 5,
    title: '05 КОЛІР',
    content: {
      title: 'ВИБІР ТЕХНІКИ',
      title2: 'Програма уроку',
      list: ['Кроп та повний кадр', 'Об‘єктиви', '«Універсальний рюкзак»'],
      img: '/1-2.png',
      loading: 'lazy',
    },
  },
  {
    id: 6,
    title: '06 СВІТЛО',
    content: {
      title: 'ВИБІР ТЕХНІКИ',
      title2: 'Програма уроку',
      list: ['Кроп та повний кадр', 'Об‘єктиви', '«Універсальний рюкзак»'],
      img: '/1-2.png',
      loading: 'lazy',
    },
  },
  {
    id: 7,
    title: '07 ПОРТФОЛІО',
    content: {
      title: 'ВИБІР ТЕХНІКИ',
      title2: 'Програма уроку',
      list: ['Кроп та повний кадр', 'Об‘єктиви', '«Універсальний рюкзак»'],
      img: '/1-2.png',
      loading: 'lazy',
    },
  },
  {
    id: 8,
    title: '08 ІМПРОВІЗАЦІЙНА ЗЙОМКА ВІД ВХОДУ У СТУДІЮ ДО ВИХОДУ',
    content: {
      title: 'ВИБІР ТЕХНІКИ',
      title2: 'Програма уроку',
      list: ['Кроп та повний кадр', 'Об‘єктиви', '«Універсальний рюкзак»'],
      img: '/1-2.png',
      loading: 'lazy',
    },
  },
  {
    id: 9,
    title: '09 ХТО ТАКИЙ ФОТОГРАФ В ОЧАХ КОЛЕГ',
    content: {
      title: 'ВИБІР ТЕХНІКИ',
      title2: 'Програма уроку',
      list: ['Кроп та повний кадр', 'Об‘єктиви', '«Універсальний рюкзак»'],
      img: '/1-2.png',
      loading: 'lazy',
    },
  },
  {
    id: 10,
    title: '10 ВИБІР ТА ПРОЯВКА В ЛАЙТРУМ',
    content: {
      title: 'ВИБІР ТЕХНІКИ',
      title2: 'Програма уроку',
      list: ['Кроп та повний кадр', 'Об‘єктиви', '«Універсальний рюкзак»'],
      img: '/1-2.png',
      loading: 'lazy',
    },
  },
  {
    id: 11,
    title: '11 ЯК ЗНАЙТИ ПЕРШОГО КЛІЄНТА',
    content: {
      title: 'ВИБІР ТЕХНІКИ',
      title2: 'Програма уроку',
      list: ['Кроп та повний кадр', 'Об‘єктиви', '«Універсальний рюкзак»'],
      img: '/1-2.png',
      loading: 'lazy',
    },
  },
  {
    id: 12,
    title: '12 РОЗБІР ВАШИХ РОБІТ ТА ДОМАШНІХ ЗАВДАНЬ',
    content: {
      title: 'ВИБІР ТЕХНІКИ',
      title2: 'Програма уроку',
      list: ['Кроп та повний кадр', 'Об‘єктиви', '«Універсальний рюкзак»'],
      img: '/1-2.png',
      loading: 'lazy',
    },
  },
  {
    id: 13,
    title: '13 БОНУСНИЙ УРОК',
    content: {
      title: 'ВИБІР ТЕХНІКИ',
      title2: 'Програма уроку',
      list: ['Кроп та повний кадр', 'Об‘єктиви', '«Універсальний рюкзак»'],
      img: '/1-2.png',
      loading: 'lazy',
    },
  },
];
const CourseProgram = () => {
  
  return (
    <section id="program" className=" bg-background_section_2">
      <div className="container section text-text_2">
        <h4>ПРОГРАМА КУРСУ:</h4>
        <BigScreenProgram/>
      </div>
    </section>
  );
};

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
                    loading={item.content.loading}
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