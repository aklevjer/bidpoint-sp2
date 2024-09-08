export function hideElement(element, shouldHide = true) {
  if (element) {
    element.classList.toggle("hidden", shouldHide);
  }
}
