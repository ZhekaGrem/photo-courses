import React from 'react'
import Image from 'next/image';
const Section01 = () => {
  return (
    <section className=" ">
      <div className="w-full flex  container section">
        <div className="w-3/4">
          <div className="py-10">
            <h1 className="font-black text-white text-7xl">
              Курс
              <br />
              фотографа <br />
              для початцівців
            </h1>
            <span className="font-bold text-2xl text-[#cc3151]">ОНЛАЙН-КУРС</span>
          </div>
          <div className="py-10">
            <p className="font-semibold text-white text-4xl">
              Під час курсу ви освоїте професію фотографа від вибору фотоапарату і до пошуку перших клієнтів
            </p>
          </div>
          <div className="py-10"></div>
          <div className="py-10 ">
            <button className="bg-red1 text-2xl font-bold border-2 p-4 text-white hover:bg-texthover rounded-lg ">
              ПОДАТИ ЗАЯВКУ
            </button>
          </div>
        </div>
        <div className="w-1/3 "></div>
      </div>
    </section>
  );
}

export default Section01