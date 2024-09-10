import { createAlert } from "../../templates/ui/index.mjs";

/**
 * Shows an alert message on screen.
 *
 * @param {string} alertType - The type of alert to be shown (i.e. "error", "success").
 * @param {string} alertMessage - The message to display in the alert.
 * @param {HTMLElement} [parentElement] - The element to show the alert in, if provided. If not provided, the alert is displayed as a toast (Optional).
 * @param {boolean} [shouldReplace=false] - Indicates whether the alert should replace the `parentElement` (Optional).
 *
 * @example
 * ```js
 * // Displaying an error toast
 * showAlert("error", "An error occurred!");
 * ```
 */
export function showAlert(alertType, alertMessage, parentElement = null, shouldReplace = false) {
  const existingAlertContent = document.querySelector(".alert-content");

  if (existingAlertContent) {
    existingAlertContent.parentElement.remove();
  }

  const isToast = parentElement === null;
  const { alertClone, alertContainer } = createAlert(alertType, alertMessage, isToast);

  if (isToast) {
    document.body.append(alertClone);
    setTimeout(() => alertContainer.remove(), 3000);
    return;
  }

  if (shouldReplace) {
    parentElement.replaceWith(alertClone);
  } else {
    parentElement.prepend(alertClone);
  }
}
