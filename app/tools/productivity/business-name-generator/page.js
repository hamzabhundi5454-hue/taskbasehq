"use client";
import { useState } from "react";

export default function BusinessNameGenerator() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Business Name Generator</h1>

      <input className="input" placeholder="Keyword" onChange={(e)=>setKeyword(e.target.value)}/>

      <ul className="mt-4">
        {keyword && ["Pro","Hub","Solutions","Labs"].map(s=>(
          <li key={s}>{keyword} {s}</li>
        ))}
      </ul>

      <style jsx>{`.input{width:100%;padding:8px;border:1px solid #ddd}`}</style>
    </div>
  );
}