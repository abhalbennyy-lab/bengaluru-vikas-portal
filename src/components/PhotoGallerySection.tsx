import development1 from "@/assets/development-1.jpg";
import development2 from "@/assets/development-2.jpg";
import development3 from "@/assets/development-3.jpg";

const PhotoGallerySection = () => {
  const galleryImages = [
    {
      image: development1,
      title: "Konadasapura Development",
      description: "Modern residential complex"
    },
    {
      image: development2,
      title: "Green Spaces",
      description: "Parks and recreational areas"
    },
    {
      image: development3,
      title: "Infrastructure Development",
      description: "Road and utility development"
    },
    {
      image: development1,
      title: "Housing Projects",
      description: "Quality residential units"
    },
    {
      image: development2,
      title: "Urban Planning",
      description: "Systematic city development"
    },
    {
      image: development3,
      title: "Modern Amenities",
      description: "State-of-the-art facilities"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Photo Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our development projects and infrastructure initiatives across Bangalore
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerySection;