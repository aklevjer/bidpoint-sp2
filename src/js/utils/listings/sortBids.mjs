/**
 * Sorts an array of bids by their amount in descending order.
 *
 * @param {Object[]} bids - The array of bids to be sorted.
 * @returns {Object[]} The array of bid objects sorted by amount, from highest to lowest.
 */
export function sortBidsByAmount(bids) {
  return [...bids].sort((a, b) => b.amount - a.amount);
}
