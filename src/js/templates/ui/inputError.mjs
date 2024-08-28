import { getTemplateClone } from "../../utils/html/index.mjs";

export function createInputErrorTemplate(errorMsg) {
  const inputErrorClone = getTemplateClone("input-error");
  const inputErrorMsg = inputErrorClone.querySelector(".input-error-msg");

  inputErrorMsg.textContent = errorMsg;

  return inputErrorClone;
}
