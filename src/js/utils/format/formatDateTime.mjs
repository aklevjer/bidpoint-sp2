/**
 * Formats the current date (or date with added months) for input type="datetime-local".
 *
 * @param {number} [monthsToAdd=0] - Number of months to add to the current date (defaults to 0).
 * @returns {string} The formatted datetime string (YYYY-MM-DDTHH:MM).
 */
export function formatDateTime(monthsToAdd = 0) {
  const date = new Date();
  date.setMonth(date.getMonth() + monthsToAdd);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}
