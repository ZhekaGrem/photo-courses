'use client';
import Link from 'next/link';
import SocialIcons from '../common/SocialIcons';
import MiniFormFooter from '../form/MiniFormFooter';
import { usePortal } from '@/context/PortalContext';
import { courseHref } from '@/lib/courses';
export default function Footer() {
  const { variantId } = usePortal();
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-grid container">
        <div>
          <p className="eyebrow">Screen Photo School</p>
          <h2>Ваш наступний кадр починається тут.</h2>
          <p>Допоможемо обрати курс і формат підтримки.</p>
          <MiniFormFooter />
        </div>
        <div>
          <h3>Зв’яжіться з нами</h3>
          <a className="contact-phone" href="tel:+380988758442">
            +38 (098) 875 84 42
          </a>
          <SocialIcons place="footer" />
          <p className="field-hint">
            ФОП Сернюк Олег
            <br />
            Screen Photo School
          </p>
        </div>
        <nav aria-label="Додаткова навігація">
          <Link href="/">Головна</Link>
          <Link href="/mentor#author">Про автора</Link>
          <Link href="/mentor/#portfolio">Портфоліо автора</Link>
          <Link href="/feedback">Відгуки та роботи учнів</Link>
          <Link href={courseHref(variantId, 'price')}>Вартість навчання</Link>
          <Link href="/terms-of-service">Умови надання послуг</Link>
        </nav>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Screen Photo School</span>
        <a href="https://galychyna.online/" target="_blank" rel="noreferrer">
          Розробка — Galychyna Technologies ↗
        </a>
      </div>
    </footer>
  );
}
