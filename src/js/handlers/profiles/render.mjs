import { createProfile } from "../../templates/profile/index.mjs";

export function renderProfile(profileData, parentElement) {
  const profileClone = createProfile(profileData);
  parentElement.appendChild(profileClone);
}
