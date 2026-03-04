export default function Pricing() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">

      <h1 className="text-3xl font-bold mb-6">
        Pricing Plans
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Free Plan</h2>
          <p className="text-gray-600">
            Use basic PDF tools for free.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Pro Plan</h2>
          <p className="text-gray-600">
            $5 / month – Unlimited tools and AI features.
          </p>
        </div>

      </div>

    </main>
  );
}