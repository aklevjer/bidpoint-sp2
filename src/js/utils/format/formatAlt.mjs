/**
 * Trims the provided text to a maximum length of 100 characters for alt text, adding ellipsis if necessary.
 *
 * @param {string} text - The text to be formatted.
 * @returns {string} The formatted text, truncated to fit within 100 characters if needed.
 */
export function formatAltText(text) {
  const maxLength = 100;
  const ellipsis = "...";

  if (text.length > maxLength) {
    return text.slice(0, maxLength - ellipsis.length) + ellipsis;
  } else {
    return text;
  }
}
