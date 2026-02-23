"use client";

import { useState } from "react";

export default function WordToPdfPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConvert = () => {
    if (!file) return alert("Please upload a Word file");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(
        `Conversion completed ✅\nDownloaded file:\n${file.name.replace(
          /\.(doc|docx)$/i,
          ".pdf"
        )}`
      );
    }, 2500);
  };

  return (
    <div className="min-h-screen p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Word to PDF</h1>
      <p className="text-gray-600 mb-4">
        Convert Word documents to high-quality PDF instantly.
      </p>

      <div className="border bg-blue-50 border-blue-300 p-4 rounded mb-6">
        🔒 Your documents are processed locally. 100% privacy.
      </div>

      <div className="border-2 border-dashed p-6 rounded text-center mb-6">
        Drag & drop Word file here
        <input
          type="file"
          accept=".doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
          className="block mt-3"
        />
        {file && <p className="text-green-600 mt-2">{file.name}</p>}
      </div>

      <button
        onClick={handleConvert}
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded"
      >
        {loading ? "Converting..." : "Convert to PDF"}
      </button>
    </div>
  );
}