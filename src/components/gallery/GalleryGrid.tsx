
import { useState } from "react";

interface Photo {
  id: string;
  src: string;
  category: string;
  width?: number;
  height?: number;
}

interface GalleryGridProps {
  photos: Photo[];
  activeCategory: string;
}

const GalleryGrid = ({ photos, activeCategory }: GalleryGridProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="image-gallery">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-all"
            onClick={() => openLightbox(photo)}
          >
            <img
              src={photo.src}
              alt={`Gallery photo ${photo.id}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            onClick={closeLightbox}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={selectedPhoto.src}
            alt={`Gallery photo ${selectedPhoto.id}`}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
