'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ClosePortal = {
  onClose: () => void;
  title?: string;
};

const initialFormData = {
  name: '',
  tel: '+380',
};

const phoneRegex = /^(\+38|38)?0\d{9}$/;

const PopUp = ({ title, onClose }: ClosePortal) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({ name: '', tel: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Фокус на першому полі при відкритті
  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const validateField = (name: string, value: string) => {
    if (name === 'name') {
      return value.trim().length < 2 ? "Ім'я повинно містити мінімум 2 символи" : '';
    }
    if (name === 'tel') {
      return !phoneRegex.test(value.replace(/\s/g, '')) ? 'Невірний формат номера' : '';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Валідація в реальному часі
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const isFormValid = () => {
    return (
      formData.name.trim().length >= 2 && phoneRegex.test(formData.tel.replace(/\s/g, '')) && !isSubmitting
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) return;

    setIsSubmitting(true);
    const courseInfo = title ? `Який курс обрав клієнт: ${title}` : 'Курс не обрано';
    const text = `Клієнт Курси Фото:\nІм'я Клієнта: ${formData.name}\nНомер клієнта: ${formData.tel}\n${courseInfo}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
            text: text,
          }),
        }
      );

      const data = await response.json();

      if (data.ok) {
        setShowThankYou(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error('Помилка при відправці');
      }
    } catch (error) {
      console.error('Помилка:', error);
      setErrors({ ...errors, name: 'Помилка відправки. Спробуйте ще раз.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showThankYou) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="flex w-full flex-col items-center justify-center gap-6 p-10 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}>
          <svg className="h-24 w-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <p className="text-2xl font-bold text-white">Дякуємо за вашу заявку!</p>
        <p className="text-white/80">Ми зв'яжемося з вами найближчим часом</p>
      </motion.div>
    );
  }

  return (
    <form className="flex w-full flex-col gap-6 p-10" onSubmit={handleSubmit}>
      <div className="space-y-6">
        {/* Поле імені */}
        <div className="relative">
          <input
            ref={nameInputRef}
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
            required
            className={`peer w-full rounded-lg border-2 bg-white/10 px-4 py-3 text-white placeholder-transparent transition-all ${errors.name ? 'border-red-500' : 'border-white/30 focus:border-white'} backdrop-blur-sm focus:bg-white/20 focus:outline-none`}
            placeholder="Ім'я"
          />
          <label className="absolute -top-2.5 left-4 rounded-lg px-2 text-sm text-white transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/70 peer-focus:-top-2.5 peer-focus:bg-black peer-focus:text-sm peer-focus:text-white">
            Ваше ім'я
          </label>
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-1 text-sm text-red-400">
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Поле телефону */}
        <div className="relative">
          <input
            value={formData.tel}
            onChange={handleChange}
            type="tel"
            name="tel"
            required
            className={`peer w-full rounded-lg border-2 bg-white/10 px-4 py-3 text-white placeholder-transparent transition-all ${errors.tel ? 'border-red-500' : 'border-white/30 focus:border-white'} backdrop-blur-sm focus:bg-white/20 focus:outline-none`}
            placeholder="Телефон"
          />
          <label className="absolute -top-2.5 left-4 rounded-lg px-2 text-sm text-white transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/70 peer-focus:-top-2.5 peer-focus:bg-black peer-focus:text-sm peer-focus:text-white">
            Ваш номер
          </label>
          <AnimatePresence>
            {errors.tel && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-1 text-sm text-red-400">
                {errors.tel}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Кнопка відправки */}
      <motion.button
        type="submit"
        disabled={!isFormValid()}
        whileHover={{ scale: isFormValid() ? 1.02 : 1 }}
        whileTap={{ scale: isFormValid() ? 0.98 : 1 }}
        className={`relative overflow-hidden rounded-lg px-8 py-4 text-lg font-bold transition-all ${
          isFormValid()
            ? 'bg-gradient-to-r from-[#f62553] to-background_btn_burger text-white shadow-lg hover:shadow-xl'
            : 'cursor-not-allowed bg-gray-600 text-gray-400'
        }`}>
        <AnimatePresence mode="wait">
          {isSubmitting ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-2">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <span>Відправка...</span>
            </motion.div>
          ) : (
            <motion.span key="submit" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Замовити консультацію
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
};

export default PopUp;
