import { isFormValid } from "../../utils/validation/index.mjs";
import { register, login } from "../../api/auth/index.mjs";
import { showAlert } from "../ui/index.mjs";

/**
 * Registers a new account when the registration form is submitted and logs in the user.
 * Reloads the page on successful registration and login.
 * Displays an error alert if registration or login fails.
 *
 * @param {Event} event - The event object representing the register form submission.
 */
export async function handleRegister(event) {
  event.preventDefault();

  const registerForm = event.target;

  if (!isFormValid(registerForm)) return;

  const submitBtn = event.submitter;
  submitBtn.disabled = true;

  const formData = new FormData(registerForm);
  const account = Object.fromEntries(formData.entries());

  try {
    await register(account);
    const { email, password } = account;

    await login({ email, password });
    location.reload();
  } catch (error) {
    submitBtn.disabled = false;
    showAlert("error", error.message, registerForm);
  }
}
