import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      date: "Feb 2024",
      title: "Konadasapura Phase II",
      description: "Konadasapura Phase II is a 2BHK, ready-to-move Housing project consisting 630 units with modern amenities and infrastructure.",
      category: "Housing Project"
    },
    {
      date: "Jan 2024", 
      title: "DSKL Betterment Tax Payment",
      description: "Online payment facility for DSKL Betterment Tax is now available for citizens with multiple payment options.",
      category: "Tax Services"
    },
    {
      date: "Dec 2023",
      title: "FDA Backlog Provisional List",
      description: "FDA Backlog Provisional List has been published. Citizens can check their status online through the official portal.",
      category: "FDA Services"
    },
    {
      date: "Nov 2023",
      title: "BDA Flat Allotment",
      description: "New BDA flats available for allotment in various layouts across Bangalore. Application process simplified.",
      category: "Allotment"
    },
    {
      date: "Oct 2023",
      title: "Alternative Site Allotment",
      description: "Allotment of alternative sites from Arkavathi Layout to Nada Prabhu Kempegowda Layout through randomization.",
      category: "Site Allotment"
    },
    {
      date: "Sep 2023",
      title: "Unauthorized Layouts List",
      description: "Updated list of Unauthorized Layouts in BDA Jurisdiction published for public information and awareness.",
      category: "Public Notice"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest News & Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest announcements, project updates, and important notifications from Bangalore Development Authority
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Card key={index} className="bg-gradient-card hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </CardDescription>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 font-medium">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
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