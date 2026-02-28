import { PDFDocument } from "pdf-lib";

export default async function repairPDF(fileBuffer) {
  const pdfDoc = await PDFDocument.load(fileBuffer, {
    ignoreEncryption: true,
    updateMetadata: false,
  });

  // Re-save PDF (this fixes many corruption issues)
  const repairedBytes = await pdfDoc.save({
    useObjectStreams: false,
    addDefaultPage: false,
  });

  return repairedBytes;
}