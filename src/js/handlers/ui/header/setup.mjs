import { toggleNav } from "../index.mjs";
import { openModal } from "../modal/index.mjs";
import { handleLogout } from "../../auth/index.mjs";
import { updateHeader } from "./index.mjs";

export function setupHeader() {
  const navBtn = document.querySelector(".nav-btn");
  const loginBtn = document.querySelector(".login-btn");
  const logoutBtn = document.querySelector(".logout-btn");

  if (navBtn) {
    navBtn.addEventListener("click", toggleNav);
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", () => openModal("login"));
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", handleLogout);
  }

  updateHeader();
}
