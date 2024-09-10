import { getListingsByProfile, getWinsByProfile } from "../../api/profiles/index.mjs";

/**
 * Updates the profile list handler based on the selected tab button.
 *
 * @param {HTMLElement} selectedBtn - The tab button that was clicked.
 * @param {ProfileListHandler} profileListHandler - The handler for managing and displaying profile listings.
 * @param {string} profileName - The profile name of the current profile.
 */
function handleTabClicked(selectedBtn, profileListHandler, profileName) {
  const callbacks = [getListingsByProfile, getWinsByProfile];
  const tabBtns = document.querySelectorAll(".tab-btn");

  tabBtns.forEach((tab, index) => {
    const isSelected = tab === selectedBtn;

    tab.setAttribute("data-selected", isSelected);

    if (isSelected) {
      profileListHandler.setCallback(callbacks[index], profileName);
    }
  });
}

/**
 * Sets up event listeners for the profile tab buttons to handle tab changes.
 *
 * @param {ProfileListHandler} profileListHandler - The handler for managing and displaying profile listings.
 * @param {string} profileName - The profile name of the current profile.
 */
export function setTabListeners(profileListHandler, profileName) {
  const tabBtns = document.querySelectorAll(".tab-btn");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => handleTabClicked(btn, profileListHandler, profileName));
  });
}
