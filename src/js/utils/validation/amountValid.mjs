/**
 * Checks if the provided amount is a valid positive integer.
 *
 * @param {string} amount - The amount to check.
 * @returns {boolean} `true` if the amount is a valid positive integer, `false` otherwise.
 */
export function isAmountValid(amount) {
  const parsedAmount = parseInt(amount, 10);
  return !isNaN(parsedAmount) && parsedAmount > 0;
}
