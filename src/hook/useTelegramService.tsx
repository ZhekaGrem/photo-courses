import { FormData } from '@/types/index';

const useTelegramService = () => {
  const sendToTelegram = async (formData: FormData, title: string | undefined, formType: string) => {
    const courseInfo = title ? `Який курс обрав клієнт: ${title}` : 'Курс не обрано';
    const text = `Клієнт Курси Фото:\nІм'я Клієнта: ${formData.name}\nНомер клієнта: ${formData.tel}\nЕмеіл клієнта: ${formData.email}\n${courseInfo}\nДія: ${formType === 'simple' ? "нажав кнопку зв'затись" : 'нажав кнопку купити'}`;

    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.CHAT_ID,
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

  return { sendToTelegram };
};

export default useTelegramService;
