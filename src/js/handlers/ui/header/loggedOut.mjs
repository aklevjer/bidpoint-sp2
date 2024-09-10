import { createLoginButton } from "../../../templates/ui/index.mjs";
import { openModal } from "../modal/index.mjs";

/**
 * Sets up the header with a login button if a user is not logged in.
 *
 * @param {HTMLElement} container - The container element to insert the login button into.
 */
export function setupLoggedOutHeader(container) {
  const { loginBtnClone, loginBtn } = createLoginButton();

  container.appendChild(loginBtnClone);
  loginBtn.addEventListener("click", () => openModal("login"));
}
