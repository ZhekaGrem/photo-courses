'use client';
import React from 'react';
import Button from '../common/Button';
import { usePortal } from '@/app/components/layout/PortalContext';

const Price = () => {
  const { isPortalOpen, setIsPortalOpen } = usePortal();
  return (
    <section className="bg-background_section_7 ">
      <div className="container section text-text_2 ">
        <h4 className="text-center">НАЙКРАЩА ІНВЕСТИЦІЯ У ВАШЕ МАЙБУТНЄ</h4>

        <div className=" rounded-xl shadow-2xl p-6 max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold">Преміум Пакет</h3>
            <span className="bg-yellow-400 text-[#cc3151] text-sm font-bold py-1 px-3 rounded-full">
              БЕСТСЕЛЕР
            </span>
          </div>

          <ul className="text-lg mb-8 space-y-4">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                <strong>Довічний доступ</strong> до всіх уроків та матеріалів курсу
              </span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                <strong>Ексклюзивні додаткові матеріали</strong> до кожного уроку
              </span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                Доступ до <strong>закритої спільноти професіоналів</strong>
              </span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>
                <strong>Сертифікат</strong> професійного фотографа
              </span>
            </li>
          </ul>

          <div className="text-center mb-8">
            <p className="text-lg line-through mb-2">Звичайна ціна: 490$</p>
            <p className="text-4xl font-bold text-red-600 mb-4">СПЕЦІАЛЬНА ПРОПОЗИЦІЯ: 199$</p>
            <p className="text-sm text-gray-600">Економія 291$ (60% знижка)</p>
          </div>
          <Button
            onClick={() => setIsPortalOpen(true)}
            text="ПОЧАТИ НАВЧАННЯ ЗАРАЗ"
            className="w-full text-2xl ont-bold md:px-6 py-2"
          />

          <p className="text-center text-sm mt-4">Гарантія повернення коштів протягом 30 днів</p>
        </div>

        <div className="mt-12 text-center">
          <h4 className="text-2xl font-bold mb-4">Що кажуть наші студенти:</h4>
          <div className="flex justify-center space-x-4">
            <div className=" p-4 rounded-lg shadow max-w-xs">
              <h2>тут будеп відео</h2>
              {/* <iframe
                className="rounded-3xl bg-white"
                width="300"
                height="350"
                src=""
                title="YouTube video player"
                allowFullScreen></iframe> */}
              <p className="italic mb-2">Цей курс змінив моє життя. Тепер я професійний фотограф!</p>
              <p className="font-bold">- Олена К.</p>
            </div>
            <div className=" p-4 rounded-lg shadow max-w-xs ">
              {/* <h2>тут будеп відео</h2>
              <iframe
                className="rounded-3xl bg-white"
                width="300"
                height="350"
                src=""
                title="YouTube video player"
                allowFullScreen>
                {' '}
              </iframe> */}
              <p className="italic mb-2">Цей курс змінив моє життя. Тепер я професійний фотограф!</p>
              <p className="font-bold">- Олена К.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
