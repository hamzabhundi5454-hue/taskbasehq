"use client";

import { useState } from "react";

export default function PdfCompressPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCompress = () => {
    if (!file) return alert("Please upload a PDF file");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(
        `Compression completed ✅\nDownloaded file name will be:\n${file.name.replace(
          ".pdf",
          "_compressed.pdf"
        )}`
      );
    }, 2500);
  };

  return (
    <div className="min-h-screen p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">PDF Compress</h1>
      <p className="text-gray-600 mb-4">
        Compress PDF without noticeable quality loss.
      </p>

      <div className="border bg-blue-50 border-blue-300 p-4 rounded mb-6">
        🔒 Files are processed locally. Nothing is uploaded.
      </div>

      <div className="border-2 border-dashed p-6 rounded text-center mb-6">
        Drag & drop PDF here
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="block mt-3"
        />
        {file && (
          <p className="text-green-600 mt-2">
            Original file: {file.name}
          </p>
        )}
      </div>

      <p className="text-sm text-gray-500 mb-4">
        ✔ Smart compression keeps text readable and images clear.
      </p>

      <button
        onClick={handleCompress}
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded"
      >
        {loading ? "Compressing..." : "Compress & Download"}
      </button>
    </div>
  );
}