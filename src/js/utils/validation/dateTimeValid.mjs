/**
 * Checks if the provided datetime string represents a future date and time within one year.
 *
 * @param {string} dateTime - A string representing the date and time to be checked.
 * @returns {boolean} `true` if the provided datetime is within one year in the future, `false` otherwise.
 */
export function isDateTimeValid(dateTime) {
  const date = new Date(dateTime);
  const now = new Date();
  const oneYearFromNow = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());

  return date > now && date <= oneYearFromNow;
}
