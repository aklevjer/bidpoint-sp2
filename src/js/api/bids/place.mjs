import { authFetch } from "../index.mjs";
import { API_LISTINGS_URL, API_BIDS } from "../../constants/index.mjs";

export async function placeBid(listingId, bidData) {
  const response = await authFetch(
    `${API_LISTINGS_URL}/${listingId}${API_BIDS}`,
    {
      method: "POST",
      body: JSON.stringify(bidData),
    },
  );

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message || "Failed to place bid on the listing";

  throw new Error(errorMessage);
}
