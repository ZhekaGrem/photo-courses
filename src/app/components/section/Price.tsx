'use client';
import React from 'react';
import Button from '../common/Button';
import { usePortal } from '@/app/components/layout/PortalContext';
import{section_6} from '@/db/data'

const Price = () => {
  const { isPortalOpen, setIsPortalOpen } = usePortal();
  return (
    <section id="price" className="bg-background_section_7 ">
      <div className="container section text-text_2 ">
        <h4>{section_6.title}</h4>

        <div className=" rounded-xl shadow-2xl p-6 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold">{section_6.title2}</h3>
            <span className="bg-yellow-400 text-[#cc3151] text-sm font-bold py-1 px-3 rounded-full">
              {section_6.span}
            </span>
          </div>

          <ul className="text-lg mb-8 space-y-4">
            {section_6.list.map((item, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                <span>
                  <strong>{item.textS}</strong> {item.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center mb-8">
            <p className="text-lg w-full line-through mb-2 text-center">{section_6.price.old_price}</p>
            <p className="text-4xl font-bold text-red-600 mb-4 text-center">{section_6.price.new_price}</p>
            <p className="text-sm text-gray-600 text-center">{section_6.price.how_mгch_save}</p>
          </div>
          <div className="w-full flex justify-center">
            <Button
              onClick={() => setIsPortalOpen(true)}
              text={section_6.button_text}
              className="xl:w-[40%]  text-2xl ont-bold md:px-6 py-2"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <h4 className="text-2xl font-bold mb-4">{section_6.title_reviews}</h4>
          <ul className="flex justify-center space-x-4">
            {section_6.reviews.map((item, index) => (
              <li key={index} className=" p-4 rounded-lg shadow max-w-xs">
                <h2>тут будеп відео</h2>
                {/* <iframe
                className="rounded-3xl bg-white"
                width="300"
                height="350"
                src=""
                title="YouTube video player"
                allowFullScreen></iframe> */}
                <p className="italic mb-2">{item.text}</p>
                <p className="font-bold">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Price;
