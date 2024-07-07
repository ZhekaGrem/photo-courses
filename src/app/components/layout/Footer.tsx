import React from "react";

const data1 = {

  title: "НАШІ КОНТАКТИ:",
  list_link: [
    { id: 1, text: "+38 (066) 867 58 78", href: "#" },
    { id: 2, text: "taraskokobi@gmail.com", href: "#" },
    { id: 3, text: "Львів, вул. Героїв УПА, 73Ж", href: "#" },
  ],
};
const data2 = {

    title: "ЗВ’ЯЗАТИСЬ З НАМИ",
   
}
const data3 = {
    title: "ІНФО",
    list_link: [
      { id: 9, text: "ГОЛОВНА", href: "#" },
      { id: 10, text: "ПРО КУРС", href: "#" },
      { id: 11, text: "ПОРТФОЛІО АВТОРА", href: "#" },
      { id: 12, text: "ПРО АВТОРА", href: "#" },
      { id: 13, text: "ВАРТІСТЬ", href: "#" },]
}


const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className='   text-lg bg-yellow-400 pt-2 tablet:h-full '>
      <div className='grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 mx-auto w-full max-w-screen-xl'>
        <div>
          <h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>
            {data1.title}
          </h3>
          <ul>
            {data1.list_link.map((link) => (
              <li key={link.id} className='mb-4'>
                <a href={link.href} className=' hover:underline'>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>
            {data2.title}
          </h3>
          <form className='flex  flex-col justify-center ' action=''>
            <label className='py-3' htmlFor=''>
              <input type='text' />
            </label>
            <label className='py-3' htmlFor=''>
              <input type='tel' />
            </label>
            <label className='py-3' htmlFor=''>
              <input type='submit' />
            </label>
          </form>
        </div>
        <div>
          <h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>
            {data3.title}
          </h3>
          <ul>
            {data3.list_link.map((link) => (
              <li key={link.id} className='mb-4'>
                <a href={link.href} className=' hover:underline'>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* <div>
          <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
            НАШІ КОНТАКТИ:
          </h2>
          <ul className='text-gray-500 dark:text-gray-400 font-medium'>
            <li className='mb-4'>
              <a href='#' className=' hover:underline'>
                +38 (066) 867 58 78
              </a>
            </li>
            <li className='mb-4'>
              <a href='#' className='hover:underline'>
                Careers
              </a>
            </li>
            <li className='mb-4'>
              <a href='#' className='hover:underline'>
                Brand Center
              </a>
            </li>
            <li className='mb-4'>
              <a href='#' className='hover:underline'>
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className='col-span-2'>
          <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase '>
            Help center
          </h2>
          <ul className='text-gray-500 dark:text-gray-400 font-medium'>
            <li className='mb-4'>
              <a href='#' className='hover:underline'>
                Discord Server
              </a>
            </li>
            <li className='mb-4'>
              <a href='#' className='hover:underline'>
                Twitter
              </a>
            </li>
            <li className='mb-4'>
              <a href='#' className='hover:underline'>
                Facebook
              </a>
            </li>
            <li className='mb-4'>
              <a href='#' className='hover:underline'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
            Legal
          </h2>
          <ul className='text-gray-500 dark:text-gray-400 font-medium'>
            <li className='mb-4'>
              <a href='#' className='hover:underline'>
                Privacy Policy
              </a>
            </li>
            <li className='mb-4'>
              <a href='#' className='hover:underline'>
                Licensing
              </a>
            </li>
            <li className='mb-4'>
              <a href='#' className='hover:underline'>
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className='px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 dark:text-gray-300 sm:text-center'>
          <a href='https://flowbite.com/'>Умови надання послуг</a>
        </span>
        <div>
          <span>ІПН</span>
        </div>
        <div className='flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse'>
          <a href='tel:+380687003020'>тел: +38 (066) 867 58 78</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
