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
          className="fixed inset-0 z-50 flex items-center justify-center rounded-2xl bg-opacity-50 px-4">
          <motion.div
            ref={modalRef}
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="imgBg2 relative min-w-[50%] rounded-2xl shadow-lg md:bg-black">
            <button
              className="absolute right-4 top-4 text-gray-50 transition-colors hover:text-gray-700"
              onClick={handleClose}>
              <svg
                className="h-6 w-6"
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
            <div className="flex w-full">
              <div className="w-full bg-black bg-opacity-50 md:w-1/2 md:bg-opacity-0">
                <h3
                  className="mb-4 p-8 text-center text-3xl font-bold leading-6 text-[#DDDDDD] md:text-2xl"
                  id="modal-title">
                  РЕЄСТРАЦІЯ НА КУРС ФОТОГРАФА
                </h3>
                <p className="mx-6 mb-6 text-center text-lg text-white md:text-sm">
                  {` ЗАЛИШАЙТЕ СВОЇ КОНТАКТНІ ДАНІ І МИ ЗВ'ЯЖЕМОСЬ З ВАМИ ПРОТЯГОМ 24 ГОДИН!`}
                </p>
                <PopUp onClose={onClose} />
              </div>
              <div className="hidden w-1/2 md:block">
                <Image
                  src="/popup.jpg"
                  alt="Автор курсів"
                  width={500}
                  height={300}
                  className="w-full rounded-r-lg object-cover"
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
