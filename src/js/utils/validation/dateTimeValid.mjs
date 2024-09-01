export function isDateTimeValid(dateTimeString) {
  const date = new Date(dateTimeString);
  return date > new Date();
}
