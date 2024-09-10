/**
 * Validates whether the provided email ends with "@stud.noroff.no".
 *
 * @param {string} email - The email address to be validated.
 * @returns {boolean} `true` if the email ends with "@stud.noroff.no", `false` otherwise.
 */
export function isEmailValid(email) {
  const emailPattern = /^[\w\-.]+@stud\.noroff\.no$/;
  return emailPattern.test(email);
}
