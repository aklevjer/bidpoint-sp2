import { isFormValid } from "../../utils/validation/index.mjs";
import { login } from "../../api/auth/index.mjs";
import { openModal, closeModal } from "../ui/modal/index.mjs";
import { updateHeader } from "../ui/index.mjs";

export async function handleLogin(event) {
  event.preventDefault();

  const loginForm = event.target;

  if (!isFormValid(loginForm)) return;

  const formData = new FormData(loginForm);
  const account = Object.fromEntries(formData.entries());

  try {
    await login(account);
    closeModal();
    updateHeader();
  } catch (error) {
    console.error(error);
  }
}

export function setLoginListener() {
  const loginBtn = document.querySelector(".auth-login-btn");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => openModal("login"));
  }
}
