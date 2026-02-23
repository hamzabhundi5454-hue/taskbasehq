"use client";

import { useState } from "react";

export default function AICoverLetterGenerator() {
  const [form, setForm] = useState({
    name: "",
    role: "",
    company: "",
    skills: "",
    tone: "Professional",
  });

  const [letter, setLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateLetter = () => {
    if (!form.name || !form.role || !form.company) {
      alert("Name, Job Role & Company are required");
      return;
    }

    setLoading(true);

    const output = `
Dear Hiring Manager at ${form.company},

My name is ${form.name}, and I am writing to express my interest in the ${form.role} position.

With strong skills in ${form.skills || "relevant industry skills"}, I bring a results-driven mindset and a passion for delivering high-quality work. My experience aligns well with your company’s goals, and I am confident I can add real value to your team.

I am particularly excited about this opportunity at ${form.company} because of its reputation for innovation and growth. I would welcome the opportunity to further discuss how my background fits your needs.

Thank you for your time and consideration.

Sincerely,  
${form.name}
    `;

    setTimeout(() => {
      setLetter(output);
      setLoading(false);
    }, 1200);
  };

  return (
    <div style={styles.container}>
      <span style={styles.badge}>AI Tool</span>
      <h1 style={styles.title}>AI Cover Letter Generator</h1>
      <p style={styles.subtitle}>
        Generate job-ready, professional cover letters in seconds
      </p>

      <div style={styles.grid}>
        {/* FORM */}
        <div style={styles.card}>
          <input
            style={styles.input}
            placeholder="Your Full Name"
            name="name"
            onChange={handleChange}
          />
          <input
            style={styles.input}
            placeholder="Job Role"
            name="role"
            onChange={handleChange}
          />
          <input
            style={styles.input}
            placeholder="Company Name"
            name="company"
            onChange={handleChange}
          />
          <input
            style={styles.input}
            placeholder="Key Skills (comma separated)"
            name="skills"
            onChange={handleChange}
          />

          <select
            style={styles.input}
            name="tone"
            onChange={handleChange}
          >
            <option>Professional</option>
            <option>Friendly</option>
            <option>Confident</option>
            <option>Creative</option>
          </select>

          <button style={styles.button} onClick={generateLetter}>
            {loading ? "Generating..." : "Generate Cover Letter"}
          </button>
        </div>

        {/* PREVIEW */}
        <div style={styles.preview}>
          <h3>Generated Cover Letter</h3>
          <pre style={styles.pre}>
            {letter || "Your cover letter will appear here..."}
          </pre>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "40px auto",
    padding: "20px",
  },
  badge: {
    background: "#e0f2fe",
    color: "#0369a1",
    padding: "6px 12px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600",
  },
  title: {
    fontSize: "32px",
    marginTop: "15px",
  },
  subtitle: {
    color: "#555",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #eee",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    background: "#111827",
    color: "#fff",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    width: "100%",
    cursor: "pointer",
  },
  preview: {
    background: "#fafafa",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #eee",
  },
  pre: {
    whiteSpace: "pre-wrap",
    fontFamily: "inherit",
    fontSize: "14px",
  },
};