import { getTemplateClone } from "../../utils/html/index.mjs";

/**
 * Creates and populates an input error message template.
 *
 * @param {string} errorMsg - The error message to display.
 * @returns {DocumentFragment} The populated input error message template.
 */
export function createInputError(errorMsg) {
  const inputErrorClone = getTemplateClone("input-error");
  const inputErrorMsg = inputErrorClone.querySelector(".input-error-msg");

  inputErrorMsg.textContent = errorMsg;

  return inputErrorClone;
}
