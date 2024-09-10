import { authFetch } from "../index.mjs";
import { API_LISTINGS_URL } from "../../constants/index.mjs";

/**
 * Creates a new listing by sending a POST request to the listings endpoint.
 *
 * @param {Object} listingData - The listing data.
 * @param {string} listingData.title - The title of the listing (Required).
 * @param {string} [listingData.description] - The description of the listing (Optional).
 * @param {string[]} [listingData.tags] - An array of tags for the listing (Optional).
 * @param {Object[]} [listingData.media] - An array of media objects for the listing (Optional).
 * @param {string} [listingData.media.url] - The URL to the media object for the listing (Optional).
 * @param {string} [listingData.media.alt] - The alternative text to the media object for the listing (Optional).
 * @param {string} [listingData.endsAt] - The ending date and time for the listing (Required).
 *
 * @returns {Object} An object containing the created listing and meta data upon successful creation.
 * @throws {Error} If there is an error during the creation process.
 */
export async function createListing(listingData) {
  const response = await authFetch(API_LISTINGS_URL, {
    method: "POST",
    body: JSON.stringify(listingData),
  });

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage = responseData?.errors[0]?.message || "Failed to create the listing";

  throw new Error(errorMessage);
}
