import { hideElement } from "../../utils/html/index.mjs";

/**
 * Reveals all bids made on a listing and hides the "show all" button.
 *
 * @param {Event} event - The event object representing the "show all" button click event.
 */
function showAllBids(event) {
  const showAllBtn = event.currentTarget;
  const bidsList = document.querySelector(".bids-list");

  if (bidsList) {
    const bidItems = bidsList.querySelectorAll(".bid-item");
    bidItems.forEach((bidItem) => hideElement(bidItem, false));

    hideElement(showAllBtn);
  }
}

/**
 * Sets up an event listener for the "show all" button to reveal all bids.
 */
export function setShowAllListener() {
  const showAllBtn = document.querySelector(".show-all-btn");

  if (showAllBtn) {
    showAllBtn.addEventListener("click", showAllBids);
  }
}
