import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BrandBengaluru from "./pages/BrandBengaluru";
import NotFound from "./pages/NotFound";
import AdminLayout from "./admin/AdminLayout";
import HeroAdmin from "./admin/HeroAdmin";
import SubAdmins from "./admin/SubAdmins";
import SuperAdminEmail from "./admin/SuperAdminEmail";
import NewsAdmin from "./admin/NewsAdmin";
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";
import "./index.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/brand-bengaluru" element={<BrandBengaluru />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="banner" element={<HeroAdmin />} />
            <Route path="sub-admins" element={<SubAdmins />} />
            <Route path="super-email" element={<SuperAdminEmail />} />
            <Route path="news" element={<NewsAdmin />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
