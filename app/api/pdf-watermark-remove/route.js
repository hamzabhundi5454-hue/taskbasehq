import { removeWatermark } from "@/app/lib/pdf-engine/watermark-remove";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  const buffer = Buffer.from(await file.arrayBuffer());
  const cleaned = await removeWatermark(buffer);

  return new Response(cleaned, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${file.name.replace(".pdf", "_no_watermark.pdf")}"`
    }
  });
}