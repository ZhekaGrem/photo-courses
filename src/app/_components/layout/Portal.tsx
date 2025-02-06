'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom';
import PopUp from '../form/PopUp';
import Image from 'next/image';

interface PortalProps {
  onClose: () => void;
  title: string;
}

const Portal: React.FC<PortalProps> = ({ title, onClose }) => {
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
              <div className="w-full rounded-2xl bg-[#020202] bg-opacity-50 md:w-1/2 md:bg-opacity-0">
                <h3
                  className="mb-4 p-8 text-center text-3xl font-bold leading-6 text-[#DDDDDD] md:text-2xl"
                  id="modal-title">
                  РЕЄСТРАЦІЯ НА КУРС ФОТОГРАФА
                </h3>
                <p className="mx-6 mb-6 text-center text-lg text-white md:text-sm">
                  {` ЗАЛИШАЙТЕ СВОЇ КОНТАКТНІ ДАНІ І МИ ЗВ'ЯЖЕМОСЬ З ВАМИ ПРОТЯГОМ 24 ГОДИН!`}
                </p>
                <PopUp onClose={onClose} title={title} />
              </div>
              <div className="hidden min-h-[500px] w-1/2 min-w-[500px] md:block">
                <Image
                  src="/assets/img/popup.jpg"
                  alt="Автор курсів"
                  width={300}
                  height={300}
                  className="w-full rounded-r-lg object-cover"
                  priority={true}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,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"
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
