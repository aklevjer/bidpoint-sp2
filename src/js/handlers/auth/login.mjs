import { login } from "../../api/auth/index.mjs";
import { closeModal } from "../ui/modal/index.mjs";

export async function handleLogin(event) {
  event.preventDefault();

  const loginForm = event.target;
  const formData = new FormData(loginForm);
  const account = Object.fromEntries(formData.entries());

  try {
    await login(account);
    closeModal();
  } catch (error) {
    console.error(error);
  }
}
