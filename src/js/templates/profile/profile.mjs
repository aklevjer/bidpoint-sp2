import * as profileComps from "./index.mjs";
import { getTemplateClone } from "../../utils/html/index.mjs";

/**
 * Creates and populates a profile template.
 *
 * @param {Object} profileData - The data of the profile used to populate the template.
 * @returns {DocumentFragment} The populated profile template.
 */
export function createProfile(profileData) {
  const profileClone = getTemplateClone("profile");

  profileComps.updateProfileDetails(profileClone, profileData);
  profileComps.updateProfileTabs(profileClone, profileData);

  return profileClone;
}
