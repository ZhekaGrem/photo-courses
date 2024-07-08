'use client'
import React, { useState } from 'react';

type InfoType = {
  id:number,
  title:string,
  content:string
}

const data: InfoType[] = [
  { id: 1, title: '01 ВИБІР ТЕХНІКИ', content: '1Block' },
  { id: 2, title: '02 ЕКСПОЗИЦІЯ, ДІАФРАГМА, ЗАМІР ЕКСПОЗИЦІЇ ', content: '2Bloc' },
  { id: 3, title: '03 ВИТРИМКА ТА ISO (СВІТЛОЧУТЛИВІСТЬ)', content: 'Bloc 3' },
  { id: 4, title: '04 КОМПОЗИЦІЯ', content: 'Bloc4' },
  { id: 5, title: '05 КОЛІР', content: 'Bloc5' },
  { id: 6, title: '06 СВІТЛО', content: 'Bloc' },
  { id: 7, title: '07 ПОРТФОЛІО', content: 'Bloc' },
  { id: 8, title: '08 ІМПРОВІЗАЦІЙНА ЗЙОМКА ВІД ВХОДУ У СТУДІЮ ДО ВИХОДУ', content: 'Bloc' },
  { id: 9, title: '09 ХТО ТАКИЙ ФОТОГРАФ В ОЧАХ КОЛЕГ', content: 'Bloc' },
  { id: 10, title: '10 ВИБІР ТА ПРОЯВКА В ЛАЙТРУМ', content: 'Bloc' },
  { id: 11, title: '11 ЯК ЗНАЙТИ ПЕРШОГО КЛІЄНТА', content: 'Bloc' },
  { id: 12, title: '12 РОЗБІР ВАШИХ РОБІТ ТА ДОМАШНІХ ЗАВДАНЬ', content: 'Bloc' },
  { id: 13, title: '13 БОНУСНИЙ УРОК', content: 'Bloc' },
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
           <div className="w-1/3 p-4 ">
             {data.map((item) => (
               <div
                 key={item.id}
                 className={`p-2 mb-2  cursor-pointer break-words ${
                   selectedId === item.id
                     ? ' border-b-4 border-black border-solid'
                     : ' border-black border-solid border-b-2  '
                 }`}
                 onClick={() => handleClick(item.id)}>
                 {item.title}
               </div>
             ))}
           </div>
           <div className=" bg-yellow-400 sticky top-24  w-full py-6 px-6 ">
             <div className="w-full h-full top-0 left-0  ">
               {data.map((item) => (item.id === selectedId ? <div key={item.id}>{item.content}</div> : null))}
             </div>
           </div>
         </div>
       </div>
     </section>
   );
}


export default Section03