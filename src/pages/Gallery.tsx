
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import GalleryGrid from "@/components/gallery/GalleryGrid";

// Sample gallery data (in a real app this would come from an API or CMS)
const galleryData = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    category: "Wedding",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    category: "Wedding",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1583729152957-fbc29e773a57?q=80&w=2070&auto=format&fit=crop",
    category: "Pre-Wedding",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577507?q=80&w=2071&auto=format&fit=crop",
    category: "Pre-Wedding",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop",
    category: "Baby",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    category: "Birthday",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070&auto=format&fit=crop",
    category: "Candid",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=1983&auto=format&fit=crop",
    category: "Studio",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1534525781407-876b87637dcd?q=80&w=1935&auto=format&fit=crop",
    category: "Outdoor",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1608446781594-658871744e69?q=80&w=2071&auto=format&fit=crop",
    category: "Wedding",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
    category: "Candid",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=870&auto=format&fit=crop",
    category: "Birthday",
  },
];

const Gallery = () => {
  const categories = ["All", "Wedding", "Pre-Wedding", "Birthday", "Baby", "Candid", "Studio", "Outdoor"];
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
