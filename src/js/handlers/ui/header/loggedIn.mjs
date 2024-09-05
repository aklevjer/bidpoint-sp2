import * as storage from "../../../utils/storage/index.mjs";
import { getProfileByName } from "../../../api/profiles/index.mjs";
import { createUserMenu } from "../../../templates/ui/index.mjs";
import { toggleUserMenu } from "../index.mjs";
import { handleLogout } from "../../auth/index.mjs";

export async function setupLoggedInHeader(container) {
  const { name } = storage.get("profile");

  try {
    const { data } = await getProfileByName(name);
    storage.set("profile", data);

    const { userMenuClone, userMenuBtn, logoutBtn } = createUserMenu(data);
    container.appendChild(userMenuClone);

    userMenuBtn.addEventListener("click", toggleUserMenu);
    logoutBtn.addEventListener("click", handleLogout);
  } catch (error) {
    console.error(error);
  }
}
