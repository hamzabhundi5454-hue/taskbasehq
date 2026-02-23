"use client";

import { useState, useRef, useEffect } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import * as pdfjsLib from "pdfjs-dist";

export default function PdfToImagePage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  // ✅ Worker setup (SAFE for Next.js)
  useEffect(() => {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
  }, []);

  function handleFile(file) {
    if (!file || file.type !== "application/pdf") {
      alert("Please upload a valid PDF file");
      return;
    }
    setFile(file);
  }

  function handleInput(e) {
    handleFile(e.target.files[0]);
  }

  function handleDrop(e) {
    e.preventDefault();
    if (e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }

  function removeFile() {
    setFile(null);
  }

  async function convertToImages() {
    if (!file) {
      alert("Please upload a PDF first");
      return;
    }

    setLoading(true);

    const buffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

    const zip = new JSZip();

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 2 });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: ctx, viewport }).promise;

      const blob = await new Promise((res) =>
        canvas.toBlob(res, "image/png")
      );

      zip.file(
        `${file.name.replace(".pdf", "")}_page_${i}.png`,
        blob
      );
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, `${file.name.replace(".pdf", "")}_images.zip`);

    setLoading(false);
  }

  return (
    <div className="min-h-screen max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">PDF to Image</h1>
      <p className="text-gray-600 mb-4">
        Convert each PDF page into high-quality PNG images.
      </p>

      <div className="mb-6 p-4 border rounded bg-blue-50 text-blue-700">
        🔒 Files are processed locally in your browser <br />
        🖼 Each PDF page becomes a separate image
      </div>

      {/* Upload Box */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed rounded p-8 text-center mb-4"
      >
        <p className="mb-3 font-medium">Drag & drop PDF here</p>
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
          onChange={handleInput}
        />
      </div>

      {file && (
        <div className="border rounded p-3 flex justify-between items-center mb-4">
          <span>{file.name}</span>
          <button className="text-red-600" onClick={removeFile}>
            Remove
          </button>
        </div>
      )}

      <button
        onClick={convertToImages}
        disabled={!file || loading}
        className={`px-6 py-2 rounded text-white ${
          loading ? "bg-gray-400" : "bg-black"
        }`}
      >
        {loading ? "Converting..." : "Convert to Images & Download ZIP"}
      </button>
    </div>
  );
}