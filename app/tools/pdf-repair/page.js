"use client";

export default function PDFRepair() {
  async function handleRepair(e) {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("/api/pdf-repair", {
      method: "POST",
      body: fd
    });

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = file.name.replace(".pdf", "_repaired.pdf");
    a.click();
  }

  return (
    <>
      <h1>PDF Repair</h1>
      <p>Fix corrupted or broken PDF files automatically.</p>
      <input type="file" accept="application/pdf" onChange={handleRepair} />
    </>
  );
}