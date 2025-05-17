
import { Camera, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera size={28} className="text-purple-400" />
              <h3 className="font-playfair text-xl font-bold">ClicksByPraveen</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Capturing Emotions, Moments & Memories - Professional photography services by Thatha Praveen
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/clicksbypraveen/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-purple-400" />
                <a href="tel:+919963908200" className="text-gray-300 hover:text-purple-400 transition-colors">
                  +91 99639 08200
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-purple-400" />
                <a href="mailto:clicksbypraveen@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                  clicksbypraveen@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-purple-400 mt-1" />
                <a 
                  href="https://g.co/kgs/puCxHpd" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Khammam, Telangana, India
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} ClicksByPraveen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
