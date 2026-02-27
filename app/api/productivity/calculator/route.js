import { NextResponse } from "next/server";
import { calculateLoan } from "@/lib/productivity-engine/calculators.js";

export async function POST(req) {
  const { amount, rate, months } = await req.json();
  return NextResponse.json(calculateLoan(amount, rate, months));
}