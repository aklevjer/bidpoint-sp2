import { isFormValid } from "../../utils/validation/index.mjs";
import { login } from "../../api/auth/index.mjs";
import { isLoggedIn } from "../../utils/misc/index.mjs";
import { openModal } from "../ui/modal/index.mjs";
import { showAlert } from "../ui/index.mjs";

/**
 * Logs in to an account when the login form is submitted.
 * Reloads the page on successful login.
 * Displays an error alert if login fails.
 *
 * @param {Event} event - The event object representing the login form submission.
 */
export async function handleLogin(event) {
  event.preventDefault();

  const loginForm = event.target;

  if (!isFormValid(loginForm)) return;

  const submitBtn = event.submitter;
  submitBtn.disabled = true;

  const formData = new FormData(loginForm);
  const account = Object.fromEntries(formData.entries());

  try {
    await login(account);
    location.reload();
  } catch (error) {
    submitBtn.disabled = false;
    showAlert("error", error.message, loginForm);
  }
}

/**
 * Sets up an event listener for the login button to open the login modal.
 */
export function setLoginListener() {
  const loginBtn = document.querySelector(".auth-login-btn");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      isLoggedIn() ? (location.href = "/profile/") : openModal("login");
    });
  }
}
