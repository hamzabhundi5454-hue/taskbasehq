export function generateInvoice(data) {
  return {
    invoiceId: Date.now(),
    createdAt: new Date().toISOString(),
    ...data,
  };
}