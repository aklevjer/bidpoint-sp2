import { authFetch } from "../index.mjs";
import { API_SEARCH_URL, API_PARAMS_DEFAULT } from "../../constants/index.mjs";

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
