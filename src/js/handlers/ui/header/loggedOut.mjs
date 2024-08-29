import { createLoginBtnTemplate } from "../../../templates/ui/index.mjs";
import { openModal } from "../modal/index.mjs";

export function setupLoggedOutHeader(container) {
  const { loginBtnClone, loginBtn } = createLoginBtnTemplate();

  container.appendChild(loginBtnClone);
  loginBtn.addEventListener("click", () => openModal("login"));
}
