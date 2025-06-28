// src/app/_components/layout/LocalGallery.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { LocalImage, ColumnImages } from '@/lib/local-images';
import useIsMobile from '@/hook/useIsMobile';

interface LocalGalleryProps {
  columnImages: ColumnImages;
}

interface GalleryColumnProps {
  images: LocalImage[];
  onImageClick: (image: LocalImage) => void;
  isMobile: boolean;
}

const GalleryColumn: React.FC<GalleryColumnProps> = ({ images, onImageClick, isMobile }) => {
  if (images.length === 0) {
    return <div className="py-8 text-center text-gray-500">No images in this column</div>;
  }

  return (
    <div className="min-h-screen space-y-4 overflow-hidden md:overflow-visible">
      {images.map((image, index) => (
        <div
          key={image.filename}
          className={`relative overflow-hidden transition-all duration-300 ${
            isMobile ? '' : 'cursor-pointer'
          }`}
          onClick={isMobile ? undefined : () => onImageClick(image)}>
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            className="w-full object-cover shadow-lg"
            loading={index < 3 ? 'eager' : 'lazy'} // Перші 3 зображення завантажуємо одразу
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRhICAABXRUJQVlA4WAoAAAAgAAAAAQAAAQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggJAAAAJABAJ0BKgIAAgADgFolpAAC51m2AAD+5vktfOMAEl7C5OgAAA=="
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Overlay effect on hover */}
          {!isMobile && (
            <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 hover:bg-opacity-20" />
          )}
        </div>
      ))}
    </div>
  );
};

const LocalGallery: React.FC<LocalGalleryProps> = ({ columnImages }) => {
  const [selectedImage, setSelectedImage] = useState<LocalImage | null>(null);
  const isMobile = useIsMobile();

  const handleImageClick = (image: LocalImage) => {
    if (isMobile) return;

    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 pb-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col">
          <GalleryColumn images={columnImages.one} onImageClick={handleImageClick} isMobile={isMobile} />
        </div>
        <div className="flex flex-col">
          <GalleryColumn images={columnImages.two} onImageClick={handleImageClick} isMobile={isMobile} />
        </div>
        <div className="flex flex-col">
          <GalleryColumn images={columnImages.three} onImageClick={handleImageClick} isMobile={isMobile} />
        </div>
      </div>

      {/* Modal for full-size image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}>
            <motion.div
              className="relative max-h-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}>
              <Image
                src={selectedImage.src}
                width={selectedImage.width}
                height={selectedImage.height}
                alt={selectedImage.alt}
                className="max-h-screen w-full object-contain"
                priority
              />

              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close modal">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LocalGallery;
