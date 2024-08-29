import { toggleNav } from "../index.mjs";
import { updateHeader } from "./index.mjs";

export function setupHeader() {
  const navBtn = document.querySelector(".nav-btn");

  if (navBtn) {
    navBtn.addEventListener("click", toggleNav);
  }

  updateHeader();
}
