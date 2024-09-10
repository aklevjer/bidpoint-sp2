import { authFetch } from "../index.mjs";
import { API_SEARCH_URL, API_PARAMS_DEFAULT } from "../../constants/index.mjs";

/**
 * Searches for listings by sending a GET request to the search endpoint with a query.
 *
 * @param {number} page - The page of results to retrieve.
 * @param {number} limit - The maximum number of results per page.
 * @param {string} query - The search query to filter the listings.
 *
 * @returns {Object} An object containing the search results and meta data upon successful retrieval.
 * @throws {Error} If there is an error during the search process.
 */
export async function searchListings(page, limit, query) {
  const response = await authFetch(
    `${API_SEARCH_URL}${API_PARAMS_DEFAULT}&q=${query}&page=${page}&limit=${limit}`,
  );

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage = responseData?.errors[0]?.message || "Failed to search the listings";

  throw new Error(errorMessage);
}
