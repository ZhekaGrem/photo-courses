import React from 'react';
import Image from 'next/image';

const CustomerSearch = () => {
  return (
    <section className="overflow-hidden bg-background_section_5">
      <div className="section container">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="relative mb-12 lg:mb-0 lg:w-1/2">
            <div className="absolute left-0 top-0 z-0 h-full w-full -translate-x-1/4 -skew-x-12 transform bg-yellow-400"></div>
            <div className="relative z-10">
              <Image loading="lazy" src="/3.png" width={360} height={670} alt="Автор курсу" />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-16">
            <h4 className="relative mb-6 text-text_3">
              ПОШУК КЛІЄНТІВ:
              <span className="absolute -left-8 top-0 h-full w-2 bg-yellow-400"></span>
            </h4>
            <p className="mb-8 text-2xl font-bold text-text_3">
              ПІСЛЯ КУРСУ ВИ ОСВОЇТЕ ПРОФЕСІЮ ФОТОГРАФА ВІД ВИБОРУ ФОТОАПАРАТУ І ДО ПОШУКУ ПЕРШИХ КЛІЄНТІВ
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-6 w-6 text-yellow-400"
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
                  className="mr-2 h-6 w-6 text-yellow-400"
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
                  className="mr-2 h-6 w-6 text-yellow-400"
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
            <button className="mt-8 rounded-full bg-yellow-400 px-6 py-3 font-bold text-background_section_5 transition-colors duration-300 hover:bg-yellow-500">
              ДІЗНАТИСЯ БІЛЬШЕ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSearch;
