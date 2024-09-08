import { getTemplateClone } from "../../utils/html/index.mjs";

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
