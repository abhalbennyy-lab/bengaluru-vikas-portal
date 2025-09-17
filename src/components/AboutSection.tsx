import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MessageSquare } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              ABOUT BANGALORE DEVELOPMENT AUTHORITY
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Bangalore Development Authority (BDA) came into being with effect from 6th January 1976 under a separate Act of the State Legislature viz. the BDA Act 1976. This Authority combined in itself the Planning functions of the City Planning Authority and the developmental functions of the erstwhile CITB.
              </p>
              <p>
                The Bangalore Development Authority came into existence in 1976 as a successor to the erstwhile City Improvement Trust Board. Development of Bangalore in a planned manner, creating quality infrastructure, provision of sites and services and catering to the housing needs of the underprivileged are the focus areas of the BDA.
              </p>
              <p>
                Since inception, the BDA has allotted <strong>76,000 sites</strong> to individuals for construction of residential dwellings. In addition, more than <strong>800 civic amenity sites</strong> have been given for use by various public utilities, as also organisations, catering to the felt needs of the particular locality.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r-lg">
              <p className="text-gray-800 italic text-lg">
                "Come, join your hands with us and share your opinion for the comprehensive development of our pride Bengaluru city."
              </p>
              <p className="text-primary font-semibold mt-2">- Brand Bengaluru Team</p>
            </div>
          </div>

          {/* Contact & Services */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Suggestion and Complaints</h3>
                <p className="text-gray-600 mb-6">Bringing everything that you want at your fingerprints!</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Call on</p>
                      <p className="text-primary">080-23442273, 74</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Mail At</p>
                      <p className="text-primary">pro@bdabangalore.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Office Hrs</p>
                      <p className="text-gray-600">Mon - Fri: 9:30 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Suggestion
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Feedback Box
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Government Orders</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Circular - April 2024</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Download
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Report - April 2024</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;