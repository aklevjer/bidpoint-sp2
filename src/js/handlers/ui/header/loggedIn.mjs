import * as storage from "../../../utils/storage/index.mjs";
import { getProfileByName } from "../../../api/profiles/index.mjs";
import { createUserMenu } from "../../../templates/ui/index.mjs";
import { toggleUserMenu, showAlert } from "../index.mjs";
import { handleLogout } from "../../auth/index.mjs";

/**
 * Sets up the header with user-specific elements when a user is logged in.
 * Fetches and stores the user's profile, then creates and inserts a user menu.
 * Displays an error alert if fetching the profile fails.
 *
 * @param {HTMLElement} container - The container element to insert the user menu into.
 */
export async function setupLoggedInHeader(container) {
  const { name } = storage.get("profile");

  try {
    const { data } = await getProfileByName(name);
    storage.set("profile", data);

    const { userMenuClone, userMenuBtn, logoutBtn } = createUserMenu(data);
    container.appendChild(userMenuClone);

    userMenuBtn.addEventListener("click", toggleUserMenu);
    logoutBtn.addEventListener("click", handleLogout);
  } catch (error) {
    showAlert("error", "Unable to load account info. Please refresh the page.");
  }
}
