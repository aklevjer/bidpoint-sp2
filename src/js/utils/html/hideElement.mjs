export function hideElement(element, shouldHide = true) {
  element.classList.toggle("hidden", shouldHide);
}
