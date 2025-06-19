'use client';
import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudinaryImage, ColumnImages } from '@/lib/cloudinary';

interface ColumnGalleryProps {
  columnImages: ColumnImages;
}

interface GalleryColumnProps {
  images: CloudinaryImage[];
  onImageClick: (image: CloudinaryImage) => void;
}

const extractNumber = (filename: string): number => {
  const match = filename.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

const sortImagesByNumber = (images: CloudinaryImage[]): CloudinaryImage[] => {
  return [...images].sort((a, b) => {
    const nameA = a.public_id.split('/').pop() || '';
    const nameB = b.public_id.split('/').pop() || '';
    const numA = extractNumber(nameA);
    const numB = extractNumber(nameB);
    return numA - numB;
  });
};

const GalleryColumn: React.FC<GalleryColumnProps> = ({ images, onImageClick }) => {
  if (images.length === 0) {
    return <div className="py-8 text-center text-gray-500">No images</div>;
  }

  const sortedImages = sortImagesByNumber(images);

  return (
    <div className="space-y-4 overflow-hidden">
      {sortedImages.map((image) => (
        <motion.div
          key={image.public_id}
          className="cursor-pointer transition-all duration-300"
          onClick={() => onImageClick(image)}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: 'linear',
          }}
          viewport={{ once: true, amount: 0.3 }}>
          <CldImage
            src={image.public_id}
            width={400}
            height={Math.round(400 * (image.height / image.width))}
            alt="Gallery image"
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality="auto"
            format="auto"
          />
        </motion.div>
      ))}
    </div>
  );
};

const Gallery: React.FC<ColumnGalleryProps> = ({ columnImages }) => {
  const [selectedImage, setSelectedImage] = useState<CloudinaryImage | null>(null);

  const handleImageClick: (image: CloudinaryImage) => void = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 pb-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col">
          <GalleryColumn images={columnImages.one} onImageClick={handleImageClick} />
        </div>
        <div className="flex flex-col">
          <GalleryColumn images={columnImages.two} onImageClick={handleImageClick} />
        </div>
        <div className="flex flex-col">
          <GalleryColumn images={columnImages.three} onImageClick={handleImageClick} />
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}>
            <motion.div
              className="relative max-h-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}>
              <CldImage
                src={selectedImage.public_id}
                width={1200}
                height={Math.round(1200 * (selectedImage.height / selectedImage.width))}
                alt="Full size image"
                className="max-h-screen max-w-full object-contain"
                quality="auto"
                format="auto"
              />
              <button
                onClick={closeModal}
                className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition-colors hover:bg-gray-200"
                aria-label="Close modal">
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
