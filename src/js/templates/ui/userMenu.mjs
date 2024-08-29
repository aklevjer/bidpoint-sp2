import { getTemplateClone } from "../../utils/html/index.mjs";
import { DEFAULT_AVATAR_URL } from "../../constants/index.mjs";

export function createUserMenuTemplate(userData) {
  const userMenuClone = getTemplateClone("user-menu");
  const userMenuBtn = userMenuClone.querySelector(".user-menu-btn");
  const userMenuAvatar = userMenuClone.querySelector(".user-menu-avatar");
  const userMenuName = userMenuClone.querySelector(".user-menu-name");
  const userMenuCredits = userMenuClone.querySelector(".user-menu-credits");
  const logoutBtn = userMenuClone.querySelector(".logout-btn");

  const { avatar, name, credits } = userData;

  // User avatar
  userMenuAvatar.src = avatar.url || DEFAULT_AVATAR_URL;
  userMenuAvatar.alt = avatar.alt || `Avatar for ${name}`;
  userMenuAvatar.setAttribute(
    "onerror",
    `this.onerror=null;this.src="${DEFAULT_AVATAR_URL}";`,
  );

  // User name
  userMenuName.textContent = name;

  // Credits
  userMenuCredits.textContent = `${credits} credits`;

  return { userMenuClone, userMenuBtn, logoutBtn };
}
