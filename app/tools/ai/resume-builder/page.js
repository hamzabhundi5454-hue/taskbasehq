"use client";

import { useState } from "react";

export default function AIResumeBuilder() {
  const [form, setForm] = useState({
    name: "",
    title: "",
    summary: "",
    skills: "",
    experience: "",
    education: "",
  });

  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateResume = () => {
    if (!form.name || !form.title) {
      alert("Name & Job Title are required");
      return;
    }

    setLoading(true);

    // 🔥 Premium AI-style formatted resume
    const output = `
${form.name.toUpperCase()}
${form.title}

PROFESSIONAL SUMMARY
${form.summary || "Results-driven professional with proven experience."}

SKILLS
${form.skills || "• Communication • Problem Solving • Teamwork"}

WORK EXPERIENCE
${form.experience || "Describe your work experience here."}

EDUCATION
${form.education || "Add your education details here."}
    `;

    setTimeout(() => {
      setResume(output);
      setLoading(false);
    }, 1200);
  };

  return (
    <div style={styles.container}>
      <span style={styles.badge}>Premium AI</span>
      <h1 style={styles.title}>AI Resume Builder</h1>
      <p style={styles.subtitle}>
        Build ATS-friendly professional resumes in minutes
      </p>

      <div style={styles.grid}>
        {/* LEFT FORM */}
        <div style={styles.card}>
          <input
            style={styles.input}
            placeholder="Full Name"
            name="name"
            onChange={handleChange}
          />
          <input
            style={styles.input}
            placeholder="Job Title"
            name="title"
            onChange={handleChange}
          />
          <textarea
            style={styles.textarea}
            placeholder="Professional Summary"
            name="summary"
            onChange={handleChange}
          />
          <textarea
            style={styles.textarea}
            placeholder="Skills (comma separated)"
            name="skills"
            onChange={handleChange}
          />
          <textarea
            style={styles.textarea}
            placeholder="Work Experience"
            name="experience"
            onChange={handleChange}
          />
          <textarea
            style={styles.textarea}
            placeholder="Education"
            name="education"
            onChange={handleChange}
          />

          <button style={styles.button} onClick={generateResume}>
            {loading ? "Generating..." : "Generate Resume"}
          </button>
        </div>

        {/* RIGHT PREVIEW */}
        <div style={styles.preview}>
          <h3>Live Preview</h3>
          <pre style={styles.pre}>{resume || "Your resume preview will appear here..."}</pre>
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
    background: "#ede9fe",
    color: "#6d28d9",
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
  textarea: {
    width: "100%",
    padding: "10px",
    minHeight: "80px",
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