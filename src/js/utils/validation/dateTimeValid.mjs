/**
 * Checks if the provided datetime string represents a future date and time.
 *
 * @param {string} dateTimeString - A string representing the date and time to be checked.
 * @returns {boolean} `true` if the provided datetime is in the future, `false` otherwise.
 */
export function isDateTimeValid(dateTimeString) {
  const date = new Date(dateTimeString);
  return date > new Date();
}
