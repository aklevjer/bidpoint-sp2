/**
 * Determines if the given date has expired or is within the last 24 hours.
 *
 * @param {string} dateString - A string representing the date and time to be checked.
 * @returns {boolean} `true` if the date is either in the past or within the next 24 hours, otherwise, `false`.
 */
export function getExpiryStatus(dateString) {
  const dateNow = new Date();
  const endDate = new Date(dateString);
  const diff = endDate - dateNow;

  return diff <= 0 || diff < 1000 * 60 * 60 * 24;
}
