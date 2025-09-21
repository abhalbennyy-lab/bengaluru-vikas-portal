import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BrandBengaluru from "./pages/BrandBengaluru";
import EODB from "./pages/EODB";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Ongoingproject from "./pages/Ongoingproject";
import NotFound from "./pages/NotFound";
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/AdminLogin";
import ProtectedRoute from "./admin/ProtectedRoute";
import SetupDemo from "./admin/SetupDemo";
import HeroAdmin from "./admin/HeroAdmin";
import SubAdmins from "./admin/SubAdmins";
import SuperAdminEmail from "./admin/SuperAdminEmail";
import NewsAdmin from "./admin/NewsAdmin";
import PhotoGalleryAdmin from "./admin/PhotoGalleryAdmin";
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";
import PhotoGallery from "./pages/PhotoGallery";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TranslationProvider } from "./contexts/TranslationContext";
import "./index.css";
import Login from "./pages/Login"; // Added import statement for Login page

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <TranslationProvider>
            <SetupDemo />
            <Toaster />
            <Sonner />
            <BrowserRouter>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Index />} />
              <Route path="/news" element={<NewsList />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/photo-gallery" element={<PhotoGallery />} />
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/news" element={<NewsList />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/brand-bengaluru" element={<BrandBengaluru />} />
              <Route path="/eodb" element={<EODB />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/ongoingproject" element={<Ongoingproject />} />

              {/* Admin routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }>
              {/* Admin Routes */}
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="banner" element={<HeroAdmin />} />
                <Route path="sub-admins" element={<SubAdmins />} />
                <Route path="super-email" element={<SuperAdminEmail />} />
                <Route path="news" element={<NewsAdmin />} />
                <Route path="photo-gallery" element={<PhotoGalleryAdmin />} />
              </Route>

              {/* Catch-all */}
              </Route>

              {/* Catch-All */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            </BrowserRouter>
          </TranslationProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
