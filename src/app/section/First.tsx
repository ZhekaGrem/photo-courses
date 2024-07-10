import React from 'react';
const First = () => {
  return (
    <section className=" imgBg">
      <div className="w-full flex  container section">
        <div className="w-3/4">
          <div className="py-10">
            <h1 className="font-black text-text_2 text-7xl">
              Курс
              <br />
              фотографа <br />
              для початцівців
            </h1>
            <span className="font-bold text-2xl text-[#cc3151]">ОНЛАЙН-КУРС</span>
          </div>
          <div className="py-4">
            <p className="font-normal text-white text-3xl">
              Під час курсу ви освоїте професію фотографа від вибору фотоапарату і до пошуку перших клієнтів
            </p>
          </div>
          <div className="py-4"></div>
          <div className="py-10 ">
            <button className="bg-background_btn hover:bg-background_btn_hover  text-2xl font-bold border-2 p-4 text-white rounded-lg ">
              ПОДАТИ ЗАЯВКУ
            </button>
          </div>
        </div>
        <div className="w-1/3 "></div>
      </div>
    </section>
  );
};

export default First;
