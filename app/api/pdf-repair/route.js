import { exec } from "child_process";
import fs from "fs";
import path from "path";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");

  const inputPath = `/tmp/input.pdf`;
  const outputPath = `/tmp/repaired.pdf`;

  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(inputPath, buffer);

  return new Promise((resolve) => {
    exec(`qpdf --linearize ${inputPath} ${outputPath}`, () => {
      const repaired = fs.readFileSync(outputPath);
      resolve(
        new Response(repaired, {
          headers: {
            "Content-Type": "application/pdf",
          },
        })
      );
    });
  });
}