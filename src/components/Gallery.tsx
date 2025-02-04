import { ArrowRight, Leaf, Flower } from "lucide-react";

const galleries = [
  {
    title: "Office Spaces",
    image: "photo-1721322800607-8c38375eef04",
    description: "Modern workspaces enhanced with carefully selected greenery"
  },
  {
    title: "Restaurants & Cafes",
    image: "photo-1506744038136-46273834b3fb",
    description: "Create inviting atmospheres with strategic plant placement"
  },
  {
    title: "Hotels & Resorts",
    image: "photo-1518495973542-4542c06a5843",
    description: "Luxury environments complemented by premium plant arrangements"
  },
  {
    title: "Event Setups",
    image: "photo-1465146344425-f00d5f5c8f07",
    description: "Temporary installations for special occasions"
  }
];

export const Gallery = () => {
  return (
    <section className="py-24 px-4 bg-sage-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-16 animate-fade-in opacity-30">
          <Leaf className="w-16 h-16 text-sage-300" />
        </div>
        <div className="absolute bottom-24 left-24 animate-fade-in opacity-20" style={{ animationDelay: "200ms" }}>
          <Flower className="w-20 h-20 text-sage-300" />
        </div>
        <div className="absolute top-1/3 left-1/4 w-36 h-36 rounded-full bg-sage-100 opacity-20 animate-fade-in"
             style={{ animationDelay: "300ms" }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-sage-100 text-sage-500 rounded-full">
            Our Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Our Transformations
          </h2>
          <p className="text-gray-600">
            Discover how BloominTales has transformed commercial spaces with vibrant greenery
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {galleries.map((gallery, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={`https://images.unsplash.com/${gallery.image}`}
                alt={gallery.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{gallery.title}</h3>
                <p className="text-sm text-gray-200 mb-4">{gallery.description}</p>
                <button className="inline-flex items-center text-sm font-medium">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
