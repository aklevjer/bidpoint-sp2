import { authFetch } from "../index.mjs";
import {
  API_LISTINGS_URL,
  API_PARAMS_DEFAULT,
  API_PARAMS_ACTIVE,
  API_PARAMS_SELLER,
  API_SORT_ENDING,
} from "../../constants/index.mjs";

/**
 * Retrieves listings by sending a GET request to the listings endpoint.
 *
 * @param {number} page - The page of results to retrieve.
 * @param {number} limit - The maximum number of results per page.
 * @param {string} [sortOptions] - The sort criteria for the listings (Optional).
 *
 * @returns {Object} An object containing the listings and meta data upon successful retrieval.
 * @throws {Error} If there is an error during the retrieval process.
 */
export async function getListings(page, limit, sortOptions = API_SORT_ENDING) {
  const response = await authFetch(
    `${API_LISTINGS_URL}${API_PARAMS_DEFAULT}${API_PARAMS_ACTIVE}${sortOptions}&page=${page}&limit=${limit}`,
  );

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage = responseData?.errors[0]?.message || "Failed to retrieve the listings";

  throw new Error(errorMessage);
}

/**
 * Retrieves a listing by it's ID by sending a GET request to the listings endpoint.
 *
 * @param {number} listingId - The ID of the listing to retrieve.
 *
 * @returns {Object} An object containing the listing and meta data upon successful retrieval.
 * @throws {Error} If there is an error during the retrieval process.
 */
export async function getListingById(listingId) {
  const response = await authFetch(
    `${API_LISTINGS_URL}/${listingId}${API_PARAMS_DEFAULT}${API_PARAMS_SELLER}`,
  );

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage = responseData?.errors[0]?.message || "Failed to retrieve the listing";

  throw new Error(errorMessage);
}
