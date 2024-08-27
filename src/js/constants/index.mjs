// API
export const API_KEY = import.meta.env.VITE_API_KEY;
export const API_BASE = "https://v2.api.noroff.dev";

export const API_AUTH = "/auth";
export const API_REGISTER = "/register";
export const API_LOGIN = "/login";

export const API_REGISTER_URL = API_BASE + API_AUTH + API_REGISTER;
export const API_LOGIN_URL = API_BASE + API_AUTH + API_LOGIN;
