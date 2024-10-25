'use client';
import React from 'react';
import { useFormHandler } from '@/hook/useFormHandler';

function MiniFormFooter() {
  const { formData, isFormValid, showThankYou, handleChange, handleSubmit } = useFormHandler({});
  if (showThankYou) {
    return (
      <div className="flex w-full flex-col content-center gap-6 p-10 text-center">
        <p className="text-2xl font-bold text-background_btn">Дякуємо за вашу заявку</p>
      </div>
    );
  }
  return (
    <>
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <label className="mb-6" htmlFor="name">
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder={`Ваше ім'я`}
            name="name"
            id="name"
            required
            autoComplete="name"
            className="w-full rounded-md bg-[#f2f3f7] p-3"
          />
        </label>
        <label className="mb-6" htmlFor="tel">
          <input
            type="tel"
            placeholder="+380"
            value={formData.tel}
            onChange={handleChange}
            name="tel"
            id="tel"
            autoComplete="tel"
            required
            className="w-full rounded-md bg-[#f2f3f7] p-3"
          />
        </label>

        <input
          className="w-full rounded-md bg-background_btn py-4 text-center font-bold text-text_header hover:scale-105 hover:bg-background_btn_hover disabled:bg-slate-400"
          value={`ЗВ'ЯЗАТИСЬ`}
          type="submit"
          disabled={!isFormValid}
          title={isFormValid ? 'Відправити' : 'Будь ласка, заповніть всі поля'}
        />
      </form>
    </>
  );
}

export default MiniFormFooter;
