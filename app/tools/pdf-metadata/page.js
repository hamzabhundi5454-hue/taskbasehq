"use client";

import { PDFDocument } from "pdf-lib";

export default function MetadataViewer() {
  const readMeta = async (file) => {
    const bytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);
    alert(JSON.stringify(pdf.getTitle() || "No Metadata"));
  };

  return (
    <>
      <h1>PDF Metadata Viewer</h1>
      <input type="file" accept="application/pdf"
        onChange={e => readMeta(e.target.files[0])} />
    </>
  );
}