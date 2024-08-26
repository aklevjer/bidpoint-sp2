export function getTemplateClone(templateName) {
  const template = document.querySelector(`#${templateName}-template`);

  if (template) {
    return template.content.cloneNode(true);
  }

  throw new Error(`Template not found: ${templateName}`);
}
