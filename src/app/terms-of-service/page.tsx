import React from 'react';

const Terms_of_service = () => {
  return (
    <div className="min-h-screen bg-background_header px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl bg-gray-100 p-8 shadow-[inset_-5px_-5px_15px_rgba(255,255,255,0.8),inset_5px_5px_10px_rgba(0,0,0,0.1)]">
          <h1 className="mb-6 text-3xl font-bold text-gray-800">Умови надання послуг та повернення коштів</h1>

          <div className="space-y-6">
            <div className="rounded-xl bg-white p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)]">
              <h2 className="mb-3 text-xl font-semibold text-gray-700">Про наш продукт</h2>
              <p className="text-gray-600">
                Наш онлайн фотокурс для початківців (MCC код: 8299 - Educational Services) - це ваш квиток у
                захоплюючий світ фотографії. Розроблений провідними експертами, цей курс допоможе вам розкрити
                свій творчий потенціал та опанувати мистецтво фотографії.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)]">
              <h2 className="mb-3 text-xl font-semibold text-gray-700">Безпека платежів</h2>
              <p className="text-gray-600">
                Оплата здійснюється через платіжну систему LiqPay. Ми не зберігаємо дані ваших карток - всі
                платежі проводяться безпосередньо через захищений віджет LiqPay, який відповідає стандартам
                PCI DSS. Ваші платіжні дані захищені відповідно до міжнародних стандартів безпеки.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)]">
              <h2 className="mb-3 text-xl font-semibold text-gray-700">Політика конфіденційності</h2>
              <p className="text-gray-600">
                Ми збираємо та обробляємо ваші персональні дані відповідно до GDPR та Закону України "Про
                захист персональних даних":
              </p>
              <ul className="mt-2 list-disc pl-6 text-gray-600">
                <li>Email використовується для надання доступу до курсу та комунікації</li>
                <li>Ім'я та прізвище - для персоналізації навчального процесу</li>
                <li>Використовуємо файли cookie для покращення роботи сайту</li>
                <li>Ваші дані не передаються третім особам</li>
                <li>Ви маєте право на видалення своїх даних за запитом</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)]">
              <h2 className="mb-3 text-xl font-semibold text-gray-700">Політика повернення коштів</h2>
              <p className="text-gray-600">
                Відповідно до Закону України "Про захист прав споживачів", ви маєте право:
              </p>
              <ul className="mt-2 list-disc pl-6 text-gray-600">
                <li>
                  Відмовитися від курсу та отримати повне повернення коштів протягом 14 днів з моменту оплати
                </li>
                <li>
                  Повернення коштів здійснюється протягом 7 робочих днів на карту, з якої була здійснена
                  оплата
                </li>
                <li>
                  Для повернення необхідно надіслати заяву на email із зазначенням причини та даних замовлення
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)]">
              <h2 className="mb-3 text-xl font-semibold text-gray-700">Контактна інформація та підтримка</h2>
              <p className="text-gray-600">
                ФОП "Фотокурс"
                <br />
                ЄДРПОУ: XXXXXXXX
                <br />
                Юридична адреса: м. Київ, вул. Хрещатик, 1<br />
                Email підтримки: support@photocourse.com
                <br />
                Телефон підтримки: +380 XX XXX XX XX
                <br />
                Графік роботи підтримки: Пн-Пт, 9:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms_of_service;
