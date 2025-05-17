
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Reddy",
    role: "Bride",
    content: "Praveen captured our wedding day beautifully. The photos perfectly showcase all the emotions and special moments. We couldn't be happier with the results!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    role: "Corporate Client",
    content: "We hired ClicksByPraveen for our company event, and the photos were exceptional. Professional, punctual, and incredibly talented at capturing candid moments.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2187&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Meera Sharma",
    role: "Mother",
    content: "The baby photoshoot was amazing! Praveen was so patient with our little one and captured the most adorable photos that we'll treasure forever.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Anil Verma",
    role: "Pre-wedding Client",
    content: "Our pre-wedding shoot was fun and relaxed. Praveen made us feel comfortable in front of the camera and delivered stunning photos that tell our love story.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (testimonialsRef.current) {
      testimonialsRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on delivering exceptional photography experiences
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <div
            ref={testimonialsRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${testimonials.length * 100}%` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full px-4"
                style={{ flex: `0 0 ${100 / testimonials.length}%` }}
              >
                <div className="testimonial-card flex flex-col items-center text-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <div className="mb-4 text-purple-500">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="text-lg">
                          ★
                        </span>
                      ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-purple-500 w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
