import ToolCard from "../../components/ToolCard";

export default function PDFToolsPage() {
  const tools = [
    { title: "Excel to PDF", desc: "Convert Excel sheets to PDF", href: "/tools/excel-to-pdf", type: "Free" },
    { title: "Image to PDF", desc: "Convert images into PDF", href: "/tools/image-to-pdf", type: "Free" },
    { title: "Word to PDF", desc: "Convert Word documents to PDF", href: "/tools/word-to-pdf", type: "Free" },
    { title: "PowerPoint to PDF", desc: "Convert PPT to PDF", href: "/tools/powerpoint-to-pdf", type: "Free" },

    { title: "PDF Merge", desc: "Merge multiple PDFs", href: "/tools/pdf-merge", type: "Free" },
    { title: "PDF Split", desc: "Split PDF pages", href: "/tools/pdf-split", type: "Free" },
    { title: "PDF Compress", desc: "Reduce PDF size", href: "/tools/pdf-compress", type: "Free" },

    { title: "PDF Reorder", desc: "Reorder PDF pages", href: "/tools/pdf-reorder", type: "Free" },
    { title: "PDF Delete Pages", desc: "Delete specific pages", href: "/tools/pdf-delete-pages", type: "Free" },

    { title: "PDF Protect", desc: "Password protect PDF", href: "/tools/pdf-protect", type: "Premium" },
    { title: "PDF Unlock", desc: "Remove PDF password", href: "/tools/pdf-unlock", type: "Premium" },

    { title: "PDF Watermark", desc: "Add watermark to PDF", href: "/tools/pdf-watermark", type: "Premium" },
    { title: "Remove PDF Watermark", desc: "AI watermark removal", href: "/tools/pdf-remove-watermark", type: "AI" },

    { title: "PDF Metadata Viewer", desc: "View PDF metadata", href: "/tools/pdf-metadata", type: "Free" },
    { title: "PDF Repair", desc: "Fix corrupted PDFs", href: "/tools/pdf-repair", type: "AI" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">PDF Tools</h1>
      <p className="text-gray-600 mb-8">
        Secure, fast and browser-based PDF tools. No uploads required.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}