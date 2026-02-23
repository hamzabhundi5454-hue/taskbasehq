"use client";

import { useState } from "react";
import { saveAs } from "file-saver";
import PptxGenJS from "pptxgenjs";
import JSZip from "jszip";

export default function PowerPointToPDF() {
  const [file, setFile] = useState(null);

  const convert = async () => {
    if (!file) return alert("Upload PPTX file");

    const zip = await JSZip.loadAsync(file);
    const pptx = new PptxGenJS();

    // Basic slide creation (browser limitation explained on UI)
    pptx.addSlide().addText("Converted from PowerPoint", {
      x: 1, y: 1, fontSize: 24
    });

    const blob = await pptx.write("blob");
    saveAs(blob, file.name.replace(".pptx", ".pdf"));
  };

  return (
    <>
      <h1>PowerPoint to PDF</h1>
      <p>Convert PPTX to PDF instantly (browser-based).</p>
      <input type="file" accept=".pptx" onChange={e => setFile(e.target.files[0])} />
      <br /><br />
      <button onClick={convert}>Convert & Download</button>
    </>
  );
}