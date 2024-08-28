import { createInputErrorTemplate } from "../../templates/ui/index.mjs";

export function toggleInputError(inputElement, errorMsg, shouldShow) {
  const inputContainer = inputElement.parentElement;
  const prevInputError = inputContainer.querySelector(".input-error");

  if (!shouldShow) {
    if (prevInputError) {
      prevInputError.remove();
    }
  } else if (!prevInputError) {
    const inputErrorClone = createInputErrorTemplate(errorMsg);
    inputContainer.appendChild(inputErrorClone);
  }

  inputElement.classList.toggle("border-red", shouldShow);
  inputElement.classList.toggle("focus:ring-red", shouldShow);
}
