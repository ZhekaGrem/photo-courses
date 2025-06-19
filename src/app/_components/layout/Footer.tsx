import { footer } from '@/db/data';

import dynamic from 'next/dynamic';
import Loading from '@/app/loading';

const MiniFormFooter = dynamic(() => import('../form/MiniFormFooter'), {
  loading: () => <Loading />,
  ssr: false,
});
const SocialIcons = dynamic(() => import('../common/SocialIcons'), {
  loading: () => <Loading />,
  ssr: false,
});

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="tablet:h-full bg-pageant_blue pt-2 text-lg text-cloud_dancer">
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-8 px-4 py-3 md:grid-cols-3 lg:py-4">
        <div>
          <ul>
            {footer.colum1.list_link.map((link) => (
              <li key={link.id} className="mb-4 text-center sm:text-start">
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
          <h3 className="mb-6 text-center text-sm font-semibold uppercase sm:text-start">
            {footer.colum2.title}
          </h3>
          <MiniFormFooter />
        </div>
        <div>
          <ul className="grid grid-cols-2 grid-rows-3 gap-1.5">
            {footer.colum3.list_link.map((link) => (
              <li
                key={link.id}
                className={`col-span-1 text-balance text-center last:col-span-2 sm:mb-4 sm:text-start`}>
                <a rel="noopener noreferrer" href={link.href} className="hover:underline">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-1 pb-5">
        <div className="container px-3 pb-6 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-base">&copy; {date} STUDIO SMEREKA. Усі права захищено.</p>
          </div>
          <div className="mt-4 flex justify-center md:mt-0">
            <a
              href="https://t.me/GremYevhenii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base transition-colors hover:text-white">
              Зв'язатися з студією
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
