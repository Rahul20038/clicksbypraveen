
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Capture Your Special Moments?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Let us help you create lasting memories through beautiful photography
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Book a Session
          </Link>
          <Link
            to="/gallery"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 transform hover:scale-105"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
