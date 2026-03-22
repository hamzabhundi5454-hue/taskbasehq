"use client";

import Link from "next/link";

export default function Dashboard() {
  const pdfTools = [
    "pdf-compress","pdf-merge","pdf-split","pdf-rotate","pdf-delete-pages",
    "pdf-to-word","pdf-to-excel","pdf-to-image"
  ];

  const aiTools = [
    "resume-builder","email-writer","business-name-generator","resume-analyzer"
  ];

  const smartTools = [
    "salary-calculator","loan-calculator","gst-tax-calculator","invoice-generator"
  ];

  return (
    <main className="p-6 bg-gray-50 min-h-screen">

      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* PDF */}
      <Section title="📄 PDF Tools" tools={pdfTools} base="/tools" />

      {/* AI */}
      <Section title="🤖 AI Tools" tools={aiTools} base="/ai" />

      {/* SMART */}
      <Section title="⚡ Smart Tools" tools={smartTools} base="/productivity" />

    </main>
  );
}

function Section({ title, tools, base }) {
  return (
    <div className="mb-8">
      <h2 className="font-semibold mb-3">{title}</h2>

      <div className="grid grid-cols-4 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool}
            href={`${base}/${tool}`}
            className="card text-sm"
          >
            {tool.replaceAll("-", " ")}
          </Link>
        ))}
      </div>
    </div>
  );
}