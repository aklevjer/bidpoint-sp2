import * as storage from "../../utils/storage/index.mjs";
import { updateHeader } from "../ui/header/index.mjs";

export function handleLogout() {
  storage.remove("accessToken");
  storage.remove("profile");
  updateHeader();
}
