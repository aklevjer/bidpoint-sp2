import { toggleInputError } from "../../handlers/ui/index.mjs";
import {
  isUsernameValid,
  isEmailValid,
  isLengthValid,
  isDateTimeValid,
  isAmountValid,
} from "./index.mjs";

/**
 * Validates an input value based on its type and specific criteria.
 * Displays or hides an error message on the input element depending on the validation result.
 *
 * @param {HTMLElement} inputElement - The input or textarea element to be validated.
 * @returns {boolean} `true` if the input value is valid, `false` otherwise.
 */
export function validateInput(inputElement) {
  const { name, value } = inputElement;

  let isValid = false;
  let message = "";

  switch (name) {
    case "name":
      isValid = isUsernameValid(value) && isLengthValid(value, 1, 20);
      message = "Use only letters, numbers, and _ (max 20 chars)";
      break;

    case "email":
      isValid = isEmailValid(value);
      message = "Please enter a valid @stud.noroff.no email";
      break;

    case "password":
      isValid = isLengthValid(value, 8);
      message = "Password must be at least 8 characters";
      break;

    case "title":
      isValid = isLengthValid(value, 1, 280);
      message = "Title must be 1 to 280 characters";
      break;

    case "endsAt":
      isValid = isDateTimeValid(value);
      message = "Select a future date and time";
      break;

    case "description":
      isValid = isLengthValid(value, 0, 280);
      message = "Description cannot be more than 280 characters";
      break;

    case "amount":
      isValid = isAmountValid(value);
      message = "Please enter a number greater than 0";
      break;

    default:
      isValid = true;
      break;
  }

  toggleInputError(inputElement, message, !isValid);

  return isValid;
}
