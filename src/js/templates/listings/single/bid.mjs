/**
 * Updates a single bid template with bid details.
 *
 * @param {HTMLElement} bidClone - The cloned bid template to be populated.
 * @param {Object} bidData - The data of the bid.
 *
 * @returns {HTMLElement} The updated bid template populated with the bid details.
 */
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
