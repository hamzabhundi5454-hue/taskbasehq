"use client";

import { useState } from "react";

export default function AIResumeAnalyzer() {
  const [resumeText, setResumeText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeResume = async () => {
    if (!resumeText.trim()) {
      setError("Please paste your resume text.");
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/ai/resume-analyzer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={container}>
      <span style={badge}>Premium AI</span>

      <h1 style={title}>AI Resume Analyzer</h1>
      <p style={subtitle}>
        Analyze your resume, get ATS score & improvement tips
      </p>

      <textarea
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        placeholder="Paste your resume text here..."
        style={textarea}
      />

      {error && <p style={errorStyle}>{error}</p>}

      <button onClick={analyzeResume} style={button} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {result && (
        <div style={resultBox}>
          <h3>ATS Score: {result.score}/100</h3>

          <h4>Strengths</h4>
          <ul>
            {result.strengths.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h4>Improvements</h4>
          <ul>
            {result.improvements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ===== Styles ===== */

const container = {
  maxWidth: "900px",
  margin: "40px auto",
  padding: "20px",
};

const badge = {
  display: "inline-block",
  background: "#ede9fe",
  color: "#6d28d9",
  padding: "6px 14px",
  borderRadius: "999px",
  fontSize: "13px",
  fontWeight: "600",
};

const title = {
  fontSize: "32px",
  marginTop: "12px",
};

const subtitle = {
  color: "#555",
  marginBottom: "20px",
};

const textarea = {
  width: "100%",
  minHeight: "200px",
  padding: "14px",
  fontSize: "15px",
  borderRadius: "10px",
  border: "1px solid #ddd",
};

const button = {
  marginTop: "14px",
  background: "#111827",
  color: "#fff",
  padding: "12px 24px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
};

const errorStyle = {
  color: "red",
  marginTop: "10px",
};

const resultBox = {
  marginTop: "30px",
  background: "#f9fafb",
  border: "1px solid #e5e7eb",
  padding: "20px",
  borderRadius: "12px",
};