import { isLoggedIn } from "../../utils/misc/index.mjs";
import { openModal } from "../ui/modal/index.mjs";

/**
 * Handles link clicks by intercepting them if the user is not logged in.
 * Prevents the default action and opens the login modal if the user is not authenticated.
 *
 * @param {Event} event - The event object representing the intercepted link click event.
 */
function handleInterceptLink(event) {
  if (!isLoggedIn()) {
    event.preventDefault();
    openModal("login");
  }
}

/**
 * Sets up event listeners for all links that require login.
 */
export function setInterceptListeners() {
  const interceptLinks = document.querySelectorAll(".login-required");
  interceptLinks.forEach((link) => link.addEventListener("click", handleInterceptLink));
}
