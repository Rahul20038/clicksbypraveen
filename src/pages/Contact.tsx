
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Page Header */}
        <div className="bg-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Get in touch with us to book a session or inquire about our services
            </p>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <ContactInfo />
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="h-96 w-full">
          <iframe
            title="ClicksByPraveen Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.274861802076!2d80.13944237609619!3d17.981370982262534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a33406bc52a5c95%3A0x7dee509cd2437d77!2sClicksbypraveen%20studio%26%20printed%20giftarticles!5e0!3m2!1sen!2sin!4v1715991571447!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
