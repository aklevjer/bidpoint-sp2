import { getTemplateClone } from "../../utils/html/index.mjs";
import { DEFAULT_AVATAR_IMG } from "../../constants/index.mjs";

/**
 * Creates and populates a user menu template.
 *
 * @param {Object} userData - The user data used to populate the template.
 * @returns {Object} An object containing the cloned user menu template, the user menu button and the logout button.
 */
export function createUserMenu(userData) {
  const userMenuClone = getTemplateClone("user-menu");
  const userMenuBtn = userMenuClone.querySelector(".user-menu-btn");
  const userMenuAvatar = userMenuClone.querySelector(".user-menu-avatar");
  const userMenuName = userMenuClone.querySelector(".user-menu-name");
  const userMenuCredits = userMenuClone.querySelector(".user-menu-credits");
  const logoutBtn = userMenuClone.querySelector(".logout-btn");

  const { avatar, name, credits } = userData;

  // User avatar
  userMenuAvatar.src = avatar.url || DEFAULT_AVATAR_IMG;
  userMenuAvatar.alt = avatar.alt || `Avatar for ${name}`;
  userMenuAvatar.setAttribute("onerror", `this.onerror=null;this.src="${DEFAULT_AVATAR_IMG}";`);

  // User name
  userMenuName.textContent = name;

  // Credits
  userMenuCredits.textContent = `${credits} credits`;

  return { userMenuClone, userMenuBtn, logoutBtn };
}
