export function getCurrentBid(bids) {
  if (bids.length === 0) {
    return 0;
  }

  const amounts = bids.map((bid) => bid.amount);
  return Math.max(...amounts);
}
