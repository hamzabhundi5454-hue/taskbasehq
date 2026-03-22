"use client";

import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [search, setSearch] = useState("");

  const pdfTools = [
    "compress-pdf",
    "merge-pdf",
    "split-pdf",
    "rotate-pdf",
    "delete-pages",
    "remove-watermark",
    "pdf-to-word",
    "pdf-to-excel",
    "pdf-to-image",
  ];

  const aiTools = [
    "resume-builder",
    "resume-analyzer",
    "email-writer",
    "business-name-generator",
    "business-idea-generator",
    "product-description-generator",
  ];

  const calculatorTools = [
    "salary-calculator",
    "loan-calculator",
    "gst-tax-calculator",
    "invoice-generator",
    "qr-code-generator",
  ];

  const filterTools = (tools) =>
    tools.filter((tool) =>
      tool.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tools Dashboard</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search tools..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border px-4 py-2 rounded-lg mb-6"
      />

      {/* PDF TOOLS */}
      <h2 className="font-semibold mb-2">PDF Tools</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {filterTools(pdfTools).map((tool) => (
          <Link
            key={tool}
            href={`/tools/${tool}`}
            className="border p-4 rounded hover:shadow"
          >
            {tool.replaceAll("-", " ")}
          </Link>
        ))}
      </div>

      {/* AI TOOLS */}
      <h2 className="font-semibold mb-2">AI Tools</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {filterTools(aiTools).map((tool) => (
          <Link
            key={tool}
            href={`/ai/${tool}`}
            className="border p-4 rounded hover:shadow"
          >
            {tool.replaceAll("-", " ")}
          </Link>
        ))}
      </div>

      {/* CALCULATORS */}
      <h2 className="font-semibold mb-2">Calculators</h2>
      <div className="grid grid-cols-3 gap-4">
        {filterTools(calculatorTools).map((tool) => (
          <Link
            key={tool}
            href={`/productivity/${tool}`}
            className="border p-4 rounded hover:shadow"
          >
            {tool.replaceAll("-", " ")}
          </Link>
        ))}
      </div>
    </main>
  );
}