import { register, login } from "../../api/auth/index.mjs";
import { closeModal } from "../ui/modal/index.mjs";

export async function handleRegister(event) {
  event.preventDefault();

  const registerForm = event.target;
  const formData = new FormData(registerForm);
  const account = Object.fromEntries(formData.entries());

  try {
    await register(account);
    const { email, password } = account;

    await login({ email, password });
    closeModal();
  } catch (error) {
    console.error(error);
  }
}
