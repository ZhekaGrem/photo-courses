'use client';

import React, { useState } from 'react';
import useFormValidator from '@/hook/useFormValidator';
import useTelegramService from '@/hook/useTelegramService';
import { FormData } from '@/types/index';

function MiniFormFooter({ title }: { title: string }) {
  const { register, handleSubmit, errors, isValid, isSubmitted, trigger, setFocus } = useFormValidator(
    {
      name: '',
      tel: '+380',
      email: '',
    },
    false
  );
  const { sendToTelegram } = useTelegramService();
  const [showThankYou, setShowThankYou] = useState(false);
  const [isTouched, setIsTouched] = useState({
    name: false,
    tel: false,
    email: false,
  });

  const onSubmit = async (data: FormData) => {
    const telegramSent = await sendToTelegram(data, title, 'simple');

    if (telegramSent) {
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
      }, 2000);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsTouched({
      name: true,
      tel: true,
      email: true,
    });
    const result = await trigger();

    if (!result) {
      const firstError = Object.keys(errors)[0] as keyof FormData;
      setFocus(firstError);
    } else {
      handleSubmit(onSubmit)(e);
    }
  };

  if (showThankYou) {
    return (
      <div className="flex w-full flex-col content-center gap-6 p-10 text-center">
        <p className="text-2xl font-bold text-background_btn">Дякуємо за вашу заявку</p>
      </div>
    );
  }
  return (
    <>
      <form className="flex flex-col justify-center" onSubmit={handleFormSubmit} noValidate>
        <label className="mb-6" htmlFor="name">
          <input
            {...register('name')}
            placeholder="Ім'я"
            type="text"
            className="w-full rounded-md bg-[#f2f3f7] p-3"
          />
          {(errors.name || (isTouched.name && !errors.name)) && (
            <p className="absolute text-left text-sm text-red-500">
              {(errors.name?.message as string) || 'Заповнівть Імя'}
            </p>
          )}
        </label>
        <label className="mb-6" htmlFor="tel">
          <input
            {...register('tel')}
            placeholder="+380"
            type="tel"
            className="w-full rounded-md bg-[#f2f3f7] p-3"
          />
          {(errors.tel || (isTouched.tel && !errors.tel)) && (
            <p className="absolute text-left text-sm text-red-500">
              {(errors.tel?.message as string) || 'Заповнівть поле Телефон'}
            </p>
          )}
        </label>

        <input
          className="w-full rounded-md bg-background_btn py-4 text-center font-bold text-text_header hover:scale-105 hover:bg-background_btn_hover disabled:bg-slate-400"
          value={`ЗВ'ЯЗАТИСЬ`}
          type="submit"
          title="Відправити"
        />
      </form>
    </>
  );
}

export default MiniFormFooter;
