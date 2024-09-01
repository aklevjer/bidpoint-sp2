export function isLengthValid(string, minLength, maxLength = Infinity) {
  const strLength = string.trim().length;
  return strLength >= minLength && strLength <= maxLength;
}
