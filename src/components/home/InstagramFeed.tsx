
import { useState } from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample Instagram feed with realistic Indian photography images from user uploads
const samplePosts = [
  {
    id: "1",
    image: "/lovable-uploads/5dfaf913-ffdf-4bd8-8e36-f3fec0408b3d.png", // Couple in traditional attire
    likes: 156,
    comments: 24,
  },
  {
    id: "2",
    image: "/lovable-uploads/a9f93a31-040d-4b16-8942-dab8cf0022cb.png", // Two women in traditional attire
    likes: 143,
    comments: 18,
  },
  {
    id: "3",
    image: "/lovable-uploads/eedafaae-73a8-4dfa-91a0-7b587f4e199c.png", // Pre-wedding couple
    likes: 208,
    comments: 32,
  },
  {
    id: "4",
    image: "/lovable-uploads/a83434e2-8e01-4d8b-a55e-4cb734e9b314.png", // Baby photo
    likes: 187,
    comments: 27,
  },
  {
    id: "5",
    image: "/lovable-uploads/db53d6d7-7a6d-4891-84b5-d7d28f01fc5e.png", // Wedding ceremony collage
    likes: 215,
    comments: 43,
  },
  {
    id: "6",
    image: "/lovable-uploads/20f00b1b-17df-4d06-9c47-321f99fbd531.png", // Wedding couple with flower backdrop
    likes: 234,
    comments: 41,
  },
];

const InstagramFeed = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Instagram</h2>
            <p className="text-gray-600 max-w-2xl">
              Follow us on Instagram for more beautiful moments @clicksbypraveen
            </p>
          </div>
          <a
            href="https://www.instagram.com/clicksbypraveen/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0"
          >
            <Button variant="outline" className="flex items-center gap-2">
              <Instagram size={18} />
              Follow @clicksbypraveen
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {samplePosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/clicksbypraveen/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden aspect-square"
              onMouseEnter={() => setIsHovered(post.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              {isHovered === post.id && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Instagram Reels</h3>
            <p className="mb-4">Check out our latest photography reels on Instagram</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="https://www.instagram.com/clicksbypraveen/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white p-6 rounded-lg hover:opacity-90 transition-colors flex items-center justify-center gap-3"
              >
                <Instagram size={24} />
                <span className="font-medium">Watch Wedding Reels</span>
              </a>
              
              <a 
                href="https://www.instagram.com/clicksbypraveen/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white p-6 rounded-lg hover:opacity-90 transition-colors flex items-center justify-center gap-3"
              >
                <Instagram size={24} />
                <span className="font-medium">Watch Baby Photoshoot Reels</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
