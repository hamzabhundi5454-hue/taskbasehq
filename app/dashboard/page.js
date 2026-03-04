import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen p-10 max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      {/* PDF TOOLS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          PDF Tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <Link href="/tools/pdf-to-image" className="border p-4 rounded hover:bg-gray-50">
            PDF to Image
          </Link>

          <Link href="/tools/pdf-merge" className="border p-4 rounded hover:bg-gray-50">
            Merge PDF
          </Link>

          <Link href="/tools/pdf-split" className="border p-4 rounded hover:bg-gray-50">
            Split PDF
          </Link>

          <Link href="/tools/pdf-compress" className="border p-4 rounded hover:bg-gray-50">
            Compress PDF
          </Link>

          <Link href="/tools/pdf-rotate" className="border p-4 rounded hover:bg-gray-50">
            Rotate PDF
          </Link>

          <Link href="/tools/pdf-remove-watermark" className="border p-4 rounded hover:bg-gray-50">
            Remove Watermark
          </Link>

        </div>
      </section>


      {/* CONVERTERS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          File Converters
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <Link href="/tools/image-to-pdf" className="border p-4 rounded hover:bg-gray-50">
            Image to PDF
          </Link>

          <Link href="/tools/excel-to-pdf" className="border p-4 rounded hover:bg-gray-50">
            Excel to PDF
          </Link>

          <Link href="/tools/word-to-pdf" className="border p-4 rounded hover:bg-gray-50">
            Word to PDF
          </Link>

          <Link href="/tools/pdf-to-word" className="border p-4 rounded hover:bg-gray-50">
            PDF to Word
          </Link>

        </div>
      </section>


      {/* AI TOOLS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          AI Tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <Link href="/ai/resume-builder" className="border p-4 rounded hover:bg-gray-50">
            Resume Builder
          </Link>

          <Link href="/ai/email-writer" className="border p-4 rounded hover:bg-gray-50">
            Email Writer
          </Link>

          <Link href="/ai/business-name-generator" className="border p-4 rounded hover:bg-gray-50">
            Business Name Generator
          </Link>

          <Link href="/ai/social-caption-generator" className="border p-4 rounded hover:bg-gray-50">
            Caption Generator
          </Link>

        </div>
      </section>


      {/* CALCULATORS */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Calculators
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <Link href="/productivity/salary-calculator" className="border p-4 rounded hover:bg-gray-50">
            Salary Calculator
          </Link>

          <Link href="/productivity/loan-calculator" className="border p-4 rounded hover:bg-gray-50">
            Loan Calculator
          </Link>

          <Link href="/productivity/gst-tax-calculator" className="border p-4 rounded hover:bg-gray-50">
            GST Calculator
          </Link>

          <Link href="/productivity/qr-code-generator" className="border p-4 rounded hover:bg-gray-50">
            QR Code Generator
          </Link>

        </div>
      </section>

    </main>
  );
}