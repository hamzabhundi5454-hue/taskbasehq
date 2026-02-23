"use client";
import { useState } from "react";

export default function JobDescriptionGenerator() {
  const [role, setRole] = useState("");
  const [jd, setJd] = useState("");

  const generate = () => {
    setJd(`We are hiring a ${role}.
Responsibilities include managing tasks, collaborating with teams, and delivering results.
Requirements: relevant experience, strong communication, problem-solving skills.`);
  };

  return (
    <div style={c.wrap}>
      <span style={c.badge}>AI</span>
      <h1>Job Description Generator</h1>

      <input style={c.input} placeholder="Job Title" onChange={e=>setRole(e.target.value)} />
      <button style={c.btn} onClick={generate}>Generate JD</button>

      <pre>{jd}</pre>
    </div>
  );
}

const c={wrap:{maxWidth:700,margin:"40px auto"},badge:{background:"#e0f2fe",padding:6},input:{width:"100%",padding:10},btn:{padding:10,width:"100%"}};