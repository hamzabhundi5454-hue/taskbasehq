import { PDFDocument } from "pdf-lib";

export default async function removeWatermark(buffer) {
  const pdfDoc = await PDFDocument.load(buffer);
  const pages = pdfDoc.getPages();

  pages.forEach((page) => {
    page.node.set("Contents", pdfDoc.context.obj([]));
  });

  return await pdfDoc.save();
}