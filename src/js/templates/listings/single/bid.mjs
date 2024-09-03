export function updateListingBid(bidClone, bidData) {
  const bidderName = bidClone.querySelector(".bidder-name");
  const bidAmount = bidClone.querySelector(".bid-amount");

  const { bidder, amount } = bidData;

  // Bidder name
  bidderName.href = `/profile/?user=${bidder.name}`;
  bidderName.textContent = bidder.name;

  // Bid amount
  bidAmount.textContent = `${amount} credits`;

  return bidClone;
}
