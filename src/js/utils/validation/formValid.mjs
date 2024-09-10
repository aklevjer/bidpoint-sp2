import { validateInput } from "./index.mjs";

/**
 * Validates a form by checking each input and textarea element within it.
 *
 * @param {HTMLElement} form - The form element to be validated.
 * @returns {boolean} `true` if all inputs and textareas in the form are valid, `false` otherwise.
 */
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
