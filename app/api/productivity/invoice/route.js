import { NextResponse } from "next/server";
import { generateInvoice } from "@/lib/productivity-engine/invoice";

export async function POST(req) {
  const body = await req.json();
  const invoice = generateInvoice(body);

  return NextResponse.json({ success: true, invoice });
}