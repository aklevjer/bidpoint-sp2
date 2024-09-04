import { createInputError } from "../../templates/ui/index.mjs";

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
