import Link from "next/link";

const pdfTools = [
  "pdf-compress",
  "pdf-merge",
  "pdf-split",
  "pdf-delete-pages",
  "pdf-rotate",
  "pdf-reorder",
  "pdf-repair",
  "pdf-metadata",
  "pdf-protect",
  "pdf-unlock",
  "pdf-watermark",
  "pdf-remove-watermark",
  "pdf-to-word",
  "pdf-to-excel",
  "pdf-to-powerpoint",
  "pdf-to-image",
  "pdf-to-pdf",
  "word-to-pdf",
  "excel-to-pdf",
  "powerpoint-to-pdf",
  "image-to-pdf",
];

const aiTools = [
  "resume-builder",
  "resume-analyzer",
  "cover-letter-generator",
  "email-writer",
  "job-description-generator",
  "business-name-generator",
  "business-idea-generator",
  "product-description-generator",
  "invoice-assistant",
  "social-caption-generator",
];

const productivityTools = [
  "salary-calculator",
  "loan-calculator",
  "gst-tax-calculator",
  "invoice-generator",
  "qr-code-generator",
  "cv-to-pdf",
  "resume-builder",
  "resume-analyzer",
  "cover-letter-generator",
  "business-name-generator",
];

function ToolCard({ name, path }) {
  const label = name
    .replaceAll("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <Link
      href={path}
      className="border rounded-lg p-4 hover:bg-black hover:text-white transition text-center"
    >
      {label}
    </Link>
  );
}

export default function Dashboard() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Tools Dashboard
      </h1>

      {/* PDF TOOLS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">
          PDF Tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {pdfTools.map((tool) => (
            <ToolCard
              key={tool}
              name={tool}
              path={`/tools/${tool}`}
            />
          ))}
        </div>
      </section>

      {/* AI TOOLS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">
          AI Tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {aiTools.map((tool) => (
            <ToolCard
              key={tool}
              name={tool}
              path={`/ai/${tool}`}
            />
          ))}
        </div>
      </section>

      {/* PRODUCTIVITY */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          Productivity Tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {productivityTools.map((tool) => (
            <ToolCard
              key={tool}
              name={tool}
              path={`/productivity/${tool}`}
            />
          ))}
        </div>
      </section>

    </main>
  );
}