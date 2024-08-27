export function toggleNav(event) {
  const navBtn = event.currentTarget;
  const menuIcon = navBtn.firstElementChild;
  const nav = document.querySelector("#nav");
  const isExpanded = navBtn.getAttribute("aria-expanded") === "true";

  navBtn.setAttribute("aria-expanded", !isExpanded);

  menuIcon.classList.toggle("bx-menu", isExpanded);
  menuIcon.classList.toggle("bx-x", !isExpanded);
  nav.classList.toggle("hidden", isExpanded);
}
