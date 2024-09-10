import { getListings } from "../api/listings/index.mjs";
import {
  ListingsHandler,
  setSearchListener,
  setSortListener,
} from "../handlers/listings/index.mjs";

/**
 * Handles the logic for the listings page.
 *
 * - Sets up the listingsHandler to fetch and display listings using getListings.
 * - Adds event listeners for search and sort functionality.
 */
export function listingsPage() {
  const listingsContainer = document.querySelector(".listings-container");
  const listingsHandler = new ListingsHandler(listingsContainer, 12);
  listingsHandler.setCallback(getListings);

  setSearchListener(listingsHandler);
  setSortListener(listingsHandler);
}
