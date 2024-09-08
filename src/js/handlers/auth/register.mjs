import { isFormValid } from "../../utils/validation/index.mjs";
import { register, login } from "../../api/auth/index.mjs";
import { openModal } from "../ui/modal/index.mjs";
import { showAlert } from "../ui/index.mjs";

export async function handleRegister(event) {
  event.preventDefault();

  const registerForm = event.target;

  if (!isFormValid(registerForm)) return;

  const formData = new FormData(registerForm);
  const account = Object.fromEntries(formData.entries());

  try {
    await register(account);
    const { email, password } = account;

    await login({ email, password });
    location.reload();
  } catch (error) {
    showAlert("error", error.message, registerForm);
  }
}

export function setRegisterListener() {
  const registerBtn = document.querySelector(".register-btn");

  if (registerBtn) {
    registerBtn.addEventListener("click", () => openModal("register"));
  }
}
