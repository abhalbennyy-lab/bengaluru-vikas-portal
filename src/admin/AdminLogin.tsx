import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Shield, Mail, Lock, RefreshCw, ArrowLeft, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LoginFormData {
  email: string;
  password: string;
  captcha: string;
}

interface OTPFormData {
  otp: string;
}

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Form states
  const [loginData, setLoginData] = useState<LoginFormData>({
    email: "",
    password: "",
    captcha: ""
  });
  
  const [otpData, setOtpData] = useState<OTPFormData>({
    otp: ""
  });
  
  // UI states
  const [currentStep, setCurrentStep] = useState<'login' | 'otp'>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  // Initialize captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // OTP timer countdown
  useEffect(() => {
    if (otpTimer > 0) {
      const timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpTimer]);

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
    setError("");
  };

  const handleOtpInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtpData({ otp: e.target.value });
    setError("");
  };

  const validateCaptcha = (input: string) => {
    // Case insensitive comparison - both input and captcha are converted to lowercase
    const inputLower = input.toLowerCase().trim();
    const captchaLower = captchaText.toLowerCase().trim();
    console.log('Captcha validation:', { input: inputLower, captcha: captchaLower, match: inputLower === captchaLower });
    return inputLower === captchaLower;
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validate captcha
    console.log('Validating captcha:', { 
      userInput: loginData.captcha, 
      captchaText: captchaText,
      isValid: validateCaptcha(loginData.captcha)
    });
    
    if (!validateCaptcha(loginData.captcha)) {
      console.log('❌ Captcha validation failed');
      setError("Invalid captcha. Please try again.");
      generateCaptcha();
      setLoginData(prev => ({ ...prev, captcha: "" }));
      setIsLoading(false);
      return;
    }
    
    console.log('✅ Captcha validation passed');

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginData.email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call for login verification
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check if email exists in admin list (this would be replaced with actual API call)
      const adminEmails = JSON.parse(localStorage.getItem('adminEmails') || '[]');
      const adminExists = adminEmails.some((admin: any) => admin.email === loginData.email);
      
      if (!adminExists) {
        setError("Email not found in admin list. Please contact super admin.");
        setIsLoading(false);
        return;
      }

      // Simulate sending OTP
      toast({
        title: "OTP Sent",
        description: "A 6-digit OTP has been sent to your email address.",
        duration: 5000,
      });

      setOtpSent(true);
      setOtpTimer(300); // 5 minutes timer
      setCurrentStep('otp');
      
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (otpData.otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate OTP verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In real implementation, verify OTP with backend
      if (otpData.otp === "123456") { // Default OTP for demo
        // Set admin role and redirect
        localStorage.setItem('bvp.admin.role', 'sub');
        localStorage.setItem('bvp.admin.email', loginData.email);
        localStorage.setItem('bvp.admin.loggedIn', 'true');
        
        toast({
          title: "Login Successful",
          description: "Welcome to the admin panel!",
          duration: 3000,
        });
        
        navigate('/admin/banner');
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError("OTP verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (otpTimer > 0) return;
    
    setIsLoading(true);
    try {
      // Simulate resending OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "OTP Resent",
        description: "A new 6-digit OTP has been sent to your email.",
        duration: 3000,
      });
      
      setOtpTimer(300);
    } catch (err) {
      setError("Failed to resend OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLogin = () => {
    setCurrentStep('login');
    setOtpData({ otp: "" });
    setError("");
    generateCaptcha();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
          <p className="text-gray-600 mt-2">Bengaluru Vikas Portal</p>
        </div>

        {/* Login Form */}
        {currentStep === 'login' && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Sign In</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your admin email"
                      value={loginData.email}
                      onChange={handleLoginInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={handleLoginInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Captcha Field */}
                <div className="space-y-2">
                  <Label htmlFor="captcha">Captcha Verification</Label>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1">
                      <Input
                        id="captcha"
                        name="captcha"
                        type="text"
                        placeholder="Enter captcha (case insensitive)"
                        value={loginData.captcha}
                        onChange={handleLoginInputChange}
                        className="tracking-wider"
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-gray-100 px-3 py-2 rounded border font-mono text-lg font-bold tracking-wider">
                        {captchaText}
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={generateCaptcha}
                        className="p-2"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Send OTP"}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* OTP Verification Form */}
        {currentStep === 'otp' && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Verify OTP</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleOtpSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {otpSent && (
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      A 6-digit OTP has been sent to <strong>{loginData.email}</strong>
                    </AlertDescription>
                  </Alert>
                )}

                {/* OTP Field */}
                <div className="space-y-2">
                  <Label htmlFor="otp">Enter 6-Digit OTP</Label>
                  <Input
                    id="otp"
                    name="otp"
                    type="text"
                    placeholder="000000"
                    value={otpData.otp}
                    onChange={handleOtpInputChange}
                    className="text-center text-2xl tracking-widest font-mono"
                    maxLength={6}
                    required
                  />
                </div>

                {/* Timer and Resend */}
                <div className="text-center">
                  {otpTimer > 0 ? (
                    <p className="text-sm text-gray-600">
                      Resend OTP in {formatTime(otpTimer)}
                    </p>
                  ) : (
                    <Button
                      type="button"
                      variant="link"
                      onClick={handleResendOtp}
                      disabled={isLoading}
                      className="text-sm"
                    >
                      Resend OTP
                    </Button>
                  )}
                </div>

                <div className="space-y-3">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading || otpData.otp.length !== 6}
                  >
                    {isLoading ? "Verifying..." : "Verify OTP"}
                  </Button>

                  <Separator />

                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBackToLogin}
                    className="w-full"
                    disabled={isLoading}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Login
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Need help? Contact the super admin
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
