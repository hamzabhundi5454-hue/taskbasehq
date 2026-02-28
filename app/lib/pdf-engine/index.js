import { repairPDF } from "./repair.js";
import removeWatermark from "./watermark-remove.js";

export const pdfEngine = {
  repair: repairPDF,
  removeWatermark,
};