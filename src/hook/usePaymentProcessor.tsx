import { useState } from 'react';

const usePaymentProcessor = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLiqPayPayment = async (amount: number, title: string | undefined) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/pay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
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

  return { handleLiqPayPayment, isLoading };
};

export default usePaymentProcessor;
