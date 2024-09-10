import { placeBid } from "../../api/bids/index.mjs";
import { singleListingPage } from "../../pages/index.mjs";
import { updateHeader } from "../ui/header/index.mjs";
import { isFormValid } from "../../utils/validation/index.mjs";
import { toggleInputError } from "../ui/index.mjs";

/**
 * Handles placing a bid on a listing.
 * Re-renders the listing and updates the header on a successful bid.
 * Displays an error message on the bid form if the bid placement fails.
 *
 * @param {Event} event - The event object representing the bid form submission.
 * @param {number} listingId - The ID of the listing to place a bid on.
 */
async function handlePlaceBid(event, listingId) {
  event.preventDefault();

  const bidForm = event.target;

  if (!isFormValid(bidForm)) return;

  const formData = new FormData(bidForm);
  const bidData = Object.fromEntries(formData.entries());
  bidData.amount = parseInt(bidData.amount, 10);

  try {
    await placeBid(listingId, bidData);
    await singleListingPage({ id: listingId });
    updateHeader();
  } catch (error) {
    toggleInputError(bidForm.amount, error.message, true);
  }
}

/**
 * Sets up an event listener for the bid form submission.
 *
 * @param {number} listingId - The ID of the listing to place a bid on.
 */
export function setBidFormListener(listingId) {
  const bidForm = document.forms.bid;

  if (bidForm) {
    bidForm.addEventListener("submit", (event) => handlePlaceBid(event, listingId));
  }
}
