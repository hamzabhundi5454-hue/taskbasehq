"use client";
import { useState } from "react";

export default function ResumeAnalyzer() {
  const [text, setText] = useState("");
  const score = Math.min(100, text.length);

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-4">Resume Analyzer (AI)</h1>

      <textarea
        className="input"
        placeholder="Paste resume text here"
        onChange={(e) => setText(e.target.value)}
      />

      <div className="mt-4 p-6 border rounded-xl bg-gray-50">
        <p><b>ATS Score:</b> {score}/100</p>
        <p className="mt-2">Suggestions:</p>
        <ul className="list-disc ml-5 text-sm">
          <li>Add measurable achievements</li>
          <li>Use action verbs</li>
          <li>Improve formatting</li>
        </ul>
      </div>

      <style jsx>{`
        .input {width:100%;height:200px;border:1px solid #ddd;padding:10px;border-radius:6px}
      `}</style>
    </div>
  );
}