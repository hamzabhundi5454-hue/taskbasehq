"use client";

import { useState } from "react";

export default function PdfSplitPage() {
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSplit = () => {
    if (!file) return alert("Please upload a PDF file");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("PDF Split completed ✅ (backend engine will be added)");
    }, 2000);
  };

  return (
    <div className="min-h-screen p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">PDF Split</h1>
      <p className="text-gray-600 mb-4">
        Split PDF into separate pages or custom ranges.
      </p>

      <div className="border bg-blue-50 border-blue-300 p-4 rounded mb-6">
        🔒 Files are processed locally. Nothing is uploaded.
      </div>

      <div className="border-2 border-dashed p-6 rounded text-center mb-6">
        Drag & drop PDF here or choose file
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="block mt-3"
        />
        {file && <p className="text-green-600 mt-2">{file.name}</p>}
      </div>

      <input
        type="text"
        placeholder="Pages (e.g. 1-3,5)"
        value={pages}
        onChange={(e) => setPages(e.target.value)}
        className="border w-full p-2 rounded mb-4"
      />

      <button
        onClick={handleSplit}
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded"
      >
        {loading ? "Processing..." : "Split PDF"}
      </button>
    </div>
  );
}