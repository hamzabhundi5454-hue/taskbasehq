"use client";
import { useState } from "react";

export default function BusinessIdeaGenerator() {
  const [ideas, setIdeas] = useState([]);

  const generate = () => {
    setIdeas([
      "AI-powered resume review service",
      "Subscription-based fitness coaching app",
      "Local service marketplace platform",
      "E-commerce automation tool",
      "Personal finance AI assistant",
    ]);
  };

  return (
    <div style={c.wrap}>
      <span style={c.badge}>AI</span>
      <h1>Business Idea Generator</h1>
      <p>Get startup & side-hustle ideas instantly</p>

      <button style={c.btn} onClick={generate}>Generate Ideas</button>

      <ul>
        {ideas.map((i, idx) => <li key={idx}>{i}</li>)}
      </ul>
    </div>
  );
}

const c = {
  wrap:{maxWidth:700,margin:"40px auto"},
  badge:{background:"#e0f2fe",padding:6,borderRadius:20},
  btn:{padding:12,width:"100%"}
};