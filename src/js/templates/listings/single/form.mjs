import * as storage from "../../../utils/storage/index.mjs";

/**
 * Updates the bid form within a listing template.
 *
 * @param {DocumentFragment} listingClone - The cloned listing template containing the bid form.
 * @param {Object} listingData - The data of the listing.
 */
export function updateListingBidForm(listingClone, listingData) {
  const bidForm = listingClone.querySelector(".bid-form");
  const bidFormLabel = listingClone.querySelector(".bid-form-label");

  const { seller, endsAt } = listingData;
  const username = storage.get("profile")?.name;

  const endsAtTime = new Date(endsAt).getTime();
  const hasEnded = endsAtTime < Date.now();

  const isOwner = seller.name === username;
  const isUserLoggedIn = Boolean(username);

  if (hasEnded) {
    bidForm.remove();
    bidFormLabel.textContent = "This listing has ended, bidding is no longer available.";
  } else if (isOwner) {
    bidForm.remove();
    bidFormLabel.textContent = "This is your listing, bidding is not available.";
  } else if (isUserLoggedIn) {
    bidFormLabel.remove();
  } else {
    bidForm.remove();
  }
}
