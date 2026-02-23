"use client";

import { useState } from "react";

export default function PdfUnlockPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUnlock = () => {
    if (!file) return alert("Please upload a locked PDF");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("PDF unlocked successfully 🔓 (engine will be connected)");
    }, 2000);
  };

  return (
    <div className="min-h-screen p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">PDF Unlock</h1>
      <p className="text-gray-600 mb-4">
        Remove password protection from PDF safely.
      </p>

      <div className="border bg-blue-50 border-blue-300 p-4 rounded mb-6">
        🔒 Files are processed locally. No upload to server.
      </div>

      <div className="border-2 border-dashed p-6 rounded text-center mb-6">
        Drag & drop locked PDF here
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="block mt-3"
        />
        {file && <p className="text-green-600 mt-2">{file.name}</p>}
      </div>

      <button
        onClick={handleUnlock}
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded"
      >
        {loading ? "Unlocking..." : "Unlock PDF"}
      </button>
    </div>
  );
}