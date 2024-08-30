import { authFetch } from "../index.mjs";
import {
  API_LISTINGS_URL,
  API_PARAMS_LISTINGS,
  API_SORT_ENDING,
} from "../../constants/index.mjs";

export async function getListings(page, limit, sortOptions = API_SORT_ENDING) {
  const response = await authFetch(
    `${API_LISTINGS_URL}${API_PARAMS_LISTINGS}&page=${page}&limit=${limit}${sortOptions}`,
  );

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message || "Failed to retrieve the listings";

  throw new Error(errorMessage);
}

export async function getListingById(listingId) {
  const response = await authFetch(
    `${API_LISTINGS_URL}/${listingId}${API_PARAMS_LISTINGS}`,
  );

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message || "Failed to retrieve the listing";

  throw new Error(errorMessage);
}
