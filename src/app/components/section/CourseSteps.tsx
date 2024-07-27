'use client';
import React from 'react';
import { Button } from '../common/Button';
import { usePortal } from '@/app/components/layout/PortalContext';
const data = [
  { id: 1, number: '01', info: 'Обираєте один із двох тарифів курсу' },
  { id: 2, number: '02', info: 'Реєструєтесь на курс та оплачуєте всю суму чи частину' },
  { id: 3, number: '03', info: 'Отримуєте доступ до платформи, де будуть уроки' },
  { id: 4, number: '04', info: 'Отримуєте доступ до групи та каналу в Telegram' },
  { id: 5, number: '05', info: 'Вивчаєте матеріали та отримуєте нову професію' },
];

const CourseSteps = () => {
  const { isPortalOpen, setIsPortalOpen } = usePortal();
  return (
    <section className="bg-background_section_7">
      <div className="section container text-text_2">
        <h4>ЯК ПРОХОДИТь КУРС:</h4>
        <ul className="grid grid-cols-1 grid-rows-2 gap-2 p-2 md:grid-cols-3">
          {data.map((list) => (
            <li key={list.id} className="flex items-center">
              <div className="mr-2.5 text-6xl font-extrabold">{list.number}</div>{' '}
              <div className="max-w-3/4 text-2xl font-normal">{list.info}</div>
            </li>
          ))}
          <li className="flex items-center" key={6}>
            <Button
              onClick={() => setIsPortalOpen(true)}
              className="md:px-7 md:py-3"
              text="ЗАРЕЄСТРУВАТИСЯ"></Button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CourseSteps;
