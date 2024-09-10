import * as storage from "../../utils/storage/index.mjs";

/**
 * Logs out by removing user information from local storage and redirecting to the homepage.
 */
export function handleLogout() {
  storage.remove("accessToken");
  storage.remove("profile");
  location.href = "/";
}
