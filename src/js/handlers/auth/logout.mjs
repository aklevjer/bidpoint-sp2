import * as storage from "../../utils/storage/index.mjs";

export function handleLogout() {
  storage.remove("accessToken");
  storage.remove("profile");
  location.href = "/";
}
