import React from 'react'
import Image from 'next/image';
import CarouselMini from '../components/CarouselMini';

const WhoLeads = () => {
  return (
    <section className="bg-background_section_3 ">
      <div className="container section">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h4 className="">ХТО БУДЕ ПРОВОДИТИ КУРС?</h4>
            <h3 className="text-3xl font-semibold text-yellow-400 mb-8">ОЛЕГ СЕРНЮК</h3>
            <div className=" rounded-lg shadow-lg p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-400 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-gray-700">
                    ПРОФЕСІЙНИЙ АРТ ФЕШН ФОТОГРАФ, ЧЛЕН УКРАЇНСЬКОЇ АСОЦІАЦІЇ ПРОФЕСІЙНИХ ФОТОГРАФІВ, 9 РОКІВ
                    ПРАКТИКИ.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-400 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-gray-700">
                    РОБОТИ ПУБЛІКУВАЛИСЯ У АМЕРИКАНСЬКИХ, ФРАНЦУЗЬКИХ, ІСПАНСЬКИХ, КАНАДСЬКИХ, БРИТАНСЬКИХ
                    ЖУРНАЛАХ ТАКИХ ЯК OF TOWN, CONNOR, ISABELLA, 17:23, POZA, VIGOUR, VOUS, ART OF PORTRAIT,
                    MOB, MALVIE, SELIN, ELEGANT, MARIKA, TOP POSTERS.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              <Image
                src="/ICH.png"
                width={600}
                height={600}
                alt="Олег Сернюк"
                className="rounded-lg shadow-2xl z-0"
              />
              <div className="absolute z-10  -right-6 bg-yellow-400 text-text_1 p-1  rounded-lg shadow-lg">
                <p className=" font-bold text-xl p-1">9+ років досвіду</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <CarouselMini />
        </div>
      </div>
    </section>
  );
}

export default WhoLeads;