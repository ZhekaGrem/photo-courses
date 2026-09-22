import Image from 'next/image';
import Link from 'next/link';
export default function LearningStory() {
  return (
    <>
      <section className="section-space student-preview">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Фотографія на практиці</p>
              <h2>Роботи наших учнів</h2>
            </div>
            <Link className="text-link" href="/feedback#student-work">
              Дивитися галерею ↗
            </Link>
          </div>
          <div className="student-strip">
            {['one', 'two', 'three'].map((column, index) => (
              <figure key={column}>
                <Image
                  src={`/assets/gallery/students/column-${column}/1.webp`}
                  alt={
                    [
                      'Портрет біля моря у вечірньому світлі — робота учня школи',
                      'Портрет із білим пір’ям — робота учня школи',
                      'Студійний портрет у білій сорочці — робота учня школи',
                    ][index]
                  }
                  width={480}
                  height={600}
                  sizes="(max-width: 600px) 80vw, 33vw"
                />
              </figure>
            ))}
          </div>
          <p className="field-hint">
            Добірка з галереї учнів школи. Більше фотографій та історій навчання — на сторінці відгуків.
          </p>
        </div>
      </section>
      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / Як проходить навчання</p>
              <h2>Дивіться. Пробуйте. Розвивайте погляд.</h2>
            </div>
          </div>
          <div className="steps-grid">
            <article>
              <span>01</span>
              <h3>Розбирайтеся в темі</h3>
              <p>
                Дивіться онлайн-уроки у межах строку доступу свого тарифу. Програма послідовно розкриває теми
                курсу.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Застосовуйте в кадрі</h3>
              <p>Переносьте прийоми зі світлом, композицією та камерою у власні зйомки.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Обирайте підтримку</h3>
              <p>
                Навчайтеся самостійно або оберіть тариф із перевіркою домашніх завдань чи особистим чатом із
                викладачем.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="mentor-preview">
        <div className="mentor-grid container">
          <Image
            src="/assets/img/oleg.png"
            alt="Олег Сернюк — автор курсів"
            width={600}
            height={650}
            sizes="(max-width: 768px) 90vw, 45vw"
          />
          <div>
            <p className="eyebrow">Знайомтеся з автором</p>
            <h2>Олег Сернюк</h2>
            <p>
              Арт- і fashion-фотограф, член Української асоціації професійних фотографів. Ділиться досвідом
              роботи з камерою, світлом і командою.
            </p>
            <Link className="btn btn-secondary" href="/mentor#author">
              Про автора й його роботи ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
