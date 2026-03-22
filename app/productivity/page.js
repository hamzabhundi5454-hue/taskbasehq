import Link from "next/link";

const tools = [
  "business-name-generator",
  "cover-letter-generator",
  "cv-to-pdf",
  "gst-tax-calculator",
  "invoice-generator",
  "loan-calculator",
  "qr-code-generator",
  "resume-analyzer",
  "resume-builder",
  "salary-calculator",
];

export default function ProductivityPage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Productivity Tools</h1>

      <div className="grid grid-cols-3 gap-4">
        {tools.map((tool) => (
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