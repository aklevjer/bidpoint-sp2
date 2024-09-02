export function isUsernameValid(username) {
  const usernamePattern = /^[\w]+$/;
  return usernamePattern.test(username);
}
