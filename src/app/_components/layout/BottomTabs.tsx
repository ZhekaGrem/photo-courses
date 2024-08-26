'use client';
import Link from 'next/link';

const tabs = [
  { name: 'ШВИДКИЙ СТАРТ', href: '' },
  { name: 'Індивідуальна школа фотографії', href: '' },
  { name: 'Індивідуальна школа фотографії', href: '' },
];

const BottomTabs = () => {
  return (
    <div className="sticky bottom-4 left-1/2 w-full max-w-lg px-3 sm:-translate-x-1/2">
      <nav className="mx-auto rounded-full border border-gray-600 bg-gray-700">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-2">
          <ul className="flex w-full justify-between">
            {tabs.map((tab, id) => (
              <li key={id}>
                <Link
                  href={tab.href}
                  className="block rounded px-1 py-1 text-center text-xs font-medium text-white hover:text-background_btn_hover md:px-2 md:py-2">
                  <span>{tab.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default BottomTabs;
