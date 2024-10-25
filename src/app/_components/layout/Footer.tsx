import { footer } from '@/db/data';
import MiniFormFooter from '../form/MiniFormFooter';
import SocialIcons from '../common/SocialIcons';

//Icon socials

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="tablet:h-full pt-2 text-lg">
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-8 px-4 py-3 md:grid-cols-3 lg:py-4">
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900">{footer.colum1.title}</h3>
          <ul>
            {footer.colum1.list_link.map((link) => (
              <li key={link.id} className="mb-4">
                <span className="sr-only">{link.text}</span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.text}
                  title={link.text}
                  className="hover:underline">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <SocialIcons place="footer" />
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900">{footer.colum2.title}</h3>
          <MiniFormFooter />
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900">{footer.colum3.title}</h3>
          <ul className="grid grid-cols-2 grid-rows-3 gap-1.5">
            {footer.colum3.list_link.map((link) => (
              <li key={link.id} className={`mb-4 ${link.colspan}`}>
                <a rel="noopener noreferrer" href={link.href} className="hover:underline">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-1 pb-5">
        <div className="container px-3 py-6 text-text_1 md:flex md:items-center md:justify-between">
          <div className="text-center text-sm text-gray-500 md:text-left">
            © {date} Фотокурс. Усі права захищені.
          </div>
          <div className="mt-4 flex justify-center md:mt-0">
            <a
              href="https://t.me/GremYevhenii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-text_1 transition-colors hover:text-background_btn">
              Зв`язатися з розробником
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
