import { authFetch } from "../index.mjs";
import {
  API_PROFILES_URL,
  API_LISTINGS,
  API_WINS,
  API_PARAMS_DEFAULT,
} from "../../constants/index.mjs";

/**
 * Retrieves a profile by it's name by sending a GET request to the profiles endpoint.
 *
 * @param {string} profileName - The name of the profile to retrieve.
 *
 * @returns {Object} An object containing the profile and meta data upon successful retrieval.
 * @throws {Error} If there is an error during the retrieval process.
 */
export async function getProfileByName(profileName) {
  const response = await authFetch(`${API_PROFILES_URL}/${profileName}`);

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage = responseData?.errors[0]?.message || "Failed to retrieve the profile";

  throw new Error(errorMessage);
}

/**
 * Retrieves all listings made by a profile by sending a GET request to the profiles endpoint.
 *
 * @param {number} page - The page of results to retrieve.
 * @param {number} limit - The maximum number of results per page.
 * @param {string} profileName - The name of the profile to retrieve listings for.
 *
 * @returns {Object} An object containing the profile's listings and meta data upon successful retrieval.
 * @throws {Error} If there is an error during the retrieval process.
 */
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

/**
 * Retrieves all won listings by a profile by sending a GET request to the profiles endpoint.
 *
 * @param {number} page - The page of results to retrieve.
 * @param {number} limit - The maximum number of results per page.
 * @param {string} profileName - The name of the profile to retrieve the won listings for.
 *
 * @returns {Object} An object containing the profile's won listings and meta data upon successful retrieval.
 * @throws {Error} If there is an error during the retrieval process.
 */
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
