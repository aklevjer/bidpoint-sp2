import { getListings } from "../../api/listings/index.mjs";

/**
 * Handles sorting of listings based on the selected sort option.
 *
 * @param {Event} event - The event object representing the sort select change.
 * @param {ListingsHandler} listingsHandler - The handler for managing and displaying listings.
 */
function handleSortListings(event, listingsHandler) {
  const sortOptions = event.target.value;
  listingsHandler.setCallback(getListings, sortOptions);
}

/**
 * Sets up an event listener for the sort select to trigger sorting when the selected option changes.
 *
 * @param {ListingsHandler} listingsHandler - The handler for managing and displaying listings.
 */
export function setSortListener(listingsHandler) {
  const sortSelect = document.querySelector("#sort");

  if (sortSelect) {
    sortSelect.addEventListener("change", (event) => handleSortListings(event, listingsHandler));
  }
}
