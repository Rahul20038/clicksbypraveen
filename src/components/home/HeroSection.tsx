
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Updated images with Indian wedding/photography style from user uploads
const heroImages = [
  "/lovable-uploads/5dfaf913-ffdf-4bd8-8e36-f3fec0408b3d.png", // Couple in traditional attire
  "/lovable-uploads/9e777e83-9804-4131-9061-0bd9e43d74d0.png", // Silhouette couple at sunset
  "/lovable-uploads/9c44ea79-21e4-4476-992b-bbb2a7c4dfe9.png", // Couple in car with red lighting
  "/lovable-uploads/5b700ce3-e0b0-445a-aa7c-126baa5e1844.png", // Wedding ceremony couple
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
