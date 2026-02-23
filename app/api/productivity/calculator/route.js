import { NextResponse } from "next/server";
import { calculateLoan } from "@/lib/productivity-engine/calculators";

export async function POST(req) {
  const { amount, rate, months } = await req.json();
  return NextResponse.json(calculateLoan(amount, rate, months));
}