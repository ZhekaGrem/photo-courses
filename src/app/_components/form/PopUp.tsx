'use client';
import React from 'react';
import { useFormHandler } from '@/hook/useFormHandler';

type ClosePortal = {
  onClose: () => void;
  title?: string;
  amount?: string;
};

const PopUp: React.FC<ClosePortal> = ({ title, onClose, amount }) => {
  const { formData, isFormValid, showThankYou, handleChange, handleSubmit, handleLiqPayPayment } =
    useFormHandler({
      title,
      onClose,
      amount,
    });
  if (showThankYou) {
    return (
      <div className="flex w-full flex-col content-center gap-6 p-10 text-center">
        <p className="text-2xl font-bold text-white">Дякуємо за вашу заявку</p>
      </div>
    );
  }
  return (
    <>
      <form className="flex w-full flex-col content-center gap-6 p-10 text-center" onSubmit={handleSubmit}>
        <div className="relative h-11 w-full min-w-[200px]">
          <input
            value={formData.name}
            onChange={handleChange}
            placeholder={`Ім'я`}
            type="text"
            name="name"
            required
            className="border-blue-gray-200 placeholder-shown:border-blue-orangev-200 peer h-full w-full border-b bg-transparent pb-1.5 pt-4 font-sans text-2xl font-normal text-white outline outline-0 transition-all focus:border-orange-500 focus:outline-0 disabled:border-0 md:text-sm"
          />
          <label className="after:content[' '] peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-2.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-2xl font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-zinc-50 peer-disabled:text-transparent md:text-sm">
            {` Ваше ім'я:`}
          </label>
        </div>
        <div className="relative h-11 w-full min-w-[200px]">
          <input
            value={formData.tel}
            onChange={handleChange}
            placeholder={`+380`}
            type="tel"
            name="tel"
            required
            className="border-blue-gray-200 placeholder-shown:border-blue-orangev-200 peer h-full w-full border-b bg-transparent pb-1.5 pt-4 font-sans text-2xl font-normal text-white outline outline-0 transition-all focus:border-orange-500 focus:outline-0 disabled:border-0 md:text-sm"
          />
          <label className="after:content[' '] peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-2.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-2xl font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-zinc-50 peer-disabled:text-transparent md:text-sm">
            {` Ваш номер:`}
          </label>
        </div>
        <div className="relative h-11 w-full min-w-[200px]">
          <input
            onChange={handleChange}
            placeholder={`example@gmail.com`}
            type="email"
            name="email"
            className="border-blue-gray-200 placeholder-shown:border-blue-orangev-200 peer h-full w-full border-b bg-transparent pb-1.5 pt-4 font-sans text-2xl font-normal text-white outline outline-0 transition-all focus:border-orange-500 focus:outline-0 disabled:border-0 md:text-sm"
          />
          <label className="after:content[' '] peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-2.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-2xl font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-zinc-50 peer-disabled:text-transparent md:text-sm">
            {` Ваш емейл:`}
          </label>
        </div>
        <div className="flex justify-center gap-10">
          <label>
            <input
              onClick={handleLiqPayPayment}
              disabled={!isFormValid}
              title={isFormValid ? 'Відправити' : 'Будь ласка, заповніть всі поля'}
              className="rounded-3xl border-4 p-2 text-2xl font-bold text-white hover:border-double hover:border-white disabled:border-gray-600 disabled:text-gray-500 md:text-xl md:font-normal"
              type="submit"
              value="Оплатити"
            />
          </label>
          <label>
            <input
              disabled={!isFormValid}
              title={isFormValid ? 'Відправити' : 'Будь ласка, заповніть всі поля'}
              className="rounded-3xl border-4 p-2 text-2xl font-bold text-white hover:border-double hover:border-white disabled:border-gray-600 disabled:text-gray-500 md:text-xl md:font-normal"
              type="submit"
              value="Зв'язатись"
            />
          </label>
        </div>
      </form>
    </>
  );
};

export default PopUp;
