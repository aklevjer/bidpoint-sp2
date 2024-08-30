import { createLoginButton } from "../../../templates/ui/index.mjs";
import { openModal } from "../modal/index.mjs";

export function setupLoggedOutHeader(container) {
  const { loginBtnClone, loginBtn } = createLoginButton();

  container.appendChild(loginBtnClone);
  loginBtn.addEventListener("click", () => openModal("login"));
}
