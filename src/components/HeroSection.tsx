import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, User, FileText, Gavel, Building } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";

const HeroSection = () => {
  const quickServices = [
    { icon: User, title: "What's New", description: "Latest updates and announcements" },
    { icon: FileText, title: "Press Release", description: "Official press releases" },
    { icon: Gavel, title: "E-Auction", description: "Online auction services" },
    { icon: Building, title: "Tenders", description: "Current tender notifications" },
  ];

  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBuilding})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" className="text-white hover:bg-white/20 p-3">
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="text-center text-white max-w-4xl">
            {/* Citizen Initiatives Badge */}
            <div className="inline-block mb-6">
              <span className="bg-gov-red px-6 py-2 rounded-full text-white font-semibold">
                More Citizen Friendly Initiatives
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              "Your Time Matters To Us.<br />
              Plan Your Visit And Resolve Your Issues"
            </h1>

            {/* CTA Button */}
            <Button className="bg-gradient-hero hover:opacity-90 text-black font-bold text-lg px-8 py-4 rounded-full">
              Resolve your Issues
            </Button>
          </div>

          <Button variant="ghost" className="text-white hover:bg-white/20 p-3">
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        {/* Quick Services */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-full p-6 text-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;