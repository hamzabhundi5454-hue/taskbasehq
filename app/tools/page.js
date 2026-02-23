export default function ToolsPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "700" }}>Tools</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {/* PDF TOOLS */}
        <a href="/tools/pdf" style={cardStyle}>
          <h3>PDF Tools</h3>
          <p>Merge, split, convert & manage PDFs</p>
        </a>

        {/* PRODUCTIVITY TOOLS */}
        <a href="/tools/productivity" style={cardStyle}>
          <h3>Productivity Tools</h3>
          <p>Invoices, resumes, calculators & more</p>
        </a>

        {/* AI TOOLS — NEW */}
        <a href="/tools/ai" style={cardStyle}>
          <h3>AI Tools</h3>
          <p>Smart AI-powered generators & analyzers</p>
        </a>
      </div>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  padding: "20px",
  textDecoration: "none",
  color: "#000",
  background: "#fff",
};