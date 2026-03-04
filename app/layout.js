import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "TaskbaseHQ",
  description: "All-in-one platform for online tools",
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

              <Link href="/">Home</Link>

              <Link href="/dashboard">Dashboard</Link>

              <Link href="/dashboard">PDF Tools</Link>

              <Link href="/dashboard">AI Tools</Link>

              <Link href="/dashboard">Calculators</Link>

              <Link href="/pricing">Pricing</Link>

            </nav>

          </aside>

          {/* CONTENT */}

          <main className="flex-1 bg-gray-50">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}