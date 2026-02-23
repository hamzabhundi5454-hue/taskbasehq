"use client";
import { useState } from "react";

export default function QRGenerator() {
  const [text, setText] = useState("");

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">QR Code Generator</h1>

      <input className="input" placeholder="Text or URL" onChange={(e)=>setText(e.target.value)}/>

      {text && (
        <img
          className="mt-4"
          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}`}
        />
      )}

      <style jsx>{`.input{width:100%;padding:8px;border:1px solid #ddd}`}</style>
    </div>
  );
}