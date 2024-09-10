/**
 * Retrieves the highest bid amount from an array bids.
 *
 * @param {Object[]} bids - An array of bid objects.
 * @returns {number} The highest bid amount, or 0 if there are no bids.
 */
export function getCurrentBid(bids) {
  if (bids.length === 0) {
    return 0;
  }

  const amounts = bids.map((bid) => bid.amount);
  return Math.max(...amounts);
}
