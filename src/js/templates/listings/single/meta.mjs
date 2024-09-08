import { formatDate } from "../../../utils/format/index.mjs";
import { getTimeLeft, getExpiryStatus, getCurrentBid } from "../../../utils/listings/index.mjs";

export function updateListingMeta(listingClone, listingData) {
  const listingTitle = listingClone.querySelector(".listing-title");
  const listingDescription = listingClone.querySelector(".listing-description");
  const listingBidLabel = listingClone.querySelector(".listing-bid-label");
  const listingBid = listingClone.querySelector(".listing-bid");
  const listingEndsIn = listingClone.querySelector(".listing-ends-in");
  const listingEndsInIcon = listingClone.querySelector(".listing-ends-in-icon");
  const listingCreated = listingClone.querySelector(".listing-created");

  const { title, description, created, endsAt, bids } = listingData;

  // Title
  listingTitle.textContent = title;

  // Description
  if (!description) {
    listingDescription.remove();
  } else {
    listingDescription.textContent = description;
  }

  // Ends in
  const timeLeft = getTimeLeft(endsAt, true);
  const isPastOrNearEnd = getExpiryStatus(endsAt);
  const hasEnded = timeLeft === "Ended";

  listingEndsIn.textContent = timeLeft;

  listingEndsIn.classList.toggle("text-green", !isPastOrNearEnd);
  listingEndsIn.classList.toggle("text-red", isPastOrNearEnd);

  if (!isPastOrNearEnd || hasEnded) {
    listingEndsInIcon.remove();
  }

  // Bid
  const currentBid = getCurrentBid(bids);
  listingBidLabel.textContent = hasEnded ? "Winning bid:" : "Current bid:";
  listingBid.textContent = `${currentBid !== 0 ? `${currentBid} credits` : `No bids ${hasEnded ? "placed" : "yet"}`}`;

  // Created date
  listingCreated.textContent = formatDate(created);
  listingCreated.setAttribute("datetime", created);
}
