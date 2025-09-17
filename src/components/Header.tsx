import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import bdaLogo from "@/assets/bda-logo.png";

const Header = () => {
  const navItems = [
    "ABOUT US",
    "RTI", 
    "SECTIONS",
    "IPGRS",
    "ONLINE SERVICES",
    "ONGOING PROJECTS",
    "EODB",
    "CONTACT US"
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gov-red text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>ಕನ್ನಡ</span>
            <span>Department Login</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Resolve your Issues</span>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-white py-4 px-4 shadow-sm">
        <div className="container mx-auto flex items-center gap-4">
          <img src={bdaLogo} alt="BDA Logo" className="h-16" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">BANGALORE DEVELOPMENT AUTHORITY</h1>
            <p className="text-gray-600">Urban Development Department</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-nav text-white shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center">
            <Button variant="ghost" className="p-3 hover:bg-white/20 text-white">
              <Home className="h-5 w-5" />
            </Button>
            <div className="flex flex-wrap">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="px-4 py-3 hover:bg-white/20 text-white font-medium text-sm whitespace-nowrap"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;