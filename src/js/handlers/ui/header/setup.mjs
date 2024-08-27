import { toggleNav } from "../index.mjs";
import { openModal } from "../modal/index.mjs";

export function setupHeader() {
  const navBtn = document.querySelector("#nav-btn");
  const loginBtn = document.querySelector("#login-btn");

  if (navBtn) {
    navBtn.addEventListener("click", toggleNav);
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", () => openModal("login"));
  }
}
