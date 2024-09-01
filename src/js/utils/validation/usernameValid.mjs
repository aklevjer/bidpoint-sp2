export function isUsernameValid(username) {
  const usernamePattern = /^[\w]+$/;
  const maxLength = 20;
  const minLength = 1;

  const usernameLength = username.trim().length;

  const patternValid = usernamePattern.test(username);
  const lengthValid =
    usernameLength <= maxLength && usernameLength >= minLength;

  return patternValid && lengthValid;
}
