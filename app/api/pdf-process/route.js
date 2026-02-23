import fs from "fs";
import { pdfEngine } from "@/app/lib/pdf-engine";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");
  const action = data.get("action");

  const input = "/tmp/input.pdf";
  const output = "/tmp/output.pdf";

  fs.writeFileSync(input, Buffer.from(await file.arrayBuffer()));

  if (!pdfEngine[action]) {
    return new Response("Invalid action", { status: 400 });
  }

  await pdfEngine[action](input, output);

  const finalFile = fs.readFileSync(output);

  return new Response(finalFile, {
    headers: { "Content-Type": "application/pdf" },
  });
}