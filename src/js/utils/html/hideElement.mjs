/**
 * Toggles the visibility of an element by adding or removing the "hidden" class.
 *
 * @param {HTMLElement} element - The element whose visibility is to be toggled.
 * @param {boolean} [shouldHide=true] - Whether to hide or show the element (defaults to true).
 */
export function hideElement(element, shouldHide = true) {
  if (element) {
    element.classList.toggle("hidden", shouldHide);
  }
}
