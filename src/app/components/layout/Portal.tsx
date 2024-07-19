'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom';
import PopUp from '../form/PopUp';
import Image from 'next/image';

interface PortalProps {
  onClose: () => void;
}

const Portal: React.FC<PortalProps> = ({ onClose }) => {
  const portalRoot = typeof document !== 'undefined' ? document.getElementById('portal-root') : null;
  const modalRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!portalRoot) {
    console.error('Портала немає');
    return null;
  }

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300);
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-opacity-50  flex items-center justify-center z-50 px-4 rounded-2xl">
          <motion.div
            ref={modalRef}
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="relative min-w-[50%] imgBg2 md:bg-black shadow-lg rounded-2xl">
            <button
              className="absolute top-4 right-4 text-gray-50 hover:text-gray-700 transition-colors"
              onClick={handleClose}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="w-full flex ">
              <div className="w-full md:w-1/2 bg-black bg-opacity-50 md:bg-opacity-0 ">
                <h3
                  className="p-8 text-3xl md:text-2xl leading-6 font-bold text-[#DDDDDD] mb-4 text-center"
                  id="modal-title">
                  РЕЄСТРАЦІЯ НА КУРС ФОТОГРАФА
                </h3>
                <p className="text-lg md:text-sm  text-white mb-6 mx-6 text-center">
                  {` ЗАЛИШАЙТЕ СВОЇ КОНТАКТНІ ДАНІ І МИ ЗВ'ЯЖЕМОСЬ З ВАМИ ПРОТЯГОМ 24 ГОДИН!`}
                </p>
                <PopUp onClose={onClose} />
              </div>
              <div className=" hidden md:block w-1/2">
                <Image
                  src="/popup.jpg"
                  alt="Автор курсів"
                  width={500}
                  height={300}
                  className="w-full  object-cover rounded-r-lg"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalRoot
  );
};

export default Portal;
