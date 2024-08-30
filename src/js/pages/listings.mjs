import { getListings } from "../api/listings/index.mjs";
import {
  ListingsHandler,
  setSortListener,
} from "../handlers/listings/index.mjs";

export function listingsPage() {
  const listingsContainer = document.querySelector(".listings-container");
  const listingsHandler = new ListingsHandler(listingsContainer, 12, true);
  listingsHandler.setCallback(getListings);

  setSortListener(listingsHandler);
}
