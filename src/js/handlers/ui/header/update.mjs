import { isLoggedIn } from "../../../utils/misc/index.mjs";
import { clearElement } from "../../../utils/html/index.mjs";
import { setupLoggedInHeader, setupLoggedOutHeader } from "./index.mjs";

export function updateHeader() {
  const userContainer = document.querySelector(".user-container");

  if (!userContainer) return;

  clearElement(userContainer);

  if (isLoggedIn()) {
    setupLoggedInHeader(userContainer);
  } else {
    setupLoggedOutHeader(userContainer);
  }
}
