import { validateInput } from "./index.mjs";

export function isFormValid(form) {
  const inputElements = form.querySelectorAll("input, textarea");
  let allInputsValid = true;

  inputElements.forEach((inputElement) => {
    const inputValid = validateInput(inputElement);
    if (!inputValid) {
      allInputsValid = false;
    }
  });

  return allInputsValid;
}
