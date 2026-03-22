"use client";

import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [search, setSearch] = useState("");

  // ✅ ALL PDF TOOLS (21)
  const pdfTools = [
    "excel-to-pdf","image-to-pdf","pdf-compress","pdf-delete-pages","pdf-merge",
    "pdf-metadata","pdf-protect","pdf-remove-watermark","pdf-reorder","pdf-repair",
    "pdf-rotate","pdf-split","pdf-to-excel","pdf-to-image","pdf-to-powerpoint",
    "pdf-to-word","pdf-unlock","pdf-watermark","powerpoint-to-pdf","word-to-pdf"
  ];

  // ✅ ALL AI TOOLS (10)
  const aiTools = [
    "business-idea-generator","business-name-generator","cover-letter-generator",
    "email-writer","invoice-assistant","job-description-generator",
    "product-description-generator","resume-analyzer","resume-builder",
    "social-caption-generator"
  ];

  // ✅ ALL PRODUCTIVITY TOOLS (10)
  const productivityTools = [
    "business-name-generator","cover-letter-generator","cv-to-pdf",
    "gst-tax-calculator","invoice-generator","loan-calculator",
    "qr-code-generator","resume-analyzer","resume-builder","salary-calculator"
  ];

  const filterTools = (tools) =>
    tools.filter((tool) =>
      tool.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Tools Dashboard</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search any tool..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border px-4 py-3 rounded-xl mb-8"
      />

      {/* PDF TOOLS */}
      <h2 className="text-xl font-semibold mb-3">📄 PDF Tools</h2>
      <div className="grid grid-cols-3 gap-5 mb-8">
        {filterTools(pdfTools).map((tool) => (
          <Link key={tool} href={`/tools/${tool}`} className="card">
            {tool.replaceAll("-", " ")}
          </Link>
        ))}
      </div>

      {/* AI TOOLS */}
      <h2 className="text-xl font-semibold mb-3">🤖 AI Tools</h2>
      <div className="grid grid-cols-3 gap-5 mb-8">
        {filterTools(aiTools).map((tool) => (
          <Link key={tool} href={`/ai/${tool}`} className="card">
            {tool.replaceAll("-", " ")}
          </Link>
        ))}
      </div>

      {/* PRODUCTIVITY */}
      <h2 className="text-xl font-semibold mb-3">⚡ Smart Tools</h2>
      <div className="grid grid-cols-3 gap-5">
        {filterTools(productivityTools).map((tool) => (
          <Link key={tool} href={`/productivity/${tool}`} className="card">
            {tool.replaceAll("-", " ")}
          </Link>
        ))}
      </div>
    </main>
  );
}