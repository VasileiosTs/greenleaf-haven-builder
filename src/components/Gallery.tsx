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
      "photo-1545324418-cc1a3fa10c00",
      "photo-1497366754035-f200968a6e72",
      "photo-1497366811353-6870744d04b2"
    ],
    description: "Modern workspaces enhanced with carefully selected greenery"
  },
  {
    title: "Restaurants & Cafes",
    images: [
      "photo-1584132967334-10e028bd69f7",
      "photo-1559925393-8be0ec4767c8",
      "photo-1559329007-40df8a9345d8"
    ],
    description: "Create inviting atmospheres with strategic plant placement"
  },
  {
    title: "Hotels & Resorts",
    images: [
      "photo-1582719478250-c89cae4dc85b",
      "photo-1566073771259-6a8506099945",
      "photo-1564501049412-61c2a3083791"
    ],
    description: "Luxury environments complemented by premium plant arrangements"
  },
  {
    title: "Healthcare Facilities",
    images: [
      "photo-1586671267731-da2cf3ceeb80",
      "photo-1519494026892-80bbd2d6fd0d",
      "photo-1538108149393-fbbd81895907"
    ],
    description: "Healing environments with antimicrobial plant selections"
  },
  {
    title: "Event Setups",
    images: [
      "photo-1523438885200-e635ba2c371e",
      "photo-1519167758481-83f1abed1c0c",
      "photo-1464366400600-7168b8af9bc3"
    ],
    description: "Stunning plant arrangements for special occasions"
  },
  {
    title: "Vacation Rentals",
    images: [
      "photo-1595246140962-93c06feddc6d",
      "photo-1595246140962-93c06feddc6e",
      "photo-1595246140962-93c06feddc6f"
    ],
    description: "Airbnb and rental properties transformed with greenery"
  }
];

export const Gallery = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-sage-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-16 animate-fade-in opacity-30 hidden md:block">
          <Leaf className="w-16 h-16 text-sage-300" />
        </div>
        <div className="absolute bottom-24 left-24 animate-fade-in opacity-20 hidden md:block" style={{ animationDelay: "200ms" }}>
          <Flower className="w-20 h-20 text-sage-300" />
        </div>
        <div className="absolute top-1/3 left-1/4 w-36 h-36 rounded-full bg-sage-100/50 opacity-20 animate-fade-in hidden md:block"
             style={{ animationDelay: "300ms" }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-sm font-medium bg-sage-100 text-sage-500 rounded-full">
            Gallery
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            See Transformations
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Discover how plants has transformed spaces in vibrant green and healthy spots
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {galleries.map((gallery, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl animate-fade-up shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Carousel className="w-full">
                <CarouselContent>
                  {gallery.images.map((image, imageIndex) => (
                    <CarouselItem key={imageIndex}>
                      <div className="aspect-[4/3]">
                        <img
                          src={`https://images.unsplash.com/${image}`}
                          alt={`${gallery.title} ${imageIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6 text-white">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{gallery.title}</h3>
                <p className="text-sm text-gray-200 mb-4 line-clamp-2">{gallery.description}</p>
                <button className="inline-flex items-center text-sm font-medium group/btn">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};