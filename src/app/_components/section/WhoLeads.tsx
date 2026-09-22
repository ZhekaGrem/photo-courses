import Image from 'next/image';
import CarouselMini from '../layout/CarouselMini';
export default function WhoLeads() {
  return (
    <section className="section-space" id="author">
      <div className="author-profile container">
        <div>
          <p className="eyebrow">Автор курсів Screen Photo School</p>
          <h1>Олег Сернюк</h1>
          <p>
            Арт- і fashion-фотограф, член Української асоціації професійних фотографів. Понад 10 років досвіду
            роботи з образами, світлом і командою.
          </p>
          <p>
            Роботи Олега публікувалися у міжнародних виданнях Of Town, Connor, Isabella, 17:23, Poza, Vigour,
            Vous, Art of Portrait, Mob, Malvie, Selin, Elegant, Marika та Top Posters. Його фотографії цінують
            у США, Франції, Іспанії, Канаді та Великій Британії.
          </p>
          <p>У курсах — досвід фотографа: від вибору камери й композиції до студійних схем освітлення.</p>
          <a className="btn" href="#portfolio">
            Переглянути роботи ↗
          </a>
        </div>
        <Image
          src="/assets/img/oleg.png"
          alt="Фотограф Олег Сернюк"
          width={600}
          height={650}
          priority
          sizes="(max-width: 767px) 90vw, 45vw"
        />
      </div>
      <div className="container">
        <p className="eyebrow mt-12">Комерційні співпраці</p>
        <CarouselMini />
      </div>
    </section>
  );
}
