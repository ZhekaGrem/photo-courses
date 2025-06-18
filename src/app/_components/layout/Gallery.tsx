'use client';
import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { CloudinaryImage } from '@/lib/cloudinary';

interface GalleryProps {
  images: CloudinaryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<CloudinaryImage | null>(null);

  if (images.length === 0) {
    return <div className="py-12 text-center text-gray-600">No images found.</div>;
  }

  return (
    <>
      <div className="columns-1 gap-4 px-4 md:columns-2 lg:columns-3">
        {images.map((image) => (
          <div
            key={image.public_id}
            className="mb-6 cursor-pointer break-inside-avoid transition-opacity hover:opacity-80"
            onClick={() => setSelectedImage(image)}>
            <CldImage
              src={image.public_id}
              width={400}
              height={Math.round(400 * (image.height / image.width))}
              alt="Gallery image"
              className="w-full"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedImage(null)}>
          <div className="relative max-h-full max-w-4xl">
            <CldImage
              src={selectedImage.public_id}
              width={1200}
              height={Math.round(1200 * (selectedImage.height / selectedImage.width))}
              alt="Full size image"
              className="max-h-screen max-w-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-70">
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
