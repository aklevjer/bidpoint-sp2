import { authFetch } from "../index.mjs";
import { API_LISTINGS_URL } from "../../constants/index.mjs";

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
