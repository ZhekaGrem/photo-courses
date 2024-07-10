'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom';
import PopUp from './PopUp';

interface PortalProps {
  onClose?: () => void;
}

const Portal: React.FC<PortalProps> = ({ onClose }) => {
  const portalRoot = document.getElementById('portal-root');

  if (!portalRoot) {
    console.error('Portal root element not found');
    return null;
  }

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed h-screen w-screen inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 500 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={onClose}>
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
          <div className="p-8">
            <PopUp onClose={onClose} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    portalRoot
  );
};

export default Portal;
