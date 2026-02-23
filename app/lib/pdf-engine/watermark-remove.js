import { PDFDocument } from "pdf-lib";

export async function removeWatermark(fileBuffer) {
  const pdfDoc = await PDFDocument.load(fileBuffer);

  const pages = pdfDoc.getPages();

  pages.forEach(page => {
    page.node.set("Contents", pdfDoc.context.obj([])); 
  });

  return await pdfDoc.save();
}