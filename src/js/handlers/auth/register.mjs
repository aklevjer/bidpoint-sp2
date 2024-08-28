import { isFormValid } from "../../utils/validation/index.mjs";
import { register, login } from "../../api/auth/index.mjs";
import { closeModal } from "../ui/modal/index.mjs";
import { updateHeader } from "../ui/index.mjs";

export async function handleRegister(event) {
  event.preventDefault();

  const registerForm = event.target;

  if (!isFormValid(registerForm)) {
    return;
  }

  const formData = new FormData(registerForm);
  const account = Object.fromEntries(formData.entries());

  try {
    await register(account);
    const { email, password } = account;

    await login({ email, password });
    closeModal();
    updateHeader();
  } catch (error) {
    console.error(error);
  }
}
