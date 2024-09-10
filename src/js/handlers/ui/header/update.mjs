import { isLoggedIn } from "../../../utils/misc/index.mjs";
import { clearElement } from "../../../utils/html/index.mjs";
import { setupLoggedInHeader, setupLoggedOutHeader } from "./index.mjs";

/**
 * Updates the header based on the user's authentication status.
 * If the user is logged in, it sets up the user menu, otherwise, it sets up the login button.
 */
export function updateHeader() {
  const userContainer = document.querySelector(".user-container");

  if (!userContainer) return;

  clearElement(userContainer);

  if (isLoggedIn()) {
    setupLoggedInHeader(userContainer);
  } else {
    setupLoggedOutHeader(userContainer);
  }
}
