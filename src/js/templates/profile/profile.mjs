import * as profileComps from "./index.mjs";
import { getTemplateClone } from "../../utils/html/index.mjs";

export function createProfile(profileData) {
  const profileClone = getTemplateClone("profile");

  profileComps.updateProfileDetails(profileClone, profileData);
  profileComps.updateProfileTabs(profileClone, profileData);

  return profileClone;
}
