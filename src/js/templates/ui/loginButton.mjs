import { getTemplateClone } from "../../utils/html/index.mjs";

export function createLoginBtnTemplate() {
  const loginBtnClone = getTemplateClone("login-btn");
  const loginBtn = loginBtnClone.querySelector(".login-btn");

  return { loginBtnClone, loginBtn };
}
