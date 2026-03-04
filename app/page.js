import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO */}

      <section className="text-center py-24 px-6 max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-6">
          All-in-One Online Tools Platform
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Convert files, edit PDFs, generate AI content, and use powerful
          calculators — all in one place.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Open Dashboard
          </Link>

          <Link
            href="/pricing"
            className="border px-6 py-3 rounded-lg"
          >
            View Pricing
          </Link>
        </div>

      </section>


      {/* FEATURES */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Powerful PDF Tools
            </h3>

            <p className="text-gray-600">
              Compress, merge, split, convert and edit PDFs easily.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              AI Productivity Tools
            </h3>

            <p className="text-gray-600">
              Generate resumes, emails, captions, and business ideas with AI.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Business Calculators
            </h3>

            <p className="text-gray-600">
              Salary, loan, tax and financial calculators in seconds.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="text-center py-24">

        <h2 className="text-3xl font-bold mb-6">
          Start Using All Tools Today
        </h2>

        <Link
          href="/dashboard"
          className="bg-black text-white px-8 py-4 rounded-lg"
        >
          Go To Dashboard
        </Link>

      </section>

    </main>
  );
}