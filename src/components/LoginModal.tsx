import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Flag, User, Lock, Mail } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-patriotic">
            <Flag className="h-6 w-6 text-white" />
          </div>
          <DialogTitle className="bg-gradient-to-r from-india-saffron to-india-green bg-clip-text text-transparent text-2xl font-bold">
            {isLogin ? "Welcome to BDA Portal" : "Join BDA Community"}
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Celebrating India's Independence Day 🇮🇳
          </p>
        </DialogHeader>

        <Card className="border-0 shadow-patriotic">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10 border-india-saffron/20 focus:border-india-saffron"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 border-india-saffron/20 focus:border-india-saffron"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 border-india-saffron/20 focus:border-india-saffron"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-india-saffron to-india-green hover:from-india-saffron/90 hover:to-india-green/90 text-white font-semibold shadow-patriotic"
                >
                  {isLogin ? "Sign In to BDA Portal" : "Create BDA Account"}
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-sm text-india-saffron hover:text-india-green transition-colors font-medium"
                  >
                    {isLogin 
                      ? "Don't have an account? Sign up" 
                      : "Already have an account? Sign in"
                    }
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-muted">
              <p className="text-xs text-center text-muted-foreground">
                🎉 Independence Day Special Portal 🎉
                <br />
                "Unity in Diversity - Digital India"
              </p>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;