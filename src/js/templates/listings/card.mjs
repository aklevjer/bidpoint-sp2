import { getTemplateClone } from "../../utils/html/index.mjs";
import { getTimeLeft, getCurrentBid } from "../../utils/listings/index.mjs";
import { DEFAULT_LISTING_IMG } from "../../constants/index.mjs";

export function createListingCard(listingData) {
  const cardClone = getTemplateClone("listing-card");
  const cardLink = cardClone.querySelector(".listing-card-link");
  const cardImage = cardClone.querySelector(".listing-card-image");
  const cardTimeleft = cardClone.querySelector(".listing-card-timeleft");
  const cardH2 = cardClone.querySelector(".listing-card-h2");
  const cardH3 = cardClone.querySelector(".listing-card-h3");
  const cardBidLabel = cardClone.querySelector(".listing-card-bid-label");
  const cardBid = cardClone.querySelector(".listing-card-bid");

  const { id, title, media, endsAt, bids } = listingData;

  // Link
  cardLink.href = `/listings/listing/?id=${id}`;

  // Image
  cardImage.src = media[0]?.url || DEFAULT_LISTING_IMG;
  cardImage.alt = media[0]?.alt || title;
  cardImage.setAttribute(
    "onerror",
    `this.onerror=null;this.src="${DEFAULT_LISTING_IMG}";`,
  );

  // Time left
  const timeLeft = getTimeLeft(endsAt, false);
  const hasEnded = timeLeft === "Ended";
  cardTimeleft.textContent = hasEnded ? timeLeft : `${timeLeft} left`;

  // Title
  const currentPage = location.pathname;
  if (currentPage !== "/listings/") {
    cardH3.textContent = title;
    cardH2.remove();
  } else {
    cardH2.textContent = title;
    cardH3.remove();
  }

  // Bid
  const currentBid = getCurrentBid(bids);
  cardBidLabel.textContent = hasEnded ? "Winning bid" : "Current bid";
  cardBid.textContent = `${currentBid !== 0 ? `${currentBid} credits` : `No bids ${hasEnded ? "placed" : "yet"}`}`;

  return cardClone;
}
