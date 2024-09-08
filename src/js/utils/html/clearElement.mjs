export function clearElement(element) {
  if (element) {
    while (element.firstChild) {
      element.firstChild.remove();
    }
  }
}
