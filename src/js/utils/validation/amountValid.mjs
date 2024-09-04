export function isAmountValid(amount) {
  const parsedAmount = parseInt(amount, 10);
  return !isNaN(parsedAmount) && parsedAmount > 0;
}
