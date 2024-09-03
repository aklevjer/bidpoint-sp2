import { getTimeLeft, getCurrentBid } from "../../../utils/listings/index.mjs";
import { formatDate } from "../../../utils/format/index.mjs";

export function updateListingMeta(listingClone, listingData) {
  const listingTitle = listingClone.querySelector(".listing-title");
  const listingDescription = listingClone.querySelector(".listing-description");
  const listingBidLabel = listingClone.querySelector(".listing-bid-label");
  const listingBid = listingClone.querySelector(".listing-bid");
  const listingEndsIn = listingClone.querySelector(".listing-ends-in");
  const listingCreated = listingClone.querySelector(".listing-created");

  const { title, description, created, endsAt, bids } = listingData;

  // Title
  listingTitle.textContent = title;

  // Description
  listingDescription.textContent = description;

  // Ends in
  const timeLeft = getTimeLeft(endsAt, true);
  const hasEnded = timeLeft === "Ended";
  listingEndsIn.textContent = timeLeft;

  // Bid
  const currentBid = getCurrentBid(bids);
  listingBidLabel.textContent = hasEnded ? "Winning bid:" : "Current bid:";
  listingBid.textContent = `${currentBid !== 0 ? `${currentBid} credits` : `No bids ${hasEnded ? "placed" : "yet"}`}`;

  // Created date
  listingCreated.textContent = formatDate(created);
  listingCreated.setAttribute("datetime", created);
}
