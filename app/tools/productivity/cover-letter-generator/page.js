"use client";
import { useState } from "react";

export default function CoverLetter() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Cover Letter Generator</h1>

      <input className="input" placeholder="Your Name" onChange={(e)=>setName(e.target.value)}/>
      <input className="input" placeholder="Job Title" onChange={(e)=>setJob(e.target.value)}/>

      <p className="mt-6 bg-gray-50 p-4 border rounded">
        Dear Hiring Manager,<br/><br/>
        I am {name}, applying for {job}. I believe my skills make me a strong fit.
      </p>

      <style jsx>{`.input{width:100%;padding:8px;border:1px solid #ddd;margin-bottom:8px}`}</style>
    </div>
  );
}