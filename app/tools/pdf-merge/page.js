"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function MergePDF() {
  const [files, setFiles] = useState([]);

  // 🔒 FREE LIMIT SYSTEM
  let usage = localStorage.getItem("merge_usage") || 0;

  const isPremiumUser = false;

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

    // 🔥 increase usage
    localStorage.setItem("merge_usage", Number(usage) + 1);

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
          Free limit: 3 uses/day
        </p>
      )}

      <input type="file" multiple onChange={handleUpload} className="mb-4" />

      <button
        onClick={mergePDFs}
        className="bg-black text-white px-6 py-2 rounded"
      >
        Merge PDFs
      </button>

    </main>
  );
}