import * as storage from "../utils/storage/index.mjs";
import { ListingsHandler } from "../handlers/listings/index.mjs";
import { isLoggedIn, setPageTitle } from "../utils/misc/index.mjs";
import { clearElement } from "../utils/html/index.mjs";
import { getProfileByName, getListingsByProfile } from "../api/profiles/index.mjs";
import { showAlert } from "../handlers/ui/index.mjs";
import {
  renderProfile,
  setTabListeners,
  setUpdateProfileListener,
} from "../handlers/profiles/index.mjs";

export async function profilePage({ user }) {
  if (!isLoggedIn()) {
    location.href = "/";
  }

  const profile = storage.get("profile");
  const profileName = user || profile.name;
  const isOwner = !user;

  const profileContainer = document.querySelector(".profile-container");

  try {
    const profileData = isOwner ? profile : (await getProfileByName(profileName)).data;

    clearElement(profileContainer);
    renderProfile(profileData, profileContainer);
    setPageTitle(profileName);

    const profileListings = document.querySelector(".profile-listings");
    const profileListHandler = new ListingsHandler(profileListings);
    profileListHandler.setCallback(getListingsByProfile, profileName);

    setTabListeners(profileListHandler, profileName);
    setUpdateProfileListener();
  } catch (error) {
    clearElement(profileContainer);
    showAlert("error", "Oops! Failed to load profile. Please try again later.", profileContainer);
  }
}
