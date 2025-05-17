
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import GalleryGrid from "@/components/gallery/GalleryGrid";

// Updated gallery data with Indian wedding and event photography images
const galleryData = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    category: "Wedding",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1561100344-0cce8621ca6c?q=80&w=1974&auto=format&fit=crop",
    category: "Wedding",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1974&auto=format&fit=crop",
    category: "Pre-Wedding",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1623659611347-f0de28f9cee2?q=80&w=1974&auto=format&fit=crop",
    category: "Pre-Wedding",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1612461532625-9e5f2312d9e9?q=80&w=1974&auto=format&fit=crop",
    category: "Baby",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=2069&auto=format&fit=crop",
    category: "Birthday",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1609370850684-afc7cdbe4a5e?q=80&w=1974&auto=format&fit=crop",
    category: "Candid",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1583937443566-6fe1a1c6e400?q=80&w=1974&auto=format&fit=crop",
    category: "Studio",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1972&auto=format&fit=crop",
    category: "Outdoor",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1570275239925-4af0aa93a0dc?q=80&w=2071&auto=format&fit=crop",
    category: "Wedding",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1629392554711-6e25818oddfa?q=80&w=1974&auto=format&fit=crop",
    category: "Candid",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1974&auto=format&fit=crop",
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
