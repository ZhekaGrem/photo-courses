import Image from 'next/image';
export default function Certificate() {
  return (
    <section>
      <div className="container">
        <div className="certificate-grid">
          <div>
            <p className="eyebrow">Професійна спільнота</p>
            <h2>Українська асоціація професійних фотографів</h2>
            <p>Сертифікат Олега Сернюка — серед матеріалів, якими автор ділиться зі студентами школи.</p>
            <a
              className="text-link"
              href="https://ukrainianphotographers.com/"
              target="_blank"
              rel="noreferrer">
              Про UAPP ↗
            </a>
          </div>
          <a href="/assets/img/certifies.jpg" target="_blank" rel="noreferrer">
            <Image
              src="/assets/img/certifies.jpg"
              width={520}
              height={465}
              alt="Сертифікат UAPP Олега Сернюка — відкрити зображення"
              sizes="220px"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
