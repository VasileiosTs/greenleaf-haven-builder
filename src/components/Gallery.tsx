import { ArrowRight, Leaf, Flower } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleries = [
  {
    title: "Office Spaces",
    images: [
      "photo-1524758631624-e2822e304c36", // Modern office with plants
      "photo-1497215842964-222b430dc094", // Office workspace with greenery
      "photo-1497366754035-f200968a6e72"  // Corporate space with plants
    ],
    description: "Modern workspaces enhanced with carefully selected greenery"
  },
  {
    title: "Restaurants & Cafes",
    images: [
      "photo-1600585152220-90363fe7e115", // Restaurant with hanging plants
      "photo-1554118811-1e0d58224f24", // Cafe with botanical decor
      "photo-1559339352-11d035aa65de"  // Restaurant interior with greenery
    ],
    description: "Create inviting atmospheres with strategic plant placement"
  },
  {
    title: "Hotels & Resorts",
    images: [
      "photo-1582719508461-905c673771fd", // Hotel lobby with large plants
      "photo-1542314831-068cd1dbfeeb", // Luxury hotel with indoor garden
      "photo-1520250497591-112f2f40a3f4"  // Resort with tropical plants
    ],
    description: "Luxury environments complemented by premium plant arrangements"
  },
  {
    title: "Event Setups",
    images: [
      "photo-1519167758481-83f550bb49b3", // Event space with floral arrangements
      "photo-1523438885200-e635ba2c371e", // Wedding setup with plants
      "photo-1469371670807-013ccf25f16a"  // Special event with botanical decor
    ],
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
              <Carousel className="w-full">
                <CarouselContent>
                  {gallery.images.map((image, imageIndex) => (
                    <CarouselItem key={imageIndex}>
                      <img
                        src={`https://images.unsplash.com/${image}`}
                        alt={`${gallery.title} ${imageIndex + 1}`}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white pointer-events-none">
                <h3 className="text-xl font-semibold mb-2">{gallery.title}</h3>
                <p className="text-sm text-gray-200 mb-4">{gallery.description}</p>
                <button className="inline-flex items-center text-sm font-medium pointer-events-auto">
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