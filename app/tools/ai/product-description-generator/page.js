"use client";
import { useState } from "react";

export default function ProductDescriptionGenerator() {
  const [product, setProduct] = useState("");
  const [desc, setDesc] = useState("");

  const generate = () => {
    setDesc(`${product} is a high-quality solution designed to improve efficiency, save time, and deliver exceptional results.`);
  };

  return (
    <div style={c.wrap}>
      <span style={c.badge}>AI</span>
      <h1>Product Description Generator</h1>

      <input style={c.input} placeholder="Product name" onChange={e=>setProduct(e.target.value)} />
      <button style={c.btn} onClick={generate}>Generate</button>

      <pre>{desc}</pre>
    </div>
  );
}

const c={wrap:{maxWidth:700,margin:"40px auto"},badge:{background:"#e0f2fe",padding:6},input:{width:"100%",padding:10},btn:{padding:10,width:"100%"}};