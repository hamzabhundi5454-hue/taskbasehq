"use client";
import { useState } from "react";

export default function SalaryCalculator() {
  const [gross, setGross] = useState(0);
  const [tax, setTax] = useState(0);

  const net = gross - (gross * tax) / 100;

  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Salary Calculator</h1>

      <input className="input" placeholder="Gross Salary" onChange={(e)=>setGross(+e.target.value)}/>
      <input className="input" placeholder="Tax %" onChange={(e)=>setTax(+e.target.value)}/>

      <p className="mt-4">Net Salary: <b>{net}</b></p>

      <style jsx>{`.input{width:100%;padding:8px;border:1px solid #ddd;margin-bottom:8px}`}</style>
    </div>
  );
}