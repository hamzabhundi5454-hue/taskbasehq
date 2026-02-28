import { NextResponse } from "next/server";
import { removeWatermark } from "../../lib/pdf-engine/watermark-remove";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const output = await removeWatermark(buffer);

  return new NextResponse(output, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=watermark-removed.pdf",
    },
  });
}