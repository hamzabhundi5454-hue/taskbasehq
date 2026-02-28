import { NextResponse } from "next/server";
import { calculateLoan } from "../../../lib/productivity-engine/calculators.js";

export async function POST(req) {
  const { amount, rate, months } = await req.json();

  const result = calculateLoan(amount, rate, months);

  return NextResponse.json(result);
}