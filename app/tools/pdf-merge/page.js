"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function PdfMergePage() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);

  // Add files (supports multiple uploads at different times)
  function addFiles(newFiles) {
    const pdfFiles = Array.from(newFiles).filter(
      (file) => file.type === "application/pdf"
    );
    setFiles((prev) => [...prev, ...pdfFiles]);
  }

  function handleFileChange(e) {
    if (e.target.files) addFiles(e.target.files);
  }

  // Drag & Drop handlers
  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files) addFiles(e.dataTransfer.files);
  }

  // Remove file
  function removeFile(index) {
    setFiles(files.filter((_, i) => i !== index));
  }

  // Move file up/down (order change)
  function moveFile(index, direction) {
    const newFiles = [...files];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= files.length) return;
    [newFiles[index], newFiles[targetIndex]] = [
      newFiles[targetIndex],
      newFiles[index],
    ];
    setFiles(newFiles);
  }

  // Merge PDFs
  async function handleMerge() {
    if (files.length < 2) {
      alert("Please select at least 2 PDF files");
      return;
    }

    setLoading(true);
    setProgress(10);

    try {
      const mergedPdf = await PDFDocument.create();

      for (let i = 0; i < files.length; i++) {
        const buffer = await files[i].arrayBuffer();
        const pdf = await PDFDocument.load(buffer);
        const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        pages.forEach((p) => mergedPdf.addPage(p));
        setProgress(20 + ((i + 1) / files.length) * 60);
      }

      const bytes = await mergedPdf.save();
      const blob = new Blob([bytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "merged.pdf";
      a.click();
      URL.revokeObjectURL(url);

      setProgress(100);
      alert("PDF merged & downloaded successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Merge failed ❌");
    }

    setLoading(false);
    setTimeout(() => setProgress(0), 1000);
  }

  return (
    <div className="min-h-screen p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">PDF Merge</h1>
      <p className="text-gray-600 mb-4">
        Upload multiple PDF files and merge them into one.
      </p>

      {/* Trust message */}
      <div className="mb-4 rounded border border-blue-200 bg-blue-50 p-3 text-blue-800">
        🔒 Files are processed locally in your browser.  
        They are never uploaded to any server.
      </div>

      {/* Drag & Drop */}
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className={`mb-4 border-2 border-dashed rounded p-6 text-center ${
          dragActive ? "border-black bg-gray-100" : "border-gray-300"
        }`}
      >
        Drag & drop PDF files here  
        <br />
        or
        <br />
        <input
          type="file"
          accept="application/pdf"
          multiple
          onChange={handleFileChange}
          className="mt-2"
        />
      </div>

      {/* File List */}
      {files.length > 0 && (
        <>
          <h2 className="font-semibold mb-2">Selected Files (order matters):</h2>
          <div className="space-y-2 mb-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between border p-2 rounded"
              >
                <span className="truncate">{file.name}</span>

                <div className="flex gap-2">
                  <button
                    onClick={() => moveFile(index, "up")}
                    className="text-sm px-2 border rounded"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => moveFile(index, "down")}
                    className="text-sm px-2 border rounded"
                  >
                    ↓
                  </button>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-600 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Progress */}
      {loading && (
        <div className="mb-4">
          <div className="h-2 bg-gray-200 rounded">
            <div
              className="h-2 bg-green-600 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm mt-1">Processing… {progress}%</p>
        </div>
      )}

      {/* Merge Button */}
      <button
        onClick={handleMerge}
        disabled={loading}
        className={`px-6 py-2 rounded text-white ${
          loading ? "bg-gray-400" : "bg-black hover:bg-gray-800"
        }`}
      >
        Merge PDFs
      </button>
    </div>
  );
}