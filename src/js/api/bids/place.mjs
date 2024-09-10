import { authFetch } from "../index.mjs";
import { API_LISTINGS_URL, API_BIDS } from "../../constants/index.mjs";

/**
 * Places a new bid on a listing by sending a POST request to the bids endpoint.
 *
 * @param {number} listingId - The ID of the listing to place a bid on.
 * @param {Object} bidData - The bid data.
 * @param {number} bidData.amount - The bid amount.
 *
 * @returns {Object} An object containing the updated listing and meta data upon successful bid placement.
 * @throws {Error} If there is an error during the bid placement process.
 */
export async function placeBid(listingId, bidData) {
  const response = await authFetch(`${API_LISTINGS_URL}/${listingId}${API_BIDS}`, {
    method: "POST",
    body: JSON.stringify(bidData),
  });

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage = responseData?.errors[0]?.message || "Failed to place bid on the listing";

  throw new Error(errorMessage);
}
