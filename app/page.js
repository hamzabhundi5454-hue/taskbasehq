"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Brain,
  Calculator,
  Search,
} from "lucide-react";

const pdfTools = [
  { name: "Compress PDF", path: "/tools/pdf-compress" },
  { name: "Merge PDF", path: "/tools/pdf-merge" },
  { name: "Split PDF", path: "/tools/pdf-split" },
  { name: "Rotate PDF", path: "/tools/pdf-rotate" },
  { name: "Delete Pages", path: "/tools/pdf-delete-pages" },
  { name: "Remove Watermark", path: "/tools/pdf-remove-watermark" },
  { name: "PDF to Word", path: "/tools/pdf-to-word" },
  { name: "PDF to Excel", path: "/tools/pdf-to-excel" },
  { name: "PDF to Image", path: "/tools/pdf-to-image" },
];

const aiTools = [
  { name: "Resume Builder", path: "/ai/resume-builder" },
  { name: "Resume Analyzer", path: "/ai/resume-analyzer" },
  { name: "Email Writer", path: "/ai/email-writer" },
  { name: "Business Name Generator", path: "/ai/business-name-generator" },
  { name: "Business Idea Generator", path: "/ai/business-idea-generator" },
  { name: "Product Description Generator", path: "/ai/product-description-generator" },
];

const productivityTools = [
  { name: "Salary Calculator", path: "/productivity/salary-calculator" },
  { name: "Loan Calculator", path: "/productivity/loan-calculator" },
  { name: "GST Tax Calculator", path: "/productivity/gst-tax-calculator" },
  { name: "Invoice Generator", path: "/productivity/invoice-generator" },
  { name: "QR Code Generator", path: "/productivity/qr-code-generator" },
];

export default function Dashboard() {

  const [search, setSearch] = useState("");

  const allTools = [...pdfTools, ...aiTools, ...productivityTools];

  const filteredTools = allTools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-10 max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Tools Dashboard
      </h1>

      {/* SEARCH */}

      <div className="flex items-center border rounded-lg p-3 mb-10">
        <Search size={18} className="mr-2" />
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none"
        />
      </div>

      {/* SEARCH RESULT */}

      {search && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
          {filteredTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.path}
              className="border p-4 rounded-lg hover:bg-black hover:text-white transition"
            >
              {tool.name}
            </Link>
          ))}
        </div>
      )}

      {!search && (
        <>
          {/* PDF TOOLS */}

          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FileText size={20} />
            PDF Tools
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
            {pdfTools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.path}
                className="border p-4 rounded-lg hover:bg-black hover:text-white transition"
              >
                {tool.name}
              </Link>
            ))}
          </div>

          {/* AI TOOLS */}

          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Brain size={20} />
            AI Tools
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
            {aiTools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.path}
                className="border p-4 rounded-lg hover:bg-black hover:text-white transition"
              >
                {tool.name}
              </Link>
            ))}
          </div>

          {/* CALCULATORS */}

          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Calculator size={20} />
            Calculators
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {productivityTools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.path}
                className="border p-4 rounded-lg hover:bg-black hover:text-white transition"
              >
                {tool.name}
              </Link>
            ))}
          </div>
        </>
      )}

    </main>
  );
}