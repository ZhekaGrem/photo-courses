import React from 'react'
import Image from 'next/image';
import CarouselMini from '../components/CarouselMini';

const WhoLeads = () => {
  return (
    <section className="bg-background_section_3 min-h-screen">
      <div className=" container section text-text_1">
        <div className="  flex ">
          <div className="w-1/2 z-20">
            <h4>ХТО БУДЕ ПРОВОДИТИ КУРС?</h4>
            <p>ОЛЕГ СЕРНЮК</p>
          </div>
        </div>
        <div className="w-1/2 "></div>
        <div>
          <ul>
            <li>
              ПРОФЕСІЙНИЙ АРТ ФЕШН ФОТОГРАФ, ЧЛЕН УКРАЇНСЬКОЇ АСОЦІАЦІЇ ПРОФЕСІЙНИХ ФОТОГРАФІВ, 9 РОКІВ
              ПРАКТИКИ.
            </li>
            <li>
              РОБОТИ ПУБЛІКУВАЛИСЯ У АМЕРИКАНСЬКИХ, ФРАНЦУЗЬКИХ, ІСПАНСЬКИХ, КАНАДСЬКИХ, БРИТАНСЬКИХ ЖУРНАЛАХ
              ТАКИХ ЯК OF TOWN, CONNOR, ISABELLA, 17:23, POZA, VIGOUR, VOUS, ART OF PORTRAIT, MOB,
              MALVIE,SELIN, ELEGANT, MARIKA, TOP POSTERS.
            </li>
          </ul>
        </div>
        <div>
          <CarouselMini />
        </div>
      </div>
    </section>
  );
}

export default WhoLeads;