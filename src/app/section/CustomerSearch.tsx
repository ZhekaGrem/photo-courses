import React from 'react';
import Image from 'next/image';

const CustomerSearch = () => {
  return (
    <section className="bg-background_section_5">
      <div className="container section flex text-text_3">
        <div className="w-1/2">
          <Image className="max-w-full h-auto" src="/3.png" width={360} height={670} alt="kek" />
        </div>
        <div className="w-1/2  content-center">
          <h4>ПОШУК КЛІЄНТІВ:</h4>
          <p className="w-3/4 text-2xl font-bold">
            ПІСЛЯ КУРСУ ВИ ОСВОЇТЕ ПРОФЕСІЮ ФОТОГРАФА ВІД ВИБОРУ ФОТОАПАРАТУ І ДО ПОШУКУ ПЕРШИХ КЛІЄНТІВ
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerSearch;
