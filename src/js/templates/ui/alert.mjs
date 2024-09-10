import { getTemplateClone } from "../../utils/html/index.mjs";

/**
 * Creates and populates an alert template.
 *
 * @param {string} alertType - The type of alert (i.e. "error", "success").
 * @param {string} alertMessage - The message to display in the alert.
 * @param {boolean} isToast - Indicates if the alert should be a toast or not.
 *
 * @returns {Object} An object containing the cloned alert template and the alert container element.
 */
export function createAlert(alertType, alertMessage, isToast) {
  const alertClone = getTemplateClone("alert");
  const alertContainer = alertClone.querySelector(".alert-container");
  const alertContent = alertClone.querySelector(".alert-content");
  const alertIcon = alertClone.querySelector(".alert-icon");
  const alertMsg = alertClone.querySelector(".alert-message");

  const isError = alertType === "error";

  const iconClass = isError ? "bx-error-circle" : "bx-check-circle";
  const iconColor = isError ? "text-red" : "text-green";
  const borderWidth = isToast ? "border-4" : "border-2";
  const borderColor = isError ? "border-red" : "border-green";

  alertContent.classList.add(borderWidth, borderColor);
  alertIcon.classList.add("bx", iconClass, iconColor);
  alertMsg.textContent = alertMessage;

  if (!isToast) {
    alertContainer.classList.remove(...alertContainer.classList);
  }

  return { alertClone, alertContainer };
}
