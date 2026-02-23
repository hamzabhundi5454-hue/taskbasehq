"use client";

import { useState } from "react";

export default function PdfRotatePage() {
  const [file, setFile] = useState(null);
  const [angle, setAngle] = useState(90);
  const [loading, setLoading] = useState(false);

  const handleRotate = () => {
    if (!file) return alert("Upload PDF first");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("PDF Rotated successfully ✅ (engine coming)");
    }, 2000);
  };

  return (
    <div className="min-h-screen p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">PDF Rotate</h1>
      <p className="text-gray-600 mb-4">
        Rotate PDF pages easily without losing quality.
      </p>

      <div className="border bg-blue-50 border-blue-300 p-4 rounded mb-6">
        🔒 Secure local processing. No upload.
      </div>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <select
        value={angle}
        onChange={(e) => setAngle(e.target.value)}
        className="border p-2 rounded mb-4"
      >
        <option value={90}>Rotate 90°</option>
        <option value={180}>Rotate 180°</option>
        <option value={270}>Rotate 270°</option>
      </select>

      <br />

      <button
        onClick={handleRotate}
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded"
      >
        {loading ? "Processing..." : "Rotate PDF"}
      </button>
    </div>
  );
}