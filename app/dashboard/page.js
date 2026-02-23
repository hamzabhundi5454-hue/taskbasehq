export default function Dashboard() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Category 1: Tools
          </h2>
          <p className="text-gray-600">
            PDF tools, file converters, and document utilities.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Category 2: Calculators
          </h2>
          <p className="text-gray-600">
            Salary, tax, EMI, and financial calculators.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Category 3: AI Tools
          </h2>
          <p className="text-gray-600">
            Resume, writing, and productivity AI tools.
          </p>
        </div>
      </div>
    </div>
  );
}