import { toggleNav } from "../index.mjs";
import { updateHeader } from "./index.mjs";
import { setCreateListingListener } from "../../listings/index.mjs";

/**
 * Sets up he header on page load by setting up event listeners and updating the header state.
 */
export function setupHeader() {
  const navBtn = document.querySelector(".nav-btn");

  if (navBtn) {
    navBtn.addEventListener("click", toggleNav);
  }

  setCreateListingListener();
  updateHeader();
}
