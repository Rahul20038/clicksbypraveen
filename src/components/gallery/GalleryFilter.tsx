
import { useState } from "react";

interface GalleryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const GalleryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: GalleryFilterProps) => {
  return (
    <div className="mb-8 overflow-x-auto py-2">
      <div className="flex gap-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === category
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryFilter;
