"use client";

import Link from "next/link";

export default function Dashboard() {

  const pdfTools = [
    "excel-to-pdf","image-to-pdf","pdf-compress","pdf-delete-pages","pdf-merge",
    "pdf-metadata","pdf-protect","pdf-remove-watermark","pdf-reorder","pdf-repair",
    "pdf-rotate","pdf-split","pdf-to-excel","pdf-to-image","pdf-to-powerpoint",
    "pdf-to-word","pdf-unlock","pdf-watermark","powerpoint-to-pdf","word-to-pdf"
  ];

  const aiTools = [
    "business-idea-generator","business-name-generator","cover-letter-generator",
    "email-writer","invoice-assistant","job-description-generator",
    "product-description-generator","resume-analyzer","resume-builder",
    "social-caption-generator"
  ];

  const smartTools = [
    "business-name-generator","cover-letter-generator","cv-to-pdf",
    "gst-tax-calculator","invoice-generator","loan-calculator",
    "qr-code-generator","resume-analyzer","resume-builder","salary-calculator"
  ];

  return (
    <main className="p-6 bg-gray-50 min-h-screen">

      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <Section title="📄 PDF Tools" tools={pdfTools} base="/tools" />
      <Section title="🤖 AI Tools" tools={aiTools} base="/ai" />
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