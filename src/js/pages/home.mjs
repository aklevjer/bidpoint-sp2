import { getListings } from "../api/listings/index.mjs";
import { ListingsHandler } from "../handlers/listings/index.mjs";

/**
 * Handles the logic for the homepage.
 *
 * - Sets up the endingSoonHandler to fetch and display listings using getListings.
 */
export function homePage() {
  const endingSoonContainer = document.querySelector(".ending-soon-container");
  const endingSoonHandler = new ListingsHandler(endingSoonContainer);
  endingSoonHandler.setCallback(getListings);
}
