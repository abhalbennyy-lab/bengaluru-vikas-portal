import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Menu, X, Search, Palette } from "lucide-react";
import bdaLogo from "@/assets/bda-logo.png";
import LoginModal from "./LoginModal";
import { useTheme } from "@/contexts/ThemeContext";

const Header = () => {
  const mainLinks = [
    { label: "ABOUT US", href: "/about-us" },
    { label: "RTI", href: "#rti" },
    { label: "SECTIONS", href: "#sections" },
    { label: "IPGRS", href: "#ipgrs" },
    { label: "ONLINE SERVICES", href: "/#project" },
    { label: "ONGOING PROJECTS", href: "/ongoingproject" },
    { label: "EODB", href: "/eodb" },
    { label: "CONTACT US", href: "/contact" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-white shadow-md">
      {/* Top Bar - Dynamic Theme */}
      <div className={`text-white text-[11px] relative overflow-hidden ${
        theme === 'independence-day' 
          ? 'bg-gradient-to-r from-india-saffron via-india-white to-india-green' 
          : 'bg-[#1A237E]'
      }`}>
        {theme === 'independence-day' && (
          <div className="absolute inset-0 bg-india-saffron/80"></div>
        )}
        <div className="container mx-auto flex items-center justify-between px-3 py-1.5 relative z-10">
          {/* Logo + Title */}
          <div className="flex items-center gap-2 min-w-0 max-w-[60%]">
            <img src={bdaLogo} alt="BDA Logo" className="h-4 w-4 rounded-sm" />
            <span className="font-medium truncate text-white drop-shadow">
              Bangalore Development Authority {theme === 'independence-day' ? '🇮🇳' : ''}
            </span>
          </div>

          {/* Language + Login + Theme Toggle */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="h-6 px-2 text-white text-[11px] hover:bg-white/20 font-medium">EN</Button>
            <span className="text-white/70">|</span>
            <Button variant="ghost" className="h-6 px-2 text-white text-[11px] hover:bg-white/20 font-medium">ಕನ್ನಡ</Button>
            <Button 
              onClick={toggleTheme}
              className="h-6 px-3 rounded-full bg-white/30 hover:bg-white/40 text-white text-[11px] font-semibold backdrop-blur-sm border border-white/20 flex items-center gap-1"
            >
              <Palette className="h-3 w-3" />
              {theme === 'independence-day' ? 'Normal' : 'Festive'}
            </Button>
            <Button 
              onClick={() => setLoginOpen(true)}
              className={`h-6 px-3 rounded-full text-white text-[11px] font-semibold backdrop-blur-sm ${
                theme === 'independence-day'
                  ? 'bg-white/30 hover:bg-white/40 border border-white/20'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              {theme === 'independence-day' ? '🎉 Login' : 'Login'}
            </Button>
            <Button className={`h-6 px-3 rounded-full text-white text-[11px] font-semibold backdrop-blur-sm ${
              theme === 'independence-day'
                ? 'bg-india-green/80 hover:bg-india-green'
                : 'bg-white/20 hover:bg-white/30'
            }`}>
              {theme === 'independence-day' ? 'Resolve Issue' : 'Resolve Your Issue'}
            </Button>
          </div>
        </div>
      </div>

      {/* Logo + Search Row */}
      <div className="bg-white py-2 md:py-3 px-3 md:px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2 overflow-x-hidden">
          <div className="flex items-center gap-2 min-w-0">
            <img src={bdaLogo} alt="BDA Logo" className="h-10 md:h-12" />
            <div className="min-w-0">
              {/* <h1 className="text-base md:text-2xl font-bold text-gray-900 leading-tight line-clamp-2 max-w-[70vw] md:max-w-none">BANGALORE DEVELOPMENT AUTHORITY</h1> */}
              {/* <p className="text-gray-600 text-xs md:text-sm truncate">Urban Development Department</p> */}
            </div>
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

      {/* Navigation - Dynamic Theme */}
      <nav className={`text-white ${
        theme === 'independence-day' 
          ? 'bg-gradient-to-r from-india-saffron to-india-green shadow-patriotic' 
          : 'bg-[#1A237E]'
      }`}>
        <div className="container mx-auto flex items-center px-3 md:px-4 py-1.5 md:py-2">
          {/* Left group: Home + Links (no huge gap) */}
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

          {/* Mobile Menu Toggle on the right */}
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
          <div className={`md:hidden px-4 py-3 space-y-2 ${
            theme === 'independence-day' 
              ? 'bg-gradient-to-b from-india-saffron to-india-green shadow-patriotic' 
              : 'bg-[#1A237E]'
          }`}>
            {mainLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block text-sm py-2 px-3 rounded-lg font-semibold transition-all ${
                  theme === 'independence-day'
                    ? 'hover:bg-white/20 backdrop-blur-sm'
                    : 'hover:bg-white/10'
                }`}
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
