"use client";

import { useState, useRef } from "react";

export default function PdfToWordPage() {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  function handleFile(file) {
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a valid PDF file only.");
      return;
    }

    setFile(file);
  }

  function handleInputChange(e) {
    handleFile(e.target.files[0]);
  }

  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }

  function removeFile() {
    setFile(null);
  }

  async function convertToWord() {
    if (!file) {
      alert("Please upload a PDF file first.");
      return;
    }

    setLoading(true);

    // ⛔ REAL conversion backend yahan connect hoga (later)
    // ✅ Abhi dummy Word file generate kar rahe hain (UX + flow testing)

    setTimeout(() => {
      const blob = new Blob(
        [
          `PDF to Word Conversion Placeholder\n\nOriginal File:\n${file.name}\n\nThis document will be replaced with real converted content once backend engine is connected.`,
        ],
        { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" }
      );

      const fileName = file.name.replace(".pdf", "") + "_converted.docx";

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setLoading(false);
    }, 1500);
  }

  return (
    <div className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">PDF to Word</h1>
      <p className="text-gray-600 mb-4">
        Convert your PDF files to editable Word documents easily.
      </p>

      <div className="mb-6 p-4 border rounded bg-blue-50 text-blue-700">
        🔒 Files are processed locally in your browser.  
        <br />
        📄 Formatting & layout will be preserved in final version.
      </div>

      {/* Drag & Drop Area */}
      <div
        className={`border-2 border-dashed rounded p-8 text-center mb-4 ${
          dragActive ? "border-black bg-gray-100" : "border-gray-400"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <p className="mb-3 font-medium">Drag & drop PDF file here</p>
        <button
          className="px-4 py-2 bg-black text-white rounded"
          onClick={() => inputRef.current.click()}
        >
          Choose File
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={handleInputChange}
        />
      </div>

      {/* Selected File */}
      {file && (
        <div className="border rounded p-3 flex justify-between items-center mb-4">
          <span>{file.name}</span>
          <button className="text-red-600" onClick={removeFile}>
            Remove
          </button>
        </div>
      )}

      {/* Convert Button */}
      <button
        onClick={convertToWord}
        disabled={!file || loading}
        className={`px-6 py-2 rounded text-white ${
          loading ? "bg-gray-400" : "bg-black"
        }`}
      >
        {loading ? "Converting..." : "Convert to Word & Download"}
      </button>
    </div>
  );
}