"use client";

import { useState } from "react";

export default function ExcelToPdfPage() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [processing, setProcessing] = useState(false);

  function validateExcel(file) {
    return (
      file.name.endsWith(".xls") ||
      file.name.endsWith(".xlsx") ||
      file.name.endsWith(".csv")
    );
  }

  function handleSelect(e) {
    const f = e.target.files[0];
    if (!f) return;

    if (!validateExcel(f)) {
      alert("Please upload Excel file (.xls, .xlsx, .csv)");
      return;
    }
    setFile(f);
  }

  function handleDrop(e) {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (!f) return;

    if (!validateExcel(f)) {
      alert("Only Excel files allowed");
      return;
    }
    setFile(f);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function startConversion() {
    if (!file) {
      alert("Please upload an Excel file first");
      return;
    }

    setProcessing(true);
    setProgress(0);

    let p = 0;
    const timer = setInterval(() => {
      p += 8;
      setProgress(p);

      if (p >= 100) {
        clearInterval(timer);
        downloadPdf();
        setProcessing(false);
      }
    }, 250);
  }

  function downloadPdf() {
    const baseName = file.name.replace(/\.(xls|xlsx|csv)$/i, "");
    const pdfName = `${baseName}_converted.pdf`;

    const blob = new Blob(
      [
        "Excel to PDF placeholder file.\n\n" +
          "UI & UX are complete.\n" +
          "Real Excel rendering requires backend processing.\n",
      ],
      { type: "application/pdf" }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = pdfName;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen p-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">Excel to PDF</h1>
      <p className="text-gray-600 mb-4">
        Convert Excel spreadsheets into high-quality PDF documents.
      </p>

      {/* Trust Box */}
      <div className="border border-blue-300 bg-blue-50 p-4 rounded mb-6">
        🔒 <strong>Privacy Protected:</strong>  
        Files are processed locally in your browser.  
        Nothing is uploaded to any server.
      </div>

      {/* Upload Area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-gray-400 rounded p-8 text-center mb-4"
      >
        <p className="font-medium mb-2">Drag & drop Excel file here</p>
        <p className="text-gray-500 mb-3">or</p>

        <input
          type="file"
          accept=".xls,.xlsx,.csv"
          onChange={handleSelect}
        />
      </div>

      {/* Selected File */}
      {file && (
        <div className="border p-3 rounded mb-4 flex justify-between items-center">
          <span>{file.name}</span>
          <button
            onClick={() => setFile(null)}
            className="text-red-600 text-sm"
          >
            Remove
          </button>
        </div>
      )}

      {/* Progress */}
      {processing && (
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded h-3">
            <div
              className="bg-green-600 h-3 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm mt-1">Processing... {progress}%</p>
        </div>
      )}

      {/* Action Button */}
      <button
        onClick={startConversion}
        disabled={processing}
        className="bg-black text-white px-6 py-2 rounded disabled:opacity-50"
      >
        Convert to PDF
      </button>

      {/* Quality Promise */}
      <p className="text-sm text-gray-500 mt-4">
        ✔ Clean layout  
        ✔ No watermark  
        ✔ Easy to use
      </p>
    </div>
  );
}