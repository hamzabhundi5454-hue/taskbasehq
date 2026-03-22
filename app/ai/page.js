import Link from "next/link";

const tools = [
  "business-idea-generator",
  "business-name-generator",
  "cover-letter-generator",
  "email-writer",
  "invoice-assistant",
  "job-description-generator",
  "product-description-generator",
  "resume-analyzer",
  "resume-builder",
  "social-caption-generator",
];

export default function AIPage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">AI Tools</h1>

      <div className="grid grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool}
            href={`/ai/${tool}`}
            className="border p-4 rounded hover:shadow"
          >
            {tool.replaceAll("-", " ")}
          </Link>
        ))}
      </div>
    </main>
  );
}