import { useParams, Link, Navigate } from "react-router-dom";

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

const NewsDetail = () => {
  const { id } = useParams();
  const items: NewsItem[] = (() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as NewsItem[]) : [];
    } catch {
      return [];
    }
  })();
  const item = items.find((n) => n.id === id);
  if (!item) return <Navigate to="/news" replace />;
  return (
    <div className="container mx-auto px-4 py-10">
      <Link to="/news" className="text-sm text-primary">← Back to News</Link>
      <h1 className="text-3xl font-bold mt-2">{item.title}</h1>
      <div className="text-sm text-muted-foreground">{item.category} · {item.month} {item.year}</div>
      <div className="mt-4 aspect-video overflow-hidden rounded-md">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            if (el.src.endsWith("/placeholder.svg")) return;
            el.src = "/placeholder.svg";
          }}
        />
      </div>
      <p className="mt-4 text-base text-gray-700 whitespace-pre-wrap">{item.description}</p>
    </div>
  );
};

export default NewsDetail;


