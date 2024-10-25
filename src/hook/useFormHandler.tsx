import { useState, useEffect } from 'react';
import { validatePhone } from '@/untils/validation';

interface FormData {
  name: string;
  tel: string;
}

interface UseFormHandlerProps {
  title?: string;
  onClose?: () => void;
}

export const useFormHandler = ({ title, onClose }: UseFormHandlerProps) => {
  const [formData, setFormData] = useState<FormData>({ name: '', tel: '+380' });
  const [isFormValid, setIsFormValid] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const courseInfo = title ? `Який курс обрав клієнт: ${title}` : 'Курс не обрано';
    const text = `Клієнт Курси Фото:\nІм'я Клієнта: ${formData.name}\nНомер клієнта: ${formData.tel}\n${courseInfo}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ chat_id, text }),
      });
      const data = await response.json();

      if (data.ok) {
        setShowThankYou(true);
        setTimeout(() => {
          setShowThankYou(false);
          setFormData({ name: '', tel: '+380' });
          if (onClose) onClose();
        }, 2000);
      } else {
        throw new Error('Помилка при відправці повідомлення');
      }
    } catch (error) {
      console.error('Помилка:', error);
    }
  };

  return { formData, isFormValid, showThankYou, handleChange, handleSubmit };
};
