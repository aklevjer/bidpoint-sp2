export function updateProfileTabs(profileClone, profileData) {
  const profileListingsCount = profileClone.querySelector(".profile-listings-count");
  const profileWinsCount = profileClone.querySelector(".profile-wins-count");

  const { _count } = profileData;

  profileListingsCount.textContent = `(${_count.listings})`;
  profileWinsCount.textContent = `(${_count.wins})`;
}
