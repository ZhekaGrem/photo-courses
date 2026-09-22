import { data_section_2, section_6 } from '../db/data.js';

export type CourseId = 'faststart' | 'prosvitlo';
export const isCourseId = (value: unknown): value is CourseId =>
  value === 'faststart' || value === 'prosvitlo';
export const money = (value: number) => `${new Intl.NumberFormat('uk-UA').format(value)} грн`;
const amount = (value?: string) => Number((value || '').replace(/\D/g, ''));

const descriptions = {
  faststart: {
    name: 'Швидкий старт',
    level: 'Для початківців',
    summary: 'Опануйте камеру, композицію та обробку. Від першого усвідомленого кадру до власного портфоліо.',
    duration: '5 годин відео',
    lessons: '12 уроків + бонус',
    result: 'Розберіться з налаштуваннями камери, побудовою кадру й основами обробки.',
  },
  prosvitlo: {
    name: 'PRO Світло',
    level: 'Для тих, хто вже фотографує',
    summary: 'Працюйте зі студійним, постійним та змішаним світлом. Створюйте освітлення під свій задум.',
    duration: 'Понад 8 годин відео',
    lessons: '10 уроків',
    result: 'Навчіться обирати й поєднувати джерела світла для різних знімальних задач.',
  },
};
const outcomes: Record<CourseId, string[]> = {
  faststart: [
    'Оберете камеру й об’єктив під свої задачі.',
    'Зрозумієте, як керувати експозицією та глибиною різкості.',
    'Навчитеся працювати з рухом і світлочутливістю.',
    'Побудуєте кадр за допомогою композиції.',
    'Використаєте колір для настрою кадру.',
    'Розберетеся з основними принципами освітлення.',
    'Зрозумієте, як добирати роботи у портфоліо.',
    'Простежите весь процес студійної зйомки.',
    'Розберетеся у взаємодії фотографа з командою.',
    'Опануєте відбір і проявку фотографій у Lightroom.',
    'Складете уявлення про пошук перших клієнтів.',
    'Познайомитеся з просуванням через таргетовану рекламу.',
    'Потренуєте візуальне сприйняття на прикладі фільму.',
  ],
  prosvitlo: [
    'Познайомитеся з інструментами фотостудії.',
    'Зрозумієте вплив світла на зображення.',
    'Розберетеся з імпульсними джерелами.',
    'Попрактикуєте класичне постійне освітлення.',
    'Дізнаєтеся, як використовувати воду та дим у кадрі.',
    'Розберете поєднання різних джерел світла.',
    'Навчитеся аналізувати складні схеми освітлення.',
    'Дізнаєтеся про творчі прийоми з довгою витримкою.',
    'Розберете застосування спалахів поза студією.',
    'Зберете робочі схеми для своїх зйомок.',
  ],
};

export const courses = (['faststart', 'prosvitlo'] as const).map((id) => ({
  id,
  ...descriptions[id],
  program: data_section_2.variants
    .find((v) => v.id === id)!
    .program.map((lesson, index) => ({ ...lesson, outcome: outcomes[id][index] })),
  plans: section_6.variants
    .find((v) => v.id === id)!
    .price.map(({ id: planId, content }, index) => {
      const price = amount(content.newPrice || content.price);
      const previousPrice = content.price ? amount(content.price) : undefined;
      return {
        id: planId,
        originalTitle: content.title,
        title: ['Базовий експрес', 'Базовий', 'Зі зворотним зв’язком', 'З наставником'][index],
        price,
        previousPrice,
        discount:
          previousPrice && previousPrice > price ? Math.round((1 - price / previousPrice) * 100) : undefined,
        description: content.description,
        features: content.features,
        audience: [
          'Для самостійного інтенсивного знайомства з курсом.',
          'Для самостійного вивчення матеріалу.',
          'Для навчання з розбором домашніх завдань.',
          'Для особистого діалогу з викладачем.',
        ][index],
        access:
          index === 0
            ? '2 тижні'
            : id === 'prosvitlo' && index === 1
              ? 'Уточніть під час консультації'
              : '6 місяців',
        review:
          index < 2
            ? 'Уточніть під час консультації'
            : index === 2
              ? 'У чаті за розкладом'
              : 'В особистому чаті',
        materials: index < 2 ? 'Відеоуроки курсу' : 'Відеоуроки та додаткові матеріали',
        personal: index === 3 ? 'Особистий чат з викладачем' : 'Уточніть під час консультації',
        aftercare: index === 3 ? 'Консультації ще 2 місяці' : 'Уточніть під час консультації',
      };
    }),
}));
export const getCourse = (id: CourseId) => courses.find((course) => course.id === id)!;
export function courseFromUrl(url: URL): CourseId | undefined {
  const hash = url.hash.slice(1);
  if (isCourseId(hash)) return hash;
  const query = url.searchParams.get('variant');
  return isCourseId(query) ? query : undefined;
}
export function courseHref(id: CourseId, target: 'program' | 'price' = 'program') {
  return target === 'price' ? `/?variant=${id}#price` : `/#${id}`;
}
export type LeadSelection = { courseId: CourseId; planId?: number } | null;
