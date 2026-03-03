import { PDFDocument } from "pdf-lib";

export async function removeWatermark(buffer) {
  const pdfDoc = await PDFDocument.load(buffer);
  const pages = pdfDoc.getPages();

  pages.forEach((page) => {
    page.node.set("Contents", pdfDoc.context.obj([]));
  });

  return await pdfDoc.save();
}