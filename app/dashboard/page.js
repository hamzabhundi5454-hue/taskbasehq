"use client";

import { useState } from "react";
import Link from "next/link";

const tools = [
  { name: "PDF Compress", path: "/tools/pdf-compress" },
  { name: "PDF Merge", path: "/tools/pdf-merge" },
  { name: "PDF Split", path: "/tools/pdf-split" },
  { name: "PDF Rotate", path: "/tools/pdf-rotate" },
  { name: "PDF Delete Pages", path: "/tools/pdf-delete-pages" },
  { name: "PDF Reorder", path: "/tools/pdf-reorder" },
  { name: "PDF Repair", path: "/tools/pdf-repair" },
  { name: "PDF Protect", path: "/tools/pdf-protect" },
  { name: "PDF Unlock", path: "/tools/pdf-unlock" },
  { name: "PDF Watermark", path: "/tools/pdf-watermark" },
  { name: "Remove Watermark", path: "/tools/pdf-remove-watermark" },
  { name: "PDF to Word", path: "/tools/pdf-to-word" },
  { name: "PDF to Excel", path: "/tools/pdf-to-excel" },
  { name: "PDF to PowerPoint", path: "/tools/pdf-to-powerpoint" },
  { name: "PDF to Image", path: "/tools/pdf-to-image" },

  { name: "Resume Builder", path: "/ai/resume-builder" },
  { name: "Resume Analyzer", path: "/ai/resume-analyzer" },
  { name: "Email Writer", path: "/ai/email-writer" },
  { name: "Business Name Generator", path: "/ai/business-name-generator" },
  { name: "Business Idea Generator", path: "/ai/business-idea-generator" },
  { name: "Product Description Generator", path: "/ai/product-description-generator" },

  { name: "Salary Calculator", path: "/productivity/salary-calculator" },
  { name: "Loan Calculator", path: "/productivity/loan-calculator" },
  { name: "GST Tax Calculator", path: "/productivity/gst-tax-calculator" },
  { name: "Invoice Generator", path: "/productivity/invoice-generator" },
  { name: "QR Code Generator", path: "/productivity/qr-code-generator" },
];

export default function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-10 max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Tools Dashboard
      </h1>

      {/* SEARCH BAR */}

      <input
        type="text"
        placeholder="Search tools..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-3 rounded mb-8"
      />

      {/* TOOLS GRID */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {filteredTools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.path}
            className="border p-4 rounded hover:bg-black hover:text-white transition"
          >
            {tool.name}
          </Link>
        ))}

      </div>

    </main>
  );
}