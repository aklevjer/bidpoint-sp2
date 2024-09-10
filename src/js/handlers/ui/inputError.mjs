import { createInputError } from "../../templates/ui/index.mjs";

/**
 * Toggles the display of an input error message.
 *
 * @param {HTMLElement} inputElement - The input element to display the error message for.
 * @param {string} errorMsg - The error message to display.
 * @param {boolean} shouldShow - Whether or not to show the error message.
 */
export function toggleInputError(inputElement, errorMsg, shouldShow) {
  const inputContainer = inputElement.closest(".input-container");
  const existingError = inputContainer.querySelector(".input-error");

  if (existingError) {
    existingError.remove();
  }

  if (shouldShow) {
    const newError = createInputError(errorMsg);
    inputContainer.appendChild(newError);
  }

  inputElement.classList.toggle("border-red", shouldShow);
  inputElement.classList.toggle("focus:ring-red", shouldShow);
}
