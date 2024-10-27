import React, { useState, useEffect } from 'react';
import { validatePhone } from '@/untils/validation';

interface FormData {
  name: string;
  tel: string;
  email?: string;
}

interface UseFormHandlerProps {
  title?: string;
  onClose?: () => void;
  amount?: string;
}

export const useFormHandler = ({ title, onClose, amount }: UseFormHandlerProps) => {
  const [formData, setFormData] = useState<FormData>({ name: '', tel: '+380', email: '' });
  const [isFormValid, setIsFormValid] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const token = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const chat_id = process.env.NEXT_PUBLIC_CHAT_ID;

  // Utility for phone validation

  useEffect(() => {
    setIsFormValid(formData.name.trim() !== '' && validatePhone(formData.tel));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLiqPayPayment = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://liqpay-photo-course.onrender.com/pay', {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const courseInfo = title ? `Який курс обрав клієнт: ${title}` : 'Курс не обрано';
    const text = `Клієнт Курси Фото:\nІм'я Клієнта: ${formData.name}\nНомер клієнта: ${formData.tel}\nЕмеіл клієнта: ${formData.email}\n${courseInfo}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ chat_id, text }),
      });
      const data = await response.json();

      if (!data.ok) {
        console.error('Помилка: при відправці');
        return;
      }
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        setFormData({ name: '', tel: '+380', email: '' });
        if (onClose) onClose();
      }, 2000);
    } catch (error) {
      console.error('Помилка:', error);
    }
  };

  return { formData, isFormValid, showThankYou, handleChange, handleSubmit, handleLiqPayPayment };
};
