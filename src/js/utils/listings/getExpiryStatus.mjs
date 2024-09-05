export function getExpiryStatus(dateString) {
  const dateNow = new Date();
  const endDate = new Date(dateString);
  const diff = endDate - dateNow;

  return diff <= 0 || diff < 1000 * 60 * 60 * 24;
}
