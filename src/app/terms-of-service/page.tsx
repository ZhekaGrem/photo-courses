import type { Metadata } from 'next';

const SITE_URL = 'https://www.screenphotoschool.com.ua';
const OG_IMAGE = `${SITE_URL}/assets/img/oleg.png`;

const TITLE = 'Умови надання послуг | Screen Photo School';
const DESCRIPTION =
  'Умови надання послуг та політика повернення коштів для курсів фотографії Screen Photo School.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/terms-of-service`,
    siteName: 'Screen Photo School',
    locale: 'uk_UA',
    type: 'article',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const dynamic = 'force-static';

const Terms_of_service = () => {
  return (
    <div className="legal-page">
      <div className="legal-content container">
        <div className="legal-intro">
          <h1 className="mb-6 text-3xl font-bold text-gray-800">Умови надання послуг та повернення коштів</h1>

          <div className="space-y-6">
            <div className="border-t border-stone-300 py-6">
              <h2 className="mb-3 text-xl font-semibold text-gray-700">Про наш продукт</h2>
              <p className="text-gray-600">
                Онлайн-курс фотографії Screen Photo School для початківців — це ваш квиток у захоплюючий світ
                фотографії. Розроблений провідними експертами, цей курс допоможе вам розкрити свій творчий
                потенціал та опанувати мистецтво фотографії.
              </p>
            </div>

            <div className="border-t border-stone-300 py-6">
              <h2 className="mb-3 text-xl font-semibold text-gray-700">Процес придбання</h2>
              <p className="text-gray-600">
                Придбати курс просто та зручно — оплата здійснюється безпосередньо на нашому сайті. Ми
                гарантуємо безпеку ваших платежів та миттєвий доступ до матеріалів курсу після успішної
                оплати.
              </p>
            </div>

            <div className="border-t border-stone-300 py-6">
              <h2 className="mb-3 text-xl font-semibold text-gray-700">Політика повернення коштів</h2>
              <p className="text-gray-600">
                {`Ми впевнені в якості нашого курсу, але розуміємо, що плани можуть змінюватися.
                Тому ми пропонуємо гнучку політику повернення коштів: якщо ви вирішите
                відмовитися від участі за 2 тижні до початку курсу, ми гарантуємо повне
                повернення коштів. Це наше зобов'язання перед вами та демонстрація впевненості
                у цінності нашого продукту.`}
              </p>
            </div>

            <div className="border-t border-stone-300 py-6">
              <h2 className="mb-3 text-xl font-semibold text-gray-700">Реквізити</h2>
              <p className="text-gray-600">
                ФОП Сернюк Олег · сайт: screenphotoschool.com.ua · телефон: +38 (098) 875 84 42
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              {`Маєте питання? Зв'яжіться з нами: `}
              <a href="mailto:info@screenphotoschool.com.ua" className="underline">
                info@screenphotoschool.com.ua
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Terms_of_service;
