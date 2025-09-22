import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Menu, X, Search } from "lucide-react";
import bdaLogo from "@/assets/bda-logo.png";
import LoginModal from "./LoginModal";
import { useTranslation } from "@/contexts/TranslationContext";

const Header = () => {
  const mainLinks = [
    { label: "ABOUT US", href: "/about-us" },
    { label: "RTI", href: "#rti" },
    { label: "SECTIONS", href: "#sections" },
    { label: "IPGRS", href: "https://ipgrs.karnataka.gov.in/" },
    { label: "ONLINE SERVICES", href: "/#project" },
    { label: "ONGOING PROJECTS", href: "/ongoingproject" },
    { label: "PHOTO GALLERY", href: "/photo-gallery" },
    { label: "EODB", href: "/eodb" },
    { label: "CONTACT US", href: "/contact" },
  ];

  const handleTranslate = (lang: string) => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://translate.google.com/translate?sl=auto&tl=${lang}&u=${url}`,
      "_blank"
    );
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { language, setLanguage } = useTranslation();

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#1A237E] text-white text-[11px] relative overflow-hidden">
        <div className="container mx-auto flex items-center justify-between px-3 py-1.5 relative z-10">
          {/* Logo + Title */}
          <div className="flex items-center gap-2 min-w-0 max-w-[60%]">
            <img src={bdaLogo} alt="BDA Logo" className="h-4 w-4 rounded-sm" />
            <span className="font-medium truncate text-white drop-shadow">
              Bangalore Development Authority
            </span>
          </div>

          {/* Language + Login */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              className={`h-6 px-2 text-[11px] font-medium ${
                language === 'en' 
                  ? 'bg-white/30 text-white' 
                  : 'text-white hover:bg-white/20'
              }`}
              onClick={() => setLanguage('en')}
            >
              ENGLISH
            </Button>
            <span className="text-white/70">|</span>
            <Button 
              variant="ghost" 
              className={`h-6 px-2 text-[11px] font-medium ${
                language === 'kn' 
                  ? 'bg-white/30 text-white' 
                  : 'text-white hover:bg-white/20'
              }`}
              onClick={() => setLanguage('kn')}
            >
              ಕನ್ನಡ
            </Button>
            <Button 
              onClick={() => setLoginOpen(true)}
              className="h-6 px-3 rounded-full text-white text-[11px] font-semibold backdrop-blur-sm bg-white/20 hover:bg-white/30"
            >
              Login
            </Button>
            <Button className="h-6 px-3 rounded-full text-white text-[11px] font-semibold backdrop-blur-sm bg-white/20 hover:bg-white/30">
              Resolve Your Issue
            </Button>
          </div>
        </div>
      </div>

      {/* Logo + Search Row */}
      <div className="bg-white py-2 md:py-3 px-3 md:px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2 overflow-x-hidden">
          <div className="flex items-center gap-2 min-w-0">
            <img src={bdaLogo} alt="BDA Logo" className="h-10 md:h-12" />
          </div>

          {/* Search Box - hidden on mobile */}
          <div className="hidden md:block relative w-full max-w-xs">
            <input
              type="search"
              placeholder="Search…"
              className="w-full rounded-full border border-gray-300 pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#1A237E] text-white">
        <div className="container mx-auto flex items-center px-3 md:px-4 py-1.5 md:py-2">
          {/* Left group: Home + Links */}
          <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" className="p-2 hover:bg-white/20 text-white rounded-full shadow-lg">
              <Home className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-1">
              {mainLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-2.5 py-2 text-[13px] font-semibold hover:bg-white/20 rounded-lg transition-all duration-200 hover:shadow-lg backdrop-blur-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            onClick={() => setMobileOpen(!mobileOpen)}
            variant="ghost"
            className="md:hidden ml-auto p-2 hover:bg-white/20 text-white rounded-full"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden px-4 py-3 space-y-2 bg-[#1A237E]">
            {mainLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm py-2 px-3 rounded-lg font-semibold transition-all hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Login Modal */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </header>
  );
};

export default Header;
