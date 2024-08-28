export function isLengthValid(string, length) {
  const strLength = string.trim().length;
  return strLength >= length;
}
