'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom';
import PopUp from './PopUp';
import Image from 'next/image';

interface PortalProps {
  onClose?: () => void;
}

const Portal: React.FC<PortalProps> = ({ onClose }: PortalProps) => {
  const portalRoot = document.getElementById('portal-root');

    const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  if (!portalRoot) {
    console.error('Portal root element not found');
    return null;
  }

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300); // Duration of the animation
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
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="relative min-w-[50%] imgBg2 md:bg-black shadow-lg rounded-2xl">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
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
              <div className="w-full md:w-1/2 p-8 ">
                <h3 className="text-2xl leading-6 font-bold text-white mb-4" id="modal-title">
                  РЕЄСТРАЦІЯ НА КУРС ФОТОГРАФА
                </h3>
                <p className="text-sm text-white mb-6">
                 {` ЗАЛИШАЙТЕ СВОЇ КОНТАКТНІ ДАНІ І МИ ЗВ'ЯЖЕМОСЬ З ВАМИ ПРОТЯГОМ 24 ГОДИН!`}
                </p>
                <PopUp />
              </div>
              <div className=" hidden md:block w-1/2">
                <Image
                  src="/popup.jpg"
                  alt="Автор курсів"
                  width={500}
                  height={300}
                  className="w-full  object-cover rounded-3xl"
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