'use client';
import React, { useState, useEffect } from 'react';

type ClosePortal = {
  onClose: () => void;
};

const initialFormData = {
  name: '',
  tel: '',
};

const PopUp = ({ onClose }: ClosePortal) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isFormValid, setIsFormValid] = useState(false);
  const validatePhone = (phone: string) => {
    const phoneRegex = /^(\+38|38)?0\d{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  useEffect(() => {
    const isNameValid = formData.name.trim() !== '';
    const isPhoneValid = validatePhone(formData.tel);
    setIsFormValid(isNameValid && isPhoneValid);
  }, [formData]);

  const token = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const chat_id = process.env.NEXT_PUBLIC_CHAT_ID;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const text = `Клієнт Курси Фото:\n
Ім'я Клієнта: ${formData.name}\n
Номер клієнта: ${formData.tel}\n
`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(
      text
    )}`;
    e.preventDefault();
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'applicaton/json',
        },
        body: JSON.stringify({
          chat_id: chat_id,
          text: text,
        }),
      });
      const data = await response.json();

      if (data.ok) {
        onClose();
      } else {
        throw new Error('Помилка при відправці повідомлення');
      }
    } catch (error) {
      console.error('Помилка:', error);
    }
  };

  return (
    <>
      <form className="flex flex-col gap-6 w-full  p-10 content-center text-center" onSubmit={handleSubmit}>
        <div className="relative h-11 w-full  min-w-[200px] ">
          <input
            value={formData.name}
            onChange={handleChange}
            placeholder={`Ім'я`}
            type="text"
            name="name"
            required
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-2xl md:text-sm  font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-orangev-200 focus:border-orange-500 focus:outline-0 disabled:border-0 "
          />
          <label className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-2xl md:text-sm  font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-zinc-50 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
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
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-2xl md:text-sm  font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          />
          <label className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-2xl md:text-sm  font-bolt md:font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            {` Ваш номер:`}
          </label>
        </div>

        <label>
          <input
            disabled={!isFormValid}
            title={isFormValid ? 'Відправити' : 'Будь ласка, заповніть всі поля'}
            className="text-2xl rounded-3xl p-2 hover:border-double border-4 hover:border-white md:text-xl font-bold md:font-normal text-white disabled:text-gray-500 disabled:border-gray-600"
            type="submit"
            value="Замовити"
          />
        </label>
      </form>
    </>
  );
};

export default PopUp;