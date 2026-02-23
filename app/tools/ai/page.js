"use client";

const AI_TOOLS = [
  {
    slug: "resume-analyzer",
    title: "AI Resume Analyzer",
    desc: "Analyze resume & get ATS improvement tips",
    badge: "Premium",
    link: "/tools/ai/resume-analyzer",
  },
  {
    slug: "resume-builder",
    title: "AI Resume Builder",
    desc: "Build ATS-friendly resumes with AI",
    badge: "Premium",
    link: "/tools/ai/resume-builder",
  },
  {
    slug: "cover-letter",
    title: "AI Cover Letter Generator",
    desc: "Generate job-ready cover letters",
    badge: "AI",
    link: "/tools/ai/cover-letter-generator",
  },
  {
    slug: "business-name",
    title: "Business Name Generator",
    desc: "Generate modern brand & startup names",
    badge: "AI",
    link: "/tools/ai/business-name-generator",
  },
  {
    slug: "business-idea",
    title: "Business Idea Generator",
    desc: "Get startup & side-hustle ideas",
    badge: "AI",
    link: "/tools/ai/business-idea-generator",
  },
  {
    slug: "email-writer",
    title: "AI Email Writer",
    desc: "Write professional emails instantly",
    badge: "AI",
    link: "/tools/ai/email-writer",
  },
  {
    slug: "jd-generator",
    title: "Job Description Generator",
    desc: "Generate JD for hiring & HR teams",
    badge: "AI",
    link: "/tools/ai/job-description-generator",
  },
  {
    slug: "product-description",
    title: "Product Description Generator",
    desc: "Create SEO-friendly product content",
    badge: "AI",
    link: "/tools/ai/product-description-generator",
  },
  {
    slug: "social-captions",
    title: "Social Media Caption Generator",
    desc: "Create captions for Instagram & LinkedIn",
    badge: "AI",
    link: "/tools/ai/social-caption-generator",
  },
  {
    slug: "invoice-assistant",
    title: "AI Invoice Assistant",
    desc: "Explain invoices, taxes & wording",
    badge: "Premium",
    link: "/tools/ai/invoice-assistant",
  },
];

export default function AIToolsPage() {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>AI Tools</h1>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Smart AI tools to save time & boost productivity
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {AI_TOOLS.map((tool, index) => (
          <a
            key={`${tool.slug}-${index}`}
            href={tool.link}
            style={{
              textDecoration: "none",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "20px",
              background: "#fff",
              transition: "0.2s",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "4px 10px",
                fontSize: "12px",
                borderRadius: "999px",
                background:
                  tool.badge === "Premium"
                    ? "#ede9fe"
                    : tool.badge === "AI"
                    ? "#dbeafe"
                    : "#e5e7eb",
                color:
                  tool.badge === "Premium"
                    ? "#6d28d9"
                    : tool.badge === "AI"
                    ? "#1d4ed8"
                    : "#374151",
                fontWeight: "600",
              }}
            >
              {tool.badge}
            </span>

            <h3 style={{ marginTop: "12px", fontSize: "18px" }}>
              {tool.title}
            </h3>

            <p style={{ color: "#555", fontSize: "14px", marginTop: "6px" }}>
              {tool.desc}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}