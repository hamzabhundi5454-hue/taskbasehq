import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">

      {/* HERO */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">
          All-in-One Online Tools Platform
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Convert PDFs, use AI tools, and access smart utilities — all in one place.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/dashboard" className="bg-black text-white px-6 py-3 rounded-lg">
            Open Dashboard
          </Link>

          <Link href="/pricing" className="border px-6 py-3 rounded-lg">
            View Pricing
          </Link>
        </div>
      </div>

      {/* FEATURES */}
      <div className="grid grid-cols-3 gap-6 mt-16 max-w-4xl w-full">

        <Link href="/tools" className="card text-center">
          <h3 className="font-semibold text-lg mb-2">📄 PDF Tools</h3>
          <p className="text-sm text-gray-500">Merge, compress, convert PDFs</p>
        </Link>

        <Link href="/ai" className="card text-center">
          <h3 className="font-semibold text-lg mb-2">🤖 AI Tools</h3>
          <p className="text-sm text-gray-500">Generate content instantly</p>
        </Link>

        <Link href="/productivity" className="card text-center">
          <h3 className="font-semibold text-lg mb-2">⚡ Smart Tools</h3>
          <p className="text-sm text-gray-500">Fast calculators & utilities</p>
        </Link>

      </div>
    </main>
  );
}