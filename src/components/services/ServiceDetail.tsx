
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: ReactNode;
  reverse?: boolean;
}

const ServiceDetail = ({
  title,
  description,
  features,
  image,
  icon,
  reverse = false,
}: ServiceDetailProps) => {
  return (
    <div className="py-16 border-b border-gray-200 last:border-0">
      <div className={`container mx-auto px-4 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
        <div className="lg:w-1/2">
          <div className="overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-purple-600">{icon}</div>
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>
          
          <p className="text-gray-600 mb-6">{description}</p>
          
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link
            to="/contact"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-purple-700 transform hover:scale-105"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
