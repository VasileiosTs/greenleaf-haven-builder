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
      "/lovable-uploads/caa9f5af-4bd7-4d1e-976d-66a804666c80.png",
      "/lovable-uploads/87d8129e-5e04-43db-b965-f63f04f5b480.png",
      "/lovable-uploads/60c9fafd-8665-4376-ba9d-c834adb992ad.png"
    ],
    description: "Modern workspaces enhanced with carefully selected greenery"
  },
  {
    title: "Retail Spaces",
    images: [
      "/lovable-uploads/3cd1ca92-4631-45c2-a1aa-6c856181b660.png",
      "/lovable-uploads/2ef1ecaf-9c8d-43ec-b97f-1a2be0f5b72e.png",
      "/lovable-uploads/f009ae56-662f-4de9-ac56-0acc768e2f2a.png"
    ],
    description: "Create inviting atmospheres with strategic plant placement"
  },
  {
    title: "Healthcare Facilities",
    images: [
      "/lovable-uploads/96c10401-23a2-403b-9831-dcf1f3befcb0.png",
      "/lovable-uploads/e87e5ec4-889f-48b0-b9a7-7ddfdccbc3d9.png",
      "/lovable-uploads/69b01a0b-0055-41d2-90d5-c9406e5f61ff.png"
    ],
    description: "Healing environments with antimicrobial plant selections"
  },
  {
    title: "Hotels & Vacation Rentals",
    images: [
      "/lovable-uploads/19fb5704-cc7d-4c08-957e-5cf1dcbdf30c.png",
      "/lovable-uploads/26283a9e-200a-42ae-8206-145c60ca6290.png",
      "/lovable-uploads/ee67974f-b72d-45eb-951e-c203fa2cb8ad.png"
    ],
    description: "Luxury environments complemented by premium plant arrangements"
  },
  {
    title: "Cafés & Restaurants",
    images: [
      "/lovable-uploads/3cd1ca92-4631-45c2-a1aa-6c856181b660.png",
      "/lovable-uploads/2ef1ecaf-9c8d-43ec-b97f-1a2be0f5b72e.png",
      "/lovable-uploads/f009ae56-662f-4de9-ac56-0acc768e2f2a.png"
    ],
    description: "Add natural ambiance to dining spaces"
  },
  {
    title: "Corporate Offices",
    images: [
      "/lovable-uploads/6b609601-92b4-4b40-9688-1e27254eb015.png",
      "/lovable-uploads/bc316bc6-9097-4030-b374-22976976e9a9.png",
      "/lovable-uploads/f8df80d0-0198-47ed-882b-6008ab40de87.png"
    ],
    description: "Improve air quality and employee wellbeing"
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
                          src={image}
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