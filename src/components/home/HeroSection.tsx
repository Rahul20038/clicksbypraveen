
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Sample images for the hero slider
const heroImages = [
  "https://images.unsplash.com/photo-1608446781594-658871744e69?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534525781407-876b87637dcd?q=80&w=1935&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`hero-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image} alt={`Hero image ${index + 1}`} className="hero-image" />
          <div className="hero-overlay">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Capturing Emotions, <br /> Moments & Memories
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fade-in">
              Professional photography services by Thatha Praveen
            </p>
            <Link to="/contact" className="book-btn animate-fade-in">
              Book a Session
            </Link>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
