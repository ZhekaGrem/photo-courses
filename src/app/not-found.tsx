import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="section-space container">
      <p className="eyebrow">404</p>
      <h1>Сторінку не знайдено</h1>
      <p className="py-6">Перейдіть на головну, щоб обрати курс або знайти потрібну інформацію.</p>
      <Link className="btn" href="/">
        На головну
      </Link>
    </div>
  );
}
