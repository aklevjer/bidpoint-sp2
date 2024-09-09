import { isFormValid } from "../../utils/validation/index.mjs";
import { login } from "../../api/auth/index.mjs";
import { isLoggedIn } from "../../utils/misc/index.mjs";
import { openModal } from "../ui/modal/index.mjs";
import { showAlert } from "../ui/index.mjs";

export async function handleLogin(event) {
  event.preventDefault();

  const loginForm = event.target;

  if (!isFormValid(loginForm)) return;

  const formData = new FormData(loginForm);
  const account = Object.fromEntries(formData.entries());

  try {
    await login(account);
    location.reload();
  } catch (error) {
    showAlert("error", error.message, loginForm);
  }
}

export function setLoginListener() {
  const loginBtn = document.querySelector(".auth-login-btn");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      isLoggedIn() ? (location.href = "/profile/") : openModal("login");
    });
  }
}
