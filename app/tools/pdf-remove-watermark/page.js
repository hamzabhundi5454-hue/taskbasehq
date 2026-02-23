"use client";

export default function RemoveWatermark() {
  async function handleRemove(e) {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("/api/pdf-watermark-remove", {
      method: "POST",
      body: fd
    });

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = file.name.replace(".pdf", "_no_watermark.pdf");
    a.click();
  }

  return (
    <>
      <h1>Remove PDF Watermark</h1>
      <p>Remove visible watermark layers from PDF.</p>
      <input type="file" accept="application/pdf" onChange={handleRemove} />
    </>
  );
}