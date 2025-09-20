import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, ExternalLink } from "lucide-react";

const EODB = () => {
  const townPlanningServices = [
    {
      slNo: 1,
      service: "Change of Land Use",
      applicationForm: "#",
      userManual: "#"
    },
    {
      slNo: 2,
      service: "Approval of Layout",
      applicationForm: "#",
      userManual: "#"
    },
    {
      slNo: 3,
      service: "Development Plan",
      applicationForm: "#",
      userManual: "#"
    },
    {
      slNo: 4,
      service: "Amalgamation or Bifurcation of a Plot or Site",
      applicationForm: "#",
      userManual: "#"
    }
  ];

  const additionalInfo = [
    {
      slNo: 1,
      title: "The Karnataka Town and Country Planning Act, 1961",
      link: "#"
    },
    {
      slNo: 2,
      title: "Revised Master Plan 2015",
      link: "#"
    },
    {
      slNo: 3,
      title: "BDA Approved Layout",
      link: "#"
    },
    {
      slNo: 4,
      title: "Zonal Regulation",
      link: "#"
    }
  ];

  const engineeringServices = [
    {
      slNo: 1,
      service: "Building Plan Approval",
      applicationForm: "#",
      userManual: "#"
    },
    {
      slNo: 2,
      service: "Commencement Certificate",
      applicationForm: "#",
      userManual: "#"
    },
    {
      slNo: 3,
      service: "Occupancy Certificate",
      applicationForm: "#",
      userManual: "#"
    }
  ];

  const engineeringAdditionalInfo = [
    {
      slNo: 1,
      title: "Building Bye Laws",
      link: "#"
    },
    {
      slNo: 2,
      title: "Fees Circular",
      link: "#"
    }
  ];

  const sevaSindhuServices = [
    {
      slNo: 1,
      service: "Possession Certificate for Sites",
      applicationForm: "#",
      userManual: "#",
      abstract: "#",
      applicationDetails: "#"
    },
    {
      slNo: 2,
      service: "Possession Certificate for Flats",
      applicationForm: "#",
      userManual: "#",
      abstract: "#",
      applicationDetails: "#"
    },
    {
      slNo: 3,
      service: "New e-Khata",
      applicationForm: "#",
      userManual: "#",
      abstract: "#",
      applicationDetails: "#"
    },
    {
      slNo: 4,
      service: "E-Khata Transfer",
      applicationForm: "#",
      userManual: "#",
      abstract: "#",
      applicationDetails: "#"
    }
  ];

  const propertyTaxServices = [
    {
      slNo: 1,
      service: "Property Tax",
      applicationForm: "#",
      userManual: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ease of Doing Business (EoDB)
          </h1>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="prose max-w-none">
              <p className="text-muted-foreground mb-4">
                Ease of Doing Business (EoDB) index is a ranking system established by the World Bank Group. 
                India ranked 63rd in Doing Business 2020 as per World Bank Report. Government of India initiated 
                a comprehensive exercise at Central, State and local levels of the Government to improve India's ranking.
              </p>
              
              <p className="text-muted-foreground mb-4">
                Karnataka has emerged a top achiever, in the Ease of Doing Business (EoDB) ranking of States/ Union 
                territories as per the Business Reform Action Plan (BRAP) 2020 report released by the Department for 
                Promotion of Industry and Internal Trade (DPIIT).
              </p>
              
              <p className="text-muted-foreground">
                Bangalore Development Authority is on mission mode to implement Ease of Doing Business (EoDB) and 
                Minimise Regulatory Compliance Burden (MRCB) to all its citizens and investors. Under this flagship 
                initiative, it is proposed to streamline the existing procedure for services and facilitate seamless 
                approvals. As a first step, information regarding application procedure, user manuals and statutory 
                documents applicable for the services is made available.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Town Planning Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Town Planning Section</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">Sl No</TableHead>
                    <TableHead>Name of the Service</TableHead>
                    <TableHead className="text-center">Application Form</TableHead>
                    <TableHead className="text-center">User Manual</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {townPlanningServices.map((service) => (
                    <TableRow key={service.slNo}>
                      <TableCell>{service.slNo}</TableCell>
                      <TableCell className="font-medium">{service.service}</TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Additional Information */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableBody>
                    {additionalInfo.map((info) => (
                      <TableRow key={info.slNo}>
                        <TableCell className="w-16">{info.slNo}</TableCell>
                        <TableCell className="font-medium">{info.title}</TableCell>
                        <TableCell className="text-center">
                          <Button variant="outline" size="sm" className="gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Click Here
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Engineering Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Engineering Section</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">Sl No</TableHead>
                    <TableHead>Name of the Service</TableHead>
                    <TableHead className="text-center">Application Form</TableHead>
                    <TableHead className="text-center">User Manual</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {engineeringServices.map((service) => (
                    <TableRow key={service.slNo}>
                      <TableCell>{service.slNo}</TableCell>
                      <TableCell className="font-medium">{service.service}</TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Additional Information */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableBody>
                    {engineeringAdditionalInfo.map((info) => (
                      <TableRow key={info.slNo}>
                        <TableCell className="w-16">{info.slNo}</TableCell>
                        <TableCell className="font-medium">{info.title}</TableCell>
                        <TableCell className="text-center">
                          <Button variant="outline" size="sm" className="gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Click Here
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seva Sindhu Portal */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Seva Sindhu Portal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">Sl No</TableHead>
                    <TableHead>Name of the Service</TableHead>
                    <TableHead className="text-center">Application Form</TableHead>
                    <TableHead className="text-center">User Manual</TableHead>
                    <TableHead className="text-center">Abstract</TableHead>
                    <TableHead className="text-center">Application Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sevaSindhuServices.map((service) => (
                    <TableRow key={service.slNo}>
                      <TableCell>{service.slNo}</TableCell>
                      <TableCell className="font-medium">{service.service}</TableCell>
                      <TableCell className="text-center">
                        <Button variant="default" size="sm" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Apply Online
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Property Tax Portal */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Property Tax Portal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">Sl No</TableHead>
                    <TableHead>Name of the Service</TableHead>
                    <TableHead className="text-center">Application Form</TableHead>
                    <TableHead className="text-center">User Manual</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {propertyTaxServices.map((service) => (
                    <TableRow key={service.slNo}>
                      <TableCell>{service.slNo}</TableCell>
                      <TableCell className="font-medium">{service.service}</TableCell>
                      <TableCell className="text-center">
                        <Button variant="default" size="sm" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Pay Online
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default EODB;