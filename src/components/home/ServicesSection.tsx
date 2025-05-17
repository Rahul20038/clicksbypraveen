
import { Camera, Cake, Heart, Baby, User, Image as ImageIcon, Mountain } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Wedding Photography",
    description: "Capturing your special day with elegance and emotion",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Birthday & Event Photography",
    description: "Preserving joyful celebrations and milestones",
    icon: Cake,
    image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Pre-Wedding Shoots",
    description: "Romantic and creative sessions for couples",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Baby Shoots",
    description: "Gentle and adorable portraits of your little ones",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1612461532625-9e5f2312d9e9?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Candid Photography",
    description: "Natural and unposed moments that tell your story",
    icon: User,
    image: "https://images.unsplash.com/photo-1609370850684-afc7cdbe4a5e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Traditional/Studio Photoshoots",
    description: "Classic portraits in a controlled environment",
    icon: ImageIcon,
    image: "https://images.unsplash.com/photo-1502124103086-36918e69f5a1?q=80&w=1974&auto=format&fit=crop",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional photography services to capture all of life's special moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover service-image"
              />
              <div className="service-content">
                <div className="flex items-center gap-2 mb-2">
                  <service.icon className="text-purple-300" size={20} />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-200 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-purple-300 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
