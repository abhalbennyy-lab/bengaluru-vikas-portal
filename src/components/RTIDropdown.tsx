import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";

interface RTITableData {
  slNo: number;
  subject: string;
  date?: string;
  language: string;
  source: string;
}

const RTIDropdown = () => {
  const publicInfoOfficers: RTITableData[] = [
    {
      slNo: 1,
      subject: "Public Information Officers List",
      date: "",
      language: "En/Kn",
      source: "BDA"
    }
  ];

  const rtiDocuments: RTITableData[] = [
    {
      slNo: 1,
      subject: "RTI 4(1)(A)",
      date: "",
      language: "En/Kn",
      source: "BDA"
    },
    {
      slNo: 2,
      subject: "RTI 4(1)(B)",
      date: "",
      language: "En/Kn",
      source: "BDA"
    },
    {
      slNo: 3,
      subject: "RTI 26(3)(B)",
      date: "",
      language: "En/Kn",
      source: "BDA"
    },
    {
      slNo: 4,
      subject: "RTI 4(1)(A)",
      date: "",
      language: "En/Kn",
      source: "BDA"
    },
    {
      slNo: 5,
      subject: "RTI 4(1)(B)",
      date: "",
      language: "En/Kn",
      source: "BDA"
    }
  ];

  const appointmentDocs: RTITableData[] = [
    {
      slNo: 1,
      subject: "OM - Appointment of Nodal Officer for Online RTI Application.",
      date: "11/05/2023",
      language: "En/Kn",
      source: "BDA"
    },
    {
      slNo: 2,
      subject: "OM - Usage of Online RTI Application.",
      date: "03/06/2023",
      language: "En/Kn",
      source: "BDA"
    }
  ];

  const TableComponent = ({ title, data }: { title?: string, data: RTITableData[] }) => (
    <div className="mb-6">
      {title && <h4 className="font-semibold text-sm mb-3 text-gray-800">{title}</h4>}
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-2 py-1 text-left">Sl No</th>
              <th className="border border-gray-300 px-2 py-1 text-left">Subject</th>
              <th className="border border-gray-300 px-2 py-1 text-left">Date</th>
              <th className="border border-gray-300 px-2 py-1 text-left">Language</th>
              <th className="border border-gray-300 px-2 py-1 text-left">Source</th>
              <th className="border border-gray-300 px-2 py-1 text-left">Download</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={`${item.slNo}-${item.subject}`} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-2 py-1">{item.slNo}</td>
                <td className="border border-gray-300 px-2 py-1">{item.subject}</td>
                <td className="border border-gray-300 px-2 py-1">{item.date}</td>
                <td className="border border-gray-300 px-2 py-1">{item.language}</td>
                <td className="border border-gray-300 px-2 py-1">{item.source}</td>
                <td className="border border-gray-300 px-2 py-1 text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 hover:bg-blue-100"
                  >
                    <Download className="h-3 w-3 text-blue-600" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="px-2.5 py-2 text-[13px] font-semibold hover:bg-white/20 rounded-lg transition-all duration-200 hover:shadow-lg backdrop-blur-sm text-white flex items-center gap-1"
        >
          RTI
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-[800px] max-h-[500px] overflow-y-auto bg-white border shadow-lg p-4 z-50"
        align="start"
      >
        <div className="space-y-4">
          <DropdownMenuItem asChild>
            <Button
              variant="ghost"
              className="w-full justify-start text-sm font-medium hover:bg-blue-50"
            >
              RTI Info
            </Button>
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          <div>
            <h3 className="font-bold text-sm mb-4 text-gray-900">Online RTI</h3>
            
            <TableComponent 
              title="Public Information Officers"
              data={publicInfoOfficers} 
            />
            
            <TableComponent 
              title="RTI Documents"
              data={rtiDocuments} 
            />
            
            <TableComponent 
              title="Appointment Orders"
              data={appointmentDocs} 
            />
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RTIDropdown;