import { getListings } from "../api/listings/index.mjs";
import { ListingsHandler } from "../handlers/listings/index.mjs";
import { setRegisterListener } from "../handlers/auth/index.mjs";

/**
 * Handles the logic for the homepage.
 *
 * - Sets up the endingSoonHandler to fetch and display listings using getListings.
 * - Adds an event listener for the register button.
 */
export function homePage() {
  const endingSoonContainer = document.querySelector(".ending-soon-container");
  const endingSoonHandler = new ListingsHandler(endingSoonContainer);
  endingSoonHandler.setCallback(getListings);

  setRegisterListener();
}
