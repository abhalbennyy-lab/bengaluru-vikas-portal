import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import img1 from "@/assets/other/DJI_20250823171339_0049_D.jpg";
import img2 from "@/assets/other/WhatsApp Image 2025-09-18 at 2.03.03 PM.jpeg";
import hebbalFlyover from "@/assets/other/Hebbal Flyover - Top Down.jpg";


const NewsSection = () => {
  type NewsItem = {
    id?: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    month: string;
    year: number;
    createdAt?: number;
  };
  const STORAGE_KEY = "bvp.news.items";
  const defaultItems: NewsItem[] = [
    {
      title: "Varthur Lake Rejuvenation",
      description:
        "The Bangalore Development Authority (BDA) has taken up the rejuvenation of Varthur Lake, one of the city’s largest and most important water bodies, with the aim of restoring its ecological balance and transforming it into a vibrant public space...",
      category: "Environmental Project",
      imageUrl: img1,
      month: "Mar",
      year: 2024,
    },
    {
      title: "Alur BDA Flats & Villas Project",
      description:
        "The Bangalore Development Authority (BDA) is developing the Alur Flats & Villas Project at Dasanapura, designed to provide affordable, well-planned, and high-quality housing options...",
      category: "Housing Project",
      imageUrl: img2,
      month: "Apr",
      year: 2024,
    },
    {
      title: "Hebbal Flyover Loop",
      description:
        "The Bangalore Development Authority (BDA) has completed and inaugurated the Hebbal Flyover Loop, a 700-metre elevated ramp constructed at a cost of ₹80 crore...",
      category: "Infrastructure Project",
      imageUrl: hebbalFlyover,
      month: "Aug",
      year: 2025,
    },
  ];

  const getNews = (): NewsItem[] => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsedRaw = raw ? (JSON.parse(raw) as any[]) : [];
      // Normalize records from storage (handle legacy shapes)
      const normalized: NewsItem[] = parsedRaw
        .map((n) => {
          const imageUrl = n.imageUrl ?? n.image ?? "";
          let month = n.month ?? "";
          let year: number = typeof n.year === "number" ? n.year : Number(n.year);
          if (!month && typeof n.date === "string") {
            const parts = n.date.split(/\s+/); // e.g., "Mar 2024"
            if (parts.length >= 2) {
              month = parts[0];
              const parsedYear = Number(parts[1]);
              if (!isNaN(parsedYear)) year = parsedYear;
            }
          }
          return {
            id: n.id ?? undefined,
            title: n.title ?? "",
            description: n.description ?? "",
            category: n.category ?? n.type ?? "",
            imageUrl,
            month,
            year: isNaN(year) ? new Date().getFullYear() : year,
            createdAt: n.createdAt ?? Date.now(),
          } as NewsItem;
        })
        .filter((n) => n.title && n.description && n.category && n.imageUrl && n.month && n.year);

      // Sort newest first by createdAt
      normalized.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));

      // Show newly added items first, then fall back to seeded defaults
      if (normalized.length > 0) {
        const combined = [...normalized, ...defaultItems];
        return combined.slice(0, 6);
      }
      return defaultItems.slice(0, 6);
    } catch {
      return defaultItems.slice(0, 6);
    }
  };
  const [newsItems, setNewsItems] = useState<NewsItem[]>(getNews());

  // Live update when admin changes news or storage changes in another tab
  useEffect(() => {
    const handler = () => setNewsItems(getNews());
    const storageHandler = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setNewsItems(getNews());
    };
    window.addEventListener("bvp:news:update", handler);
    window.addEventListener("storage", storageHandler);
    return () => {
      window.removeEventListener("bvp:news:update", handler);
      window.removeEventListener("storage", storageHandler);
    };
  }, []);

  // Debug log current items whenever they change
  useEffect(() => {
    try {
      console.log("[NewsSection] Loaded items:", newsItems);
    } catch {}
  }, [newsItems]);

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
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    if (el.src.endsWith("/placeholder.svg")) return;
                    el.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {item.month} {item.year}
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
                  <span className="text-sm text-muted-foreground">{item.month} {item.year}</span>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 font-medium" onClick={() => window.location.assign(`/news/${item.id ?? index}`)}>
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.location.assign('/news')}>
            View All News & Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;