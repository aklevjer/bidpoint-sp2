// API
export const API_KEY = import.meta.env.VITE_API_KEY;
export const API_BASE = "https://v2.api.noroff.dev";

export const API_AUTH = "/auth";
export const API_REGISTER = "/register";
export const API_LOGIN = "/login";
export const API_AUCTION = "/auction";
export const API_LISTINGS = "/listings";
export const API_PROFILES = "/profiles";
export const API_SEARCH = "/search";

export const API_PARAMS_LISTINGS = "?_seller=true&_bids=true&_active=true";
export const API_PARAMS_PROFILES = "?_listings=true&_wins=true";

export const API_SORT_ENDING = "&sort=endsAt&sortOrder=asc";
export const API_SORT_LATEST = "&sort=created&sortOrder=desc";

export const API_REGISTER_URL = API_BASE + API_AUTH + API_REGISTER;
export const API_LOGIN_URL = API_BASE + API_AUTH + API_LOGIN;
export const API_LISTINGS_URL = API_BASE + API_AUCTION + API_LISTINGS;
export const API_PROFILES_URL = API_BASE + API_AUCTION + API_PROFILES;
export const API_SEARCH_URL =
  API_BASE + API_AUCTION + API_LISTINGS + API_SEARCH;

// Default image urls
export const DEFAULT_AVATAR_IMG = "/assets/default-avatar.jpg";
export const DEFAULT_LISTING_IMG = "/assets/default-listing.jpg";
