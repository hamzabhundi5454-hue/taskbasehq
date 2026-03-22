"use client";

import { useState, useEffect } from "react";
import { PDFDocument } from "pdf-lib";

export default function MergePDF() {
  const [files, setFiles] = useState([]);
  const [usage, setUsage] = useState(0);

  const isPremiumUser = false;

  // ✅ localStorage safe access
  useEffect(() => {
    const storedUsage = localStorage.getItem("merge_usage") || 0;
    setUsage(Number(storedUsage));
  }, []);

  const handleUpload = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const mergePDFs = async () => {
    if (!isPremiumUser && usage >= 3) {
      alert("Free limit reached. Upgrade to Pro 🚀");
      return;
    }

    if (files.length < 2) {
      alert("Upload at least 2 PDFs");
      return;
    }

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      pages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedBytes = await mergedPdf.save();

    // ✅ update usage
    const newUsage = usage + 1;
    localStorage.setItem("merge_usage", newUsage);
    setUsage(newUsage);

    const blob = new Blob([mergedBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "merged.pdf";
    a.click();
  };

  return (
    <main className="p-6 flex flex-col items-center">

      <h1 className="text-2xl font-bold mb-4">Merge PDF</h1>

      {!isPremiumUser && (
        <p className="text-red-500 mb-2">
          Free limit: 3 uses
        </p>
      )}

      <input
        type="file"
        multiple
        accept="application/pdf"
        onChange={handleUpload}
        className="mb-4"
      />

      <button
        onClick={mergePDFs}
        className="bg-black text-white px-6 py-2 rounded"
      >
        Merge PDFs
      </button>

    </main>
  );
}