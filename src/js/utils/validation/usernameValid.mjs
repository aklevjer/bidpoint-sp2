/**
 * Validates whether the provided username contains only letters, numbers, and underscores.
 *
 * @param {string} username - The username to be validated.
 * @returns {boolean} `true` if the username contains only letters, numbers, and underscores, `false` otherwise.
 */
export function isUsernameValid(username) {
  const usernamePattern = /^[\w]+$/;
  return usernamePattern.test(username);
}
