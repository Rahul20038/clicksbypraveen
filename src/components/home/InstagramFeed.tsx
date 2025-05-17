
import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample Instagram feed - in a real app this would come from the Instagram API
const samplePosts = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070&auto=format&fit=crop",
    likes: 124,
    comments: 18,
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    likes: 89,
    comments: 7,
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1583729152957-fbc29e773a57?q=80&w=2070&auto=format&fit=crop",
    likes: 243,
    comments: 32,
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577507?q=80&w=2071&auto=format&fit=crop",
    likes: 156,
    comments: 14,
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop",
    likes: 98,
    comments: 9,
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1608446781594-658871744e69?q=80&w=2071&auto=format&fit=crop",
    likes: 187,
    comments: 21,
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
      </div>
    </section>
  );
};

export default InstagramFeed;
