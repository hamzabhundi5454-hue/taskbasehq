"use client";
import { useState } from "react";

export default function LoanCalculator() {
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [years, setYears] = useState(0);

  const emi =
    amount && rate && years
      ? ((amount * rate) / 1200) /
        (1 - Math.pow(1 + rate / 1200, -years * 12))
      : 0;

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Loan Calculator</h1>

      <input className="input" placeholder="Loan Amount" onChange={(e)=>setAmount(+e.target.value)}/>
      <input className="input" placeholder="Interest %" onChange={(e)=>setRate(+e.target.value)}/>
      <input className="input" placeholder="Years" onChange={(e)=>setYears(+e.target.value)}/>

      <div className="mt-4 p-4 bg-gray-50 border rounded">
        Monthly EMI: <b>{emi.toFixed(2)}</b>
      </div>

      <style jsx>{`
        .input{width:100%;padding:8px;border:1px solid #ddd;margin-bottom:8px}
      `}</style>
    </div>
  );
}