"use client";
import { useState } from "react";

export default function CVtoPDF() {
  const [file, setFile] = useState(null);

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">CV to PDF</h1>

      <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>

      <button disabled className="btn mt-4">
        Convert to PDF (Premium)
      </button>

      <style jsx>{`.btn{background:#ddd;width:100%;padding:10px;border-radius:6px}`}</style>
    </div>
  );
}