export function sortBidsByAmount(bids) {
  return [...bids].sort((a, b) => b.amount - a.amount);
}
