import { isUsernameValid, isEmailValid, isLengthValid } from "./index.mjs";
import { toggleInputError } from "../../handlers/ui/index.mjs";

export function validateInput(inputElement) {
  let isValid = false;
  let message = "";

  switch (inputElement.name) {
    case "name":
      isValid = isUsernameValid(inputElement.value);
      message = "Use only letters, numbers, and _ (max 20 chars)";
      break;

    case "email":
      isValid = isEmailValid(inputElement.value);
      message = "Please enter a valid @stud.noroff.no email";
      break;

    case "password":
      isValid = isLengthValid(inputElement.value, 8);
      message = "Password must be at least 8 characters";
      break;
  }

  toggleInputError(inputElement, message, !isValid);

  return isValid;
}
