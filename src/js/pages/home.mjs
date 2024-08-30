import { getListings } from "../api/listings/index.mjs";
import { ListingsHandler } from "../handlers/listings/index.mjs";
import { setRegisterListener } from "../handlers/auth/index.mjs";

export function homePage() {
  const endingSoonContainer = document.querySelector(".ending-soon-container");
  const endingSoonHandler = new ListingsHandler(endingSoonContainer);
  endingSoonHandler.setCallback(getListings);

  setRegisterListener();
}
