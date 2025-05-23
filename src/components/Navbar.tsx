
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Camera, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm shadow-sm py-2" : "bg-black/70 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Camera size={32} className="text-purple-600" />
            <span className="font-playfair font-bold text-xl text-white">
              ClicksByPraveen
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-6">
              <Link to="/" className={`nav-link ${isActive("/")} text-white`}>
                Home
              </Link>
              <Link to="/gallery" className={`nav-link ${isActive("/gallery")} text-white`}>
                Gallery
              </Link>
              <Link to="/services" className={`nav-link ${isActive("/services")} text-white`}>
                Services
              </Link>
              <Link to="/contact" className={`nav-link ${isActive("/contact")} text-white`}>
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/95 rounded-lg shadow-lg p-4 absolute left-4 right-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link to="/" className="nav-link text-white" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/gallery" className="nav-link text-white" onClick={toggleMenu}>
                Gallery
              </Link>
              <Link to="/services" className="nav-link text-white" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/contact" className="nav-link text-white" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
