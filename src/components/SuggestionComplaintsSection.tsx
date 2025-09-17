import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MessageSquare, FileText } from "lucide-react";

const SuggestionComplaintsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Suggestion and Complaints</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Bringing everything that you want at your fingerprints!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center bg-gradient-card hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Phone className="h-8 w-8 text-black" />
              </div>
              <CardTitle className="text-lg">Call on</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary font-bold text-lg">080-23442273,74</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-card hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Mail className="h-8 w-8 text-black" />
              </div>
              <CardTitle className="text-lg">Mail At</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary font-bold">pro@bdabangalore.org</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-card hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <CardTitle className="text-lg">Office Hrs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary font-bold">10:00AM-5.30PM</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-card hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="h-8 w-8 text-black" />
              </div>
              <CardTitle className="text-lg">Suggestion</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="bg-primary hover:bg-primary/90 text-black font-bold">
                Feedback-Box
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SuggestionComplaintsSection;