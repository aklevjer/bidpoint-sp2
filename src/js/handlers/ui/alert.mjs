import { createAlert } from "../../templates/ui/index.mjs";

export function showAlert(alertType, alertMessage, parentElement = null, shouldReplace = false) {
  const existingAlert = document.querySelector(".alert");

  if (existingAlert) {
    existingAlert.remove();
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
