"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { saveAs } from "file-saver";

export default function PdfDeletePages() {
  const [file, setFile] = useState(null);
  const [pagesInput, setPagesInput] = useState("");

  const parsePages = (input) => {
    const pages = new Set();
    input.split(",").forEach(part => {
      if (part.includes("-")) {
        const [start, end] = part.split("-").map(n => parseInt(n.trim()));
        for (let i = start; i <= end; i++) pages.add(i);
      } else {
        pages.add(parseInt(part.trim()));
      }
    });
    return pages;
  };

  const handleDelete = async () => {
    if (!file || !pagesInput) {
      alert("Please upload file and enter page numbers");
      return;
    }

    const bytes = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(bytes);
    const totalPages = pdfDoc.getPageCount();
    const deletePages = parsePages(pagesInput);

    const newPdf = await PDFDocument.create();

    for (let i = 0; i < totalPages; i++) {
      if (!deletePages.has(i + 1)) {
        const [page] = await newPdf.copyPages(pdfDoc, [i]);
        newPdf.addPage(page);
      }
    }

    const finalBytes = await newPdf.save();
    saveAs(
      new Blob([finalBytes], { type: "application/pdf" }),
      file.name.replace(".pdf", "_pages_deleted.pdf")
    );
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>PDF Delete Pages</h1>
      <p>Delete specific pages by page numbers.</p>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Example: 2,4,6 or 3-5"
        value={pagesInput}
        onChange={(e) => setPagesInput(e.target.value)}
        style={{ width: 300 }}
      />

      <br /><br />

      <button onClick={handleDelete}>
        Delete Pages & Download
      </button>
    </div>
  );
}