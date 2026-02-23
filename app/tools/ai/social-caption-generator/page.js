"use client";
import { useState } from "react";

export default function SocialCaptionGenerator() {
  const [topic, setTopic] = useState("");
  const [caption, setCaption] = useState("");

  const generate = () => {
    setCaption(`🚀 ${topic} just got better! Try it now. #innovation #startup`);
  };

  return (
    <div style={c.wrap}>
      <span style={c.badge}>AI</span>
      <h1>Social Media Caption Generator</h1>

      <input style={c.input} placeholder="Post topic" onChange={e=>setTopic(e.target.value)} />
      <button style={c.btn} onClick={generate}>Generate Caption</button>

      <pre>{caption}</pre>
    </div>
  );
}

const c={wrap:{maxWidth:700,margin:"40px auto"},badge:{background:"#e0f2fe",padding:6},input:{width:"100%",padding:10},btn:{padding:10,width:"100%"}};