"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { saveAs } from "file-saver";

export default function PdfPageReorder() {
  const [file, setFile] = useState(null);
  const [order, setOrder] = useState("");

  const handleReorder = async () => {
    if (!file || !order) {
      alert("Upload PDF and enter page order");
      return;
    }

    const orderArr = order.split(",").map(n => parseInt(n.trim()) - 1);

    const bytes = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(bytes);
    const newPdf = await PDFDocument.create();

    for (let index of orderArr) {
      if (index >= 0 && index < pdfDoc.getPageCount()) {
        const [page] = await newPdf.copyPages(pdfDoc, [index]);
        newPdf.addPage(page);
      }
    }

    const finalBytes = await newPdf.save();
    saveAs(
      new Blob([finalBytes], { type: "application/pdf" }),
      file.name.replace(".pdf", "_reordered.pdf")
    );
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>PDF Page Reorder</h1>
      <p>Reorder pages using page numbers.</p>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Example: 1,3,5,2,4"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
        style={{ width: 300 }}
      />

      <br /><br />

      <button onClick={handleReorder}>
        Download Reordered PDF
      </button>
    </div>
  );
}