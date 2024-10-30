import React, { useState } from 'react';
import useFormValidator from '@/hook/useFormValidator';
import usePaymentProcessor from '@/hook/usePaymentProcessor';
import useTelegramService from '@/hook/useTelegramService';
import { PortalProps, FormData } from '@/types/index';

const PopUpUnified: React.FC<PortalProps> = ({ title, onClose, amount }) => {
  const { register, handleSubmit, errors, isValid, isSubmitted, trigger, setFocus } = useFormValidator({
    name: '',
    tel: '+380',
    email: '',
  });
  const { handleLiqPayPayment, isLoading } = usePaymentProcessor();
  const { sendToTelegram } = useTelegramService();
  const [showThankYou, setShowThankYou] = useState(false);
  const [isTouched, setIsTouched] = useState({
    name: false,
    tel: false,
    email: false,
  });

  const onSubmit = async (data: FormData) => {
    await handleLiqPayPayment(Number(amount), title);
    const telegramSent = await sendToTelegram(data, title, 'payment');

    if (telegramSent) {
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        if (onClose) onClose();
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
        <p className="text-2xl font-bold text-white">Дякуємо за вашу заявку</p>
      </div>
    );
  }

  return (
    <form
      className="flex w-full flex-col content-center gap-6 p-10 text-center text-white"
      onSubmit={handleFormSubmit}
      noValidate>
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          {...register('name')}
          placeholder="Ім'я"
          type="text"
          className={`peer h-full w-full border-solid bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal outline-none transition-all focus:border-b-2 focus:outline-none disabled:border-0 ${
            errors.name || (isTouched.name && !errors.name) ? 'border-red-500 text-red-500' : ''
          } ${isSubmitted && !errors.name ? 'border-green-500' : ''}`}
        />
        <label
          className={`after:content[' '] pointer-events-none absolute -top-1 left-0 flex h-full w-full select-none text-sm font-normal leading-tight ${
            errors.name || (isTouched.name && !errors.name) ? 'text-red-500' : 'text-white'
          }`}>
          Ваше ім'я:{' '}
        </label>
        {(errors.name || (isTouched.name && !errors.name)) && (
          <p className="absolute text-left text-sm text-red-500">
            {(errors.name?.message as string) || 'Імя є обовязковим'}
          </p>
        )}
      </div>

      <div className="relative h-11 w-full min-w-[200px]">
        <input
          {...register('tel')}
          placeholder="+380"
          type="tel"
          className={`peer h-full w-full border-solid bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal outline-none transition-all focus:border-b-2 focus:outline-none disabled:border-0 ${
            errors.tel || (isTouched.tel && !errors.tel) ? 'border-red-500 text-red-500' : ' '
          } ${isSubmitted && !errors.tel ? 'border-green-500' : ''}`}
        />
        <label
          className={`after:content[' '] pointer-events-none absolute -top-1 left-0 flex h-full w-full select-none text-sm font-normal leading-tight ${
            errors.tel || (isTouched.tel && !errors.tel) ? 'text-red-500' : 'text-white'
          }`}>
          Ваш номер
        </label>
        {(errors.tel || (isTouched.tel && !errors.tel)) && (
          <p className="absolute text-left text-sm text-red-500">
            {(errors.tel?.message as string) || 'Телефон є обовязковим'}
          </p>
        )}
      </div>

      <div className="relative h-11 w-full min-w-[200px]">
        <input
          {...register('email')}
          placeholder="example@gmail.com"
          type="email"
          className={`peer h-full w-full border-solid bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal outline-none transition-all focus:border-b-2 focus:outline-none disabled:border-0 ${
            errors.email || (isTouched.email && !errors.email) ? 'border-red-500 text-red-500' : ''
          } ${isSubmitted && !errors.email ? 'border-green-500' : ''}`}
        />
        <label
          className={`after:content[' '] pointer-events-none absolute -top-1 left-0 flex h-full w-full select-none text-sm font-normal leading-tight ${
            errors.email || (isTouched.email && !errors.email) ? 'text-red-500' : 'text-white'
          }`}>
          Ваш емейл{' '}
        </label>
        {(errors.email || (isTouched.email && !errors.email)) && (
          <p className="absolute text-left text-sm text-red-500">
            {(errors.email?.message as string) || 'email є обовязковим'}
          </p>
        )}
      </div>

      <div className="flex justify-center gap-10">
        <button
          type="submit"
          className="rounded-3xl border-4 border-double border-transparent p-2 text-2xl font-bold text-white hover:border-white disabled:text-gray-700 disabled:hover:border-gray-600 md:text-xl">
          {isLoading ? 'Обробка...' : 'Оплатити'}
        </button>
      </div>
    </form>
  );
};

export default PopUpUnified;
