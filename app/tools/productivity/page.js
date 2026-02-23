import Link from "next/link";

const tools = [
  {
    title: "Invoice Generator",
    desc: "Create professional invoices with tax, totals & PDF export",
    href: "/tools/productivity/invoice-generator",
    badge: "Premium",
  },
  {
    title: "Resume Builder",
    desc: "Build clean, ATS-friendly resumes in minutes",
    href: "/tools/productivity/resume-builder",
    badge: "Premium",
  },
  {
    title: "Resume Analyzer",
    desc: "Analyze your CV and get improvement suggestions",
    href: "/tools/productivity/resume-analyzer",
    badge: "AI",
  },
  {
    title: "Loan Calculator",
    desc: "Calculate EMI, interest & total payable amount",
    href: "/tools/productivity/loan-calculator",
    badge: "Free",
  },
  {
    title: "Salary Calculator",
    desc: "Calculate net salary after tax & deductions",
    href: "/tools/productivity/salary-calculator",
    badge: "Free",
  },
  {
    title: "GST / Tax Calculator",
    desc: "Quickly calculate GST or sales tax amounts",
    href: "/tools/productivity/gst-tax-calculator",
    badge: "Free",
  },
  {
    title: "QR Code Generator",
    desc: "Generate QR codes for links, text or data",
    href: "/tools/productivity/qr-code-generator",
    badge: "Free",
  },
  {
    title: "Business Name Generator",
    desc: "Generate modern business name ideas instantly",
    href: "/tools/productivity/business-name-generator",
    badge: "AI",
  },
  {
    title: "Cover Letter Generator",
    desc: "Create job-ready cover letters in seconds",
    href: "/tools/productivity/cover-letter-generator",
    badge: "AI",
  },
  {
    title: "CV to PDF",
    desc: "Convert your CV into clean PDF format",
    href: "/tools/productivity/cv-to-pdf",
    badge: "Free",
  },
];

export default function ProductivityPage() {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "10px" }}>
        Productivity Tools
      </h1>
      <p style={{ color: "#555", marginBottom: "30px" }}>
        Smart tools to boost your work productivity
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {tools.map((tool) => (
          <Link
            key={tool.title}
            href={tool.href}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "20px",
              background: "#fff",
              transition: "all 0.2s ease",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "12px",
                  color:
                    tool.badge === "Premium"
                      ? "#7c3aed"
                      : tool.badge === "AI"
                      ? "#0ea5e9"
                      : "#16a34a",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                {tool.badge}
              </div>

              <h3 style={{ fontSize: "18px", fontWeight: "600" }}>
                {tool.title}
              </h3>

              <p style={{ fontSize: "14px", color: "#666", marginTop: "6px" }}>
                {tool.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}