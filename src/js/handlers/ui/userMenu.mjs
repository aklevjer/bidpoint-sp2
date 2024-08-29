import { toggleNav } from "./index.mjs";

export function toggleUserMenu(event) {
  event.stopPropagation();

  const userMenu = document.querySelector(".user-menu");
  const userMenuBtn = document.querySelector(".user-menu-btn");
  const userMenuIcon = document.querySelector(".user-menu-icon");
  const navBtn = document.querySelector(".nav-btn");

  const isNavOpen = navBtn.getAttribute("aria-expanded") === "true";
  const isUserMenuOpen = userMenuBtn.getAttribute("aria-expanded") === "true";

  // Close mobile menu if it's open
  if (isNavOpen && !isUserMenuOpen) {
    toggleNav();
  }

  userMenuBtn.setAttribute("aria-expanded", !isUserMenuOpen);

  userMenuIcon.classList.toggle("bx-chevron-down", isUserMenuOpen);
  userMenuIcon.classList.toggle("bx-chevron-up", !isUserMenuOpen);
  userMenu.classList.toggle("hidden", isUserMenuOpen);

  if (!isUserMenuOpen) {
    document.addEventListener("click", toggleUserMenu);
  } else {
    document.removeEventListener("click", toggleUserMenu);
  }
}
