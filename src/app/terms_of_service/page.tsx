
import Head from 'next/head';

const Terms_of_service = () => {
  return (
    <div className="min-h-screen bg-background_header py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Умови надання послуг та повернення коштів | Фотокурс для початківців</title>
        <meta
          name="description"
          content="Ознайомтеся з нашими умовами надання послуг та політикою повернення коштів для онлайн фотокурсу. Гарантія якості та задоволення клієнтів - наш пріоритет."
        />
      </Head>

      <div className="max-w-3xl mx-auto ">
        <div className="bg-gray-100 shadow-[inset_-5px_-5px_15px_rgba(255,255,255,0.8),inset_5px_5px_10px_rgba(0,0,0,0.1)] rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Умови надання послуг та повернення коштів</h1>

          <div className="space-y-6">
            <div className="bg-white shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">Про наш продукт</h2>
              <p className="text-gray-600">
                Наш онлайн фотокурс для початківців - це ваш квиток у захоплюючий світ фотографії. Розроблений
                провідними експертами, цей курс допоможе вам розкрити свій творчий потенціал та опанувати
                мистецтво фотографії.
              </p>
            </div>

            <div className="bg-white shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">Процес придбання</h2>
              <p className="text-gray-600">
                Придбати курс просто та зручно - оплата здійснюється безпосередньо на нашому сайті. Ми
                гарантуємо безпеку ваших платежів та миттєвий доступ до матеріалів курсу після успішної
                оплати.
              </p>
            </div>

            <div className="bg-white shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">Політика повернення коштів</h2>
              <p className="text-gray-600">
                Ми впевнені у якості нашого курсу, але розуміємо, що плани можуть змінюватися. Тому ми
                пропонуємо гнучку політику повернення коштів: якщо ви вирішите відмовитися від участі за 2
                тижні до початку курсу, ми гарантуємо повне повернення коштів. Це наше зобов'язання перед вами
                та демонстрація впевненості у цінності нашого продукту.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Маєте питання? Зв'яжіться з нами за адресою support@photocourse.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Terms_of_service; 