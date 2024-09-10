/**
 * Validates if the length of a string is within the specified minimum and maximum limits.
 *
 * @param {string} string - The string to be validated.
 * @param {number} minLength - The minimum allowable length.
 * @param {number} [maxLength=Infinity] - The maximum allowable length (defaults to infinity).
 *
 * @returns {boolean} `true` if the string's length is within the specified range, `false` otherwise.
 */
export function isLengthValid(string, minLength, maxLength = Infinity) {
  const strLength = string.trim().length;
  return strLength >= minLength && strLength <= maxLength;
}
