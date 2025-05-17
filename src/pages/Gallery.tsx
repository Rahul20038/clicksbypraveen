
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import GalleryGrid from "@/components/gallery/GalleryGrid";

// Updated gallery data with Indian wedding and event photography images from uploads
const galleryData = [
  {
    id: "1",
    src: "/lovable-uploads/5dfaf913-ffdf-4bd8-8e36-f3fec0408b3d.png",
    category: "Wedding",
  },
  {
    id: "2",
    src: "/lovable-uploads/5b700ce3-e0b0-445a-aa7c-126baa5e1844.png",
    category: "Wedding",
  },
  {
    id: "3",
    src: "/lovable-uploads/9e777e83-9804-4131-9061-0bd9e43d74d0.png",
    category: "Pre-Wedding",
  },
  {
    id: "4",
    src: "/lovable-uploads/g1.jpg",
    category: "Pre-Wedding",
  },
  {
    id: "5",
    src: "/lovable-uploads/a83434e2-8e01-4d8b-a55e-4cb734e9b314.png",
    category: "Baby",
  },
  {
    id: "6",
    src: "/lovable-uploads/2a385e86-e97a-4e00-8594-4e05b54c7a07.png",
    category: "Baby",
  },
  {
    id: "7",
    src: "/lovable-uploads/9c44ea79-21e4-4476-992b-bbb2a7c4dfe9.png",
    category: "Candid",
  },
  {
    id: "8",
    src: "/lovable-uploads/ac250477-b975-4c60-9900-6a13acbea42c.png",
    category: "Studio",
  },
  {
    id: "9",
    src: "/lovable-uploads/571073a3-bae1-4974-88ee-92852bd1826c.png",
    category: "Studio",
  },
  {
    id: "10",
    src: "/lovable-uploads/db53d6d7-7a6d-4891-84b5-d7d28f01fc5e.png",
    category: "Wedding",
  },
  {
    id: "11",
    src: "/lovable-uploads/a9f93a31-040d-4b16-8942-dab8cf0022cb.png",
    category: "Candid",
  },
  {
    id: "12",
    src: "/lovable-uploads/6cbdcd08-3eae-4460-a990-8a7d5e28fbcc.png",
    category: "Maternity",
  },
];

const Gallery = () => {
  const categories = ["All", "Wedding", "Pre-Wedding", "Baby", "Candid", "Studio", "Maternity"];
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Page Header */}
        <div className="bg-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Browse through our portfolio of beautiful moments captured over the years
            </p>
          </div>
        </div>
        
        {/* Gallery Section */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <GalleryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            
            <GalleryGrid photos={galleryData} activeCategory={activeCategory} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
