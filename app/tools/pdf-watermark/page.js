"use client";

import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";

export default function PDFWatermark() {
  const addWatermark = async (file) => {
    const bytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);
    const pages = pdf.getPages();

    pages.forEach(p => {
      p.drawText("CONFIDENTIAL", {
        x: 50,
        y: p.getHeight() / 2,
        size: 40,
        color: rgb(0.75, 0.75, 0.75),
        rotate: { degrees: 45 },
        opacity: 0.4
      });
    });

    const out = await pdf.save();
    saveAs(new Blob([out]), file.name.replace(".pdf", "_watermarked.pdf"));
  };

  return (
    <>
      <h1>PDF Watermark</h1>
      <input type="file" accept="application/pdf"
        onChange={e => addWatermark(e.target.files[0])} />
    </>
  );
}