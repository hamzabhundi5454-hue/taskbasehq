export function generateInvoice(data) {
  return {
    invoiceId: `INV-${Date.now()}`,
    ...data,
    createdAt: new Date().toISOString(),
  };
}