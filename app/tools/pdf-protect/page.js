"use client";

import { useState } from "react";

export default function PdfProtectPage() {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleProtect = () => {
    if (!file || !password)
      return alert("PDF aur password dono required hain");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("PDF Protected 🔐 (backend engine next)");
    }, 2000);
  };

  return (
    <div className="min-h-screen p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">PDF Protect</h1>
      <p className="text-gray-600 mb-4">
        Secure your PDF with a password.
      </p>

      <div className="border bg-blue-50 border-blue-300 p-4 rounded mb-6">
        🔒 100% privacy. Files never leave your device.
      </div>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      <button
        onClick={handleProtect}
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded"
      >
        {loading ? "Processing..." : "Protect PDF"}
      </button>
    </div>
  );
}