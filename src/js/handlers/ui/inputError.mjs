import { createInputError } from "../../templates/ui/index.mjs";

export function toggleInputError(inputElement, errorMsg, shouldShow) {
  const inputContainer = inputElement.closest(".input-container");
  const prevInputError = inputContainer.querySelector(".input-error");

  if (!shouldShow) {
    if (prevInputError) {
      prevInputError.remove();
    }
  } else if (!prevInputError) {
    const inputErrorClone = createInputError(errorMsg);
    inputContainer.appendChild(inputErrorClone);
  }

  inputElement.classList.toggle("border-red", shouldShow);
  inputElement.classList.toggle("focus:ring-red", shouldShow);
}
