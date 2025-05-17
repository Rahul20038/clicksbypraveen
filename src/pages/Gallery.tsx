
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import GalleryGrid from "@/components/gallery/GalleryGrid";

// Sample gallery data (in a real app this would come from an API or CMS)
const galleryData = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1974&auto=format&fit=crop",
    category: "Wedding",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop",
    category: "Wedding",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2070&auto=format&fit=crop",
    category: "Pre-Wedding",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2071&auto=format&fit=crop",
    category: "Pre-Wedding",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    category: "Baby",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop",
    category: "Birthday",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
    category: "Candid",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=1983&auto=format&fit=crop",
    category: "Studio",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1935&auto=format&fit=crop",
    category: "Outdoor",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2071&auto=format&fit=crop",
    category: "Wedding",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1980&auto=format&fit=crop",
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
