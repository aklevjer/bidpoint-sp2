import { isLoggedIn } from "../../utils/misc/index.mjs";
import { openModal } from "../ui/modal/index.mjs";

function handleInterceptLink(event) {
  if (!isLoggedIn()) {
    event.preventDefault();
    openModal("login");
  }
}

export function setInterceptListeners() {
  const interceptLinks = document.querySelectorAll(".login-required");
  interceptLinks.forEach((link) => link.addEventListener("click", handleInterceptLink));
}
