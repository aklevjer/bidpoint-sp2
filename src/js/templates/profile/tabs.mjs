/**
 * Updates the profile tabs within a profile template.
 *
 * @param {DocumentFragment} profileClone - The cloned profile template containing the tabs.
 * @param {Object} profileData - The data of the profile.
 */
export function updateProfileTabs(profileClone, profileData) {
  const profileListingsCount = profileClone.querySelector(".profile-listings-count");
  const profileWinsCount = profileClone.querySelector(".profile-wins-count");

  const { _count } = profileData;

  profileListingsCount.textContent = `(${_count.listings})`;
  profileWinsCount.textContent = `(${_count.wins})`;
}
