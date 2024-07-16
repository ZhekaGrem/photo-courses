import React from 'react';
import Image from 'next/image';

const CustomerSearch = () => {
  return (
    <section className="bg-background_section_5 overflow-hidden">
      <div className="container section">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 transform -skew-x-12 -translate-x-1/4 z-0"></div>
            <div className="relative z-10">
              <Image
                src="/3.png"
                width={360}
                height={670}
                alt="Автор курсу"
                className=""
              />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-16">
            <h4 className=" text-text_3 mb-6 relative">
              ПОШУК КЛІЄНТІВ:
              <span className="absolute -left-8 top-0 h-full w-2 bg-yellow-400"></span>
            </h4>
            <p className="text-2xl font-bold text-text_3 mb-8">
              ПІСЛЯ КУРСУ ВИ ОСВОЇТЕ ПРОФЕСІЮ ФОТОГРАФА ВІД ВИБОРУ ФОТОАПАРАТУ І ДО ПОШУКУ ПЕРШИХ КЛІЄНТІВ
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-yellow-400 mr-2"
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
                <span className="text-lg">Створення портфоліо</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-yellow-400 mr-2"
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
                <span className="text-lg">Робота з соціальними мережами</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-yellow-400 mr-2"
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
                <span className="text-lg">Стратегії ціноутворення</span>
              </li>
            </ul>
            <button className="mt-8 bg-yellow-400 text-background_section_5 font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition-colors duration-300">
              ДІЗНАТИСЯ БІЛЬШЕ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSearch;
