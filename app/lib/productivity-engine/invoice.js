export function generateInvoice(data) {
  const subtotal = data.items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  const taxAmount = (subtotal * (data.tax || 0)) / 100;
  const total = subtotal + taxAmount;

  return {
    ...data,
    subtotal,
    taxAmount,
    total,
    invoiceNumber: `INV-${Date.now()}`
  };
}