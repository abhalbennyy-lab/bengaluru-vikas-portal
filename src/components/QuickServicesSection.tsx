import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User, FileText, Gavel, Building } from "lucide-react";

const QuickServicesSection = () => {
  const items = [
    { icon: User, title: "What's New", description: "Latest updates and announcements" },
    { icon: FileText, title: "Press Release", description: "Official press releases" },
    { icon: Gavel, title: "E-Auction", description: "Online auction services" },
    { icon: Building, title: "Tenders", description: "Current tender notifications" },
    { icon: Building, title: "Flats", description: "BDA flat allotment services" },
  ];

  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a key={index} href="#" aria-label={item.title} className="block focus-visible:outline-none">
                <Card className="h-full border-0 ring-1 ring-black/5 bg-white/80 backdrop-blur rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="bg-primary/90 rounded-full w-12 h-12 flex items-center justify-center shadow-sm">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                          →
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardTitle className="text-base md:text-lg text-gray-900 mb-1 leading-snug">{item.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickServicesSection;


