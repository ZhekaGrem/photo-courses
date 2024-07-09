'use client'
import React, { useState } from 'react';
import Image from 'next/image';

type InfoType = {
  id:number,
  title:string,
  content:{
    title:string,
    title2:string,
    list:Array<string>,
    img:string
  }
}

const data: InfoType[] = [
  {
    id: 1,
    title: '01 ВИБІР ТЕХНІКИ',
    content: {
      title: 'ВИБІР ТЕХНІКИ',
      title2: 'Програма уроку',
      list: ['Кроп та повний кадр', 'Об‘єктиви', '«Універсальний рюкзак»'],
      img: '/1-2.png',
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
    },
  },
];
const Section03 = () => {
   const [selectedId, setSelectedId] = useState(data[0].id);
   const handleClick = (id:number) => {
     setSelectedId(id);
   };
   return (
     <section className="bg-[#FF7175]">
       <div className="container section">
         <h4>ПРОГРАМА КУРСУ:</h4>
         <div className="flex   relative  items-start flex-row ">
           <ul className="w-1/3 p-4 ">
             {data.map((item) => (
               <li
                 key={item.id}
                 className={`p-2 mb-5  cursor-pointer break-words ${
                   selectedId === item.id
                     ? ' border-b-4 border-black border-solid'
                     : ' border-black border-solid border-b-2  '
                 }`}
                 onClick={() => handleClick(item.id)}>
                 {item.title}
               </li>
             ))}
           </ul>
           <div className=" bg-yellow-400 sticky top-24  w-full py-6 px-6 ">
             <div className="w-full h-full top-0 left-0  ">
               {data.map((item) =>
                 item.id === selectedId ? (
                   <div key={item.id}>
                     <div className="flex p-3">
                       <div className="w-1/2 p-3">
                         <div className="w-full pl-3">
                           <Image
                             loading="lazy"
                             src="/photo-1-2.png"
                             alt="photoaparat"
                             width={99}
                             height={106}
                           />
                         </div>
                         <div className="text-center text-5xl">{item.content.title}</div>
                         <div className="flex justify-end">
                           <Image
                             className=""
                             loading="lazy"
                             src="/phone-1-2.png"
                             alt="phone"
                             width={124}
                             height={134}
                           />
                         </div>
                       </div>
                       <div className="w-1/2 p-3">
                         <div className="text-4xl pb-4">{item.content.title2}</div>
                         <ul>
                           {item.content.list.map((item, index) => (
                             <li className="text-2xl list-disc list-inside" key={index}>
                               {item}
                             </li>
                           ))}
                         </ul>
                       </div>
                     </div>
                     <div className="w-full px-12 py-5 flex justify-center">
                       <Image
                         className="rounded-3xl object-cover"
                         loading="lazy"
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
       </div>
     </section>
   );
}


export default Section03