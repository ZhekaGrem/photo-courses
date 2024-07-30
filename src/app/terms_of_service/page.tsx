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
                Наш онлайн фотокурс для початківців - це ваш квиток у захоплюючий світ фотографії. Розроблений
                провідними експертами, цей курс допоможе вам розкрити свій творчий потенціал та опанувати
                мистецтво фотографії.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)]">
              <h2 className="mb-3 text-xl font-semibold text-gray-700">Процес придбання</h2>
              <p className="text-gray-600">
                Придбати курс просто та зручно - оплата здійснюється безпосередньо на нашому сайті. Ми
                гарантуємо безпеку ваших платежів та миттєвий доступ до матеріалів курсу після успішної
                оплати.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)]">
              <h2 className="mb-3 text-xl font-semibold text-gray-700">Політика повернення коштів</h2>
              <p className="text-gray-600">
                {` Ми впевнені у якості нашого курсу, але розуміємо, що плани можуть змінюватися. Тому ми
                пропонуємо гнучку політику повернення коштів: якщо ви вирішите відмовитися від участі за 2 тижні до початку курсу, ми гарантуємо повне повернення коштів. Це наше обовязання перед вами та демонстрація впевненості у цінності нашого продукту.`}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              {`Маєте питання? Зв'яжіться з нами за адресою support@photocourse.com`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Terms_of_service;
