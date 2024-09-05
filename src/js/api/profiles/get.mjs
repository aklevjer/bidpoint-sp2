import { authFetch } from "../index.mjs";
import { API_PROFILES_URL } from "../../constants/index.mjs";

export async function getProfileByName(profileName) {
  const response = await authFetch(`${API_PROFILES_URL}/${profileName}`);

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message || "Failed to retrieve the profile";

  throw new Error(errorMessage);
}
