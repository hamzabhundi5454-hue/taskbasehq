export function calculateLoan({ amount, rate, months }) {
  const monthlyRate = rate / 100 / 12;
  const payment =
    (amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -months));

  return {
    monthlyPayment: Number(payment.toFixed(2)),
    totalPayment: Number((payment * months).toFixed(2)),
  };
}