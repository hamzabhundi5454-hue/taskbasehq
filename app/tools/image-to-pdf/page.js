"use client";

import { useState } from "react";

export default function ImageToPdfPage() {
  const [files, setFiles] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  function isImage(file) {
    return file.type.startsWith("image/");
  }

  function handleSelect(e) {
    const selected = Array.from(e.target.files).filter(isImage);
    if (!selected.length) {
      alert("Please select image files only (JPG, PNG, WEBP)");
      return;
    }
    setFiles((prev) => [...prev, ...selected]);
  }

  function handleDrop(e) {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files).filter(isImage);
    if (!dropped.length) {
      alert("Only image files allowed");
      return;
    }
    setFiles((prev) => [...prev, ...dropped]);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function removeFile(index) {
    setFiles(files.filter((_, i) => i !== index));
  }

  function moveUp(index) {
    if (index === 0) return;
    const updated = [...files];
    [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    setFiles(updated);
  }

  function moveDown(index) {
    if (index === files.length - 1) return;
    const updated = [...files];
    [updated[index + 1], updated[index]] = [updated[index], updated[index + 1]];
    setFiles(updated);
  }

  async function convertToPdf() {
    if (files.length === 0) {
      alert("Please upload at least 1 image");
      return;
    }

    setProcessing(true);
    setProgress(0);

    const { jsPDF } = await import("jspdf");
    const pdf = new jsPDF();

    for (let i = 0; i < files.length; i++) {
      const imgData = await readFile(files[i]);
      const img = new Image();
      img.src = imgData;

      await new Promise((res) => (img.onload = res));

      const width = pdf.internal.pageSize.getWidth();
      const height = (img.height * width) / img.width;

      if (i > 0) pdf.addPage();
      pdf.addImage(img, "JPEG", 0, 0, width, height);

      setProgress(Math.round(((i + 1) / files.length) * 100));
    }

    pdf.save("images_converted.pdf");
    setProcessing(false);
  }

  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  }

  return (
    <div className="min-h-screen p-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">Image to PDF</h1>
      <p className="text-gray-600 mb-4">
        Convert JPG, PNG, WEBP images into a single high-quality PDF.
      </p>

      {/* Trust Box */}
      <div className="border border-blue-300 bg-blue-50 p-4 rounded mb-6">
        🔒 <strong>Privacy Protected:</strong>  
        Images are processed locally in your browser.  
        Nothing is uploaded to any server.
      </div>

      {/* Upload Area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-gray-400 rounded p-8 text-center mb-4"
      >
        <p className="font-medium mb-2">Drag & drop images here</p>
        <p className="text-gray-500 mb-3">or</p>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleSelect}
        />
      </div>

      {/* Selected Files */}
      {files.map((file, index) => (
        <div
          key={index}
          className="border p-3 rounded mb-2 flex justify-between items-center"
        >
          <span className="truncate">{file.name}</span>
          <div className="flex gap-2">
            <button
              onClick={() => moveUp(index)}
              className="text-xs px-2 border rounded"
            >
              ↑
            </button>
            <button
              onClick={() => moveDown(index)}
              className="text-xs px-2 border rounded"
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

      {/* Progress */}
      {processing && (
        <div className="mb-4 mt-4">
          <div className="w-full bg-gray-200 rounded h-3">
            <div
              className="bg-green-600 h-3 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm mt-1">Processing... {progress}%</p>
        </div>
      )}

      {/* Action */}
      <button
        onClick={convertToPdf}
        disabled={processing}
        className="bg-black text-white px-6 py-2 rounded mt-4 disabled:opacity-50"
      >
        Convert to PDF
      </button>

      {/* Quality Promise */}
      <p className="text-sm text-gray-500 mt-4">
        ✔ Correct order  
        ✔ Drag to reorder  
        ✔ No watermark  
        ✔ High-quality output
      </p>
    </div>
  );
}