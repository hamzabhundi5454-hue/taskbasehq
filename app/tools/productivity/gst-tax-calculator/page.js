"use client";
import { useState } from "react";

export default function GSTCalculator() {
  const [amount, setAmount] = useState(0);
  const [gst, setGst] = useState(0);

  const tax = (amount * gst) / 100;
  const total = amount + tax;

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">GST / Tax Calculator</h1>

      <input className="input" placeholder="Amount" onChange={(e)=>setAmount(+e.target.value)}/>
      <input className="input" placeholder="GST %" onChange={(e)=>setGst(+e.target.value)}/>

      <p>Tax: {tax}</p>
      <p>Total: <b>{total}</b></p>

      <style jsx>{`.input{width:100%;padding:8px;border:1px solid #ddd;margin-bottom:8px}`}</style>
    </div>
  );
}