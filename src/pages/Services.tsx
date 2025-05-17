
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/services/ServiceDetail";
import { Camera, Cake, Heart, Baby, User, Image as ImageIcon, Mountain } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Page Header */}
        <div className="bg-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive photography services to capture life's precious moments with artistic flair
            </p>
          </div>
        </div>
        
        {/* Services List */}
        <div className="py-12">
          <ServiceDetail
            title="Wedding Photography"
            description="Your wedding day is one of the most important days of your life, and we're here to capture every moment. Our wedding photography services include pre-wedding shoots, ceremony coverage, reception coverage, and more."
            features={[
              "Full-day coverage from preparation to reception",
              "Multiple photographers to capture every angle",
              "Candid and posed photography",
              "High-resolution digital images",
              "Premium photo album options"
            ]}
            image="/lovable-uploads/wedding-photo.jpg"
            icon={<Camera size={24} />}
          />
          
          <ServiceDetail
            title="Birthday & Event Photography"
            description="Whether it's a child's birthday party, a milestone celebration, or a corporate event, our event photography services will capture the energy and emotions of your special occasion."
            features={[
              "Event setup and decoration photos",
              "Guest arrival and candid moments",
              "Group photos and portraits",
              "Key moment coverage",
              "Quick turnaround time"
            ]}
            image="/lovable-uploads/birthday.jpg"
            icon={<Cake size={24} />}
            reverse={true}
          />
          
          <ServiceDetail
            title="Pre-Wedding Shoots"
            description="Tell your love story with a beautiful pre-wedding photo shoot. We'll work with you to choose the perfect location and style that reflects your unique relationship."
            features={[
              "Location scouting assistance",
              "Multiple outfit changes",
              "Natural and posed shots",
              "Creative concepts and themes",
              "Same-day preview of selected photos"
            ]}
            image="/lovable-uploads/prewedding.png"
            icon={<Heart size={24} />}
          />
          
          <ServiceDetail
            title="Baby Shoots"
            description="Capture the innocence and wonder of your little one with our specialized baby photography services. We create a safe and comfortable environment for newborns and children."
            features={[
              "Newborn, milestone, and cake smash sessions",
              "Safe and comfortable studio setup",
              "Props and outfits available",
              "Patient and experienced with children",
              "Family photos included"
            ]}
            image="/lovable-uploads/baby.jpg"
            icon={<Baby size={24} />}
            reverse={true}
          />
          
          <ServiceDetail
            title="Candid Photography"
            description="Our candid photography style captures genuine emotions and spontaneous moments, telling the real story of your event without posed or staged shots."
            features={[
              "Unobtrusive photography approach",
              "Natural expressions and interactions",
              "Documentary-style storytelling",
              "Creative composition",
              "Black and white and color options"
            ]}
            image="/lovable-uploads/candidd.jpg"
            icon={<User size={24} />}
          />
          
          <ServiceDetail
            title="Traditional/Studio Photoshoots"
            description="For formal portraits and controlled environments, our studio photography services offer professional lighting and backdrops for individual portraits, family photos, and more."
            features={[
              "Professional studio setup",
              "Multiple backdrop options",
              "Controlled lighting environment",
              "Individual and group portraits",
              "Professional retouching"
            ]}
            image="/lovable-uploads/traditional.jpg"
            icon={<ImageIcon size={24} />}
            reverse={true}
          />
          
          <ServiceDetail
            title="Outdoor Couple/Portrait Shoots"
            description="Take advantage of natural settings and beautiful landscapes with our outdoor photography services, perfect for couples, individuals, and families."
            features={[
              "Scenic location recommendations",
              "Golden hour scheduling",
              "Natural light expertise",
              "Relaxed and comfortable sessions",
              "Weather backup plans"
            ]}
            image="/lovable-uploads/outdoor.jpg"
            icon={<Mountain size={24} />}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
