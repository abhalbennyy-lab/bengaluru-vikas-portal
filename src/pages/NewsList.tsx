import { Link } from "react-router-dom";

type NewsItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  month: string;
  year: number;
};

const STORAGE_KEY = "bvp.news.items";

const NewsList = () => {
  const items: NewsItem[] = (() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as NewsItem[]) : [];
    } catch {
      return [];
    }
  })();
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">News & Events</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((n) => (
          <Link key={n.id} to={`/news/${n.id}`} className="block rounded-lg border overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src={n.imageUrl}
                alt={n.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  if (el.src.endsWith("/placeholder.svg")) return;
                  el.src = "/placeholder.svg";
                }}
              />
            </div>
            <div className="p-3">
              <div className="text-xs text-muted-foreground">{n.category} · {n.month} {n.year}</div>
              <div className="font-medium truncate">{n.title}</div>
              <div className="text-sm text-muted-foreground line-clamp-2">{n.description}</div>
            </div>
          </Link>
        ))}
        {items.length === 0 && <div className="text-sm text-muted-foreground">No news yet.</div>}
      </div>
    </div>
  );
};

export default NewsList;


