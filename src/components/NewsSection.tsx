import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import img1 from "@/assets/other/DJI_20250823171339_0049_D.jpg";
import img2 from "@/assets/other/DJI_20250824114747_0008_D.jpg";
import hebbalFlyover from "@/assets/other/Hebbal Flyover - Top Down.jpg";
import hunnigereVillas from "@/assets/other/DJI_20250824114747_0008_D.jpg";
import kaniminikeFlats from "@/assets/other/Kaniminike Green Buildings.jpg";
import militaryMemorial from "@/assets/other/military memorial.jpg";


const NewsSection = () => {
  const newsItems = [
 {
  date: "Mar 2024",
  title: "Varthur Lake Rejuvenation",
  description:
    "The Bangalore Development Authority (BDA) has taken up the rejuvenation of Varthur Lake, one of the city’s largest and most important water bodies, with the aim of restoring its ecological balance and transforming it into a vibrant public space. The project includes desilting, bund strengthening, creation of wetlands, sewage diversion, and development of buffer zones to ensure sustainable conservation. In addition, facilities such as parks, walkways, lighting, surveillance systems, and an idol-immersion tank are being developed to provide a safe and eco-friendly environment for citizens.",
  category: "Environmental Project",
  image:img1
},
{
  date: "Apr 2024",
  title: "Alur BDA Flats & Villas Project",
  description:
    "The Bangalore Development Authority (BDA) is developing the Alur Flats & Villas Project at Dasanapura, designed to provide affordable, well-planned, and high-quality housing options to citizens of Bengaluru. This project reflects BDA’s commitment to delivering sustainable residential communities with modern amenities, ensuring convenience, safety, and a better quality of life. Project Features: Housing Options – 1-BHK flats and spacious 3-BHK duplex villas. Amenities – 24×7 water supply, power backup, lifts, parking facilities, landscaped gardens, children’s play area, and community spaces. Safety & Security – Fire safety provisions, CCTV surveillance, and well-lit common areas. Connectivity – Strategically located in Alur with good access to Tumkur Road and essential services such as schools, healthcare, and transport. Vision – Through this initiative, BDA aims to make homeownership accessible and affordable while promoting planned urban development. The Alur Flats & Villas Project is designed not only as a housing complex, but as a self-sustained community that supports the growing aspirations of Bengaluru’s citizens.",
  category: "Housing Project",
  image: img2
},


   {
  date: "Aug 2025",
  title: "Hebbal Flyover Loop",
  description:
    "The Bangalore Development Authority (BDA) has completed and inaugurated the Hebbal Flyover Loop, a 700-metre elevated ramp constructed at a cost of ₹80 crore. The project provides seamless connectivity for vehicles from Nagawara and K.R. Puram towards Mehkri Circle, easing congestion at Hebbal Junction by up to 30% and improving access to the airport, IT corridors, and northern suburbs. Designed and built in just 7 months, this loop is part of BDA’s larger plan for signal-free corridors and improved road infrastructure across Bengaluru.",
  category: "Infrastructure Project",
  image: hebbalFlyover // your image import here
},
{
  date: "Jul 2025",
  title: "Hunnigere Villa Project",
  description:
    "The Bangalore Development Authority (BDA) has successfully completed the Hunnigere Villa Project, a thoughtfully planned residential community located in Hunnigere, Bengaluru North. This project features spacious 3-BHK duplex villas with landscaped gardens, children’s play area, community facilities, and reliable civic infrastructure. Strategically situated near Tumkur Road, it ensures easy access to schools, hospitals, transport hubs, and employment centers, fulfilling BDA’s mission of providing planned, affordable, and sustainable housing solutions.",
  category: "Housing Project",
  image: hunnigereVillas // your image import here
},
{
  date: "Jun 2025",
  title: "Kaniminike Flats Project",
  description:
    "The Bangalore Development Authority (BDA) has successfully completed the Kaniminike Flats Project in Bengaluru South, offering 1-BHK and 2-BHK flats designed for functionality, comfort, and efficient living. Amenities include 24×7 water supply, lifts, power backup, landscaped gardens, children’s play area, and community spaces. Located near Mysuru Road with easy access to educational institutions, healthcare, public transport, and employment hubs, the project enhances quality of life for its residents.",
  category: "Housing Project",
  image: kaniminikeFlats // your image import here
},

{
  date: "May 2025",
  title: "National Military Memorial",
  description:
    "The Bengaluru Development Authority (BDA) has completed the National Military Memorial in Bengaluru, a tribute to the bravery and sacrifice of India’s armed forces personnel. Spread across 7.5 acres, the memorial features an iconic 78-feet Veeragallu monolith engraved with the names of 22,000 martyrs, India’s tallest flag mast at 65 meters, and displays of historic military hardware. An underground motivation hall showcases weapon systems and the proud legacy of our soldiers, making the memorial a place of remembrance, inspiration, and national pride.",
  category: "Public Monument",
  image: militaryMemorial // your image import here
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