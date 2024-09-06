import {
  getListingsByProfile,
  getWinsByProfile,
} from "../../api/profiles/index.mjs";

function handleTabClicked(selectedBtn, profileListHandler, profileName) {
  const callbacks = [getListingsByProfile, getWinsByProfile];

  document.querySelectorAll(".tab-btn").forEach((tab, index) => {
    const isSelected = tab === selectedBtn;

    tab.setAttribute("data-selected", isSelected);

    if (isSelected) {
      profileListHandler.setCallback(callbacks[index], profileName);
    }
  });
}

export function setTabListeners(profileListHandler, profileName) {
  const tabBtns = document.querySelectorAll(".tab-btn");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () =>
      handleTabClicked(btn, profileListHandler, profileName),
    );
  });
}
