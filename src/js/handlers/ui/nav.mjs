export function toggleNav() {
  const nav = document.querySelector(".nav");
  const navBtn = document.querySelector(".nav-btn");
  const navIcon = document.querySelector(".nav-icon");
  const isNavOpen = navBtn.getAttribute("aria-expanded") === "true";

  navBtn.setAttribute("aria-expanded", !isNavOpen);

  navIcon.classList.toggle("bx-menu", isNavOpen);
  navIcon.classList.toggle("bx-x", !isNavOpen);
  nav.classList.toggle("hidden", isNavOpen);
}
