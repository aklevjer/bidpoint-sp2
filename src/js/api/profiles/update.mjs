import { authFetch } from "../index.mjs";
import { API_PROFILES_URL } from "../../constants/index.mjs";

/**
 * Updates a profile by sending a PUT request to the profiles endpoint.
 *
 * @param {string} profileName - The name of the profile to update.
 * @param {Object} profileData - The profile data.
 * @param {string} [profileData.bio] - The new bio for the profile (Optional).
 * @param {Object} [profileData.avatar] - The new avatar object for the profile (Optional).
 * @param {string} [profileData.avatar.url] - The URL to the new avatar image (Optional).
 * @param {string} [profileData.avatar.alt] - The alternative text for the new avatar image (Optional).
 * @param {Object} [profileData.banner] - The new banner object for the profile (Optional).
 * @param {string} [profileData.banner.url] - The URL to the new banner image (Optional).
 * @param {string} [profileData.banner.alt] - The alternative text for the new banner image (Optional).
 *
 * @returns {Object} An object containing the updated profile and meta data upon successful update.
 * @throws {Error} If there is an error during the update process.
 */
export async function updateProfile(profileName, profileData) {
  const response = await authFetch(`${API_PROFILES_URL}/${profileName}`, {
    method: "PUT",
    body: JSON.stringify(profileData),
  });

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage = responseData?.errors[0]?.message || "Failed to update your profile";

  throw new Error(errorMessage);
}
