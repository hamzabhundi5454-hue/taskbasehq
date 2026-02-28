export function calculateLoan({ amount, rate, months }) {
  const monthlyRate = rate / 100 / 12;
  const emi =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  return {
    emi: Number(emi.toFixed(2)),
    totalPayment: Number((emi * months).toFixed(2)),
  };
}