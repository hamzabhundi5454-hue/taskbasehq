"use client";
import { useState } from "react";

export default function AIInvoiceAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const explain = () => {
    setAnswer("This invoice includes subtotal, tax, and final payable amount. Taxes are calculated as per standard rates.");
  };

  return (
    <div style={c.wrap}>
      <span style={c.premium}>Premium</span>
      <h1>AI Invoice Assistant</h1>

      <textarea style={c.input} placeholder="Ask about invoice, tax, wording..." onChange={e=>setQuestion(e.target.value)} />
      <button style={c.btn} onClick={explain}>Explain</button>

      <pre>{answer}</pre>
    </div>
  );
}

const c={wrap:{maxWidth:700,margin:"40px auto"},premium:{background:"#ede9fe",padding:6},input:{width:"100%",padding:10},btn:{padding:10,width:"100%"}};