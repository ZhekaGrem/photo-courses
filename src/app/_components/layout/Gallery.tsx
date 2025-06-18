'use client';
import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { CloudinaryImage, ColumnImages } from '@/lib/cloudinary';

interface ColumnGalleryProps {
  columnImages: ColumnImages;
}

interface GalleryColumnProps {
  images: CloudinaryImage[];
  onImageClick: (image: CloudinaryImage) => void;
}

const GalleryColumn: React.FC<GalleryColumnProps> = ({ images, onImageClick }) => {
  if (images.length === 0) {
    return <div className="py-8 text-center text-gray-500">No images</div>;
  }

  return (
    <div className="space-y-4">
      {images.map((image) => (
        <div
          key={image.public_id}
          className="cursor-pointer transition-all duration-300"
          onClick={() => onImageClick(image)}>
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
        </div>
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
      <div className="grid grid-cols-1 gap-4 px-4 pb-5 md:grid-cols-2 lg:grid-cols-3">
        {/* Column One */}
        <div className="flex flex-col">
          <GalleryColumn images={columnImages.one} onImageClick={handleImageClick} />
        </div>

        {/* Column Two */}
        <div className="flex flex-col">
          <GalleryColumn images={columnImages.two} onImageClick={handleImageClick} />
        </div>

        {/* Column Three */}
        <div className="flex flex-col">
          <GalleryColumn images={columnImages.three} onImageClick={handleImageClick} />
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}>
          <div className="relative max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
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
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
