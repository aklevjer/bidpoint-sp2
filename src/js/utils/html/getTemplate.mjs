/**
 * Retrieves and clones a template from DOM.
 *
 * @param {string} templateName - The name of the template element to be cloned.
 *
 * @returns {DocumentFragment} A cloned document fragment of the template content.
 * @throws {Error} If the template element is not found in the DOM.
 */
export function getTemplateClone(templateName) {
  const template = document.querySelector(`#${templateName}-template`);

  if (template) {
    return template.content.cloneNode(true);
  }

  throw new Error(`Template not found: ${templateName}`);
}
