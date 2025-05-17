
import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-full text-purple-600">
            <Phone size={20} />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Phone</h3>
            <a href="tel:+919963908200" className="text-gray-600 hover:text-purple-600 transition-colors">
              +91 99639 08200
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-full text-purple-600">
            <Mail size={20} />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Email</h3>
            <a href="mailto:clicksbypraveen@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">
              clicksbypraveen@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-full text-purple-600">
            <MapPin size={20} />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Location</h3>
            <a 
              href="https://g.co/kgs/eJ21W7d" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Hyderabad, Telangana, India
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-full text-purple-600">
            <Clock size={20} />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Working Hours</h3>
            <p className="text-gray-600">Monday - Sunday: 9:00 AM - 8:00 PM</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 p-3 rounded-full text-purple-600">
            <Instagram size={20} />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Instagram</h3>
            <a 
              href="https://www.instagram.com/clicksbypraveen/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              @clicksbypraveen
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="font-medium text-gray-900 mb-2">Quick Connect</h3>
        <div className="flex gap-3">
          <a 
            href="https://wa.me/919963908200" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/clicksbypraveen/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white p-3 rounded-full hover:opacity-90 transition-colors"
            aria-label="Visit Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Instagram Feed Preview */}
      <div className="mt-10">
        <h3 className="font-medium text-gray-900 mb-4">Instagram Feed</h3>
        <div className="grid grid-cols-3 gap-2">
          <a 
            href="https://www.instagram.com/clicksbypraveen/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="aspect-square overflow-hidden rounded-md"
          >
            <img 
              src="/lovable-uploads/5dfaf913-ffdf-4bd8-8e36-f3fec0408b3d.png" 
              alt="Instagram post" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a 
            href="https://www.instagram.com/clicksbypraveen/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="aspect-square overflow-hidden rounded-md"
          >
            <img 
              src="/lovable-uploads/9c44ea79-21e4-4476-992b-bbb2a7c4dfe9.png" 
              alt="Instagram post" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a 
            href="https://www.instagram.com/clicksbypraveen/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="aspect-square overflow-hidden rounded-md"
          >
            <img 
              src="/lovable-uploads/a83434e2-8e01-4d8b-a55e-4cb734e9b314.png" 
              alt="Instagram post" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>
        <a 
          href="https://www.instagram.com/clicksbypraveen/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-3 text-sm text-purple-600 hover:text-purple-800 inline-flex items-center gap-1"
        >
          View more on Instagram
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
