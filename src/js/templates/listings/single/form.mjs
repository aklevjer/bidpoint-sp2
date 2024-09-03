import * as storage from "../../../utils/storage/index.mjs";
import { hideElement } from "../../../utils/html/index.mjs";

export function updateListingBidForm(listingClone, listingData) {
  const bidForm = listingClone.querySelector(".bid-form");
  const bidFormLabel = listingClone.querySelector(".bid-form-label");

  const { seller, endsAt } = listingData;
  const username = storage.get("profile")?.name;

  const endsAtTime = new Date(endsAt).getTime();
  const hasEnded = endsAtTime < Date.now();

  const isUserSeller = seller.name === username;
  const isUserLoggedIn = Boolean(username);

  if (hasEnded) {
    hideElement(bidForm);
    bidFormLabel.textContent =
      "This listing has ended, bidding is no longer available.";
  } else if (isUserSeller) {
    hideElement(bidForm);
    bidFormLabel.textContent = "You cannot bid on your own listing.";
  } else if (isUserLoggedIn) {
    hideElement(bidFormLabel);
  } else {
    hideElement(bidForm);
  }
}
