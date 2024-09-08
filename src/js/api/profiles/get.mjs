import { authFetch } from "../index.mjs";
import {
  API_PROFILES_URL,
  API_LISTINGS,
  API_WINS,
  API_PARAMS_DEFAULT,
} from "../../constants/index.mjs";

export async function getProfileByName(profileName) {
  const response = await authFetch(`${API_PROFILES_URL}/${profileName}`);

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage = responseData?.errors[0]?.message || "Failed to retrieve the profile";

  throw new Error(errorMessage);
}

export async function getListingsByProfile(page, limit, profileName) {
  const response = await authFetch(
    `${API_PROFILES_URL}/${profileName}${API_LISTINGS}${API_PARAMS_DEFAULT}&page=${page}&limit=${limit}`,
  );

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message || "Failed to retrieve the listings for the profile";

  throw new Error(errorMessage);
}

export async function getWinsByProfile(page, limit, profileName) {
  const response = await authFetch(
    `${API_PROFILES_URL}/${profileName}${API_WINS}${API_PARAMS_DEFAULT}&page=${page}&limit=${limit}`,
  );

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message || "Failed to retrieve the won listings for the profile";

  throw new Error(errorMessage);
}
