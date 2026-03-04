import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "TaskbaseHQ",
  description: "All in one tools platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <div className="flex min-h-screen">

          {/* SIDEBAR */}

          <aside className="w-64 bg-black text-white p-6">

            <h2 className="text-2xl font-bold mb-8">
              TaskbaseHQ
            </h2>

            <nav className="flex flex-col gap-4">

              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>

              <Link href="/dashboard" className="hover:text-gray-300">
                Dashboard
              </Link>

              <Link href="/tools/pdf-compress" className="hover:text-gray-300">
                PDF Tools
              </Link>

              <Link href="/ai/resume-builder" className="hover:text-gray-300">
                AI Tools
              </Link>

              <Link href="/productivity/salary-calculator" className="hover:text-gray-300">
                Calculators
              </Link>

              <Link href="/pricing" className="hover:text-gray-300">
                Pricing
              </Link>

            </nav>

          </aside>

          {/* MAIN CONTENT */}

          <main className="flex-1 bg-gray-50">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}