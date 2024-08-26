import React, { useState } from 'react';

const LiqPayButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = () => {
    setIsLoading(true);

    // Тестові дані
    const publicKey = 'ваш_тестовий_публічний_ключ';
    const amount = 1;
    const description = 'Тестовий платіж';
    const orderId = Date.now().toString();

    const data = btoa(
      JSON.stringify({
        public_key: publicKey,
        version: '3',
        action: 'pay',
        amount: amount,
        currency: 'UAH',
        description: description,
        order_id: orderId,
      })
    );

    // УВАГА: Це не безпечно для реального використання!
    // У реальному додатку signature повинен генеруватися на сервері
    const testSignature = 'тестовий_signature';

    // Створення та відправка форми
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://www.liqpay.ua/api/3/checkout';
    form.target = '_blank'; // Відкриває в новому вікні

    const addInput = (name: string, value: any) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    addInput('data', data);
    addInput('signature', testSignature);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setIsLoading(false);
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading}
      className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 disabled:bg-gray-400">
      {isLoading ? 'Завантаження...' : 'Оплатити через LiqPay'}
    </button>
  );
};

export default LiqPayButton;
