import { getTemplateClone } from "../../utils/html/index.mjs";

/**
 * Creates a login button template.
 *
 * @returns {Object} An object containing the cloned login button template and the login button element.
 */
export function createLoginButton() {
  const loginBtnClone = getTemplateClone("login-btn");
  const loginBtn = loginBtnClone.querySelector(".login-btn");

  return { loginBtnClone, loginBtn };
}
