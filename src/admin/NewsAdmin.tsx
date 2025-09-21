import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

type NewsItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  month: string;
  year: number;
  createdAt: number;
};

const STORAGE_KEY = "bvp.news.items";

// Default fallback items (can be empty or some sample news)
const DEFAULT_ITEMS: NewsItem[] = [];

const NewsAdmin = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState<string>("");

  const [items, setItems] = useState<NewsItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as NewsItem[];
        return parsed.length > 0 ? parsed : DEFAULT_ITEMS;
      }
      return DEFAULT_ITEMS;
    } catch {
      return DEFAULT_ITEMS;
    }
  });

  // Save to localStorage whenever items change
  useEffect(() => {
    try {
      console.log("[NewsAdmin] Saving items to localStorage:", items);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      console.log("[NewsAdmin] Dispatched bvp:news:update event");
      window.dispatchEvent(new Event("bvp:news:update"));
    } catch (error) {
      console.error("[NewsAdmin] Error saving to localStorage:", error);
    }
  }, [items]);

  const addNews = () => {
    const yr = parseInt(year, 10);
    if (!title.trim() || !description.trim() || !category.trim() || !imageUrl.trim() || !month.trim() || isNaN(yr)) {
      toast({ title: "Missing fields", description: "Please fill all fields correctly." });
      return;
    }

    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const item: NewsItem = {
      id,
      title: title.trim(),
      description: description.trim(),
      category: category.trim(),
      imageUrl: imageUrl.trim(), // stores Google Drive or external link
      month: month.trim(),
      year: yr,
      createdAt: Date.now(),
    };
    console.log("[NewsAdmin] Adding news item:", item);
    setItems((prev) => {
      const newItems = [item, ...prev];
      console.log("[NewsAdmin] Updated items array:", newItems);
      return newItems;
    });
    setTitle("");
    setDescription("");
    setCategory("");
    setImageUrl("");
    setMonth("");
    setYear("");
    toast({ title: "News added", description: item.title });
  };

  const removeNews = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
    toast({ title: "Removed", description: "News item deleted." });
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <div className="mb-4">
        <div className="text-2xl font-semibold">News Manager</div>
        <div className="text-sm text-muted-foreground">Add news cards for Latest News & Events</div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Add news</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="news-title">Title</Label>
              <Input id="news-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="news-category">Type</Label>
              <Input id="news-category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="news-desc">Description</Label>
              <Textarea id="news-desc" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short description" rows={4} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="news-month">Month</Label>
              <Input id="news-month" value={month} onChange={(e) => setMonth(e.target.value)} placeholder="e.g., Mar" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="news-year">Year</Label>
              <Input id="news-year" type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="2025" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="news-image-url">Image URL (Google Drive link)</Label>
              <Input
                id="news-image-url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Paste Google Drive or image link"
              />
            </div>
            <div className="flex items-end">
              <Button onClick={addNews}>Add</Button>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.length === 0 && <div className="text-sm text-muted-foreground">No news added yet.</div>}
            {items.map((n) => (
              <div key={n.id} className="rounded-md border p-3 flex gap-3">
                <img src={n.imageUrl} alt={n.title} className="w-28 h-20 object-cover rounded" />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium truncate">{n.title}</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {n.category} · {n.month} {n.year}
                  </div>
                  <div className="text-xs text-muted-foreground line-clamp-2">{n.description}</div>
                </div>
                <div className="flex items-center">
                  <Button variant="destructive" onClick={() => removeNews(n.id)}>
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsAdmin;
