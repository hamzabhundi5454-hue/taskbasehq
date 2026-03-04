import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">
      
      <h1 className="text-4xl font-bold mb-4">
        TaskbaseHQ
      </h1>

      <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">
        All-in-one platform for PDF tools, file converters,
        salary & tax calculators, and AI writing tools.
      </p>

      <div className="flex gap-4">
        
        <Link
          href="/dashboard"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Start Free Trial
        </Link>

        <Link
          href="/pricing"
          className="border px-6 py-3 rounded-lg"
        >
          View Pricing
        </Link>

      </div>

    </main>
  );
}