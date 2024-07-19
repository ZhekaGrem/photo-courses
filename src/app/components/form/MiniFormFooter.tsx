'use client';
import React, { useState, useEffect } from 'react';

const initialFormData = {
  name: '',
  tel: '',
};

function MiniFormFooter() {
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
        setFormData(initialFormData);
      } else {
        throw new Error('Помилка при відправці повідомлення');
      }
    } catch (error) {
      console.error('Помилка:', error);
    }
  };
  return (
    <>
      <form className="flex  flex-col justify-center " onSubmit={handleSubmit}>
        <label className=" mb-6" htmlFor="">
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder={`Ваше ім'я`}
            name="name"
            required
            className="p-3  rounded-md bg-[#f2f3f7] w-full"
          />
        </label>
        <label className="mb-6 " htmlFor="">
          <input
            type="tel"
            placeholder="+380"
            value={formData.tel}
            onChange={handleChange}
            name="tel"
            required
            className="p-3 rounded-md bg-[#f2f3f7] w-full"
          />
        </label>

        <input
          className="py-4 font-bold text-center  w-full rounded-md text-text_header disabled:bg-slate-400 bg-background_btn  hover:bg-background_btn_hover "
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
