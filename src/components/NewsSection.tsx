import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import konadasapuraFlats from "@/assets/konadasapura-flats.jpg";
import taxPayment from "@/assets/tax-payment.jpg";
import fdaOffice from "@/assets/fda-office.jpg";

const NewsSection = () => {
  const newsItems = [
    {
      date: "Feb 2024",
      title: "Konadasapura Phase II",
      description: "Konadasapura Phase II is a 2BHK, ready-to-move Housing project consisting 630 units with modern amenities and infrastructure.",
      category: "Housing Project",
      image: konadasapuraFlats
    },
    {
      date: "Jan 2024", 
      title: "DSKL Betterment Tax Payment",
      description: "Online payment facility for DSKL Betterment Tax is now available for citizens with multiple payment options.",
      category: "Tax Services",
      image: taxPayment
    },
    {
      date: "Dec 2023",
      title: "FDA Backlog Provisional List",
      description: "FDA Backlog Provisional List has been published. Citizens can check their status online through the official portal.",
      category: "FDA Services",
      image: fdaOffice
    },
    {
      date: "Nov 2023",
      title: "BDA Flat Allotment",
      description: "New BDA flats available for allotment in various layouts across Bangalore. Application process simplified.",
      category: "Allotment",
      image: konadasapuraFlats
    },
    {
      date: "Oct 2023",
      title: "Alternative Site Allotment",
      description: "Allotment of alternative sites from Arkavathi Layout to Nada Prabhu Kempegowda Layout through randomization.",
      category: "Site Allotment",
      image: fdaOffice
    },
    {
      date: "Sep 2023",
      title: "Unauthorized Layouts List",
      description: "Updated list of Unauthorized Layouts in BDA Jurisdiction published for public information and awareness.",
      category: "Public Notice",
      image: taxPayment
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Latest News & Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest announcements, project updates, and important notifications from Bangalore Development Authority
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur ring-1 ring-black/5 hover:shadow-lg transition-shadow cursor-pointer rounded-xl overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {item.date}
                </div>
              </div>
              <CardHeader className="pb-3">
                <div className="mb-2">
                  <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
                <CardTitle className="text-xl leading-snug hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 font-medium">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All News & Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;