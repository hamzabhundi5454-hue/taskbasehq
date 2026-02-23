"use client";
import { useState } from "react";

export default function ResumeBuilder() {
  const [data, setData] = useState({
    name: "",
    title: "",
    summary: "",
    skills: "",
    experience: "",
    education: "",
  });

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Resume Builder (Premium)</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          {Object.keys(data).map((key) => (
            <textarea
              key={key}
              className="input"
              placeholder={key.toUpperCase()}
              onChange={(e) =>
                setData({ ...data, [key]: e.target.value })
              }
            />
          ))}
        </div>

        <div className="border rounded-xl p-6 bg-gray-50">
          <h2 className="text-xl font-bold">{data.name}</h2>
          <p className="italic">{data.title}</p>
          <p className="mt-4">{data.summary}</p>
          <p className="mt-4"><b>Skills:</b> {data.skills}</p>
          <p className="mt-4"><b>Experience:</b> {data.experience}</p>
          <p className="mt-4"><b>Education:</b> {data.education}</p>

          <button disabled className="btn mt-6">
            Download PDF (Premium)
          </button>
        </div>
      </div>

      <style jsx>{`
        .input {width:100%;border:1px solid #ddd;padding:8px;margin-bottom:8px;border-radius:6px}
        .btn {background:#ddd;width:100%;padding:10px;border-radius:6px}
      `}</style>
    </div>
  );
}