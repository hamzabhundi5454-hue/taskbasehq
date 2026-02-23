"use client";
import { useState } from "react";

export default function BusinessNameGenerator() {
  const [idea, setIdea] = useState("");
  const [names, setNames] = useState([]);

  const generate = () => {
    if (!idea) return alert("Enter business idea");
    setNames([
      `${idea}ly`,
      `${idea}Hub`,
      `${idea}ify`,
      `Go${idea}`,
      `${idea}Labs`,
    ]);
  };

  return (
    <div style={c.wrap}>
      <span style={c.badge}>AI</span>
      <h1>Business Name Generator</h1>
      <p>Generate modern brand & startup names</p>

      <input
        style={c.input}
        placeholder="e.g. Fitness, Tech, Food"
        onChange={(e) => setIdea(e.target.value)}
      />

      <button style={c.btn} onClick={generate}>Generate Names</button>

      <ul style={c.list}>
        {names.map((n, i) => <li key={i}>{n}</li>)}
      </ul>
    </div>
  );
}

const c = {
  wrap:{maxWidth:700,margin:"40px auto"},
  badge:{background:"#e0f2fe",padding:"6px 12px",borderRadius:20},
  input:{width:"100%",padding:12,margin:"10px 0"},
  btn:{padding:12,width:"100%"},
  list:{marginTop:20}
};