'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { PortalProps } from '@/types/index';

const schema = yup.object({
  name: yup.string().required("Ім'я є обов'язковим").min(2, "Ім'я повинно містити мінімум 2 символи"),
  tel: yup
    .string()
    .required("Телефон є обов'язковим")
    .matches(/^\+380\d{9}$/, 'Введіть коректний український номер телефону'),
  email: yup
    .string()
    .email('Введіть коректний email')
    .nullable()
    .transform((value) => (value === '' ? null : value)),
});

type FormData = yup.InferType<typeof schema>;

const PopUpUnified: React.FC<PortalProps> = ({ title, onClose, amount }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    trigger,
    setFocus,
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      tel: '+380',
    },
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLiqPayPayment = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/pay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          description: `Оплата за курс: ${title}`,
          order_id: Date.now().toString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Помилка при створенні платежу');
      }

      const { data, signature } = await response.json();

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://www.liqpay.ua/api/3/checkout';
      form.acceptCharset = 'utf-8';

      const dataInput = document.createElement('input');
      dataInput.type = 'hidden';
      dataInput.name = 'data';
      dataInput.value = data;

      const signatureInput = document.createElement('input');
      signatureInput.type = 'hidden';
      signatureInput.name = 'signature';
      signatureInput.value = signature;

      form.appendChild(dataInput);
      form.appendChild(signatureInput);

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error('Помилка при створенні платежу:', error);
      alert('Виникла помилка при створенні платежу. Спробуйте ще раз.');
    } finally {
      setIsLoading(false);
    }
  };

  const sendToTelegram = async (formData: FormData) => {
    const courseInfo = title ? `Який курс обрав клієнт: ${title}` : 'Курс не обрано';
    const text = `Клієнт Курси Фото:\nІм'я Клієнта: ${formData.name}\nНомер клієнта: ${formData.tel}\nЕмеіл клієнта: ${formData.email}\n${courseInfo}\nДія: оплатив`;

    const url = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
          text,
        }),
      });

      const data = await response.json();
      if (!data.ok) {
        throw new Error('Помилка при відправці в Telegram');
      }

      return true;
    } catch (error) {
      console.error('Помилка:', error);
      return false;
    }
  };

  const onSubmit = async (data: FormData) => {
    await handleLiqPayPayment(data);
    const telegramSent = await sendToTelegram(data);

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
      className="flex w-full flex-col content-center gap-6 p-10 text-center"
      onSubmit={handleFormSubmit}
      noValidate>
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          {...register('name')}
          placeholder="Ім'я"
          type="text"
          className={`peer h-full w-full border-b border-white bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 ${
            errors.name ? 'border-red-500' : ''
          } ${isSubmitted && !errors.name ? 'border-green-500' : ''}`}
        />
        <label
          className={`after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-sm font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white ${
            errors.name ? 'text-red-500' : 'text-white'
          }`}>
          Ваше ім`я
        </label>
        {errors.name && <p className="pl-1 text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div className="relative h-11 w-full min-w-[200px]">
        <input
          {...register('tel')}
          placeholder="+380"
          type="tel"
          className={`peer h-full w-full border-b border-white bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 ${
            errors.tel ? 'border-red-500' : ''
          } ${isSubmitted && !errors.tel ? 'border-green-500' : ''}`}
        />
        <label
          className={`after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-sm font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white ${
            errors.tel ? 'text-red-500' : 'text-white'
          }`}>
          Ваш номер
        </label>
        {errors.tel && <p className="pl-1 text-sm text-red-500">{errors.tel.message}</p>}
      </div>

      <div className="relative h-11 w-full min-w-[200px]">
        <input
          {...register('email')}
          placeholder="example@gmail.com"
          type="email"
          className={`peer h-full w-full border-b border-white bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-white focus:border-white focus:outline-0 disabled:border-0 ${
            errors.email ? 'border-red-500' : ''
          } ${isSubmitted && !errors.email ? 'border-green-500' : ''}`}
        />
        <label
          className={`after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-sm font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white ${
            errors.email ? 'text-red-500' : 'text-white'
          }`}>
          Ваш емейл (не обов`язково)
        </label>
        {errors.email && <p className="pl-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div className="flex justify-center gap-10">
        <button
          type="submit"
          disabled={!isValid || isLoading}
          className="rounded-3xl border-4 border-double border-transparent p-2 text-2xl font-bold text-white hover:border-white disabled:text-gray-700 disabled:hover:border-gray-600 md:text-xl">
          {isLoading ? 'Обробка...' : 'Оплатити'}
        </button>
      </div>
    </form>
  );
};

export default PopUpUnified;
