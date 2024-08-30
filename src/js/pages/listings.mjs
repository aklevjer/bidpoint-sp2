import { getListings } from "../api/listings/index.mjs";
import { ListingsHandler } from "../handlers/listings/index.mjs";

export function listingsPage() {
  const listingsContainer = document.querySelector(".listings-container");
  const listingsHandler = new ListingsHandler(listingsContainer, 12, true);
  listingsHandler.setCallback(getListings);
}
