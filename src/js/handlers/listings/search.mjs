import { getListings, searchListings } from "../../api/listings/index.mjs";
import { debounce } from "../../utils/misc/index.mjs";

/**
 * Searches for listings when the value of the search input changes.
 *
 * @param {Event} event - The event object representing the search input.
 * @param {ListingsHandler} listingsHandler - The handler for managing and displaying listings.
 */
function handleSearchListings(event, listingsHandler) {
  const searchQuery = event.target.value.trim();

  if (searchQuery) {
    listingsHandler.setCallback(searchListings, searchQuery);
  } else {
    listingsHandler.setCallback(getListings);
  }
}

/**
 * Sets up an event listener for the search input to trigger the search process.
 * Input events are debounced to improve performance and reduce unnecessary API requests.
 *
 * @param {ListingsHandler} listingsHandler - The handler for managing and displaying listings.
 */
export function setSearchListener(listingsHandler) {
  const searchInput = document.querySelector("#search");

  if (searchInput) {
    const processInput = debounce((event) => handleSearchListings(event, listingsHandler));
    searchInput.addEventListener("input", (event) => processInput(event));
  }
}
