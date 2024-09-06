import * as storage from "../../utils/storage/index.mjs";
import { DEFAULT_AVATAR_IMG } from "../../constants/index.mjs";

export function updateProfileDetails(profileClone, profileData) {
  const profileAvatar = profileClone.querySelector(".profile-avatar");
  const profileEditBtn = profileClone.querySelector(".profile-edit-btn");
  const profileName = profileClone.querySelector(".profile-name");
  const profileCredits = profileClone.querySelector(".profile-credits");
  const profileCreditsCount = profileClone.querySelector(
    ".profile-credits-count",
  );

  const { name, avatar, credits } = profileData;
  const { name: loggedInUser } = storage.get("profile");
  const isOwner = name === loggedInUser;

  // Profile avatar
  profileAvatar.src = avatar.url || DEFAULT_AVATAR_IMG;
  profileAvatar.alt = avatar.alt || `Avatar for ${name}`;
  profileAvatar.setAttribute(
    "onerror",
    `this.onerror=null;this.src="${DEFAULT_AVATAR_IMG}";`,
  );

  // Profile name
  profileName.textContent = name;

  // Credits count
  profileCreditsCount.textContent = credits;

  // Remove button and credits if user is not owner
  if (!isOwner) {
    profileEditBtn.remove();
    profileCredits.remove();
  }
}
