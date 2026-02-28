export function generateInvoice(data) {
  return {
    invoiceNumber: "INV-" + Date.now(),
    date: new Date().toISOString(),
    ...data,
  };
}