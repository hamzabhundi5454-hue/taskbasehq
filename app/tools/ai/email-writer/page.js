"use client";
import { useState } from "react";

export default function AIEmailWriter() {
  const [purpose, setPurpose] = useState("");
  const [email, setEmail] = useState("");

  const generate = () => {
    setEmail(`Subject: ${purpose}\n\nDear Sir/Madam,\n\nI hope this email finds you well...\n\nRegards`);
  };

  return (
    <div style={c.wrap}>
      <span style={c.badge}>AI</span>
      <h1>AI Email Writer</h1>

      <input style={c.input} placeholder="Email purpose" onChange={e=>setPurpose(e.target.value)} />
      <button style={c.btn} onClick={generate}>Generate Email</button>

      <pre>{email}</pre>
    </div>
  );
}

const c={wrap:{maxWidth:700,margin:"40px auto"},badge:{background:"#e0f2fe",padding:6},input:{width:"100%",padding:10},btn:{padding:10,width:"100%"}};