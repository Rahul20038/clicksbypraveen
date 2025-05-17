
import { Camera, Cake, Heart, Baby, User, Image as ImageIcon, Mountain } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Wedding Photography",
    description: "Capturing your special day with elegance and emotion",
    icon: Camera,
    image: "/lovable-uploads/5b700ce3-e0b0-445a-aa7c-126baa5e1844.png", // Wedding couple image
  },
  {
    title: "Birthday & Event Photography",
    description: "Preserving joyful celebrations and milestones",
    icon: Cake,
    image: "/lovable-uploads/04520cb1-15e0-44df-a8ec-b8e6d8d844ea.png", // Library themed child photoshoot
  },
  {
    title: "Pre-Wedding Shoots",
    description: "Romantic and creative sessions for couples",
    icon: Heart,
    image: "/lovable-uploads/eedafaae-73a8-4dfa-91a0-7b587f4e199c.png", // Couple in formal wear
  },
  {
    title: "Baby Shoots",
    description: "Gentle and adorable portraits of your little ones",
    icon: Baby,
    image: "/lovable-uploads/a83434e2-8e01-4d8b-a55e-4cb734e9b314.png", // Baby in traditional dress
  },
  {
    title: "Candid Photography",
    description: "Natural and unposed moments that tell your story",
    icon: User,
    image: "/lovable-uploads/9e777e83-9804-4131-9061-0bd9e43d74d0.png", // Sunset silhouette
  },
  {
    title: "Traditional/Studio Photoshoots",
    description: "Classic portraits in a controlled environment",
    icon: ImageIcon,
    image: "/lovable-uploads/8b78434f-332f-47b2-9292-ed20942cbcba.png", // Man in traditional attire
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
