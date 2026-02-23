export function calculateLoan(amount, rate, months) {
  const monthlyRate = rate / 100 / 12;
  const emi =
    (amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -months));

  return {
    emi: Math.round(emi),
    totalPayment: Math.round(emi * months),
  };
}